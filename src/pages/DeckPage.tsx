import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealSearch from 'reveal.js/plugin/search/search';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealMath from 'reveal.js/plugin/math/math';
import RevealZoom from 'reveal.js/plugin/zoom/zoom';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/plugin/highlight/monokai.css';
import { decks } from '../data/decks';
import { loadTheme } from '../utils/themeLoader';
import SvgIcon from '../lib/icons/SvgIcon';
import './DeckPage.css';

// Helper function to lighten or darken a color
const adjustColor = (color: string, amount: number): string => {
  const hex = color.replace('#', '');
  const r = Math.max(0, Math.min(255, parseInt(hex.substring(0, 2), 16) + amount));
  const g = Math.max(0, Math.min(255, parseInt(hex.substring(2, 4), 16) + amount));
  const b = Math.max(0, Math.min(255, parseInt(hex.substring(4, 6), 16) + amount));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

// Helper function to determine if color is dark or light
const isDarkColor = (color: string): boolean => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
};

// Get icon color that contrasts with background
const getIconColor = (bgColor: string = '#2c3e50'): string => {
  // If background is dark, lighten it; if light, darken it
  return isDarkColor(bgColor) ? adjustColor(bgColor, 80) : adjustColor(bgColor, -80);
};

function DeckPage() {
  const { deckId } = useParams<{ deckId: string }>();
  const revealRef = useRef<HTMLDivElement>(null);
  const revealInstanceRef = useRef<Reveal.Api | null>(null);
  const [showHomeButton, setShowHomeButton] = useState(true);
  const hideTimeoutRef = useRef<number | null>(null);

  const deck = decks.find((d) => d.id === deckId);

  // Handle mouse movement to show/hide home button
  useEffect(() => {
    const handleMouseMove = () => {
      setShowHomeButton(true);
      
      // Clear existing timeout
      if (hideTimeoutRef.current !== null) {
        clearTimeout(hideTimeoutRef.current);
      }
      
      // Set new timeout to hide after 3 seconds
      hideTimeoutRef.current = window.setTimeout(() => {
        setShowHomeButton(false);
      }, 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial timeout
    hideTimeoutRef.current = window.setTimeout(() => {
      setShowHomeButton(false);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideTimeoutRef.current !== null) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  // Dynamically load theme CSS
  useEffect(() => {
    if (!deck) return;

    const theme = deck.theme || 'black';
    const cleanup = loadTheme(theme);

    return cleanup;
  }, [deck]);

  useEffect(() => {
    if (!deck || !revealRef.current) return;

    // Initialize Reveal.js with all built-in plugins
    const revealInstance = new Reveal(revealRef.current, {
      embedded: false,
      controls: true,
      progress: true,
      center: false, // Default to false, individual slides can override with data-center attribute
      hash: true,
      transition: 'slide',
      width: '100%',
      height: '100%',
      margin: 0.04,
      minScale: 0.2,
      maxScale: 2.0,
      plugins: [
        RevealHighlight,
        RevealMarkdown,
        RevealSearch,
        RevealNotes,
        RevealMath,
        RevealZoom
      ]
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
      <Link 
        to="/" 
        className={`home-button-overlay ${showHomeButton ? 'visible' : ''}`}
      >
        ← Home
      </Link>
      
      <div className="reveal" ref={revealRef}>
        <div className="slides">
          {deck.slideGroups ? (
            // Render with groups (vertical slides)
            deck.slideGroups.map((group) => (
              <section key={group.id}>
                {group.slides.map((slide) => (
                  <section
                    key={slide.id}
                    data-background-color={slide.backgroundColor || '#2c3e50'}
                    className={slide.center ? 'center' : ''}
                  >
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      {slide.icon && (
                        <SvgIcon 
                          iconName={slide.icon.name as any} 
                          sizeName={(slide.icon.size || "2x") as any} 
                          style={{ color: getIconColor(slide.backgroundColor || '#2c3e50') }} 
                        />
                      )}
                      <span>{slide.title}</span>
                    </h2>
                    {typeof slide.content === 'string' ? (
                      <div dangerouslySetInnerHTML={{ __html: slide.content }} />
                    ) : (
                      <div>{slide.content}</div>
                    )}
                    {slide.notes && (
                      <aside className="notes">
                        {slide.notes}
                      </aside>
                    )}
                  </section>
                ))}
              </section>
            ))
          ) : (
            // Render flat slides (backward compatibility)
            deck.slides.map((slide) => (
              <section
                key={slide.id}
                data-background-color={slide.backgroundColor || '#2c3e50'}
                className={slide.center ? 'center' : ''}
              >
                <h2 style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  {slide.icon && (
                    <SvgIcon 
                      iconName={slide.icon.name as any} 
                      sizeName={(slide.icon.size || "2x") as any} 
                      style={{ color: getIconColor(slide.backgroundColor || '#2c3e50') }} 
                    />
                  )}
                  <span>{slide.title}</span>
                </h2>
                {typeof slide.content === 'string' ? (
                  <div dangerouslySetInnerHTML={{ __html: slide.content }} />
                ) : (
                  <div>{slide.content}</div>
                )}
                {slide.notes && (
                  <aside className="notes">
                    {slide.notes}
                  </aside>
                )}
              </section>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default DeckPage;
