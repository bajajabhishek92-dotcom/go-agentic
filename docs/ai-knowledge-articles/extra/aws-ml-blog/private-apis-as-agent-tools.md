# Turning Private APIs into Agent Tools Without Flooding Context

When teams start building agents, the capabilities they need usually already exist as internal REST APIs. The hard part is not writing new product logic—it is making hundreds of private endpoints safely reachable by agents without public exposure, without letting the model invent identity, and without stuffing a 400-tool catalog into every prompt.

## Anti-pattern: one MCP server per team

Giving each product team its own MCP server looks clean on a whiteboard and fails in operations:

- Dozens of servers to patch and keep protocol-compatible.
- Cross-domain agents must connect to many servers and reconcile them.
- Every team needs MCP expertise unrelated to their product work.

A better org rule: **product teams build REST APIs and declare which operations are tools; a platform team owns the MCP/protocol layer end to end.** A team’s responsibility ends at a well-described OpenAPI (or similar) spec.

## Four constraints that must hold together

Any workable architecture has to satisfy all of these at once:

1. **No public endpoints** for internal APIs—private connectivity that does not require a new network change per API.
2. **Identity is not a model parameter** — tenant, user, role, and DB context must be injected by the calling service (headers, tokens), never as LLM-visible tool arguments the model can invent or override.
3. **Authorization before catalog serialization** — agents that should not call writes must not receive write tools in `tools/list`. Client-side filtering after the full catalog crossed the wire is not an authorization boundary.
4. **Discovery that scales** — at ~50 tokens of schema per tool, hundreds of tools blow the context budget before reasoning starts. Prefer server-side policy scoping plus semantic search (“find tools for this intent”) so only candidates enter context.

## Pattern: OpenAPI in, tools out

A managed gateway that registers OpenAPI specs as targets and generates tools from operations removes undifferentiated work:

- Spec change → tool change; add/remove endpoints without writing MCP server code.
- Policy engines (for example Cedar-style permit/forbid by principal and tool group) evaluate *before* the catalog is built.
- Managed private egress reaches VPC-local services without per-integration NAT/VPN sprawl.
- Semantic search over tool descriptions reduces rename fragility: agents find “segment user count” even if the operationId changed.

### Write tool descriptions for models, not developers

API docs say what an endpoint returns. Tool descriptions must say **when to call it and what to pass**. Reusing developer docs verbatim trains the model to pick tools by implementation detail (“paginated list”) instead of intent (“find campaigns by status or channel”). Keep an explicit opt-in flag so cache-warmup routes never become tools by accident.

### Search-first agents

New agents can start with zero hardcoded tool names: one meta-tool to search, then call what comes back. When teams rename or ship endpoints, agents pick them up without a code change—as long as descriptions stay accurate.

## Takeaway

Separate concerns the way engineering orgs already work: APIs and OpenAPI belong to product teams; protocol, policy, and private connectivity belong to the platform. Treat identity as infrastructure headers, authorize before listing tools, and discover by intent so context windows stay for the task.

**Sources**

- [How MoEngage turned over 400 APIs into agent tools with AgentCore Gateway](https://aws.amazon.com/blogs/machine-learning/how-moengage-turned-over-400-apis-into-agent-tools-with-agentcore-gateway/)
- [How Eon built multi-cloud investigation with an MCP Gateway on Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/how-eon-built-multi-cloud-investigation-with-an-mcp-gateway-on-amazon-bedrock-agentcore/)
- [Discover tools at runtime with AWS Agent Registry](https://aws.amazon.com/blogs/machine-learning/discover-tools-at-runtime-with-aws-agent-registry/)
