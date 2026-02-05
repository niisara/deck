import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

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
          center: true,
          title: '13 Entity Normalization & Disambiguation Techniques',
          content: (
            <div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <div style={{ fontSize: '1.2rem', color: '#e5c07b', marginBottom: '1rem', marginTop: '1rem' }}>
                  A practical cheat sheet for NLP, data integration, and knowledge graphs
                </div>
              </GSAPAnimated>
              <div style={{ fontSize: '2rem', color: '#888', lineHeight: '1.8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <GSAPAnimated animation="scaleIn" delay={0.3}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
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
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.5}>
                  <div style={{ color: '#98c379' }}>
                    <SvgIcon iconName="duo-users-group" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Audience:</strong> Data scientists, NLP engineers, knowledge graph practitioners
                  </div>
                  <p><strong>Prepared by:</strong> Nisar A</p>
                  <p><strong>Date:</strong> November 7, 2025</p>
                  <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a3a52',
          notes: `### 1) 13 Entity Normalization & Disambiguation Techniques
Welcome everyone! Today we're diving into something that might sound a bit technical at first, but is actually one of the most important foundations for building reliable data systems.

#### 🎯 What We're Covering
We're going to explore **13 different techniques** for solving a problem you've probably encountered without even realizing it: how do we make sure that when we talk about "Apple" in our data, we know whether we mean the tech company or the fruit? How do we handle the fact that "NYC", "New York City", and "Big Apple" all refer to the same place?

This is what **entity normalization and disambiguation** is all about. It's the glue that holds modern data systems together, whether you're building search engines, knowledge graphs, or AI applications.

#### 👥 Who Is This For?
This presentation is designed for **data scientists**, **NLP engineers**, and anyone working with **knowledge graphs** or data integration challenges. But don't worry if you're new to these concepts—we'll start from the basics and build up.

#### 🗺️ The Journey Ahead
We'll go from simple techniques like string cleanup all the way to using **large language models** for complex disambiguation. Each technique has its place, and by the end, you'll know exactly when to use each one.

Let's start by understanding the core difference between normalization and disambiguation...`
        },
        {
          id: 2,
          title: 'Table of Contents',
          content: (
            <div style={{ textAlign: 'left', fontSize: '1.8rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <GSAPAnimated animation="slideInTop" delay={0.1}>
                  <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.15)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px', gridColumn: 'span 2' }}>
                    <SvgIcon iconName="duo-book" sizeName="2x" style={{ color: '#ffd700' }} darkModeInvert={true} />
                    <span style={{ fontWeight: 'bold' }}>Introduction</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.15}>
                  <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#4fc3f7' }}>1</span>
                    <span>String Normalization</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.15}>
                  <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#81c784' }}>2</span>
                    <span>Lowercasing + Unicode Normalization</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ffb74d' }}>3</span>
                    <span>Fuzzy Matching (Edit Distance)</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ba68c8' }}>4</span>
                    <span>Token-Based Similarity (Jaccard / Cosine)</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.25}>
                  <div style={{ padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#f06292' }}>5</span>
                    <span>Dictionary / Gazetteer Lookup</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.25}>
                  <div style={{ padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#64b5f6' }}>6</span>
                    <span>Synonym / Alias Mapping</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#aed581' }}>7</span>
                    <span>Rule-Based Context Matching</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ffa726' }}>8</span>
                    <span>Embedding-Based Similarity Matching</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.35}>
                  <div style={{ padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ef5350' }}>9</span>
                    <span>Entity Linking with Knowledge Bases</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.35}>
                  <div style={{ padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#9575cd' }}>10</span>
                    <span>Graph-Based Entity Disambiguation</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#66bb6a' }}>11</span>
                    <span>PageRank / Centrality-Based Disambiguation</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#aad77b' }}>12</span>
                    <span>Domain-Specific Ontology Mapping</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.45}>
                  <div style={{ padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#e57b7b' }}>13</span>
                    <span>LLM-Based Entity Disambiguation</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.5}>
                  <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.15)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px', gridColumn: 'span 2' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="1x" style={{ color: '#ffd700' }} darkModeInvert={true} />
                    <span style={{ fontWeight: 'bold' }}>Conclusion & Key Takeaways</span>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a3a52',
          notes: `### 2) Table of Contents
Here's our roadmap for today. We have **13 techniques** to cover, and they're organized from simple to complex.

#### 📚 The Structure
We'll start with the **basics**—techniques 1 through 4 focus on text-level operations like cleaning up strings and comparing them for similarity. These are your bread-and-butter tools that you'll use in almost every project.

Then we move to **lookup-based approaches** in techniques 5 through 7, where we use dictionaries, synonyms, and rules to match entities.

The **advanced section** covers techniques 8 through 13, where we bring in machine learning, embeddings, knowledge graphs, and even large language models.

#### 💡 Why This Order Matters
Think of it as building a house. You don't start with the fancy chandelier—you start with the foundation. String normalization is your foundation. Each technique builds on the previous ones, and in real-world systems, you'll often combine multiple techniques in a **pipeline**.

> Ask the audience: "How many of you have dealt with messy data where the same entity appears with different spellings?"

That's exactly what we're solving today. Let's begin with understanding the difference between normalization and disambiguation...`
        },
        {
          id: 3,
          title: 'Introduction: Normalization vs. Disambiguation',
          content: (
            <div style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #61dafb' }}>
                    <div style={{ color: '#61dafb', marginBottom: '0.8rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-broom" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>What is Entity Normalization</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginBottom: 0 }}>
                      <li>Standardizing surface forms to a canonical representation</li>
                      <li>Handling variations in format, punctuation, whitespace</li>
                      <li><strong>Examples:</strong> Phone formats, date formats, capitalization</li>
                      <li><strong>Focus:</strong> Textual/syntactic transformations</li>
                    </ul>
                  </div>
                </GSAPAnimated>

                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ background: 'rgba(198, 120, 221, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #c678dd' }}>
                    <div style={{ color: '#c678dd', marginBottom: '0.8rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-circle-nodes" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>What is Entity Disambiguation</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginBottom: 0 }}>
                      <li>Resolving ambiguous mentions to correct real-world entities</li>
                      <li>Mapping mentions to unique identifiers</li>
                      <li><strong>Examples:</strong> "Apple" → company vs. fruit; "Paris" → France vs. Texas</li>
                      <li><strong>Focus:</strong> Semantic resolution and context</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>

              <GSAPAnimated animation="slideInBottom" delay={0.3}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #98c379', marginBottom: '1.5rem' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.8rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Why it Matters</strong>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', fontSize: '1rem' }}>
                    <div>• Improves recall/precision in search and retrieval systems</div>
                    <div>• Reduces duplicates in databases and knowledge graphs</div>
                    <div>• Enables reliable joins and analytics across data sources</div>
                    <div>• Powers knowledge graph linking and reasoning</div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.5}>
                <div style={{ background: 'rgba(229, 192, 123, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.8rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>
                      Typical Pipeline
                      <MermaidPopover
                        title="Entity Resolution Pipeline"
                        diagram={`flowchart LR
    A["📝 Raw Text"] --> B["🧹 Preprocess"]
    B --> C["🔍 Candidates"]
    C --> D["📊 Score"]
    D --> E["🌐 Graph Coherence"]
    E --> F["✅ Select"]
    F --> G["💾 Persist"]
    style A fill:#4fc3f7,color:#000
    style F fill:#81c784,color:#000
    style G fill:#ffd700,color:#000`}
                      />
                    </strong>
                  </div>
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                    Preprocess → Candidate generation → Similarity scoring → Global/graph coherence → Selection → Persistence/feedback
                  </div>
                  <div style={{ fontSize: '1rem', fontStyle: 'italic', color: '#e5c07b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Guiding principle:</strong> Combine simple deterministic steps with statistical/semantic models for best accuracy and scale
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a3a52',
          notes: `### 3) Introduction: Normalization vs. Disambiguation
Before we dive into the techniques, let's make sure we understand the two core concepts we're working with. They're related but fundamentally different.

#### 🧹 Entity Normalization
Think of **normalization** as *cleaning and standardizing*. Imagine you have phone numbers written as "(555) 123-4567", "555-123-4567", and "5551234567"—they're all the same number, just formatted differently. Normalization brings them to one standard form.

It's about handling the **surface-level variations**: extra spaces, different punctuation, uppercase vs lowercase, date formats. It's purely textual transformation, no understanding of meaning required.

#### 🔗 Entity Disambiguation
**Disambiguation** is the smart part—it's about *understanding what something actually refers to*. When you see "Apple" in a news article, is it talking about the tech company or the fruit? When someone mentions "Paris," do they mean the city in France or the one in Texas?

This requires **context and semantic understanding**. You need to look at the surrounding text to figure out which entity is being discussed.

#### 🎯 The Pipeline
\`\`\`mermaid
flowchart LR
    A["📝 Raw Text"] --> B["🧹 Preprocess"]
    B --> C["🔍 Candidates"]
    C --> D["📊 Score"]
    D --> E["🌐 Graph Coherence"]
    E --> F["✅ Select"]
    F --> G["💾 Persist"]
    style A fill:#4fc3f7,color:#000
    style F fill:#81c784,color:#000
    style G fill:#ffd700,color:#000
\`\`\`

In practice, you typically run normalization first, then use its output to generate candidates for disambiguation. The pipeline flows from preprocessing through candidate generation, scoring, and finally selection.

#### 💡 The Golden Rule
Here's a key principle to remember: **start simple, add complexity as needed**. Often, basic normalization solves 80% of your problems. Only add the fancy ML techniques when simpler approaches fall short.

Now let's look at our first technique: String Normalization...`
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
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Goal</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Standardize string surface forms to reduce trivial variation
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>
                        How It Works
                        <MermaidPopover
                          title="String Normalization Flow"
                          diagram={`flowchart LR
    A["📝 Raw String"] --> B["✂️ Trim"]
    B --> C["📏 Collapse Whitespace"]
    C --> D["🔤 Normalize Punctuation"]
    D --> E["📅 Standardize Formats"]
    E --> F["✨ Clean String"]
    style A fill:#ffcdd2,color:#000
    style F fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Trim, collapse whitespace, normalize punctuation/hyphens, standardize formats (dates, phones), remove/control special chars
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    As a first pass in any pipeline; before lookups, fuzzy matching, or vectorization
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Steps</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <ol style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Trim and collapse whitespace; unify separators (space vs. underscore)</li>
                      <li>Canonicalize punctuation (e.g., smart quotes → ASCII)</li>
                      <li>Normalize formats (phone, date, currency) using locale rules</li>
                      <li>Preserve originals as separate fields for auditability</li>
                    </ol>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a523d',
          notes: `### 4) String Normalization
This is where every entity resolution journey begins. String normalization is your **first line of defense** against messy data, and honestly, it's often more powerful than people give it credit for.

#### 🎯 The Goal
We want to **standardize surface forms**—that's just a fancy way of saying "make things look the same when they mean the same thing." Think about how "New  York" (with extra space) and "New York" should obviously match, but a computer sees them as completely different strings.

#### ⚙️ How It Works
\`\`\`mermaid
flowchart LR
    A["📝 Raw String"] --> B["✂️ Trim"]
    B --> C["📏 Collapse Whitespace"]
    C --> D["🔤 Normalize Punctuation"]
    D --> E["📅 Standardize Formats"]
    E --> F["✨ Clean String"]
    style A fill:#ffcdd2,color:#000
    style F fill:#81c784,color:#000
\`\`\`

The process is straightforward. First, you **trim** leading and trailing spaces. Then you **collapse** multiple spaces into one. Next, you normalize punctuation—those curly "smart quotes" from Word documents become regular ASCII quotes. Finally, you standardize formats for things like dates and phone numbers.

#### 📅 When to Use This?
Use string normalization as the **first step in any pipeline**. Before you do fuzzy matching, before you look things up in a dictionary, before you generate embeddings—normalize first! It's fast, it's deterministic, and it catches a huge amount of variation with zero complexity.

#### 📋 The Steps
Here's a practical implementation order. Start with whitespace handling, move to punctuation, then tackle format-specific normalization. And here's a pro tip: **always keep the original**. Store it in a separate field so you can audit your changes later.

Let's look at the pros and cons...`
        },
        {
          id: 5,
          title: 'Pros & Cons',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Simple, fast, deterministic</li>
                      <li>Improves downstream match rates</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Over-normalization may lose nuance</li>
                      <li>Locale-specific rules can be brittle</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a523d',
          notes: `### 5) String Normalization - Pros & Cons
Let's be honest about what string normalization can and can't do for you.

#### ✅ Pros
The good stuff is really good. String normalization is **simple to implement**—you can write the basic version in a few lines of code. It's **blazingly fast** because it's just string operations, no ML models or external calls needed. And it's **deterministic**, meaning the same input always gives the same output. That's huge for debugging and reproducibility.

The impact on downstream matching is significant. I've seen projects where proper normalization improved match rates by 20-30% before any fancy algorithms were applied.

#### ⚠️ Cons
The problems come from being too aggressive. **Over-normalization can lose important nuance**. For example, if you're dealing with brand names, "BlackBerry" and "Blackberry" might actually be meaningfully different in some contexts.

**Locale-specific rules are tricky**. Date formats vary wildly—is "01/02/2025" January 2nd or February 1st? It depends on whether you're in the US or Europe. These rules can be brittle and require careful handling.

#### 💡 The Takeaway
String normalization is your foundation, but don't expect it to solve everything. Use it as a first pass, and combine it with more sophisticated techniques when needed.

Now let's move to technique 2: Lowercasing and Unicode Normalization...`
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2) Lowercasing + Unicode Normalization',
      slides: [
        {
          id: 6,
          title: '2) Lowercasing + Unicode Normalization',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="rotateIn" delay={0.1}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Goal</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Make comparisons robust to case and Unicode variants
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={0.2}>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>
                        How It Works
                        <MermaidPopover
                          title="Unicode Normalization Process"
                          diagram={`flowchart TB
    A["📝 Input: café"] --> B{"Choose Form"}
    B -->|NFC| C["Composed: café"]
    B -->|NFKC| D["Compatible: cafe"]
    C --> E["🔤 Case Fold"]
    D --> E
    E --> F["✨ Normalized"]
    style A fill:#4fc3f7,color:#000
    style F fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Apply Unicode normalization (NFC/NFKC) and consistent case folding; optional accent/diacritic folding
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <GSAPAnimated animation="slideInBottom" delay={0.3}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Multilingual data; inputs with diacritics/compatibility characters; before tokenization or hashing
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.4}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Steps</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <ol style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Choose NFC (preserve) or NFKC (compatibility) per domain</li>
                      <li>Apply case folding (lower or locale-aware fold)</li>
                      <li>Optionally remove diacritics for matching only (keep raw form)</li>
                    </ol>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#52401a',
          notes: `### 6) Lowercasing + Unicode Normalization
Now we're getting into something that trips up a lot of developers—**Unicode handling**. This might seem technical, but understanding it will save you from some really frustrating bugs.

#### 🎯 The Goal
We want our string comparisons to be **robust to case differences and Unicode quirks**. "APPLE" and "apple" should match. But here's the tricky part: the character "é" can be represented in Unicode in two completely different ways, and they won't match unless you normalize them!

#### ⚙️ How It Works
\`\`\`mermaid
flowchart TB
    A["📝 Input: café"] --> B{"Choose Form"}
    B -->|NFC| C["Composed: café"]
    B -->|NFKC| D["Compatible: cafe"]
    C --> E["🔤 Case Fold"]
    D --> E
    E --> F["✨ Normalized"]
    style A fill:#4fc3f7,color:#000
    style F fill:#81c784,color:#000
\`\`\`

There are two main Unicode normalization forms you need to know. **NFC** (Canonical Composition) keeps characters composed—"é" stays as one character. **NFKC** (Compatibility Composition) goes further and converts things like "ﬁ" (the fi ligature) into separate "f" and "i" characters.

After Unicode normalization, you apply **case folding**. This is like lowercasing, but it handles special cases like the German "ß" properly.

#### 🌍 When to Use This?
Whenever you're working with **multilingual data** or data that might have diacritics, accents, or compatibility characters. This includes names from European languages, data from PDFs or Word documents (which love to use fancy characters), and anything dealing with international content.

#### 💡 Pro Tip
For matching purposes, you might want to **strip diacritics entirely**—turning "café" into "cafe". But always keep the original form stored separately, because for display purposes, you want the proper spelling!

Let's see the trade-offs...`
        },
        {
          id: 7,
          title: 'Pros & Cons',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="scaleIn" delay={0.1}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Large recall gains for minimal cost</li>
                      <li>Reduces false mismatches from encoding quirks</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.2}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>NFKC can alter semantics in niche cases</li>
                      <li>Case folding may harm brand/style-sensitive fields</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#52401a',
          notes: `### 7) Lowercasing + Unicode Normalization - Pros & Cons
Let's weigh the benefits against the potential issues.

#### ✅ Pros
The upside is substantial. You get **large recall gains for minimal computational cost**. Those weird encoding mismatches that cause false negatives? They go away. Data that was copied from different sources, websites, or documents suddenly starts matching correctly.

This is especially impactful when you're dealing with **international data**. Names like "José" and "Jose" will match. "Müller" and "Muller" will match. The gains can be dramatic.

#### ⚠️ Cons
NFKC can be too aggressive in some cases. For example, the trademark symbol "™" might get converted in unexpected ways. If you're in a domain where these compatibility characters have specific meanings, **NFC is the safer choice**.

Case folding can also cause problems in **brand-sensitive contexts**. "iPhone" becoming "iphone" might matter to someone. "BlackBerry" vs "blackberry"—again, context matters. For display, keep originals.

> Ask the audience: "Has anyone had a bug where two identical-looking strings didn't match?"

That's almost always a Unicode issue. Normalize first, compare after.

Now let's move on to something more flexible—Fuzzy Matching...`
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3) Fuzzy Matching (Edit Distance)',
      slides: [
        {
          id: 8,
          title: '3) Fuzzy Matching (Edit Distance)',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="bounceIn" delay={0.1}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Goal</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Match near-duplicates with typos or small variations
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.2}>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>
                        How It Works
                        <MermaidPopover
                          title="Edit Distance Concept"
                          diagram={`flowchart LR
    A["kitten"] --> B["🔄 sitten"]
    B --> C["🔄 sittin"]
    C --> D["🔄 sitting"]
    A --> E["Distance = 3"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffd700,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Compute Levenshtein/Damerau distance; accept if distance below threshold or normalized similarity above threshold
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Names, short strings, OCR/noisy text, deduplication
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Steps</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <ol style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Pre-normalize strings</li>
                      <li>Choose metric (Levenshtein, Damerau, Jaro-Winkler)</li>
                      <li>Calibrate thresholds per length</li>
                      <li>Index with BK-tree/Trigram index for scale</li>
                    </ol>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#521a1a',
          notes: `### 8) Fuzzy Matching (Edit Distance)
Now we're entering the world of **approximate matching**. This is where things get exciting because we can finally handle typos and small mistakes!

#### 🎯 The Goal
We want to match strings that are **close but not identical**. "Jon" and "John", "recieve" and "receive", "Microsoft Corp." and "Microsoft Corporation"—these should all be recognized as potential matches.

#### ⚙️ How It Works
\`\`\`mermaid
flowchart LR
    A["kitten"] --> B["🔄 sitten"]
    B --> C["🔄 sittin"]
    C --> D["🔄 sitting"]
    A --> E["Distance = 3"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffd700,color:#000
\`\`\`

The core concept is **edit distance**—how many operations (insert, delete, substitute) does it take to transform one string into another? "kitten" to "sitting" requires 3 changes, so the Levenshtein distance is 3.

There are variations too. **Damerau-Levenshtein** also counts transpositions (swapping adjacent characters) as a single operation, which is useful because "hte" → "the" is a super common typo. **Jaro-Winkler** gives extra weight to matching prefixes, which works well for names.

#### 📅 When to Use This?
Fuzzy matching shines with **short strings** like names, product codes, and addresses. It's perfect for **OCR text** where scanning errors introduce random character mistakes. And it's essential for **deduplication** where you're looking for near-duplicates in a dataset.

#### ⚡ Scaling Up
Raw edit distance is O(n×m), which gets slow for large datasets. Use **BK-trees** or **trigram indexes** to find candidates quickly, then compute exact distances only for promising pairs.

Let's look at the trade-offs...`
        },
        {
          id: 9,
          title: 'Pros & Cons',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="flipCard" delay={0.1}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Effective on short text and typos</li>
                      <li>Interpretable thresholds</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.2}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Sensitive to token order for multi-word strings</li>
                      <li>Can be slow without indexing; weak on semantics</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#521a1a',
          notes: `### 9) Fuzzy Matching - Pros & Cons
Fuzzy matching is powerful, but it has clear limitations you need to understand.

#### ✅ Pros
The big wins are in **handling typos and OCR errors**. A threshold of 1-2 edits catches most common mistakes. And the thresholds are **interpretable**—you can explain to stakeholders that "we allow up to 2 character differences."

For short strings like person names or product codes, edit distance works remarkably well. It's been used in production systems for decades.

#### ⚠️ Cons
Here's where it falls apart: **word order matters way too much**. "New York" and "York New" have an edit distance of 8, even though they're clearly related. For multi-word strings, you often need to tokenize first and compare token sets.

**Performance is another issue**. Computing edit distance for every pair in a million-record dataset is prohibitively expensive. You need indexing structures, which adds complexity.

And fundamentally, **edit distance knows nothing about meaning**. "Big" and "Large" have no special relationship according to edit distance, even though they're synonyms. For semantic similarity, we'll need different techniques.

#### 💡 The Takeaway
Use fuzzy matching for short strings with potential typos. Combine it with tokenization for multi-word entities. And don't expect it to understand semantics—that's what our later techniques are for!

Next up: Token-Based Similarity for handling those multi-word cases...`
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4) Token-Based Similarity (Jaccard / Cosine)',
      slides: [
        {
          id: 10,
          title: '4) Token-Based Similarity (Jaccard / Cosine)',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInTop" delay={0.1}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Goal</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Compare multi-word entities considering token overlap/weights
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInTop" delay={0.2}>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>
                        How It Works
                        <MermaidPopover
                          title="Token Similarity Comparison"
                          diagram={`flowchart TB
    A["'New York City'"] --> B["Tokenize"]
    C["'City of New York'"] --> B
    B --> D["{new, york, city}"]
    B --> E["{city, of, new, york}"]
    D --> F["Jaccard = 3/4 = 0.75"]
    E --> F
    style A fill:#4fc3f7,color:#000
    style C fill:#4fc3f7,color:#000
    style F fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Tokenize (words or n-grams); compute Jaccard overlap or TF-IDF cosine similarity
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Product titles, addresses, org/person names with multiple tokens
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Steps</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <ol style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Normalize + tokenize; optionally generate character n-grams</li>
                      <li>Build TF-IDF vectors; compute cosine or Jaccard</li>
                      <li>Apply thresholds; consider stopword removal</li>
                      <li>Use MinHash/LSH for approximate retrieval</li>
                    </ol>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#3b521a',
          notes: `### 10) Token-Based Similarity (Jaccard / Cosine)
This technique solves the word-order problem we just discussed. Instead of comparing strings character by character, we **break them into tokens and compare the sets**.

#### 🎯 The Goal
We want to handle **multi-word entities** where the order might vary or some words might be missing. "New York City" and "City of New York" should score high, even though they're quite different at the character level.

#### ⚙️ How It Works
\`\`\`mermaid
flowchart TB
    A["'New York City'"] --> B["Tokenize"]
    C["'City of New York'"] --> B
    B --> D["{new, york, city}"]
    B --> E["{city, of, new, york}"]
    D --> F["Jaccard = 3/4 = 0.75"]
    E --> F
    style A fill:#4fc3f7,color:#000
    style C fill:#4fc3f7,color:#000
    style F fill:#81c784,color:#000
\`\`\`

First, you **tokenize** the strings into words or n-grams. Then you compare using set operations. **Jaccard similarity** is simply the intersection divided by the union—what fraction of tokens do they share? 

For weighted comparisons, use **TF-IDF cosine similarity**. This gives more weight to rare, distinctive tokens and less weight to common words like "the" or "of".

#### 📅 When to Use This?
This is perfect for **product titles**, **company names**, **addresses**, and any multi-word entity. "Apple Inc." and "Apple Incorporated" share the important token "Apple", so they'll score well.

#### ⚡ Scaling Up
For large datasets, **MinHash and LSH** (Locality-Sensitive Hashing) let you find similar items without comparing every pair. This is how services like Google detect near-duplicate web pages.

Let's examine the trade-offs...`
        },
        {
          id: 11,
          title: 'Pros & Cons',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Captures partial overlaps; scalable with sparse vectors</li>
                      <li>Works well for medium-length strings</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Ignores token semantics; order mostly lost</li>
                      <li>Needs careful tokenization and stopword handling</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#3b521a',
          notes: `### 11) Token-Based Similarity - Pros & Cons
Let's be realistic about what token-based methods can and can't do.

#### ✅ Pros
Token-based similarity is **order-insensitive**, which is often exactly what you want. It captures **partial overlaps** gracefully—if two out of three tokens match, you still get a decent score.

The math works with **sparse vectors**, which means it scales well. You don't need to compare every token to every other token; efficient data structures handle it.

#### ⚠️ Cons
The big limitation is that it **ignores token semantics**. "Big" and "Large" are completely different tokens with no relationship, even though they mean the same thing. "NYC" and "New York City" share zero tokens, so they'd score 0 despite being the same place.

**Tokenization decisions matter a lot**. How do you handle hyphens? What about abbreviations? Stopword removal can help or hurt depending on your domain. "The Ohio State University" vs "Ohio State"—removing "The" helps, but what about "The Hague"?

#### 💡 The Takeaway
Use token-based similarity when word order varies and you want robust partial matching. Combine it with synonym expansion (technique 6) or embeddings (technique 8) to handle semantic similarity.

Next, let's look at dictionary-based lookup...`
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5) Dictionary / Gazetteer Lookup',
      slides: [
        {
          id: 12,
          title: '5) Dictionary / Gazetteer Lookup',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="fadeIn" delay={0.1}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Goal</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Map mentions to known canonical forms via lexicon
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.2}>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>
                        How It Works
                        <MermaidPopover
                          title="Gazetteer Lookup Flow"
                          diagram={`flowchart LR
    A["📝 'aspirin'"] --> B["🔍 Lookup"]
    B --> C["📚 Gazetteer"]
    C --> D["✅ ID: NDC-12345"]
    B --> E["⚠️ Not Found"]
    E --> F["Fuzzy Match?"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffcdd2,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Exact/normalized lookup in curated lists; multiword matching via tries/Aho–Corasick
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Closed-world domains (medications, locations, SKUs) or high-precision passes
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Steps</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <ol style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Build/ingest gazetteers with IDs and aliases</li>
                      <li>Pre-normalize mentions; run exact and relaxed lookups</li>
                      <li>Handle multiword longest-match and overlaps</li>
                      <li>Track versioning and provenance</li>
                    </ol>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a3152',
          notes: `### 12) Dictionary / Gazetteer Lookup
Now we're entering the world of **curated knowledge**. A gazetteer is essentially a fancy dictionary that maps mentions to canonical entities. Think of it as a lookup table with superpowers.

#### 🎯 The Goal
We want to use **pre-existing knowledge** to map mentions to their correct identifiers. If you have a list of all valid medication names, all city names, or all product SKUs, why not just look them up directly?

#### ⚙️ How It Works
\`\`\`mermaid
flowchart LR
    A["📝 'aspirin'"] --> B["🔍 Lookup"]
    B --> C["📚 Gazetteer"]
    C --> D["✅ ID: NDC-12345"]
    B --> E["⚠️ Not Found"]
    E --> F["Fuzzy Match?"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffcdd2,color:#000
\`\`\`

The process is straightforward. You have a curated dictionary with entity names and their canonical IDs. When you see a mention, you normalize it and look it up. For **multi-word entities**, algorithms like Aho-Corasick or trie structures let you efficiently find the longest matching entry.

#### 📅 When to Use This?
Gazetteers are perfect for **closed-world domains** where you have a finite, known set of valid entities. Medications, geographic locations, product catalogs, company names—if you can enumerate all valid values, a gazetteer works brilliantly.

They're also great as a **high-precision first pass**. Even if your gazetteer doesn't cover everything, what it does match is usually correct.

#### 📋 Practical Tips
Keep your gazetteers **versioned**. Entities change over time—companies merge, drugs get renamed, locations change boundaries. You need to know which version of the gazetteer was used for each match.

Let's look at the trade-offs...`
        },
        {
          id: 13,
          title: 'Pros & Cons',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="bounceIn" delay={0.1}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>High precision; deterministic; explainable</li>
                      <li>Fast with proper indexing</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.2}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Coverage gaps; requires maintenance</li>
                      <li>Ambiguity remains if multiple entries match</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a3152',
          notes: `### 13) Dictionary / Gazetteer Lookup - Pros & Cons
Gazetteers are wonderful tools, but they come with their own challenges.

#### ✅ Pros
When a gazetteer match succeeds, it's usually **high precision**. You looked up an exact entry in a curated list—that's hard to argue with. The results are **deterministic and explainable**: "We matched because this entry exists in our medication database."

With proper data structures like hash maps or tries, lookup is **extremely fast**—O(1) or O(length of string). You can process millions of records quickly.

#### ⚠️ Cons
The fundamental problem is **coverage**. Your gazetteer only knows what you've put in it. New entities, misspellings, and variations you didn't anticipate will be missed. This requires **ongoing maintenance** as your domain evolves.

**Ambiguity is another issue**. What if "Apple" is in your gazetteer as both a fruit and a company? You need additional disambiguation logic. What if both "NYC" and "New York City" are entries? You need overlap resolution rules.

#### 💡 Best Practice
Use gazetteers as your **first pass** for high-confidence matches. Then apply fuzzy matching or ML techniques to handle what the gazetteer missed. This layered approach gives you the best of both worlds.

Next, let's extend this idea with Synonym and Alias Mapping...`
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6) Synonym / Alias Mapping',
      slides: [
        {
          id: 14,
          title: '6) Synonym / Alias Mapping',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Goal</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Resolve variant names and abbreviations to a canonical ID
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>
                        How It Works
                        <MermaidPopover
                          title="Synonym Mapping"
                          diagram={`flowchart TB
    A["NYC"] --> E["🏙️ New York City"]
    B["Big Apple"] --> E
    C["New York, NY"] --> E
    D["N.Y.C."] --> E
    E --> F["ID: geo_nyc_001"]
    style E fill:#e1bee7,color:#000
    style F fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Curated synonym tables, redirects, and alias expansions
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <GSAPAnimated animation="scaleIn" delay={0.3}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Brand/product/person aliases; medical or financial abbreviations
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.4}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Steps</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <ol style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Harvest aliases from logs, KB redirects, standards</li>
                      <li>Normalize and de-duplicate alias lists</li>
                      <li>Apply expansion during candidate generation</li>
                      <li>Add conflict resolution rules (e.g., context filters)</li>
                    </ol>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#521a3c',
          notes: `### 14) Synonym / Alias Mapping
This is the natural extension of gazetteers—instead of just having one name per entity, we map **multiple aliases** to the same canonical form.

#### 🎯 The Goal
We want to handle all the different ways people refer to the same thing. "NYC", "New York City", "Big Apple", "New York, NY"—they should all resolve to the same entity ID.

#### ⚙️ How It Works
\`\`\`mermaid
flowchart TB
    A["NYC"] --> E["🏙️ New York City"]
    B["Big Apple"] --> E
    C["New York, NY"] --> E
    D["N.Y.C."] --> E
    E --> F["ID: geo_nyc_001"]
    style E fill:#e1bee7,color:#000
    style F fill:#81c784,color:#000
\`\`\`

You build a **synonym table** where each entity has a list of known aliases. When you encounter a mention, you check if it matches any alias and retrieve the canonical form. Wikipedia redirects are a classic source—"USA" redirects to "United States", teaching us that these are synonyms.

#### 📅 When to Use This?
Synonym mapping is essential for **domain-specific abbreviations**. In medicine, "MI" might mean "myocardial infarction" or "Michigan" depending on context. In finance, "JPM" maps to "JPMorgan Chase". For products, "iPhone 15" and "Apple iPhone 15" are the same thing.

#### 📋 Building Your Synonym Lists
Great sources include **search logs** (what people search for when they click on an entity), **Wikipedia/Wikidata redirects**, and **industry standards** (drug names, stock tickers). But don't just harvest blindly—curate and validate!

Let's examine the trade-offs...`
        },
        {
          id: 15,
          title: 'Pros & Cons',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="rotateIn" delay={0.1}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Big recall boost with minimal compute</li>
                      <li>Transparent and auditable</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={0.2}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Manual upkeep; drift over time</li>
                      <li>Ambiguity if alias maps to multiple entities</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#521a3c',
          notes: `### 15) Synonym / Alias Mapping - Pros & Cons
Synonym tables are incredibly useful, but they require care.

#### ✅ Pros
The **recall boost is huge**. Suddenly you're catching all those abbreviations and alternate names that would otherwise be missed. And it's computationally cheap—just a lookup!

Everything is **transparent and auditable**. You can show stakeholders exactly why "IBM" was mapped to "International Business Machines"—because it's in your synonym table.

#### ⚠️ Cons
**Maintenance is the killer**. Synonym lists drift over time. New products launch, companies rebrand, slang evolves. If you don't keep updating, your coverage degrades.

**Ambiguous aliases are tricky**. "Apple" could be the company or the fruit. "Java" could be the programming language, the island, or coffee. You often need **context-aware rules** to disambiguate, which takes us to our next technique.

> Ask the audience: "What's the most frustrating alias collision you've encountered in your data?"

#### 💡 Pro Tip
Track which aliases are actually being used in your data. Many manually created synonyms never get matched. Focus your maintenance effort on high-impact entries.

Next, let's look at Rule-Based Context Matching for handling those ambiguous cases...`
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7) Rule-Based Context Matching',
      slides: [
        {
          id: 16,
          title: '7) Rule-Based Context Matching',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Goal</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Use deterministic patterns and context to disambiguate
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>
                        How It Works
                        <MermaidPopover
                          title="Rule-Based Context Flow"
                          diagram={`flowchart TB
    A["'Apple announced...'"] --> B["Check Context"]
    B --> C{"Nearby: 'CEO', 'iPhone'?"}
    C -->|Yes| D["🏢 Apple Inc."]
    C -->|No| E{"Nearby: 'fruit', 'orchard'?"}
    E -->|Yes| F["🍎 Apple fruit"]
    E -->|No| G["⚠️ Ambiguous"]
    style D fill:#81c784,color:#000
    style F fill:#81c784,color:#000
    style G fill:#ffcdd2,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Regex/patterns, windowed context rules, feature predicates (e.g., nearby types, sections)
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <GSAPAnimated animation="slideInBottom" delay={0.3}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Structured documents, forms, logs; compliance settings needing explainability
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.4}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Steps</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <ol style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Define patterns and context windows (e.g., 50 chars)</li>
                      <li>Add constraints (section headers, labels, units)</li>
                      <li>Assign scores/weights; combine with other signals</li>
                      <li>Test with rule coverage and false-positive analysis</li>
                    </ol>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1c52',
          notes: `### 16) Rule-Based Context Matching
Now we're adding **intelligence** to our matching. Instead of just looking at the entity mention itself, we look at what's around it to figure out the correct interpretation.

#### 🎯 The Goal
We want to **disambiguate using context**. When we see "Apple" in text, we look at the surrounding words. If we see "iPhone", "CEO", or "stock price" nearby, it's probably the company. If we see "pie", "orchard", or "fruit", it's probably the food.

#### ⚙️ How It Works
\`\`\`mermaid
flowchart TB
    A["'Apple announced...'"] --> B["Check Context"]
    B --> C{"Nearby: 'CEO', 'iPhone'?"}
    C -->|Yes| D["🏢 Apple Inc."]
    C -->|No| E{"Nearby: 'fruit', 'orchard'?"}
    E -->|Yes| F["🍎 Apple fruit"]
    E -->|No| G["⚠️ Ambiguous"]
    style D fill:#81c784,color:#000
    style F fill:#81c784,color:#000
    style G fill:#ffcdd2,color:#000
\`\`\`

You define **context windows**—maybe 50 characters before and after the mention. Then you write rules: "If the section header is 'Tech News', boost confidence for tech companies." "If the word 'mg' appears nearby, this is probably a medication."

#### 📅 When to Use This?
Rule-based context matching shines in **structured documents** like forms, medical records, and financial reports. The structure gives you reliable context signals. It's also essential in **regulated industries** where you need to explain your disambiguation decisions.

#### 💡 Practical Tips
Start with high-precision rules that fire rarely but are almost always correct. Then add more rules for coverage. Test your rules with **coverage analysis**—what percentage of cases does each rule handle? Watch for **false positives** carefully.

Let's see the trade-offs...`
        },
        {
          id: 17,
          title: 'Pros & Cons',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Highly interpretable; fast; no training data required</li>
                      <li>Good for edge cases and regulated domains</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Brittle to format changes; limited generalization</li>
                      <li>Hard to scale/maintain large rule sets</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a1c52',
          notes: `### 17) Rule-Based Context Matching - Pros & Cons
Rules are powerful but come with significant maintenance challenges.

#### ✅ Pros
Rules are **completely interpretable**. You can explain exactly why a decision was made. "We classified this as Apple Inc. because the word 'iPhone' appeared within 30 characters." That's hugely valuable for compliance and debugging.

They're also **fast**—pattern matching is cheap. And you don't need labeled training data to get started; you can write rules from domain knowledge.

#### ⚠️ Cons
Rules are **brittle**. If the document format changes, your rules break. If someone writes "the iPhone maker" instead of mentioning "iPhone" directly, your rule might miss it.

**Scaling is hard**. As you add more rules, they start interacting in unexpected ways. Rule A might fire when Rule B shouldn't, or vice versa. Managing hundreds of rules becomes a maintenance nightmare.

#### 💡 The Takeaway
Use rules for **high-value edge cases** and **regulatory requirements** where you need explainability. But don't try to build your entire system on rules—that doesn't scale. Combine with ML techniques for broader coverage.

Now let's enter the machine learning territory with Embedding-Based Similarity...`
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8) Embedding-Based Similarity Matching',
      slides: [
        {
          id: 18,
          title: '8) Embedding-Based Similarity Matching',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Goal</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Capture semantic similarity beyond surface form
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>
                        How It Works
                        <MermaidPopover
                          title="Embedding Similarity Flow"
                          diagram={`flowchart LR
    A["'NYC'"] --> B["Embed"]
    C["'New York City'"] --> D["Embed"]
    B --> E["[0.2, 0.8, ...]"]
    D --> F["[0.19, 0.81, ...]"]
    E --> G{"Cosine > 0.9?"}
    F --> G
    G -->|Yes| H["✅ MATCH"]
    style E fill:#4fc3f7,color:#000
    style F fill:#4fc3f7,color:#000
    style H fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Encode mentions/context into vectors (word/sentence embeddings); compare via cosine; ANN for retrieval
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <GSAPAnimated animation="bounceIn" delay={0.3}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Long/semantically rich mentions; cross-lingual or paraphrases
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.4}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Steps</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <ol style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Select embedding model (SBERT, multilingual, domain-tuned)</li>
                      <li>Build vector index (HNSW/FAISS); store entity vectors</li>
                      <li>Generate candidates via ANN; rerank with additional signals</li>
                      <li>Periodically refresh embeddings</li>
                    </ol>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a524a',
          notes: `### 18) Embedding-Based Similarity Matching
Welcome to the **machine learning** side of entity normalization! This is where things get really powerful.

#### 🎯 The Goal
String matching only looks at characters. But "NYC" and "New York City" share zero character n-grams! Embeddings solve this by capturing **semantic meaning**. Words that mean the same thing end up close together in vector space, regardless of spelling.

#### ⚙️ How It Works
\`\`\`mermaid
flowchart LR
    A["'NYC'"] --> B["Embed"]
    C["'New York City'"] --> D["Embed"]
    B --> E["[0.2, 0.8, ...]"]
    D --> F["[0.19, 0.81, ...]"]
    E --> G{"Cosine > 0.9?"}
    F --> G
    G -->|Yes| H["✅ MATCH"]
    style E fill:#4fc3f7,color:#000
    style F fill:#4fc3f7,color:#000
    style H fill:#81c784,color:#000
\`\`\`

You use a **neural encoder** (like a sentence transformer) to convert text into dense vectors. "NYC" becomes [0.2, 0.8, ...] and "New York City" becomes [0.19, 0.81, ...]. Because they mean the same thing, their vectors are nearly identical.

#### 📅 When to Use This?
Embeddings excel at:
- **Cross-lingual matching**: "München" ↔ "Munich" 
- **Abbreviations**: "MIT" ↔ "Massachusetts Institute of Technology"
- **Semantic variations**: "heart attack" ↔ "myocardial infarction"

#### 💡 Implementation Tips
Pre-embed all your canonical entities into a vector database. At runtime, embed the mention and do ANN search to find candidates quickly. Use FAISS, Pinecone, or Milvus for scale.

Let's look at the trade-offs...`
        },
        {
          id: 19,
          title: 'Pros & Cons',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="flipCard" delay={0.1}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Handles paraphrase, synonyms, cross-lingual cases</li>
                      <li>Scales with ANN; robust to noise</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.2}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Less interpretable; model drift</li>
                      <li>Requires GPU/compute and monitoring</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a524a',
          notes: `### 19) Embedding-Based Similarity - Pros & Cons
Embeddings are powerful but require careful calibration.

#### ✅ Pros
**Semantic understanding** is the killer feature. Embeddings capture meaning, not just characters. "Dr." and "Doctor" are recognized as equivalent. "IBM" and "International Business Machines" cluster together.

**Cross-lingual support** comes almost free with multilingual models. "企业" (Chinese for "enterprise") maps near "enterprise" in vector space.

#### ⚠️ Cons
**Interpretability is limited**. Why did the model think these two entities match? The embedding is a black box of 768 numbers.

**Model drift** is real. If you update your embedding model, all your vectors change. You need to re-embed everything and update your indexes.

**Threshold tuning** is tricky. What similarity score means "match"? 0.85? 0.92? It varies by domain and entity type.

#### 💡 Best Practice
Combine embeddings with **other signals**. Use context, entity types, and confidence scores together. Embeddings are great for candidate generation, but often need filtering afterward.

Next up: Entity Linking with Knowledge Bases...`
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9) Entity Linking with Knowledge Bases (e.g., Wikidata)',
      slides: [
        {
          id: 20,
          title: '9) Entity Linking with Knowledge Bases (e.g., Wikidata)',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Goal</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Link mentions to KB nodes with IDs and rich metadata
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>
                        How It Works
                        <MermaidPopover
                          title="Entity Linking Pipeline"
                          diagram={`flowchart LR
    A["'Apple'"] --> B["Candidates"]
    B --> C["Apple Inc. Q312"]
    B --> D["Apple fruit Q89"]
    C --> E["Context: 'iPhone'"]
    D --> E
    E --> F{"Best Match"}
    F --> G["🏢 Q312"]
    style C fill:#4fc3f7,color:#000
    style D fill:#4fc3f7,color:#000
    style G fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Candidate generation (surface forms); rank using context, priors, and KB features (types, relations)
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <GSAPAnimated animation="scaleIn" delay={0.3}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Open-domain text; enrichment with facts; downstream reasoning
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.4}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Steps</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <ol style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Build alias tables and priors from KB</li>
                      <li>Generate candidates; filter by type constraints</li>
                      <li>Rank with context encoders + priors</li>
                      <li>Output KB ID with confidence; log NIL cases</li>
                    </ol>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#4d521a',
          notes: `### 20) Entity Linking with Knowledge Bases
Now we're connecting our entities to the **world's knowledge**. This is where NLP meets the semantic web.

#### 🎯 The Goal
We want to link text mentions to entries in a **knowledge base** like Wikidata, Wikipedia, or a domain-specific KB. Instead of just normalizing "Apple" to "apple", we link it to \`Q312\` (Apple Inc.) in Wikidata, giving us access to all its properties.

#### ⚙️ How It Works
\`\`\`mermaid
flowchart LR
    A["'Apple'"] --> B["Candidates"]
    B --> C["Apple Inc. Q312"]
    B --> D["Apple fruit Q89"]
    C --> E["Context: 'iPhone'"]
    D --> E
    E --> F{"Best Match"}
    F --> G["🏢 Q312"]
    style C fill:#4fc3f7,color:#000
    style D fill:#4fc3f7,color:#000
    style G fill:#81c784,color:#000
\`\`\`

The process has three stages:
1. **Candidate generation**: Find all KB entries that could match the mention (using alias tables)
2. **Ranking**: Score each candidate based on context similarity, prior probability, and type constraints
3. **Output**: Return the best match or NIL if nothing fits

#### 📅 When to Use This?
Entity linking is essential for **open-domain text** where entities could be anything—people, places, organizations, products. It's also valuable when you need **enrichment**—linking to Wikidata gives you birth dates, headquarters locations, relationships, and more.

#### 💡 Key Concepts
**Priors** matter a lot! "Paris" is mentioned 1000x more often referring to the city than Paris Hilton. Use frequency information from Wikipedia anchor texts.

Let's examine the trade-offs...`
        },
        {
          id: 21,
          title: 'Pros & Cons',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Strong coverage; rich disambiguation signals</li>
                      <li>Enables reasoning and enrichment</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>KB incompleteness/lag; NIL handling needed</li>
                      <li>Heavier infra and maintenance</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#4d521a',
          notes: `### 21) Entity Linking - Pros & Cons
Knowledge bases are incredibly powerful, but they come with infrastructure overhead.

#### ✅ Pros
**Rich disambiguation signals**: The KB knows that Apple Inc. is a company, has Tim Cook as CEO, and makes iPhones. All that context helps you disambiguate.

**Enrichment is free**: Once you link to Wikidata, you can pull in revenue figures, founding dates, headquarters locations—without storing it yourself.

**Enables downstream reasoning**: You can ask "Show me all companies in California mentioned in this document" by following KB relationships.

#### ⚠️ Cons
**Incompleteness**: Not everything is in Wikipedia. New companies, niche products, and domain-specific entities may not exist in public KBs.

**KB lag**: Wikidata is updated by volunteers. A company might rebrand or merge, and the KB won't reflect it for months.

**NIL handling is tricky**: What do you do when your entity isn't in the KB? You need a separate process for "not in knowledge base" cases.

#### 💡 Pro Tips
Combine public KBs (Wikidata) with **domain-specific KBs** for coverage. Always have a NIL detection strategy. Consider building a **private KB extension** for entities unique to your domain.

Next: Graph-Based Entity Disambiguation...`
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10) Graph-Based Entity Disambiguation',
      slides: [
        {
          id: 22,
          title: '10) Graph-Based Entity Disambiguation',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Goal</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Resolve mentions collectively using graph coherence
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>
                        How It Works
                        <MermaidPopover
                          title="Graph Coherence"
                          diagram={`graph TD
    M1["'Apple'"] --> A1["Apple Inc."]
    M1 --> A2["Apple fruit"]
    M2["'Tim Cook'"] --> B1["Tim Cook CEO"]
    A1 --- B1
    style A1 fill:#81c784,color:#000
    style B1 fill:#81c784,color:#000
    style A2 fill:#ffcdd2,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Build a graph of mentions and candidate entities; optimize global consistency via edges (co-occurrence, relations)
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <GSAPAnimated animation="bounceIn" delay={0.3}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Documents with multiple related mentions; news, scientific papers
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.4}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Steps</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <ol style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Construct mention–candidate and entity–entity edges</li>
                      <li>Define coherence scores (compatibility, relatedness)</li>
                      <li>Run collective inference (MST, loopy BP, ILP)</li>
                      <li>Select globally optimal assignment</li>
                    </ol>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#3c1a52',
          notes: `### 22) Graph-Based Entity Disambiguation
Now we're thinking about entities **collectively**, not one at a time. This is a game-changer for accuracy.

#### 🎯 The Goal
Instead of disambiguating each mention independently, we look at **all mentions in the document together**. If a document mentions "Apple" and "Tim Cook", those two mentions constrain each other—it's almost certainly Apple Inc., not the fruit.

#### ⚙️ How It Works
\`\`\`mermaid
graph TD
    M1["'Apple'"] --> A1["Apple Inc."]
    M1 --> A2["Apple fruit"]
    M2["'Tim Cook'"] --> B1["Tim Cook CEO"]
    A1 --- B1
    style A1 fill:#81c784,color:#000
    style B1 fill:#81c784,color:#000
    style A2 fill:#ffcdd2,color:#000
\`\`\`

You build a graph where mentions connect to their candidate entities, and entities connect to each other based on KB relationships. Then you run **collective inference** to find the assignment that maximizes global coherence.

If "Apple Inc." and "Tim Cook" are connected in the knowledge base (CEO relationship), choosing both gives a high coherence score. Choosing "Apple fruit" breaks that coherence.

#### 📅 When to Use This?
Graph-based methods shine in **news articles** and **scientific papers** where entities are related. "Einstein" and "relativity" mentioned together? That disambiguates both. In contrast, random product reviews with unrelated entities benefit less.

#### 🔬 Inference Methods
Options include **Maximum Spanning Tree** (simple), **Loopy Belief Propagation** (probabilistic), and **Integer Linear Programming** (optimal but slow). Start simple!

Let's look at the trade-offs...`
        },
        {
          id: 23,
          title: 'Pros & Cons',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="rotateIn" delay={0.1}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Improves accuracy via mutual constraints</li>
                      <li>Robust to local ambiguities</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={0.2}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>More complex and compute-heavy</li>
                      <li>Requires good edge weighting and tuning</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#3c1a52',
          notes: `### 23) Graph-Based Disambiguation - Pros & Cons
Collective inference is powerful, but adds complexity.

#### ✅ Pros
**Mutual constraints** dramatically improve accuracy. Entities that co-occur frequently in your KB reinforce each other's disambiguation. Errors in one mention can be corrected by strong signals from related mentions.

**Robust to local ambiguity**: Even if one mention is highly ambiguous by itself, other mentions in the document can disambiguate it.

#### ⚠️ Cons
**Computational complexity**: You're now optimizing over all mentions simultaneously. For long documents with many entities, this can be expensive.

**Edge weighting is tricky**: How do you score entity-entity relatedness? Wikipedia link overlap? Embedding similarity? Path length in the KB? Each choice affects results differently.

**Error propagation**: If you get one high-influence entity wrong, it can cascade and cause errors in related entities.

#### 💡 Practical Advice
Start with **pairwise similarity** based on Wikipedia co-occurrence—it's simple and works well. Use graph-based methods as a **reranking layer** on top of simpler candidate generation.

Next: PageRank-Based Disambiguation...`
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11) PageRank / Centrality-Based Disambiguation',
      slides: [
        {
          id: 24,
          title: '11) PageRank / Centrality-Based Disambiguation',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInTop" delay={0.1}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Goal</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Prioritize entities central to the context subgraph
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInTop" delay={0.2}>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>
                        How It Works
                        <MermaidPopover
                          title="PageRank Centrality"
                          diagram={`graph LR
    A["Entity A<br/>PR: 0.35"] --> B["Entity B<br/>PR: 0.15"]
    A --> C["Entity C<br/>PR: 0.25"]
    B --> C
    D["Entity D<br/>PR: 0.25"] --> C
    style A fill:#81c784,color:#000
    style C fill:#4fc3f7,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Build candidate subgraph; compute PageRank or centrality to pick most influential nodes
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <GSAPAnimated animation="scaleIn" delay={0.3}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Dense KBs; when relational context is informative
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.4}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Steps</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <ol style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Build subgraph from candidates and KB links</li>
                      <li>Choose centrality (PageRank, degree, betweenness)</li>
                      <li>Combine centrality with mention similarity</li>
                      <li>Select top-scoring candidates per mention</li>
                    </ol>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#521a3f',
          notes: `### 24) PageRank / Centrality-Based Disambiguation
This technique borrows an idea from Google's original search algorithm to help with entity disambiguation.

#### 🎯 The Goal
We want to prefer entities that are **"central" to the document's topic**. If a document is about technology, Apple Inc. should get more weight than the fruit because it's more connected to other tech entities in the knowledge graph.

#### ⚙️ How It Works
\`\`\`mermaid
graph LR
    A["Entity A<br/>PR: 0.35"] --> B["Entity B<br/>PR: 0.15"]
    A --> C["Entity C<br/>PR: 0.25"]
    B --> C
    D["Entity D<br/>PR: 0.25"] --> C
    style A fill:#81c784,color:#000
    style C fill:#4fc3f7,color:#000
\`\`\`

You build a subgraph containing all candidate entities and their KB relationships. Then you run **PageRank** (or another centrality measure) to score each entity. Entities that are well-connected to other candidates get higher scores.

The intuition: If many other candidate entities "vote for" Apple Inc. by being connected to it, it's probably the right interpretation.

#### 📅 When to Use This?
PageRank works well when you have a **dense knowledge base** with rich relationships. It's especially useful for **topically coherent documents** like news articles or research papers.

#### 🔢 Centrality Options
- **PageRank**: Considers both direct and indirect connections
- **Degree centrality**: Simple count of connections
- **Betweenness**: Entities that bridge different clusters

Let's examine the trade-offs...`
        },
        {
          id: 25,
          title: 'Pros & Cons',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Simple, effective graph signal</li>
                      <li>Unsupervised; few dependencies</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Biased to popular entities</li>
                      <li>Needs careful combination with local evidence</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#521a3f',
          notes: `### 25) PageRank/Centrality - Pros & Cons
Centrality is elegant, but popularity bias is real.

#### ✅ Pros
**Simplicity**: PageRank is a well-understood algorithm. Once you have the subgraph, computing centrality is straightforward.

**Unsupervised**: No training data needed. Just the knowledge base structure.

**Effective signal**: In practice, central entities are often the correct ones. Documents tend to be about well-known, well-connected things.

#### ⚠️ Cons
**Popularity bias** is the main concern. PageRank favors entities with many connections—which often means famous entities. "Paris" almost always resolves to the city, even when Paris Hilton might be correct.

For **niche domains** or **long-tail entities**, centrality can mislead you. A document about a small startup won't have its entities well-connected in Wikipedia.

#### 💡 Mitigation Strategies
**Combine centrality with local evidence**. Use mention similarity and context as the primary signal, and PageRank as a secondary tiebreaker. You can also use **personalized PageRank** seeded from high-confidence entities.

Next: Domain-Specific Ontology Mapping...`
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12) Domain-Specific Ontology Mapping',
      slides: [
        {
          id: 26,
          title: '12) Domain-Specific Ontology Mapping',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Goal</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Map mentions to controlled vocabularies (e.g., UMLS, SNOMED, ICD, MeSH, NAICS)
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>
                        How It Works
                        <MermaidPopover
                          title="Ontology Hierarchy"
                          diagram={`graph TD
    A["🏥 Disease"] --> B["Cardiovascular"]
    A --> C["Respiratory"]
    B --> D["Hypertension<br/>ICD: I10"]
    B --> E["Heart Failure<br/>ICD: I50"]
    C --> F["Asthma<br/>ICD: J45"]
    style D fill:#81c784,color:#000
    style E fill:#81c784,color:#000
    style F fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Use ontology synonyms, IDs, and hierarchies; apply constraints by type and relations
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <GSAPAnimated animation="bounceIn" delay={0.3}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Regulated domains (health, finance), analytics requiring standard codes
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.4}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Steps</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <ol style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Ingest ontology terms, synonyms, CUIs/IDs</li>
                      <li>Normalize mentions; run exact + fuzzy + context filters</li>
                      <li>Enforce type/hierarchy constraints</li>
                      <li>Log ambiguous/NIL cases for curation</li>
                    </ol>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a4652',
          notes: `### 26) Domain-Specific Ontology Mapping
Now we're talking about **specialized knowledge** for specific industries. This is where the real precision lives.

#### 🎯 The Goal
In healthcare, finance, and other regulated domains, you don't just want to normalize entities—you want to map them to **official standard codes**. "Heart attack" should become ICD-10 code I21. "Aspirin" should become its NDC drug code.

#### ⚙️ How It Works
\`\`\`mermaid
graph TD
    A["🏥 Disease"] --> B["Cardiovascular"]
    A --> C["Respiratory"]
    B --> D["Hypertension<br/>ICD: I10"]
    B --> E["Heart Failure<br/>ICD: I50"]
    C --> F["Asthma<br/>ICD: J45"]
    style D fill:#81c784,color:#000
    style E fill:#81c784,color:#000
    style F fill:#81c784,color:#000
\`\`\`

Domain ontologies like **UMLS** (medical), **SNOMED CT** (clinical terms), or **NAICS** (industry codes) provide:
- Standardized identifiers
- Hierarchical relationships (asthma IS-A respiratory disease)
- Rich synonym lists curated by experts

You match mentions against these ontologies using exact lookup, fuzzy matching, and type constraints.

#### 📅 When to Use This?
**Regulatory compliance** demands standard codes. Healthcare billing requires ICD codes. Clinical trials need SNOMED mappings. Financial reporting uses industry classifications.

#### 💡 Practical Reality
Ontology mapping is **hard but essential**. You'll combine multiple techniques: exact match first, then fuzzy matching, then embeddings for edge cases. The hierarchy helps disambiguate—"cold" in a respiratory context means illness, not temperature.

Let's examine the trade-offs...`
        },
        {
          id: 27,
          title: 'Pros & Cons',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="flipCard" delay={0.1}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>High precision; interoperability; governance</li>
                      <li>Hierarchies aid disambiguation</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.2}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Licensing/updates; coverage gaps</li>
                      <li>Requires domain expertise</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a4652',
          notes: `### 27) Ontology Mapping - Pros & Cons
Ontologies are the gold standard for precision, but they require investment.

#### ✅ Pros
**Precision and interoperability**: When you map to SNOMED or ICD codes, your data becomes interoperable with the entire healthcare industry. Research, billing, analytics—everyone speaks the same language.

**Hierarchies aid disambiguation**: If you know you're in a "medication" context, you can constrain matches to the pharmaceutical branch of your ontology. This eliminates many false positives.

**Expert-curated synonyms**: Medical ontologies like UMLS have been refined over decades. Their synonym lists are comprehensive and accurate.

#### ⚠️ Cons
**Licensing and cost**: Some ontologies (like SNOMED) require expensive licenses. UMLS requires registration.

**Coverage gaps**: Ontologies may not include new drugs, emerging diseases, or industry-specific jargon. You'll need to extend them.

**Domain expertise required**: You need clinicians, pharmacists, or domain experts to validate mappings and handle edge cases.

#### 💡 Pro Tip
Build a **feedback loop** where ambiguous or NIL cases get reviewed by domain experts and added to your ontology extensions over time.

Next: The cutting edge—LLM-Based Entity Disambiguation...`
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13) LLM-Based Entity Disambiguation',
      slides: [
        {
          id: 28,
          title: '13) LLM-Based Entity Disambiguation',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Goal</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Use large language models to resolve ambiguous mentions with context
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>
                        How It Works
                        <MermaidPopover
                          title="LLM Disambiguation Flow"
                          diagram={`flowchart LR
    A["Context + Mention"] --> B["🤖 LLM"]
    C["Candidates + KB facts"] --> B
    B --> D["Entity: Apple Inc."]
    B --> E["Confidence: 0.95"]
    D --> F["✅ Grounded"]
    style B fill:#e1bee7,color:#000
    style D fill:#81c784,color:#000
    style F fill:#4fc3f7,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Prompt or fine-tune LLMs; optionally RAG to fetch KB snippets; tools for candidate lookup and grounding
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <GSAPAnimated animation="scaleIn" delay={0.3}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Few-shot/zero-shot settings; complex context; long documents
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.4}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Steps</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <ol style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Define schema and grounding strategy (closed set vs. open)</li>
                      <li>Build prompts with mention + context + candidates</li>
                      <li>Add RAG retrieval and tool-use for KB facts</li>
                      <li>Calibrate outputs with confidence and guardrails</li>
                    </ol>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#523b1a',
          notes: `### 28) LLM-Based Entity Disambiguation
Welcome to the **frontier** of entity disambiguation! Large Language Models are changing the game.

#### 🎯 The Goal
LLMs can read context like humans do. Instead of encoding rules or training specialized models, we can simply **ask the LLM** to disambiguate. "Given this paragraph about tech stocks, does 'Apple' refer to the company or the fruit?"

#### ⚙️ How It Works
\`\`\`mermaid
flowchart LR
    A["Context + Mention"] --> B["🤖 LLM"]
    C["Candidates + KB facts"] --> B
    B --> D["Entity: Apple Inc."]
    B --> E["Confidence: 0.95"]
    D --> F["✅ Grounded"]
    style B fill:#e1bee7,color:#000
    style D fill:#81c784,color:#000
    style F fill:#4fc3f7,color:#000
\`\`\`

You build a prompt containing:
- The mention and its surrounding context
- A list of candidate entities (optional but recommended)
- KB snippets retrieved via RAG (for grounding)

The LLM returns its choice with an explanation. For structured output, you can use function calling or JSON mode.

#### 📅 When to Use This?
LLMs excel in **complex, nuanced contexts** where rules fail. Long documents with subtle coreference. Sarcasm, irony, or implicit references. Cases where world knowledge matters.

They're also great for **rapid prototyping**—no training data needed, just iterate on prompts.

#### 💡 Critical: Grounding
LLMs can hallucinate! Always provide **candidate lists** from your KB. Use RAG to ground responses. Verify outputs against known entities.

Let's examine the trade-offs...`
        },
        {
          id: 29,
          title: 'Pros & Cons',
          content: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Strong in complex, long-context cases</li>
                      <li>Rapid adaptation with prompting</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="xl" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Cost/latency; potential hallucinations</li>
                      <li>Needs grounding, evaluation, and privacy controls</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#523b1a',
          notes: `### 29) LLM-Based Disambiguation - Pros & Cons
LLMs are powerful but come with significant operational considerations.

#### ✅ Pros
**Long-context understanding**: LLMs can read entire documents and use distant context for disambiguation. A mention on page 5 can be resolved using information from page 1.

**Rapid iteration**: No training required. Just update your prompts and test. You can adapt to new domains in hours, not weeks.

**World knowledge**: LLMs know a lot! They understand that Tim Cook is Apple's CEO, even without you providing that fact explicitly.

#### ⚠️ Cons
**Cost and latency**: API calls are expensive at scale. For millions of entities, LLM-only approaches may be cost-prohibitive. Latency can also be an issue for real-time systems.

**Hallucination risk**: LLMs can confidently return entity IDs that don't exist. Always validate against your KB.

**Privacy concerns**: Sending data to external APIs may violate compliance requirements. Consider on-premise models for sensitive domains.

#### 💡 Practical Architecture
Use LLMs as a **final disambiguation layer** for hard cases. Let cheaper methods handle the easy 80%. Route ambiguous mentions to the LLM. This balances cost and quality.

> Ask the audience: "What percentage of your entity mentions would need LLM-level disambiguation?"

Now let's wrap up with key takeaways...`
        }
      ]
    },
    {
      id: 'conclusion',
      title: 'Conclusion & Key Takeaways',
      slides: [
        {
          id: 30,
          title: 'Conclusion & Key Takeaways',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6', textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <div style={{ marginBottom: '1.5rem', textAlign: 'left', color: '#61dafb', display: 'flex', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="2xl" style={{ marginRight: '0.8rem', marginBottom: '1.5rem' }} darkModeInvert={true} />
                  <strong>Best Practices for Entity Normalization & Disambiguation</strong>
                </div>
              </GSAPAnimated>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #61dafb' }}>
                    <div style={{ color: '#61dafb', marginBottom: '0.8rem', fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-arrow-right" sizeName="lg" darkModeInvert={true} />
                      <strong>Layered Approach</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Normalize → Generate candidates → Rank</li>
                      <li>Apply global/graph coherence</li>
                      <li>Log NILs (not-in-lexicon) cases for curation</li>
                      <li>Start simple, add complexity as needed</li>
                    </ul>
                  </div>
                </GSAPAnimated>

                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #98c379' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.8rem', fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-sliders" sizeName="lg" darkModeInvert={true} />
                      <strong>Method Selection</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Combine deterministic and semantic methods</li>
                      <li>Balance precision/recall for your use case</li>
                      <li>Simple techniques often solve 80% of problems</li>
                    </ul>
                  </div>
                </GSAPAnimated>

                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ background: 'rgba(229, 192, 123, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                    <div style={{ color: '#e5c07b', marginBottom: '0.8rem', fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-compass" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                      <strong>Domain-Specific Choices</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Gazetteers/ontologies for closed-world domains</li>
                      <li>Embeddings/KB for diverse content</li>
                      <li>LLMs for complex, long-context scenarios</li>
                      <li>Hybrid approaches often perform best</li>
                    </ul>
                  </div>
                </GSAPAnimated>

                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div style={{ background: 'rgba(198, 120, 221, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #c678dd' }}>
                    <div style={{ color: '#c678dd', marginBottom: '0.8rem', fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-chart-line" sizeName="lg" darkModeInvert={true} />
                      <strong>Evaluation & Monitoring</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Invest in labeled evaluation sets</li>
                      <li>Track error buckets and edge cases</li>
                      <li>Monitor for data/concept drift</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d1a52',
          notes: `### 30) Conclusion & Key Takeaways
We've covered a lot of ground! Let's bring it all together with practical guidance you can apply tomorrow.

#### 🏗️ Build a Layered Pipeline
The best entity normalization systems use **multiple techniques in sequence**:
1. **Normalize** - Clean and standardize text (techniques 1-2)
2. **Generate candidates** - Use gazetteers, fuzzy matching, embeddings (techniques 3-8)
3. **Rank and disambiguate** - Apply context, KB linking, graphs (techniques 7-13)
4. **Handle NILs** - Log unknown entities for curation

Each layer filters and refines. Simple techniques handle easy cases cheaply. Complex techniques tackle the hard tail.

#### 🎯 Match Techniques to Your Domain
- **Closed-world domains** (medications, products, locations): Start with gazetteers and ontologies. High precision is achievable!
- **Open-domain content** (news, social media): You need embeddings, KB linking, and possibly LLMs.
- **Regulated industries**: Invest in ontology mapping early. Compliance requirements are non-negotiable.

#### 📊 The 80/20 Rule
In my experience, **simple techniques handle 80% of cases**. String normalization, synonym tables, and exact matching go surprisingly far. Invest in complex techniques for the remaining 20% where they actually matter.

> Ask the audience: "What's your current entity normalization pipeline? Which techniques are you using?"

Let's finish with governance best practices...`
        },
        {
          id: 31,
          title: 'Best Practices',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #e06c75' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.8rem', fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-shield-check" sizeName="lg" style={{ marginBottom: '1.5rem' }} darkModeInvert={true} />
                    <strong>Governance & Best Practices</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Version data, models, and rules rigorously</li>
                    <li>Maintain audit logs for normalization/linking decisions</li>
                    <li>Document thresholds and decision criteria</li>
                    <li>Plan for iterative improvement based on production feedback</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.3}>
                <div style={{ marginTop: '1.5rem', padding: '1.2rem', background: 'rgba(97, 218, 251, 0.15)', borderRadius: '10px', textAlign: 'left', borderLeft: '4px solid #61dafb' }}>
                  <div style={{ color: '#61dafb', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="xl" darkModeInvert={true} />
                    <strong>Remember:</strong> Entity normalization and disambiguation are foundational capabilities that impact all downstream data applications—invest accordingly in your data infrastructure.
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d1a52',
          notes: `### 31) Governance & Best Practices
Before we wrap up, let's talk about **operational excellence**. Building a great system is only half the battle—you need to run it well.

#### 📋 Version Everything
- **Data**: Your gazetteers, synonym tables, and ontologies change over time. Version them like code.
- **Models**: Embedding models get updated. Track which version was used for each prediction.
- **Rules**: If you're using rule-based context matching, version those rules. A change can have unintended consequences.

#### 📝 Audit and Explain
For regulated industries, you may need to explain **why** an entity was resolved a particular way. Maintain audit logs. Store confidence scores. Track which technique made the decision.

#### 🔄 Continuous Improvement
Entity normalization is never "done." New entities appear. Language evolves. Your domain changes.

Build a **feedback loop**:
1. Log NIL cases and low-confidence predictions
2. Have domain experts review samples regularly
3. Update gazetteers and rules based on findings
4. Re-evaluate metrics after changes

#### 🚀 The Final Word
Entity normalization and disambiguation may seem like boring data plumbing, but they're **foundational**. Every downstream application—search, analytics, knowledge graphs, RAG systems—depends on getting entities right.

Invest in this infrastructure. Build it well. Operate it professionally.

**Thank you!** Questions?

---
*Slides and speaker notes created for teaching entity normalization techniques to beginners.*`
        }
      ]
    }
  ]
};

