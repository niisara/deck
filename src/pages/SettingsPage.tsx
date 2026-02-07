import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../hooks/useSettings';
import { clearCache, getCacheStats } from '../utils/cacheManager';
import PasswordGate from '../components/PasswordGate';
import './SettingsPage.css';

function SettingsPage() {
  const { settings, updateSetting, resetSettings } = useSettings();
  const [cacheStats, setCacheStats] = useState<{ count: number; providers: Record<string, number> } | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  const loadCacheStats = async () => {
    setLoading(true);
    try {
      const stats = await getCacheStats();
      setCacheStats(stats);
    } catch (err: any) {
      showMessage('error', `Failed to load cache stats: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClearCache = async (provider?: string) => {
    if (!confirm(`Clear ${provider || 'all'} cached audio files?`)) return;

    setLoading(true);
    try {
      const count = await clearCache(provider);
      showMessage('success', `Cleared ${count} cached audio file${count !== 1 ? 's' : ''}`);
      loadCacheStats();
    } catch (err: any) {
      showMessage('error', `Failed to clear cache: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleResetSettings = () => {
    if (!confirm('Reset all settings to defaults?')) return;
    resetSettings();
    showMessage('success', 'Settings reset to defaults');
  };

  return (
    <PasswordGate>
      <div className="settings-page">
        <div className="settings-container">
          <header className="settings-header">
            <Link to="/" className="back-link">← Back to Home</Link>
            <h1>⚙️ Settings</h1>
            <p>Configure your presentation preferences</p>
          </header>

        {message && (
          <div className={`settings-message ${message.type}`}>
            {message.text}
          </div>
        )}

        {/* TTS Auto-play Settings */}
        <section className="settings-section">
          <h2>🔊 Text-to-Speech</h2>
          
          <div className="setting-item">
            <div className="setting-label">
              <strong>Auto-play slide content</strong>
              <p>Automatically read slide content when navigating to a new slide</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.autoPlayContent}
                onChange={(e) => updateSetting('autoPlayContent', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              <strong>Auto-play speaker notes</strong>
              <p>Automatically read speaker notes when navigating to a new slide</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.autoPlayNotes}
                onChange={(e) => updateSetting('autoPlayNotes', e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </section>

        {/* Cache Management */}
        <section className="settings-section">
          <h2>💾 Cache Management</h2>
          <p className="section-desc">
            Audio files are cached to save API costs. Clear cache if you've updated content or need to free storage.
          </p>

          <div className="cache-stats">
            <button
              className="btn btn-secondary"
              onClick={loadCacheStats}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load Cache Stats'}
            </button>

            {cacheStats && (
              <div className="stats-display">
                <div className="stat">
                  <strong>{cacheStats.count}</strong>
                  <span>Total cached files</span>
                </div>
                {Object.entries(cacheStats.providers).map(([provider, count]) => (
                  <div key={provider} className="stat">
                    <strong>{count}</strong>
                    <span>{provider}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="cache-actions">
            {cacheStats && Object.keys(cacheStats.providers).map((provider) => (
              <button
                key={provider}
                className="btn btn-warning"
                onClick={() => handleClearCache(provider)}
                disabled={loading}
              >
                Clear {provider} cache ({cacheStats.providers[provider]})
              </button>
            ))}
            
            {cacheStats && cacheStats.count > 0 && (
              <button
                className="btn btn-danger"
                onClick={() => handleClearCache()}
                disabled={loading}
              >
                Clear All Cache ({cacheStats.count})
              </button>
            )}
          </div>
        </section>

        {/* Reset Settings */}
        <section className="settings-section">
          <h2>🔄 Reset</h2>
          <button
            className="btn btn-danger"
            onClick={handleResetSettings}
          >
            Reset All Settings
          </button>
        </section>
      </div>
    </div>
    </PasswordGate>
  );
}

export default SettingsPage;
