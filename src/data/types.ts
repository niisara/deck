export interface Slide {
  id: number;
  title: string;
  content: string | React.ReactNode;
  backgroundColor?: string;
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
  theme?: RevealTheme;
  slides: Slide[];
  slideGroups?: SlideGroup[]; // Optional: if provided, use groups instead of flat slides
}
