import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const entityNormalizationDeck: Deck = {
  id: 'entity-normalization-disambiguation',
  name: '13 Entity Normalization & Disambiguation Techniques',
  description: 'A practical cheat sheet for NLP, data integration, and knowledge graphs',
  category: 'NLP',
  theme: 'black',
  slides: [],
  slideGroups: [
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          title: '13 Entity Normalization & Disambiguation Techniques',
          content: (
            <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '1.2rem', color: '#e5c07b', marginBottom: '2rem' }}>
            A practical cheat sheet for NLP, data integration, and knowledge graphs
          </div>
          <div style={{ fontSize: '1rem', color: '#888', lineHeight: '1.8' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <SvgIcon iconName="duo-circle-nodes" sizeName="xl" style={{ marginBottom: '0.5rem' }} darkModeInvert={true} />
                <div style={{ color: '#c678dd' }}>Knowledge Graphs</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <SvgIcon iconName="duo-brain" sizeName="xl" style={{ marginBottom: '0.5rem' }} darkModeInvert={true} />
                <div style={{ color: '#c678dd' }}>NLP Processing</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <SvgIcon iconName="duo-gears" sizeName="xl" style={{ marginBottom: '0.5rem' }} darkModeInvert={true} />
                <div style={{ color: '#c678dd' }}>Data Integration</div>
              </div>
            </div>
            <div style={{ marginTop: '1rem', color: '#98c379' }}>
              <SvgIcon iconName="duo-users-group" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Audience:</strong> Data scientists, NLP engineers, knowledge graph practitioners
            </div>
            <div style={{ marginTop: '0.5rem', color: '#888' }}>
              <SvgIcon iconName="duo-calendar" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              Version: 1.0 • Date: November 7, 2025
            </div>
          </div>
        </div>
      ),
      notes: 'Introduction to 13 entity normalization and disambiguation techniques'
    },
    {
      id: 2,
      title: 'Table of Contents',
      content: (
        <div style={{ textAlign: 'left', fontSize: '0.85em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.15)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px', gridColumn: 'span 2' }}>
              <SvgIcon iconName="duo-book" sizeName="2x" style={{ color: '#ffd700' }} darkModeInvert={true} />
              <span style={{ fontWeight: 'bold' }}>Introduction</span>
            </div>
            <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#4fc3f7' }}>1</span>
              <span>String Normalization</span>
            </div>
            <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#81c784' }}>2</span>
              <span>Lowercasing + Unicode Normalization</span>
            </div>
            <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ffb74d' }}>3</span>
              <span>Fuzzy Matching (Edit Distance)</span>
            </div>
            <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ba68c8' }}>4</span>
              <span>Token-Based Similarity (Jaccard / Cosine)</span>
            </div>
            <div style={{ padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#f06292' }}>5</span>
              <span>Dictionary / Gazetteer Lookup</span>
            </div>
            <div style={{ padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#64b5f6' }}>6</span>
              <span>Synonym / Alias Mapping</span>
            </div>
            <div style={{ padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#aed581' }}>7</span>
              <span>Rule-Based Context Matching</span>
            </div>
            <div style={{ padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ffa726' }}>8</span>
              <span>Embedding-Based Similarity Matching</span>
            </div>
            <div style={{ padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ef5350' }}>9</span>
              <span>Entity Linking with Knowledge Bases</span>
            </div>
            <div style={{ padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#9575cd' }}>10</span>
              <span>Graph-Based Entity Disambiguation</span>
            </div>
            <div style={{ padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#66bb6a' }}>11</span>
              <span>PageRank / Centrality-Based Disambiguation</span>
            </div>
            <div style={{ padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#aad77b' }}>12</span>
              <span>Domain-Specific Ontology Mapping</span>
            </div>
            <div style={{ padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#e57b7b' }}>13</span>
              <span>LLM-Based Entity Disambiguation</span>
            </div>
            <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.15)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px', gridColumn: 'span 2' }}>
              <SvgIcon iconName="duo-trophy" sizeName="1x" style={{ color: '#ffd700' }} darkModeInvert={true} />
              <span style={{ fontWeight: 'bold' }}>Conclusion & Key Takeaways</span>
            </div>
          </div>
        </div>
      ),
      notes: 'Table of contents showing all 13 entity normalization and disambiguation techniques'
    },
    {
      id: 3,
      title: 'Introduction: Normalization vs. Disambiguation',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #61dafb' }}>
              <div style={{ color: '#61dafb', marginBottom: '0.8rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-broom" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>What is Entity Normalization</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Standardizing surface forms to a canonical representation</li>
                <li>Handling variations in format, punctuation, whitespace</li>
                <li><strong>Examples:</strong> Phone formats, date formats, capitalization</li>
                <li><strong>Focus:</strong> Textual/syntactic transformations</li>
              </ul>
            </div>

            <div style={{ background: 'rgba(198, 120, 221, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #c678dd' }}>
              <div style={{ color: '#c678dd', marginBottom: '0.8rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-circle-nodes" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>What is Entity Disambiguation</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Resolving ambiguous mentions to correct real-world entities</li>
                <li>Mapping mentions to unique identifiers</li>
                <li><strong>Examples:</strong> "Apple" → company vs. fruit; "Paris" → France vs. Texas</li>
                <li><strong>Focus:</strong> Semantic resolution and context</li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #98c379', marginBottom: '1.5rem' }}>
            <div style={{ color: '#98c379', marginBottom: '0.8rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>Why it Matters</strong>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', fontSize: '0.9rem' }}>
              <div>• Improves recall/precision in search and retrieval systems</div>
              <div>• Reduces duplicates in databases and knowledge graphs</div>
              <div>• Enables reliable joins and analytics across data sources</div>
              <div>• Powers knowledge graph linking and reasoning</div>
            </div>
          </div>

          <div style={{ background: 'rgba(229, 192, 123, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.8rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-arrow-right" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>Typical Pipeline</strong>
            </div>
            <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Preprocess → Candidate generation → Similarity scoring → Global/graph coherence → Selection → Persistence/feedback
            </div>
            <div style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#e5c07b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>Guiding principle:</strong> Combine simple deterministic steps with statistical/semantic models for best accuracy and scale
            </div>
          </div>
        </div>
      ),
      notes: 'Introduction explaining the difference between normalization and disambiguation, why they matter, and the typical pipeline'
        }
      ]
    },
    {
      id: 'technique-1',
      title: '1) String Normalization',
      slides: [
        {
          id: 4,
          title: '1) String Normalization',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Goal</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                    Standardize string surface forms to reduce trivial variation
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>How It Works</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                    Trim, collapse whitespace, normalize punctuation/hyphens, standardize formats (dates, phones), remove/control special chars
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <SvgIcon iconName="duo-calendar-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                  <strong>When to Use</strong>
                </div>
                <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                  As a first pass in any pipeline; before lookups, fuzzy matching, or vectorization
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <SvgIcon iconName="duo-list-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                  <strong>Steps</strong>
                </div>
                <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                  <ol style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                    <li>Trim and collapse whitespace; unify separators (space vs. underscore)</li>
                    <li>Canonicalize punctuation (e.g., smart quotes → ASCII)</li>
                    <li>Normalize formats (phone, date, currency) using locale rules</li>
                    <li>Preserve originals as separate fields for auditability</li>
                  </ol>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                    <li>Simple, fast, deterministic</li>
                    <li>Improves downstream match rates</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                    <li>Over-normalization may lose nuance</li>
                    <li>Locale-specific rules can be brittle</li>
                  </ul>
                </div>
              </div>
            </div>
      ),
      notes: 'String Normalization: First-pass standardization of string surface forms'
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2) Lowercasing + Unicode Normalization',
      slides: [
        {
          id: 5,
          title: '2) Lowercasing + Unicode Normalization',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Goal</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Make comparisons robust to case and Unicode variants
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Apply Unicode normalization (NFC/NFKC) and consistent case folding; optional accent/diacritic folding
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-calendar-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
              Multilingual data; inputs with diacritics/compatibility characters; before tokenization or hashing
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-list-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>Steps</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
              <ol style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Choose NFC (preserve) or NFKC (compatibility) per domain</li>
                <li>Apply case folding (lower or locale-aware fold)</li>
                <li>Optionally remove diacritics for matching only (keep raw form)</li>
              </ol>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Large recall gains for minimal cost</li>
                <li>Reduces false mismatches from encoding quirks</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>NFKC can alter semantics in niche cases</li>
                <li>Case folding may harm brand/style-sensitive fields</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Lowercasing + Unicode Normalization: Handle case and character encoding variations'
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3) Fuzzy Matching (Edit Distance)',
      slides: [
        {
          id: 6,
          title: '3) Fuzzy Matching (Edit Distance)',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Goal</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Match near-duplicates with typos or small variations
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Compute Levenshtein/Damerau distance; accept if distance below threshold or normalized similarity above threshold
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-calendar-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
              Names, short strings, OCR/noisy text, deduplication
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-list-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>Steps</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
              <ol style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Pre-normalize strings</li>
                <li>Choose metric (Levenshtein, Damerau, Jaro-Winkler)</li>
                <li>Calibrate thresholds per length</li>
                <li>Index with BK-tree/Trigram index for scale</li>
              </ol>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Effective on short text and typos</li>
                <li>Interpretable thresholds</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Sensitive to token order for multi-word strings</li>
                <li>Can be slow without indexing; weak on semantics</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Fuzzy Matching: Use edit distance to match strings with typos and variations'
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4) Token-Based Similarity (Jaccard / Cosine)',
      slides: [
        {
          id: 7,
          title: '4) Token-Based Similarity (Jaccard / Cosine)',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Goal</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Compare multi-word entities considering token overlap/weights
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Tokenize (words or n-grams); compute Jaccard overlap or TF-IDF cosine similarity
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-calendar-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
              Product titles, addresses, org/person names with multiple tokens
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-list-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>Steps</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
              <ol style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Normalize + tokenize; optionally generate character n-grams</li>
                <li>Build TF-IDF vectors; compute cosine or Jaccard</li>
                <li>Apply thresholds; consider stopword removal</li>
                <li>Use MinHash/LSH for approximate retrieval</li>
              </ol>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Captures partial overlaps; scalable with sparse vectors</li>
                <li>Works well for medium-length strings</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Ignores token semantics; order mostly lost</li>
                <li>Needs careful tokenization and stopword handling</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Token-Based Similarity: Use Jaccard or cosine similarity for multi-word entities'
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5) Dictionary / Gazetteer Lookup',
      slides: [
        {
          id: 8,
          title: '5) Dictionary / Gazetteer Lookup',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Goal</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Map mentions to known canonical forms via lexicon
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Exact/normalized lookup in curated lists; multiword matching via tries/Aho–Corasick
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-calendar-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
              Closed-world domains (medications, locations, SKUs) or high-precision passes
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-list-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>Steps</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
              <ol style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Build/ingest gazetteers with IDs and aliases</li>
                <li>Pre-normalize mentions; run exact and relaxed lookups</li>
                <li>Handle multiword longest-match and overlaps</li>
                <li>Track versioning and provenance</li>
              </ol>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>High precision; deterministic; explainable</li>
                <li>Fast with proper indexing</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Coverage gaps; requires maintenance</li>
                <li>Ambiguity remains if multiple entries match</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Dictionary/Gazetteer Lookup: Use curated lexicons for exact matching'
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6) Synonym / Alias Mapping',
      slides: [
        {
          id: 9,
          title: '6) Synonym / Alias Mapping',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Goal</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Resolve variant names and abbreviations to a canonical ID
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Curated synonym tables, redirects, and alias expansions
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-calendar-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
              Brand/product/person aliases; medical or financial abbreviations
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-list-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>Steps</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
              <ol style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Harvest aliases from logs, KB redirects, standards</li>
                <li>Normalize and de-duplicate alias lists</li>
                <li>Apply expansion during candidate generation</li>
                <li>Add conflict resolution rules (e.g., context filters)</li>
              </ol>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Big recall boost with minimal compute</li>
                <li>Transparent and auditable</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Manual upkeep; drift over time</li>
                <li>Ambiguity if alias maps to multiple entities</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Synonym/Alias Mapping: Maintain curated synonym and alias tables'
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7) Rule-Based Context Matching',
      slides: [
        {
          id: 10,
          title: '7) Rule-Based Context Matching',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Goal</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Use deterministic patterns and context to disambiguate
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Regex/patterns, windowed context rules, feature predicates (e.g., nearby types, sections)
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-calendar-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
              Structured documents, forms, logs; compliance settings needing explainability
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-list-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>Steps</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
              <ol style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Define patterns and context windows (e.g., 50 chars)</li>
                <li>Add constraints (section headers, labels, units)</li>
                <li>Assign scores/weights; combine with other signals</li>
                <li>Test with rule coverage and false-positive analysis</li>
              </ol>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Highly interpretable; fast; no training data required</li>
                <li>Good for edge cases and regulated domains</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Brittle to format changes; limited generalization</li>
                <li>Hard to scale/maintain large rule sets</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Rule-Based Context Matching: Use patterns and context for disambiguation'
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8) Embedding-Based Similarity Matching',
      slides: [
        {
          id: 11,
          title: '8) Embedding-Based Similarity Matching',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Goal</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Capture semantic similarity beyond surface form
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Encode mentions/context into vectors (word/sentence embeddings); compare via cosine; ANN for retrieval
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-calendar-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
              Long/semantically rich mentions; cross-lingual or paraphrases
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-list-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>Steps</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
              <ol style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Select embedding model (SBERT, multilingual, domain-tuned)</li>
                <li>Build vector index (HNSW/FAISS); store entity vectors</li>
                <li>Generate candidates via ANN; rerank with additional signals</li>
                <li>Periodically refresh embeddings</li>
              </ol>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Handles paraphrase, synonyms, cross-lingual cases</li>
                <li>Scales with ANN; robust to noise</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Less interpretable; model drift</li>
                <li>Requires GPU/compute and monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Embedding-Based Similarity: Use neural embeddings for semantic matching'
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9) Entity Linking with Knowledge Bases (e.g., Wikidata)',
      slides: [
        {
          id: 12,
          title: '9) Entity Linking with Knowledge Bases (e.g., Wikidata)',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Goal</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Link mentions to KB nodes with IDs and rich metadata
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Candidate generation (surface forms); rank using context, priors, and KB features (types, relations)
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-calendar-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
              Open-domain text; enrichment with facts; downstream reasoning
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-list-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>Steps</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
              <ol style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Build alias tables and priors from KB</li>
                <li>Generate candidates; filter by type constraints</li>
                <li>Rank with context encoders + priors</li>
                <li>Output KB ID with confidence; log NIL cases</li>
              </ol>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Strong coverage; rich disambiguation signals</li>
                <li>Enables reasoning and enrichment</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>KB incompleteness/lag; NIL handling needed</li>
                <li>Heavier infra and maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Entity Linking with Knowledge Bases: Link to external KBs like Wikidata'
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10) Graph-Based Entity Disambiguation',
      slides: [
        {
          id: 13,
          title: '10) Graph-Based Entity Disambiguation',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Goal</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Resolve mentions collectively using graph coherence
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Build a graph of mentions and candidate entities; optimize global consistency via edges (co-occurrence, relations)
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-calendar-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
              Documents with multiple related mentions; news, scientific papers
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-list-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>Steps</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
              <ol style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Construct mention–candidate and entity–entity edges</li>
                <li>Define coherence scores (compatibility, relatedness)</li>
                <li>Run collective inference (MST, loopy BP, ILP)</li>
                <li>Select globally optimal assignment</li>
              </ol>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Improves accuracy via mutual constraints</li>
                <li>Robust to local ambiguities</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>More complex and compute-heavy</li>
                <li>Requires good edge weighting and tuning</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Graph-Based Disambiguation: Use graph coherence for collective resolution'
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11) PageRank / Centrality-Based Disambiguation',
      slides: [
        {
          id: 14,
          title: '11) PageRank / Centrality-Based Disambiguation',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Goal</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Prioritize entities central to the context subgraph
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Build candidate subgraph; compute PageRank or centrality to pick most influential nodes
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-calendar-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
              Dense KBs; when relational context is informative
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-list-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>Steps</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
              <ol style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Build subgraph from candidates and KB links</li>
                <li>Choose centrality (PageRank, degree, betweenness)</li>
                <li>Combine centrality with mention similarity</li>
                <li>Select top-scoring candidates per mention</li>
              </ol>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Simple, effective graph signal</li>
                <li>Unsupervised; few dependencies</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Biased to popular entities</li>
                <li>Needs careful combination with local evidence</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'PageRank/Centrality Disambiguation: Use graph centrality to prioritize entities'
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12) Domain-Specific Ontology Mapping',
      slides: [
        {
          id: 15,
          title: '12) Domain-Specific Ontology Mapping',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Goal</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Map mentions to controlled vocabularies (e.g., UMLS, SNOMED, ICD, MeSH, NAICS)
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Use ontology synonyms, IDs, and hierarchies; apply constraints by type and relations
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-calendar-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
              Regulated domains (health, finance), analytics requiring standard codes
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-list-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>Steps</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
              <ol style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Ingest ontology terms, synonyms, CUIs/IDs</li>
                <li>Normalize mentions; run exact + fuzzy + context filters</li>
                <li>Enforce type/hierarchy constraints</li>
                <li>Log ambiguous/NIL cases for curation</li>
              </ol>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>High precision; interoperability; governance</li>
                <li>Hierarchies aid disambiguation</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Licensing/updates; coverage gaps</li>
                <li>Requires domain expertise</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Domain-Specific Ontology Mapping: Use controlled vocabularies for regulated domains'
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13) LLM-Based Entity Disambiguation',
      slides: [
        {
          id: 16,
          title: '13) LLM-Based Entity Disambiguation',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Goal</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Use large language models to resolve ambiguous mentions with context
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Prompt or fine-tune LLMs; optionally RAG to fetch KB snippets; tools for candidate lookup and grounding
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-calendar-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
              Few-shot/zero-shot settings; complex context; long documents
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-list-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
              <strong>Steps</strong>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
              <ol style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Define schema and grounding strategy (closed set vs. open)</li>
                <li>Build prompts with mention + context + candidates</li>
                <li>Add RAG retrieval and tool-use for KB facts</li>
                <li>Calibrate outputs with confidence and guardrails</li>
              </ol>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Strong in complex, long-context cases</li>
                <li>Rapid adaptation with prompting</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Cost/latency; potential hallucinations</li>
                <li>Needs grounding, evaluation, and privacy controls</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'LLM-Based Disambiguation: Use LLMs for complex context disambiguation'
        }
      ]
    },
    {
      id: 'conclusion',
      title: 'Conclusion & Key Takeaways',
      slides: [
        {
          id: 17,
          title: 'Conclusion & Key Takeaways',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6', textAlign: 'left' }}>
              <div style={{ marginBottom: '1.5rem', textAlign: 'left', color: '#61dafb', fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="2xl" style={{ marginRight: '0.8rem', marginBottom: '1.5rem' }} darkModeInvert={true} />
                <strong>Best Practices for Entity Normalization & Disambiguation</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #61dafb' }}>
                  <div style={{ color: '#61dafb', marginBottom: '0.8rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="lg" darkModeInvert={true} />
                    <strong>Layered Approach</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                    <li>Normalize → Generate candidates → Rank</li>
                    <li>Apply global/graph coherence</li>
                    <li>Log NILs (not-in-lexicon) cases for curation</li>
                    <li>Start simple, add complexity as needed</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #98c379' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.8rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-sliders" sizeName="lg" darkModeInvert={true} />
                    <strong>Method Selection</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                    <li>Combine deterministic and semantic methods</li>
                    <li>Balance precision/recall for your use case</li>
                    <li>Simple techniques often solve 80% of problems</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(229, 192, 123, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.8rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-compass" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Domain-Specific Choices</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                    <li>Gazetteers/ontologies for closed-world domains</li>
                    <li>Embeddings/KB for diverse content</li>
                    <li>LLMs for complex, long-context scenarios</li>
                    <li>Hybrid approaches often perform best</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(198, 120, 221, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #c678dd' }}>
                  <div style={{ color: '#c678dd', marginBottom: '0.8rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-chart-line" sizeName="lg"darkModeInvert={true} />
                    <strong>Evaluation & Monitoring</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                    <li>Invest in labeled evaluation sets</li>
                    <li>Track error buckets and edge cases</li>
                    <li>Monitor for data/concept drift</li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #e06c75' }}>
                <div style={{ color: '#e06c75', marginBottom: '0.8rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <SvgIcon iconName="duo-shield-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                  <strong>Governance & Best Practices</strong>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                  <li>Version data, models, and rules rigorously</li>
                  <li>Maintain audit logs for normalization/linking decisions</li>
                  <li>Document thresholds and decision criteria</li>
                  <li>Plan for iterative improvement based on production feedback</li>
                </ul>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1.2rem', background: 'rgba(97, 218, 251, 0.15)', borderRadius: '10px', textAlign: 'left', borderLeft: '4px solid #61dafb' }}>
                <div style={{ color: '#61dafb', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <SvgIcon iconName="duo-rocket" sizeName="xl" darkModeInvert={true} />
                  <strong>Remember:</strong> Entity normalization and disambiguation are foundational capabilities that impact all downstream data applications—invest accordingly in your data infrastructure.
                </div>
              </div>
            </div>
      ),
      notes: 'Conclusion with key takeaways: layered approach, method selection, domain-specific choices, evaluation, and governance'
        }
      ]
    }
  ]
};

