import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const metadataEnrichmentDeck: Deck = {
  id: 'metadata-enrichment-deck',
  name: '9 Metadata Enrichment Tricks',
  description: 'Cheat-sheets, patterns, and practical implementations',
  category: 'RAG',
  theme: 'moon',
  slides: [],
  slideGroups: [
    {
      id: 'intro',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          title: '9 Metadata Enrichment Tricks',
          content: (
            <div style={{ textAlign: 'left' }}>
              <h2>Cheat-sheets, patterns, and practical implementations</h2>
              <div style={{ display: 'flex', gap: '30px', marginTop: '50px' }}>
                <SvgIcon iconName="duo-tags" sizeName="4x" style={{ color: '#00d4ff' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-diagram-project" sizeName="4x" style={{ color: '#7e57c2' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-sparkles" sizeName="4x" style={{ color: '#26c6da' }} darkModeInvert={true} />
              </div>
              <div style={{ marginTop: '50px', fontSize: '0.9em', lineHeight: '1.8' }}>
                <p><SvgIcon iconName="duo-check-double" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px', color: '#66bb6a' }} darkModeInvert={true} />
                9 field-proven enrichment techniques</p>
                <p><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px', color: '#42a5f5' }} darkModeInvert={true} />
                Implementation steps and metadata examples</p>
                <p><SvgIcon iconName="duo-chart-line" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px', color: '#ffa726' }} darkModeInvert={true} />
                Best practices to scale enrichment and retrieval</p>
              </div>
              <p style={{ fontSize: '0.8em', marginTop: '40px', color: '#999' }}>Date: 2025-11-07</p>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: 'Title slide for 9 Metadata Enrichment Tricks covering practical implementations for RAG systems'
        },
        {
          id: 2,
          title: 'Overview: The 9 Enrichment Tricks',
          icon: { name: 'duo-list-check', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', fontSize: '0.75em' }}>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#42a5f5', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-sitemap" sizeName="2x" darkModeInvert={true} />
                    Structure & Context
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                      <span style={{ fontWeight: 'bold', color: '#42a5f5' }}>1</span>
                      <SvgIcon iconName="duo-heading" sizeName="1x" style={{ color: '#64b5f6' }} darkModeInvert={true} />
                      <span>Section-Level Titles</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                      <span style={{ fontWeight: 'bold', color: '#42a5f5' }}>6</span>
                      <SvgIcon iconName="duo-align-left" sizeName="1x" style={{ color: '#64b5f6' }} darkModeInvert={true} />
                      <span>Semantic Summary</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                      <span style={{ fontWeight: 'bold', color: '#42a5f5' }}>9</span>
                      <SvgIcon iconName="duo-diagram-nested" sizeName="1x" style={{ color: '#64b5f6' }} darkModeInvert={true} />
                      <span>Parent–Child Structure</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#7e57c2', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-folder-tree" sizeName="2x" darkModeInvert={true} />
                    Classification & Taxonomy
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <span style={{ fontWeight: 'bold', color: '#7e57c2' }}>2</span>
                      <SvgIcon iconName="duo-file-lines" sizeName="1x" style={{ color: '#9575cd' }} darkModeInvert={true} />
                      <span>Document Type Labels</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <span style={{ fontWeight: 'bold', color: '#7e57c2' }}>3</span>
                      <SvgIcon iconName="duo-user-tag" sizeName="1x" style={{ color: '#9575cd' }} darkModeInvert={true} />
                      <span>Entity Tagging (NER)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <span style={{ fontWeight: 'bold', color: '#7e57c2' }}>4</span>
                      <SvgIcon iconName="duo-tag" sizeName="1x" style={{ color: '#9575cd' }} darkModeInvert={true} />
                      <span>Topic/Category Tags</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <span style={{ fontWeight: 'bold', color: '#7e57c2' }}>7</span>
                      <SvgIcon iconName="duo-highlighter" sizeName="1x" style={{ color: '#9575cd' }} darkModeInvert={true} />
                      <span>Keyword Highlights</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#26c6da', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-shield-check" sizeName="2x" darkModeInvert={true} />
                    Freshness & Trust
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                      <span style={{ fontWeight: 'bold', color: '#26c6da' }}>5</span>
                      <SvgIcon iconName="duo-clock" sizeName="1x" style={{ color: '#4dd0e1' }} darkModeInvert={true} />
                      <span>Time/Version Metadata</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                      <span style={{ fontWeight: 'bold', color: '#26c6da' }}>8</span>
                      <SvgIcon iconName="duo-certificate" sizeName="1x" style={{ color: '#4dd0e1' }} darkModeInvert={true} />
                      <span>Source Confidence/Trust</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: 'Overview of all 9 metadata enrichment techniques organized by category'
        }
      ]
    },
    {
      id: 'section-titles',
      title: 'Section-Level Titles',
      slides: [
        {
          id: 3,
          title: '1. Section-Level Titles as Metadata',
          icon: { name: 'duo-heading', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '20px' }}>
              </div>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <strong style={{ color: '#42a5f5' }}><SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal:</strong>
                    <p style={{ marginTop: '5px' }}>Boosts retrieval precision and reduces hallucinations by preserving section intent</p>
                    
                    <strong style={{ color: '#42a5f5', marginTop: '12px', display: 'block' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                    <p style={{ marginTop: '5px' }}>Parse headers (H1–H3) and nearest title per chunk; store section_title, heading_level, section_path</p>
                  </div>
                  
                  <div style={{ padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#64b5f6' }}>When to Use:</strong>
                    <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '0.95em' }}>
                      <li>Technical docs</li>
                      <li>Policies</li>
                      <li>Knowledge bases</li>
                      <li>SOPs with clear headings</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85em' }}>
                    <strong style={{ color: '#81c784' }}>Example Metadata:</strong>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`{
  "section_title": "Refund policy",
  "heading_level": 2,
  "section_path": "Docs>Policies>Refunds"
}`}</pre>
                  </div>
                  
                  <div>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                      <strong style={{ color: '#81c784', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-thumbs-up" sizeName="1x" darkModeInvert={true} />Pros:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Strong intent signal • Better reranking • Improved explainability</p>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(255, 152, 0, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ color: '#ff9800', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" darkModeInvert={true} />Cons:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Weak on poorly structured docs • Requires robust parsing</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.15)', borderRadius: '8px' }}>
                  <strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Section titles provide essential contextual intent that helps models understand what information chunks contain, reducing hallucinations and improving response relevance.</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1e3a5f',
          notes: 'Technique 1: Section-Level Titles provide structural context for better retrieval'
        }
      ]
    },
    {
      id: 'doc-type-labels',
      title: 'Document Type Labels',
      slides: [
        {
          id: 4,
          title: '2. Document Type Labels',
          icon: { name: 'duo-file-lines', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '20px' }}>
              </div>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <strong style={{ color: '#7e57c2' }}><SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal:</strong>
                    <p style={{ marginTop: '5px' }}>Improves precision by matching user intent to doc role (FAQ, Policy, Email, SOP)</p>
                    
                    <strong style={{ color: '#7e57c2', marginTop: '12px', display: 'block' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                    <p style={{ marginTop: '5px' }}>Classify each document/chunk into doc_type via rules + ML (file path, layout, keywords)</p>
                  </div>
                  
                  <div style={{ padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#9575cd' }}>When to Use:</strong>
                    <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '0.95em' }}>
                      <li>Mixed corpora (FAQs, tickets, emails, specs)</li>
                      <li>Knowledge bases with varied document types</li>
                      <li>Support/customer service contexts</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85em' }}>
                    <strong style={{ color: '#81c784' }}>Example Metadata:</strong>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`{
  "doc_type": "SOP",
  "department": "HR",
  "audience": "internal"
}`}</pre>
                  </div>
                  
                  <div>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                      <strong style={{ color: '#81c784', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-thumbs-up" sizeName="1x" darkModeInvert={true} />Pros:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Fast filter for retrieval • Reduces irrelevant context • Good for governance • Improves user satisfaction</p>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(255, 152, 0, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ color: '#ff9800', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" darkModeInvert={true} />Cons:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Initial labeling effort • Classifier drift needs audits • Requires governance of labels</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.15)', borderRadius: '8px' }}>
                  <strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Document type labels provide contextual relevance for different user intents, ensuring that responses match the appropriate document format and purpose.</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2d2447',
          notes: 'Technique 2: Document Type Labels help match user intent to document role'
        }
      ]
    },
    {
      id: 'entity-tagging',
      title: 'Entity Tagging (NER)',
      slides: [
        {
          id: 5,
          title: '3. Entity Tagging (NER)',
          icon: { name: 'duo-user-tag', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '20px' }}>
              </div>
              <div style={{ fontSize: '0.7em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <strong style={{ color: '#7e57c2' }}><SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal:</strong>
                    <p style={{ marginTop: '5px' }}>Precision via entity filters; disambiguation; cross-linking across sources</p>
                    
                    <strong style={{ color: '#7e57c2', marginTop: '10px', display: 'block' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                    <p style={{ marginTop: '5px' }}>Run NER; normalize entities to canonical IDs; store arrays by type</p>
                  </div>
                  
                  <div style={{ padding: '10px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#9575cd' }}>When to Use:</strong>
                    <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '0.95em' }}>
                      <li>Product, customer, project-heavy content</li>
                      <li>Support teams</li>
                      <li>Legal documentation</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '15px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.8em' }}>
                    <strong style={{ color: '#81c784' }}>Example Metadata:</strong>
                    <pre style={{ marginTop: '8px', lineHeight: '1.4' }}>{`{
  "entities": {
    "person": ["Alice Chen"],
    "org": ["Acme Corp"],
    "product": ["WidgetX"],
    "ticket_id": ["T-1234"]
  }
}`}</pre>
                  </div>
                  
                  <div>
                    <div style={{ padding: '8px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                      <strong style={{ color: '#81c784', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-thumbs-up" sizeName="1x" darkModeInvert={true} />Pros:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Powerful filters • Better grounding • Per-entity analytics</p>
                    </div>
                    <div style={{ padding: '8px', backgroundColor: 'rgba(255, 152, 0, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ color: '#ff9800', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" darkModeInvert={true} />Cons:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Compute cost • PII handling • Normalization complexity</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: '15px', padding: '10px', backgroundColor: 'rgba(126, 87, 194, 0.15)', borderRadius: '8px' }}>
                  <strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Entity recognition provides structured disambiguation of key references in text, allowing for precise filtering and more accurate responses when domain-specific entities are critical to understanding.</p>
                </div>
                
                <div style={{ marginTop: '12px', padding: '10px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: '#42a5f5' }}><SvgIcon iconName="duo-wrench" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation:</strong>
                  <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Choose NER (spaCy, HF, AWS Comprehend, Azure) → Normalize entities → Store by type → Enable faceted filtering</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#3a2f52',
          notes: 'Technique 3: Entity Tagging (NER) enables precise filtering and disambiguation'
        }
      ]
    },
    {
      id: 'topic-tags',
      title: 'Topic / Category Tags',
      slides: [
        {
          id: 6,
          title: '4. Topic / Category Tags (Taxonomy Mapping)',
          icon: { name: 'duo-tag', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '20px' }}>
              </div>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <strong style={{ color: '#7e57c2' }}><SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal:</strong>
                    <p style={{ marginTop: '5px' }}>Improves both recall and precision with consistent domain labels</p>
                    
                    <strong style={{ color: '#7e57c2', marginTop: '12px', display: 'block' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                    <p style={{ marginTop: '5px' }}>Map chunks to a controlled taxonomy using multi-label classifiers or LLM tagging</p>
                  </div>
                  
                  <div style={{ padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#9575cd' }}>When to Use:</strong>
                    <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '0.95em' }}>
                      <li>Large heterogeneous corpora</li>
                      <li>Compliance domains</li>
                      <li>Customer-facing help centers</li>
                      <li>Knowledge bases with diverse topics</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85em' }}>
                    <strong style={{ color: '#81c784' }}>Example Metadata:</strong>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`{
  "topics": [
    "Payments>Refunds",
    "Compliance>KYC"
  ],
  "topic_ids": [12, 45]
}`}</pre>
                  </div>
                  
                  <div>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                      <strong style={{ color: '#81c784', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-thumbs-up" sizeName="1x" darkModeInvert={true} />Pros:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Stable navigation and filters • Good for reporting • Enhances UI organization</p>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(255, 152, 0, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ color: '#ff9800', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" darkModeInvert={true} />Cons:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Taxonomy governance needed • Re-tag on taxonomy changes • Initial setup complexity</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.15)', borderRadius: '8px' }}>
                  <strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>A well-maintained taxonomy provides consistent categorization across documents, enabling powerful filtering capabilities and improving both search precision and recall across heterogeneous document collections.</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2d2447',
          notes: 'Technique 4: Topic/Category Tags provide consistent domain labels for better filtering'
        }
      ]
    },
    {
      id: 'time-version',
      title: 'Time/Version Metadata',
      slides: [
        {
          id: 7,
          title: '5. Time/Version Metadata',
          icon: { name: 'duo-clock', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '20px' }}>
              </div>
              <div style={{ fontSize: '0.7em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <strong style={{ color: '#26c6da' }}><SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal:</strong>
                    <p style={{ marginTop: '5px' }}>Freshness control; retrieves latest/final data; reduces outdated answers</p>
                    
                    <strong style={{ color: '#26c6da', marginTop: '10px', display: 'block' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                    <p style={{ marginTop: '5px' }}>Extract timestamps (created, updated, effective) and version fields; maintain validity windows</p>
                  </div>
                  
                  <div style={{ padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#4dd0e1' }}>When to Use:</strong>
                    <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '0.95em' }}>
                      <li>Policies</li>
                      <li>Release notes</li>
                      <li>Price lists</li>
                      <li>SLAs</li>
                      <li>Changelogs</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '15px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.8em' }}>
                    <strong style={{ color: '#81c784' }}>Example Metadata:</strong>
                    <pre style={{ marginTop: '8px', lineHeight: '1.4' }}>{`{
  "version": "v3.2",
  "effective_date": "2025-07-01",
  "valid_from": "2025-07-01",
  "valid_to": null,
  "is_latest": true
}`}</pre>
                  </div>
                  
                  <div>
                    <div style={{ padding: '8px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                      <strong style={{ color: '#81c784', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-thumbs-up" sizeName="1x" darkModeInvert={true} />Pros:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Time-aware answers • Easy recency enforcement • Clear versioning</p>
                    </div>
                    <div style={{ padding: '8px', backgroundColor: 'rgba(255, 152, 0, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ color: '#ff9800', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" darkModeInvert={true} />Cons:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Requires consistent source dates • Backfill can be tedious • Date format standardization</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: '15px', padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.15)', borderRadius: '8px' }}>
                  <strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Adding temporal awareness to your RAG system ensures users get the most current information and reduces confusion caused by outdated or superseded content.</p>
                </div>
                
                <div style={{ marginTop: '12px', padding: '10px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: '#42a5f5' }}><SvgIcon iconName="duo-list-check" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation:</strong>
                  <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Parse timestamps from content/filesystem → Store temporal fields → Filter by date range → Boost latest versions</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a3a3a',
          notes: 'Technique 5: Time/Version Metadata enables freshness control and version tracking'
        }
      ]
    },
    {
      id: 'semantic-summary',
      title: 'Semantic Summary',
      slides: [
        {
          id: 8,
          title: '6. Semantic Summary Metadata',
          icon: { name: 'duo-align-left', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '20px' }}>
              </div>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <strong style={{ color: '#42a5f5' }}><SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal:</strong>
                    <p style={{ marginTop: '5px' }}>Speeds candidate pruning; improves reranking; reduces hallucinations with intent-aligned blurbs</p>
                    
                    <strong style={{ color: '#42a5f5', marginTop: '12px', display: 'block' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                    <p style={{ marginTop: '5px' }}>Generate 1–3 sentence, query-agnostic summaries per chunk via LLM; store alongside content</p>
                  </div>
                  
                  <div style={{ padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#64b5f6' }}>When to Use:</strong>
                    <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '0.95em' }}>
                      <li>Long sections</li>
                      <li>Dense PDFs</li>
                      <li>Self-query or hybrid search</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85em' }}>
                    <strong style={{ color: '#81c784' }}>Example Metadata:</strong>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`{
  "summary": "Explains refund 
    eligibility, timelines, and 
    exclusions for 
    subscriptions."
}`}</pre>
                  </div>
                  
                  <div>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                      <strong style={{ color: '#81c784', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-thumbs-up" sizeName="1x" darkModeInvert={true} />Pros:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Better relevance signals • Improves user scanability</p>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(255, 152, 0, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ color: '#ff9800', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" darkModeInvert={true} />Cons:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>LLM cost • Periodic refresh as content changes</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.15)', borderRadius: '8px' }}>
                  <strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Semantic summaries provide distilled context that's easier for retrieval systems to match against queries and for users to quickly scan, improving both automated relevance and human review.</p>
                </div>
                
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: '#9575cd' }}><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation:</strong>
                  <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Prompt LLM: extract key claims, scope, constraints; limit 50–70 tokens → Store summary → Use in hybrid BM25 + vector search and UI previews</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1e3a5f',
          notes: 'Technique 6: Semantic Summary Metadata provides distilled context for better matching'
        }
      ]
    },
    {
      id: 'keyword-highlights',
      title: 'Keyword Highlights',
      slides: [
        {
          id: 9,
          title: '7. Keyword Highlights / Key-Phrase Extraction',
          icon: { name: 'duo-highlighter', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '20px' }}>
              </div>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <strong style={{ color: '#7e57c2' }}><SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal:</strong>
                    <p style={{ marginTop: '5px' }}>Strong lexical signals for hybrid search and explainable matches</p>
                    
                    <strong style={{ color: '#7e57c2', marginTop: '12px', display: 'block' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                    <p style={{ marginTop: '5px' }}>Extract salient keyphrases (RAKE, KeyBERT, YAKE) + domain dictionaries; dedupe/stem</p>
                  </div>
                  
                  <div style={{ padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#9575cd' }}>When to Use:</strong>
                    <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '0.95em' }}>
                      <li>Exact-match needs (IDs, codes)</li>
                      <li>Jargon-heavy domains</li>
                      <li>Search log-driven synonyms</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85em' }}>
                    <strong style={{ color: '#81c784' }}>Example Metadata:</strong>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`{
  "keywords": [
    "refund window",
    "restocking fee",
    "RMA",
    "chargeback"
  ]
}`}</pre>
                  </div>
                  
                  <div>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                      <strong style={{ color: '#81c784', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-thumbs-up" sizeName="1x" darkModeInvert={true} />Pros:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Cheap to compute • Great for hybrid retrieval</p>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(255, 152, 0, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ color: '#ff9800', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" darkModeInvert={true} />Cons:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Can be noisy • Requires periodic curation</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.15)', borderRadius: '8px' }}>
                  <strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Keyword extraction provides explicit lexical bridges between user queries and documents, making retrieval more efficient and results more explainable than purely semantic methods.</p>
                </div>
                
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: '#42a5f5' }}><SvgIcon iconName="duo-list-check" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation:</strong>
                  <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Run extractor → Cap to top-N phrases → Normalize (lowercase, stem) → Merge with domain synonyms → Index as separate BM25 field → Boost matches</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2d2447',
          notes: 'Technique 7: Keyword Highlights provide lexical bridges for hybrid search'
        }
      ]
    },
    {
      id: 'source-confidence',
      title: 'Source Confidence/Trust Score',
      slides: [
        {
          id: 10,
          title: '8. Source Confidence/Trust Score',
          icon: { name: 'duo-certificate', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '20px' }}>
              </div>
              <div style={{ fontSize: '0.7em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <strong style={{ color: '#26c6da' }}><SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal:</strong>
                    <p style={{ marginTop: '5px' }}>Reliability and governance; prioritizes authoritative sources</p>
                    
                    <strong style={{ color: '#26c6da', marginTop: '10px', display: 'block' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                    <p style={{ marginTop: '5px' }}>Compute trust_score using source type, authorship, verification, recency; store 0–1 score</p>
                    
                    <div style={{ marginTop: '12px', padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ color: '#4dd0e1' }}>Trust Score Examples:</strong>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginTop: '8px', fontSize: '0.9em' }}>
                        <div style={{ textAlign: 'left' }}>Policy: <strong>0.95</strong></div>
                        <div style={{ textAlign: 'left' }}>KB: <strong>0.80</strong></div>
                        <div style={{ textAlign: 'left' }}>Email: <strong>0.60</strong></div>
                        <div style={{ textAlign: 'left' }}>Chat: <strong>0.20</strong></div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#4dd0e1' }}>When to Use:</strong>
                    <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '0.95em' }}>
                      <li>Mixed sources (official docs, chats, emails)</li>
                      <li>Regulated environments</li>
                      <li>Knowledge bases with varied quality</li>
                      <li>Customer-facing apps requiring reliable info</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.8em' }}>
                    <strong style={{ color: '#81c784' }}>Example Metadata:</strong>
                    <pre style={{ marginTop: '8px', lineHeight: '1.4' }}>{`{
  "source_type": "policy",
  "trust_score": 0.92,
  "verified": true,
  "reviewer": "Compliance"
}`}</pre>
                  </div>
                  
                  <div>
                    <div style={{ padding: '8px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                      <strong style={{ color: '#81c784', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-thumbs-up" sizeName="1x" darkModeInvert={true} />Pros:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Reduces low-quality context • Auditable • Prioritizes reliable sources • Increases answer confidence</p>
                    </div>
                    <div style={{ padding: '8px', backgroundColor: 'rgba(255, 152, 0, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ color: '#ff9800', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" darkModeInvert={true} />Cons:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Potential bias • Needs upkeep and reviewer workflows • Subjective scoring</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: '15px', padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.15)', borderRadius: '8px' }}>
                  <strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Not all information sources deserve equal weight. Trust scoring ensures models prioritize verified, authoritative content over informal or unverified sources, reducing hallucinations and improving response reliability.</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a3a3a',
          notes: 'Technique 8: Source Confidence/Trust Score prioritizes authoritative, reliable content'
        }
      ]
    },
    {
      id: 'parent-child',
      title: 'Parent–Child Structure',
      slides: [
        {
          id: 11,
          title: '9. Parent–Child Structural Metadata',
          icon: { name: 'duo-diagram-nested', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '20px' }}>
              </div>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <strong style={{ color: '#42a5f5' }}><SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal:</strong>
                    <p style={{ marginTop: '5px' }}>Preserves document hierarchy; enables fetching sibling/ancestor context</p>
                    
                    <strong style={{ color: '#42a5f5', marginTop: '12px', display: 'block' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                    <p style={{ marginTop: '5px' }}>Assign stable IDs at doc/section/paragraph; store parent_id and ancestors path per chunk</p>
                  </div>
                  
                  <div style={{ padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#64b5f6' }}>When to Use:</strong>
                    <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '0.95em' }}>
                      <li>Manuals</li>
                      <li>Textbooks</li>
                      <li>Web docs with TOCs</li>
                      <li>Dense PDFs</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85em' }}>
                    <strong style={{ color: '#81c784' }}>Example Metadata:</strong>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`{
  "id": "chunk_123",
  "parent_id": "sec_5",
  "ancestors": [
    "doc_1",
    "chap_2",
    "sec_5"
  ],
  "order": 3
}`}</pre>
                  </div>
                  
                  <div>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                      <strong style={{ color: '#81c784', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-thumbs-up" sizeName="1x" darkModeInvert={true} />Pros:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Better coherence • Fewer orphan chunks • Improves contextual understanding</p>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(255, 152, 0, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ color: '#ff9800', display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" darkModeInvert={true} />Cons:</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>More complex pipeline • Migration/versioning concerns • Requires document structure</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.15)', borderRadius: '8px' }}>
                  <strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Maintaining hierarchical relationships between document chunks allows RAG systems to intelligently expand context beyond individual fragments, preserving the original document's logical structure.</p>
                </div>
                
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: '#9575cd' }}><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation:</strong>
                  <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Build tree during parsing → Generate unique IDs → Store id, parent_id, ancestors → Fetch hit + k siblings/parent for full context</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1e3a5f',
          notes: 'Technique 9: Parent–Child Structural Metadata preserves document hierarchy for better context'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 12,
          title: 'Best Practices for Metadata-Driven RAG',
          icon: { name: 'duo-clipboard-check', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.65em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#42a5f5', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-pen-ruler" sizeName="1x" darkModeInvert={true} />
                      Design & Governance
                    </h4>
                    <ul style={{ lineHeight: '1.7', fontSize: '0.95em' }}>
                      <li>Define a typed schema; use <code>lower_snake_case</code> keys</li>
                      <li>Separate content fields vs. metadata fields</li>
                      <li>Establish clear tagging guidelines</li>
                      <li>Implement version control for schema evolution</li>
                    </ul>
                  </div>
                  
                  <div style={{ padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7e57c2', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-robot" sizeName="1x" darkModeInvert={true} />
                      Automation & Quality
                    </h4>
                    <ul style={{ lineHeight: '1.7', fontSize: '0.95em' }}>
                      <li>Automate enrichment (parsers, NER, classifiers, LLM summaries)</li>
                      <li>Implement human-in-the-loop for low-confidence tags</li>
                      <li>Establish QA processes with regular validation cycles</li>
                      <li>Audit and retrain quarterly to prevent drift</li>
                    </ul>
                  </div>
                  
                  <div style={{ padding: '12px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#26c6da', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-magnifying-glass-chart" sizeName="1x" darkModeInvert={true} />
                      Retrieval Strategy
                    </h4>
                    <ul style={{ lineHeight: '1.7', fontSize: '0.95em' }}>
                      <li>Use hybrid search (BM25 + vectors) with metadata filters</li>
                      <li>Implement self-query retrievers for dynamic filtering</li>
                      <li>Rerank with <code>section_title</code>, <code>trust_score</code>, and recency</li>
                      <li>Use metadata to expand context when needed</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(255, 152, 0, 0.1)', borderRadius: '8px' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ff9800', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-shield-halved" sizeName="1x" darkModeInvert={true} />
                      Ops & Safety
                    </h4>
                    <ul style={{ lineHeight: '1.7', fontSize: '0.95em' }}>
                      <li>Handle PII in entities with appropriate anonymization</li>
                      <li>Implement access control on sensitive metadata</li>
                      <li>Use versioning and change-data-capture to refresh metadata</li>
                      <li>Log and monitor metadata usage patterns</li>
                      <li>Create fallback strategies when metadata is incomplete</li>
                    </ul>
                  </div>
                  
                  <div style={{ padding: '12px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#81c784', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-chart-line" sizeName="1x" darkModeInvert={true} />
                      Measurement
                    </h4>
                    <ul style={{ lineHeight: '1.7', fontSize: '0.95em' }}>
                      <li>Track precision@k, MRR, and coverage of tags</li>
                      <li>Measure filter hit rate and time-to-answer improvements</li>
                      <li>Analyze user feedback on response quality</li>
                      <li>Assess hallucination reduction with/without metadata</li>
                      <li>Create dashboards for metadata quality metrics</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(255, 215, 0, 0.15)', borderRadius: '8px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffd700', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-star" sizeName="1x" darkModeInvert={true} />
                    Key Success Factors
                  </h4>
                  <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.95em', lineHeight: '1.6' }}>
                    <div><strong>Consistency</strong> in metadata application</div>
                    <div><strong>Integration</strong> at all pipeline stages</div>
                    <div><strong>Automation</strong> to reduce manual burden</div>
                    <div><strong>Governance</strong> to maintain quality</div>
                    <div><strong>Measurement</strong> to quantify impact</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: 'Best practices covering design, automation, retrieval, ops, safety, and measurement'
        },
        {
          id: 13,
          title: 'Conclusion & Next Steps',
          icon: { name: 'duo-check-double', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.7em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                    <h4 style={{ color: '#42a5f5', marginBottom: '8px' }}>
                      <SvgIcon iconName="duo-sitemap" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                      Structure & Context
                    </h4>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                      <li>Section titles</li>
                      <li>Semantic summaries</li>
                      <li>Parent-child relationships</li>
                    </ul>
                  </div>
                  
                  <div style={{ padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                    <h4 style={{ color: '#7e57c2', marginBottom: '8px' }}>
                      <SvgIcon iconName="duo-folder-tree" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                      Classification & Taxonomy
                    </h4>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                      <li>Document types</li>
                      <li>Entity tagging (NER)</li>
                      <li>Topic/category tags</li>
                      <li>Keywords/key-phrases</li>
                    </ul>
                  </div>
                  
                  <div style={{ padding: '12px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                    <h4 style={{ color: '#26c6da', marginBottom: '8px' }}>
                      <SvgIcon iconName="duo-shield-check" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                      Freshness & Trust
                    </h4>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                      <li>Time/version metadata</li>
                      <li>Source confidence scoring</li>
                    </ul>
                  </div>
                </div>
                
                <div style={{ padding: '15px', backgroundColor: 'rgba(129, 199, 132, 0.15)', borderRadius: '8px', marginBottom: '15px' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#81c784', marginBottom: '12px' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="2x" darkModeInvert={true} />
                    Adopt in Phases
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', fontSize: '0.9em' }}>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(66, 165, 245, 0.2)', borderRadius: '8px' }}>
                      <strong style={{ color: '#42a5f5' }}>Phase 1: +15-25%</strong>
                      <ul style={{ marginTop: '8px', lineHeight: '1.6' }}>
                        <li>Section titles</li>
                        <li>Document type labels</li>
                        <li>Time/version metadata</li>
                      </ul>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(126, 87, 194, 0.2)', borderRadius: '8px' }}>
                      <strong style={{ color: '#7e57c2' }}>Phase 2: +30-45%</strong>
                      <ul style={{ marginTop: '8px', lineHeight: '1.6' }}>
                        <li>Entity tagging (NER)</li>
                        <li>Topic/category tags</li>
                        <li>Keywords/key-phrases</li>
                      </ul>
                    </div>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.2)', borderRadius: '8px' }}>
                      <strong style={{ color: '#26c6da' }}>Phase 3: +50-70%</strong>
                      <ul style={{ marginTop: '8px', lineHeight: '1.6' }}>
                        <li>Semantic summaries</li>
                        <li>Source confidence scoring</li>
                        <li>Parent-child structure</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div style={{ padding: '15px', backgroundColor: 'rgba(255, 215, 0, 0.15)', borderRadius: '8px' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffd700', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-star" sizeName="2x" darkModeInvert={true} />
                    Key Takeaway
                  </h3>
                  <p style={{ fontSize: '1.1em', lineHeight: '1.7', marginBottom: '12px' }}>
                    Metadata enrichment is not a one-time task but an ongoing process that continuously improves retrieval quality. Start small, measure impact, and expand progressively to build a robust, contextually-aware RAG system.
                  </p>
                  <p style={{ fontSize: '1em', fontStyle: 'italic' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />
                    Most importantly, these techniques reduce hallucinations by providing better context and grounding for LLMs.
                  </p>
                </div>
                
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#42a5f5', marginBottom: '8px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                    Call to Action
                  </h4>
                  <ul style={{ fontSize: '0.95em', lineHeight: '1.7' }}>
                    <li>Define your metadata schema and baselines this week</li>
                    <li>Enable metadata filters and reranking in your retriever</li>
                    <li>Measure impact; iterate on low-signal fields</li>
                    <li>Prioritize techniques that match your data types</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: 'Conclusion with phased adoption strategy and expected performance improvements'
        }
      ]
    }
  ]
};
