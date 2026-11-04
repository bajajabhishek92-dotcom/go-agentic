title:: LifeVal — Evaluating Agents on What Everyday People Need Done
type:: article
cluster:: trust-evals
cluster-name:: Trust, Evaluation & Decision Quality
corpus:: extra-ai-knowledge/openai-news
tags:: #article #corpus/openai-news #cluster/trust-evals
node-id:: a-lifeval-everyday-agent-evals
source-path:: /cursor/stores/self/docs/extra-ai-knowledge/openai-news/lifeval-everyday-agent-evals.md
original-label:: LifeVal: Evaluating Agents on What Everyday People Need Done

- #cluster/trust-evals
- #corpus/openai-news
- blurb:: Benchmarks that measure exam knowledge miss a large part of AI’s value: helping people complete practical life tasks—childcare logistics, government services, budgets, school prep, health-related meal planning,…

## Relations

- example of:: [[Agent Evaluation]] — Discussed in article
- related to:: [[Long-Horizon Agents]] — Discussed in article

## Article

# LifeVal: Evaluating Agents on What Everyday People Need Done

- Benchmarks that measure exam knowledge miss a large part of AI’s value: helping people complete practical life tasks—childcare logistics, government services, budgets, school prep, health-related meal planning, shopping, caregiving coordination. Advice in a chat box is not the same as an agent that can **act** through browsers, computers, and connectors. LifeVal is a pattern for measuring that gap.

## Start from how people spend time—and where they want help

- A durable everyday eval does not begin with model capabilities. It begins with:

- **Time-use catalogs** (e.g. American Time Use Survey, Multinational Time Use Study) that enumerate real tasks across demographics and seasons.
- **Demand surveys** asking, for each task, where people most want a personal assistant—not merely what they do often.
- Task families spanning caregiving, health, education, household admin, personal finance, shopping, and public services.
- That yields an evaluation suite grounded in *valued assistance*, not only model hobbies.

## Score end-to-end workflows, not trivia

- LifeVal-style tasks look like multi-step jobs with decisions left to the user at the right moments:

- Shortlist kindergartens after a move and organize enrollment details—flag preferences that still need a human call.
- Organize flood-prep volunteers for specific neighbors with a concrete action plan.
- Find housing under constraints (budget, accessory dwelling, commute after school drop-off) and stage document review.
- Set up remote co-watching for a relative, including a backup if the stream fails.
- Build a first-week diabetes-friendly meal and care plan with questions for the clinical team.
- High scores on such tasks require browser/computer use, tool connectors, and alignment about when to ask vs proceed—capabilities that academic knowledge tests underweight.

## Use the eval as a training north star

- Over a year of iteration, OpenAI used LifeVal to drive improvements on everyday workflows as models got faster and more capable at computer use. The methodological point for any product team:

- If your mission is “help people get things done,” **instrument that**, then train and ship against the instrument.
- Publish task examples so outsiders can see what “success” means (including when the agent correctly defers to the user).
- Treat rising scores as evidence of agentic usefulness—not as a claim that all of life is solved.
- **For practitioners:** write 20–50 tasks from *your* users’ time and pain surveys; grade process and outcome; refuse to declare victory on chat quality alone.

- **Sources**

- [LifeVal](https://openai.com/index/lifeval)

## Navigation

- Cluster:: [[Cluster - Trust, Evaluation & Decision Quality]]
- Corpus:: [[Corpus - OpenAI News]]
- [[Clusters]]
- [[Contents]]
