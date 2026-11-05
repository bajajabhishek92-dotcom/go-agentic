# AI Engineer Study Plan — Abhishek Bajaj (8–12 weeks)

**Goal:** One cloud engineer cert + public build that hiring managers can verify in ≤15 minutes.  
**Primary cert:** AWS Certified Machine Learning Engineer – Associate (**MLA-C01**; if English C01 window is closed, sit the current successor **MLA-C02**—same cert family, heavier Bedrock/SageMaker AI).  
**Portfolio spine:** ship **AI Engineering Atlas** publicly + one production-ish build (RAG agent over Atlas + eval harness + light MLOps).  
**Weekly budget:** **10–15 hrs** (see §4).

---

## 1. Why AWS-first (and when to switch)

| Reason | Detail |
|--------|--------|
| **Job coverage** | Largest share of AI/ML/MLOps postings still list AWS (SageMaker, Bedrock, S3, IAM, Step Functions). One AWS engineer badge travels farther than Azure/GCP alone for most US/global roles. |
| **Fits Atlas narrative** | Corpus already includes AWS ML Blog teachables (RAG, tools, agent distillation, latency). Cert study maps onto content you already curate. |
| **Engineering, not “AI apps only”** | MLA domains = data prep → train/tune → deploy/orchestrate → monitor/secure. Matches “systems + evals” positioning in `launch-product/positioning.md`. |

**Switch before week 1 (or mid-plan) if:**

| Signal | Prefer instead |
|--------|----------------|
| Target employers are Azure-heavy (MSFT partner, enterprise .NET/Foundry shops) or JD lists Azure AI / Foundry | **AI-103** (Azure AI Apps and Agents Developer Associate) |
| Target employers are GCP-heavy (data platforms, Vertex, BigQuery ML) or you already have strong GCP | **PMLE** (Professional Machine Learning Engineer) |
| Offer / pipeline already forces a cloud | Match that cloud; do not dual-track in the first 12 weeks |

Default: **AWS.** Azure/GCP = optional second badge after week 12 (§6).

---

## 2. Week-by-week plan (10 weeks core + 2-week buffer)

**Track A (default production build):** Atlas-backed **RAG agent** + **eval harness** + **CI refresh pipeline** (embeddings/index on AWS).  
**Track B (alt):** Classical MLOps (SageMaker train → Model Registry → endpoint + monitoring) if you prefer non-LLM postings—swap weeks 5–8 labs; keep Atlas ship milestones.

**Split each week (~12 hrs mid):** Cert/study **4–5h** · Hands-on **4–5h** · Atlas/portfolio **2–4h**.

### Weeks 1–2 — Foundations + Atlas public

| | Topics | Labs | Cert | Portfolio milestone |
|-|--------|------|------|---------------------|
| **W1** | IAM least privilege; S3; CloudWatch basics; MLA domain map (4 domains) | Free-tier AWS account hygiene; CLI + IAM user/role for ML; bucket for Atlas artifacts | Read [MLA exam guide](https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-01/machine-learning-engineer-associate-01.html); Skill Builder free practice question set (baseline score) | Freeze Atlas story (name, hub IA). Publish **GitHub Pages hub** from `go-agentic` (single entry URL) |
| **W2** | Data prep for ML (Domain 1, 28%): formats, Glue/Athena awareness, feature stores concepts, data quality | Ingest a slice of Atlas markdown → S3; simple validation script (schema/counts/broken links) | Domain 1 notes + 20–30 practice Qs | Inventory honesty page (real article counts); Sources/`as_of` on Start-here orientation pages |

### Weeks 3–4 — Models + Bedrock/SageMaker mental model

| | Topics | Labs | Cert | Portfolio milestone |
|-|--------|------|------|---------------------|
| **W3** | Domain 2: train/tune/eval metrics; bias/drift concepts; model registry | SageMaker Studio/notebook: train a tiny tabular model **or** Bedrock invoke + embeddings on Atlas chunks | Domain 2 deep dive | Searchable articles live on Pages; About/method + quality scorecard linked |
| **W4** | GenAI engineering: prompts, chunking, embeddings, RAG failure modes | Chunk Atlas corpus; embed; store vectors (OpenSearch Serverless **or** FAISS/local + S3 artifacts for cost control); retrieve + answer 10 golden questions manually | Bedrock/SageMaker AI sections in Skill Builder path | Graph explorer reachable from hub; cold-visitor “60s start” path works |

### Weeks 5–6 — RAG agent + eval harness (portfolio core)

| | Topics | Labs | Cert | Portfolio milestone |
|-|--------|------|------|---------------------|
| **W5** | Agentic retrieval patterns; tools; grounding; cost/latency | Ship **v0 RAG agent** (API or CLI) over Atlas: retrieve → answer → cite paths/URLs | Domain 3 overview (deploy/orchestrate) | Public repo README: architecture diagram + “how to run”; demo GIF/clip |
| **W6** | Evals: faithfulness, citation hit-rate, latency, cost/query; regression sets | **Eval harness**: ≥30 labeled Qs from Atlas; metrics JSON + HTML report; fail the build if citation hit-rate < threshold | Practice Qs Domains 1–2 mixed | Publish eval report on Pages (`/evals` or About); tie to Atlas “evaluation rigor” claim |

### Weeks 7–8 — Deploy, orchestrate, secure (Domain 3–4)

| | Topics | Labs | Cert | Portfolio milestone |
|-|--------|------|------|---------------------|
| **W7** | Endpoints, containers, Step Functions/Pipelines, CI/CD for ML | Package agent; deploy (Lambda + API GW **or** SageMaker endpoint / ECS lite); env secrets via SSM/Secrets Manager | Domain 3 task statements end-to-end | Live demo URL (auth optional but document threat model) |
| **W8** | Monitoring, drift, logging, IAM for ML, encryption, VPC endpoints concepts | CloudWatch metrics/alarms; log prompts/retrieval IDs (PII-safe); weekly index refresh job (EventBridge → pipeline) | Domain 4 notes + mixed practice | **MLOps slice:** automated re-embed on corpus change (GitHub Action → S3 → job); document RTO/cost |

### Weeks 9–10 — Exam push + interview packaging

| | Topics | Labs | Cert | Portfolio milestone |
|-|--------|------|------|---------------------|
| **W9** | Weak-domain remediation from practice scores | Fix top 3 production bugs (latency, bad cites, cold start) | Official practice exam / pretest; schedule real exam for end of W10–W11 | Resume bullet + LinkedIn: Atlas + agent + evals + AWS stack; pin repos |
| **W10** | Full mock exams; service cheat-sheet (SageMaker, Bedrock, Glue, Step Functions, CloudWatch, IAM, S3) | Cost teardown write-up ($/1k queries) | **Sit exam** (or early W11) | “Staff narrative” README section: map / cite / evaluate / gap-fill / graph / iterate |

### Weeks 11–12 — Buffer (use only what you need)

| Mode | Use when | Do |
|------|----------|-----|
| **Exam buffer** | Score &lt; ready on mocks | Extra Domain drills; retake practice exam; sit exam W12 |
| **Portfolio polish** | Exam passed early | Harden evals; add ACL note for multi-tenant RAG; record 3-min walkthrough |
| **Stretch to 12 from week 1** | Only ~10 hrs/week available | Slide each block +1 week; still ship Pages hub by end of calendar week 3 |

**8-week compress (aggressive):** Merge W1–2, W3–4, W5–6, W7–8 into four bi-weeks; cut Track B; exam end of week 8. Only if you already know AWS IAM/S3 and can ship Atlas hub in weekend 1.

---

## 3. Resources (short list)

### Official (required)
- [MLA-C01 exam guide (HTML)](https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-01/machine-learning-engineer-associate-01.html) · [PDF](https://docs.aws.amazon.com/pdfs/aws-certification/latest/machine-learning-engineer-associate-01/machine-learning-engineer-associate-01.pdf)
- [AWS cert page — ML Engineer Associate](https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/) (check C01 vs C02 English availability before booking)
- [Skill Builder — MLA-C01 exam prep](https://skillbuilder.aws/category/exam-prep/machine-learning-engineer-associate-MLA-C01) (free Q set + paid Official Practice Exam)

### Free / low-cost labs
- AWS free tier + SageMaker / Bedrock docs tutorials (embeddings, Knowledge Bases if budget allows)
- Atlas corpus under `/cursor/stores/self/docs/` + `launch-product/` (positioning, build-plan, product-spec) as the build backlog

### Paid (pick **one**, not three)
- AWS Skill Builder subscription **or** one well-reviewed MLA video course (Adrian Cantrill / similar)—cancel after exam
- Official practice exam once (week 9)

### Alternatives (only if switching clouds)
- [AI-103 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103) · [Azure AI Apps and Agents Developer Associate](https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/)
- [GCP PMLE](https://cloud.google.com/learn/certification/machine-learning-engineer) · [exam guide PDF](https://services.google.com/fh/files/misc/professional_machine_learning_engineer_exam_guide_english_new.pdf)

---

## 4. Weekly time budget (~10–15 hrs)

| Block | Hours | Cadence |
|-------|------:|---------|
| Cert study (guide + practice Qs) | 4–5 | 4–5 × 50–60 min sessions |
| Hands-on AWS / agent / evals | 4–5 | 1 long lab (2–3h) + 1–2 short |
| Atlas / docs / README / Pages | 2–4 | Ship one visible artifact every week |
| **Total** | **10–15** | Protect one weekday evening + one weekend block |

**Rules:** No second cloud until badge #1. No new course after week 6—only exam guide + weak domains + build. Cap AWS bill; prefer local/FAISS + S3 artifacts if Bedrock/OpenSearch burns cash.

---

## 5. Interview-ready outcomes checklist

Pass when you can show **and** explain each item:

**Cert / cloud**
- [ ] AWS ML Engineer Associate earned (or scheduled + mock ≥ target)
- [ ] Explain MLA’s 4 domains with one personal lab story each
- [ ] Whiteboard: secure RAG on AWS (IAM, data path, logging, failure modes)

**Atlas (systems proof)**
- [ ] Live URL: single hub, search, Start-here, Sources/`as_of`, graph, quality scorecard
- [ ] One-sentence claim: *knowledge system with graph + eval surface*, not “video summaries”
- [ ] Honest inventory + public gaps/remediation backlog

**Production-ish project**
- [ ] Public RAG (or MLOps) repo with architecture, runbook, cost note
- [ ] Eval harness with fixed set, metrics, regression gate
- [ ] Deployed endpoint or scheduled pipeline; monitoring screenshot/logs
- [ ] 3-minute demo: question → retrieved cites → answer → eval score

**Behavioral / staff signals**
- [ ] Resume + LinkedIn use the six verbs: map, cite, evaluate, gap-fill, graph, iterate
- [ ] Can discuss tradeoffs: chunk size, embedding model, retrieval vs agent loops, eval gaming
- [ ] Can discuss what you would do in week 13 (scale, ACLs, online evals)—without having built it yet

---

## 6. Optional second-badge fork (after week 12)

Do **not** start until: badge #1 done **and** Atlas + agent/evals are public.

| If next target market is… | Second badge | 6–8 week add-on focus |
|---------------------------|--------------|------------------------|
| Enterprise Microsoft / agents on Foundry | **AI-103** | Port RAG agent concepts to Azure AI Search + Foundry agents; reuse eval harness |
| Data/ML platform / Vertex shops | **PMLE** | Vertex pipelines + BigQuery ML; map your MLOps slice to GCP |
| Deeper AWS differentiation | Skip second cloud; add **Security Specialty light study** *or* publish a second eval paper-style writeup | Stronger than a weak second badge |

**Rule:** Second badge only if JDs you want list that cloud ≥3× in your pipeline. Otherwise double down on Atlas depth + online evals + one customer-shaped case study.
