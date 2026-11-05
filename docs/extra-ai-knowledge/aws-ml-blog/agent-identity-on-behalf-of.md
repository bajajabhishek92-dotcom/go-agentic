# Agent Identity: On-Behalf-Of Propagation and Cryptographic Proof

Agents that call enterprise APIs as a shared application identity break three things at once: audit trails (who did this?), user-level authorization (what may *this* user do?), and least privilege. Production agents need identity that answers two questions on every call: **which agent** acted, and **for which user**.

## Why “service account for everything” fails

If the CRM or ticketing API only ever sees the agent platform’s client credentials:

- Every action looks like the same principal.
- Downstream ACLs cannot enforce per-user permissions.
- Prompt injection or buggy tool choice can act with the platform’s full power.

User OAuth tokens stuffed into the agent as long-lived secrets are also weak: the tool may not distinguish agent from human, and stolen tokens last weeks.

## On-behalf-of (OBO) token exchange

OBO bridges two audiences. The user authenticates to the agent app and receives a JWT for *that* app. Downstream APIs expect a token whose audience is *their* API connector. A gateway in the middle:

1. Accepts the inbound JWT (agent audience).
2. Calls the IdP token endpoint with `requested_token_use: on_behalf_of`, client credentials, and the target scope.
3. Receives a new token that preserves the user’s claims but targets the downstream API.
4. Invokes the API; the API maps claims (for example `preferred_username`) to a local user and applies that user’s permissions.

Configure exchange on the gateway target so it happens on each request—application code should not reinvent token plumbing per tool. Pair with input/output guardrails so identity propagation is not the only safety layer.

This pattern generalizes beyond any one SaaS: any OAuth-protected REST API can sit behind the same exchange.

## Stronger still: agent identity as a first-class principal

Beyond OBO, treat agents like privileged machine identities:

- **Registry** — catalog approved agents, MCP servers, and skills; gate discoverability with approval workflows.
- **Per-agent credentials** — each agent gets its own identity checked on every request; no orphaned actions.
- **Delegation assertions** — users authorize agents without sharing passwords; audience-scoped tokens limit blast radius if one token leaks.
- **Revocation** — real-time status checks (for example OCSP for X.509) so compromised agent certs stop working immediately.

MCP itself is transport-agnostic and does not define authentication. Without identity mechanisms on top, any component can impersonate an agent, replay credentials, or invoke tools without authorization. Signed request envelopes and proof-of-possession close that gap for high-assurance deployments.

## Practical rules

- Never put tenant/user identity in LLM-visible tool arguments.
- Prefer short-lived tokens and vault-issued session credentials over shared API keys.
- Log both agent identity and user identity on every tool call.
- Deny by default; subscribe agents to tool groups explicitly.

## Takeaway

Propagate the user with OBO (or equivalent delegation); identify the agent as its own principal; keep credentials short-lived and out of the model’s reach. Audit and least privilege only work when both identities travel with the request.

**Sources**

- [ServiceNow on-behalf-of token exchange with Bedrock AgentCore Gateway](https://aws.amazon.com/blogs/machine-learning/servicenow-on-behalf-of-token-exchange-with-bedrock-agentcore-gateway/)
- [Securing AI agent identity with X.509 PKI on AWS](https://aws.amazon.com/blogs/machine-learning/securing-ai-agent-identity-with-x-509-pki-on-aws/)
- [How MoEngage turned over 400 APIs into agent tools with AgentCore Gateway](https://aws.amazon.com/blogs/machine-learning/how-moengage-turned-over-400-apis-into-agent-tools-with-agentcore-gateway/)
