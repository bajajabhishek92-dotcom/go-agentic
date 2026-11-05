# One Google Doc, separate tabs per article

Google Docs can hold **tabs inside a single document** (like Sheets). This package builds that Doc for all **86** articles (under the 100-tab limit).

## Layout

| Tab type | What you get |
|----------|----------------|
| **Index** | Title + list of every article by corpus |
| **Parent tabs** | IBM · Sequoia · OpenAI News · DeepMind · Hugging Face · AWS ML |
| **Child tabs** | One tab per article under its corpus |

## Steps

1. Pull the latest branch so you have this folder on your laptop:
   `docs/ai-knowledge-articles/google-docs-tabs/`
2. Upload **`articles.json`** to [Google Drive](https://drive.google.com).
3. Open the file → copy its **file id** from the URL:  
   `https://drive.google.com/file/d/`**`THIS_PART`**`/view`
4. Go to [script.google.com](https://script.google.com) → **New project**.
5. Delete any stub code; paste in **`Code.gs`** from this folder.
6. In the left sidebar: **Services** → **Add** → enable **Google Docs API**.
7. In `Code.gs`, set:
   ```js
   var ARTICLES_JSON_FILE_ID = 'THIS_PART';
   ```
8. Select function **`buildAiKnowledgeDoc`** → **Run** → authorize with your Google account.
9. When it finishes, open the log (**Executions** / **View → Logs**) for the Doc link, or find **“AI Knowledge Articles”** in Drive.

First run can take a few minutes while it creates ~92 tabs and pastes content.

## Files

- `articles.json` — all article titles + bodies (source for the script)
- `Code.gs` — Apps Script that creates the Doc and tabs
- `README.md` — these instructions
