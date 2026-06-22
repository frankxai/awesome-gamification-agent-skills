# Mastery Engine Standard

Status: v0.1 draft

## 1. Purpose

The Mastery Engine turns work into visible, useful progression across humans, agents, skills, worlds, and products.

It is Markdown-first:

- specs are `.md` files with YAML frontmatter
- structured indexes may be JSON
- runtime engines compile or ingest the Markdown
- source files remain human-readable and git-friendly

## 2. Core Entities

| Entity | Meaning | File |
|---|---|---|
| Skill | A reusable capability or discipline | `skills/<id>/SKILL.md` or `skills/<id>.md` |
| Node | A discrete unlock, lesson, ability, or eval | `nodes/<id>.md` |
| Track | A path through related nodes | `tracks/<id>.md` |
| Trial | A test that proves readiness | `trials/<id>.md` |
| Loadout | A selected set of skills/tools/constraints | `loadouts/<id>.md` |
| Agent Card | Capability profile for an agent | `agents/<id>.md` |
| Progress Ledger | Append-only event log | `progression/ledger.jsonl` |
| Reward | Access, badge, title, template, tool, or autonomy | `rewards/<id>.md` |

## 3. Required Frontmatter

Every progression artifact should include:

```yaml
---
id: stable-id
type: skill | node | track | trial | loadout | agent | reward
status: draft | active | deprecated
visibility: public | unlisted | private
owner: frank
version: 0.1.0
---
```

## 4. Progression Axes

Use multiple axes instead of one global level.

| Axis | Measures | Bad metric |
|---|---|---|
| Knowledge | source-grounded understanding | pages read |
| Craft | usable artifacts shipped | files generated |
| Judgment | quality of decisions and risk flags | confident tone |
| Stewardship | privacy, safety, continuity, user-work protection | absence of errors in easy tasks |
| Throughput | scoped work completed | raw speed |
| Collaboration | handoffs, reports, review quality | number of agents spawned |
| Productization | packaging, docs, marketplace readiness | artifact count |

## 5. XP Event Shape

Use JSONL for ledgers:

```json
{"ts":"2026-06-23T00:00:00Z","actor":"agent:codex","entity":"skill:unity-progression-system","xp":{"craft":10,"judgment":2},"evidence":"commit:<sha>","gate":"review:accepted","notes":"Implemented data-driven skill tree spec."}
```

Rules:

- Every XP event needs evidence.
- XP from unreviewed drafts is provisional.
- Failed trials create repair tasks, not shame.
- Advanced autonomy requires recent evidence.

## 6. Rank Model

| Rank | Human meaning | Agent meaning | Skill meaning |
|---|---|---|---|
| Seed | started | untested | draft instructions |
| Calibrated | has first proof | one accepted output | usable with guidance |
| Trusted | repeated success | safe for routine work | reliable in target domain |
| Specialist | strong in one lane | role-specific autonomy | handles variants |
| Masterwork | can lead a bounded product | can coordinate subwork | validated with evals |
| Steward | can certify others | can review and protect | canonical/default route |

## 7. Trials

Trials are the rank-up mechanism.

Trial requirements:

- objective
- input fixture
- success criteria
- failure modes
- allowed tools
- max time or scope
- evidence output
- reviewer or eval path

## 8. Rewards

Rewards should unlock useful work:

- new templates
- higher autonomy
- new tools
- marketplace eligibility
- public badge
- publishing lane
- agent dispatch permission
- review authority

Avoid rewards that only decorate dashboards.

## 9. Engine Adapters

The same Markdown can be adapted into:

- Unity ScriptableObjects
- Unreal data assets / Gameplay Ability System concepts
- web app JSON
- Arcanea world repo fields
- Codex/Claude/Grok skill packs
- AO/SO/SIS queue and provenance records

## 10. Minimum Viable Mastery System

1. One track.
2. Five nodes.
3. Two trials.
4. One agent card.
5. One progress ledger.
6. One reward that changes what the user or agent can do.

## 11. Arcanea Specialization

Arcanea extends the generic standard with:

- creator ranks
- world tiers
- agent swarm trust
- skill states
- product stages
- Epoch Forge artifacts
- memory writeback
- proof rails

Use `docs/arcanea/ARCANEA-MASTERY-ENGINE.md` as the Arcanea product doctrine and keep this file as the portable base.
