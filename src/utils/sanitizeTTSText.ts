/**
 * Sanitizes text for text-to-speech by removing non-speakable content
 * such as code blocks, mermaid diagrams, HTML tags, LaTeX formulas,
 * markdown formatting, stage directions, and other jargon.
 */

/**
 * Remove fenced code blocks (```language ... ```) including mermaid diagrams.
 */
function removeCodeBlocks(text: string): string {
  return text.replace(/```[\s\S]*?```/g, '');
}

/**
 * Remove HTML code blocks: <pre><code ...>...</code></pre>
 */
function removeHtmlCodeBlocks(text: string): string {
  return text.replace(/<pre[^>]*>[\s\S]*?<\/pre>/gi, '');
}

/**
 * Remove LaTeX / math notation:
 * - Block math:  \[ ... \]
 * - Inline math: \( ... \)
 * - Dollar-delimited: $$ ... $$ and $ ... $ (but not currency like $70)
 */
function removeLatex(text: string): string {
  return text
    // Block math \[ ... \]
    .replace(/\\\[[\s\S]*?\\\]/g, '')
    // Inline math \( ... \)
    .replace(/\\\([\s\S]*?\\\)/g, '')
    // Block math $$ ... $$
    .replace(/\$\$[\s\S]*?\$\$/g, '')
    // Inline math $...$ (but not currency like $70 or $0.02)
    .replace(/\$(?!\d)[^$\n]+\$/g, '');
}

/**
 * Remove HTML tags but keep their text content.
 * Special cases: <br>, <hr> become spaces.
 */
function stripHtmlTags(text: string): string {
  return text
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<hr\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '');
}

/**
 * Remove markdown formatting while keeping readable text.
 * - Headings: ### Title → Title
 * - Bold/italic: **text** or *text* → text
 * - Links: [text](url) → text
 * - Images: ![alt](url) → (removed)
 * - Horizontal rules: --- or *** → (removed)
 * - Bullet/numbered lists: keep text, remove markers
 */
function removeMarkdown(text: string): string {
  return text
    // Images (remove entirely)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    // Links (keep text)
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    // Headings
    .replace(/^#{1,6}\s+/gm, '')
    // Bold + italic combined
    .replace(/\*{3}([^*]+)\*{3}/g, '$1')
    // Bold
    .replace(/\*{2}([^*]+)\*{2}/g, '$1')
    .replace(/_{2}([^_]+)_{2}/g, '$1')
    // Italic
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    // Strikethrough
    .replace(/~~([^~]+)~~/g, '$1')
    // Inline code
    .replace(/`([^`]+)`/g, '$1')
    // Horizontal rules
    .replace(/^[-*_]{3,}\s*$/gm, '')
    // List markers (bullets and numbered)
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '');
}

/**
 * Preserve expression tags for ElevenLabs Text-to-Dialogue API.
 * The eleven_v3 model supports audio tags like [sad], [laughing], [whispering].
 * Stage directions in parentheses are still removed.
 */
function removeStageDirections(text: string): string {
  // Remove stage directions in parentheses: (stage direction)
  return text.replace(/\([^)]*\)/g, '');
}

/**
 * Remove Mermaid-specific syntax that might appear outside fenced blocks
 * (e.g., in MermaidPopover diagram props that get extracted as text).
 * Patterns: flowchart LR/TD, graph LR/TD, style X fill:..., -->, ---
 */
function removeMermaidSyntax(text: string): string {
  return text
    // Mermaid graph/flowchart declarations
    .replace(/\b(?:flowchart|graph|sequenceDiagram|classDiagram|stateDiagram|gantt|pie|erDiagram)\s+(?:LR|TD|RL|BT|TB)?\b/gi, '')
    // Mermaid style directives
    .replace(/style\s+\w+\s+fill:[^;\n]*/gi, '')
    // Mermaid arrows and connections
    .replace(/--+>|--+|==>|-.->|~~~|-->|\|[^|]*\|/g, ' ')
    // Mermaid node definitions like A["text"] or B("text")
    .replace(/\b[A-Z]\d*\s*\["[^"]*"\]/g, '')
    .replace(/\b[A-Z]\d*\s*\("[^"]*"\)/g, '')
    .replace(/\b[A-Z]\d*\s*\["[^"]*"]/g, '')
    // Subgraph declarations
    .replace(/\bsubgraph\b[^\n]*/gi, '')
    .replace(/\bend\b/gi, '');
}

/**
 * Remove common emoji characters.
 * Keeps the text around them readable.
 */
function removeEmojis(text: string): string {
  // Matches most emoji ranges including presentation selectors
  return text.replace(
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{200D}\u{20E3}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2702}-\u{27B0}]/gu,
    ''
  );
}

/**
 * Clean up special unicode symbols that don't speak well.
 * - ■ → (removed)
 * - → → "to"
 * - • → (removed, usually a bullet)
 */
function cleanSpecialSymbols(text: string): string {
  return text
    .replace(/■/g, '')
    .replace(/→/g, ' to ')
    .replace(/←/g, ' from ')
    .replace(/↔/g, ' and ')
    .replace(/•/g, '')
    .replace(/…/g, '...')
    .replace(/—/g, ', ')
    .replace(/–/g, ', ');
}

/**
 * Collapse excessive whitespace into single spaces and trim.
 */
function normalizeWhitespace(text: string): string {
  return text
    .replace(/\n{3,}/g, '\n\n')  // max 2 newlines
    .replace(/[ \t]{2,}/g, ' ')  // collapse spaces/tabs
    .replace(/^\s+$/gm, '')      // remove blank lines
    .trim();
}

/**
 * Main sanitizer: applies all cleaning passes in order.
 * Returns clean, speakable text.
 */
export function sanitizeTTSText(text: string): string {
  if (!text) return '';

  let cleaned = text;

  // Order matters: remove structural blocks first, then inline formatting
  cleaned = removeCodeBlocks(cleaned);
  cleaned = removeHtmlCodeBlocks(cleaned);
  cleaned = removeMermaidSyntax(cleaned);
  cleaned = removeLatex(cleaned);
  cleaned = stripHtmlTags(cleaned);
  cleaned = removeStageDirections(cleaned);
  cleaned = removeMarkdown(cleaned);
  cleaned = removeEmojis(cleaned);
  cleaned = cleanSpecialSymbols(cleaned);
  cleaned = normalizeWhitespace(cleaned);

  return cleaned;
}
