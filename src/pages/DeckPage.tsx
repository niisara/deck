import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import { decks } from '../data/decks';
import './DeckPage.css';

function DeckPage() {
  const { deckId } = useParams<{ deckId: string }>();
  const revealRef = useRef<HTMLDivElement>(null);
  const revealInstanceRef = useRef<Reveal.Api | null>(null);

  const deck = decks.find((d) => d.id === deckId);

  useEffect(() => {
    if (!deck || !revealRef.current) return;

    // Initialize Reveal.js
    const revealInstance = new Reveal(revealRef.current, {
      embedded: false,
      controls: true,
      progress: true,
      center: true,
      hash: true,
      transition: 'slide',
    });

    revealInstance.initialize();
    revealInstanceRef.current = revealInstance;

    return () => {
      if (revealInstanceRef.current) {
        revealInstanceRef.current.destroy();
      }
    };
  }, [deck]);

  if (!deck) {
    return (
      <div className="deck-page-error">
        <h1>Deck not found</h1>
        <Link to="/" className="home-button">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="deck-page">
      <Link to="/" className="home-button-overlay">← Home</Link>
      
      <div className="reveal" ref={revealRef}>
        <div className="slides">
          {deck.slides.map((slide) => (
            <section
              key={slide.id}
              data-background-color={slide.backgroundColor || '#2c3e50'}
            >
              <h2>{slide.title}</h2>
              <p>{slide.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeckPage;
