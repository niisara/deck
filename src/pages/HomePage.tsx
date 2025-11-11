import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { decks } from '../data/decks';
import Navigation from '../components/Navigation';
import './HomePage.css';

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<'NLP' | 'RAG' | 'Demo' | 'Other' | 'All'>('NLP');
  const [searchQuery, setSearchQuery] = useState('');

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
                <Link 
                  key={deck.id} 
                  to={`/deck/${deck.id}`} 
                  className="deck-card"
                >
                  <div className="deck-category">{deck.category}</div>
                  <h2>{deck.name}</h2>
                  <p>{deck.description}</p>
                  <span className="slide-count">{deck.slides.length} slides</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
