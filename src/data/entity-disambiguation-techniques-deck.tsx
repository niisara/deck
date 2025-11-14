import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const entityDisambiguationTechniquesDeck: Deck = {
  id: 'entity-disambiguation-techniques',
  name: '13 Entity Normalization & Disambiguation Techniques',
  description: 'A practical cheat sheet for data scientists and NLP engineers',
  category: 'NLP',
  theme: 'dracula',
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
            <div style={{ textAlign: 'left', padding: '2rem' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#8be9fd' }}>
            <SvgIcon iconName="duo-file-lines" sizeName="xl" style={iconStyle} />
            A practical cheat sheet for data scientists and NLP engineers
          </div>
          <div style={{ fontSize: '1.2rem', color: '#f1fa8c', marginBottom: '2rem' }}>
            <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
            <strong>What you'll get:</strong>
          </div>
          <div style={{ fontSize: '1.1rem', color: '#f8f8f2', lineHeight: '2' }}>
            <div style={{ marginBottom: '1rem' }}>
              <SvgIcon iconName="duo-circle-check" sizeName="lg" style={iconStyle} />
              13 techniques with Goal, How It Works, When to Use, Steps, Pros, Cons
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <SvgIcon iconName="duo-chart-simple" sizeName="lg" style={iconStyle} />
              Selection tips and hybrid pipeline patterns
            </div>
            <div style={{ color: '#6272a4', fontSize: '1rem', marginTop: '2rem' }}>
              <SvgIcon iconName="duo-calendar" sizeName="lg" style={iconStyle} />
              2025-11-07
            </div>
          </div>
        </div>
      ),
      notes: 'Title slide introducing the 13 techniques'
    },
    {
      id: 2,
      title: 'Table of Contents',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.8', textAlign: 'left' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <div style={{ marginBottom: '0.8rem', color: '#8be9fd' }}>
                <SvgIcon iconName="duo-1" sizeName="lg" style={iconStyle} />
                String Normalization
              </div>
              <div style={{ marginBottom: '0.8rem', color: '#8be9fd' }}>
                <SvgIcon iconName="duo-2" sizeName="lg" style={iconStyle} />
                Lowercasing + Unicode Normalization
              </div>
              <div style={{ marginBottom: '0.8rem', color: '#8be9fd' }}>
                <SvgIcon iconName="duo-3" sizeName="lg" style={iconStyle} />
                Fuzzy Matching (Edit Distance)
              </div>
              <div style={{ marginBottom: '0.8rem', color: '#8be9fd' }}>
                <SvgIcon iconName="duo-4" sizeName="lg" style={iconStyle} />
                Token-Based Similarity (Jaccard / Cosine)
              </div>
              <div style={{ marginBottom: '0.8rem', color: '#8be9fd' }}>
                <SvgIcon iconName="duo-5" sizeName="lg" style={iconStyle} />
                Dictionary / Gazetteer Lookup
              </div>
              <div style={{ marginBottom: '0.8rem', color: '#8be9fd' }}>
                <SvgIcon iconName="duo-6" sizeName="lg" style={iconStyle} />
                Synonym / Alias Mapping
              </div>
              <div style={{ marginBottom: '0.8rem', color: '#8be9fd' }}>
                <SvgIcon iconName="duo-7" sizeName="lg" style={iconStyle} />
                Rule-Based Context Matching
              </div>
            </div>
            <div>
              <div style={{ marginBottom: '0.8rem', color: '#f1fa8c' }}>
                <SvgIcon iconName="duo-8" sizeName="lg" style={iconStyle} />
                Embedding-Based Similarity Matching
              </div>
              <div style={{ marginBottom: '0.8rem', color: '#f1fa8c' }}>
                <SvgIcon iconName="duo-9" sizeName="lg" style={iconStyle} />
                Entity Linking with Knowledge Bases
              </div>
              <div style={{ marginBottom: '0.8rem', color: '#f1fa8c' }}>
                <SvgIcon iconName="duo-wand-magic-sparkles" sizeName="lg" style={iconStyle} />
                Graph-Based Entity Disambiguation
              </div>
              <div style={{ marginBottom: '0.8rem', color: '#f1fa8c' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="lg" style={iconStyle} />
                PageRank / Centrality-Based Disambiguation
              </div>
              <div style={{ marginBottom: '0.8rem', color: '#f1fa8c' }}>
                <SvgIcon iconName="duo-book" sizeName="lg" style={iconStyle} />
                Domain-Specific Ontology Mapping
              </div>
              <div style={{ marginBottom: '0.8rem', color: '#f1fa8c' }}>
                <SvgIcon iconName="duo-robot" sizeName="lg" style={iconStyle} />
                LLM-Based Entity Disambiguation
              </div>
            </div>
          </div>
        </div>
      ),
      notes: 'Table of contents showing all 13 techniques'
        }
      ]
    },
    {
      id: 'technique-1',
      title: '1. String Normalization',
      slides: [
        {
          id: 3,
          title: '1. String Normalization',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(189, 147, 249, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#bd93f9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                    <strong>Goal</strong>
                  </div>
                  <div>Standardize text by removing superficial differences (spacing, punctuation, diacritics).</div>
                </div>
                <div style={{ background: 'rgba(139, 233, 253, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#8be9fd', marginBottom: '0.5rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                    <strong>How It Works</strong>
                  </div>
                  <div>Trim/collapse whitespace, unify quotes/dashes, normalize punctuation spacing, optionally strip diacritics and normalize numerals.</div>
                </div>
              </div>

              <div style={{ marginBottom: '1rem', background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ color: '#50fa7b', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
                  <strong>When to Use</strong>
                </div>
                <div>Preprocessing noisy inputs (logs, forms, scraped text) before any matching.</div>
              </div>

              <div style={{ marginBottom: '1rem', background: 'rgba(241, 250, 140, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ color: '#f1fa8c', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
                  <strong>Steps</strong>
                </div>
                <ol style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
                  <li>Trim and collapse spaces</li>
                  <li>Canonicalize quotes/dashes</li>
                  <li>Normalize punctuation spacing</li>
                  <li>Optional: remove diacritics/width forms</li>
                  <li>Validate</li>
                </ol>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#50fa7b', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                    <strong>Pros</strong>
                  </div>
                  <div>Simple, fast, deterministic; boosts downstream match rates.</div>
                </div>
                <div style={{ background: 'rgba(255, 121, 198, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#ff79c6', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                    <strong>Cons</strong>
                  </div>
                  <div>Possible information loss; language-specific quirks; does not resolve ambiguity.</div>
                </div>
              </div>

              <div style={{ marginTop: '1rem', background: 'rgba(68, 71, 90, 0.5)', padding: '1rem', borderRadius: '8px', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                <SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} />
                <code style={{ color: '#f8f8f2' }}>
                  def normalize_string(text):<br/>
                  &nbsp;&nbsp;text = text.strip().replace(" +", " ") # Trim & collapse spaces<br/>
                  &nbsp;&nbsp;text = re.sub(r'["""]', '"', text) # Normalize quotes<br/>
                  &nbsp;&nbsp;return text
                </code>
              </div>
            </div>
      ),
      notes: 'String Normalization - basic text standardization'
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2. Lowercasing + Unicode Normalization',
      slides: [
        {
          id: 4,
          title: '2. Lowercasing + Unicode Normalization',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(189, 147, 249, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#bd93f9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal</strong>
              </div>
              <div>Eliminate variation due to case and Unicode compatibility forms.</div>
            </div>
            <div style={{ background: 'rgba(139, 233, 253, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#8be9fd', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Apply Unicode normalization (NFC/NFKC/NFD) and casefolding (locale-aware) to map equivalent code points.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#50fa7b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Multilingual data, mixed encodings, merging cross-source strings.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(241, 250, 140, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f1fa8c', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <ol style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
              <li>Choose NFC vs NFKC</li>
              <li>unicodedata.normalize</li>
              <li>str.casefold (or locale-aware)</li>
              <li>Handle edge cases (Turkish I, ß)</li>
              <li>Test</li>
            </ol>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#50fa7b', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Robust across scripts; reduces duplicates substantially.</div>
            </div>
            <div style={{ background: 'rgba(255, 121, 198, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ff79c6', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>May alter semantics (math symbols, ß→ss); locale pitfalls; must log transforms.</div>
            </div>
          </div>

          <div style={{ marginTop: '1rem', background: 'rgba(68, 71, 90, 0.5)', padding: '1rem', borderRadius: '8px', fontSize: '0.7rem', fontFamily: 'monospace' }}>
            <SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} />
            <code style={{ color: '#f8f8f2' }}>
              import unicodedata<br/>
              def normalize_unicode(text):<br/>
              &nbsp;&nbsp;# NFC: Canonical composition<br/>
              &nbsp;&nbsp;normalized = unicodedata.normalize('NFC', text)<br/>
              &nbsp;&nbsp;# Case folding (better than .lower())<br/>
              &nbsp;&nbsp;folded = normalized.casefold()<br/>
              &nbsp;&nbsp;return folded
            </code>
          </div>
        </div>
      ),
      notes: 'Lowercasing + Unicode Normalization - handling encoding variations'
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3. Fuzzy Matching (Edit Distance)',
      slides: [
        {
          id: 5,
          title: '3. Fuzzy Matching (Edit Distance)',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(189, 147, 249, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#bd93f9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal</strong>
              </div>
              <div>Match strings with typos/insertions/deletions.</div>
            </div>
            <div style={{ background: 'rgba(139, 233, 253, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#8be9fd', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Compute edit distance (Levenshtein/Damerau); accept matches under a threshold; use BK-tree/VP-tree for speed.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#50fa7b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Short names, IDs, user-entered fields with small errors; small/medium catalogs.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(241, 250, 140, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f1fa8c', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <ol style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
              <li>Normalize text</li>
              <li>Pick metric + threshold</li>
              <li>Index dictionary</li>
              <li>Query + rank</li>
              <li>Review borderline cases</li>
            </ol>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#50fa7b', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Catches typos; interpretable distances; easy to implement.</div>
            </div>
            <div style={{ background: 'rgba(255, 121, 198, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ff79c6', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Poor on token swaps/long strings; threshold tuning; scaling costs.</div>
            </div>
          </div>

          <div style={{ marginTop: '1rem', background: 'rgba(68, 71, 90, 0.5)', padding: '1rem', borderRadius: '8px', fontSize: '0.65rem', fontFamily: 'monospace' }}>
            <SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} />
            <code style={{ color: '#f8f8f2' }}>
              from Levenshtein import distance<br/>
              def find_fuzzy_matches(query, candidates, threshold=2):<br/>
              &nbsp;&nbsp;results = []<br/>
              &nbsp;&nbsp;for candidate in candidates:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;dist = distance(query, candidate)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;if dist &lt;= threshold:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;results.append((candidate, dist))<br/>
              &nbsp;&nbsp;return sorted(results, key=lambda x: x[1])
            </code>
          </div>
        </div>
      ),
      notes: 'Fuzzy Matching using edit distance algorithms'
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4. Token-Based Similarity (Jaccard / Cosine)',
      slides: [
        {
          id: 6,
          title: '4. Token-Based Similarity (Jaccard / Cosine)',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(189, 147, 249, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#bd93f9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal</strong>
              </div>
              <div>Compare overlap/angle between token sets or vectors.</div>
            </div>
            <div style={{ background: 'rgba(139, 233, 253, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#8be9fd', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Tokenize; compute Jaccard over sets or cosine over TF/TF-IDF; optionally char n-grams.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#50fa7b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Longer names/titles; reorderings; partial overlaps.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(241, 250, 140, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f1fa8c', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <ol style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
              <li>Tokenize + normalize</li>
              <li>Build vectors (binary/TF/TF-IDF)</li>
              <li>Compute similarity</li>
              <li>Threshold/blocking</li>
              <li>Evaluate</li>
            </ol>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#50fa7b', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Order-invariant; scalable with sparse ops; robust to extras/missing tokens.</div>
            </div>
            <div style={{ background: 'rgba(255, 121, 198, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ff79c6', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>No semantics; sensitive to stopwords; struggles with synonyms/abbreviations.</div>
            </div>
          </div>

          <div style={{ marginTop: '1rem', background: 'rgba(68, 71, 90, 0.5)', padding: '1rem', borderRadius: '8px', fontSize: '0.65rem', fontFamily: 'monospace' }}>
            <SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} />
            <code style={{ color: '#f8f8f2' }}>
              def jaccard_similarity(text1, text2):<br/>
              &nbsp;&nbsp;tokens1 = set(text1.lower().split())<br/>
              &nbsp;&nbsp;tokens2 = set(text2.lower().split())<br/>
              &nbsp;&nbsp;intersection = len(tokens1 & tokens2)<br/>
              &nbsp;&nbsp;union = len(tokens1 | tokens2)<br/>
              &nbsp;&nbsp;return intersection / union # Score between 0-1
            </code>
          </div>
        </div>
      ),
      notes: 'Token-Based Similarity using Jaccard and Cosine metrics'
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5. Dictionary / Gazetteer Lookup',
      slides: [
        {
          id: 7,
          title: '5. Dictionary / Gazetteer Lookup',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(189, 147, 249, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#bd93f9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal</strong>
              </div>
              <div>Map mentions to canonical entities via a curated lexicon.</div>
            </div>
            <div style={{ background: 'rgba(139, 233, 253, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#8be9fd', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Exact/prefix/fuzzy lookup over ID-labeled entries (trie/FST/inverted index).</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#50fa7b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Closed-world domains (places, products), compliance-lists, catalogs.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(241, 250, 140, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f1fa8c', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <ol style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
              <li>Build lexicon + IDs + aliases</li>
              <li>Normalize entries/mentions</li>
              <li>Choose match mode</li>
              <li>Index for fast lookup</li>
              <li>Resolve conflicts by priority/type</li>
            </ol>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#50fa7b', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>High precision; fast; explainable.</div>
            </div>
            <div style={{ background: 'rgba(255, 121, 198, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ff79c6', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Coverage gaps; maintenance burden; open-domain brittleness.</div>
            </div>
          </div>

          <div style={{ marginTop: '1rem', background: 'rgba(68, 71, 90, 0.5)', padding: '1rem', borderRadius: '8px', fontSize: '0.65rem', fontFamily: 'monospace' }}>
            <SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} />
            <code style={{ color: '#f8f8f2' }}>
              class GazetteerLookup:<br/>
              &nbsp;&nbsp;def __init__(self, dictionary_path):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;self.entity_dict = self.load_entities(dictionary_path)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;self.trie = self.build_trie(self.entity_dict)<br/>
              &nbsp;&nbsp;def lookup(self, mention):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;normalized = self.normalize(mention)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;return self.trie.search(normalized)
            </code>
          </div>
        </div>
      ),
      notes: 'Dictionary/Gazetteer Lookup for controlled vocabulary matching'
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6. Synonym / Alias Mapping',
      slides: [
        {
          id: 8,
          title: '6. Synonym / Alias Mapping',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(189, 147, 249, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#bd93f9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal</strong>
              </div>
              <div>Consolidate variants/abbreviations into canonical forms.</div>
            </div>
            <div style={{ background: 'rgba(139, 233, 253, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#8be9fd', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Alias→canonical mapping table applied during preprocessing or post-match.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#50fa7b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Organizations, drug names, SKUs, product families.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(241, 250, 140, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f1fa8c', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <ol style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
              <li>Collect aliases (data/SMEs)</li>
              <li>Normalize keys</li>
              <li>Version mapping</li>
              <li>Apply at ingestion/matching</li>
              <li>Monitor drift/update</li>
            </ol>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#50fa7b', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Simple and precise when covered; low runtime cost.</div>
            </div>
            <div style={{ background: 'rgba(255, 121, 198, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ff79c6', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Manual effort; poor generalization to unseen variants; language/locale issues.</div>
            </div>
          </div>

          <div style={{ marginTop: '1rem', background: 'rgba(68, 71, 90, 0.5)', padding: '1rem', borderRadius: '8px', fontSize: '0.7rem', fontFamily: 'monospace' }}>
            <SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} />
            <code style={{ color: '#f8f8f2' }}>
              alias_map = &#123;<br/>
              &nbsp;&nbsp;"IBM": "International Business Machines",<br/>
              &nbsp;&nbsp;"Intl. Bus. Machines": "International Business Machines",<br/>
              &nbsp;&nbsp;"MSFT": "Microsoft Corporation"<br/>
              &#125;<br/>
              def normalize_entity(name):<br/>
              &nbsp;&nbsp;return alias_map.get(name, name)
            </code>
          </div>
        </div>
      ),
      notes: 'Synonym/Alias Mapping for variant consolidation'
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7. Rule-Based Context Matching',
      slides: [
        {
          id: 9,
          title: '7. Rule-Based Context Matching',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(189, 147, 249, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#bd93f9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal</strong>
              </div>
              <div>Use surrounding context and heuristics to disambiguate.</div>
            </div>
            <div style={{ background: 'rgba(139, 233, 253, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#8be9fd', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Regex/patterns, keyword proximity, section headers, positional cues with scoring.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#50fa7b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Structured/semi-structured text (resumes, forms), policy-driven systems.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(241, 250, 140, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f1fa8c', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <ol style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
              <li>Define context windows/features</li>
              <li>Author rules (AND/OR/NOT, weights)</li>
              <li>Test/iterate</li>
              <li>Deploy with audit logs</li>
            </ol>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#50fa7b', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Transparent, controllable, fast.</div>
            </div>
            <div style={{ background: 'rgba(255, 121, 198, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ff79c6', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Labor-intensive; brittle to shifts; limited coverage at scale.</div>
            </div>
          </div>

          <div style={{ marginTop: '1rem', background: 'rgba(68, 71, 90, 0.5)', padding: '1rem', borderRadius: '8px', fontSize: '0.6rem', fontFamily: 'monospace' }}>
            <SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} />
            <code style={{ color: '#f8f8f2' }}>
              def context_based_disambiguation(mention, text):<br/>
              &nbsp;&nbsp;context = extract_context_window(text, mention, window_size=100)<br/>
              &nbsp;&nbsp;if re.search(r'Education|Training', get_section_header(context)):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;entity_type = 'Organization'<br/>
              &nbsp;&nbsp;elif keyword_distance(context, ['founded', 'headquartered']) &lt; 20:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;entity_type = 'Company'<br/>
              &nbsp;&nbsp;return entity_type
            </code>
          </div>
        </div>
      ),
      notes: 'Rule-Based Context Matching using patterns and heuristics'
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8. Embedding-Based Similarity Matching',
      slides: [
        {
          id: 10,
          title: '8. Embedding-Based Similarity Matching',
          content: (
        <div style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(189, 147, 249, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#bd93f9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal</strong>
              </div>
              <div>Capture semantic similarity beyond surface form.</div>
            </div>
            <div style={{ background: 'rgba(139, 233, 253, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#8be9fd', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Encode mentions/entities with embeddings (SBERT, fastText, domain models); score via cosine.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#50fa7b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Synonyms/paraphrases; multilingual/cross-lingual; sparse data.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(241, 250, 140, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f1fa8c', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <ol style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
              <li>Pick model</li>
              <li>Encode/cache candidates</li>
              <li>Encode mentions</li>
              <li>Score + threshold</li>
              <li>Re-rank with lexical features</li>
            </ol>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#50fa7b', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Handles semantics; robust to wording; multilingual.</div>
            </div>
            <div style={{ background: 'rgba(255, 121, 198, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ff79c6', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Infra cost; drift/bias; less explainable; threshold calibration needed.</div>
            </div>
          </div>

          <div style={{ marginTop: '1rem', background: 'rgba(68, 71, 90, 0.5)', padding: '1rem', borderRadius: '8px', fontSize: '0.55rem', fontFamily: 'monospace' }}>
            <SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} />
            <code style={{ color: '#f8f8f2' }}>
              from sentence_transformers import SentenceTransformer<br/>
              import numpy as np<br/>
              model = SentenceTransformer('all-MiniLM-L6-v2')<br/>
              entities = ["Apple Inc.", "Apple Computer", "Microsoft"]<br/>
              query = "iPhone manufacturer"<br/>
              embeddings = model.encode(entities)<br/>
              query_emb = model.encode([query])[0]<br/>
              scores = np.dot(embeddings, query_emb) / (np.linalg.norm(embeddings, axis=1) * np.linalg.norm(query_emb))<br/>
              best_match = entities[np.argmax(scores)]
            </code>
          </div>
        </div>
      ),
      notes: 'Embedding-Based Similarity using neural networks'
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9. Entity Linking with Knowledge Bases',
      slides: [
        {
          id: 11,
          title: '9. Entity Linking with Knowledge Bases',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(189, 147, 249, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#bd93f9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal</strong>
              </div>
              <div>Link mentions to KB entities (e.g., Wikidata) with unique IDs.</div>
            </div>
            <div style={{ background: 'rgba(139, 233, 253, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#8be9fd', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Candidate generation (alias tables/search) + context-aware ranking using KB facts/types.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#50fa7b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Open-domain text; need rich metadata and disambiguation.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(241, 250, 140, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f1fa8c', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <ol style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
              <li>Detect mentions (NER)</li>
              <li>Retrieve candidates</li>
              <li>Rank with context (BM25/embeddings) + priors</li>
              <li>Output ID + evidence</li>
            </ol>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#50fa7b', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Resolves ambiguity; provides attributes; interoperable IDs.</div>
            </div>
            <div style={{ background: 'rgba(255, 121, 198, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ff79c6', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Heavy infra; KB gaps/outdated data; domain mismatch risk.</div>
            </div>
          </div>

          <div style={{ marginTop: '1rem', background: 'rgba(68, 71, 90, 0.5)', padding: '1rem', borderRadius: '8px', fontSize: '0.65rem', fontFamily: 'monospace' }}>
            <SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} />
            <code style={{ color: '#f8f8f2' }}>
              def link_entity(mention, context):<br/>
              &nbsp;&nbsp;entities = ner_model.extract(mention)<br/>
              &nbsp;&nbsp;candidates = kb.get_candidates(mention)<br/>
              &nbsp;&nbsp;ranked = rank_by_context(candidates, context)<br/>
              &nbsp;&nbsp;return &#123;"entity_id": ranked[0].id, "confidence": ranked[0].score&#125;
            </code>
          </div>
        </div>
      ),
      notes: 'Entity Linking using Knowledge Bases like Wikidata'
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10. Graph-Based Entity Disambiguation',
      slides: [
        {
          id: 12,
          title: '10. Graph-Based Entity Disambiguation',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(189, 147, 249, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#bd93f9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal</strong>
              </div>
              <div>Jointly pick entities for multiple mentions to maximize coherence.</div>
            </div>
            <div style={{ background: 'rgba(139, 233, 253, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#8be9fd', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Build graph of mentions/candidates with edges for relatedness; run global optimization.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#50fa7b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Documents with many mentions (news, bios); coherence matters.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(241, 250, 140, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f1fa8c', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <ol style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
              <li>Generate candidates</li>
              <li>Build entity-entity edges (links/emb sims)</li>
              <li>Connect mentions→candidates</li>
              <li>Optimize (belief prop, ILP, PPR)</li>
            </ol>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#50fa7b', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Enforces global consistency; strong accuracy.</div>
            </div>
            <div style={{ background: 'rgba(255, 121, 198, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ff79c6', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Complex; computationally heavier; sensitive to graph design.</div>
            </div>
          </div>

          <div style={{ marginTop: '1rem', background: 'rgba(68, 71, 90, 0.5)', padding: '1rem', borderRadius: '8px', fontSize: '0.65rem', fontFamily: 'monospace' }}>
            <SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} />
            <code style={{ color: '#f8f8f2' }}>
              def build_disambiguation_graph(mentions, candidates):<br/>
              &nbsp;&nbsp;G = nx.Graph()<br/>
              &nbsp;&nbsp;for e1, e2 in itertools.combinations(candidates, 2):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;G.add_edge(e1, e2, weight=relatedness(e1, e2))<br/>
              &nbsp;&nbsp;for m, cs in mentions.items():<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;for c in cs:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;G.add_edge(m, c, weight=match_score(m, c))
            </code>
          </div>
        </div>
      ),
      notes: 'Graph-Based Entity Disambiguation for coherent entity selection'
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11. PageRank / Centrality-Based Disambiguation',
      slides: [
        {
          id: 13,
          title: '11. PageRank / Centrality-Based Disambiguation',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(189, 147, 249, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#bd93f9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal</strong>
              </div>
              <div>Select candidates with highest centrality in the candidate graph.</div>
            </div>
            <div style={{ background: 'rgba(139, 233, 253, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#8be9fd', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Run PageRank/HITS/degree centrality on weighted graph; pick top per mention.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#50fa7b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Need scalable unsupervised ranking with coherence signal.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(241, 250, 140, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f1fa8c', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <ol style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
              <li>Build weighted graph</li>
              <li>Run centrality</li>
              <li>Normalize per mention</li>
              <li>Add priors/popularity</li>
              <li>Choose argmax</li>
            </ol>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#50fa7b', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Efficient; simple; leverages structure without labels.</div>
            </div>
            <div style={{ background: 'rgba(255, 121, 198, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ff79c6', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Bias toward popular nodes; relies on good edge weights; error propagation.</div>
            </div>
          </div>

          <div style={{ marginTop: '1rem', background: 'rgba(68, 71, 90, 0.5)', padding: '1rem', borderRadius: '8px', fontSize: '0.65rem', fontFamily: 'monospace' }}>
            <SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} />
            <code style={{ color: '#f8f8f2' }}>
              import networkx as nx<br/>
              def pagerank_disambiguate(G, candidates, alpha=0.85):<br/>
              &nbsp;&nbsp;ranks = nx.pagerank(G, alpha=alpha)<br/>
              &nbsp;&nbsp;results = &#123;&#125;<br/>
              &nbsp;&nbsp;for mention, candidates_list in candidates.items():<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;mention_ranks = &#123;c: ranks.get(c, 0) for c in candidates_list&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;results[mention] = max(mention_ranks, key=mention_ranks.get)<br/>
              &nbsp;&nbsp;return results
            </code>
          </div>
        </div>
      ),
      notes: 'PageRank/Centrality-Based Disambiguation using graph algorithms'
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12. Domain-Specific Ontology Mapping',
      slides: [
        {
          id: 14,
          title: '12. Domain-Specific Ontology Mapping',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(189, 147, 249, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#bd93f9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal</strong>
              </div>
              <div>Map mentions to controlled vocabularies (e.g., UMLS, SNOMED, MeSH, HS codes).</div>
            </div>
            <div style={{ background: 'rgba(139, 233, 253, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#8be9fd', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>String/semantic matching constrained by ontology concepts, types, and hierarchies.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#50fa7b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Regulated/technical domains needing consistent coding and reasoning.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(241, 250, 140, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f1fa8c', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <ol style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
              <li>Parse ontology (concepts/synonyms/hierarchy)</li>
              <li>Candidate gen (synonyms, acronyms)</li>
              <li>Disambiguate via context and types</li>
              <li>Assign concept IDs + lineage</li>
            </ol>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#50fa7b', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>High precision; interoperability; supports analytics/reasoning.</div>
            </div>
            <div style={{ background: 'rgba(255, 121, 198, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ff79c6', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Setup complexity; licensing/updates; domain lock-in.</div>
            </div>
          </div>

          <div style={{ marginTop: '1rem', background: 'rgba(68, 71, 90, 0.5)', padding: '1rem', borderRadius: '8px', fontSize: '0.7rem', fontFamily: 'monospace' }}>
            <SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} />
            <code style={{ color: '#f8f8f2' }}>
              from owlready2 import get_ontology<br/>
              ontology = get_ontology("./snomed_ct_subset.owl").load()<br/>
              <br/>
              def map_to_concept(mention, context):<br/>
              &nbsp;&nbsp;candidates = ontology.search(label=mention)<br/>
              &nbsp;&nbsp;return disambiguate_by_type(candidates, context)
            </code>
          </div>
        </div>
      ),
      notes: 'Domain-Specific Ontology Mapping for regulated domains'
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13. LLM-Based Entity Disambiguation',
      slides: [
        {
          id: 15,
          title: '13. LLM-Based Entity Disambiguation',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(189, 147, 249, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#bd93f9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal</strong>
              </div>
              <div>Use large language models to resolve ambiguous mentions with context and tools.</div>
            </div>
            <div style={{ background: 'rgba(139, 233, 253, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#8be9fd', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Prompt/fine-tune to choose among candidates or generate canonical IDs; tool-augmented with retrieval/KB.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#50fa7b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Long-range context, tail cases, sparse data, rapid prototyping.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(241, 250, 140, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f1fa8c', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <ol style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
              <li>Design prompts with mention, context, candidates, schema</li>
              <li>Few-shot examples + constraints</li>
              <li>Optional retrieval</li>
              <li>Post-validate to IDs</li>
              <li>Human-in-loop for edges</li>
            </ol>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#50fa7b', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Strong zero/few-shot; flexible; good with complex context.</div>
            </div>
            <div style={{ background: 'rgba(255, 121, 198, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ff79c6', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Cost/latency; hallucinations; needs guardrails/evaluation.</div>
            </div>
          </div>

          <div style={{ marginTop: '1rem', background: 'rgba(68, 71, 90, 0.5)', padding: '1rem', borderRadius: '8px', fontSize: '0.7rem', fontFamily: 'monospace' }}>
            <SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} />
            <code style={{ color: '#f8f8f2' }}>
              def llm_disambiguate(mention, context, candidates):<br/>
              &nbsp;&nbsp;prompt = f"Context: &#123;context&#125;\nMention: &#123;mention&#125;\n"<br/>
              &nbsp;&nbsp;prompt += f"Candidates: &#123;candidates&#125;\nResolve to correct entity:"<br/>
              &nbsp;&nbsp;response = llm.generate(prompt, max_tokens=50)<br/>
              &nbsp;&nbsp;return validate_entity_id(response)
            </code>
          </div>
        </div>
      ),
      notes: 'LLM-Based Entity Disambiguation using large language models'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary & Practical Guidance',
      slides: [
        {
          id: 16,
          title: 'Summary & Practical Guidance',
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.7', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(189, 147, 249, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#bd93f9', marginBottom: '0.8rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-layer-group" sizeName="lg" style={iconStyle} />
                    <strong>Layered Pipeline</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                    <li>Start with normalization (String, Unicode)</li>
                    <li>Add lexical matching (Fuzzy, Token-based)</li>
                    <li>Incorporate knowledge (KB/Ontology)</li>
                    <li>Finish with advanced methods (Graph/LLM)</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(139, 233, 253, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#8be9fd', marginBottom: '0.8rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-sliders" sizeName="lg" style={iconStyle} />
                    <strong>Technique Selection</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                    <li>Short/typo-prone text: Edit distance</li>
                    <li>Long/reordered text: Token similarity</li>
                    <li>Open-domain: Entity linking/Graph</li>
                    <li>Regulated domains: Ontology mapping</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(80, 250, 123, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#50fa7b', marginBottom: '0.8rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-gear" sizeName="lg" style={iconStyle} />
                    <strong>Operational Tips</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                    <li>Calibrate thresholds on domain data</li>
                    <li>Log normalization decisions and provenance</li>
                    <li>Add human review for low-confidence cases</li>
                    <li>Monitor for data/entity drift over time</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(241, 250, 140, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#f1fa8c', marginBottom: '0.8rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-chart-line" sizeName="lg" style={iconStyle} />
                    <strong>Evaluation Methods</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                    <li>Precision/recall against gold standard</li>
                    <li>Clustering F1 on unlabeled data</li>
                    <li>Error taxonomy analysis</li>
                    <li>A/B testing for downstream impact</li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'rgba(255, 121, 198, 0.2)', padding: '1.2rem', borderRadius: '10px', marginTop: '1rem' }}>
                <div style={{ color: '#ff79c6', marginBottom: '0.8rem', fontSize: '1.1rem', textAlign: 'left' }}>
                  <SvgIcon iconName="duo-star" sizeName="xl" style={iconStyle} />
                  <strong>Best Practices for Entity Normalization</strong>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', fontSize: '0.85rem' }}>
                  <div>
                    <SvgIcon iconName="duo-check" sizeName="lg" style={iconStyle} />
                    Consider domain specificity before technique selection
                  </div>
                  <div>
                    <SvgIcon iconName="duo-check" sizeName="lg" style={iconStyle} />
                    Create feedback loops to improve over time
                  </div>
                  <div>
                    <SvgIcon iconName="duo-check" sizeName="lg" style={iconStyle} />
                    Document decisions for transparency & maintenance
                  </div>
                  <div>
                    <SvgIcon iconName="duo-check" sizeName="lg" style={iconStyle} />
                    Use hybrid approaches for complex domains
                  </div>
                </div>
              </div>
            </div>
      ),
      notes: 'Summary with practical guidance on pipeline design, technique selection, operations, and evaluation'
        }
      ]
    }
  ]
};

