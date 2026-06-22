# Mastery Ledger And Proof

Status: v0.1 public specification

## Purpose

The Mastery Ledger records progression events in a way that can be audited, replayed, and selectively published.

## Ledger Principles

- Append-only by default.
- Evidence-first.
- Public progress can point to public artifacts.
- Private memory should stay private.
- Proof can certify existence without exposing private canon.

## Event Types

| Event | Meaning |
|---|---|
| `artifact.accepted` | an output passed review |
| `trial.passed` | a rank-up or gate trial passed |
| `trial.failed` | a trial failed and created repair work |
| `repair.completed` | drift, bug, or risk was fixed |
| `memory.recorded` | private or public memory was recorded |
| `canon.promoted` | distilled memory became public canon |
| `product.packaged` | files reached bundle quality |
| `proof.claimed` | content hash or release proof was recorded |
| `agent.rank_changed` | trust or role level changed |
| `skill.verified` | skill passed usage/eval gate |

## Event Shape

```json
{
  "ts": "2026-06-23T00:00:00Z",
  "event": "artifact.accepted",
  "actor": "agent:canon-smith",
  "subject": "world:memory-city",
  "track": "codex",
  "xp": {
    "lore": 8,
    "judgment": 2
  },
  "evidence": {
    "type": "commit",
    "ref": "abc123"
  },
  "privacy": "public",
  "gate": "canon-review",
  "notes": "Accepted updated law and conflict engine."
}
```

## Proof Levels

| Level | Meaning | Use |
|---|---|---|
| Local | ledger event in repo | work tracking |
| Git | commit, tag, release | collaboration |
| Public | issue, PR, release page | public trust |
| Hash | content hash | tamper evidence |
| Chain | optional onchain proof | ownership and royalty rail |

## Privacy Boundary

Never publish:

- private character memory
- unreleased world secrets
- credentials
- user personal data
- private strategy

Publish:

- artifact names
- public commit refs
- rank changes
- release hashes
- public product metadata

