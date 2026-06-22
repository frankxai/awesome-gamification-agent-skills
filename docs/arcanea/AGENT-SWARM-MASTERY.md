# Agent Swarm Mastery

Status: v0.1 public specification

## Purpose

Arcanea's multi-agent swarm should progress like a crew of specialized builders, not like anonymous background automation.

## Core Split

| Layer | Responsibility |
|---|---|
| SO | cross-repo orchestration, governance, queue strategy |
| AO | Arcanea execution, worktrees, sessions, dashboards |
| Arcanea Swarms | lore, media, games, world products, canon |
| SIS | memory, provenance, taxonomy, validation |

## Agent Card

Each agent should have:

- id
- role
- rank
- loadouts
- allowed tools
- repo scope
- accepted artifacts
- open repair quests
- recent Trial
- stewardship notes

## Core Roles

| Role | Output | Rank Trial |
|---|---|---|
| Canon Smith | laws, lore, continuity ledgers | repair a contradiction without flattening the world |
| Character Smith | character cards, arcs, voice rules | create a pressure-tested character with contradiction |
| Quest Smith | quests, beats, player choices | design a 3-minute agency loop |
| Game Smith | mechanics, engine specs, playable loops | map world law to gameplay |
| Visual Smith | visual DNA, prompts, asset briefs | produce non-generic, canon-bound media brief |
| Memory Keeper | events, summaries, evolution | promote private event into safe public canon |
| Bastion Warden | IP, privacy, safety, continuity | catch hidden risk and propose repair |
| Market Scribe | listings, product pages, bundles | package world artifact for sale |
| Release Steward | checks, changelogs, CI, deployment | ship clean release with rollback notes |

## Trust Matrix

| Trust | Allowed |
|---|---|
| None | read and report |
| Draft | propose artifacts |
| Edit | modify scoped files |
| Dispatch | create bounded tasks for other agents |
| Certify | approve low-risk outputs |
| Publish | prepare public release |

Trust is not global. It is tied to role, repo, task class, and recent evidence.

## Swarm XP

Swarm XP is earned when multiple agents produce coordinated, accepted work.

Award for:

- clean task decomposition
- accepted worker artifacts
- no duplicated effort
- no overwritten user work
- useful handoffs
- review and repair loop completed

Do not award for:

- number of spawned agents
- parallel noise
- abandoned task files
- unmerged reports

## Crew Trial

Minimum crew trial:

1. Canon Smith creates or repairs a world law.
2. Quest Smith derives a playable choice from it.
3. Game Smith maps it to mechanic.
4. Bastion Warden reviews continuity and privacy.
5. Market Scribe packages the result.
6. SIS records the decision.

Pass condition: another agent can continue the work without asking what happened.

