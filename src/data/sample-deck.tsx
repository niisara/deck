import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const sampleDeck: Deck = {
  id: 'sample-deck',
  name: 'Sample Deck',
  description: 'Another example deck with more features',
  theme: 'moon',
  slides: [
    {
      id: 1,
      title: 'Plugin Features Demo',
      content: `
        <p>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> to search!</p>
        <p>Try searching for "keyword" or "example"</p>
        <hr>
        <p>Press <kbd>S</kbd> to open speaker notes view</p>
      `,
      backgroundColor: '#9B59B6',
      notes: 'This is a speaker note. Only visible in presenter mode!'
    },
    {
      id: 2,
      title: 'More Code Examples',
      content: `
        <p>Python code with line numbers:</p>
        <pre><code class="language-python" data-trim data-line-numbers="1-3|4-5">
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # Output: 120
        </code></pre>
      `,
      backgroundColor: '#F39C12',
      notes: 'Python factorial example with step-by-step highlighting'
    },
    {
      id: 3,
      title: 'Keyboard Shortcuts',
      content: `
        <h3>Useful Shortcuts:</h3>
        <ul>
          <li><kbd>S</kbd> - Speaker notes</li>
          <li><kbd>F</kbd> - Fullscreen</li>
          <li><kbd>Ctrl+Shift+F</kbd> - Search</li>
          <li><kbd>Alt+Click</kbd> - Zoom</li>
          <li><kbd>Esc</kbd> - Overview mode</li>
        </ul>
        <p><em>All plugins are now active!</em></p>
      `,
      backgroundColor: '#1ABC9C',
      notes: 'Summary of keyboard shortcuts for all plugins'
    },
    {
      id: 4,
      title: 'Status Icons',
      content: (
        <div>
          <h3>Visual Feedback with Icons</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginTop: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center' }}>
              <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#2ecc71' }} />
              <span>Success - Operation completed</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center' }}>
              <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#f39c12' }} />
              <span>Warning - Please review</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center' }}>
              <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ color: '#e74c3c' }} />
              <span>Error - Something went wrong</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center' }}>
              <SvgIcon iconName="duo-spinner-third" sizeName="2x" style={{ color: '#3498db' }} />
              <span>Loading - Please wait...</span>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#8E44AD',
      notes: 'Different status icons for user feedback'
    },
    {
      id: 5,
      title: 'Action Icons',
      content: (
        <div>
          <h3>Common Actions</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', maxWidth: '700px', margin: '40px auto' }}>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-pencil" sizeName="3x" />
              <p style={{ marginTop: '10px' }}>Edit</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-trash" sizeName="3x" />
              <p style={{ marginTop: '10px' }}>Delete</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-floppy-disk" sizeName="3x" />
              <p style={{ marginTop: '10px' }}>Save</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-magnifying-glass" sizeName="3x" />
              <p style={{ marginTop: '10px' }}>Search</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-arrows-rotate" sizeName="3x" />
              <p style={{ marginTop: '10px' }}>Refresh</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-sliders" sizeName="3x" />
              <p style={{ marginTop: '10px' }}>Settings</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#E67E22',
      notes: 'Common action icons used throughout applications'
    }
  ]
};
