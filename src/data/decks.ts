export interface Slide {
  id: number;
  title: string;
  content: string;
  backgroundColor?: string;
}

export interface Deck {
  id: string;
  name: string;
  description: string;
  slides: Slide[];
}

export const decks: Deck[] = [
  {
    id: 'demo-deck',
    name: 'Demo Deck',
    description: 'A demonstration presentation with 3 slides',
    slides: [
      {
        id: 1,
        title: 'Welcome to Demo Deck',
        content: 'This is the first slide of our demo presentation.',
        backgroundColor: '#4A90E2'
      },
      {
        id: 2,
        title: 'Second Slide',
        content: 'Here is some content on the second slide. You can add any HTML content here.',
        backgroundColor: '#50C878'
      },
      {
        id: 3,
        title: 'Final Slide',
        content: 'Thank you for viewing this demo deck!',
        backgroundColor: '#E94B3C'
      }
    ]
  },
  {
    id: 'sample-deck',
    name: 'Sample Deck',
    description: 'Another example deck',
    slides: [
      {
        id: 1,
        title: 'Sample Deck Start',
        content: 'This is a different deck with its own slides.',
        backgroundColor: '#9B59B6'
      },
      {
        id: 2,
        title: 'Middle Section',
        content: 'Each deck can have different content and styling.',
        backgroundColor: '#F39C12'
      },
      {
        id: 3,
        title: 'End',
        content: 'Navigate between decks using the home page.',
        backgroundColor: '#1ABC9C'
      }
    ]
  }
];
