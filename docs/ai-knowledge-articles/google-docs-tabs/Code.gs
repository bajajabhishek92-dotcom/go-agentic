/**
 * Build one Google Doc with a tab per AI knowledge article.
 *
 * Setup (once):
 * 1. Upload articles.json from this folder to your Google Drive.
 * 2. script.google.com → New project → paste this file as Code.gs
 * 3. Services (+) → add "Google Docs API" (Advanced Docs service)
 * 4. Set ARTICLES_JSON_FILE_ID below to the Drive file id of articles.json
 *    (open the file in Drive → URL has /d/<FILE_ID>/)
 * 5. Run buildAiKnowledgeDoc → authorize → wait (can take a few minutes)
 *
 * Result: a Doc titled "AI Knowledge Articles" with corpus parent tabs and
 * one child tab per article (86 articles; Docs allows up to 100 tabs).
 */

// <<< paste your Drive file id for articles.json >>>
var ARTICLES_JSON_FILE_ID = 'PASTE_FILE_ID_HERE';

var CORPUS_ORDER = [
  'IBM',
  'Sequoia',
  'OpenAI News',
  'DeepMind Blog',
  'Hugging Face Blog',
  'AWS ML Blog'
];

function buildAiKnowledgeDoc() {
  if (!ARTICLES_JSON_FILE_ID || ARTICLES_JSON_FILE_ID === 'PASTE_FILE_ID_HERE') {
    throw new Error('Set ARTICLES_JSON_FILE_ID to the Drive file id of articles.json');
  }

  var payload = JSON.parse(DriveApp.getFileById(ARTICLES_JSON_FILE_ID).getBlob().getDataAsString('UTF-8'));
  var articles = payload.articles || [];
  if (!articles.length) throw new Error('articles.json has no articles');

  var byCorpus = {};
  articles.forEach(function (a) {
    var label = a.corpusLabel || 'Other';
    if (!byCorpus[label]) byCorpus[label] = [];
    byCorpus[label].push(a);
  });

  var labels = CORPUS_ORDER.filter(function (l) { return byCorpus[l]; });
  Object.keys(byCorpus).forEach(function (l) {
    if (labels.indexOf(l) === -1) labels.push(l);
  });

  var totalTabs = 1 + labels.length + articles.length; // Index + parents + articles
  if (totalTabs > 100) {
    throw new Error('Would create ' + totalTabs + ' tabs; Google Docs max is 100. Reduce articles.');
  }

  var docTitle = payload.docTitle || 'AI Knowledge Articles';
  var doc = DocumentApp.create(docTitle);
  var docId = doc.getId();
  Logger.log('Created doc: https://docs.google.com/document/d/' + docId + '/edit');

  // Rename default first tab to Index
  Docs.Documents.batchUpdate({
    requests: [{
      updateDocumentTabProperties: {
        tabId: 't.0',
        tabProperties: { title: 'Index' },
        fields: 'title'
      }
    }]
  }, docId);

  // Create corpus parent tabs, then article child tabs
  var parentIds = {};
  var createReqs = labels.map(function (label) {
    return { addDocumentTab: { tabProperties: { title: label } } };
  });
  var createResp = Docs.Documents.batchUpdate({ requests: createReqs }, docId);
  createResp.replies.forEach(function (reply, i) {
    parentIds[labels[i]] = reply.addDocumentTab.tabProperties.tabId;
  });

  var childReqs = [];
  var childMeta = []; // {tabId filled later, article}
  labels.forEach(function (label) {
    byCorpus[label].forEach(function (article) {
      childReqs.push({
        addDocumentTab: {
          tabProperties: {
            title: article.tab || article.title,
            parentTabId: parentIds[label]
          }
        }
      });
      childMeta.push({ article: article });
    });
  });

  // batchUpdate request size limits — chunk child tab creation
  var chunkSize = 20;
  var childTabIds = [];
  for (var i = 0; i < childReqs.length; i += chunkSize) {
    var slice = childReqs.slice(i, i + chunkSize);
    var resp = Docs.Documents.batchUpdate({ requests: slice }, docId);
    resp.replies.forEach(function (reply) {
      childTabIds.push(reply.addDocumentTab.tabProperties.tabId);
    });
  }
  childMeta.forEach(function (meta, idx) {
    meta.tabId = childTabIds[idx];
  });

  // Fill Index tab
  doc = DocumentApp.openById(docId);
  var indexBody = doc.getTab('t.0').asDocumentTab().getBody();
  indexBody.clear();
  indexBody.appendParagraph(docTitle).setHeading(DocumentApp.ParagraphHeading.HEADING1);
  indexBody.appendParagraph(
    articles.length + ' articles in one Doc — use the tab bar (or tab list) to switch. ' +
    'Corpus folders are parent tabs; each article is a child tab.'
  );
  labels.forEach(function (label) {
    indexBody.appendParagraph(label + ' (' + byCorpus[label].length + ')')
      .setHeading(DocumentApp.ParagraphHeading.HEADING2);
    byCorpus[label].forEach(function (a) {
      indexBody.appendListItem(a.title);
    });
  });

  // Fill each article tab (chunked to avoid timeouts)
  childMeta.forEach(function (meta, idx) {
    fillArticleTab_(docId, meta.tabId, meta.article);
    if ((idx + 1) % 10 === 0) {
      Logger.log('Filled ' + (idx + 1) + '/' + childMeta.length + ' article tabs');
    }
  });

  Logger.log('Done. Open: https://docs.google.com/document/d/' + docId + '/edit');
}

function fillArticleTab_(docId, tabId, article) {
  var doc = DocumentApp.openById(docId);
  var body = doc.getTab(tabId).asDocumentTab().getBody();
  body.clear();
  appendMarkdownRough_(body, article.body || article.title || '');
}

/**
 * Minimal Markdown → Docs: # / ## / ### headings, paragraphs, bullets.
 * Good enough for these articles; not a full MD renderer.
 */
function appendMarkdownRough_(body, md) {
  var lines = String(md).replace(/\r\n/g, '\n').split('\n');
  var i = 0;
  while (i < lines.length) {
    var line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    var hm = /^(#{1,3})\s+(.*)$/.exec(line);
    if (hm) {
      var level = hm[1].length;
      var heading = level === 1
        ? DocumentApp.ParagraphHeading.HEADING1
        : (level === 2 ? DocumentApp.ParagraphHeading.HEADING2 : DocumentApp.ParagraphHeading.HEADING3);
      body.appendParagraph(stripMdInline_(hm[2])).setHeading(heading);
      i++;
      continue;
    }
    if (/^\s*[-*]\s+/.test(line)) {
      body.appendListItem(stripMdInline_(line.replace(/^\s*[-*]\s+/, '')));
      i++;
      continue;
    }
    if (/^\s*\d+\.\s+/.test(line)) {
      body.appendListItem(stripMdInline_(line.replace(/^\s*\d+\.\s+/, '')))
        .setGlyphType(DocumentApp.GlyphType.NUMBER);
      i++;
      continue;
    }
    // gather paragraph
    var buf = [line];
    i++;
    while (i < lines.length && lines[i].trim() && !/^#{1,3}\s+/.test(lines[i]) && !/^\s*[-*]\s+/.test(lines[i]) && !/^\s*\d+\.\s+/.test(lines[i])) {
      buf.push(lines[i]);
      i++;
    }
    body.appendParagraph(stripMdInline_(buf.join(' ')));
  }
}

function stripMdInline_(s) {
  return String(s)
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)');
}
