export interface Slide {
  id: number;
  title: string;
  content: string;
  backgroundColor?: string;
  notes?: string; // Speaker notes
}

export interface Deck {
  id: string;
  name: string;
  description: string;
  slides: Slide[];
}

export const decks: Deck[] = [
  {
    id: 'demo-deck',
    name: 'Demo Deck',
    description: 'A demonstration presentation with all Reveal.js plugins',
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
  },
  {
    id: 'sample-deck',
    name: 'Sample Deck',
    description: 'Another example deck with more features',
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
      }
    ]
  }
];
