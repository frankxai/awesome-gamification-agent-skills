# Arcanea Progression System

Status: v0.1 public specification

## Purpose

This document defines the concrete progression model for Arcanea creators, worlds, agents, skills, and products.

## Rank Families

### Creator Rank

| Rank | Proof | Unlock |
|---|---|---|
| Seed | Creates a valid genesis world | can run guided Academy path |
| Builder | Ships 3 accepted artifacts across at least 2 tracks | can equip basic Armory loadouts |
| Artificer | Completes one Gate Trial and one memory writeback | can run a bounded agent crew |
| Architect | Produces a playable, readable, or sellable world product | can publish a product page |
| Steward | Reviews or repairs another world without drift | can certify packs and agents |
| Master | Sustained products, community trust, and proof records | can lead seasons and marketplace drops |

### World Tier

| Tier | Name | Requirements | Unlock |
|---|---|---|---|
| 0 | Spark | premise, laws, visual DNA | shareable seed |
| 1 | Coherent | canon bible, 2 characters, 1 conflict | first Trial |
| 2 | Living | memory ledger, evolution event, quest seed | companion or episodic play |
| 3 | Playable | first playable loop or interactive scene | game adapter path |
| 4 | Productized | package, license, proof, page | marketplace eligibility |
| 5 | Sovereign | community policy, revenue path, provenance | featured world/season |

### Agent Rank

| Rank | Requirements | Autonomy |
|---|---|---|
| Dormant | installed or available | none |
| Calibrated | one accepted artifact | draft scoped artifacts |
| Trusted | five accepted artifacts and no open major repair | execute routine tasks |
| Specialist | ten accepted artifacts in one role | lead a role lane |
| Masterwork | passes role Trial and review | coordinate bounded crew work |
| Steward | catches risks and reviews others reliably | certify low-risk outputs |

### Skill State

| State | Requirements | Use |
|---|---|---|
| Seed | draft `SKILL.md` | manual use |
| Calibrated | examples and failure modes | routine use |
| Verified | passes eval or review checklist | multi-agent use |
| Marketable | docs, examples, and package boundary | marketplace or public release |
| Canonical | adopted into Arcanea standards | default route |

### Product Stage

| Stage | Requirements | Outcome |
|---|---|---|
| Draft | concept and target audience | internal review |
| Packaged | files, license, README, preview | beta |
| Tested | playtest, review, or usage evidence | public page |
| Published | release, listing, proof | marketplace |
| Proven | sales, adoption, remixes, citations | featured distribution |

## XP Rules

XP is an accounting layer, not the source of truth. Evidence is the source of truth.

### Award XP For

- accepted world-repo artifacts
- passing trials
- repairing drift
- catching privacy or IP risks
- completing playtests
- adding source-grounded research
- publishing a reusable skill
- shipping a product package

### Do Not Award XP For

- raw token count
- number of prompts
- unreviewed generated files
- duplicated content
- cosmetic dashboard activity
- broad plans with no artifacts

## XP Event

```json
{
  "ts": "2026-06-23T00:00:00Z",
  "actor": "creator:frank",
  "entity": "world:example",
  "track": "world-tier",
  "xp": {
    "lore": 10,
    "craft": 5,
    "stewardship": 2
  },
  "evidence": "commit:abc123",
  "gate": "canon-review:accepted",
  "notes": "World bible, laws, and first character pressure test accepted."
}
```

## Rank-Up Rules

A rank-up requires:

1. Required XP threshold.
2. Required artifact count.
3. Required evidence diversity.
4. Required Trial pass.
5. No unresolved critical stewardship issue.

Example:

```json
{
  "rank": "Artificer",
  "requires": {
    "xp": { "craft": 30, "lore": 20, "judgment": 10 },
    "artifacts": 5,
    "tracks": ["forge", "codex"],
    "trials": ["first-gate"],
    "noCriticalIssues": true
  }
}
```

## Decay And Renewal

Arcanea should not erase historical mastery. It should renew live authority.

Use:

- lifetime rank for history
- current rank for live privileges
- recent trial for current autonomy
- repair quests for failed renewal

## Progression UI Principle

Show:

- what you made
- what changed
- what unlocked
- what proof exists
- what the next meaningful Trial is

Do not show empty bars that only ask for grind.

