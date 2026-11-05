/* Shared Atlas reader shell: nav chrome, mobile drawer, article renderer. */
(function () {
  const C = window.ATLAS_CONTENT || null;
  const page = document.body.dataset.page || "start";

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function $all(sel, root) {
    return Array.from((root || document).querySelectorAll(sel));
  }

  function asOf() {
    return (C && C.as_of) || "2026-11-05";
  }

  function buildChrome() {
    const asofEls = $all("[data-asof]");
    asofEls.forEach((el) => {
      el.textContent = "AS OF " + asOf();
    });
    $all('.primary-nav a[data-nav]').forEach((a) => {
      if (a.dataset.nav === page) a.setAttribute("aria-current", "page");
    });
    $all('.sidebar a[data-nav]').forEach((a) => {
      if (a.dataset.nav === page) a.setAttribute("aria-current", "page");
    });

    const btn = $("#menu-btn");
    const side = $("#sidebar");
    const backdrop = $("#sidebar-backdrop");
    function close() {
      side && side.classList.remove("is-open");
      backdrop && backdrop.classList.remove("is-open");
      btn && btn.setAttribute("aria-expanded", "false");
    }
    function open() {
      side && side.classList.add("is-open");
      backdrop && backdrop.classList.add("is-open");
      btn && btn.setAttribute("aria-expanded", "true");
    }
    if (btn && side) {
      btn.addEventListener("click", () => {
        side.classList.contains("is-open") ? close() : open();
      });
      backdrop && backdrop.addEventListener("click", close);
      side.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    }
  }

  function articleById(id) {
    return C && C.articles && C.articles[id];
  }

  function renderSources(art, host) {
    if (!host) return;
    const sources = art.sources || [];
    if (!sources.length && !art.sources_html) {
      host.hidden = true;
      return;
    }
    host.hidden = false;
    const ul = host.querySelector(".src-list");
    if (ul && sources.length) {
      ul.innerHTML = sources
        .map(
          (s) =>
            `<li><a href="${s.url}" target="_blank" rel="noopener">${escapeHtml(
              s.title || s.url
            )}</a></li>`
        )
        .join("");
    } else if (art.sources_html) {
      host.querySelector(".src-body").innerHTML = art.sources_html;
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /** Truncate for list cards at a sentence end; never mid-word. */
  function sentenceSnippet(text, maxLen) {
    maxLen = maxLen || 320;
    const cleaned = String(text || "").replace(/\s+/g, " ").trim();
    if (!cleaned) return "";
    if (cleaned.length <= maxLen) return cleaned;
    const window = cleaned.slice(0, maxLen + 1);
    let best = -1;
    for (let i = 0; i < window.length; i++) {
      const ch = window[i];
      if ((ch === "." || ch === "!" || ch === "?" || ch === "…") && (i === window.length - 1 || /\s/.test(window[i + 1]))) {
        best = i + 1;
      }
    }
    if (best >= 60) return cleaned.slice(0, best).trim();
    let cut = cleaned.slice(0, maxLen);
    if (!/\s$/.test(cut) && cut.includes(" ")) cut = cut.replace(/\s+\S*$/, "");
    return cut.replace(/[ ,;:-]+$/, "") + "…";
  }

  function topicsReaderHref(art) {
    // Prefer in-app Topics pane (self-contained) over articles.html, which
    // some CDNs serve as text/plain and dump as source.
    if (!art) return "./topics.html";
    const key = art.html_id || art.id;
    return key ? `./topics.html#${key}` : "./topics.html";
  }

  function showArticle(id, opts) {
    opts = opts || {};
    const art = articleById(id);
    const empty = $("#article-empty");
    const wrap = $("#article-view");
    if (!art || !wrap) return;
    if (empty) empty.hidden = true;
    wrap.hidden = false;
    $("#article-title").textContent = art.title;
    $("#article-body").innerHTML = art.html || "";
    const meta = $("#article-meta");
    if (meta) {
      const reader = topicsReaderHref(art);
      meta.innerHTML = `<span class="asof">AS OF ${asOf()}</span><a class="reader-link" href="${reader}">Open in Topics reader</a>`;
    }
    renderSources(art, $("#sources-panel"));
    if (opts.scroll !== false) {
      wrap.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // sidebar active
    $all(".sidebar a[data-article]").forEach((a) => {
      a.classList.toggle("is-active", a.dataset.article === id);
    });
    if (opts.hash !== false) {
      const hash = opts.hashId || id;
      if (location.hash.replace(/^#/, "") !== hash) {
        history.replaceState(null, "", "#" + hash);
      }
    }
  }

  function fillLaneSidebar(laneKey) {
    const lane = C && C.lanes && C.lanes[laneKey];
    const host = $("#lane-toc");
    if (!lane || !host) return;
    host.innerHTML = lane.articles
      .map(
        (a) =>
          `<a href="#${a.id}" data-article="${a.id}">${escapeHtml(a.title)}</a>`
      )
      .join("");
    host.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        showArticle(a.dataset.article);
      });
    });
  }

  function initTimeline() {
    const host = $("#chrono");
    if (!host || !C) return;
    host.innerHTML = C.timeline_eras
      .map((era) => {
        const here = era.you_are_here
          ? `<span class="you-are-here">YOU ARE HERE</span>`
          : "";
        return `<a class="era-node${era.you_are_here ? " now" : ""}" id="${
          era.id
        }" href="#${era.article}" data-article="${era.article}" data-era="${
          era.id
        }">
          <span class="era-when">${escapeHtml(era.when)}${here}</span>
          <h2>${escapeHtml(era.title)}</h2>
          <p>${escapeHtml(era.blurb)}</p>
        </a>`;
      })
      .join("");
    host.querySelectorAll(".era-node").forEach((node) => {
      node.addEventListener("click", (e) => {
        e.preventDefault();
        $all(".era-node").forEach((n) => n.classList.remove("is-active"));
        node.classList.add("is-active");
        showArticle(node.dataset.article, { hashId: node.dataset.era });
      });
    });
    fillLaneSidebar("timeline");
    // also list deeper teachables under chrono
    const more = $("#timeline-more");
    if (more && C.lanes.timeline) {
      more.innerHTML = C.lanes.timeline.articles
        .map(
          (a) =>
            `<a class="role-row" href="#${a.id}" data-article="${a.id}">
              <span class="role-title">${escapeHtml(a.title)}</span>
              <p class="role-job">${escapeHtml(sentenceSnippet(a.summary))}</p>
            </a>`
        )
        .join("");
      more.querySelectorAll("[data-article]").forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          showArticle(a.dataset.article);
        });
      });
    }
    routeHash();
  }

  function initPlayers() {
    const host = $("#role-grid");
    if (!host || !C) return;
    host.innerHTML = C.player_roles
      .map(
        (r) => `<a class="role-row" id="${r.id}" href="#${r.article}" data-article="${
          r.article
        }" data-role="${r.id}">
          <span class="role-title">${escapeHtml(r.title)}</span>
          <p class="role-job">${escapeHtml(r.role)}</p>
          <div class="role-constraint">Constraint · ${escapeHtml(
            r.constraint
          )}</div>
        </a>`
      )
      .join("");
    host.querySelectorAll("[data-article]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        showArticle(a.dataset.article, { hashId: a.dataset.role || a.dataset.article });
      });
    });
    fillLaneSidebar("players");
    routeHash();
  }

  function initPolicy() {
    const host = $("#role-grid");
    if (!host || !C) return;
    host.innerHTML = C.policy_regimes
      .map(
        (r) => `<a class="role-row" id="${r.id}" href="#${r.article}" data-article="${
          r.article
        }" data-regime="${r.id}">
          <span class="role-title">${escapeHtml(r.title)}</span>
          <p class="role-job">${escapeHtml(r.blurb)}</p>
        </a>`
      )
      .join("");
    host.querySelectorAll("[data-article]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        showArticle(a.dataset.article, {
          hashId: a.dataset.regime || a.dataset.article,
        });
      });
    });
    fillLaneSidebar("policy");
    routeHash();
  }

  function initBenchmarks() {
    const body = $("#ledger-body");
    if (!body || !C) return;
    body.innerHTML = C.benchmark_rows
      .map(
        (r) => `<tr id="${r.id}" tabindex="0" data-article="${r.article}" data-row="${
          r.id
        }">
          <td><a class="bm-name" href="#${r.article}">${escapeHtml(
          r.benchmark
        )}</a></td>
          <td>${escapeHtml(r.claims)}</td>
          <td class="mono">${escapeHtml(r.failure)}</td>
          <td class="mono">AS OF ${asOf()}</td>
        </tr>`
      )
      .join("");
    body.querySelectorAll("tr").forEach((tr) => {
      const go = () =>
        showArticle(tr.dataset.article, { hashId: tr.dataset.row });
      tr.addEventListener("click", go);
      tr.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          go();
        }
      });
    });
    fillLaneSidebar("benchmarks");
    routeHash();
  }

  function routeHash() {
    const raw = (location.hash || "").replace(/^#/, "");
    if (!raw) return;
    // era / role / regime / row ids map to articles
    const maps = [
      ...(C.timeline_eras || []).map((e) => [e.id, e.article]),
      ...(C.player_roles || []).map((e) => [e.id, e.article]),
      ...(C.policy_regimes || []).map((e) => [e.id, e.article]),
      ...(C.benchmark_rows || []).map((e) => [e.id, e.article]),
    ];
    const mapped = Object.fromEntries(maps);
    const articleId = mapped[raw] || (C.articles[raw] ? raw : null);
    if (articleId) showArticle(articleId, { hash: false, scroll: true });
    const el = document.getElementById(raw);
    if (el && el.classList.contains("era-node")) {
      $all(".era-node").forEach((n) => n.classList.remove("is-active"));
      el.classList.add("is-active");
    }
  }

  function initTopics() {
    const T = window.ATLAS_TOPICS;
    const Bodies = window.ATLAS_CORPUS_BODIES || {};
    const orientation = C
      ? Object.values(C.articles).map((a) => ({
          title: a.title,
          summary: a.summary,
          corpus:
            a.lane === "timeline"
              ? "AI Timeline"
              : a.lane === "players"
              ? "Market Players"
              : a.lane === "policy"
              ? "Global Policy"
              : a.lane === "benchmarks"
              ? "Agent Benchmarks"
              : "Orientation",
          cluster: "Landscape & Orientation",
          lane: a.lane,
          id: a.id,
          html_id: a.html_id,
          kind: "orientation",
          keywords: [
            a.lane,
            "timeline",
            "players",
            "policy",
            "benchmarks",
            "orientation",
          ],
        }))
      : [];
    const rest = T
      ? T.articles.map((a) => ({
          ...a,
          kind: "corpus",
          keywords: a.keywords || [],
        }))
      : [];
    // Prefer orientation teachables; dedupe by title; keep longer summaries.
    const seen = new Map();
    const all = [];
    for (const a of orientation.concat(rest)) {
      const key = a.title.toLowerCase();
      if (!seen.has(key)) {
        seen.set(key, a);
        all.push(a);
        continue;
      }
      const prev = seen.get(key);
      if ((a.summary || "").length > (prev.summary || "").length) {
        prev.summary = a.summary;
      }
      if (!prev.html_id && a.html_id) prev.html_id = a.html_id;
      if (!prev.id && a.id) prev.id = a.id;
      if (!prev.lane && a.lane) prev.lane = a.lane;
      if (prev.kind !== "orientation" && a.kind === "orientation") {
        prev.kind = "orientation";
      }
    }

    // Index for in-page open: hash key → record
    const byHash = Object.create(null);
    all.forEach((a) => {
      if (a.kind === "orientation" && a.id) byHash[a.id] = a;
      if (a.html_id) byHash[a.html_id] = a;
    });

    const input = $("#topic-q");
    const out = $("#topic-hits");
    const meta = $("#topic-meta");
    const laneHints = $("#lane-hints");
    const browse = $("#topics-browse");
    const wrap = $("#article-view");
    const backBtn = $("#article-back");

    function laneForQuery(q) {
      const qq = q.toLowerCase();
      if (!qq) return null;
      if (/timeline|era|history|chronolog/.test(qq)) return "timeline";
      if (/player|lab|hyperscaler|open.?weight|chip|market/.test(qq))
        return "players";
      if (/policy|govern|nist|eu ai|china|uk |privacy|adm/.test(qq))
        return "policy";
      if (/benchmark|eval|leaderboard|swe-bench|mirrorcode/.test(qq))
        return "benchmarks";
      return null;
    }

    function hashKeyFor(a) {
      if (a.kind === "orientation" && a.id) return a.id;
      return a.html_id || a.id || "";
    }

    /** In-page href only — never .md / blob / CDN raw that dumps source. */
    function inPageHref(a) {
      const key = hashKeyFor(a);
      return key ? `#${key}` : "#top";
    }

    function hideReader() {
      if (wrap) wrap.hidden = true;
      if (browse) browse.hidden = false;
      const sources = $("#sources-panel");
      if (sources) sources.hidden = true;
    }

    function showTopicRecord(a, opts) {
      opts = opts || {};
      if (!a || !wrap) return;
      let title = a.title;
      let bodyHtml = "";
      let metaBits = [];

      if (a.kind === "orientation" && a.id && articleById(a.id)) {
        const art = articleById(a.id);
        title = art.title;
        bodyHtml = art.html || "";
        metaBits.push(`<span class="asof">AS OF ${asOf()}</span>`);
        metaBits.push(`<span>${escapeHtml(art.lane || a.corpus || "")}</span>`);
        if (a.lane) {
          metaBits.push(
            `<a class="reader-link" href="./${a.lane}.html#${a.id}">Open in ${a.lane} lane</a>`
          );
        }
        renderSources(art, $("#sources-panel"));
      } else {
        const body =
          (a.html_id && Bodies[a.html_id]) ||
          (a.id && Bodies[a.id]) ||
          null;
        title = (body && body.title) || a.title;
        bodyHtml =
          (body && body.html) ||
          `<p>${escapeHtml(a.summary || "Full text is not embedded for this entry.")}</p>`;
        metaBits.push(`<span class="asof">AS OF ${asOf()}</span>`);
        metaBits.push(
          `<span>${escapeHtml((body && body.corpus) || a.corpus || "")}</span>`
        );
        const sources = $("#sources-panel");
        if (sources) sources.hidden = true;
      }

      if (browse) browse.hidden = true;
      wrap.hidden = false;
      $("#article-title").textContent = title;
      $("#article-body").innerHTML = bodyHtml;
      const metaEl = $("#article-meta");
      if (metaEl) metaEl.innerHTML = metaBits.join("");

      const key = hashKeyFor(a);
      if (opts.hash !== false && key) {
        if (location.hash.replace(/^#/, "") !== key) {
          history.replaceState(null, "", "#" + key);
        }
      }
      if (opts.scroll !== false) {
        wrap.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    function routeTopicHash() {
      const raw = (location.hash || "").replace(/^#/, "");
      if (!raw || raw === "top") {
        hideReader();
        return;
      }
      const rec = byHash[raw];
      if (rec) showTopicRecord(rec, { hash: false });
      else hideReader();
    }

    function render(q) {
      const qq = (q || "").trim().toLowerCase();
      const lane = laneForQuery(qq);
      if (laneHints) {
        if (lane) {
          const labels = {
            timeline: "Timeline",
            players: "Players",
            policy: "Policy",
            benchmarks: "Benchmarks",
          };
          laneHints.innerHTML = `Orientation match: open the <a href="./${lane}.html"><strong>${labels[lane]}</strong></a> lane—or click a result below to read in this page.`;
          laneHints.hidden = false;
        } else {
          laneHints.hidden = true;
        }
      }
      let hits = all;
      if (qq) {
        hits = all.filter((a) => {
          const hay = [
            a.title,
            a.summary,
            a.corpus,
            a.cluster,
            (a.keywords || []).join(" "),
            a.lane || "",
          ]
            .join(" ")
            .toLowerCase();
          return hay.includes(qq);
        });
      }
      meta.textContent = qq
        ? `${hits.length} of ${all.length} shown`
        : `${all.length} articles · click to read in-page`;
      out.innerHTML = hits
        .slice(0, 80)
        .map((a) => {
          const href = inPageHref(a);
          const key = hashKeyFor(a);
          return `<a class="hit" href="${href}" data-topic-key="${escapeHtml(
            key
          )}">
            <div class="hit-title">${escapeHtml(a.title)}</div>
            <div class="hit-meta">${escapeHtml(a.corpus || "")} · ${escapeHtml(
            a.cluster || ""
          )}</div>
            <p class="hit-sum">${escapeHtml(sentenceSnippet(a.summary || ""))}</p>
          </a>`;
        })
        .join("");

      out.querySelectorAll("a.hit").forEach((el) => {
        el.addEventListener("click", (e) => {
          // Stay on Topics — never navigate to articles.html / .md / CDN raw.
          e.preventDefault();
          const key = el.dataset.topicKey;
          const rec = byHash[key];
          if (rec) showTopicRecord(rec);
        });
      });
    }

    if (backBtn) {
      backBtn.addEventListener("click", () => {
        const base = location.href.split("#")[0];
        if (location.hash) history.replaceState(null, "", base);
        hideReader();
        if (browse) browse.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    // Corpus reader shortcut: same-host relative articles.html (not blob/rawcdn).
    const corpusLink = $("#corpus-reader-link");
    if (corpusLink) {
      corpusLink.setAttribute("href", "../ai-knowledge-articles/articles.html");
    }

    if (input) {
      input.addEventListener("input", () => {
        hideReader();
        render(input.value);
      });
      const params = new URLSearchParams(location.search);
      if (params.get("q")) {
        input.value = params.get("q");
      }
      render(input.value);
    }
    routeTopicHash();
    window.addEventListener("hashchange", routeTopicHash);
  }

  buildChrome();
  if (page === "timeline") initTimeline();
  if (page === "players") initPlayers();
  if (page === "policy") initPolicy();
  if (page === "benchmarks") initBenchmarks();
  if (page === "topics") initTopics();
  else window.addEventListener("hashchange", routeHash);
})();
