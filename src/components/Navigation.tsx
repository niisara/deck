import { Link } from 'react-router-dom';
import './Navigation.css';

interface NavigationProps {
  selectedCategory: 'NLP' | 'RAG' | 'Fine Tuning' | 'Agent' | 'Demo' | 'Inner Intelligence' | 'Other' | 'All';
  onCategoryChange: (category: 'NLP' | 'RAG' | 'Fine Tuning' | 'Agent' | 'Demo' | 'Inner Intelligence' | 'Other' | 'All') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

function Navigation({ selectedCategory, onCategoryChange, searchQuery, onSearchChange }: NavigationProps) {
  const categories: Array<'All' | 'NLP' | 'RAG' | 'Fine Tuning' | 'Agent' | 'Demo' | 'Inner Intelligence' | 'Other'> = [
    'All',
    'NLP',
    'RAG',
    'Fine Tuning',
    'Agent',
    'Demo',
    'Inner Intelligence',
    'Other'
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <h1>📚 Deck</h1>
        </div>

        {/* Category Menu */}
        <div className="nav-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="nav-search">
          <input
            type="text"
            placeholder="Search decks..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        {/* Settings Link */}
        <Link to="/settings" className="nav-settings" title="Settings">
          ⚙️
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
