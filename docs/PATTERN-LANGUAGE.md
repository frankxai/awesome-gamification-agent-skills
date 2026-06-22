# Progression Pattern Language

Status: v0.1 draft

This is the reusable design vocabulary behind the Mastery Engine. Use it to analyze games, creator platforms, AI-agent systems, coding-agent harnesses, learning paths, and Arcanea worlds without getting trapped in franchise-specific mechanics.

## Core Patterns

### Account Mastery

Progress is measured across many activities, not one class or one tool.

Use when:

- a creator works across lore, code, media, community, and publishing
- an agent produces many artifact types
- a world matures through books, games, companions, and proof

Agent translation:

- rank should require breadth and depth
- repeated easy wins should stop awarding meaningful progress
- new rank should require a proof trial

### Modular Skill Composition

Small capability pieces combine into builds.

Use when:

- skills, support skills, tools, prompt packs, and evals can be recombined
- agents need loadouts for different tasks
- creators need a way to express build strategy

Agent translation:

- separate base capability from modifiers
- make loadouts inspectable
- validate incompatible combinations

### Board And Glyph Progression

A pathing graph grants local bonuses while slotted modifiers reshape nearby choices.

Use when:

- capabilities depend on surrounding context
- a role gets stronger by specializing around a cluster
- a creator wants a visible map of tradeoffs

Agent translation:

- a "glyph" can be a model, tool, eval pack, memory pack, or style constraint
- a board is a track or domain
- radius means influence over adjacent nodes or task types

### Rank Renewal

High visible rank reflects recent proficiency, while historical mastery remains archived.

Use when:

- tools change quickly
- live autonomy is risky
- a prior expert may be stale

Agent translation:

- keep lifetime record
- require current-season verification for elevated permissions
- expire autonomy, not dignity

### Skill Plans

Progression is planned as an ordered path toward a goal.

Use when:

- users want to become better creators
- teams need onboarding paths
- agents need capability roadmaps

Agent translation:

- plan files should be shareable Markdown
- each milestone should list evidence and expected unlocks
- prerequisite gaps should be visible

### Loadouts

Capabilities are swappable builds, not permanent identity.

Use when:

- an agent alternates between code review, visual critique, Unity design, and canon audit
- a creator alternates between book, game, course, and marketplace product

Agent translation:

- agent cards should list equipped loadouts
- loadouts should define tools, context, risk, and gates
- switching loadout should not erase history

### Trials

Progress is proven through tests that simulate real work.

Use when:

- rank unlocks higher autonomy
- a skill becomes marketable
- a creator can publish or certify

Agent translation:

- trial fixtures should be versioned
- success criteria should be concrete
- failure should produce repair quests

### World Tier

A world progresses by becoming more coherent, playable, memorable, and productizable.

Use when:

- lore should become books, games, apps, companions, and assets
- quality matters more than asset count

Agent translation:

- reward canon coherence
- reward memory writeback
- reward first playable loops
- reward proof and publication readiness

### Stewardship XP

Protection and repair are first-class progress.

Use when:

- privacy, continuity, IP, accessibility, and safety matter
- agents can harm the system by moving fast

Agent translation:

- award caught risks
- award clean rollbacks and scoped repair
- award preserving user work

### Proof Rail

Rewards should be backed by evidence that can be audited later.

Use when:

- marketplace trust matters
- worlds and skills become products
- rank affects permissions

Agent translation:

- every XP event should link to artifact, commit, eval, issue, or release
- public badges should have public evidence
- private evidence should prove existence without leaking memory

## Anti-Patterns

### Activity Counter

Counting prompts, files, or commits as mastery without review.

Fix:

- count accepted artifacts
- require gates for rank-up
- cap repeated trivial work

### One Big Level

One number hides the shape of capability.

Fix:

- track axes separately
- show loadouts
- show recent verification

### Decorative Unlocks

Rewards only decorate a profile.

Fix:

- rewards should unlock templates, tools, permissions, marketplace access, or new tasks

### Permanent Trust

Old success grants unlimited current authority.

Fix:

- keep lifetime mastery
- renew live autonomy

### Lore Fog

Fancy names make the platform harder to understand.

Fix:

- use plain product names at system boundaries
- use mythic names inside Arcanea experiences

