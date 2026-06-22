# Game Progression Research

Status: initial synthesis
Date: 2026-06-23

This document extracts reusable patterns from strong progression systems. It is not a clone list. Do not copy proper nouns, proprietary UI layouts, icons, values, item names, or lore.

## Source Notes

| Source | Pattern observed | Design inference for agents/skills |
|---|---|---|
| Warframe Mastery Rank | Account mastery is earned by leveling many equipment types and completing unique map objectives; rank-up requires tests. | Agent mastery should come from diverse accepted outputs plus capability tests, not token volume. |
| EVE Online Skill Plans | Players can create, track, and share ordered plans with milestones before owning every prerequisite. | Skill roadmaps should be shareable Markdown plans with milestone gates and prerequisites. |
| RuneScape Skills | Repeated action in a skill earns XP; higher levels unlock equipment, locations, quests, and activities. | Skill progress should unlock new task classes, tools, templates, and autonomy. |
| Final Fantasy XIV Jobs and disciplines | Classes diversify into specialized jobs; crafting and gathering disciplines are first-class, not side content. | Agent systems need equal prestige for builders, reviewers, researchers, operators, and craft roles. |
| Destiny 2 Guardian Ranks | Ranks show proficiency with game systems; higher ranks require harder objectives and some advanced ranks renew seasonally. | Agent rank should communicate current proficiency, with advanced trust requiring periodic renewal. |
| Fortnite Battle Pass | XP can come from multiple modes; rewards are page-based and may require previous claims or levels. | Creation systems can let users progress through many activity types while preserving dependency gates. |
| Path of Exile 2 Support Gems | Skills can be modified by support gems, changing behavior while preserving base skill identity. | Agent skills should have modifiers, loadouts, and eval packs that change behavior without duplicating the whole skill. |
| Diablo IV Paragon Boards, Glyphs, and Armory | Board nodes, glyph radius, and saved loadouts support specialization and build switching. | Mastery systems should combine graph pathing, slotted modifiers, and inspectable reusable loadouts. |
| Unreal Gameplay Ability System | Abilities, attributes, effects, and tasks are separated into composable runtime concepts. | Skill systems should separate capability definition, stats, effects, prerequisites, tasks, and runtime state. |
| Unity ScriptableObjects | Static gameplay data can be separated from behavior logic for testability, reuse, and designer-friendly editing. | Markdown/YAML specs should act as source data that engine adapters compile into runtime assets. |
| Unity Leaderboards | Social comparison works when scores can be stored, sorted, and ranked through a service. | Leaderboards should be used sparingly for objective, comparable metrics; stewardship often needs qualitative review instead. |

## Patterns Worth Stealing

### 1. Mastery Is Wider Than Level

Best systems distinguish local skill level from account or profile mastery.

Use this in agent systems:

- `skill_level`: ability inside one discipline
- `agent_rank`: trust earned by accepted outputs
- `creator_rank`: human progression across products
- `world_tier`: maturity of a world/product
- `swarm_rank`: maturity of a multi-agent crew

### 2. Tests Matter More Than XP

XP fills the bar; tests prove readiness.

Use:

- rank-up trials
- eval gates
- boss tasks
- playtest reports
- code review checks
- deployment verification
- canon and privacy audits

### 3. Plans Should Be Shareable

EVE-style skill plans are useful because they are explicit, goal-based, milestone-driven, and shareable.

Arcanea and Starlight version:

- `plans/<plan-slug>.md`
- ordered prerequisites
- milestone cards
- recommended agents
- expected artifacts
- eval gates

### 4. Multiple Paths, Shared Progress

Fortnite-style shared XP across modes suggests creators should earn progress from different surfaces:

- coding
- lore
- visual canon
- playtesting
- research
- publishing
- community review
- memory stewardship

Guardrail: shared XP must map to evidence, not raw activity.

### 5. Loadouts Beat Permanent Identity

Modern RPGs and MMOs make builds swappable. Agents should do the same.

Use:

- capability cards
- role loadouts
- task profiles
- tool permissions
- evaluation weights
- context packs

An agent is not "the design agent" forever. It can equip a Design Review loadout, a Unity Skill Tree loadout, or a Canon Audit loadout.

### 6. Soft Reset Is Useful

Seasonal or periodic rank renewal keeps mastery current without deleting permanent identity.

Use:

- permanent archive rank
- current-season trust
- recent eval score
- decay only for live autonomy, not historical credit

### 7. Crafting And Gathering Are Core

Many systems privilege combat, but the strongest creator platform must make gathering, synthesis, repair, defense, and publishing first-class.

Agent equivalent:

- Researcher earns by source quality.
- Synthesizer earns by compression and clarity.
- Builder earns by working artifacts.
- Warden earns by caught risks.
- Publisher earns by sellable packages.

### 8. Modifiers Beat Copies

Path of Exile-style support systems are powerful because the base action stays recognizable while modifiers create build variety.

Agent version:

- base skill: `arcanea-mastery-engine-designer`
- modifiers: Unity adapter, canon strictness, marketplace packaging, safety review, speed run, teaching mode
- gates: each modifier must state risks and evaluation changes

### 9. Boards Need Loadouts

Diablo-style board and loadout systems show the value of saving a build, not just owning many nodes.

Agent version:

- skill tree maps possible growth
- loadout captures current equipped strategy
- ledger proves why the loadout is trusted

## Anti-Patterns

- Vanity XP for number of prompts or generated files.
- One global level that hides actual capability.
- Rewards that unlock power without responsibility.
- Leaderboards for subjective work without clear metric definitions.
- Permanent trust after old success with no recent verification.
- Skill trees that are just docs with badges but no workflow change.
- Lore naming that makes platform concepts harder to understand.

## Source Links

- Warframe Mastery Ranks Guide: https://www.warframe.com/en/news/mastery-ranks-guide
- EVE Online Updates To Skill Training: https://www.eveonline.com/news/view/updates-to-skill-training
- RuneScape Skills: https://www.runescape.com/game-guide/skills
- Final Fantasy XIV game/classes/jobs page: https://na.finalfantasyxiv.com/a_realm_reborn/game/
- Destiny 2 Guardian Ranks: https://help.bungie.net/hc/en-us/articles/19985032189972-Guardian-Ranks
- Fortnite Battle Pass support: https://www.epicgames.com/help/c-202300000001636/c-5719350646299/a202300000013265
- Path of Exile 2: https://pathofexile2.com/
- Diablo IV Paragon PTR notes: https://news.blizzard.com/en-us/article/24130178/the-2-0-ptr-what-you-need-to-know
- Diablo IV Armory PTR notes: https://news.blizzard.com/en-gb/article/24162193/the-2-1-ptr-what-you-need-to-know
- Unreal Gameplay Ability System: https://dev.epicgames.com/documentation/unreal-engine/gameplay-ability-system-for-unreal-engine
- Unity ScriptableObjects guide: https://unity.com/how-to/separate-game-data-logic-scriptable-objects
- Unity Leaderboards manual: https://docs.unity3d.com/6000.0/Documentation/Manual/com.unity.services.leaderboards.html
