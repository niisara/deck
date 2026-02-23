import { Link } from 'react-router-dom';
import { LiquidGlass } from '@liquidglass/react';
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
      <LiquidGlass
        borderRadius={20}
        blur={1}
        contrast={1.2}
        brightness={1.08}
        saturation={1.3}
        shadowIntensity={0.3}
        elasticity={0.6}
        zIndex={1000}
        className="nav-liquid"
      >
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <h1>📚 Deck</h1>
          </div>

          {/* Category Menu */}
          <div className="nav-categories">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const icon = (
                <SvgIcon
                  iconName={CATEGORY_ICONS[category]}
                  sizeName="lg"
                  darkModeInvert={true}
                />
              );

              if (isActive) {
                return (
                  <LiquidGlass
                    key={category}
                    borderRadius={50}
                    blur={0.8}
                    contrast={1.2}
                    brightness={1.1}
                    saturation={1.3}
                    shadowIntensity={0.25}
                    elasticity={0.6}
                    zIndex={1}
                    className="category-btn-liquid"
                  >
                    <button
                      className="category-btn active"
                      onClick={() => onCategoryChange(category)}
                    >
                      {icon}
                      <span className="category-label">{category}</span>
                    </button>
                  </LiquidGlass>
                );
              }

              return (
                <button
                  key={category}
                  className="category-btn inactive"
                  onClick={() => onCategoryChange(category)}
                  title={category}
                >
                  {icon}
                </button>
              );
            })}
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
      </LiquidGlass>
    </nav>
  );
}

export default Navigation;
