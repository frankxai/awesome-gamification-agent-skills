# Arcanea Mastery Mapping

## Decision

Arcanea should use **Mastery Engine** as the system-level architecture and **Epoch Forge** as one mythic expression inside the world/product.

## Arcanea Lanes

| Mastery lane | Arcanea expression | Output |
|---|---|---|
| Academy | Luminor lessons, creator paths | guided learning, certifications |
| Forge | Epoch Forge, relics, artifacts | worlds, game mechanics, tools, defenses |
| Armory | agent/tool loadouts | reusable creation builds |
| Trials | gates, boss checks, proof runs | evals, playtests, canon checks |
| Codex | lore and research memory | source-grounded knowledge |
| Swarm | multi-agent crew progression | agent ranks, roles, dispatch rights |
| Citadel | commercial product bundles | books, games, packs, courses |

## World Repo Fields

Add optional fields without breaking the existing Arcanea world repo standard:

```json
{
  "mastery": {
    "systemVersion": "0.1.0",
    "worldTier": 1,
    "creatorRank": "Seed",
    "activeTracks": ["forge", "academy", "swarm"],
    "ledger": "mastery/ledger.jsonl"
  }
}
```

Keep Forge as:

```json
{
  "forge": {
    "track": "mastery/tracks/forge.md",
    "stations": ["anvil", "lens", "bastion", "gate"],
    "artifactClasses": ["tool", "ward", "key", "vessel", "citadel"]
  }
}
```

## Agent Progression

Arcanea agents should earn rank from accepted world-repo outputs:

- Canon Smith: law, lore, continuity
- Character Smith: character cards, arcs, pressure tests
- Visual Smith: visual DNA, prompts, asset briefs
- Game Smith: playable loops, mechanics, engine adapters
- Memory Keeper: memories, evolution, privacy boundaries
- Bastion Warden: IP, safety, canon, private-memory protection
- Market Scribe: bundles, listings, licensing, proof readiness

## Game Rule

Every playable Arcanea progression mechanic should connect to:

- world law
- character pressure
- memory writeback
- visible reward
- proof or ledger event

If a mechanic cannot explain its story consequence, it is probably generic gamification.

## Update Needed In Prior Forge Doc

The existing Forge Progression Standard should be renamed or reframed:

- from: `ARCANEA_FORGE_PROGRESSION_STANDARD.md`
- to one of:
  - `ARCANEA_MASTERY_ENGINE_STANDARD.md`
  - `ARCANEA_MASTERY_ENGINE_AND_EPOCH_FORGE.md`

Recommended: keep the current file for now, but add a note that Forge is a track within the Mastery Engine.

