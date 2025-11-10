export interface Slide {
  id: number;
  title: string;
  content: string;
  backgroundColor?: string;
  notes?: string; // Speaker notes
}

export interface Deck {
  id: string;
  name: string;
  description: string;
  slides: Slide[];
}
