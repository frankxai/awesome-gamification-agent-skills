# Awesome Gamification Agent Skills

[![Validate](https://github.com/frankxai/awesome-gamification-agent-skills/actions/workflows/validate.yml/badge.svg)](https://github.com/frankxai/awesome-gamification-agent-skills/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Research-backed, Markdown-first standards for skill progression, AI-agent capability growth, coding-agent mastery, creator gamification, Unity/game-engine adapters, and Arcanea's **Mastery Engine**.

Most gamification systems reward noise. This repo is for progression systems that prove new capability.

## Naming Decision

Do not call the whole system "Forge."

Use this hierarchy:

| Layer | Name | Purpose |
|---|---|---|
| Umbrella system | Mastery Engine | Universal progression architecture for creators, agents, skills, worlds, games, and products |
| Arcanea mythic skin | Epoch Forge | Crafting/artifact/lore track inside Arcanea |
| Learning track | Academy | Skill acquisition, lessons, exams, certifications |
| Build/loadout track | Armory | Capability cards, tool loadouts, agent builds |
| Proof track | Trials | Verification gates, mastery tests, evals |
| Knowledge track | Codex | Research, lore, references, patterns |
| Multi-agent track | Swarm | Agent crews, roles, dispatch, reputation |

The Forge is powerful, but it is only one expression of mastery. The deeper system is progression of capability.

## Why It Exists

Great games are good at making progress visible, legible, and desirable. Great agent systems need the same discipline, but with harder evidence:

- XP should come from accepted work, not activity spam.
- Rank should unlock responsibility, not just decoration.
- Skill trees should change what humans and agents can actually do.
- Agent trust should depend on recent evidence, evals, and stewardship.
- Markdown should be enough to author, review, version, and compile the system.

## What This Repo Stores

- Research from great games and game-engine systems.
- A reusable Mastery Engine standard.
- A concrete Arcanea Mastery Engine and progression system.
- Markdown templates for skill trees, agent cards, progression tracks, quests, and eval trials.
- Agent skill definitions that help coding agents design, implement, and audit gamified systems.
- Arcanea mappings for creator progression, world progression, skill progression, and swarm progression.
- Unity and general game-engine adapter notes.

## Repository Map

```txt
docs/       research, standards, engine adapters, Arcanea mapping
skills/     Codex-compatible agent skills
templates/  Markdown templates for tracks, nodes, agents, and engine specs
schemas/    JSON schemas for structured mastery artifacts
examples/   minimum viable mastery systems
scripts/    validation and future generators
data/       source indexes and research metadata
```

## Core Docs

- [Naming and Scope](docs/NAMING-AND-SCOPE.md)
- [General Genius Model](docs/GENERAL-GENIUS.md)
- [Progression Pattern Language](docs/PATTERN-LANGUAGE.md)
- [Game Progression Research](docs/GAME-PROGRESSION-RESEARCH.md)
- [Mastery Engine Standard](docs/MASTERY-ENGINE-STANDARD.md)
- [Engine Adapters](docs/ENGINE-ADAPTERS.md)
- [Arcanea Mapping](docs/arcanea/ARCANEA-MASTERY-MAPPING.md)

## Arcanea Mastery Engine

- [Arcanea Mastery Engine](docs/arcanea/ARCANEA-MASTERY-ENGINE.md)
- [Arcanea Progression System](docs/arcanea/ARCANEA-PROGRESSION-SYSTEM.md)
- [Agent Swarm Mastery](docs/arcanea/AGENT-SWARM-MASTERY.md)
- [World To Product Mastery](docs/arcanea/WORLD-TO-PRODUCT-MASTERY.md)
- [Mastery Ledger And Proof](docs/arcanea/MASTERY-LEDGER-AND-PROOF.md)
- [Implementation Blueprint](docs/arcanea/IMPLEMENTATION-BLUEPRINT.md)

## Minimum Viable Mastery System

See [examples/minimum-mastery-system](examples/minimum-mastery-system/) for a tiny complete system:

- one track
- one node
- one trial
- one reward
- one ledger event

See [examples/arcanea-mastery-engine](examples/arcanea-mastery-engine/) for an Arcanea-specific example with creator, world, swarm, agent, Forge, and ledger files.

## Starter Skills

- [agent-progression-designer](skills/agent-progression-designer/SKILL.md)
- [arcanea-mastery-engine-designer](skills/arcanea-mastery-engine-designer/SKILL.md)
- [coding-agent-capability-mapper](skills/coding-agent-capability-mapper/SKILL.md)
- [md-skill-tree-architect](skills/md-skill-tree-architect/SKILL.md)
- [progression-system-auditor](skills/progression-system-auditor/SKILL.md)
- [unity-progression-system](skills/unity-progression-system/SKILL.md)

## Companion Repositories

- [AnimeLegends](https://github.com/frankxai/AnimeLegends) — Interactive anime experience framework designed to demonstrate and verify complex agentic progression, storytelling, and world-building capability.

## Validate

```bash
npm run validate
```

The validator checks:

- JSON validity
- JSONL validity
- trailing whitespace
- required skill frontmatter

## Operating Principle

Progression must prove new capability. XP without evidence becomes noise. Every rank, unlock, badge, relic, or title should connect to durable output, verified behavior, or useful stewardship.

## Status

Public foundation with Arcanea Mastery Engine v0.1. The next step is deeper case studies and generators that turn Markdown specs into Unity ScriptableObjects, Unreal data assets, web JSON, and agent-runtime loadouts.
