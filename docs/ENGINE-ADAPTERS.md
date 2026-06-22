# Engine Adapters

## Goal

Keep the source of progression in Markdown, then compile or map it into game engines, web apps, and agent runtimes.

## Markdown Source

Recommended source folders:

```txt
tracks/
nodes/
trials/
agents/
loadouts/
rewards/
progression/
```

## Unity Adapter

Unity should treat Markdown/YAML as design source and generate runtime-friendly assets.

Recommended mapping:

| Markdown | Unity runtime |
|---|---|
| `nodes/*.md` | `SkillNodeDefinition : ScriptableObject` |
| `tracks/*.md` | `SkillTrackDefinition : ScriptableObject` |
| `trials/*.md` | `TrialDefinition : ScriptableObject` |
| `rewards/*.md` | `RewardDefinition : ScriptableObject` |
| `progression/ledger.jsonl` | save data or backend event stream |

Rules:

- Keep static design data in ScriptableObjects.
- Keep player/agent progress state in save data or backend state, not in ScriptableObject assets.
- Separate prerequisites, effects, presentation, and telemetry.
- Generate editor validation reports for missing prerequisites, unreachable nodes, circular dependencies, and reward inflation.

## Unreal Adapter

Unreal can map the Mastery Engine to Gameplay Ability System concepts.

| Mastery concept | Unreal GAS concept |
|---|---|
| Skill/action | Gameplay Ability |
| Stat/score | Attribute |
| Buff/unlock/modifier | Gameplay Effect |
| Async challenge step | Ability Task |
| Category/condition | Gameplay Tag |
| Actor capability profile | Ability System Component |

Rules:

- Use tags for hierarchy and gating.
- Keep abilities reusable and data-driven.
- Treat Trials as ability/effect test fixtures when gameplay is involved.

## Web App Adapter

Recommended shape:

- ingest Markdown into JSON
- store canonical files in git
- index searchable fields in DB
- render tracks, nodes, trials, and rewards as UI
- write events to append-only ledger
- compute ranks from ledger, not from mutable profile fields alone

## Agent Runtime Adapter

For Codex/Claude/Grok-style agents:

- `skills/<id>/SKILL.md` is executable instruction.
- `agents/<id>.md` is capability and trust card.
- `loadouts/<id>.md` selects skill, model, tools, permissions, and eval gates.
- `trials/<id>.md` becomes a bounded task prompt.
- `progression/ledger.jsonl` records accepted work, eval results, and trust changes.

## Arcanea Adapter

Arcanea world repos can include:

```txt
mastery/
  tracks/
  nodes/
  trials/
  rewards/
  ledger.jsonl
agents/
skills/
forge/
```

Forge is one track under `mastery/tracks/`, not the umbrella.

