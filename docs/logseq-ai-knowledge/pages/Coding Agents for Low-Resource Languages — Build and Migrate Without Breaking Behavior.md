title:: Coding Agents for Low-Resource Languages — Build and Migrate Without Breaking Behavior
type:: article
cluster:: coding-delivery
cluster-name:: Coding Agents & Software Delivery
corpus:: extra-ai-knowledge/openai-news
tags:: #article #corpus/openai-news #cluster/coding-delivery
node-id:: a-low-resource-language-coding
source-path:: /cursor/stores/self/docs/extra-ai-knowledge/openai-news/low-resource-language-coding.md
original-label:: Coding Agents for Low-Resource Languages: Build and Migrate Without Breaking Behavior

- #cluster/coding-delivery
- #corpus/openai-news
- blurb:: Models trained on oceans of Python and JavaScript historically struggled with **low-resource languages**—COBOL, Fortran, Visual Basic, and similar—despite those languages powering banking rails, weather codes, and…

## Relations

- example of:: [[Low-Resource Language Coding]] — Discussed in article
- related to:: [[Legacy Modernization with AI]] — Discussed in article

## Article

# Coding Agents for Low-Resource Languages: Build and Migrate Without Breaking Behavior

- Models trained on oceans of Python and JavaScript historically struggled with **low-resource languages**—COBOL, Fortran, Visual Basic, and similar—despite those languages powering banking rails, weather codes, and reactor-safety analysis. Enterprises feel this as brittle assistants: incomplete docs, departed authors, business rules that exist *only* in source. Two complementary evaluations show how to measure progress.

## Eval 1: Build something hard from scratch (MultiLangBench)

- Ask the model to implement a **SQLite-compatible database engine** in a target language: organize a codebase, manage state, handle errors, grow features without regressions.

- Shared interface trick: exchange **database files**, not language-specific APIs. The candidate gets an initial DB + SQL, emits a modified DB; reference SQLite checks contents. The same tests apply across 20 languages.

- What improved capability looks like: large jumps in test pass rate across *every* language, including big gains on COBOL/Fortran/VB—while cheaper tiers improve more modestly at much lower cost. Publishing the harness lets teams inspect gaps for *their* languages.

## Eval 2: Migrate while preserving observable behavior

- Migration tasks (e.g. COBOL → C++/Java/Kotlin/Python/Rust) fail quietly when semantics diverge. Example: COBOL fixed-point arithmetic truncates excess decimals unless rounding is requested; a rewrite that rounds can “work” and still corrupt financial results.

- Grade with **hidden tests requiring byte-for-byte parity** on observable outputs. Success only if all tests pass. Even strong scores do not replace expert review against business rules and dependencies—they show the model is getting the *right kind* of hard.

- Reported step-changes (single-digit percent → high eighties at low reasoning effort; near saturation at higher effort, often at lower cost) illustrate that low-resource coding is not permanently out of reach—it needed dedicated measurement and training pressure.

## Practice for modernization teams

- Prefer behavior-preserving tests over “looks like clean idiomatic code.”
- Keep humans on rounding, error handling, and regulatory semantics.
- Use cheaper models for scaffolding; spend frontier compute on parity failures.
- Feed vendor feedback: which languages and workflows still fail in production.
- **Sources**

- [Advancing coding in low-resource programming languages](https://openai.com/index/low-resource-programming-languages)

## Navigation

- Cluster:: [[Cluster - Coding Agents & Software Delivery]]
- Corpus:: [[Corpus - OpenAI News]]
- [[Clusters]]
- [[Contents]]
