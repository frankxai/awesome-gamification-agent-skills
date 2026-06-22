---
name: unity-progression-system
description: Design Unity-compatible progression, skill tree, ability, achievement, leaderboard, reward, and data-driven gameplay systems from Markdown/YAML source. Use when building Unity skill systems, ScriptableObject adapters, game progression prototypes, or engine-ready mastery specs.
---

# Unity Progression System

Use this skill to map Markdown-first progression specs into Unity implementation plans.

## Workflow

1. Identify the source Markdown artifacts: tracks, nodes, trials, rewards, loadouts.
2. Separate static design data from mutable runtime state.
3. Map static data to ScriptableObject definitions.
4. Map runtime progress to save data, backend state, or an append-only ledger.
5. Define validation rules for graph integrity.
6. Define UI states for locked, available, in-progress, complete, failed, and mastered.
7. Define telemetry events before implementation.

## Unity Mapping

| Concept | Unity artifact |
|---|---|
| Track | `SkillTrackDefinition : ScriptableObject` |
| Node | `SkillNodeDefinition : ScriptableObject` |
| Trial | `TrialDefinition : ScriptableObject` |
| Reward | `RewardDefinition : ScriptableObject` |
| Progress | save data or backend record |
| Event | analytics or JSONL ledger |

## Quality Gates

- Do not store mutable player progress in ScriptableObjects.
- Detect circular dependencies.
- Detect unreachable nodes.
- Keep reward effects testable.
- Keep designer-editable data separate from behavior code.

## Output Shape

- Unity data model.
- ScriptableObject class list.
- Runtime state model.
- Validation checklist.
- Example Markdown-to-Unity mapping.

