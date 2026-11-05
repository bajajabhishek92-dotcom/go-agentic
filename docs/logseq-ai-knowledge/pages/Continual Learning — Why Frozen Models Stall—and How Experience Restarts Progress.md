title:: Continual Learning — Why Frozen Models Stall—and How Experience Restarts Progress
type:: article
cluster:: training-data
cluster-name:: Training, Learning & Data
corpus:: sequoia-ai-knowledge
tags:: #article #corpus/sequoia-ai-knowledge #cluster/training-data
node-id:: a-continual-learning
source-path:: /cursor/stores/self/docs/sequoia-ai-knowledge/continual-learning.md
original-label:: Continual Learning: Why Frozen Models Stall—and How Experience Restarts Progress

- #cluster/training-data
- #corpus/sequoia-ai-knowledge
- blurb:: Pretraining and post-training create impressive snapshots. They do not, by themselves, create systems that keep learning from deployment. Sequoia’s recent talks with Rich Sutton, David Silver, and builders like…

## Relations

- prerequisite for:: [[Path to AGI (Last Mile)]] — Discussed in article
- example of:: [[Continual Learning]] — Discussed in article
- related to:: [[RL Environments]] — Discussed in article

## Article

# Continual Learning: Why Frozen Models Stall—and How Experience Restarts Progress

- Pretraining and post-training create impressive snapshots. They do not, by themselves, create systems that keep learning from deployment. Sequoia’s recent talks with Rich Sutton, David Silver, and builders like Trajectory converge on a hard claim: **the next leap is learning during use**.

## The bitter lesson, restated for builders

- Sutton’s bitter lesson is often sloganized as “just scale.” His shorter formulation is sharper: do not get distracted by injecting human knowledge the way classic AI did; invest in **learning methods that scale with computation**—search and learning. Fancy algorithms still matter; they must scale with compute rather than with hand-authored expertise.

- Large language models partly fit that story (they scale) and partly violate the *continual* part: after training, most production models stop updating from experience. Sutton and collaborators ask how to start learning again without catastrophic forgetting or unsafe drift.

## Age of experience vs. age of data

- David Silver’s “age of experience” framing (with Ineffable Intelligence) pushes beyond static corpora. A *superlearner* is less a bigger chatbot and more a system that improves by interacting with an environment—generating its own curriculum of experience. That is closer to how AlphaGo-style systems advanced than how a frozen API is consumed.

- Product implication: if your agent only ever samples a fixed weights file, you are leaving the experience flywheel on the table. Continual learning products (e.g., Trajectory’s approach to agents that improve with every use) treat each successful and failed trajectory as training signal—carefully gated, evaluated, and merged.

## Constraints that make this hard

- **Safety and regression**: online updates can break yesterday’s behavior
- **Credit assignment**: long-horizon tasks make it unclear what to reinforce
- **Data rights**: customer interactions may not be freely usable as training data
- **Eval debt**: without continuous evals, “learning” is indistinguishable from drift

### Practice checklist

- Log trajectories with enough structure to train later (tools, states, outcomes)
- Separate *memory* (retrieve facts) from *learning* (change weights or policies)
- Prefer offline continual updates with canary evals before promoting weights
- Design environments where success is verifiable—otherwise experience is noise

### Sources

- [Rich Sutton and Khurram Javed: Why AI Models Stop Learning, and How to Start It Again](https://www.youtube.com/watch?v=xH7U7w9Qzlo)
- [David Silver and Lasse Espeholt of Ineffable Intelligence: A Superlearner for the Age of Experience](https://www.youtube.com/watch?v=L4SWQebqhek)
- [Continual Learning: How AI Agents Get Better With Every Use | Arjun Karanam, Trajectory](https://www.youtube.com/watch?v=eYrMF9Cht8A)
- [Memory and Continual Learning: Engram's Dan Biderman and Jessy Lin](https://www.youtube.com/watch?v=aiR7F4jqjXY)

## Navigation

- Cluster:: [[Cluster - Training, Learning & Data]]
- Corpus:: [[Corpus - Sequoia AI Knowledge]]
- [[Clusters]]
- [[Contents]]
