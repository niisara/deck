import { Link } from 'react-router-dom';
import { decks } from '../data/decks';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Presentation Decks</h1>
      <p className="subtitle">Select a deck to view the presentation</p>
      
      <div className="deck-grid">
        {decks.map((deck) => (
          <Link 
            key={deck.id} 
            to={`/deck/${deck.id}`} 
            className="deck-card"
          >
            <h2>{deck.name}</h2>
            <p>{deck.description}</p>
            <span className="slide-count">{deck.slides.length} slides</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
