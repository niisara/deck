import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import SlideAudioControls from '../components/SlideAudioControls';
import { loadTheme } from '../utils/themeLoader';
import { useSettings } from '../hooks/useSettings';
import SvgIcon from '../lib/icons/SvgIcon';
import { marked } from 'marked';
import mermaid from 'mermaid';
import gsap from 'gsap';
import { useSlideBroadcast } from '../hooks/useSlideBroadcast';
import './DeckPage.css';

// Initialize mermaid with dark theme for speaker notes
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
  },
});

// Function to render mermaid diagrams in a document
const renderMermaidInDocument = async (doc: Document) => {
  const mermaidBlocks = doc.querySelectorAll('pre code.language-mermaid');
  
  for (let i = 0; i < mermaidBlocks.length; i++) {
    const codeBlock = mermaidBlocks[i];
    const pre = codeBlock.parentElement;
    if (!pre) continue;
    
    const mermaidCode = codeBlock.textContent || '';
    const id = `mermaid-diagram-${Date.now()}-${i}`;
    
    try {
      const { svg } = await mermaid.render(id, mermaidCode);
      const container = doc.createElement('div');
      container.className = 'mermaid-diagram';
      container.innerHTML = svg;
      container.style.cssText = 'background: transparent; padding: 10px; margin: 10px 0; overflow-x: auto;';
      pre.replaceWith(container);
    } catch (err) {
      console.error('[Mermaid] Error rendering diagram:', err);
    }
  }
};

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

// Extract plain text from slide content (strip HTML tags)
const extractPlainText = (content: string | React.ReactNode): string => {
  if (typeof content === 'string') {
    // Strip HTML tags to get raw text
    const tmp = document.createElement('div');
    tmp.innerHTML = content;
    return tmp.textContent || tmp.innerText || '';
  }
  // For React nodes, return empty – callers should render to string themselves
  return '';
};

function DeckPage() {
  const { deckId } = useParams<{ deckId: string }>();
  const navigate = useNavigate();
  const { settings } = useSettings();
  const revealRef = useRef<HTMLDivElement>(null);
  const revealInstanceRef = useRef<Reveal.Api | null>(null);
  const speakerWindowRef = useRef<Window | null>(null);
  const [showBackButton, setShowBackButton] = useState(true);
  const [broadcastEnabled, setBroadcastEnabled] = useState(() => {
    // Persist preference in sessionStorage
    return sessionStorage.getItem('deck-broadcast') === 'true';
  });
  const hideTimeoutRef = useRef<number | null>(null);
  const manuallyHiddenRef = useRef<boolean>(false);
  const [showAudioControls, setShowAudioControls] = useState(true);

  const deck = decks.find((d) => d.id === deckId);

  // Get category from URL params to navigate back to the correct filtered view
  const searchParams = new URLSearchParams(window.location.search);
  const categoryParam = searchParams.get('category');

  // Slide broadcast sync across tabs
  const { broadcastRef } = useSlideBroadcast(deckId, revealInstanceRef, broadcastEnabled);

  const toggleBroadcast = () => {
    setBroadcastEnabled((prev) => {
      const next = !prev;
      sessionStorage.setItem('deck-broadcast', String(next));
      return next;
    });
  };

  // Check if we're in PDF export mode
  const isPrintPdf = searchParams.has('print-pdf');

  // Handle back navigation to the correct category view
  const handleBackNavigation = () => {
    if (categoryParam) {
      // Navigate to home with the category state
      navigate('/', { state: { selectedCategory: categoryParam } });
    } else {
      // Fallback to browser back
      navigate(-1);
    }
  };

  // Handle PDF export
  const handlePdfExport = () => {
    // Add print-pdf to URL to trigger Reveal.js PDF export mode
    const url = new URL(window.location.href);
    url.searchParams.set('print-pdf', '');
    window.location.href = url.toString();
  };

  // Handle mouse movement to show/hide back button
  useEffect(() => {
    const handleMouseMove = () => {
      // Don't show overlay if it was manually hidden via Alt+H
      if (manuallyHiddenRef.current) {
        return;
      }
      
      setShowBackButton(true);
      setShowAudioControls(true);
      
      // Clear existing timeout
      if (hideTimeoutRef.current !== null) {
        clearTimeout(hideTimeoutRef.current);
      }
      
      // Set new timeout to hide after 3 seconds
      hideTimeoutRef.current = window.setTimeout(() => {
        setShowBackButton(false);
        setShowAudioControls(false);
      }, 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial timeout
    hideTimeoutRef.current = window.setTimeout(() => {
      setShowBackButton(false);
      setShowAudioControls(false);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideTimeoutRef.current !== null) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  // Handle Alt + H shortcut to toggle overlay icons and speaker notes
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key.toLowerCase() === 'h') {
        event.preventDefault();
        
        // Toggle overlay icons and audio controls
        setShowBackButton(prev => {
          const newState = !prev;
          
          // Also toggle audio controls
          setShowAudioControls(newState);
          
          // Clear any existing hide timeout when manually toggling
          if (hideTimeoutRef.current !== null) {
            clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = null;
          }
          
          // If showing, clear manual hide flag and set auto-hide timeout
          if (newState) {
            manuallyHiddenRef.current = false;
            hideTimeoutRef.current = window.setTimeout(() => {
              setShowBackButton(false);
              setShowAudioControls(false);
            }, 3000);
          } else {
            // If hiding, set manual hide flag to prevent mouse from showing it
            manuallyHiddenRef.current = true;
          }
          
          // Toggle speaker notes window visibility
          if (speakerWindowRef.current && !speakerWindowRef.current.closed) {
            try {
              if (newState) {
                // Show and focus speaker notes
                speakerWindowRef.current.focus();
              } else {
                // Minimize or blur speaker notes (focus back to main window)
                window.focus();
              }
            } catch (err) {
              console.error('[Shortcut] Error toggling speaker notes:', err);
            }
          }
          
          return newState;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
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

    // Check if we're in PDF export mode
    const isPrintPdf = new URLSearchParams(window.location.search).has('print-pdf');

    // Initialize Reveal.js with all built-in plugins
    const revealInstance = new Reveal(revealRef.current, {
      embedded: false,
      controls: true,
      progress: true,
      center: false, // Default to false, individual slides can override with data-center attribute
      hash: true,
      transition: 'slide',
      transitionSpeed: 'default',
      backgroundTransition: 'fade',
      width: '100%',
      height: '100%',
      margin: 0.04,
      minScale: 0.2,
      maxScale: 2.0,
      pdfMaxPagesPerSlide: 1,
      pdfSeparateFragments: false,
      mouseWheel: false,
      hideInactiveCursor: true,
      hideCursorTime: 5000,
      keyboard: {
        33: null, // Disable Page Up key (keycode 33) - let browser handle scrolling
        34: null  // Disable Page Down key (keycode 34) - let browser handle scrolling
      } as any, // Type assertion needed because TypeScript definitions are incomplete
      plugins: [
        RevealHighlight,
        RevealMarkdown,
        RevealSearch,
        RevealNotes,
        RevealMath,
        RevealZoom
      ]
    });

    revealInstance.initialize().then(() => {
      // If in PDF mode, trigger print after a short delay to ensure rendering is complete
      if (isPrintPdf) {
        setTimeout(() => {
          window.print();
        }, 1000);
      }
      
      // Inject dark theme CSS into speaker notes window
      window.addEventListener('message', (event) => {
        // Listen for speaker notes window messages
        console.log('[Speaker Message] Received message:', event.data);
        if (event.data && typeof event.data === 'string') {
          try {
            const data = JSON.parse(event.data);
            if (data.namespace === 'reveal-notes' && data.type === 'connected') {
              console.log('[Speaker Message] Speaker notes connected!');
              // Speaker notes window is connected, inject dark theme and render mermaid
              setTimeout(async () => {
                speakerWindowRef.current = window.open('', 'reveal.js - Notes');
                console.log('[Speaker Message] Got speaker window ref:', speakerWindowRef.current);
                if (speakerWindowRef.current && speakerWindowRef.current.document) {
                  const link = speakerWindowRef.current.document.createElement('link');
                  link.rel = 'stylesheet';
                  link.href = '/speaker-dark.css';
                  speakerWindowRef.current.document.head.appendChild(link);
                  
                  // Render mermaid diagrams in speaker notes
                  await renderMermaidInDocument(speakerWindowRef.current.document);
                }
              }, 500);
            }
          } catch (e) {
            // Ignore parse errors
          }
        }
      });

      // Scroll speaker notes to top when slide changes and render mermaid diagrams
      const handleSlideChange = async () => {
        // Broadcast slide change to other tabs
        const indices = revealInstance.getIndices();
        broadcastRef.current(indices.h, indices.v);

        // Trigger GSAP animations for the current slide
        triggerSlideAnimations();
        
        // Only scroll if speaker window is already open - don't try to open it
        if (speakerWindowRef.current && !speakerWindowRef.current.closed) {
          try {
            const doc = speakerWindowRef.current.document;
            
            // Target the .speaker-controls-notes element which contains the notes
            const notesContainer = doc.querySelector('.speaker-controls-notes') as HTMLElement;
            
            if (notesContainer) {
              // Scroll to top instantly when slide changes
              notesContainer.scrollTo({
                top: 0,
                behavior: 'instant'
              });
            }
            
            // Render mermaid diagrams in the new notes content after a short delay
            setTimeout(async () => {
              try {
                await renderMermaidInDocument(doc);
              } catch (err) {
                console.error('[Mermaid] Error rendering diagrams on slide change:', err);
              }
            }, 100);
          } catch (err) {
            console.error('[Speaker Notes] Error scrolling speaker notes to top:', err);
          }
        }
      };
      
      // Function to trigger GSAP animations for current slide
      const triggerSlideAnimations = () => {
        const currentSlide = revealInstance.getCurrentSlide();
        if (!currentSlide) return;
        
        // Get animation delay from environment variable (default to 1000ms)
        const baseDelay = parseInt(import.meta.env.VITE_GSAP_ANIMATION_DELAY || '1000');
        
        // Find all GSAP animated elements in the current slide
        const animatedElements = currentSlide.querySelectorAll('[data-gsap-animation]');
        
        animatedElements.forEach((element: Element) => {
          const htmlElement = element as HTMLElement;
          const animationType = htmlElement.getAttribute('data-gsap-animation');
          const duration = parseFloat(htmlElement.getAttribute('data-gsap-duration') || '0.8');
          const delay = parseFloat(htmlElement.getAttribute('data-gsap-delay') || '0');
          
          // Set initial hidden state immediately
          if (animationType) {
            setInitialState(htmlElement, animationType);
            // Animate after base delay + element's own delay
            setTimeout(() => {
              animateElement(htmlElement, animationType, duration, 0);
            }, baseDelay + (delay * 1000));
          }
        });
        
        // Handle stagger lists
        const staggerLists = currentSlide.querySelectorAll('[data-gsap-stagger]');
        staggerLists.forEach((list: Element) => {
          const htmlList = list as HTMLElement;
          const duration = parseFloat(htmlList.getAttribute('data-gsap-duration') || '0.5');
          const stagger = parseFloat(htmlList.getAttribute('data-gsap-stagger') || '0.1');
          
          const items = htmlList.querySelectorAll('.gsap-stagger-item');
          if (items.length > 0) {
            // Set initial hidden state
            gsap.set(items, { y: 30, opacity: 0 });
            // Animate after base delay
            setTimeout(() => {
              gsap.fromTo(
                items,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration, stagger, ease: 'power2.out' }
              );
            }, baseDelay);
          }
        });
      };
      
      // Helper function to set initial hidden state
      const setInitialState = (element: HTMLElement, animation: string) => {
        const initialStates: Record<string, any> = {
          fadeIn: { opacity: 0 },
          slideInLeft: { x: -100, opacity: 0 },
          slideInRight: { x: 100, opacity: 0 },
          slideInTop: { y: -100, opacity: 0 },
          slideInBottom: { y: 100, opacity: 0 },
          scaleIn: { scale: 0, opacity: 0 },
          bounceIn: { scale: 0, opacity: 0 },
          rotateIn: { rotation: -180, scale: 0, opacity: 0 },
          flipCard: { rotationY: -180, opacity: 0 }
        };
        
        const state = initialStates[animation];
        if (state) {
          gsap.set(element, state);
        }
      };
      
      // Helper function to animate individual elements
      const animateElement = (element: HTMLElement, animation: string, duration: number, delay: number) => {
        const animations: Record<string, any> = {
          fadeIn: { from: { opacity: 0 }, to: { opacity: 1, duration, delay, ease: 'power2.out' } },
          slideInLeft: { from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration, delay, ease: 'power3.out' } },
          slideInRight: { from: { x: 100, opacity: 0 }, to: { x: 0, opacity: 1, duration, delay, ease: 'power3.out' } },
          slideInTop: { from: { y: -100, opacity: 0 }, to: { y: 0, opacity: 1, duration, delay, ease: 'power3.out' } },
          slideInBottom: { from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration, delay, ease: 'power3.out' } },
          scaleIn: { from: { scale: 0, opacity: 0 }, to: { scale: 1, opacity: 1, duration, delay, ease: 'back.out(1.7)' } },
          bounceIn: { from: { scale: 0, opacity: 0 }, to: { scale: 1, opacity: 1, duration, delay, ease: 'elastic.out(1, 0.5)' } },
          rotateIn: { from: { rotation: -180, scale: 0, opacity: 0 }, to: { rotation: 0, scale: 1, opacity: 1, duration, delay, ease: 'back.out(1.7)' } },
          flipCard: { from: { rotationY: -180, opacity: 0 }, to: { rotationY: 0, opacity: 1, duration, delay, ease: 'power2.out' } }
        };
        
        const anim = animations[animation];
        if (anim) {
          gsap.fromTo(element, anim.from, anim.to);
        }
      };
      
      // Trigger animations for the initial slide
      setTimeout(() => triggerSlideAnimations(), 100);
      
      // Listen for slide change events
      revealInstance.on('slidechanged', handleSlideChange);

      // Global keyboard shortcuts for scrolling speaker notes (Ctrl+Alt+Arrow)
      // Use capture phase to intercept before Reveal.js handles the event
      const handleSpeakerScroll = (event: KeyboardEvent) => {
        if (event.ctrlKey && event.altKey && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
          // Only scroll if speaker window is already open - don't try to open it
          if (speakerWindowRef.current && !speakerWindowRef.current.closed) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            
            try {
              const scrollAmount = 100;
              const doc = speakerWindowRef.current.document;
              
              // Target the .speaker-controls-notes element which should be scrollable with our CSS
              const notesContainer = doc.querySelector('.speaker-controls-notes') as HTMLElement;
              
              if (notesContainer) {
                // Use smooth scrolling with smaller steps
                notesContainer.scrollBy({
                  top: event.key === 'ArrowDown' ? scrollAmount : -scrollAmount,
                  behavior: 'smooth'
                });
              } else {
                speakerWindowRef.current.scrollBy({
                  top: event.key === 'ArrowDown' ? scrollAmount : -scrollAmount,
                  behavior: 'smooth'
                });
              }
            } catch (err) {
              console.error('[Speaker Scroll] Error scrolling speaker window:', err);
            }
          }
        }
      };
      window.addEventListener('keydown', handleSpeakerScroll, true); // true = capture phase
      (window as any).__speakerScrollHandler = handleSpeakerScroll;
    });
    revealInstanceRef.current = revealInstance;

    return () => {
      if (revealInstanceRef.current) {
        revealInstanceRef.current.destroy();
      }
      // Clean up speaker scroll handler
      const handler = (window as any).__speakerScrollHandler;
      if (handler) {
        window.removeEventListener('keydown', handler, true); // true = capture phase
        delete (window as any).__speakerScrollHandler;
      }
    };
  }, [deck]);

  if (!deck) {
    return (
      <div className="deck-page-error">
        <h1>Deck not found</h1>
        <button onClick={handleBackNavigation} className="home-button">← Back</button>
      </div>
    );
  }

  return (
    <div className="deck-page">
      {!isPrintPdf && (
        <>
          <button 
            onClick={handleBackNavigation}
            className={`back-button-overlay ${showBackButton ? 'visible' : ''}`}
            title="Go Back (Alt+H to toggle overlay)"
          >
            <SvgIcon iconName="duo-arrow-left" sizeName="lg" />
          </button>
          
          <button 
            onClick={handlePdfExport}
            className={`pdf-export-button ${showBackButton ? 'visible' : ''}`}
            title="Export to PDF (Alt+H to toggle overlay)"
          >
            <SvgIcon iconName="duo-file-pdf" sizeName="lg" />
          </button>

          <button
            onClick={toggleBroadcast}
            className={`broadcast-button ${showBackButton ? 'visible' : ''} ${broadcastEnabled ? 'active' : ''}`}
            title={broadcastEnabled ? 'Broadcast ON – slides sync across tabs (Alt+H to toggle overlay)' : 'Broadcast OFF – enable to sync slides across tabs (Alt+H to toggle overlay)'}
          >
            <SvgIcon iconName="duo-tower-broadcast" sizeName="lg" />
          </button>
        </>
      )}
      
      <div className="reveal" ref={revealRef}>
        <div className="slides">
          {deck.slideGroups ? (
            // Render with groups (vertical slides)
            deck.slideGroups.map((group) => (
              <section key={group.id}>
                {group.slides.map((slide) => (
                  <section
                    key={slide.id}
                    data-background-color={slide.backgroundImage ? undefined : (slide.backgroundColor || '#2c3e50')}
                    data-background-image={slide.backgroundImage}
                    data-background-size="cover"
                    data-background-position="center"
                    className={`${slide.center ? 'center' : ''} ${slide.backgroundImage ? 'has-background-image' : ''}`}
                  >
                    {slide.title && (
                      <h2 style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        {slide.icon && (
                          <SvgIcon 
                            iconName={slide.icon.name as any} 
                            sizeName={(slide.icon.size || "5x") as any} 
                            style={{ color: getIconColor(slide.backgroundColor || '#2c3e50') }} 
                          />
                        )}
                        <span>{slide.title}</span>
                      </h2>
                    )}
                    {typeof slide.content === 'string' ? (
                      <div dangerouslySetInnerHTML={{ __html: slide.content }} />
                    ) : (
                      <div>{slide.content}</div>
                    )}
                    {slide.notes && (
                      <aside className="notes">
                        <div 
                          style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', margin: 0 }}
                          dangerouslySetInnerHTML={{ __html: marked(slide.notes) }}
                        />
                      </aside>
                    )}
                    {!isPrintPdf && (
                      <SlideAudioControls
                        slideContent={`${slide.title}. ${extractPlainText(slide.content)}`}
                        notes={slide.notes}
                        iconColor={getIconColor(slide.backgroundColor || '#2c3e50')}
                        autoPlayContent={settings.autoPlayContent}
                        autoPlayNotes={settings.autoPlayNotes}
                        showControls={showAudioControls}
                      />
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
                data-background-color={slide.backgroundImage ? undefined : (slide.backgroundColor || '#2c3e50')}
                data-background-image={slide.backgroundImage}
                data-background-size="cover"
                data-background-position="center"
                className={`${slide.center ? 'center' : ''} ${slide.backgroundImage ? 'has-background-image' : ''}`}
              >
                {slide.title && (
                  <h2 style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {slide.icon && (
                      <SvgIcon 
                        iconName={slide.icon.name as any} 
                        sizeName={(slide.icon.size || "5x") as any} 
                        style={{ color: getIconColor(slide.backgroundColor || '#2c3e50') }} 
                      />
                    )}
                    <span>{slide.title}</span>
                  </h2>
                )}
                {typeof slide.content === 'string' ? (
                  <div dangerouslySetInnerHTML={{ __html: slide.content }} />
                ) : (
                  <div>{slide.content}</div>
                )}
                {slide.notes && (
                  <aside className="notes">
                    <div 
                      style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: marked(slide.notes) }}
                    />
                  </aside>
                )}
                {!isPrintPdf && (
                  <SlideAudioControls
                    slideContent={`${slide.title}. ${extractPlainText(slide.content)}`}
                    notes={slide.notes}
                    iconColor={getIconColor(slide.backgroundColor || '#2c3e50')}
                    autoPlayContent={settings.autoPlayContent}
                    autoPlayNotes={settings.autoPlayNotes}
                    showControls={showAudioControls}
                  />
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
