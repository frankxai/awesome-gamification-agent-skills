# Arcanea Mastery Engine Implementation Blueprint

Status: v0.1 public blueprint

## Goal

Turn the Mastery Engine from doctrine into a working system inside Arcanea world repos and agent workflows.

## Phase 1: File Standard

Add to each world repo:

```txt
mastery/
  tracks/
  nodes/
  trials/
  rewards/
  loadouts/
  ledger.jsonl
agents/
  <agent-id>.md
forge/
  artifacts/
```

Acceptance:

- repo validates
- ledger parses
- one track, one trial, one reward exist

## Phase 2: Status Script

Create:

```txt
scripts/mastery-state.mjs
```

Output:

```txt
World: Memory City
Tier: Living
Creator Rank: Builder
Open Trials: first-playable, canon-stewardship
Agents: 2 trusted, 1 repair quest
Products: 1 draft, 0 published
```

Acceptance:

- no database required
- reads Markdown frontmatter and ledger
- flags missing evidence

## Phase 3: Agent Loadouts

Add loadouts:

- canon-smith
- game-smith
- bastion-warden
- market-scribe
- release-steward

Acceptance:

- each loadout has tools, scope, gates, and handoff rules

## Phase 4: Trials

Add four required trials:

- creator-first-gate
- world-coherence-gate
- agent-trust-gate
- product-readiness-gate

Acceptance:

- each trial has fixture, success criteria, failure modes, and evidence path

## Phase 5: Productization

Add product stages:

- draft
- packaged
- tested
- published
- proven

Acceptance:

- a world can generate a marketplace readiness report
- a product can state why it is not ready yet

## Phase 6: Public Dashboard

Optional visual layer:

- track map
- world tier
- creator rank
- agent crew status
- current trials
- product ladder

Acceptance:

- UI derives from repo files and ledger
- no private memory leaked

