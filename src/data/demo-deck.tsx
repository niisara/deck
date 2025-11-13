import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const demoDeck: Deck = {
  id: 'demo-deck',
  name: 'Demo Deck',
  description: 'A demonstration presentation with all Reveal.js plugins',
  category: 'Demo',
  theme: 'sky',
  slides: [
    {
      id: 1,
      title: 'Welcome to Demo Deck',
      content: `
        <p>This presentation showcases all Reveal.js plugins:</p>
        <ul>
          <li>🔍 <strong>Search</strong>: Press Ctrl+Shift+F to search</li>
          <li>📝 <strong>Notes</strong>: Press 'S' for speaker view</li>
          <li>🔎 <strong>Zoom</strong>: Alt+Click to zoom (Ctrl+Click on Linux)</li>
          <li>💡 <strong>Highlight</strong>: Syntax highlighting for code</li>
          <li>➗ <strong>Math</strong>: Beautiful equations</li>
        </ul>
      `,
      backgroundColor: '#4A90E2',
      notes: 'Welcome slide - introduce all the plugins available'
    },
    {
      id: 2,
      title: 'Code Highlighting',
      content: `
        <p>The Highlight plugin provides syntax highlighting:</p>
        <pre><code class="language-javascript" data-trim data-line-numbers>
function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return true;
}

greet('World');
        </code></pre>
        <p><small>Try Alt+Click to zoom into the code!</small></p>
      `,
      backgroundColor: '#50C878',
      notes: 'Demonstrate code highlighting with JavaScript example'
    },
    {
      id: 3,
      title: 'Math Equations',
      content: `
        <p>The Math plugin renders beautiful equations:</p>
        <p>Inline: \\(E = mc^2\\)</p>
        <p>Block equation:</p>
        <p>\\[\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\]</p>
        <p>\\[\\int_{0}^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}\\]</p>
      `,
      backgroundColor: '#E94B3C',
      notes: 'Show mathematical equation rendering capabilities'
    },
    {
      id: 4,
      title: 'SVG Icons Demo',
      content: (
        <div>
          <p>Using custom SVG icons with different sizes:</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
            <SvgIcon iconName="duo-lightbulb" sizeName="2x" />
            <SvgIcon iconName="duo-heart-pulse" sizeName="3x" />
            <SvgIcon iconName="duo-trophy" sizeName="4x" />
          </div>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
            <SvgIcon iconName="duo-book" sizeName="2x" />
            <SvgIcon iconName="duo-chart-line" sizeName="2x" />
            <SvgIcon iconName="duo-camera" sizeName="2x" />
            <SvgIcon iconName="duo-video" sizeName="2x" />
          </div>
        </div>
      ),
      backgroundColor: '#9B59B6',
      notes: 'Demonstrating SVG icons with different sizes'
    },
    {
      id: 5,
      title: 'Icon Buttons',
      content: (
        <div>
          <p>Icons can be used as buttons and controls:</p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', margin: '30px 0' }}>
            <button style={{ padding: '10px 20px', border: 'none', borderRadius: '8px', background: '#3498db', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <SvgIcon iconName="duo-check" sizeName="1x" darkModeInvert={true} />
              <span style={{ color: 'white' }}>Save</span>
            </button>
            <button style={{ padding: '10px 20px', border: 'none', borderRadius: '8px', background: '#e74c3c', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <SvgIcon iconName="duo-xmark" sizeName="sm" darkModeInvert={true} />
              <span style={{ color: 'white' }}>Cancel</span>
            </button>
            <button style={{ padding: '10px 20px', border: 'none', borderRadius: '8px', background: '#2ecc71', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <SvgIcon iconName="duo-download" sizeName="1x" darkModeInvert={true} />
              <span style={{ color: 'white' }}>Download</span>
            </button>
          </div>
          <p style={{ fontSize: '0.8em', marginTop: '30px' }}>Icons make UI more intuitive!</p>
        </div>
      ),
      backgroundColor: '#16a085',
      notes: 'Show how icons can be integrated into buttons'
    },
    {
      id: 6,
      title: 'Navigation Icons',
      content: (
        <div>
          <h3>Common Navigation Patterns</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '30px auto' }}>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-house" sizeName="2x" />
              <p>Home</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-circle-user" sizeName="2x" />
              <p>Profile</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-gear" sizeName="2x" />
              <p>Settings</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-envelope" sizeName="2x" />
              <p>Messages</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#34495e',
      notes: 'Common navigation icons used in web applications'
    }
  ]
};
