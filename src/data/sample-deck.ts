import type { Deck } from './types';

export const sampleDeck: Deck = {
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
};
