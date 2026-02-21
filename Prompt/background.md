
Your task:
1. Choose a single Unsplash photo URL that visually fits this deck's topic and mood.
   - Use the format: https://images.unsplash.com/photo-<ID>?w=1920&q=80
   - Pick an image that is **minimal, dark, or low-contrast** (e.g. dark abstract, subtle textures, blurred bokeh, dark gradients, space, circuits, nature at dusk) so that white/light text remains fully legible on top of it.
   - Avoid busy stock photos with faces, bright colors, or heavy detail that would compete with slide text.
   - The image should feel thematically relevant to the deck subject (e.g. neural circuits for NER/ML, legal paper texture for legal NER, financial graphs for finance decks).

2. Apply the image in TWO places inside the file:

   a) **Deck-level cardStyle** — update (or add) the `cardStyle` block on the deck object:
      ```ts
      cardStyle: {
        backgroundImage: 'url(<YOUR_UNSPLASH_URL>)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      ```

   b) **First slide backgroundImage** — find the first slide in `slideGroups[0].slides[0]` (or `slides[0]` if `slideGroups` is not used) and set:
      ```ts
      backgroundImage: '<YOUR_UNSPLASH_URL>',
      ```
      Use the same URL (without the `url(...)` wrapper) as in cardStyle.

3. Return only the minimal diff / replacement blocks needed. Do not alter any other properties.
```

---

## Example (from `ner-training-deck.tsx`)

**Chosen image:** `https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80`  
*(Dark satellite view of Earth at night — minimal, dark, matches "machine learning / data" theme)*

**cardStyle applied:**
```ts
cardStyle: {
  backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
},
```

**First slide backgroundImage applied:**
```ts
backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
```

---

## Tips for choosing a good Unsplash image

| Deck Theme | Good image keywords |
|---|---|
| ML / NLP / AI | dark neural network, circuit board dark, abstract data visualization |
| Healthcare / Medical | dark blue medical, DNA helix dark, microscope abstract |
| Finance / Business | dark city skyline, stock chart minimal, abstract gradient financial |
| Legal | dark paper texture, law books minimal, marble texture dark |
| General Tech | dark code terminal, server room, abstract tech dark |
| Space / Science | galaxy, cosmos, dark space minimal |

Always append `?w=1920&q=80` to the Unsplash photo URL for optimal load performance.
