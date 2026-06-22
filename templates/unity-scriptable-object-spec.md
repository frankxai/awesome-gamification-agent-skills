---
id: unity-spec-example
type: engine-adapter
status: draft
visibility: public
owner: frank
version: 0.1.0
engine: unity
---

# Unity ScriptableObject Spec

## Source Markdown

Path to source node, track, trial, or reward.

## ScriptableObject Type

Example: `SkillNodeDefinition`.

## Fields

| Field | Type | Source |
|---|---|---|
| id | string | frontmatter.id |
| title | string | H1 |
| prerequisites | string[] | frontmatter or section |
| rewards | string[] | section |

## Runtime State

Do not store mutable progress in the ScriptableObject. Store it in save data, backend state, or an event ledger.

## Validation

- No missing prerequisite ids.
- No circular dependencies.
- Reward exists.
- Node is reachable from at least one track.

