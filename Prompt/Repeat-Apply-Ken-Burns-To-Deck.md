# Apply Ken Burns Background to a Deck

Open the deck file and make these changes:

## 1. Add `kenBurns: true` and `backgroundImages`

Add these properties to the deck object right after the `theme` property. Pick 3-5 high-quality Unsplash landscape/abstract images relevant to the deck topic:

```tsx
theme: 'moon',
kenBurns: true,
backgroundImages: [
  'https://images.unsplash.com/photo-XXXXXXXXX?w=1920&q=80',
  'https://images.unsplash.com/photo-XXXXXXXXX?w=1920&q=80',
  'https://images.unsplash.com/photo-XXXXXXXXX?w=1920&q=80',
],
```

## 2. Remove the entire `cardStyle` block

Delete the full `cardStyle` property and its contents:

```tsx
// DELETE this:
cardStyle: {
  backgroundImage: 'url(https://...)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
},
```

## 3. Remove every `backgroundColor` and `backgroundImage` from individual slides

Search the entire file and delete every per-slide `backgroundColor` and `backgroundImage` line. These look like:

```tsx
// DELETE these wherever they appear inside slide objects:
backgroundColor: '#2b0e77',
backgroundImage: 'https://images.unsplash.com/...',
```

The Ken Burns gallery backdrop replaces all individual slide backgrounds, so these are no longer needed.
