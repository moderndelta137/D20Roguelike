# D20 Roguelike - Game Design Document (Living)

## Summary Snapshot
- **Genre:** Roguelike adventure with tabletop boardgame presentation.
- **Core Hook:** Every turn is resolved with a D20 roll that influences encounters, loot, and narrative events.
- **Player Fantasy:** Lead a party token across a mystical board, making tactical choices while surviving unpredictable dungeon floors.

## Vision & Pillars
1. **Dice-Driven Drama:** Rolls create memorable swings while still allowing mitigation through upgrades.
2. **Boardgame Readability:** Clear, tactile tiles, tokens, and card-like panels.
3. **Short, Repeatable Runs:** 20-30 minute sessions with meaningful progression.

## Theme & Tone
- Cozy fantasy boardgame night with a hint of mysterious dungeon exploration.
- Visual language: carved wood, parchment UI, warm torchlight accents.

## Core Gameplay Loop
1. **Choose a path** across the board (tile adjacency).
2. **Resolve encounters** with a D20 roll.
3. **Apply outcomes** (combat, loot, hazards, story beats).
4. **Upgrade or recover** at rest tiles.
5. **Descend** to the next floor.

## Mechanics Overview
- **Board Tiles:** 6x4 grid for now; tiles include combat, event, rest, treasure.
- **Dice Resolution:** Base 1d20 with modifiers from gear, blessings, or debuffs.
- **Encounter Cards:** Each tile pulls from a themed deck.
- **Resource Management:** HP, stamina (turn actions), and relic slots.
- **Meta Progression:** Unlock new starting kits and encounter decks.

## Player Progression
- **Run Progression:** Equipment upgrades, temporary buffs, floor boss resets.
- **Meta Progression:** Unlock classes (Knight, Witch, Trickster), cosmetics, and lore.

## UI/UX Targets
- Split-screen layout: board on the left, card/log on the right.
- Immediate feedback on dice rolls and outcomes.
- Tooltip-driven rules explanation for first-time players.

## Audio Direction
- Ambient tavern-to-dungeon soundscape.
- Soft dice clacks, card shuffles, and UI click sounds.

## Technology Notes
- HTML/CSS/JS static front end for early prototypes.
- JSON-driven data for encounters, items, and tile rules.

## Milestones
1. **Prototype (Week 1-2):** Board, dice roll, log updates, simple state.
2. **Vertical Slice (Week 3-5):** Encounters, rewards, basic enemy AI.
3. **Content Pass (Week 6+):** More tiles, decks, and balancing.

## Open Questions
- How much player agency is offered between tiles (free move vs. dice move)?
- Is combat fully abstracted by dice or requires tactical mini-battles?
