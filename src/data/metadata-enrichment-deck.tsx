import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

export const metadataEnrichmentDeck: Deck = {
  id: 'metadata-enrichment-deck',
  name: '9 Metadata Enrichment Tricks',
  description: 'Cheat-sheets, patterns, and practical implementations',
  category: 'RAG',
  theme: 'moon',
  cardClassName: 'glass-morphism',
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
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
              <GSAPAnimated animation="rotateIn" delay={0.2}>
                <h2>Cheat-sheets, patterns, and practical implementations</h2>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.5}>
                <div style={{ marginTop: '20px', fontSize: '0.9em', lineHeight: '1.8' }}>
                  <div>What you'll get:</div>
                  <GSAPStaggerList>
                    <p>9 field-proven enrichment techniques</p>
                    <p>Implementation steps and metadata examples</p>
                    <p>Best practices to scale enrichment and retrieval</p>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.2}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#14283d',
          notes: `### 1. 9 Metadata Enrichment Tricks
Welcome to this comprehensive guide on metadata enrichment for RAG 👉 'rag' systems! Today, we're going to explore nine practical techniques that can dramatically improve your retrieval quality.
#### Why Metadata Matters
When building RAG systems, most developers focus on embeddings and vector search. But here's the thing: metadata is the secret sauce that separates good retrieval from great retrieval. Think of it like a library. You wouldn't just throw all the books in a pile and search by content alone, right? You need call numbers, genres, authors, publication dates—that's metadata. It provides the structure and context that makes information findable and relevant.
#### What You'll Learn Today
We're covering nine field-proven enrichment techniques that I've seen work in production systems. Each one has specific use cases, implementation steps, and real metadata examples you can adapt. We'll organize these into three categories: Structure and Context techniques that preserve document hierarchy, Classification and Taxonomy approaches for organizing information, and Freshness and Trust methods to ensure quality and recency.
#### The Impact
Teams implementing these techniques typically see fifteen to seventy percent improvements in retrieval precision, depending on which combination they use. More importantly, they see dramatic reductions in hallucinations because the LLM has better context and grounding. Let's dive in and see how you can apply these techniques to your own systems.`
        },
        {
          id: 2,
          title: 'Overview: The 9 Enrichment Tricks (by Category)',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', fontSize: '0.75em', color: '#fff' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#42a5f5', marginBottom: '15px' }}>
                      <SvgIcon iconName="duo-sitemap" sizeName="2x" darkModeInvert={true} />
                      Structure & Context
                      <MermaidPopover
                        diagram={`graph LR
    A[Document] --> B[Parse Headers]
    B --> C[Map Chunks]
    C --> D[Enriched Context]`}
                        title="Structure & Context Flow"
                      />
                    </h3>
                    <GSAPStaggerList>
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
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>

                <GSAPAnimated animation="scaleIn" delay={0.5}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#7e57c2', marginBottom: '15px' }}>
                      <SvgIcon iconName="duo-folder-tree" sizeName="2x" darkModeInvert={true} />
                      Classification & Taxonomy
                      <MermaidPopover
                        diagram={`graph TB
    A[Content] --> B[Classify Type]
    A --> C[Extract Entities]
    A --> D[Tag Topics]
    A --> E[Highlight Keywords]`}
                        title="Classification & Taxonomy"
                      />
                    </h3>
                    <GSAPStaggerList>
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
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>

                <GSAPAnimated animation="slideInRight" delay={0.7}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#26c6da', marginBottom: '15px' }}>
                      <SvgIcon iconName="duo-shield-check" sizeName="2x" darkModeInvert={true} />
                      Freshness & Trust
                      <MermaidPopover
                        diagram={`graph LR
    A[Source] --> B[Check Time]
    B --> C[Verify Trust]
    C --> D[Score & Rank]`}
                        title="Freshness & Trust"
                      />
                    </h3>
                    <GSAPStaggerList>
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
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#14283d',
          notes: `### 2. Overview: The 9 Enrichment Tricks
Let's look at how we've organized these nine enrichment techniques. We've grouped them into three major categories that represent different aspects of metadata enrichment.
#### Structure and Context
The first category is Structure and Context. These techniques—section-level titles, semantic summaries, and parent-child structures—all focus on preserving the original document's organizational logic. Think about it: when you read a technical manual, you naturally understand that content under "Installation" is different from content under "Troubleshooting" even if similar words appear. These techniques capture that hierarchical understanding and make it available to your retrieval system.
\`\`\`mermaid
graph LR
    A[Document] --> B[Parse Headers]
    B --> C[Map to Chunks]
    C --> D[Enriched Context]
    style A fill:#4fc3f7
    style D fill:#81c784
\`\`\`
#### Classification and Taxonomy
The second category is Classification and Taxonomy. This includes document type labels, entity tagging 👉 'NER', topic tags, and keyword highlights. These are the techniques that answer "what kind of thing is this?" They help organize your knowledge base like a librarian would organize books—by type, subject, and key concepts.
#### Freshness and Trust
Finally, we have Freshness and Trust techniques. Time-version metadata and source confidence scoring help answer "can I trust this?" and "is this still current?" In production systems, stale or untrustworthy information causes significant problems. These techniques help you prioritize reliable, up-to-date content.
Now let's dive into each technique one by one, starting with section-level titles.`
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
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.3}>
                    <div>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>
                        <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        Goal:
                        <MermaidPopover
                          diagram={`graph LR
    A[Document] --> B[Parse Headers]
    B --> C[Map Chunks]
    C --> D[Enriched Chunks]
    style A fill:#4fc3f7
    style D fill:#81c784`}
                          title="Section Title Enrichment"
                        />
                      </strong>
                      <p style={{ marginTop: '5px' }}>Boosts retrieval precision and reduces hallucinations by preserving section intent</p>

                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                      <p style={{ marginTop: '5px' }}>Parse headers (H1–H3) and nearest title per chunk; store section_title, heading_level, section_path</p>

                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Steps:</strong>
                      <GSAPStaggerList>
                        <li>Extract headings with HTML/PDF parser; map each chunk to nearest header</li>
                        <li>Store fields: section_title, heading_level, section_path</li>
                        <li>During retrieval, filter/boost on section_title or path</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="scaleIn" delay={0.5}>
                    <div style={{ padding: '12px', backgroundColor: '#315f43', borderRadius: '8px' }}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>When to Use:</strong>
                      <GSAPStaggerList>
                        <li style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>Technical docs</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Policies</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Knowledge bases</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>SOPs with clear headings</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="slideInBottom" delay={0.7}>
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
          notes: `### 3. Section-Level Titles as Metadata
Our first enrichment technique is section-level titles. When you chunk documents for RAG 👉 'rag', you lose context about where that chunk came from in the original document hierarchy. Section titles bring that context back.
#### The Problem It Solves
Imagine a user manual with sections like "Installation," "Configuration," and "Troubleshooting." If you just chunk the raw text, a chunk about "checking the power cable" could come from any section. But knowing it's from "Troubleshooting" versus "Installation" completely changes its relevance to a user's query. Section titles preserve that hierarchical intent.
\`\`\`mermaid
graph TB
    A[Original Document] --> B[H1: User Manual]
    B --> C[H2: Installation]
    B --> D[H2: Configuration]
    B --> E[H2: Troubleshooting]
    C --> F[Chunk 1: Power Cable]
    E --> G[Chunk 2: Power Cable]
    style F fill:#4fc3f7
    style G fill:#81c784
\`\`\`
#### Implementation Approach
The implementation is straightforward. Use an HTML or PDF parser to extract headings at different levels—typically H1 through H3. Then map each text chunk to its nearest parent heading. Store three key fields: the section title itself, the heading level to understand hierarchy depth, and optionally a full section path showing the breadcrumb trail.
#### Real-World Impact
This technique works best on structured documents with clear headings like technical documentation, policy documents, knowledge bases, and standard operating procedures. Teams typically see fifteen to thirty percent improvements in retrieval precision because the system can now match both the content and the structural context of a user's query.`
        },
        {
          id: 4,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.2}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Strong intent signal</li>
                    <li style={{ fontSize: '1.2rem' }}>Better reranking</li>
                    <li style={{ fontSize: '1.2rem' }}>Improved explainability</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Weak on poorly structured docs</li>
                    <li style={{ fontSize: '1.2rem' }}>Requires robust parsing</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.9}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#315f43', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Section titles provide essential contextual intent that helps models understand what information chunks contain, reducing hallucinations and improving response relevance.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a4d2e',
          notes: `### 4. Section Titles: Pros and Cons
Let's talk about the tradeoffs with section-level title enrichment.
#### The Advantages
The pros are substantial. First, section titles provide a strong intent signal. When a user asks about "installation steps," you can boost chunks that come from an "Installation" section. Second, they enable better reranking. You can use section context as a feature in your reranking model, giving priority to chunks from relevant document sections. Third, they dramatically improve explainability. When you show users where an answer came from, including "from the Troubleshooting section" builds trust and helps them understand the context.
#### The Challenges
The cons are real but manageable. This technique is weak on poorly structured documents. If your corpus includes free-form notes, chat logs, or documents without clear headings, section titles won't help much. Also, it requires robust parsing infrastructure. You need reliable HTML or PDF parsers that can handle various document formats, and that parsing needs to be maintained as document formats evolve.
#### Bottom Line
Despite the challenges, section-level titles are one of the highest-impact, lowest-complexity enrichment techniques available. If your documents have any kind of hierarchical structure, this should be your first implementation priority. The engineering effort is modest, and the retrieval quality improvements are immediate and measurable. Let's move on to our second technique: document type labels.`
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
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <GSAPAnimated animation="slideInRight" delay={0.3}>
                    <div>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>
                        <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        Goal:
                        <MermaidPopover
                          diagram={`graph TB
    A[Content] --> B{Classify Type}
    B --> C[FAQ]
    B --> D[Policy]
    B --> E[SOP]
    B --> F[Email]
    style B fill:#81c784`}
                          title="Document Classification"
                        />
                      </strong>
                      <p style={{ marginTop: '5px' }}>Improves precision by matching user intent to doc role (FAQ, Policy, Email, SOP)</p>

                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                      <p style={{ marginTop: '5px' }}>Classify each document/chunk into doc_type via rules + ML (file path, layout, keywords)</p>

                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Steps:</strong>
                      <GSAPStaggerList>
                        <li>Define controlled vocabulary (faq, policy, sop, email, memo, meeting_notes)</li>
                        <li>Build heuristic features and train lightweight classifier; backfill historical docs</li>
                        <li>Store doc_type and optionally department/audience; filter or boost at retrieval</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="rotateIn" delay={0.5}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <strong>When to Use:</strong>
                      <GSAPStaggerList>
                        <li style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>Mixed corpora (FAQs, tickets, emails, specs)</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Knowledge bases with varied document types</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Content where document role matters for answers</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Support/customer service contexts</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="slideInTop" delay={0.7}>
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
          notes: `### 5. Document Type Labels
Our second enrichment technique is document type labels. In most knowledge bases, you have a mix of content types serving different purposes: FAQs answer common questions, policies set rules, SOPs 👉 'S-O-Ps' provide procedures, emails capture conversations.
#### Why Document Types Matter
Here's the insight: when a user asks "what's our refund policy," they want a policy document, not an email thread discussing the policy. Document type acts as a powerful intent filter. It helps your retrieval system understand not just what content matches, but what kind of document the user expects to see.
\`\`\`mermaid
graph TB
    A[User Query] --> B{Intent Analysis}
    B -->|"How do I..."| C[SOP/Guide]
    B -->|"What is policy..."| D[Policy Doc]
    B -->|"Quick answer"| E[FAQ]
    B -->|"Discussion"| F[Email/Ticket]
    style A fill:#4fc3f7
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#81c784
    style F fill:#81c784
\`\`\`
#### Implementation Strategy
Start by defining a controlled vocabulary of document types relevant to your domain. Common ones include FAQ, policy, SOP, email, memo, meeting notes, technical spec, and support ticket. Then build a lightweight classifier using both rule-based heuristics and machine learning. Heuristics might look at file paths, document structure, or keyword patterns. For machine learning, even a simple logistic regression on TF-IDF 👉 'tee-eff eye-dee-eff' features works surprisingly well.
#### Practical Use
At retrieval time, you can hard-filter by document type or use it as a boosting signal. For example, if someone asks about procedures, boost SOPs by two-x. This technique is especially valuable in support and customer service contexts where mixing up document types leads to poor user experiences. The initial labeling effort pays off quickly through improved retrieval precision.`
        },
        {
          id: 6,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="flipCard" delay={0.2}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Fast filter for retrieval</li>
                    <li style={{ fontSize: '1.2rem' }}>Reduces irrelevant context</li>
                    <li style={{ fontSize: '1.2rem' }}>Good for governance</li>
                    <li style={{ fontSize: '1.2rem' }}>Improves user satisfaction</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="flipCard" delay={0.6}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Initial labeling effort</li>
                    <li style={{ fontSize: '1.2rem' }}>Classifier drift needs audits</li>
                    <li style={{ fontSize: '1.2rem' }}>Requires governance of labels</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={1.0}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#31365f', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Document type labels provide contextual relevance for different user intents, ensuring that responses match the appropriate document format and purpose.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1f4d',
          notes: `### 6. Document Type Labels: Pros and Cons
Let's evaluate the tradeoffs with document type classification.
#### The Benefits
The pros are compelling. First, document type acts as a fast filter during retrieval. You can eliminate entire categories of documents before semantic search even runs, dramatically reducing computational costs. Second, it reduces irrelevant context. Your LLM won't waste tokens processing emails when the user wants a policy document. Third, it's excellent for governance and compliance. You can enforce rules like "only show policy documents to external users" or "prioritize official SOPs over informal notes." Fourth, user satisfaction improves because responses match expected document formats.
#### The Challenges
The cons require planning. Initial labeling effort can be significant if you have thousands of legacy documents. You'll need either manual labeling or a bootstrap approach where you label a subset and use that to train a classifier. Classifier drift is real—as new document types emerge or writing styles change, your classifier's accuracy degrades. This requires periodic audits and retraining. Finally, you need governance around your label taxonomy. Someone needs to define what counts as a "policy" versus a "guideline" and ensure consistency.
#### Strategic Value
Despite these challenges, document type labels are a high-leverage technique. The investment in building and maintaining a classifier pays dividends in retrieval quality, user experience, and system performance. For any production RAG system with mixed content types, this should be in your enrichment toolkit. Next, let's look at entity tagging with named entity recognition.`
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
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ fontSize: '0.7em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <GSAPAnimated animation="slideInBottom" delay={0.3}>
                    <div>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>
                        <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        Goal:
                        <MermaidPopover
                          diagram={`graph LR
    A[Text] --> B[NER Extract]
    B --> C[Normalize]
    C --> D[Canonical IDs]
    style B fill:#81c784`}
                          title="Entity Extraction Flow"
                        />
                      </strong>
                      <p style={{ marginTop: '5px' }}>Precision via entity filters; disambiguation; cross-linking across sources</p>

                      <strong style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                      <p style={{ marginTop: '5px' }}>Run NER; normalize entities to canonical IDs; store arrays by type</p>

                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Steps:</strong>
                      <GSAPStaggerList>
                        <li>Choose NER (spaCy, HF, AWS Comprehend, Azure, etc.) and target labels</li>
                        <li>Normalize (e.g., map "MSFT"→"Microsoft", attach IDs)</li>
                        <li>Store entities by type; enable faceted filtering and boosting</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="bounceIn" delay={0.5}>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <strong>When to Use:</strong>
                      <GSAPStaggerList>
                        <li style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>Product, customer, project, or regulation-heavy content</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Support teams</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Legal documentation</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="scaleIn" delay={0.7}>
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
          notes: `### 7. Entity Tagging with NER
Our third enrichment technique is entity tagging using Named Entity Recognition, or NER 👉 'en-ee-ar'. This is about extracting and normalizing key entities from your content like people, organizations, products, locations, and custom domain entities.
#### The Power of Entities
Think about a support knowledge base. When someone asks "how do I configure WidgetX for Acme Corp," you want to retrieve documents that mention those specific entities, not just documents with similar words. Entities provide precise, disambiguated references that dramatically improve retrieval accuracy.
\`\`\`mermaid
graph TB
    A[Text: "MSFT released..."] --> B[NER Extract]
    B --> C["Org: MSFT"]
    C --> D[Normalize]
    D --> E["Canonical: Microsoft"]
    E --> F[Link to Entity ID]
    style B fill:#81c784
    style E fill:#4fc3f7
\`\`\`
#### Implementation Steps
Start by choosing your NER tool. Options include spaCy for open-source, Hugging Face models for customization, or cloud services like AWS Comprehend or Azure Text Analytics for managed solutions. Define which entity types matter for your domain: the standard person, organization, location, and date, plus any custom entities like product names, ticket IDs, or regulation numbers. Then run NER on your content. Crucially, add a normalization step. Map variations like "MSFT," "Microsoft," and "Microsoft Corporation" to a single canonical form with a stable entity ID. This lets you link mentions across documents.
#### Strategic Use Cases
Entity tagging shines in domains with heavy entity references: product support, customer service, legal documentation, and regulatory compliance. The ability to filter by specific entities or track entity co-occurrences provides powerful retrieval and analytics capabilities. Just be mindful of personally identifiable information and implement appropriate PII 👉 'P-I-I' handling controls.`
        },
        {
          id: 8,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="rotateIn" delay={0.2}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Powerful filters</li>
                    <li style={{ fontSize: '1.2rem' }}>Better grounding</li>
                    <li style={{ fontSize: '1.2rem' }}>Enables per-entity analytics</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="rotateIn" delay={0.6}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Compute cost</li>
                    <li style={{ fontSize: '1.2rem' }}>PII handling</li>
                    <li style={{ fontSize: '1.2rem' }}>Normalization complexity</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#5f3156', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Entity recognition provides structured disambiguation of key references in text, allowing for precise filtering and more accurate responses when domain-specific entities are critical to understanding.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#4d1a43',
          notes: `### 8. Entity Tagging: Pros and Cons
Let's evaluate entity tagging as an enrichment strategy.
#### The Advantages
The pros are powerful. First, entities provide precise filtering capabilities. You can instantly narrow retrieval to documents mentioning specific products, customers, or projects without relying on fuzzy semantic search. This is especially valuable in enterprise search where users often know exactly which entity they're asking about. Second, entity grounding dramatically reduces hallucinations. When the LLM knows that "WidgetX" is a specific product entity, not just a word, it's less likely to confuse it with "WidgetY" or make up features. Third, entities enable rich analytics. You can track which entities are mentioned together, which products generate the most support questions, or which regulations are most frequently referenced.
#### The Challenges
The cons require investment. Compute cost can be significant, especially if you're running NER on every chunk in a large corpus. You'll need to decide whether to use cheaper but less accurate models or expensive but precise ones. PII handling becomes critical—your NER will extract person names, and you need policies for how to store, display, and control access to that sensitive data. Normalization complexity grows with corpus size. Maintaining canonical entity mappings across millions of documents and hundreds of entity variations requires dedicated infrastructure.
#### When It's Worth It
Despite these costs, entity tagging is transformative for entity-centric domains. If your users frequently filter by specific entities, or if entity disambiguation is critical to answer quality, the investment pays off. Start with a subset of high-value entity types, validate the impact, then expand. Now let's look at topic and category tagging.`
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
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <GSAPAnimated animation="slideInTop" delay={0.3}>
                    <div>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>
                        <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        Goal:
                        <MermaidPopover
                          diagram={`graph TB
    A[Content] --> B[Classify Topics]
    B --> C[Payments>Refunds]
    B --> D[Risk>KYC]
    B --> E[Support>Billing]
    style B fill:#ffd700`}
                          title="Topic Classification"
                        />
                      </strong>
                      <p style={{ marginTop: '5px' }}>Improves both recall and precision with consistent domain labels</p>

                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                      <p style={{ marginTop: '5px' }}>Map chunks to a controlled taxonomy using multi-label classifiers or LLM tagging</p>

                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Steps:</strong>
                      <GSAPStaggerList>
                        <li>Define taxonomy (e.g., Payments&gt;Refunds, Risk&gt;KYC)</li>
                        <li>Train/evaluate multi-label classifier or LLM prompt; set confidence thresholds</li>
                        <li>Store topics and topic_ids; use for filters and UI facets</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="flipCard" delay={0.5}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>When to Use:</strong>
                      <GSAPStaggerList>
                        <li style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>Large heterogeneous corpora</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Compliance domains</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Customer-facing help centers</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Knowledge bases with diverse topics</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="bounceIn" delay={0.7}>
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
          notes: `### 9. Topic and Category Tags
Our fourth enrichment technique is topic and category tags through taxonomy mapping. This is about organizing your content into a consistent, hierarchical classification system.
#### The Value of Taxonomies
Think of a taxonomy like a library's Dewey Decimal System 👉 'dewey decimal'. It provides a stable, consistent way to organize heterogeneous content. Unlike free-form tags that can proliferate inconsistently, a controlled taxonomy ensures that "payment refunds," "refund processing," and "refund policies" all map to the same canonical category: "Payments greater-than Refunds."
\`\`\`mermaid
graph TB
    A[Document] --> B{Multi-label Classifier}
    B --> C[Payments>Refunds]
    B --> D[Compliance>KYC]
    B --> E[Support>Billing]
    C --> F[Store topic_ids]
    D --> F
    E --> F
    style B fill:#ffd700
    style F fill:#81c784
\`\`\`
#### Implementation Approach
Start by defining your taxonomy structure. Make it hierarchical with two to three levels deep. Examples might be "Payments greater-than Refunds," "Risk greater-than KYC," or "Technical Support greater-than Installation greater-than Windows." Then choose your classification approach. You can train a multi-label classifier on your own data, use zero-shot classification models, or even use LLM prompting with your taxonomy as context. Set confidence thresholds to control precision versus recall tradeoffs. Store both human-readable topic paths and numeric topic IDs for efficient filtering.
#### Strategic Benefits
Topics enable powerful user interface features. Users can filter search results by category, browse by topic, or see related documents in the same category. For analytics, you can track which topics generate the most queries or which need better documentation coverage. This technique is particularly valuable in large, heterogeneous corpora where users need navigation structure, not just search.`
        },
        {
          id: 10,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.2}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Stable navigation and filters</li>
                    <li style={{ fontSize: '1.2rem' }}>Good for reporting and analytics</li>
                    <li style={{ fontSize: '1.2rem' }}>Enhances user interface organization</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.6}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Taxonomy governance needed</li>
                    <li style={{ fontSize: '1.2rem' }}>Re-tag on taxonomy changes</li>
                    <li style={{ fontSize: '1.2rem' }}>Initial setup complexity</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={1.0}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#5f5731', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>A well-maintained taxonomy provides consistent categorization across documents, enabling powerful filtering capabilities and improving both search precision and recall across heterogeneous document collections.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#4d441a',
          notes: `### 10. Topic Tags: Pros and Cons
Let's evaluate topic and category tags as an enrichment technique.
#### The Strengths
The pros are substantial for user experience and system architecture. First, taxonomies provide stable navigation and filtering. Unlike embeddings that might cluster content differently over time, taxonomies give you consistent categories that users can learn and rely on. Second, they're excellent for reporting and analytics. You can easily answer questions like "what percentage of our support tickets are about billing?" or "which product categories generate the most documentation requests?" Third, they dramatically enhance user interface organization. Faceted search with topic filters is a proven UX pattern that users understand intuitively.
#### The Challenges
The cons center on maintenance and governance. Taxonomy governance becomes critical as your corpus grows. You need clear ownership of the taxonomy, a process for proposing new categories, and discipline to prevent proliferation of overlapping or redundant categories. Re-tagging on taxonomy changes can be expensive. If you split "Billing" into "Billing greater-than Invoices" and "Billing greater-than Payment Methods," you need to reclassify all previously tagged content. Initial setup complexity is significant—defining a good taxonomy requires deep domain knowledge and stakeholder alignment.
#### Long-Term Value
Despite these challenges, taxonomies are foundational for mature knowledge management systems. They provide the organizational backbone that makes large corpora navigable and understandable. Invest in getting your taxonomy right early, establish governance processes, and you'll reap benefits for years. Now let's move to our fifth technique: time and version metadata.`
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
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ fontSize: '0.7em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <GSAPAnimated animation="slideInRight" delay={0.3}>
                    <div>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>
                        <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        Goal:
                        <MermaidPopover
                          diagram={`graph LR
    A[v1.0] --> B[v2.0]
    B --> C[v3.2]
    C --> D[Latest ✓]
    style D fill:#81c784`}
                          title="Version Timeline"
                        />
                      </strong>
                      <p style={{ marginTop: '5px' }}>Freshness control; retrieves latest/final data; reduces outdated answers</p>

                      <strong style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                      <p style={{ marginTop: '5px' }}>Extract timestamps (created, updated, effective) and version fields; maintain validity windows</p>

                      <strong style={{ marginTop: '12px', display: 'block' }}><SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Steps:</strong>
                      <GSAPStaggerList>
                        <li>Parse timestamp/version from content and file system</li>
                        <li>Store effective_date, valid_from/valid_to, version, is_latest</li>
                        <li>Retrieval: filter by date range; sort/boost is_latest and newest version</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="scaleIn" delay={0.5}>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>When to Use:</strong>
                      <GSAPStaggerList>
                        <li style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>Policies</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Release notes</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Price lists</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>SLAs</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Changelogs</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="flipCard" delay={0.7}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '15px' }}>
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
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#4d1a1a',
          notes: `### 11. Time and Version Metadata
Our fifth enrichment technique is time and version metadata. This is about making your RAG system temporally aware so it can distinguish between current and outdated information.
#### The Freshness Problem
Imagine a user asking "what's our refund policy?" If your system retrieves a policy from 2020 that's been superseded twice, you're setting them up for failure. Time and version metadata ensures users get the current, valid information. This is critical for policies, SLAs 👉 'S-L-As', price lists, product documentation, and any content that evolves over time.
\`\`\`mermaid
graph TB
    A[Policy v1.0<br/>2023-01-01] --> B[Policy v2.0<br/>2024-01-01]
    B --> C[Policy v3.2<br/>2025-07-01]
    C --> D[is_latest: true<br/>valid_to: null]
    A -.superseded.-> E[Archived]
    B -.superseded.-> E
    style C fill:#81c784
    style D fill:#4fc3f7
\`\`\`
#### Implementation Details
Extract timestamps from multiple sources: file system metadata for created and modified dates, document content for effective dates and version numbers, and version control systems for authoritative history. Store several fields: effective date for when the content becomes active, valid from and valid to dates defining the validity window, version identifier, and an is latest boolean flag. During retrieval, filter out documents outside the relevant time window, boost recent content, and prioritize the latest version flag.
#### Business Impact
This technique is essential for compliance-heavy industries. Financial services, healthcare, and legal sectors must ensure users access current policies and regulations. The implementation cost is modest—mostly data parsing and schema changes—but the risk reduction is substantial. Nothing erodes user trust faster than outdated information presented as current.`
        },
        {
          id: 12,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Time-aware answers</li>
                    <li style={{ fontSize: '1.2rem' }}>Easy recency enforcement</li>
                    <li style={{ fontSize: '1.2rem' }}>Clear versioning support</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Requires consistent source dates</li>
                    <li style={{ fontSize: '1.2rem' }}>Backfill can be tedious</li>
                    <li style={{ fontSize: '1.2rem' }}>Date format standardization needed</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="rotateIn" delay={1.0}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#5f3131', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Adding temporal awareness to your RAG system ensures users get the most current information and reduces confusion caused by outdated or superseded content.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#4d1a1a',
          notes: `### 12. Time/Version Metadata: Pros and Cons
Let's consider the tradeoffs of time and version metadata.
#### The Advantages
The pros are compelling for content that changes over time. First, time-aware answers directly address one of the biggest user frustrations with knowledge systems: getting outdated information. Users trust your system more when they know they're seeing current content. Second, recency enforcement is straightforward to implement. A simple filter on effective date or is latest flag immediately improves answer quality. Third, clear versioning support enables powerful features like "show me what changed between versions" or "compare current policy to last year's policy."
#### The Challenges
The cons are operational. Requires consistent source dates means you need discipline in your content management. If some teams use file system dates, others use document headers, and others use version control timestamps, you'll have messy data that's hard to trust. Backfill can be tedious when you're enriching a large corpus of historical documents. You may need to infer dates from filenames, parse document text, or even manually research effective dates. Date format standardization becomes critical—mixing ISO dates, U.S. dates, and European dates leads to parsing errors and incorrect filtering.
#### Implementation Strategy
Start with high-value content types where freshness matters most: policies, procedures, and product documentation. Establish date extraction standards early. Invest in good parsing infrastructure that handles multiple date formats gracefully. As you expand to more content types, the infrastructure investment pays dividends. Now let's look at semantic summaries.`
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
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <GSAPAnimated animation="slideInBottom" delay={0.3}>
                    <div>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>
                        <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        Goal:
                        <MermaidPopover
                          diagram={`graph LR
    A[Long Text] --> B[LLM Summarize]
    B --> C[Key Claims]
    C --> D[Store Summary]
    style B fill:#4fc3f7`}
                          title="Summary Generation"
                        />
                      </strong>
                      <p style={{ marginTop: '5px' }}>Speeds candidate pruning; improves reranking; reduces hallucinations with intent-aligned blurbs</p>

                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                      <p style={{ marginTop: '5px' }}>Generate 1–3 sentence, query-agnostic summaries per chunk via LLM; store alongside content</p>

                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Steps:</strong>
                      <GSAPStaggerList>
                        <li>Prompt LLM: extract key claims, scope, constraints; limit 50–70 tokens</li>
                        <li>Store summary and optional bullets/QA-focused tags</li>
                        <li>Use summary field in hybrid BM25 + vector search and in UI previews</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="rotateIn" delay={0.5}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                      <strong>When to Use:</strong>
                      <GSAPStaggerList>
                        <li style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>Long sections</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Dense PDFs</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>When using self-query or hybrid search</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="scaleIn" delay={0.7}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85em' }}>
                      <strong style={{ color: '#81c784' }}>Example of Metadata Field:</strong>
                      <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`{
  "summary": "Explains refund eligibility, timelines, and exclusions
  for subscriptions."
}`}</pre>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#2d1a4d',
          notes: `### 13. Semantic Summary Metadata
Our sixth enrichment technique is semantic summaries. This is about generating concise, high-quality summaries of each chunk that capture its core meaning.
#### The Summarization Advantage
Here's the problem: raw document chunks often contain extraneous details, preambles, or tangential points that dilute the semantic signal. A summary extracts just the key claims and scope, creating a cleaner signal for retrieval. Think of it like an abstract for a research paper—it distills the essence so readers can quickly judge relevance without reading the full text.
\`\`\`mermaid
graph TB
    A[Raw Chunk: 500 tokens] --> B[LLM Summarize]
    B --> C[Summary: 50 tokens<br/>"Explains refund rules..."]
    C --> D[Embed Summary]
    C --> E[BM25 Index]
    C --> F[UI Preview]
    style B fill:#4fc3f7
    style C fill:#81c784
\`\`\`
#### Implementation Strategy
Use an LLM to generate query-agnostic summaries—one to three sentences that capture what the chunk explains, describes, or instructs without assuming what the user might ask. Aim for fifty to seventy tokens. Include key claims, scope, and any important constraints or conditions. Store the summary alongside the original content. Then leverage it in three ways: embed the summary instead of or in addition to the full text for better semantic matching, index it as a BM25 field for keyword search, and display it in search result previews so users can scan relevance quickly.
#### Cost-Benefit Analysis
The main con is LLM cost—you're running inference on every chunk. For large corpora, this adds up. You also need to refresh summaries when content changes. But the benefits are substantial: stronger relevance signals, better user scannability, and reduced hallucinations because the LLM has cleaner context to work with. This technique is particularly valuable for dense, technical content where the signal-to-noise ratio in raw chunks is low.`
        },
        {
          id: 14,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.2}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Strong relevance signals</li>
                    <li style={{ fontSize: '1.2rem' }}>Improves user scannability</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.6}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>LLM cost</li>
                    <li style={{ fontSize: '1.2rem' }}>Periodic refresh as content changes</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="flipCard" delay={1.0}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#42315f', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Semantic summaries provide distilled context that's easier for retrieval systems to match against queries and for users to quickly scan, improving both automated relevance and human review.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2d1a4d',
          notes: `### 14. Semantic Summaries: Pros and Cons
Let's evaluate semantic summaries as an enrichment technique.
#### The Benefits
The pros are compelling for both systems and users. First, summaries provide strong relevance signals. By distilling content to its core claims, you improve the signal-to-noise ratio for both vector embeddings and keyword search. Queries match more precisely against summary text than against verbose raw chunks. Second, summaries dramatically improve user scannability. When users see search results, they can quickly judge relevance from a well-written summary without reading full chunks. This speeds up information finding and increases user satisfaction.
#### The Costs
The cons center on operational overhead. LLM cost is the primary concern. If you're processing millions of chunks, the inference costs add up quickly. You'll need to budget accordingly and potentially batch process during off-peak hours. Periodic refresh becomes necessary as content changes. When a document updates, you need to regenerate summaries for affected chunks. This requires change detection and reprocessing infrastructure that adds complexity to your pipeline.
#### Strategic Decision
Despite the costs, semantic summaries are one of the highest-ROI enrichment techniques available. They improve every stage of the RAG pipeline: better retrieval through cleaner signals, better reranking through focused content, better generation through reduced noise, and better user experience through scannable previews. If you can only invest in one advanced enrichment technique, semantic summaries should be at the top of your list. Now let's move to keyword highlights.`
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
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <GSAPAnimated animation="slideInTop" delay={0.3}>
                    <div>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>
                        <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        Goal:
                        <MermaidPopover
                          diagram={`graph LR
    A[Text] --> B[Extract Keyphrases]
    B --> C[RAKE/KeyBERT]
    C --> D[Keywords Array]
    style C fill:#ffd700`}
                          title="Keyphrase Extraction"
                        />
                      </strong>
                      <p style={{ marginTop: '5px' }}>Strong lexical signals for hybrid search and explainable matches</p>

                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                      <p style={{ marginTop: '5px' }}>Extract salient keyphrases (RAKE, KeyBERT, YAKE) + domain dictionaries; dedupe/stem</p>

                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Steps:</strong>
                      <GSAPStaggerList>
                        <li>Run extractor; cap to top-N phrases; normalize (lowercase, stem)</li>
                        <li>Merge with domain synonyms; store as keywords array</li>
                        <li>Index as separate BM25 field; boost matches</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="bounceIn" delay={0.5}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <strong>When to Use:</strong>
                      <GSAPStaggerList>
                        <li style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>Exact-match needs (IDs, codes)</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Jargon-heavy domains</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Search log-driven synonyms</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="rotateIn" delay={0.7}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
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
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#4d4b1a',
          notes: `### 15. Keyword Highlights and Key-Phrase Extraction
Our seventh enrichment technique is keyword highlights through key-phrase extraction. This creates an explicit lexical bridge between how users search and how content is indexed.
#### The Lexical Signal Gap
Semantic search with embeddings is powerful, but it sometimes misses exact-match scenarios. If a user searches for "RMA process" 👉 'R-M-A', you want documents that explicitly mention "RMA" or "return merchandise authorization" to rank highly. Keyword extraction identifies and indexes these salient phrases explicitly, giving your hybrid retrieval system strong lexical signals to work with.
\`\`\`mermaid
graph TB
    A[Text: refund policy...] --> B[Extract Keyphrases]
    B --> C[RAKE Algorithm]
    B --> D[KeyBERT Model]
    C --> E["refund window"]
    D --> E
    C --> F["restocking fee"]
    D --> F
    E --> G[Store as keywords]
    F --> G
    style E fill:#ffd700
    style F fill:#ffd700
\`\`\`
#### Implementation Techniques
Use established key-phrase extraction algorithms like RAKE 👉 'rake', KeyBERT 👉 'key-bert', or YAKE 👉 'yake'. These use statistical or embedding-based methods to identify important phrases. Extract the top-N phrases per chunk—typically five to fifteen. Normalize them through lowercasing and stemming to handle variations. Optionally merge with domain-specific synonym dictionaries to expand coverage. Store the keywords as an array and index them as a separate BM25 field that you can boost during hybrid search.
#### Practical Applications
This technique excels in exact-match scenarios: product IDs, regulation codes, technical acronyms. It's valuable in jargon-heavy domains where users search using specific terminology. You can also analyze search logs to identify commonly searched phrases that should be extracted as keywords. The combination of semantic search for concept matching and keyword matching for exact phrases provides robust hybrid retrieval.`
        },
        {
          id: 16,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="flipCard" delay={0.2}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Cheap to compute</li>
                    <li style={{ fontSize: '1.2rem' }}>Great for hybrid retrieval</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="flipCard" delay={0.6}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Can be noisy</li>
                    <li style={{ fontSize: '1.2rem' }}>Requires periodic curation</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={1.0}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#5f5d31', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Keyword extraction provides explicit lexical bridges between user queries and documents, making retrieval more efficient and results more explainable than purely semantic methods.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#4d4b1a',
          notes: `### 16. Keyword Highlights: Pros and Cons
Let's evaluate the tradeoffs of keyword extraction.
#### The Advantages
The pros make this technique very accessible. First, keyword extraction is cheap to compute compared to LLM-based techniques. Whether you use statistical methods like RAKE or lightweight models like KeyBERT, the computational cost is minimal. You can process thousands of chunks quickly. Second, keywords are excellent for hybrid retrieval. They complement semantic search by providing exact-match signals. This combination—semantic for concepts, lexical for specifics—delivers better overall retrieval than either alone. Keywords also make results explainable. You can show users "this matched because it contains your search term 'RMA.'"
#### The Challenges
The cons require ongoing attention. Keyword extraction can be noisy. Algorithms sometimes extract common phrases that aren't actually important, or miss domain-specific terminology that matters. This requires tuning and validation. Periodic curation becomes necessary as your domain evolves. New products launch, new jargon emerges, and yesterday's keywords become less relevant. You need processes to review extracted keywords, manually add important terms the algorithm misses, and remove noise.
#### Strategic Use
Despite the maintenance overhead, keyword extraction is one of the most cost-effective enrichment techniques. The low computational cost and immediate hybrid search benefits make it a great second or third technique to implement after you've tackled section titles and document types. Pair it with user feedback—if users aren't finding documents they expect, check if key terminology is being extracted. Now let's look at trust scoring.`
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
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ fontSize: '0.7em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.3}>
                    <div>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>
                        <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        Goal:
                        <MermaidPopover
                          diagram={`graph TB
    A[Source] --> B[Calculate Score]
    B --> C[Policy: 0.95]
    B --> D[KB: 0.80]
    B --> E[Email: 0.60]
    B --> F[Chat: 0.20]
    style C fill:#81c784`}
                          title="Trust Scoring"
                        />
                      </strong>
                      <p style={{ marginTop: '5px' }}>Reliability and governance; prioritizes authoritative sources</p>

                      <strong style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                      <p style={{ marginTop: '5px' }}>Compute trust_score using source type, authorship, verification, recency; store 0–1 score</p>

                      <div style={{ marginTop: '12px', padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                        <strong>Trust Score Examples:</strong>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginTop: '8px', fontSize: '1.2rem' }}>
                          <div style={{ textAlign: 'left' }}>Policy: <strong>0.95</strong></div>
                          <div style={{ textAlign: 'left' }}>KB: <strong>0.80</strong></div>
                          <div style={{ textAlign: 'left' }}>Email: <strong>0.60</strong></div>
                          <div style={{ textAlign: 'left' }}>Chat: <strong>0.20</strong></div>
                        </div>
                      </div>

                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Steps:</strong>
                      <GSAPStaggerList>
                        <li>Define rubric (policy&gt;kb&gt;chat&gt;email; +verified; +recent)</li>
                        <li>Calculate trust_score; store source_type, verified, reviewer</li>
                        <li>Retrieval: threshold or boost by trust_score; expose in UI</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="scaleIn" delay={0.5}>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                      <strong>When to Use:</strong>
                      <GSAPStaggerList>
                        <li style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>Mixed sources (official docs, chats, emails)</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Regulated environments</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Knowledge bases with varied quality</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Customer-facing applications requiring reliable information</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="rotateIn" delay={0.7}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div style={{ padding: '10px', backgroundColor: 'rgba(33, 33, 33, 0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.8em' }}>
                      <strong style={{ color: '#81c784' }}>Example of Metadata Field:</strong>
                      <pre style={{ marginTop: '8px', lineHeight: '1.4' }}>{`{
  "source_type": "policy",
  "trust_score": 0.92,
  "verified": true,
  "reviewer": "Compliance"
}`}</pre>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a4d27',
          notes: `### 17. Source Confidence and Trust Scoring
Our eighth enrichment technique is source confidence and trust scoring. This is about quantifying the reliability of each information source so your system can prioritize authoritative content.
#### The Quality Problem
Not all information is created equal. A formal policy document reviewed by your legal team is more authoritative than an email thread or chat log. But without explicit trust signals, your retrieval system treats them equally. Trust scoring solves this by assigning each source a reliability score based on verifiable criteria.
\`\`\`mermaid
graph TB
    A[Compute Trust Score] --> B[Source Type Weight]
    A --> C[Verification Status]
    A --> D[Recency Penalty]
    A --> E[Reviewer Authority]
    B --> F[Final Score: 0.92]
    C --> F
    D --> F
    E --> F
    style F fill:#81c784
\`\`\`
#### Scoring Rubric
Define a trust rubric based on source type. Typically: official policies score zero-point-nine to one-point-zero, knowledge base articles score zero-point-seven to zero-point-nine, internal emails score zero-point-five to zero-point-seven, and informal chats score zero-point-two to zero-point-five. Add modifiers: plus zero-point-one for verified content, plus zero-point-zero-five for recent updates, plus zero-point-one if reviewed by a subject matter expert. Store the trust score along with source type, verification status, and reviewer identity.
#### Retrieval Integration
At retrieval time, you have options. Hard thresholding: only return results above zero-point-six trust. Soft boosting: multiply relevance scores by trust scores. Or transparent display: show all results but badge them by trust level so users can judge. Each approach has merits depending on your use case and risk tolerance.
#### Business Value
Trust scoring is critical for regulated industries and customer-facing applications. It reduces the risk of serving unreliable information, provides audit trails for compliance, and increases user confidence in system responses. The implementation effort is modest—mainly defining your rubric and computing scores—but the risk mitigation value is substantial.`
        },
        {
          id: 18,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="slideInBottom" delay={0.2}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Reduces low-quality context</li>
                    <li style={{ fontSize: '1.2rem' }}>Auditable</li>
                    <li style={{ fontSize: '1.2rem' }}>Prioritizes reliable sources</li>
                    <li style={{ fontSize: '1.2rem' }}>Increases answer confidence</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInTop" delay={0.6}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Potential bias</li>
                    <li style={{ fontSize: '1.2rem' }}>Needs upkeep and reviewer workflows</li>
                    <li style={{ fontSize: '1.2rem' }}>Subjective scoring criteria</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="rotateIn" delay={1.0}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#315f3d', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Not all information sources deserve equal weight. Trust scoring ensures models prioritize verified, authoritative content over informal or unverified sources, reducing hallucinations and improving response reliability.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a4d27',
          notes: `### 18. Trust Scoring: Pros and Cons
Let's evaluate trust scoring as an enrichment strategy.
#### The Advantages
The pros are significant for risk management. First, trust scoring dramatically reduces low-quality context reaching your LLM. By filtering or de-prioritizing unreliable sources, you minimize the risk of hallucinations based on questionable information. Second, trust scores are auditable. When regulators or compliance teams ask "why did the system recommend this policy," you can point to the trust score, source type, and reviewer as objective criteria. Third, prioritizing reliable sources is exactly what users want. Nobody wants answers sourced from random chat logs when official documentation exists. Fourth, answer confidence increases. When your system knows it's working from high-trust sources, it can be more assertive in its responses.
#### The Challenges
The cons require careful governance. Potential bias is real—your scoring rubric reflects your organization's view of what's authoritative, which may not always be correct. Sometimes informal channels have the most current or accurate information. Needs upkeep means you can't set it and forget it. As new source types emerge or organizational structures change, you need to review and update trust criteria. Reviewer workflows add complexity. If verification status affects trust scores, you need processes for reviewers to evaluate and approve content. Subjective scoring criteria mean different teams might score the same source type differently without clear guidelines.
#### Strategic Implementation
Despite these challenges, trust scoring is essential for any production system handling critical information. Start with clear, documented rubrics. Make trust scores visible to users so they can apply their own judgment. Monitor for bias by analyzing which content types get excluded and validating that high-trust sources actually deliver better outcomes. When implemented thoughtfully, trust scoring is one of the most impactful risk-reduction techniques available. Let's move to our final technique: parent-child hierarchical structures.`
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
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ fontSize: '0.75em' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <GSAPAnimated animation="slideInRight" delay={0.3}>
                    <div>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>
                        <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                        Goal:
                        <MermaidPopover
                          diagram={`graph TB
    A[Doc] --> B[Chapter 2]
    B --> C[Section 5]
    C --> D[Chunk 123]
    D --> E[Fetch siblings/parent]
    style D fill:#81c784`}
                          title="Hierarchical Structure"
                        />
                      </strong>
                      <p style={{ marginTop: '5px' }}>Preserves document hierarchy; enables fetching sibling/ancestor context</p>

                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong>
                      <p style={{ marginTop: '5px' }}>Assign stable IDs at doc/section/paragraph; store parent_id and ancestors path per chunk</p>

                      <strong style={{ marginTop: '12px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-list-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Steps:</strong>
                      <GSAPStaggerList>
                        <li>Build tree during parsing; generate unique ids; store id, parent_id, ancestors</li>
                        <li>Retrieval: fetch hit + k siblings/parent for full context window</li>
                        <li>Keep referential integrity on re-ingest via content hashing</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="bounceIn" delay={0.5}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                      <strong style={{ display: 'flex', alignItems: 'center' }}>When to Use:</strong>
                      <GSAPStaggerList>
                        <li style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>Manuals</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Textbooks</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Web docs with TOCs</li>
                        <li style={{ lineHeight: '1.6', fontSize: '1.2rem' }}>Dense PDFs</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="scaleIn" delay={0.7}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
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
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#4d1a3e',
          notes: `### 19. Parent-Child Structural Metadata
Our ninth and final enrichment technique is parent-child structural metadata. This preserves the hierarchical relationships between chunks so you can navigate document structure dynamically during retrieval.
#### The Context Expansion Problem
Sometimes a single chunk doesn't provide enough context to answer a query well. The user asks about a multi-step process, but the matching chunk only covers step three. Parent-child metadata lets you intelligently expand context by fetching the parent section or sibling chunks to provide the full picture.
\`\`\`mermaid
graph TB
    A[User Manual] --> B[Chapter 2: Installation]
    B --> C[Section 5: Database Setup]
    C --> D[Chunk 123: Configure Connection]
    C --> E[Chunk 124: Test Connection]
    C --> F[Chunk 125: Troubleshooting]
    D -.fetch siblings.-> E
    D -.fetch siblings.-> F
    D -.fetch parent.-> C
    style D fill:#81c784
\`\`\`
#### Implementation Architecture
During document parsing, build a tree structure that represents the document's hierarchy: document, chapters, sections, paragraphs. Assign each node a stable, unique ID. For each chunk, store its own ID, its parent ID, an ancestors array showing the full path from root to current node, and an order number for sequence. Use content hashing to maintain referential integrity when documents are re-ingested—if a section hasn't changed, keep its ID stable.
#### Retrieval Strategy
At retrieval time, when you get a hit on chunk one-two-three, you can dynamically expand context. Fetch K siblings chunks at the same hierarchical level to get surrounding context. Fetch the parent chunk to understand the broader section topic. Or even fetch grandparent context if needed for very hierarchical documents. This contextual expansion dramatically improves answer coherence for complex, structured content.
#### Best Use Cases
This technique shines for manuals, textbooks, technical documentation with clear table of contents structures, and dense PDF documents where sections build on each other. The added complexity in your parsing and storage pipeline is worth it for these content types because the quality improvement is substantial.`
        },
        {
          id: 20,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="flipCard" delay={0.2}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>Better coherence</li>
                    <li style={{ fontSize: '1.2rem' }}>Fewer orphan chunks</li>
                    <li style={{ fontSize: '1.2rem' }}>Improves contextual understanding</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="flipCard" delay={0.6}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <GSAPStaggerList>
                    <li style={{ fontSize: '1.2rem' }}>More complex pipeline</li>
                    <li style={{ fontSize: '1.2rem' }}>Migration/versioning concerns</li>
                    <li style={{ fontSize: '1.2rem' }}>Requires document structure</li>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={1.0}>
                <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#5f3152', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />Key Insight:</strong>
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Maintaining hierarchical relationships between document chunks allows RAG systems to intelligently expand context beyond individual fragments, preserving the original document's logical structure.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#4d1a3e',
          notes: `### 20. Parent-Child Structure: Pros and Cons
Let's evaluate parent-child structural metadata as our final enrichment technique.
#### The Advantages
The pros are powerful for document coherence. First, better coherence comes from being able to expand context intelligently. Instead of guessing which chunks might be related, you can navigate the actual document structure. Second, fewer orphan chunks means users get complete answers. A chunk about "step three" isn't helpful without steps one and two, and parent-child metadata lets you retrieve them together. Third, contextual understanding improves dramatically. The LLM can see not just the matching chunk but its place in the document hierarchy, reducing confusion about scope and applicability.
#### The Challenges
The cons are primarily engineering complexity. More complex pipeline requirements mean your document parser needs to build and maintain tree structures, not just split text sequentially. This is harder to implement and debug. Migration and versioning concerns arise when documents change. If chapter two becomes chapter three in the next version, how do you maintain stable IDs and relationships? This requires thought about content addressing or careful migration strategies. Finally, requires document structure means this technique only works for structured content. Unstructured documents like chat logs or free-form notes don't have hierarchies to preserve.
#### Implementation Guidance
Despite the complexity, parent-child metadata is transformative for structured, hierarchical content. Start with your highest-value, most structured documents. Invest in robust parsing infrastructure that can reliably identify document hierarchies. Use content hashing to maintain ID stability across versions. The engineering effort is significant but the quality improvement for technical documentation and manuals is worth it. That completes our tour of all nine metadata enrichment techniques. Let's summarize best practices.`
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
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '15px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.3}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#42a5f5', marginBottom: '10px' }}>
                        <SvgIcon iconName="duo-pen-ruler" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        Design & Governance
                      </h4>
                      <GSAPStaggerList>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Define a typed schema; use <code>lower_snake_case</code> keys</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Separate content fields vs. metadata fields; avoid overloading</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Establish clear tagging guidelines for consistency</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Implement version control for metadata schema evolution</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="scaleIn" delay={0.5}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7e57c2', marginBottom: '10px' }}>
                        <SvgIcon iconName="duo-robot" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        Automation & Quality
                      </h4>
                      <GSAPStaggerList>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Automate enrichment (parsers, NER, classifiers, LLM summaries) with confidence scores</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Implement human-in-the-loop for low-confidence tags</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Establish QA processes with regular validation cycles</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Audit and retrain quarterly to prevent drift</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="slideInRight" delay={0.7}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#26c6da', marginBottom: '10px' }}>
                        <SvgIcon iconName="duo-magnifying-glass-chart" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        Retrieval Strategy
                      </h4>
                      <GSAPStaggerList>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Use hybrid search (BM25 + vectors) with metadata filters</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Implement self-query retrievers for dynamic filtering</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Rerank with <code>section_title</code>, <code>trust_score</code>, and recency</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Use metadata to expand context when needed</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2d1d61',
          notes: `### 21. Best Practices for Metadata-Driven RAG (Part 1)
Now that we've covered all nine enrichment techniques, let's discuss best practices for implementing metadata-driven RAG successfully. These practices span design, automation, and retrieval strategy.
#### Design and Governance
Start with a well-defined metadata schema using typed fields. Use consistent naming conventions like lower underscore snake case for all metadata keys. This makes your schema predictable and easy to work with across teams. Separate content fields from metadata fields clearly—don't overload metadata with content or vice versa. Establish clear tagging guidelines documented in your team wiki so everyone applies metadata consistently. Implement version control for your metadata schema itself so you can evolve it safely as requirements change.
#### Automation and Quality
Automate enrichment wherever possible using parsers for structure, NER for entities, classifiers for types and topics, and LLM summarization for summaries. Attach confidence scores to automated tags so you know which ones to trust. Implement human-in-the-loop workflows for low-confidence tags—route them to subject matter experts for review. Establish QA processes with regular validation cycles where you sample metadata and verify accuracy. Audit your models and retrain them quarterly to prevent classifier drift as your content evolves.
#### Retrieval Strategy
Use hybrid search combining BM25 for keyword matching and vector embeddings for semantic matching, with metadata as filters and boosting signals. Implement self-query retrievers that can dynamically construct metadata filters based on user queries. Use reranking that considers section title relevance, trust scores, and recency alongside semantic similarity. Leverage metadata to expand context intelligently—when you get a hit, use parent-child relationships or section boundaries to fetch additional relevant chunks.`
        },
        {
          id: 22,
          title: 'Best Practices for Metadata-Driven RAG',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.3}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(255, 152, 0, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ff9800', marginBottom: '10px' }}>
                        <SvgIcon iconName="duo-shield-halved" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        Ops & Safety
                      </h4>
                      <GSAPStaggerList>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Handle PII in entities with appropriate anonymization</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Implement access control on sensitive metadata</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Use versioning and change-data-capture to refresh metadata reliably</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Log and monitor metadata usage patterns</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Create fallback strategies when metadata is incomplete</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="slideInRight" delay={0.5}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#81c784', marginBottom: '10px' }}>
                        <SvgIcon iconName="duo-chart-line" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        Measurement
                      </h4>
                      <GSAPStaggerList>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Track precision@k, MRR, and coverage of tags</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Measure filter hit rate and time-to-answer improvements</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Analyze user feedback on response quality</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Assess hallucination reduction with/without metadata</li>
                        <li style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>Create dashboards for metadata quality metrics</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="bounceIn" delay={0.9}>
                  <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(255, 215, 0, 0.15)', borderRadius: '8px' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffd700', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-star" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      Key Success Factors
                    </h4>
                    <div style={{ display: 'flex', fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <GSAPStaggerList>
                        <li><strong>Consistency</strong> in metadata application across all documents</li>
                        <li><strong>Integration</strong> of metadata at all pipeline stages</li>
                        <li><strong>Automation</strong> to reduce manual tagging burden</li>
                        <li><strong>Governance</strong> to maintain metadata quality over time</li>
                        <li><strong>Measurement</strong> to quantify metadata's impact on retrieval</li>
                      </GSAPStaggerList>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#2d1d61',
          notes: `### 22. Best Practices for Metadata-Driven RAG (Part 2)
Continuing our best practices discussion, let's cover operations, safety, measurement, and key success factors.
#### Operations and Safety
Handle PII 👉 'P-I-I' carefully when extracting entities. Implement anonymization or tokenization for person names and other sensitive data. Apply access control on sensitive metadata fields—not every user should see internal review notes or confidence scores. Use versioning and change-data-capture patterns to refresh metadata reliably when source documents update. Log and monitor metadata usage patterns to understand which fields drive the most value and which are underutilized. Create fallback strategies for when metadata is incomplete—your system should gracefully degrade, not fail completely.
#### Measurement
Track standard retrieval metrics like precision at k, mean reciprocal rank 👉 'M-R-R', and tag coverage to understand baseline performance. Measure filter hit rate—how often do metadata filters actually improve results versus just reducing recall? Track time-to-answer improvements as users find information faster with better metadata. Analyze user feedback on response quality through thumbs up-down ratings or more detailed surveys. Assess hallucination reduction by comparing outputs with and without metadata enrichment. Create dashboards that visualize metadata quality metrics so stakeholders can see the value.
#### Key Success Factors
Five factors determine metadata enrichment success. Consistency in applying metadata across all documents ensures fair comparisons and reliable filtering. Integration at all pipeline stages means metadata informs parsing, embedding, retrieval, reranking, and generation. Automation reduces manual burden and enables scaling. Governance maintains quality over time as content and teams evolve. Measurement quantifies impact and justifies continued investment. Get these five right and your metadata enrichment program will deliver sustained value.`
        },
        {
          id: 23,
          title: 'Conclusion & Next Steps',
          icon: { name: 'duo-check-double' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.3}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ color: '#42a5f5', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <SvgIcon iconName="duo-sitemap" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        Structure & Context
                      </h4>
                      <GSAPStaggerList>
                        <li style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Section titles</li>
                        <li style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Semantic summaries</li>
                        <li style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Parent-child relationships</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="scaleIn" delay={0.5}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(126, 87, 194, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ color: '#7e57c2', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <SvgIcon iconName="duo-folder-tree" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        Classification & Taxonomy
                      </h4>
                      <GSAPStaggerList>
                        <li style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Document types</li>
                        <li style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Entity tagging (NER)</li>
                        <li style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Topic/category tags</li>
                        <li style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Keywords/key-phrases</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="slideInRight" delay={0.7}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(38, 198, 218, 0.1)', borderRadius: '8px' }}>
                      <h4 style={{ color: '#26c6da', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <SvgIcon iconName="duo-shield-check" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                        Freshness & Trust
                      </h4>
                      <GSAPStaggerList>
                        <li style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Time/version metadata</li>
                        <li style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Source confidence scoring</li>
                      </GSAPStaggerList>
                    </div>
                  </GSAPAnimated>
                </div>

                <GSAPAnimated animation="bounceIn" delay={1.0}>
                  <div style={{ padding: '15px', backgroundColor: 'rgba(129, 199, 132, 0.15)', borderRadius: '8px', marginBottom: '15px' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#81c784' }}>
                      <SvgIcon iconName="duo-rocket" sizeName="2x" darkModeInvert={true} />
                      Adopt in Phases
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', fontSize: '2rem', marginTop: '12px' }}>
                      <GSAPAnimated animation="slideInBottom" delay={1.2}>
                        <div style={{ padding: '10px', backgroundColor: 'rgba(66, 165, 245, 0.2)', borderRadius: '8px' }}>
                          <strong style={{ color: '#42a5f5', display: 'flex', alignItems: 'center' }}>Phase 1: +15-25%</strong>
                          <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>
                            <li>Section titles</li>
                            <li>Document type labels</li>
                            <li>Time/version metadata</li>
                          </ul>
                        </div>
                      </GSAPAnimated>
                      <GSAPAnimated animation="slideInBottom" delay={1.4}>
                        <div style={{ padding: '10px', backgroundColor: 'rgba(126, 87, 194, 0.2)', borderRadius: '8px' }}>
                          <strong style={{ color: '#7e57c2', display: 'flex', alignItems: 'center' }}>Phase 2: +30-45%</strong>
                          <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>
                            <li>Entity tagging (NER)</li>
                            <li>Topic/category tags</li>
                            <li>Keywords/key-phrases</li>
                          </ul>
                        </div>
                      </GSAPAnimated>
                      <GSAPAnimated animation="slideInBottom" delay={1.6}>
                        <div style={{ padding: '10px', backgroundColor: 'rgba(38, 198, 218, 0.2)', borderRadius: '8px' }}>
                          <strong style={{ color: '#26c6da', display: 'flex', alignItems: 'center' }}>Phase 3: +50-70%</strong>
                          <ul style={{ marginTop: '8px', lineHeight: '1.6', fontSize: '1.2rem' }}>
                            <li>Semantic summaries</li>
                            <li>Source confidence scoring</li>
                            <li>Parent-child structure</li>
                          </ul>
                        </div>
                      </GSAPAnimated>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#2d1d61',
          notes: `### 23. Conclusion and Next Steps
Let's wrap up by reviewing what we've covered and providing a phased adoption roadmap.
#### The Nine Techniques Recap
We've explored nine metadata enrichment techniques organized into three categories. Structure and Context techniques include section-level titles, semantic summaries, and parent-child hierarchical relationships—these preserve document organization. Classification and Taxonomy techniques include document type labels, entity tagging with NER, topic and category tags, and keyword extraction—these organize and categorize content. Freshness and Trust techniques include time-version metadata and source confidence scoring—these ensure current, reliable information.
#### Phased Adoption Roadmap
Don't try to implement all nine techniques at once. Adopt in phases based on complexity and impact. Phase One focuses on low-hanging fruit: section titles, document type labels, and time-version metadata. These are relatively easy to implement and deliver fifteen to twenty-five percent improvements in retrieval precision. Start here to build momentum and prove value.
Phase Two adds classification power: entity tagging, topic-category tags, and keyword extraction. These require more infrastructure—NER models, classifiers, keyphrase extractors—but deliver thirty to forty-five percent cumulative improvements. Implement these after Phase One is stable.
Phase Three tackles advanced techniques: semantic summaries using LLMs, source confidence scoring with governance, and parent-child structural metadata. These are the most complex but can deliver fifty to seventy percent cumulative improvements when combined with earlier phases. Reserve these for when you have mature metadata operations and clear ROI from earlier phases.
Start small, measure impact, iterate, and scale. That's how you build a world-class metadata enrichment program.`
        },
        {
          id: 24,
          title: 'Key Takeaway',
          icon: { name: 'duo-star' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ fontSize: '2rem' }}>
                <GSAPAnimated animation="scaleIn" delay={0.3}>
                  <div style={{ padding: '15px', backgroundColor: 'rgba(255, 215, 0, 0.15)', borderRadius: '8px' }}>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.7', marginBottom: '12px' }}>
                      Metadata enrichment is not a one-time task but an ongoing process that continuously improves retrieval quality. Start small, measure impact, and expand progressively to build a robust, contextually-aware RAG system.
                    </p>
                    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', display: 'flex', alignItems: 'center' }}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px', color: '#ffd54f' }} darkModeInvert={true} />
                      Most importantly, these techniques reduce hallucinations by providing better context and grounding for LLMs.
                    </p>
                  </div>
                </GSAPAnimated>

                <GSAPAnimated animation="bounceIn" delay={0.7}>
                  <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(66, 165, 245, 0.1)', borderRadius: '8px' }}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#42a5f5', marginBottom: '8px' }}>
                      <SvgIcon iconName="duo-list-check" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      Call to Action
                    </h4>
                    <GSAPStaggerList>
                      <li style={{ fontSize: '1.2rem', lineHeight: '1.7' }}>Define your metadata schema and baselines this week</li>
                      <li style={{ fontSize: '1.2rem', lineHeight: '1.7' }}>Enable metadata filters and reranking in your retriever</li>
                      <li style={{ fontSize: '1.2rem', lineHeight: '1.7' }}>Measure impact; iterate on low-signal fields</li>
                      <li style={{ fontSize: '1.2rem', lineHeight: '1.7' }}>Prioritize techniques that match your data types</li>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#2d1d61',
          notes: `### 24. Key Takeaway and Call to Action
As we conclude, let's reinforce the core message and provide actionable next steps.
#### The Core Message
Metadata enrichment is not a one-time task you complete and forget. It's an ongoing process that requires continuous attention, measurement, and refinement. As your content evolves, as user needs change, as new techniques emerge, your metadata strategy must adapt. But that's not a weakness—it's a strength. It means your RAG system can continuously improve over time, getting smarter and more contextually aware with each iteration.
#### The Impact on Hallucinations
The most important benefit of metadata enrichment is hallucination reduction. When your LLM has rich metadata providing document structure, source trust, temporal validity, and semantic context, it can ground its responses in verified information. It knows which sources to trust, which content is current, and how chunks relate to each other. This grounding dramatically reduces the likelihood of confident but incorrect responses.
#### Your Action Plan
Start this week. Define your metadata schema—what fields will you track? Establish baselines by measuring your current retrieval precision and hallucination rates. Then implement Phase One techniques: section titles, document types, and time-version metadata. Enable metadata filters and reranking in your retriever. Measure the impact after two weeks. Iterate on fields that provide low signal—either improve them or remove them. Prioritize techniques that match your specific data types and use cases. Don't copy someone else's metadata strategy; build one that fits your unique requirements.
Thank you for your attention. Now go build smarter RAG systems with metadata enrichment!`
        }
      ]
    }
  ]
};
