import { Link } from 'react-router-dom';
import SvgIcon from '../lib/icons/SvgIcon';
import type { IconName } from '../lib/icons/Icons';
import './Navigation.css';

interface NavigationProps {
  selectedCategory: 'NLP' | 'RAG' | 'Fine Tuning' | 'Agent' | 'Demo' | 'Inner Intelligence' | 'Other' | 'All';
  onCategoryChange: (category: 'NLP' | 'RAG' | 'Fine Tuning' | 'Agent' | 'Demo' | 'Inner Intelligence' | 'Other' | 'All') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const CATEGORY_ICONS: Record<string, IconName> = {
  All:                 'duo-layer-group',
  NLP:                 'duo-message',
  RAG:                 'duo-magnifying-glass',
  'Fine Tuning':       'duo-sliders',
  Agent:               'duo-robot',
  Demo:                'duo-wand-magic-sparkles',
  'Inner Intelligence':'duo-brain-circuit',
  Other:               'duo-cube',
};

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
      <div className="nav-glass-bar">
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
                <SvgIcon
                  iconName={CATEGORY_ICONS[category]}
                  sizeName="lg"
                  darkModeInvert={true}
                  className="category-icon"
                />
                <span className="category-label">{category}</span>
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
            <SvgIcon iconName="duo-magnifying-glass" sizeName="sm" darkModeInvert={true} className="search-icon" />
          </div>

          {/* Settings Link */}
          <Link to="/settings" className="nav-settings" title="Settings">
            <SvgIcon iconName="duo-gear" sizeName="lg" darkModeInvert={true} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
