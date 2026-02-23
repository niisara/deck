Create a new deck 

9 Temporal Workflow Patterns for Durable Execution	Saga, State Machine, Long-Running, Cron, Child Workflows, Signals, Queries, Continue-As-New, Update

Infer the deck topic, category, and techniques from the filename provided. Then create a complete, production-ready deck file following ALL rules below. Use the existing decks in src/data/ (e.g. graph-retrieval-deck.tsx, chunking-techniques-deck.tsx) as style references.



After creating the file, add the import and the export name to src/data/decks.ts.


## Slide Groups Structure

### Group 1 — introduction
- Slide 1: Title slide (center: true). Show topic icon, audience, what you'll get, credits: "Prepared by: Nisar A / niisar.com".
- Slide 2: Overview — numbered grid of all techniques + MermaidPopover with graph TB showing technique categories.
- Slide 3: Why It Matters — motivation, pain points, where it fits in the ML/AI stack. MermaidPopover for pipeline/context diagram.

### Groups 2…N — one group per technique (id: technique-N-slug)

Each technique gets multiple slides: like overview, how it works, pros & cons, config & tools , etc.


### Last Group — summary
- Slide 1: Cheat Sheet — decision table comparing all techniques (memory cost, compute cost, data needed, best use case).
- Slide 2: Key Takeaways — top 5 actionable bullets + call-to-action.


## GSAP Animation Rules

- Title slides → rotateIn on icon, scaleIn on headline, fadeIn on subtitle/credits.
- Lists → GSAPStaggerList with stagger 0.08–0.12.
- Two-column slides → slideInLeft + slideInRight for opposing columns.
- Key stats/numbers → bounceIn or scaleIn.
- Never repeat the same animation type on two consecutive slides.
- Every slide must have at least one animated element.
- Durations: quick items 0.5–0.7s, content blocks 0.7–0.9s, hero elements 0.9–1.2s.

---

## Speaker Notes (empty notes field — required on EVERY slide)


## Register in decks.ts

After writing the deck file, add the import and insert the export name into the decks array in src/data/decks.ts.

---

## Quality Checklist — verify before finishing

- [ ] Every slide has a empty notes field
- [ ] Every slide has at least one GSAPAnimated or GSAPStaggerList
- [ ] category is a valid enum value from types.ts
- [ ] Export name, deck id, and file name are consistent
- [ ] Import + array entry added to src/data/decks.ts
- [ ] npx tsc --noEmit passes with no errors
