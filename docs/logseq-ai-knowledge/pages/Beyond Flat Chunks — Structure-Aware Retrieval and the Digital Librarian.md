title:: Beyond Flat Chunks — Structure-Aware Retrieval and the Digital Librarian
type:: article
cluster:: knowledge-access
cluster-name:: Context, Tools & Knowledge Access
corpus:: ibm-ai-knowledge
tags:: #article #corpus/ibm-ai-knowledge #cluster/knowledge-access
node-id:: a-chunkless-rag-complex-documents
source-path:: /cursor/stores/self/docs/ibm-ai-knowledge/chunkless-rag-complex-documents.md
original-label:: Beyond Flat Chunks: Structure-Aware Retrieval and the Digital Librarian

- #cluster/knowledge-access
- #corpus/ibm-ai-knowledge
- blurb:: Classic RAG cuts documents into chunks, embeds them, and at query time retrieves the most similar fragments for the model. It is cheap and effective for many “find anything about X” questions over large corpora. It…

## Relations

- example of:: [[Structure-Aware - Chunkless RAG]] — Discussed in article
- related to:: [[RAG (Retrieval-Augmented Generation)]] — Discussed in article

## Article

# Beyond Flat Chunks: Structure-Aware Retrieval and the Digital Librarian

- Classic RAG cuts documents into chunks, embeds them, and at query time retrieves the most similar fragments for the model. It is cheap and effective for many “find anything about X” questions over large corpora. It breaks down when the answer depends on *document structure*—or when structured facts and unstructured policy live in different systems.

## What chunking throws away

- Authors write trees: titles, sections, subsections, tables, figures, reading order. Chunking flattens that tree. Headings detach from the paragraphs they introduce; tables split from the sentences that explain them; cross-section answers become guesswork from unrelated blobs. Similarity search never knew those sections belonged together.

- **Chunkless RAG** (as framed around Docling-style pipelines) keeps the tree. An agent starts from an outline with short section summaries, reasons about which branch likely holds the answer, opens that section, follows references, and walks a few steps—the way a person uses a table of contents. Benefits:

- **Path context** — while reading a paragraph, the agent still knows its section path; a similarity chunk often does not.
- **Cross-document-section questions** — hold place, read another branch, return.
- **Cleaner grounding** — the model reasons over the right shaped material instead of inventing bridges between fragments.
- The hard part is obtaining the tree. PDFs are paint instructions for glyphs, not clean structure. Tools such as **Docling** reconstruct a document object: real sections, reading order, intact tables. Agents can then navigate, extract, and enrich that object. Cost: more model round-trips and latency than one vector lookup; parsing quality is most of the engineering. Vector RAG still wins for fuzzy search over millions of docs. Many systems combine both: similarity to find the document, structure to navigate inside it.

## When the corpus itself is messy

- Even perfect retrieval fails if the document set is contradictory. Policies from different decades, federal vs state rules, legal opinions vs statutes, or colloquial “2019 vs 2020 championship” naming can all yield multiple “correct” answers. Practical mitigations:

- **Document hygiene** — do not index superseded policies alongside current ones (unforced errors).
- **Clarification loops** — make underspecified questions specific before answering.
- **Honesty about multiplicity** — if a human reading the corpus would say “X, Y, or Z depending on context,” the system should too. Presenting opinions as facts looks like hallucination when it is really bad product design. **The AI must be ≤ the data**: it cannot be more certain than the sources allow.

## The digital librarian pattern

- Many business questions split into **what** vs **why**. The *what* (was the claim denied? what was the balance?) lives in SQL. The *why* (which policy paragraph?) lives in PDFs behind a vector index. A **digital librarian** agent: understands the question; decides which parts need SQL vs semantic search; builds and runs both queries; compiles results; answers with grounded insight. LLMs handle interpretation and synthesis; tools execute deterministic queries and light formatting. The shift is from retrieving silos to delivering answers that stitch them.

- Structure-aware retrieval, careful corpus governance, and agents that know when to query which store are how complex documents stop defeating RAG.

- **Sources**

- [What Is Chunkless RAG? How Docling & AI Agents Navigate Documents](https://www.youtube.com/watch?v=vRZNJWw78BQ)
- [Why RAG Solutions Fail with Complex Documents & Vector Databases](https://www.youtube.com/watch?v=xc63tFIIfeA)
- [What Is a Digital Librarian AI Agent? Connecting SQL & Vector Database](https://www.youtube.com/watch?v=eFf2OvkZxEM)

## Navigation

- Cluster:: [[Cluster - Context, Tools & Knowledge Access]]
- Corpus:: [[Corpus - IBM AI Knowledge]]
- [[Clusters]]
- [[Contents]]
