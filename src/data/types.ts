export interface Slide {
  id: number;
  title: string;
  content: string;
  backgroundColor?: string;
  notes?: string; // Speaker notes
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
  theme?: RevealTheme;
  slides: Slide[];
}
