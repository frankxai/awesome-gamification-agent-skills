---
name: coding-agent-capability-mapper
description: Map coding-agent capabilities into loadouts, skills, tools, eval gates, repo permissions, task classes, and progression tracks. Use when designing Codex, Claude, Grok, Gemini, Antigravity, AO, SO, or swarm capability systems.
---

# Coding Agent Capability Mapper

Use this skill to convert agent abilities into explicit, testable capability cards and loadouts.

## Workflow

1. Read repo instructions and task surface.
2. List task classes the agent should handle.
3. Map each task class to required skills, tools, permissions, context, and eval gates.
4. Define loadouts for common work modes.
5. Define what evidence increases trust.
6. Define what failures lower live autonomy or require repair.

## Loadout Fields

- `id`
- `role`
- `allowed_tools`
- `repo_scope`
- `skills`
- `context_required`
- `risk_level`
- `acceptance_gates`
- `handoff_required`

## Quality Gates

- Separate capability from trust.
- Separate permanent history from current authorization.
- Avoid unrestricted tool access as a reward.
- Require stronger gates for production, secrets, payments, legal, medical, and irreversible actions.

## Output Shape

- Capability matrix.
- Loadout cards.
- Eval gates.
- Trust ledger events.
- Recommended next trials.

