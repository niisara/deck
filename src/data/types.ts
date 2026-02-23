export interface Slide {
  id: number;
  title: string;
  content: string | React.ReactNode;
  backgroundColor?: string;
  backgroundImage?: string; // URL or path to background image
  kenBurns?: boolean; // Apply Ken Burns zoom-pan animation to this slide's background
  center?: boolean; // Whether to center this slide vertically (default: false)
  icon?: { name: string; size?: string }; // Optional icon to display before title (color auto-calculated from background, size defaults to "2x")
  notes?: string; // Speaker notes
}

export interface SlideGroup {
  id: string;
  title: string;
  slides: Slide[];
}

export type RevealTheme = 
  | 'black'
  | 'white'
  | 'league'
  | 'beige'
  | 'night'
  | 'serif'
  | 'simple'
  | 'solarized'
  | 'moon'
  | 'dracula'
  | 'sky'
  | 'blood';

export interface Deck {
  id: string;
  name: string;
  description: string;
  category: 'NLP' | 'RAG' | 'Fine Tuning' | 'Agent' | 'Demo' | 'Personal' | 'Inner Intelligence' | 'Other';
  theme?: RevealTheme;
  slides: Slide[];
  slideGroups?: SlideGroup[]; // Optional: if provided, use groups instead of flat slides
  cardStyle?: React.CSSProperties; // Optional: custom styling for the deck card on homepage
  cardClassName?: string; // Optional: custom CSS class for the deck card
  kenBurns?: boolean; // Apply Ken Burns zoom-pan animation to all slide backgrounds in this deck
  backgroundImages?: string[]; // Multiple images for a full-deck Ken Burns crossfade gallery backdrop
}
