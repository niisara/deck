import { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { decks } from '../data/decks';
import Navigation from '../components/Navigation';
import './HomePage.css';

// 10 curated tech / AI / abstract splash images (Unsplash)
const SPLASH_IMAGES = [
  'https://images.unsplash.com/photo-1617554658760-5d8f6882caf9?w=1920&q=80', // AI neural
  'https://images.unsplash.com/photo-1618083544322-03b922bd4fdc?w=1920&q=80', // robot face
  'https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?w=1920&q=80', // circuit board
  'https://images.unsplash.com/photo-1551221236-6f908cc5838a?w=1920&q=80',  // abstract blue
  'https://images.unsplash.com/photo-1551221236-30e276f9e0df?w=1920&q=80', // cosmos
  'https://images.unsplash.com/photo-1602171080230-02c0a344d650?w=1920&q=80', // retro tech
  'https://images.unsplash.com/photo-1485872752367-6471d363f1bd?w=1920&q=80', // data viz
  'https://images.unsplash.com/photo-1580451998921-c1e6e1ababe0?w=1920&q=80', // abstract neon
  'https://images.unsplash.com/photo-1544743785-0e2c0e641189?w=1920&q=80', // matrix code
  'https://images.unsplash.com/photo-1715193678341-31634700f56b?w=1920&q=80', // gradient mesh
];

// 4 Ken Burns variants cycled through in order
const KB_VARIANTS = ['kb1', 'kb2', 'kb3', 'kb4'] as const;

function HomePage() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<'NLP' | 'RAG' | 'Fine Tuning' | 'Agent' | 'Demo' | 'Inner Intelligence' | 'Other' | 'All'>('NLP');
  const [searchQuery, setSearchQuery] = useState('');

  // Background slideshow state
  const [activeLayer, setActiveLayer] = useState<0 | 1>(0);
  const [layerImages, setLayerImages] = useState<[string, string]>(() => {
    const start = Math.floor(Math.random() * SPLASH_IMAGES.length);
    return [SPLASH_IMAGES[start], SPLASH_IMAGES[(start + 1) % SPLASH_IMAGES.length]];
  });
  const [layerVariants, setLayerVariants] = useState<[string, string]>(['kb1', 'kb2']);
  const imageIndexRef = useRef<number>(1); // next image to show
  const variantIndexRef = useRef<number>(2); // next KB variant

  // Check if we're navigating back with a category state
  useEffect(() => {
    if (location.state && (location.state as any).selectedCategory) {
      setSelectedCategory((location.state as any).selectedCategory);
    }
  }, [location.state]);

  // Cycle background images with crossfade every 8 s
  useEffect(() => {
    const interval = setInterval(() => {
      const nextImageIdx = imageIndexRef.current % SPLASH_IMAGES.length;
      const nextVariantIdx = variantIndexRef.current % KB_VARIANTS.length;
      imageIndexRef.current = nextImageIdx + 1;
      variantIndexRef.current = nextVariantIdx + 1;

      setActiveLayer((prev) => {
        const next = (prev === 0 ? 1 : 0) as 0 | 1;
        setLayerImages((imgs) => {
          const updated = [...imgs] as [string, string];
          updated[next] = SPLASH_IMAGES[nextImageIdx];
          return updated;
        });
        setLayerVariants((vars) => {
          const updated = [...vars] as [string, string];
          updated[next] = KB_VARIANTS[nextVariantIdx];
          return updated;
        });
        return next;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Filter decks based on category and search query
  const filteredDecks = useMemo(() => {
    return decks.filter((deck) => {
      // Filter by category
      const matchesCategory = selectedCategory === 'All' || deck.category === selectedCategory;
      
      // Filter by search query
      const matchesSearch = 
        searchQuery === '' ||
        deck.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deck.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* Dynamic Ken Burns background */}
      <div className="home-bg-container" aria-hidden="true">
        {([0, 1] as const).map((idx) => (
          <div
            key={idx}
            className={`home-bg-layer home-bg-layer--${layerVariants[idx]} ${activeLayer === idx ? 'home-bg-layer--active' : ''}`}
            style={{ backgroundImage: `url(${layerImages[idx]})` }}
          />
        ))}
        <div className="home-bg-overlay" />
      </div>

      <Navigation
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <div className="home-page">
        <div className="home-content">
          <h1>Presentation Decks</h1>
          <p className="subtitle">
            {selectedCategory === 'All' 
              ? 'Showing all decks' 
              : `Showing ${selectedCategory} decks`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
          
          {filteredDecks.length === 0 ? (
            <div className="no-results">
              <p>No decks found matching your criteria.</p>
              <p className="suggestion">Try adjusting your search or category filter.</p>
            </div>
          ) : (
            <div className="deck-grid">
              {filteredDecks.map((deck) => (
                <div key={deck.id} className="deck-card-glass">
                  <Link 
                    to={`/deck/${deck.id}?category=${selectedCategory}`} 
                    className={`deck-card ${deck.cardClassName || ''}`}
                  >
                    <div className="deck-category">{deck.category}</div>
                    <h2>{deck.name}</h2>
                    <p>{deck.description}</p>
                    <span className="slide-count">{deck.slideCount} slides</span>
                  </Link>
                </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
