import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';

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
          center: true,
          title: '9 Metadata Enrichment Tricks',
          content: (
            <div style={{ marginTop: '30px', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <h2>Cheat-sheets, patterns, and practical implementations</h2>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.5}>
                <div style={{ marginTop: '20px', fontSize: '0.9em', lineHeight: '1.8' }}>
                  <div>What you'll get:</div>
                  <p>9 field-proven enrichment techniques</p>
                  <p>Implementation steps and metadata examples</p>
                  <p>Best practices to scale enrichment and retrieval</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.9}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#14283d',
          notes: `### 9 Metadata Enrichment Tricks
Welcome everyone! Today we're diving into one of the most powerful yet often overlooked aspects of building effective RAG systems: **metadata enrichment**. Think of metadata as the secret sauce that transforms your basic document search into an intelligent, context-aware retrieval system.

#### What Makes This Presentation Special
We're not just going to talk about theory here. You'll walk away with **nine field-proven techniques** that you can implement immediately in your projects. Each trick comes with practical implementation steps, real metadata examples, and best practices that I've learned from building production RAG systems.

#### Why Metadata Matters
Here's the thing: when you chunk a document for RAG, you're essentially tearing pages out of a book. Without metadata, each chunk is like a page ripped out with no context. You don't know what chapter it came from, what it's about, or how it relates to other pages. Metadata is how we preserve and enhance that context, making retrieval dramatically more accurate.

Let's dive in and explore these nine powerful enrichment techniques...`
        },
        {
          id: 2,
          title: 'Overview: The 9 Enrichment Tricks (by Category)',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', fontSize: '0.75em', color: '#fff' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#42a5f5', marginBottom: '15px' }}>
                      <GSAPAnimated animation="rotateIn" delay={0.3}>
                        <SvgIcon iconName="duo-sitemap" sizeName="2x" darkModeInvert={true} />
                      </GSAPAnimated>
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
                </GSAPAnimated>

                <GSAPAnimated animation="slideInBottom" delay={0.4}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#7e57c2', marginBottom: '15px' }}>
                      <GSAPAnimated animation="bounceIn" delay={0.5}>
                        <SvgIcon iconName="duo-folder-tree" sizeName="2x" darkModeInvert={true} />
                      </GSAPAnimated>
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
                </GSAPAnimated>

                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#26c6da', marginBottom: '15px' }}>
                      <GSAPAnimated animation="scaleIn" delay={0.7}>
                        <SvgIcon iconName="duo-shield-check" sizeName="2x" darkModeInvert={true} />
                      </GSAPAnimated>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#14283d',
          notes: `### Overview: The 9 Enrichment Tricks
Let me give you a roadmap of what we'll cover today. I've organized these nine tricks into three logical categories to help you understand how they work together.

#### Structure & Context: The Foundation
First, we have **Structure and Context** techniques shown in blue. These are your foundation - they preserve the original structure and meaning of your documents. We'll cover Section-Level Titles, which is the simplest but incredibly powerful trick. Then Semantic Summaries, where we let AI create condensed versions of chunks. And finally, Parent-Child Structure, which maintains the hierarchical relationships between document parts.

#### Classification & Taxonomy: Organization
The purple category covers **Classification and Taxonomy**. This is all about organizing and categorizing your content. Document Type Labels help you distinguish between tutorials, API docs, and troubleshooting guides. Entity Tagging uses NER 👉 (N-E-R, Named Entity Recognition) to extract people, places, and organizations. Topic and Category Tags let you assign domain-specific labels. And Keyword Highlights pull out the most important terms from each chunk.

#### Freshness & Trust: Quality Signals
Finally, in cyan, we have **Freshness and Trust**. These are your quality signals. Time and Version Metadata ensures you're retrieving the most current information. Source Confidence helps you prioritize reliable sources over questionable ones.

Together, these nine tricks form a complete toolkit for intelligent metadata enrichment. Let's dive into each one...`
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
          icon: { name: 'duo-heading' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <GSAPAnimated animation="fadeIn" delay={0.2}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="bounceIn" delay={0.3}><SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated>Goal:</strong>
                      <p style={{ marginTop: '5px' }}>Boosts retrieval precision and reduces hallucinations by preserving section intent</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={0.5}>
                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="rotateIn" delay={0.6}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated>How It Works:</strong>
                      <p style={{ marginTop: '5px' }}>Parse headers (H1–H3) and nearest title per chunk; store section_title, heading_level, section_path</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={0.7}>
                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="scaleIn" delay={0.8}><SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated>Implementation Steps:</strong>
                      <ul>
                        <li>Extract headings with HTML/PDF parser; map each chunk to nearest header</li>
                        <li>Store fields: section_title, heading_level, section_path</li>
                        <li>During retrieval, filter/boost on section_title or path</li>
                      </ul>
                    </GSAPAnimated>
                  </div>

                  <GSAPAnimated animation="slideInRight" delay={0.4}>
                    <div style={{ padding: '12px', backgroundColor: '#315f43', borderRadius: '8px' }}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>When to Use:</strong>
                      <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>
                        <li>Technical docs</li>
                        <li>Policies</li>
                        <li>Knowledge bases</li>
                        <li>SOPs with clear headings</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="slideInBottom" delay={0.9}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85em' }}>
                      <strong style={{ color: '#81c784' }}>Example of Metadata Field:</strong>
                      <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`{
  "section_title": "Refund policy",
  "heading_level": 2,
  "section_path": "Docs>Policies>Refunds"
}`}</pre>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a4d2e',
          notes: `### Section-Level Titles as Metadata
Our first enrichment trick is **Section-Level Titles**, and it's one of the most powerful yet simple techniques you'll use. This is the foundation that many other tricks build upon.

#### What's the Goal Here?
The goal is straightforward: we want to **boost retrieval precision** and **reduce hallucinations** by preserving the original section's intent. When you chunk a document, you're breaking it apart. But each chunk came from somewhere specific - maybe from a "Getting Started" section or a "Troubleshooting" section. That context is gold for retrieval.

#### How Does It Work?
Here's the implementation: you parse the document structure to find all headers - typically H1 through H3 in HTML or markdown. For each chunk of text, you identify which header it falls under. Then you store three key fields: the section title itself, the heading level 👉 (one through three), and optionally a full section path showing the hierarchy like "Documentation, API Reference, Authentication".

#### Implementation Steps
First, use an HTML or PDF parser to extract all the headings from your document. Then map each chunk to its nearest header - this is usually the last header that appeared before the chunk. Store those three metadata fields I mentioned. Finally, during retrieval, you can filter results to specific sections or boost chunks that come from relevant sections.

#### When Should You Use This?
This technique shines with structured content. Technical documentation, policy documents, knowledge bases, and standard operating procedures all have clear hierarchical headings. If your documents have that structure, this enrichment is a must-have.

Now let's look at the pros and cons of this approach...`
        },
        {
          id: 4,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <GSAPAnimated animation="bounceIn" delay={0.3}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Pros
                  </h4>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.5}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Strong intent signal</li>
                    <li>Better reranking</li>
                    <li>Improved explainability</li>
                  </ul>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.7}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <GSAPAnimated animation="rotateIn" delay={0.8}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Cons
                  </h4>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.9}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Weak on poorly structured docs</li>
                    <li>Requires robust parsing</li>
                  </ul>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="slideInBottom" delay={1.0}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#315f43', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Section titles provide essential contextual intent that helps models understand what information chunks contain, reducing hallucinations and improving response relevance.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a4d2e',
          notes: `### Pros and Cons of Section-Level Titles
Let's be balanced here. Every technique has trade-offs, and it's important to understand both the strengths and limitations of section-level titles.

#### The Pros: Why This Works So Well
Section titles give you a **strong intent signal**. When a user asks about authentication, you can immediately filter for chunks from authentication sections. This dramatically improves precision. It also enables **better reranking** - you can boost chunks where the section title matches the query topic. Finally, there's the benefit of **improved explainability**. When you show results to users, you can display "This answer comes from the Installation Guide, section three point two" which builds trust.

#### The Cons: Where It Falls Short
The main limitation is that this technique is **weak on poorly structured documents**. If someone just wrote a wall of text with no headings, you've got nothing to work with. Also, it **requires robust parsing**. You need reliable code to extract headers correctly from HTML, PDF, Word documents - and each format has its quirks. Parsing isn't always perfect, especially with complex nested structures or documents that use inconsistent heading styles.

#### The Key Insight
Here's what makes this technique so fundamental: section titles provide **essential contextual intent**. They help the model understand not just what the text says, but what it's *about*. This reduces hallucinations because the model has more context. It improves response relevance because you're retrieving topically-aligned chunks. The bottom line? If your documents have headers, use this trick. It's high value for low complexity.

Now let's move on to document type labels...`
        }
      ]
    },
    {
      id: 'doc-type-labels',
      title: 'Document Type Labels',
      slides: [
        {
          id: 5,
          title: '2. Document Type Labels',
          icon: { name: 'duo-file-lines' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <GSAPAnimated animation="slideInTop" delay={0.1}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="scaleIn" delay={0.2}><SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated>Goal:</strong>
                      <p style={{ marginTop: '5px' }}>Improves precision by matching user intent to doc role (FAQ, Policy, Email, SOP)</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="fadeIn" delay={0.4}>
                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="rotateIn" delay={0.5}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated>How It Works:</strong>
                      <p style={{ marginTop: '5px' }}>Classify each document/chunk into doc_type via rules + ML (file path, layout, keywords)</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={0.6}>
                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="bounceIn" delay={0.7}><SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated>Implementation Steps:</strong>
                      <ul>
                        <li>Define controlled vocabulary (faq, policy, sop, email, memo, meeting_notes)</li>
                        <li>Build heuristic features and train lightweight classifier; backfill historical docs</li>
                        <li>Store doc_type and optionally department/audience; filter or boost at retrieval</li>
                      </ul>
                    </GSAPAnimated>
                  </div>

                  <GSAPAnimated animation="slideInRight" delay={0.3}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <strong>When to Use:</strong>
                      <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>
                        <li>Mixed corpora (FAQs, tickets, emails, specs)</li>
                        <li>Knowledge bases with varied document types</li>
                        <li>Content where document role matters for answers</li>
                        <li>Support/customer service contexts</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="fadeIn" delay={0.9}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85em' }}>
                      <strong style={{ color: '#81c784' }}>Example of Metadata Field:</strong>
                      <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`{
  "doc_type": "SOP",
  "department": "HR",
  "audience": "internal"
}`}</pre>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a1f4d',
          notes: `### Document Type Labels
Moving to our second enrichment trick: **Document Type Labels**. This is about understanding not just what a document says, but what *kind* of document it is.

#### Understanding the Goal
The goal here is to **improve precision by matching user intent to document role**. Think about it: if someone asks "What's our refund policy?", you want to retrieve from policy documents, not from casual emails or meeting notes. If they ask "How do I reset my password?", an FAQ or tutorial is more helpful than a specification document.

#### How Document Type Classification Works
The implementation combines **rules and machine learning**. You use signals like file path - documents in the slash-policies folder are probably policies. Layout patterns matter too - FAQs have that distinctive question-and-answer structure. Keywords are helpful: documents with "standard operating procedure" in the title are likely SOPs 👉 (S-O-Ps, Standard Operating Procedures). You can start with simple rules and progressively add ML for trickier cases.

#### Implementation Steps
First, define your **controlled vocabulary** of document types. Common ones include FAQ, policy, SOP, email, memo, and meeting notes. Keep it manageable - maybe five to ten types. Next, build heuristic features and train a lightweight classifier. Use something simple like logistic regression or a small neural network. Then backfill your historical documents. Finally, store the document type, and optionally add department and audience tags. At retrieval time, filter by type or boost documents of the relevant type.

#### When to Use This
This technique shines when you have a **mixed corpus** - FAQs mixed with support tickets, emails, specifications. Knowledge bases with varied document types are perfect candidates. It's especially valuable in support and customer service contexts where the document format really matters to answering the question correctly.

Now let's examine the trade-offs...`
        },
        {
          id: 6,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <GSAPAnimated animation="scaleIn" delay={0.3}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Pros
                  </h4>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.5}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Fast filter for retrieval</li>
                    <li>Reduces irrelevant context</li>
                    <li>Good for governance</li>
                    <li>Improves user satisfaction</li>
                  </ul>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.7}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <GSAPAnimated animation="flipCard" delay={0.8}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Cons
                  </h4>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.9}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Initial labeling effort</li>
                    <li>Classifier drift needs audits</li>
                    <li>Requires governance of labels</li>
                  </ul>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="slideInBottom" delay={1.0}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#31365f', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Document type labels provide contextual relevance for different user intents, ensuring that responses match the appropriate document format and purpose.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1f4d',
          notes: `### Pros and Cons of Document Type Labels
Let's evaluate document type labels objectively. This technique has some compelling advantages but also requires upfront investment.

#### The Advantages
Document types provide a **fast filter for retrieval**. You can quickly narrow down your search space before even doing semantic search. This **reduces irrelevant context** that might confuse the language model. There's also a governance benefit - having explicit document types is **good for governance** and compliance, helping you track what types of content you have and who can access what. Finally, it **improves user satisfaction** because people get answers in the format they expect.

#### The Challenges
The main challenge is the **initial labeling effort**. Someone needs to classify your existing documents, which can be time-consuming for large corpora. You can use semi-supervised learning to reduce this burden, but you still need a seed set of labeled examples. Another issue is **classifier drift** - document patterns change over time, so you need periodic audits to ensure your classifier stays accurate. Finally, you need **governance of your label taxonomy**. If people start creating new document types haphazardly, your controlled vocabulary breaks down.

#### The Core Value Proposition
The key insight is that document type labels provide **contextual relevance for different user intents**. They ensure responses match the appropriate format and purpose. A policy question gets answered with policy documents. A how-to question gets answered with tutorials. This alignment between intent and document type is fundamental to delivering satisfying answers. The upfront investment pays off through better retrieval precision and happier users.

Next, let's explore entity tagging with named entity recognition...`
        }
      ]
    },
    {
      id: 'entity-tagging',
      title: 'Entity Tagging (NER)',
      slides: [
        {
          id: 7,
          title: '3. Entity Tagging (NER)',
          icon: { name: 'duo-user-tag' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '0.7em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <GSAPAnimated animation="fadeIn" delay={0.1}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="bounceIn" delay={0.2}><SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated>Goal:</strong>
                      <p style={{ marginTop: '5px' }}>Precision via entity filters; disambiguation; cross-linking across sources</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={0.4}>
                      <strong style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="scaleIn" delay={0.5}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated>How It Works:</strong>
                      <p style={{ marginTop: '5px' }}>Run NER; normalize entities to canonical IDs; store arrays by type</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={0.6}>
                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="rotateIn" delay={0.7}><SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated>Implementation Steps:</strong>
                      <ul>
                        <li>Choose NER (spaCy, HF, AWS Comprehend, Azure, etc.) and target labels</li>
                        <li>Normalize (e.g., map "MSFT"→"Microsoft", attach IDs)</li>
                        <li>Store entities by type; enable faceted filtering and boosting</li>
                      </ul>
                    </GSAPAnimated>
                  </div>

                  <GSAPAnimated animation="slideInRight" delay={0.3}>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <strong>When to Use:</strong>
                      <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>
                        <li>Product, customer, project, or regulation-heavy content</li>
                        <li>Support teams</li>
                        <li>Legal documentation</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="fadeIn" delay={0.9}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '15px' }}>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.8em' }}>
                      <strong style={{ color: '#81c784' }}>Example of Metadata Field:</strong>
                      <pre style={{ marginTop: '8px', lineHeight: '1.4' }}>{`{
  "entities": {
    "person": ["Alice Chen"],
    "org": ["Acme Corp"],
    "product": ["WidgetX"],
    "ticket_id": ["T-1234"]
  }
}`}</pre>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#4d1a43',
          notes: `### Entity Tagging with NER
Now we're getting into more advanced territory with **Entity Tagging** using **Named Entity Recognition** or NER 👉 (N-E-R). This technique extracts structured information about real-world entities from unstructured text.

#### The Goal of Entity Tagging
Entity tagging gives you **precision through entity filters**. If someone searches for documents about "Microsoft", you want to find all chunks where Microsoft is mentioned, even if they abbreviate it as "MSFT" or say "Redmond-based tech giant". Entity tagging also enables **disambiguation** - distinguishing between Apple the company and apple the fruit. And it enables **cross-linking across sources** by identifying the same entities mentioned in different documents.

#### How NER Works
The technical implementation involves running a Named Entity Recognition model on your text. Popular options include spaCy 👉 (spay-see), Hugging Face transformers, AWS Comprehend, or Azure Text Analytics. These models identify entities and classify them into types like person, organization, location, product, or custom categories. The crucial next step is **normalization** - mapping variations like "MSFT", "Microsoft Corp", and "Microsoft" to a single canonical ID. Finally, you store entities as arrays grouped by type in your metadata.

#### Implementation Steps
First, choose your NER tool based on your language, domain, and accuracy requirements. SpaCy is great for standard entities in English. For specialized domains like medical or legal, you might need fine-tuned models. Second, build your normalization layer. This might involve a simple lookup table or a more sophisticated entity resolution system. Third, store entities organized by type, making faceted filtering and boosting possible at retrieval time.

#### When to Use This
Entity tagging shines with **product-heavy, customer-heavy, or regulation-heavy content**. Technical support teams benefit enormously because they can filter by product name or customer. Legal documentation with many references to regulations, cases, and parties is a perfect candidate. Anywhere you need to answer "Find all documents about X" where X is a real-world entity.

Let's examine the trade-offs...`
        },
        {
          id: 8,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <GSAPAnimated animation="scaleIn" delay={0.3}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Pros
                  </h4>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.5}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Powerful filters</li>
                    <li>Better grounding</li>
                    <li>Enables per-entity analytics</li>
                  </ul>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.7}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <GSAPAnimated animation="bounceIn" delay={0.8}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Cons
                  </h4>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.9}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Compute cost</li>
                    <li>PII handling</li>
                    <li>Normalization complexity</li>
                  </ul>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="slideInBottom" delay={1.0}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#5f3156', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Entity recognition provides structured disambiguation of key references in text, allowing for precise filtering and more accurate responses when domain-specific entities are critical to understanding.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#4d1a43',
          notes: `### Pros and Cons of Entity Tagging
Entity tagging with NER is powerful but comes with real implementation challenges. Let's break down both sides honestly.

#### The Significant Advantages
Entity tagging provides **powerful filters** that dramatically improve precision. You can answer questions like "Show me all support tickets from Amazon" or "Find documentation mentioning Product X" with high accuracy. It also enables **better grounding** - when the model generates a response, having explicit entities helps it stay factual and reduces hallucinations. Finally, entity tagging **enables per-entity analytics**. You can track which products are mentioned most in support tickets, which customers appear in which documents, which regulations are cited most frequently.

#### The Real Challenges
The **compute cost** can be significant. Running NER models on every chunk adds latency and infrastructure cost, especially at scale. You also have to deal with **PII handling** or Personally Identifiable Information 👉 (P-I-I). If you're extracting person names, you need proper security, access controls, and possibly anonymization. The **normalization complexity** is often underestimated. Building a system that correctly maps "Amazon", "Amazon dot com", "AWS", and "Amazon Web Services" to the same canonical entity requires ongoing maintenance.

#### The Core Value
The key insight is that **entity recognition provides structured disambiguation**. This is crucial when domain-specific entities are critical to understanding. In technical support, legal documents, or medical records, getting the entities right isn't optional - it's essential for correctness. The investment in entity tagging pays off when precision on entity-related queries directly impacts your users' satisfaction or your organization's compliance requirements.

Let's move on to topic and category tags...`
        }
      ]
    },
    {
      id: 'topic-tags',
      title: 'Topic / Category Tags',
      slides: [
        {
          id: 9,
          title: '4. Topic / Category Tags (Taxonomy Mapping)',
          icon: { name: 'duo-tag' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <GSAPAnimated animation="slideInTop" delay={0.2}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="rotateIn" delay={0.3}><SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated>Goal:</strong>
                      <p style={{ marginTop: '5px' }}>Improves both recall and precision with consistent domain labels</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="fadeIn" delay={0.5}>
                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="scaleIn" delay={0.6}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated>How It Works:</strong>
                      <p style={{ marginTop: '5px' }}>Map chunks to a controlled taxonomy using multi-label classifiers or LLM tagging</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={0.7}>
                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="bounceIn" delay={0.8}><SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated>Implementation Steps:</strong>
                      <ul>
                        <li>Define taxonomy (e.g., Payments&gt;Refunds, Risk&gt;KYC)</li>
                        <li>Train/evaluate multi-label classifier or LLM prompt; set confidence thresholds</li>
                        <li>Store topics and topic_ids; use for filters and UI facets</li>
                      </ul>
                    </GSAPAnimated>
                  </div>

                  <GSAPAnimated animation="slideInRight" delay={0.4}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>When to Use:</strong>
                      <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>
                        <li>Large heterogeneous corpora</li>
                        <li>Compliance domains</li>
                        <li>Customer-facing help centers</li>
                        <li>Knowledge bases with diverse topics</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="fadeIn" delay={0.9}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85em' }}>
                      <strong style={{ color: '#81c784' }}>Example of Metadata Field:</strong>
                      <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`{
  "topics": [
    "Payments>Refunds",
    "Compliance>KYC"
  ],
  "topic_ids": [12, 45]
}`}</pre>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#4d441a',
          notes: `### Topic and Category Tags
Our fourth enrichment trick is **Topic and Category Tags**, also known as taxonomy mapping. This is about organizing your content into a controlled hierarchical structure.

#### The Goal of Topic Tagging
Topic tagging **improves both recall and precision** by providing consistent domain labels. When someone searches for payment information, you want to retrieve all chunks tagged with payment-related topics, even if they don't explicitly mention the word "payment". A controlled taxonomy ensures consistency - everyone uses the same labels, not some people saying "refunds" while others say "returns" or "money back".

#### How Taxonomy Mapping Works
The technical approach involves mapping each chunk to your **controlled taxonomy** using either multi-label classifiers or LLM tagging. Multi-label means a chunk can belong to multiple categories - a document about credit card refunds might be tagged with both "Payments, Refunds" and "Compliance, KYC" 👉 (K-Y-C, Know Your Customer). You can train traditional classifiers like BERT-based models, or you can use modern LLMs with carefully crafted prompts that ask "Which of these categories apply to this text?"

#### Implementation Steps
First, **define your taxonomy**. Make it hierarchical with parent-child relationships like "Payments, Refunds" or "Risk, KYC". Keep it manageable - maybe twenty to fifty top-level categories with subcategories. Too many categories and your classifier gets confused. Second, train or evaluate your tagger. Set **confidence thresholds** - only accept tags above say eighty percent confidence to maintain quality. Third, store both human-readable topic paths and numeric topic IDs for efficient filtering.

#### When to Use This
Topic tagging excels with **large heterogeneous corpora** where content spans many subjects. Compliance domains benefit because regulatory categories are well-defined. Customer-facing help centers need topics for user navigation. Any knowledge base with diverse topics where users expect to browse by category is a strong candidate.

Now let's evaluate the trade-offs...`
        },
        {
          id: 10,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <GSAPAnimated animation="bounceIn" delay={0.3}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Pros
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.15} >{[<ul style={{ fontSize: '1.2rem' }}>
                    <li>Stable navigation and filters</li>
                    <li>Good for reporting and analytics</li>
                    <li>Enhances user interface organization</li>
                  </ul>]}</GSAPStaggerList>
                <GSAPAnimated animation="slideInLeft" delay={0.9}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <GSAPAnimated animation="rotateIn" delay={1.0}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Cons
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.15} >{[<ul style={{ fontSize: '1.2rem' }}>
                    <li>Taxonomy governance needed</li>
                    <li>Re-tag on taxonomy changes</li>
                    <li>Initial setup complexity</li>
                  </ul>]}</GSAPStaggerList>
              </div>
              <GSAPAnimated animation="fadeIn" delay={1.6}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#5f5731', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}>
                    <GSAPAnimated animation="scaleIn" delay={1.7}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Key Insight:
                  </strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>A well-maintained taxonomy provides consistent categorization across documents, enabling powerful filtering capabilities and improving both search precision and recall across heterogeneous document collections.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#4d441a',
          notes: `### Pros and Cons of Topic and Category Tags

Now let's honestly assess the trade-offs of implementing a taxonomy-based tagging system. Like any sophisticated feature, topic and category tags come with both significant benefits and important considerations you need to plan for.

#### The Advantages: Stability and Organization
The **pros** are compelling. First, you get *stable navigation and filters* - once your taxonomy is established, users can consistently browse and filter content using the same categories over time. This stability is incredibly valuable for user experience. Second, taxonomies are **excellent for reporting and analytics**. You can easily generate insights like "What percentage of our documentation is about security?" or "Which categories get the most queries?" Finally, a well-designed taxonomy *enhances your user interface organization*, making it intuitive for users to explore related content and understand how different topics relate to each other.

#### The Challenges: Governance and Maintenance
On the **cons** side, the biggest challenge is *taxonomy governance*. Someone needs to own and maintain your category structure, deciding when to add new categories, merge similar ones, or deprecate outdated ones. This is ongoing work that requires both domain expertise and coordination across teams. Second, when you do change your taxonomy, you'll need to **re-tag existing content**, which can be a significant effort depending on your corpus size. Finally, there's *initial setup complexity* - designing a good taxonomy requires careful thought about your domain, your users' mental models, and how categories will be used in practice.

#### Making It Work
The key insight here is that a **well-maintained taxonomy** provides tremendous value, but only if you're committed to maintaining it. Think of it like a garden - it needs regular tending to remain useful. The filtering capabilities and improved precision you gain are absolutely worth the investment if you have heterogeneous document collections that span multiple topics or domains.

Let's move on to our next enrichment technique...`
        }
      ]
    },
    {
      id: 'time-version',
      title: 'Time/Version Metadata',
      slides: [
        {
          id: 11,
          title: '5. Time/Version Metadata',
          icon: { name: 'duo-clock' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '0.7em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <GSAPAnimated animation="fadeIn" delay={0.2}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>
                        <GSAPAnimated animation="rotateIn" delay={0.3}>
                          <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Goal:
                      </strong>
                      <p style={{ marginTop: '5px' }}>Freshness control; retrieves latest/final data; reduces outdated answers</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={0.5}>
                      <strong style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                        <GSAPAnimated animation="bounceIn" delay={0.6}>
                          <SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        How It Works:
                      </strong>
                      <p style={{ marginTop: '5px' }}>Extract timestamps (created, updated, effective) and version fields; maintain validity windows</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={0.8}>
                      <strong style={{ marginTop: '12px', display: 'block' }}>
                        <GSAPAnimated animation="scaleIn" delay={0.9}>
                          <SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Implementation Steps:
                      </strong>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.15} >{[<ul>
                        <li>Parse timestamp/version from content and file system</li>
                        <li>Store effective_date, valid_from/valid_to, version, is_latest</li>
                        <li>Retrieval: filter by date range; sort/boost is_latest and newest version</li>
                      </ul>]}</GSAPStaggerList>
                  </div>

                  <GSAPAnimated animation="slideInRight" delay={0.4}>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>When to Use:</strong>
                      <GSAPStaggerList stagger={0.1} >{[<ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>
                          <li>Policies</li>
                          <li>Release notes</li>
                          <li>Price lists</li>
                          <li>SLAs</li>
                          <li>Changelogs</li>
                        </ul>]}</GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '15px' }}>
                  <GSAPAnimated animation="fadeIn" delay={1.3}>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.8em' }}>
                      <strong style={{ color: '#81c784' }}>Example of Metadata Field:</strong>
                      <pre style={{ marginTop: '8px', lineHeight: '1.4' }}>{`{
  "version": "v3.2",
  "effective_date": "2025-07-01",
  "valid_from": "2025-07-01",
  "valid_to": null,
  "is_latest": true
}`}</pre>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#4d1a1a',
          notes: `### Time/Version Metadata: Adding Temporal Awareness

Let's talk about enrichment technique number five: **Time and Version Metadata**. This is where we add temporal intelligence to our RAG system, ensuring that users always get the most current and relevant information.

#### Why Temporal Metadata Matters
Think about this scenario: your company updates its privacy policy every quarter. Without time metadata, your RAG system might happily serve up last year's policy, giving users outdated or even legally incorrect information. That's a serious problem. **Time and version metadata** gives your system *freshness control*, allowing it to retrieve the latest and most final versions of documents while explicitly filtering out outdated content.

#### How the System Works
The mechanism is straightforward but powerful. You extract multiple types of timestamps - when a document was **created**, when it was last **updated**, and most importantly, when it becomes **effective**. You also track version fields and maintain *validity windows* - explicit start and end dates for when information is applicable. This is crucial for things like pricing that changes over time or policies that have defined effective periods.

#### Practical Implementation
Let me walk you through the implementation. First, you **parse timestamps and version numbers** from both the document content itself and the file system metadata. Then you store several key fields: the effective date, validity windows with both valid_from and valid_to dates, the version number, and a boolean flag called is_latest to quickly identify current versions. During retrieval, you filter by date ranges to exclude expired content, and you sort or boost results that are marked as latest or have the newest version numbers.

#### Perfect Use Cases
This technique shines for specific document types. Think **policies** that change periodically, **release notes** that describe different software versions, **price lists** that need to reflect current rates, **SLAs** 👉 (Service Level Agreements) with defined term periods, and **changelogs** that document when features were added or changed. Any time-sensitive content benefits tremendously from this approach.

Now let's evaluate the trade-offs of implementing temporal metadata...`
        },
        {
          id: 12,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <GSAPAnimated animation="scaleIn" delay={0.3}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Pros
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.15} >{[<ul style={{ fontSize: '1.2rem' }}>
                    <li>Time-aware answers</li>
                    <li>Easy recency enforcement</li>
                    <li>Clear versioning support</li>
                  </ul>]}</GSAPStaggerList>
                <GSAPAnimated animation="slideInRight" delay={0.9}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <GSAPAnimated animation="flipCard" delay={1.0}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Cons
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.15} >{[<ul style={{ fontSize: '1.2rem' }}>
                    <li>Requires consistent source dates</li>
                    <li>Backfill can be tedious</li>
                    <li>Date format standardization needed</li>
                  </ul>]}</GSAPStaggerList>
              </div>
              <GSAPAnimated animation="fadeIn" delay={1.6}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#5f3131', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}>
                    <GSAPAnimated animation="bounceIn" delay={1.7}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Key Insight:
                  </strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Adding temporal awareness to your RAG system ensures users get the most current information and reduces confusion caused by outdated or superseded content.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#4d1a1a',
          notes: `### Pros and Cons of Time/Version Metadata

Let's weigh the benefits and challenges of implementing temporal metadata in your RAG system. As with any enrichment technique, understanding the trade-offs helps you make informed decisions about when and how to apply it.

#### The Strong Benefits
The **pros** are significant and immediately impactful. First and foremost, you get *time-aware answers* - your system inherently understands that information has a temporal dimension and can provide context about when something was true or valid. This is incredibly powerful for maintaining accuracy. Second, you get **easy recency enforcement**. Want to only show results from the last six months? Simple filter. Need the latest version? One boolean check. The implementation is straightforward once the metadata is in place. Third, you get *clear versioning support*, which is essential for any organization that maintains multiple versions of documents, software, or policies simultaneously.

#### The Implementation Challenges
On the **cons** side, the main challenges are around data consistency and initial setup. First, temporal metadata *requires consistent source dates* - if your source documents don't reliably include timestamps or version information, you'll have to extract or infer them, which can be error-prone. Second, **backfilling historical data** can be tedious, especially if you have a large corpus of existing documents that need temporal metadata added retroactively. Finally, you need *date format standardization* - dates come in many formats, and you need a consistent approach to parsing and storing them to make filtering work correctly.

#### The Bottom Line
The key insight is powerful: **adding temporal awareness** to your RAG system ensures users always get the most current information and dramatically reduces confusion caused by outdated or superseded content. For any domain where information changes over time - which is most domains - this enrichment technique pays for itself quickly. The initial setup effort is worth it for the long-term reliability gains.

Next, let's explore how semantic summaries can enhance our retrieval quality...`
        }
      ]
    },
    {
      id: 'semantic-summary',
      title: 'Semantic Summary',
      slides: [
        {
          id: 13,
          title: '6. Semantic Summary Metadata',
          icon: { name: 'duo-align-left' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <GSAPAnimated animation="fadeIn" delay={0.2}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>
                        <GSAPAnimated animation="scaleIn" delay={0.3}>
                          <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Goal:
                      </strong>
                      <p style={{ marginTop: '5px' }}>Speeds candidate pruning; improves reranking; reduces hallucinations with intent-aligned blurbs</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={0.5}>
                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}>
                        <GSAPAnimated animation="rotateIn" delay={0.6}>
                          <SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        How It Works:
                      </strong>
                      <p style={{ marginTop: '5px' }}>Generate 1–3 sentence, query-agnostic summaries per chunk via LLM; store alongside content</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={0.8}>
                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}>
                        <GSAPAnimated animation="bounceIn" delay={0.9}>
                          <SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Implementation Steps:
                      </strong>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.15} >{[<ul>
                        <li>Prompt LLM: extract key claims, scope, constraints; limit 50–70 tokens</li>
                        <li>Store summary and optional bullets/QA-focused tags</li>
                        <li>Use summary field in hybrid BM25 + vector search and in UI previews</li>
                      </ul>]}</GSAPStaggerList>
                  </div>

                  <GSAPAnimated animation="slideInRight" delay={0.4}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                      <strong>When to Use:</strong>
                      <GSAPStaggerList stagger={0.12} >{[<ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>
                          <li>Long sections</li>
                          <li>Dense PDFs</li>
                          <li>When using self-query or hybrid search</li>
                        </ul>]}</GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <GSAPAnimated animation="fadeIn" delay={1.3}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85em' }}>
                      <strong style={{ color: '#81c784' }}>Example of Metadata Field:</strong>
                      <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`{
  "summary": "Explains refund eligibility, timelines, and exclusions
  for subscriptions."
}`}</pre>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2d1a4d',
          notes: `### Semantic Summary Metadata: Distilling the Essence

Welcome to enrichment technique number six: **Semantic Summary Metadata**. This is where we leverage LLMs to create concise, meaningful summaries of each chunk, dramatically improving both retrieval quality and user experience.

#### The Power of Summarization
Think about how you scan search results on Google - you don't read every full result, you scan the *snippets* to quickly determine relevance. That's exactly what semantic summaries provide for your RAG system. They **speed up candidate pruning** by giving the system condensed, high-signal text to match against queries. They improve **reranking** by providing clear intent signals. And crucially, they *reduce hallucinations* by offering intent-aligned blurbs that accurately represent the chunk's content without the noise of formatting, examples, or tangential details.

#### How the Mechanism Works
The implementation is elegant. You generate **one to three sentence summaries** for each chunk using an LLM. These are query-agnostic, meaning they capture the chunk's core content regardless of what someone might search for. The summaries are concise - typically fifty to seventy tokens - and stored right alongside the original content. They become first-class metadata fields that your retrieval system can leverage.

#### Implementation in Practice
Here's how you implement this. First, you **prompt your LLM** with clear instructions: extract the key claims, define the scope, note any constraints or caveats, and keep it under seventy tokens. Then you store the summary field, and optionally add bullet points or QA-focused tags for even richer metadata. During retrieval, you use this summary field in **hybrid search** - combining BM25 keyword matching with vector similarity - and you display summaries in your UI previews so users can quickly scan results.

#### When This Technique Shines
Semantic summaries are especially valuable for *long sections* that would otherwise be hard to quickly assess, **dense PDFs** full of technical content, and scenarios where you're using *self-query* or hybrid search approaches that benefit from having multiple text representations of the same content.

Now let's evaluate the trade-offs...`
        },
        {
          id: 14,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInBottom" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <GSAPAnimated animation="rotateIn" delay={0.3}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Pros
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.2} >{[<ul style={{ fontSize: '1.2rem' }}>
                    <li>Strong relevance signals</li>
                    <li>Improves user scanability</li>
                  </ul>]}</GSAPStaggerList>
                <GSAPAnimated animation="slideInBottom" delay={0.9}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <GSAPAnimated animation="scaleIn" delay={1.0}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Cons
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.2} >{[<ul style={{ fontSize: '1.2rem' }}>
                    <li>LLM cost</li>
                    <li>Periodic refresh as content changes</li>
                  </ul>]}</GSAPStaggerList>
              </div>
              <GSAPAnimated animation="fadeIn" delay={1.5}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#42315f', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}>
                    <GSAPAnimated animation="bounceIn" delay={1.6}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Key Insight:
                  </strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Semantic summaries provide distilled context that's easier for retrieval systems to match against queries and for users to quickly scan, improving both automated relevance and human review.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2d1a4d',
          notes: `### Pros and Cons of Semantic Summary Metadata

Let's evaluate the benefits and costs of implementing semantic summaries in your RAG pipeline. This technique involves LLM processing, so understanding the trade-offs is crucial for making smart implementation decisions.

#### The Compelling Benefits
The **pros** are substantial. First, you get *strong relevance signals* for your retrieval system. Summaries distill the core meaning of chunks into dense, high-quality text that matches well against user queries. This is especially powerful in hybrid search scenarios where you're combining keyword and semantic matching. The summaries act as optimized representations that capture intent without the noise of formatting, code examples, or verbose explanations. Second, semantic summaries **dramatically improve user scanability**. When users see search results, they can quickly understand what each chunk is about without having to read verbose technical content. This speeds up the entire search experience and helps users make better decisions about which results to explore in depth.

#### The Cost Considerations
On the **cons** side, there are two main challenges. First, there's *LLM cost* - generating summaries for every chunk in your corpus requires LLM API calls, which means both financial cost and processing time. For large document collections, this can add up. You'll want to consider using smaller, faster models for summary generation, or batching your processing to optimize costs. Second, you need **periodic refresh as content changes**. When you update your source documents, the summaries become stale and need regeneration. This means maintaining a system to track which summaries need updating and re-running the summarization pipeline.

#### The Value Proposition
Here's the key insight: **semantic summaries provide distilled context** that serves two masters - they make retrieval systems more accurate by offering clean, intent-focused text to match against, and they make human review faster by giving users scannable previews. This dual benefit - improving both *automated relevance* and human decision-making - makes the LLM cost worthwhile for most production RAG systems. The improvement in retrieval quality often justifies the expense.

Let's explore our next enrichment technique...`
        }
      ]
    },
    {
      id: 'keyword-highlights',
      title: 'Keyword Highlights',
      slides: [
        {
          id: 15,
          title: '7. Keyword Highlights / Key-Phrase Extraction',
          icon: { name: 'duo-highlighter' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <GSAPAnimated animation="fadeIn" delay={0.2}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>
                        <GSAPAnimated animation="bounceIn" delay={0.3}>
                          <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Goal:
                      </strong>
                      <p style={{ marginTop: '5px' }}>Strong lexical signals for hybrid search and explainable matches</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={0.5}>
                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}>
                        <GSAPAnimated animation="rotateIn" delay={0.6}>
                          <SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        How It Works:
                      </strong>
                      <p style={{ marginTop: '5px' }}>Extract salient keyphrases (RAKE, KeyBERT, YAKE) + domain dictionaries; dedupe/stem</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={0.8}>
                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}>
                        <GSAPAnimated animation="scaleIn" delay={0.9}>
                          <SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Implementation Steps:
                      </strong>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.15} >{[<ul>
                        <li>Run extractor; cap to top-N phrases; normalize (lowercase, stem)</li>
                        <li>Merge with domain synonyms; store as keywords array</li>
                        <li>Index as separate BM25 field; boost matches</li>
                      </ul>]}</GSAPStaggerList>
                  </div>

                  <GSAPAnimated animation="slideInRight" delay={0.4}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <strong>When to Use:</strong>
                      <GSAPStaggerList stagger={0.12} >{[<ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>
                          <li>Exact-match needs (IDs, codes)</li>
                          <li>Jargon-heavy domains</li>
                          <li>Search log-driven synonyms</li>
                        </ul>]}</GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <GSAPAnimated animation="fadeIn" delay={1.3}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85em' }}>
                      <strong style={{ color: '#81c784' }}>Example of Metadata Field:</strong>
                      <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`{
  "keywords": [
    "refund window",
    "restocking fee",
    "RMA",
    "chargeback"
  ]
}`}</pre>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#4d4b1a',
          notes: `### Keyword Highlights and Key-Phrase Extraction

Let's dive into enrichment technique number seven: **Keyword Highlights and Key-Phrase Extraction**. This is where we automatically identify the most important terms and phrases in each chunk, creating powerful lexical signals for retrieval.

#### The Goal: Bridging Queries and Content
The purpose of keyword extraction is to provide **strong lexical signals** for hybrid search approaches. While semantic embeddings are great at capturing meaning, they can miss exact term matches that users often search for. By extracting and indexing key phrases explicitly, we create clear bridges between user queries and document content, and we get **explainable matches** - you can show users exactly which keywords matched their query, making results more transparent and trustworthy.

#### The Mechanism: Automated Extraction
How does it work? You use specialized algorithms like **RAKE** 👉 (Rapid Automatic Keyword Extraction), **KeyBERT** which uses BERT embeddings to identify key terms, or **YAKE** 👉 (Yet Another Keyword Extractor). These tools analyze term frequency, co-occurrence patterns, and semantic importance to identify salient keyphrases. You can enhance this with *domain-specific dictionaries* - lists of important terms in your field - and then deduplicate and stem the results to normalize variations like "refund", "refunds", and "refunding".

#### Implementation Steps
The implementation is straightforward. First, you **run your chosen extractor** on each chunk, typically capping results to the top five to ten phrases to avoid noise. Then you normalize them - lowercase everything, apply stemming to catch variations. Next, you *merge with domain-specific synonyms* from your curated lists. Finally, you store these as a keywords array in your metadata. During retrieval, you index this as a **separate BM25 field** and boost matches, giving query terms that appear in the keywords field extra weight.

#### Perfect Use Cases
This technique shines in specific scenarios. It's ideal when you have **exact-match needs**, like product IDs, error codes, or model numbers that must match precisely. It's invaluable in *jargon-heavy domains* like legal, medical, or technical fields where specific terminology matters. And it works beautifully when you have **search log data** that shows you which synonyms and variations users actually type.

Let's evaluate the trade-offs...`
        },
        {
          id: 16,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInTop" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <GSAPAnimated animation="flipCard" delay={0.3}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Pros
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.2} >{[<ul style={{ fontSize: '1.2rem' }}>
                    <li>Cheap to compute</li>
                    <li>Great for hybrid retrieval</li>
                  </ul>]}</GSAPStaggerList>
                <GSAPAnimated animation="slideInTop" delay={0.9}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <GSAPAnimated animation="bounceIn" delay={1.0}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Cons
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.2} >{[<ul style={{ fontSize: '1.2rem' }}>
                    <li>Can be noisy</li>
                    <li>Requires periodic curation</li>
                  </ul>]}</GSAPStaggerList>
              </div>
              <GSAPAnimated animation="fadeIn" delay={1.5}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#5f5d31', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}>
                    <GSAPAnimated animation="scaleIn" delay={1.6}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Key Insight:
                  </strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Keyword extraction provides explicit lexical bridges between user queries and documents, making retrieval more efficient and results more explainable than purely semantic methods.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#4d4b1a',
          notes: `### Pros and Cons of Keyword Highlights

Let's examine the advantages and limitations of implementing keyword extraction in your RAG pipeline. This technique has a different cost-benefit profile compared to the LLM-based approaches we've discussed.

#### The Cost-Effective Benefits
The **pros** are immediately appealing. First, keyword extraction is *cheap to compute* - unlike semantic summaries that require LLM calls, most keyword extraction algorithms are statistical or use lightweight models. You can process large document collections quickly and affordably. This makes it an excellent first enrichment technique to implement when you're budget-conscious or working with massive corpora. Second, extracted keywords are **great for hybrid retrieval** approaches. They provide explicit term matches that complement semantic search beautifully. When a user searches for a specific product code or technical term, having that keyword indexed separately ensures you'll find it, even if the semantic embedding doesn't capture its importance.

#### The Quality Challenges
On the **cons** side, there are quality considerations. First, automatic keyword extraction *can be noisy* - algorithms sometimes pick up common phrases that aren't actually meaningful, or miss domain-specific terms that look ordinary statistically but are crucial in your field. This means you'll see false positives and false negatives. Second, the technique **requires periodic curation**. You need human experts to review the extracted keywords, remove noise, add missing domain terms, and maintain synonym dictionaries. This isn't a set-it-and-forget-it solution; it needs ongoing attention to maintain quality, especially as your content evolves and new terminology emerges.

#### The Strategic Value
Here's the key insight: **keyword extraction provides explicit lexical bridges** between what users type and what's in your documents. This makes retrieval more *efficient* because you can use fast BM25 indices, and it makes results more *explainable* - you can show users exactly which terms matched. This transparency is valuable for user trust and for debugging your retrieval system. While purely semantic methods are powerful, adding explicit keyword matching creates a more robust, interpretable system.

Now let's explore how to score source reliability...`
        }
      ]
    },
    {
      id: 'source-confidence',
      title: 'Source Confidence/Trust Score',
      slides: [
        {
          id: 17,
          title: '8. Source Confidence/Trust Score',
          icon: { name: 'duo-certificate' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '0.7em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <GSAPAnimated animation="fadeIn" delay={0.2}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>
                        <GSAPAnimated animation="scaleIn" delay={0.3}>
                          <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Goal:
                      </strong>
                      <p style={{ marginTop: '5px' }}>Reliability and governance; prioritizes authoritative sources</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={0.5}>
                      <strong style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                        <GSAPAnimated animation="rotateIn" delay={0.6}>
                          <SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        How It Works:
                      </strong>
                      <p style={{ marginTop: '5px' }}>Compute trust_score using source type, authorship, verification, recency; store 0–1 score</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="fadeIn" delay={0.8}>
                      <div style={{ marginTop: '12px', padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                        <strong>Trust Score Examples:</strong>
                        <GSAPStaggerList stagger={0.1} >
                          {[<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginTop: '8px', fontSize: '1.2rem' }}>
                            <div style={{ textAlign: 'left' }}>Policy: <strong>0.95</strong></div>
                            <div style={{ textAlign: 'left' }}>KB: <strong>0.80</strong></div>
                            <div style={{ textAlign: 'left' }}>Email: <strong>0.60</strong></div>
                            <div style={{ textAlign: 'left' }}>Chat: <strong>0.20</strong></div>
                          </div>]}
                        </GSAPStaggerList>
                      </div>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={1.2}>
                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}>
                        <GSAPAnimated animation="bounceIn" delay={1.3}>
                          <SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Implementation Steps:
                      </strong>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.15} >{[<ul>
                        <li>Define rubric (policy&gt;kb&gt;chat&gt;email; +verified; +recent)</li>
                        <li>Calculate trust_score; store source_type, verified, reviewer</li>
                        <li>Retrieval: threshold or boost by trust_score; expose in UI</li>
                      </ul>]}</GSAPStaggerList>
                  </div>

                  <GSAPAnimated animation="slideInRight" delay={0.4}>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                      <strong>When to Use:</strong>
                      <GSAPStaggerList stagger={0.12} >{[<ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>
                          <li>Mixed sources (official docs, chats, emails)</li>
                          <li>Regulated environments</li>
                          <li>Knowledge bases with varied quality</li>
                          <li>Customer-facing applications requiring reliable information</li>
                        </ul>]}</GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <GSAPAnimated animation="fadeIn" delay={1.7}>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.8em' }}>
                      <strong style={{ color: '#81c784' }}>Example of Metadata Field:</strong>
                      <pre style={{ marginTop: '8px', lineHeight: '1.4' }}>{`{
  "source_type": "policy",
  "trust_score": 0.92,
  "verified": true,
  "reviewer": "Compliance"
}`}</pre>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a4d27',
          notes: `### Source Confidence and Trust Scoring

Welcome to enrichment technique number eight: **Source Confidence and Trust Scoring**. This is where we add a crucial quality signal that helps your RAG system prioritize authoritative, verified sources over informal or questionable ones.

#### The Reliability Challenge
Not all information sources are created equal. A company policy document that's been reviewed by legal is far more trustworthy than a random chat message from two years ago. Yet without trust metadata, your retrieval system treats them the same - both are just chunks with embeddings. **Trust scoring** addresses this by encoding *reliability and governance* signals directly into your metadata, allowing the system to prioritize authoritative sources and dramatically reduce the risk of surfacing incorrect or outdated information.

#### How Trust Scores Work
The implementation is elegant. You compute a **trust score** between zero and one for each document or chunk based on multiple factors. Source type matters - official policies score higher than emails or chat logs. *Authorship* is important - content from subject matter experts gets boosted. **Verification status** is key - has this been reviewed and approved? And *recency* can factor in - fresher verified content might score higher than older unverified content. You combine these factors into a single normalized score that's easy to use in retrieval logic.

#### Implementation Strategy
Here's how you implement this. First, you **define a clear rubric** - for example, official policies get 0.9 to 0.95, knowledge base articles get 0.7 to 0.85, internal emails get 0.5 to 0.7, and casual chat logs get 0.1 to 0.3. Add bonuses for verified content and recent updates. Then you calculate and store the trust score along with supporting fields like source type, verification status, and reviewer name. During retrieval, you can either apply hard *thresholds* - "only return results with trust above 0.5" - or use *soft boosting* - multiply relevance scores by trust scores. Finally, expose trust scores in your UI so users can see why certain results were prioritized.

#### Critical Use Cases  
This technique is essential in specific scenarios. It's crucial when you have **mixed sources** - official documentation alongside informal communications. It's required in *regulated environments* like healthcare or finance where information accuracy is legally mandated. It's valuable for **knowledge bases with varied quality** where some content has been professionally curated and other content is community-contributed. And it's vital for customer-facing applications that require reliable, trustworthy information.

Let's assess the pros and cons...`
        },
        {
          id: 18,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <GSAPAnimated animation="scaleIn" delay={0.3}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Pros
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.15} >{[<ul style={{ fontSize: '1.2rem' }}>
                    <li>Reduces low-quality context</li>
                    <li>Auditable</li>
                    <li>Prioritizes reliable sources</li>
                    <li>Increases answer confidence</li>
                  </ul>]}</GSAPStaggerList>
                <GSAPAnimated animation="slideInLeft" delay={1.0}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <GSAPAnimated animation="rotateIn" delay={1.1}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Cons
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.15} >{[<ul style={{ fontSize: '1.2rem' }}>
                    <li>Potential bias</li>
                    <li>Needs upkeep and reviewer workflows</li>
                    <li>Subjective scoring criteria</li>
                  </ul>]}</GSAPStaggerList>
              </div>
              <GSAPAnimated animation="fadeIn" delay={1.7}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#315f3d', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}>
                    <GSAPAnimated animation="bounceIn" delay={1.8}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Key Insight:
                  </strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Not all information sources deserve equal weight. Trust scoring ensures models prioritize verified, authoritative content over informal or unverified sources, reducing hallucinations and improving response reliability.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a4d27',
          notes: `### Pros and Cons of Source Confidence Scoring

Let's carefully evaluate the benefits and challenges of implementing trust scoring in your RAG system. This technique has significant implications for both quality and organizational processes.

#### The Quality and Governance Benefits
The **pros** are substantial and address core RAG challenges. First, trust scoring *reduces low-quality context* from reaching your LLM. By filtering or down-weighting unreliable sources, you prevent the model from being misled by questionable information. This directly improves answer accuracy. Second, the system becomes **auditable** - you can trace exactly why certain sources were prioritized or excluded, which is essential for compliance and debugging. Third, the system explicitly *prioritizes reliable sources*, encoding your organization's quality standards directly into retrieval logic. Finally, when users see that answers come from high-trust sources, it **increases their confidence** in the system's responses. They trust the answers more because they trust the sources.

#### The Governance Challenges
On the **cons** side, there are important considerations around subjectivity and maintenance. First, there's *potential bias* - your trust rubric reflects organizational biases about what sources are authoritative. This can inadvertently exclude valuable but unconventional sources of information. You need to be thoughtful about whether your scoring criteria truly reflect information quality or just organizational politics. Second, trust scoring **needs upkeep and reviewer workflows**. Someone has to verify documents, maintain the rubric, and handle edge cases. This creates ongoing work and requires clear processes. Third, *scoring criteria are inherently subjective* - what makes something a 0.8 versus a 0.9? Different team members might score the same content differently, leading to inconsistency unless you have clear, detailed guidelines.

#### The Strategic Imperative
Here's the powerful insight: **not all information sources deserve equal weight**. In the real world, a verified policy document is far more reliable than a casual email. Trust scoring encodes this reality into your system, ensuring models *prioritize verified, authoritative content* over informal or unverified sources. This fundamentally reduces hallucinations and improves response reliability. For any production RAG system serving real users, especially in regulated domains, trust scoring isn't optional - it's essential for maintaining quality and reducing risk.

Let's move to our final enrichment technique...`
        }
      ]
    },
    {
      id: 'parent-child',
      title: 'Parent–Child Structure',
      slides: [
        {
          id: 19,
          title: '9. Parent–Child Structural Metadata',
          icon: { name: 'duo-diagram-nested' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <GSAPAnimated animation="fadeIn" delay={0.2}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>
                        <GSAPAnimated animation="rotateIn" delay={0.3}>
                          <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Goal:
                      </strong>
                      <p style={{ marginTop: '5px' }}>Preserves document hierarchy; enables fetching sibling/ancestor context</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={0.5}>
                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}>
                        <GSAPAnimated animation="scaleIn" delay={0.6}>
                          <SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        How It Works:
                      </strong>
                      <p style={{ marginTop: '5px' }}>Assign stable IDs at doc/section/paragraph; store parent_id and ancestors path per chunk</p>
                    </GSAPAnimated>

                    <GSAPAnimated animation="slideInLeft" delay={0.8}>
                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}>
                        <GSAPAnimated animation="bounceIn" delay={0.9}>
                          <SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Implementation Steps:
                      </strong>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.15} >{[<ul>
                        <li>Build tree during parsing; generate unique ids; store id, parent_id, ancestors</li>
                        <li>Retrieval: fetch hit + k siblings/parent for full context window</li>
                        <li>Keep referential integrity on re-ingest via content hashing</li>
                      </ul>]}</GSAPStaggerList>
                  </div>

                  <GSAPAnimated animation="slideInRight" delay={0.4}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>When to Use:</strong>
                      <GSAPStaggerList stagger={0.12} >{[<ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>
                          <li>Manuals</li>
                          <li>Textbooks</li>
                          <li>Web docs with TOCs</li>
                          <li>Dense PDFs</li>
                        </ul>]}</GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <GSAPAnimated animation="fadeIn" delay={1.3}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85em' }}>
                      <strong style={{ color: '#81c784' }}>Example of Metadata Field:</strong>
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
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#4d1a3e',
          notes: `### Parent-Child Structural Metadata: Preserving Document Hierarchy

We've reached our ninth and final enrichment technique: **Parent-Child Structural Metadata**. This is perhaps the most sophisticated approach, as it preserves the entire hierarchical structure of your documents, enabling powerful context-aware retrieval.

#### The Context Problem
When you chunk documents for RAG, you're essentially flattening a hierarchical structure into independent pieces. A paragraph gets separated from its section, a section gets separated from its chapter. Without structural metadata, chunks become *orphans* - isolated fragments with no memory of where they came from or what surrounds them. **Parent-child metadata** solves this by preserving the document hierarchy, enabling your system to fetch sibling and ancestor context when needed.

#### How Hierarchical Metadata Works
The mechanism is elegant but requires careful implementation. During document parsing, you **assign stable IDs** at every level - document, chapter, section, subsection, paragraph. Each chunk stores its own ID, its parent's ID, and the complete *ancestors path* showing its lineage through the document hierarchy. For example, a chunk might know it's paragraph three of section five, which is in chapter two of document one. You also store an order field to maintain sequence within each level. This creates a complete tree structure that can be traversed in any direction.

#### Implementation Strategy
Here's how you build this. First, during the parsing phase, you **construct a tree representation** of your document, generating unique IDs at each level. Store three key fields: the chunk's own ID, its parent_id, and an ancestors array listing all parent nodes from root to parent. During retrieval, you don't just fetch the matching chunk - you fetch the *hit plus k siblings and parent content* to provide full context to your LLM. This dramatically improves answer quality by preventing context gaps. Finally, maintain *referential integrity* when re-ingesting documents by using content hashing to detect whether chunks have actually changed or just moved, preserving ID stability across updates.

#### Perfect Use Cases
This technique is essential for highly structured content. Think **technical manuals** with clear chapter and section hierarchies, **textbooks** where concepts build on previous sections, **web documentation** with detailed tables of contents, and **dense PDF reports** where understanding the full context of a finding requires seeing its position in the document structure. Any content where the *relationship between parts* is as important as the parts themselves benefits from parent-child metadata.

Let's evaluate the trade-offs of this sophisticated approach...`
        },
        {
          id: 20,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <GSAPAnimated animation="bounceIn" delay={0.3}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Pros
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.15} >{[<ul style={{ fontSize: '1.2rem' }}>
                    <li>Better coherence</li>
                    <li>Fewer orphan chunks</li>
                    <li>Improves contextual understanding</li>
                  </ul>]}</GSAPStaggerList>
                <GSAPAnimated animation="slideInRight" delay={0.9}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <GSAPAnimated animation="flipCard" delay={1.0}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Cons
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.15} >{[<ul style={{ fontSize: '1.2rem' }}>
                    <li>More complex pipeline</li>
                    <li>Migration/versioning concerns</li>
                    <li>Requires document structure</li>
                  </ul>]}</GSAPStaggerList>
              </div>
              <GSAPAnimated animation="fadeIn" delay={1.6}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#5f3152', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}>
                    <GSAPAnimated animation="scaleIn" delay={1.7}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    Key Insight:
                  </strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Maintaining hierarchical relationships between document chunks allows RAG systems to intelligently expand context beyond individual fragments, preserving the original document's logical structure.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#4d1a3e',
          notes: `### Pros and Cons of Parent-Child Structural Metadata

Let's examine the trade-offs of implementing hierarchical structural metadata. This is the most sophisticated enrichment technique, so understanding when the complexity is justified is crucial.

#### The Powerful Benefits
The **pros** address fundamental limitations of naive chunking. First, you get *better coherence* in your LLM responses. When the system can fetch surrounding context - the parent section introduction, sibling paragraphs, or related subsections - the LLM has the complete picture it needs to generate accurate, well-contextualized answers. Second, you get **fewer orphan chunks**. Every chunk knows its place in the document hierarchy, eliminating those confusing fragments that leave users wondering "where did this come from?" Third, the system gains *dramatic improvements in contextual understanding*. Questions like "what does the previous section say?" or "how does this relate to the chapter introduction?" become answerable because the hierarchical relationships are preserved and queryable.

#### The Implementation Complexity
On the **cons** side, the challenges are primarily around implementation sophistication. First, this requires a *more complex pipeline*. You need parsers that can accurately detect document structure, ID generation systems that remain stable across updates, and retrieval logic that can intelligently traverse the hierarchy. This is significantly more work than flat chunking. Second, there are **migration and versioning concerns**. When you update a document, you need to decide whether chunks are truly new or just moved, whether to preserve old IDs or generate new ones, and how to handle structural reorganizations. This requires careful thought about ID stability and referential integrity. Third, the technique *requires documents with clear structure* - it's perfect for technical manuals but less useful for unstructured text like emails or chat logs that lack hierarchical organization.

#### When Complexity Pays Off
Here's the key insight: **maintaining hierarchical relationships** allows your RAG system to intelligently expand context beyond individual fragments. Instead of forcing the LLM to reason from isolated chunks, you can provide the *complete logical structure* of the source material. For highly structured content like technical documentation, legal documents, or educational materials, this capability is transformative. The implementation complexity is absolutely justified when document structure is crucial to understanding content. For simpler, flatter content, start with easier enrichment techniques first.

Now let's synthesize what we've learned into best practices...`
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 21,
          title: 'Best Practices for Metadata-Driven RAG',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '15px' }}>
                  <GSAPAnimated animation="slideInBottom" delay={0.2}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#42a5f5', marginBottom: '10px' }}>
                        <GSAPAnimated animation="rotateIn" delay={0.3}>
                          <SvgIcon iconName="duo-pen-ruler" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Design & Governance
                      </h4>
                      <GSAPStaggerList stagger={0.1} >{[<ul style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>
                          <li>Define a typed schema; use <code>lower_snake_case</code> keys</li>
                          <li>Separate content fields vs. metadata fields; avoid overloading</li>
                          <li>Establish clear tagging guidelines for consistency</li>
                          <li>Implement version control for metadata schema evolution</li>
                        </ul>]}</GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="slideInBottom" delay={0.4}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7e57c2', marginBottom: '10px' }}>
                        <GSAPAnimated animation="bounceIn" delay={0.5}>
                          <SvgIcon iconName="duo-robot" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Automation & Quality
                      </h4>
                      <GSAPStaggerList stagger={0.1} >{[<ul style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>
                          <li>Automate enrichment (parsers, NER, classifiers, LLM summaries) with confidence scores</li>
                          <li>Implement human-in-the-loop for low-confidence tags</li>
                          <li>Establish QA processes with regular validation cycles</li>
                          <li>Audit and retrain quarterly to prevent drift</li>
                        </ul>]}</GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="slideInBottom" delay={0.6}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#26c6da', marginBottom: '10px' }}>
                        <GSAPAnimated animation="scaleIn" delay={0.7}>
                          <SvgIcon iconName="duo-magnifying-glass-chart" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Retrieval Strategy
                      </h4>
                      <GSAPStaggerList stagger={0.1} >{[<ul style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>
                          <li>Use hybrid search (BM25 + vectors) with metadata filters</li>
                          <li>Implement self-query retrievers for dynamic filtering</li>
                          <li>Rerank with <code>section_title</code>, <code>trust_score</code>, and recency</li>
                          <li>Use metadata to expand context when needed</li>
                        </ul>]}</GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2d1d61',
          notes: `### Best Practices for Metadata-Driven RAG: Part One

Now that we've explored all nine enrichment techniques, let's discuss best practices for implementing them successfully in production RAG systems. I've organized these into five key areas, and we'll cover the first three on this slide.

#### Design and Governance: Building a Solid Foundation
First, focus on **design and governance**. This is about setting up your metadata infrastructure correctly from the start. Define a *typed schema* - don't just throw arbitrary key-value pairs into your metadata; have a clear structure that everyone on your team understands. Use consistent naming conventions like lower_snake_case for field names. Critically, **separate content fields from metadata fields** - don't overload your metadata with actual document content, and vice versa. Keep them distinct so your retrieval logic stays clean. Establish *clear tagging guidelines* so different team members tag documents consistently. Finally, implement version control for your metadata schema - as your needs evolve, you need a way to migrate existing metadata to new schemas without breaking everything.

#### Automation and Quality: Scale with Confidence
Second, master **automation and quality control**. You cannot manually tag thousands of documents, so automate enrichment using parsers for structure extraction, NER models for entity tagging, classifiers for categories, and LLM calls for summaries. But here's the key: *attach confidence scores* to automated tags. Then implement **human-in-the-loop workflows** for low-confidence tags - when your automation is uncertain, route those cases to human reviewers. Establish *regular QA processes* with validation cycles to catch and correct errors. Finally, audit and retrain your automation quarterly to prevent drift as your content and domain evolve over time.

#### Retrieval Strategy: Leveraging Your Metadata
Third, optimize your **retrieval strategy** to actually use all this metadata. Implement *hybrid search* combining BM25 keyword matching with vector similarity, and layer metadata filters on top. Use **self-query retrievers** that can dynamically filter based on user queries - for example, automatically filtering to recent documents when users ask "what's the latest policy?" Rerank your results using metadata signals like section titles, trust scores, and recency to push the best results to the top. Finally, *use metadata to intelligently expand context* - when you retrieve a chunk, use parent-child relationships to fetch surrounding content when needed.

These first three practice areas set the foundation for success. Let's continue with operational concerns...`
        },
        {
          id: 22,
          title: 'Best Practices for Metadata-Driven RAG',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.2}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(255, 152, 0, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ff9800', marginBottom: '10px' }}>
                        <GSAPAnimated animation="scaleIn" delay={0.3}>
                          <SvgIcon iconName="duo-shield-halved" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Ops & Safety
                      </h4>
                      <GSAPStaggerList stagger={0.1} >{[<ul style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>
                          <li>Handle PII in entities with appropriate anonymization</li>
                          <li>Implement access control on sensitive metadata</li>
                          <li>Use versioning and change-data-capture to refresh metadata reliably</li>
                          <li>Log and monitor metadata usage patterns</li>
                          <li>Create fallback strategies when metadata is incomplete</li>
                        </ul>]}</GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="slideInRight" delay={0.4}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#81c784', marginBottom: '10px' }}>
                        <GSAPAnimated animation="bounceIn" delay={0.5}>
                          <SvgIcon iconName="duo-chart-line" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Measurement
                      </h4>
                      <GSAPStaggerList stagger={0.1} >{[<ul style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>
                          <li>Track precision@k, MRR, and coverage of tags</li>
                          <li>Measure filter hit rate and time-to-answer improvements</li>
                          <li>Analyze user feedback on response quality</li>
                          <li>Assess hallucination reduction with/without metadata</li>
                          <li>Create dashboards for metadata quality metrics</li>
                        </ul>]}</GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="fadeIn" delay={1.1}>
                  <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(255, 215, 0, 0.15)', borderRadius: '8px' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffd700', marginBottom: '10px' }}>
                      <GSAPAnimated animation="rotateIn" delay={1.2}>
                        <SvgIcon iconName="duo-star" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      </GSAPAnimated>
                      Key Success Factors
                    </h4>
                    <div style={{ display: 'flex', fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <GSAPStaggerList stagger={0.12} >{[<ul>
                          <li><strong>Consistency</strong> in metadata application across all documents</li>
                          <li><strong>Integration</strong> of metadata at all pipeline stages</li>
                          <li><strong>Automation</strong> to reduce manual tagging burden</li>
                          <li><strong>Governance</strong> to maintain metadata quality over time</li>
                          <li><strong>Measurement</strong> to quantify metadata's impact on retrieval</li>
                        </ul>]}</GSAPStaggerList>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#2d1d61',
          notes: `### Best Practices for Metadata-Driven RAG: Part Two

Let's continue with the final two practice areas: operations and safety, plus measurement and success factors.

#### Operations and Safety: Production-Ready Considerations
Fourth, address **operations and safety** concerns. When you extract entities with NER, you'll inevitably capture PII 👉 (Personally Identifiable Information) like names, emails, and phone numbers. Handle this with *appropriate anonymization* strategies - you might hash sensitive values, redact them entirely, or implement access controls. Speaking of which, **implement access control** on sensitive metadata - not all users should see all metadata fields, especially trust scores or internal categorizations. Use *versioning and change-data-capture* to reliably refresh metadata when source documents update - you need to know what changed and update only affected metadata. Log and monitor metadata usage patterns to understand which fields are actually being used and which are dead weight. Finally, *create fallback strategies* for incomplete metadata - your system should gracefully handle missing fields rather than failing.

#### Measurement: Proving Value and Finding Gaps
Fifth, invest heavily in **measurement**. You cannot improve what you don't measure. Track classic retrieval metrics like *precision at k*, **MRR** 👉 (Mean Reciprocal Rank), and tag coverage across your corpus. Measure *filter hit rates* - how often do metadata filters actually narrow results? Track time-to-answer improvements to see if metadata accelerates user workflows. Analyze **user feedback** systematically to understand which enrichments actually improve perceived quality. Most importantly, *assess hallucination reduction* by comparing system performance with and without metadata - this is your proof of value. Create dashboards that visualize metadata quality metrics so you can spot problems early and demonstrate ROI to stakeholders.

#### The Five Key Success Factors
Finally, let me highlight five **key success factors** that determine whether metadata enrichment actually works in production. First, *consistency* in how metadata is applied across all documents - inconsistency kills retrieval quality. Second, **integration** at all pipeline stages - metadata isn't an afterthought; it needs to be part of ingestion, storage, retrieval, and presentation. Third, *automation* to reduce the manual tagging burden - you cannot scale without automation. Fourth, **governance** to maintain quality over time through clear ownership, review processes, and evolution strategies. Fifth, *measurement* to quantify impact and justify continued investment in metadata infrastructure.

These practices separate successful metadata enrichment from failed attempts. Let's wrap up with our conclusion...`
        },
        {
          id: 23,
          title: 'Conclusion & Next Steps',
          icon: { name: 'duo-check-double' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '20px' }}>
                  <GSAPAnimated animation="slideInBottom" delay={0.2}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ color: '#42a5f5', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <GSAPAnimated animation="rotateIn" delay={0.3}>
                          <SvgIcon iconName="duo-sitemap" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Structure & Context
                      </h4>
                      <GSAPStaggerList stagger={0.12} >{[<ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                          <li>Section titles</li>
                          <li>Semantic summaries</li>
                          <li>Parent-child relationships</li>
                        </ul>]}</GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="slideInBottom" delay={0.4}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ color: '#7e57c2', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <GSAPAnimated animation="bounceIn" delay={0.5}>
                          <SvgIcon iconName="duo-folder-tree" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Classification & Taxonomy
                      </h4>
                      <GSAPStaggerList stagger={0.12} >{[<ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                          <li>Document types</li>
                          <li>Entity tagging (NER)</li>
                          <li>Topic/category tags</li>
                          <li>Keywords/key-phrases</li>
                        </ul>]}</GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="slideInBottom" delay={0.6}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ color: '#26c6da', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <GSAPAnimated animation="scaleIn" delay={0.7}>
                          <SvgIcon iconName="duo-shield-check" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        </GSAPAnimated>
                        Freshness & Trust
                      </h4>
                      <GSAPStaggerList stagger={0.15} >{[<ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                          <li>Time/version metadata</li>
                          <li>Source confidence scoring</li>
                        </ul>]}</GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="fadeIn" delay={1.1}>
                  <div style={{ padding: '15px', backgroundColor: 'rgba(129, 199, 132, 0.15)', borderRadius: '8px', marginBottom: '15px' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#81c784' }}>
                      <GSAPAnimated animation="rotateIn" delay={1.2}>
                        <SvgIcon iconName="duo-rocket" sizeName="2x" darkModeInvert={true} />
                      </GSAPAnimated>
                      Adopt in Phases
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', fontSize: '2rem', marginTop: '12px' }}>
                      <GSAPAnimated animation="slideInLeft" delay={1.3}>
                        <div style={{ padding: '10px', backgroundColor: 'rgba(66, 165, 245, 0.2)', borderRadius: '8px' }}>
                          <strong style={{ color: '#42a5f5', display: 'flex', alignItems: 'center' }}>Phase 1: +15-25%</strong>
                          <GSAPStaggerList stagger={0.1} >{[<ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>
                              <li>Section titles</li>
                              <li>Document type labels</li>
                              <li>Time/version metadata</li>
                            </ul>]}</GSAPStaggerList>
                        </div>
                      </GSAPAnimated>
                      <GSAPAnimated animation="slideInBottom" delay={1.4}>
                        <div style={{ padding: '10px', backgroundColor: 'rgba(126, 87, 194, 0.2)', borderRadius: '8px' }}>
                          <strong style={{ color: '#7e57c2', display: 'flex', alignItems: 'center' }}>Phase 2: +30-45%</strong>
                          <GSAPStaggerList stagger={0.1} >{[<ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>
                              <li>Entity tagging (NER)</li>
                              <li>Topic/category tags</li>
                              <li>Keywords/key-phrases</li>
                            </ul>]}</GSAPStaggerList>
                        </div>
                      </GSAPAnimated>
                      <GSAPAnimated animation="slideInRight" delay={1.5}>
                        <div style={{ padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.2)', borderRadius: '8px' }}>
                          <strong style={{ color: '#26c6da', display: 'flex', alignItems: 'center' }}>Phase 3: +50-70%</strong>
                          <GSAPStaggerList stagger={0.1} >{[<ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>
                              <li>Semantic summaries</li>
                              <li>Source confidence scoring</li>
                              <li>Parent-child structure</li>
                            </ul>]}</GSAPStaggerList>
                        </div>
                      </GSAPAnimated>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#2d1d61',
          notes: `### Conclusion and Next Steps: Your Metadata Journey

We've covered a lot of ground today. Let me help you synthesize everything we've learned and give you a concrete roadmap for implementation.

#### Recap: The Nine Techniques Organized by Purpose
Let's quickly recap our nine enrichment techniques organized by their strategic purpose. In **Structure and Context**, we have section titles for preserving document organization, semantic summaries for distilled meaning, and parent-child relationships for maintaining hierarchy. In the **Classification and Taxonomy** category, we have document type labels for high-level categorization, entity tagging using NER to extract people and places, topic and category tags for domain-specific organization, and keyword extraction for lexical signals. Finally, in **Freshness and Trust**, we have time and version metadata for temporal awareness and source confidence scoring to prioritize reliable information. Each technique serves a distinct purpose, and together they form a comprehensive enrichment toolkit.

#### The Phased Adoption Strategy
Here's my recommended approach: **adopt in phases** rather than trying to implement everything at once. Start with Phase One - the quick wins that require minimal infrastructure. Implement *section titles*, **document type labels**, and *time/version metadata*. These are relatively simple to extract and immediately valuable. You can expect fifteen to twenty-five percent improvement in retrieval quality. Then move to Phase Two, adding **entity tagging with NER**, *topic and category tags*, and **keyword extraction**. This phase requires more sophistication - NER models, taxonomy design, and keyword algorithms - but delivers thirty to forty-five percent cumulative improvement. Finally, implement Phase Three with the most advanced techniques: *semantic summaries* using LLMs, **source confidence scoring** with governance workflows, and *parent-child structure* for hierarchical documents. This final phase can push you to fifty to seventy percent overall improvement in retrieval quality compared to naive chunking.

#### Why Phased Implementation Works
This phased approach works because each phase builds on the previous one. You learn operational patterns, establish governance processes, and prove ROI before increasing complexity. You also get value quickly - Phase One takes weeks, not months, to implement. Most importantly, you can *measure impact at each phase* and adjust your priorities based on what actually moves the needle for your specific use case. Not every technique benefits every corpus equally, so measurement guides your investment decisions.

Now, let's end with the key takeaway you should remember...`
        },
        {
          id: 24,
          title: 'Key Takeaway',
          icon: { name: 'duo-star' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <GSAPAnimated animation="fadeIn" delay={0.2}>
                  <div style={{ padding: '15px', backgroundColor: 'rgba(255, 215, 0, 0.15)', borderRadius: '8px' }}>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '12px' }}>
                      Metadata enrichment is not a one-time task but an ongoing process that continuously improves retrieval quality. Start small, measure impact, and expand progressively to build a robust, contextually-aware RAG system.
                    </p>
                    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', display: 'flex', alignItems: 'center' }}>
                      <GSAPAnimated animation="scaleIn" delay={0.5}>
                        <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />
                      </GSAPAnimated>
                      Most importantly, these techniques reduce hallucinations by providing better context and grounding for LLMs.
                    </p>
                  </div>
                </GSAPAnimated>

                <GSAPAnimated animation="slideInBottom" delay={0.7}>
                  <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#42a5f5', marginBottom: '8px' }}>
                      <GSAPAnimated animation="bounceIn" delay={0.8}>
                        <SvgIcon iconName="duo-list-check" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      </GSAPAnimated>
                      Call to Action
                    </h4>
                    <GSAPStaggerList stagger={0.15} >{[<ul style={{ fontSize: '1.2rem', lineHeight: '1.7' }}>
                        <li>Define your metadata schema and baselines this week</li>
                        <li>Enable metadata filters and reranking in your retriever</li>
                        <li>Measure impact; iterate on low-signal fields</li>
                        <li>Prioritize techniques that match your data types</li>
                      </ul>]}</GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#2d1d61',
          notes: `### Key Takeaway: Metadata as an Ongoing Journey

We've reached the end of our journey through metadata enrichment techniques. Let me leave you with the most important insights that will guide your implementation.

#### The Core Insight: It's a Process, Not a Project
Here's the fundamental truth you need to internalize: **metadata enrichment is not a one-time task**. It's not something you implement once and forget about. It's an *ongoing process* that continuously improves retrieval quality over time. Your content evolves, your users' needs change, and your enrichment pipeline must adapt accordingly. Think of it as tending a garden rather than building a monument - it requires regular attention, pruning, and cultivation to flourish.

#### The Implementation Philosophy: Progressive Enhancement
The winning strategy is to **start small, measure impact, and expand progressively**. Don't try to implement all nine techniques simultaneously - that path leads to analysis paralysis and incomplete implementations. Instead, begin with Phase One techniques that are simple to implement and immediately valuable. Get those working well, measure their impact on retrieval quality, and prove the ROI. Then expand to more sophisticated techniques based on what your measurements reveal. This progressive approach builds both technical capability and organizational confidence in metadata enrichment.

#### The Ultimate Benefit: Reducing Hallucinations
Most importantly, remember why we're doing all this: **these techniques reduce hallucinations** by providing better context and grounding for LLMs. When your retrieval system provides rich, accurate metadata alongside content chunks, the LLM has the context it needs to generate accurate, trustworthy responses. Section titles clarify scope. Trust scores filter unreliable sources. Time metadata ensures currency. Entity tags surface relevant people and organizations. Together, these enrichments transform your RAG system from a simple document search into an intelligent, context-aware retrieval engine that dramatically reduces the risk of hallucinated responses.

#### Your Immediate Next Steps
Here's what to do this week: First, **define your metadata schema and establish baselines**. Document your current retrieval quality so you can measure improvement. Second, *enable metadata filters and reranking* in your retriever - make sure your infrastructure can actually use the metadata you're about to create. Third, **measure impact religiously** - track precision, recall, and user satisfaction, and iterate on low-signal fields that aren't providing value. Finally, *prioritize techniques that match your data types* - technical documentation benefits from different enrichments than customer support transcripts.

Thank you for your attention, and good luck building robust, contextually-aware RAG systems that your users will trust!`
        }
      ]
    }
  ]
};
