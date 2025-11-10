import type { Deck } from './types';

export const demoDeck: Deck = {
  id: 'demo-deck',
  name: 'Demo Deck',
  description: 'A demonstration presentation with all Reveal.js plugins',
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
    }
  ]
};
