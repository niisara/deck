import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

export const rerankingModelsDeck: Deck = {
  id: 'reranking-models-deck',
  name: '11 Re-Ranking Models to Improve RAG Accuracy',
  description: 'Practical patterns, trade-offs, and examples to boost precision in Retrieval-Augmented Generation',
  category: 'RAG',
  theme: 'night',
  cardClassName: 'glass-morphism',
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  slides: [],
  slideGroups: [
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          center: true,
          title: '11 Re-Ranking Models to Improve RAG Accuracy',
          content: (
            <div>
              <GSAPAnimated animation="scaleIn" delay={0.2}>
                <p style={{ fontSize: '1em', marginTop: '10px' }}>
                  Practical patterns, trade-offs, and examples to boost precision in Retrieval-Augmented Generation
                </p>
              </GSAPAnimated>
              <div style={{ marginTop: '20px', display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
                <GSAPAnimated animation="rotateIn" delay={0.4}>
                  <div style={{ padding: '20px 30px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <SvgIcon iconName="duo-magnifying-glass" sizeName="3x" darkModeInvert={true} />
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '2rem' }}>Retrieve</div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.6}>
                  <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} />
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={0.8}>
                  <div style={{ padding: '20px 30px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="3x" darkModeInvert={true} />
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '2rem' }}>Re-Rank</div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={1.0}>
                  <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} />
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={1.2}>
                  <div style={{ padding: '20px 30px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="3x" darkModeInvert={true} />
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '2rem' }}>Generate</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1f3263',
          notes: `### Introduction - 11 Re-Ranking Models to Improve RAG Accuracy

[cheerfully] Welcome everyone! [excited] Today we're diving into something that can dramatically boost the accuracy of your **RAG** 👉 'rag' systems - that's **Retrieval-Augmented Generation**. [conversational] Think of RAG 👉 'rag' as a smart assistant that first looks up information and then uses it to generate answers.

#### The Challenge

[storytelling] Here's the thing - most RAG 👉 'rag' systems have a hidden weakness. They retrieve lots of documents, but not all of them are actually useful. It's like asking someone to write a report and giving them a stack of 50 articles when only 5 are truly relevant. What happens? The quality suffers, right?

#### What We'll Cover

[enthusiastically] We're going to explore eleven powerful re-ranking models that act as intelligent filters. They sit between retrieval and generation, making sure only the *best* documents make it to your language model. The three-stage pipeline you see on screen - **Retrieve, Re-Rank, Generate** - is the secret sauce that top-performing RAG 👉 'rag' systems use today.

#### Why This Matters

[confidently] These techniques aren't just academic theory. Companies using re-ranking see precision improvements of twenty to thirty-five percent. That means fewer hallucinations, more accurate answers, and happier users. We'll look at practical examples, trade-offs, and help you pick the right model for your use case.

[energetic] Let's get started and transform your RAG 👉 'rag' pipeline from good to exceptional!`
        },
        {
          id: 2,
          title: 'Why Re-Ranking in RAG?',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <h2 style={{ textAlign: 'left', marginBottom: '25px', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ marginRight: '10px', verticalAlign: 'middle' }} darkModeInvert={true} />
                  Why Re-Ranking Matters
                  <MermaidPopover
                    title="Two-Stage RAG Architecture"
                    diagram={`flowchart LR
    A["Query"] --> B["Stage 1: Retrieval<br/>(20-50 docs)"]
    B --> C["Stage 2: Re-Ranking<br/>(Top 5-10)"]
    C --> D["LLM Generation"]
    style A fill:#4fc3f7,color:#000
    style B fill:#ffb74d,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#81c784,color:#000`}
                  />
                </h2>
              </GSAPAnimated>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '30px', marginTop: '30px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ padding: '15px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '8px' }}>
                    <h3 style={{ color: '#4fc3f7', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-shield-check" sizeName="2x" darkModeInvert={true} />
                      Two-Stage Architecture
                    </h3>
                    <div style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <p><strong>Stage 1 (Recall):</strong> Cast a wide net</p>
                      <GSAPStaggerList stagger={0.1} delay={0.5}>
                        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                          <li>BM25 / bi-encoder / hybrid retrieval</li>
                          <li>Optimized for speed and coverage</li>
                          <li>May include semantically similar but less relevant results</li>
                        </ul>
                      </GSAPStaggerList>
                      <p style={{ marginTop: '10px' }}><strong>Stage 2 (Precision):</strong> Filter the signal from noise</p>
                      <GSAPStaggerList stagger={0.1} delay={0.8}>
                        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                          <li>Cross-encoders, late interaction, fusion methods</li>
                          <li>Deeper semantic analysis of query-document pairs</li>
                          <li>Ensures LLM works with truly relevant context</li>
                        </ul>
                      </GSAPStaggerList>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ padding: '15px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
                    <h3 style={{ color: '#81c784', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-chart-line" sizeName="2x" darkModeInvert={true} />
                      Key Benefits
                    </h3>
                    <GSAPStaggerList stagger={0.12} delay={0.6}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.6', paddingLeft: '20px' }}>
                        <li><strong>Filters noisy candidates:</strong> Improves grounding and reduces hallucinations</li>
                        <li><strong>Optimal flow:</strong> Retrieve 20-50 → Re-rank to top 5-10 for the LLM</li>
                        <li><strong>ROI:</strong> +200-500 ms latency often yields 20-35% precision gains</li>
                      </ul>
                    </GSAPStaggerList>
                    <GSAPAnimated animation="scaleIn" delay={1.0}>
                      <div style={{ marginTop: '15px', padding: '12px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '5px' }}>
                        <p style={{ fontSize: '2rem' }}>
                          <strong>Quality Impact:</strong>
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '8px' }}>
                          <div>
                            <div style={{ fontSize: '1.2rem' }}>Initial Retrieval</div>
                            <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#ffb74d' }}>65-80% relevant</div>
                          </div>
                          <div style={{ fontSize: '1.5em', color: '#4fc3f7' }}>→</div>
                          <div>
                            <div style={{ fontSize: '1.2rem' }}>After Re-Ranking</div>
                            <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#81c784' }}>85-95% relevant</div>
                          </div>
                        </div>
                      </div>
                    </GSAPAnimated>
                  </div>
                </GSAPAnimated>
              </div>
              
            </div>
          ),
          backgroundColor: '#1f3263',
          notes: `### Why Re-Ranking in RAG?

[lecture] [confidently] Let's talk about why re-ranking is absolutely critical for building high-quality **RAG** 👉 'rag' systems. [storytelling] Think of it like this - retrieval is casting a wide fishing net, while re-ranking is carefully selecting the best catch.

#### The Two-Stage Architecture

[conversational] Modern RAG 👉 'rag' systems work in two distinct stages, and understanding this architecture is key. **Stage one is all about recall** - we use fast methods like **BM25** 👉 'bee-em-twenty-five' or bi-encoders to quickly grab twenty to fifty documents. Speed is the priority here, so we deliberately cast a wide net. The trade-off? [cautiously] We might pull in some documents that are semantically similar but not actually relevant to what the user asked.

This Two-Stage RAG Architecture shows how documents flow through the pipeline: User Query goes to Fast Retrieval using BM25 or Bi-encoder, which produces twenty to fifty candidates. These candidates go through the Re-Ranker for deep analysis, resulting in the top five to ten documents, which then become LLM Context.

#### Stage Two: The Intelligence Layer

[excited] **Stage two is where the magic happens**. We use sophisticated models - cross-encoders, late interaction methods, or fusion techniques - to deeply analyze each query-document pair. These models understand context, relationships, and true relevance. They ensure your **LLM** 👉 'el-el-em' receives only the *most* relevant information.

#### The Business Case

[enthusiastically] Here's what makes this compelling - adding re-ranking typically adds two hundred to five hundred milliseconds of latency, but you see precision improvements of twenty to thirty-five percent. That's a fantastic return on investment! Your initial retrieval might give you sixty-five to eighty percent relevant documents, but after re-ranking, you're looking at eighty-five to ninety-five percent relevance.

#### The Hidden Problem

[seriously] Many developers don't realize their RAG 👉 'rag' system isn't failing because of bad embeddings or weak language models. The real culprit? **Irrelevant information** sneaking into the generation stage. Re-ranking solves this by acting as an intelligent filter, separating signal from noise.

[energetic] Now let's dive into the eleven models that make this possible!`
        }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
        {
          id: 3,
          title: '1) Cross-Encoder Ranker (MS MARCO family)',
          icon: { name: 'duo-brain-circuit' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Goal / What It Solves:</span></strong></p>
                    <p style={{ fontSize: '1.2rem', margin: '0px' }}>Maximizes precision through deep query-document understanding, overcoming the limitations of independent embedding comparisons.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>How It Works:</span></strong></p>
                    <p style={{ fontSize: '1.2rem', margin: '0px' }}>Concatenate [CLS] query [SEP] doc → transformer → single relevance score. Understands semantic relationships between queries and documents.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.5}>
                  <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>When to Use:</span></strong></p>
                    <GSAPStaggerList stagger={0.1} delay={0.7}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>
                        <li>Precision-critical tasks where accuracy trumps speed</li>
                        <li>When working with short to medium-length passages</li>
                        <li>For ambiguous or complex queries needing contextual understanding</li>
                        <li>Second-stage ranking (after initial retrieval)</li>
                        <li>When GPU resources are available</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-code" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Input / Output Format:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Input: Pairs of query and document texts</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
                      {`pairs = [
  [query, document_1], 
  [query, document_2],
  ...
]`}
                    </pre>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Output: Relevance scores between 0 and 1 for each pair</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
                      {`scores = [0.92, 0.45, ...]  # Higher = more relevant`}
                    </pre>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#371c6d',
          notes: `### Cross-Encoder Ranker (MS MARCO family)

[confidently] Now we're diving into our first model - the **Cross-Encoder Ranker**. This is like the gold standard of re-ranking, and it comes from the **MS MARCO** 👉 'em-es-marco' family - that's Microsoft's Machine Reading Comprehension dataset.

#### What Problem Does It Solve?

[lecture] Traditional bi-encoders look at queries and documents independently, then compare their embeddings. That's fast, but [cautiously] it misses something crucial - the *relationship* between the query and document. [pleased] Cross-encoders solve this by analyzing them together, achieving twenty to thirty-five percent better accuracy than bi-encoders alone.

#### How It Actually Works

[storytelling] Picture this - the model takes your query and a document, concatenates them with special tokens - **CLS** 👉 'see-el-es' at the start, **SEP** 👉 'sep' in the middle - then runs everything through a transformer. The output? A single relevance score between zero and one. [excited] The magic is that tokens from the query can directly attend to tokens in the document, creating deep semantic understanding.

#### When Should You Use This?

[conversational] Cross-encoders shine in precision-critical scenarios. If you're building a medical Q-and-A system or a legal document assistant where accuracy matters more than speed, this is your go-to. They work best with short to medium passages and really excel with ambiguous queries that need contextual understanding. [reassuringly] Just make sure you have **GPU** 👉 'gee-pee-you' resources available.

#### The Input-Output Pattern

You feed in pairs - query with document one, query with document two, and so on. Each pair gets scored independently. A score of point-nine-two means highly relevant, point-four-five means somewhat related, point-two-one means not very relevant at all. Simple, right?

[firmly] The key insight? This is always your *second stage* - retrieve fifty candidates quickly, then use the cross-encoder to find the best five. That's the winning pattern!`
        },
        {
          id: 4,
          title: 'Example',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.2}>
                <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <p style={{ fontSize: '2rem' }}><strong>Example: Password Reset Query</strong></p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '1.2rem' }}>
                    <GSAPAnimated animation="slideInLeft" delay={0.4}>
                      <div>
                        <p style={{ margin: '0px' }}><strong>Query:</strong> "Reset password steps?"</p>
                        <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                        <GSAPStaggerList stagger={0.15} delay={0.6}>
                          <ul style={{ paddingLeft: '18px', lineHeight: '1.4', }}>
                            <li>A) Billing policy</li>
                            <li>B) Account reset guide</li>
                            <li>C) Login tips</li>
                          </ul>
                        </GSAPStaggerList>
                      </div>
                    </GSAPAnimated>
                    <GSAPAnimated animation="slideInRight" delay={0.5}>
                      <div>
                        <p><strong>Ranking:</strong></p>
                        <GSAPStaggerList stagger={0.2} delay={0.8}>
                          <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                            <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.95 → B) Account reset guide</div>
                            <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.62 → C) Login tips</div>
                            <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.21 → A) Billing policy</div>
                          </div>
                        </GSAPStaggerList>
                      </div>
                    </GSAPAnimated>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#371c6d',
          notes: `### Cross-Encoder Example - Password Reset Query

[storytelling] Let's see cross-encoders in action with a real-world example. Imagine you're building a customer support chatbot, and someone asks "Reset password steps?" This seems simple, but [excited] watch how the cross-encoder intelligently ranks the candidates.

#### The Scenario

[conversational] We have three documents retrieved in stage one - a billing policy document, an account reset guide, and some login tips. A simple keyword-based system might get confused because all three mention "account" or "password" at some point. [confidently] But the cross-encoder understands *context*.

#### How the Scores Work

Document B, the account reset guide, gets a score of point-nine-five. [pleased] That's nearly perfect! The model deeply understands that "reset password steps" directly matches the content and intent of this guide. Document C, the login tips, scores point-six-two - it's somewhat related because login and password reset are connected topics, but [cautiously] it's not what the user actually needs.

Document A, the billing policy, gets just point-two-one. Why so low? The cross-encoder recognized that while this might mention accounts, it has nothing to do with password resets. The semantic relationship just isn't there.

#### The Real Power

[enthusiastically] This is where cross-encoders shine - they don't just match keywords, they understand *meaning* and *intent*. In a production system, you'd pass only document B to your **LLM** 👉 'el-el-em', ensuring the generated answer is accurate and helpful. Without re-ranking, you might have sent all three documents, diluting the context and potentially confusing the generation model.

[warmly] Think about your own use case - where do users ask questions that seem simple but need this level of semantic understanding? That's where cross-encoders deliver massive value!`
        },
        {
          id: 5,
          title: 'Strength and Limitations',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <p>Accuracy Contextual Robust</p>
                    <GSAPStaggerList stagger={0.12} delay={0.4}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>Best accuracy among classical rerankers (20-35% over bi-encoders)</li>
                        <li>Understands semantic relationships beyond keyword similarity</li>
                        <li>Fine-grained relevance scoring (0-1 scale)</li>
                        <li>Well-studied with many pre-trained models available</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <p>Latency Scaling Resources</p>
                    <GSAPStaggerList stagger={0.12} delay={0.5}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>Higher latency: O(k·L) where k = # docs, L = sequence length</li>
                        <li>Not suitable for first-stage retrieval of large corpora</li>
                        <li>Typically limited to reranking top-50 documents</li>
                        <li>GPU recommended for production use</li>
                        <li>512 token limit in many models (can truncate documents)</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#371c6d',
          notes: `### Cross-Encoder - Strengths and Limitations

[conversational] Now let's be honest about when cross-encoders are brilliant and when they struggle. [reassuringly] Understanding these trade-offs helps you make smart architectural decisions.

#### The Strengths - Why We Love Them

[enthusiastically] Cross-encoders deliver the *best accuracy* among classical re-rankers - we're talking twenty to thirty-five percent improvement over bi-encoders. That's huge! They understand semantic relationships that go way beyond simple keyword matching. The scoring is fine-grained on a zero-to-one scale, giving you precise confidence levels. [pleased] Plus, they're well-studied with tons of pre-trained models available on **Hugging Face** - you can start using them today without training from scratch.

#### The Limitations - The Reality Check

[cautiously] Here's where you need to be careful. Cross-encoders have **O(k·L)** 👉 'oh of kay times el' complexity - that's big-O notation meaning latency scales with both the number of documents (k) and sequence length (L). [sigh] If you try to re-rank five hundred documents, you'll wait forever! That's why we *never* use them for first-stage retrieval.

[firmly] The practical limit? Typically reranking the top fifty documents max. You'll also want **GPU** 👉 'gee-pee-you' resources in production - running on **CPU** 👉 'see-pee-you' is painfully slow. Another gotcha - many models have a five-twelve token limit, which can truncate longer documents and miss important information at the end.

#### The Bottom Line

[confidently] Cross-encoders are like precision surgical tools - incredibly effective when used correctly, but you need to respect their limitations. [storytelling] Think of them as your *second stage* after fast retrieval, not a replacement for it. The pattern that works? Retrieve fifty to one hundred candidates quickly, then use a cross-encoder to find the best five to ten. That's the sweet spot where you get maximum accuracy without killing performance.

[cheerfully] Next, let's look at some optimized variants that address some of these limitations!`
        }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
        {
          id: 6,
          title: '2) BERT-based Cross Encoder (ms-marco-MiniLM-L-6-v2)',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <GSAPAnimated animation="flipCard" delay={0.2}>
                  <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Goal:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Provides cross-encoder accuracy with a lighter, faster model for practical deployment:</p>
                    <GSAPStaggerList stagger={0.1} delay={0.4}>
                      <ul>
                        <li>Balance between semantic understanding and computational efficiency</li>
                        <li>Production-ready reranking without heavy GPU requirements</li>
                        <li>Improved latency while maintaining competitive accuracy</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.3}>
                  <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>How It Works:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Knowledge distillation from larger BERT models into compact architecture:</p>
                    <GSAPStaggerList stagger={0.12} delay={0.5}>
                      <ul>
                        <li>Uses MiniLM/DistilBERT techniques to compress model while preserving ranking capabilities</li>
                        <li>Fine-tuned specifically on MS MARCO passage ranking dataset (8.8M query-passage pairs)</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.4}>
                  <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>When to Use:</span></strong></p>
                    <GSAPStaggerList stagger={0.1} delay={0.6}>
                      <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '1.2rem', lineHeight: '1.4' }}>
                        <li>When deployment efficiency and response time matter</li>
                        <li>For English-centric search applications</li>
                        <li>In production systems with moderate hardware</li>
                        <li>When reranking 20-100 candidates efficiently</li>
                        <li>As default starting point for most RAG pipelines</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.5}>
                  <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-code" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Input / Output Format:</span></strong></p>
                    <p>Input: Query-document pairs (same as standard cross-encoders)</p>
                    <pre style={{ marginTop: '5px', fontSize: '1rem', background: 'rgba(0,0,0,0.3)', padding: '6px', borderRadius: '3px', overflow: 'auto' }}>
                      {`from sentence_transformers import CrossEncoder

model = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')
pairs = [
  ["diabetic medication", "Article about insulin..."],
  ["diabetic medication", "New glucose monitors..."]
]
`}
                    </pre>
                    <p>Output: Calibrated relevance scores</p>
                    <pre style={{ marginTop: '5px', fontSize: '1rem', background: 'rgba(0,0,0,0.3)', padding: '6px', borderRadius: '3px', overflow: 'auto' }}>
                      {`scores = model.predict(pairs)
# [0.87, 0.65]  # Higher = more relevant`}
                    </pre>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#50215d',
          notes: `### BERT-based Cross Encoder (ms-marco-MiniLM-L-6-v2)

[conversational] Now let's talk about a practical variant that solves a real problem - **MiniLM** 👉 'mini-el-em'. [pleased] This is the model most teams actually use in production because it strikes the perfect balance between accuracy and speed.

#### The Efficiency Challenge

[lecture] Regular **BERT** 👉 'bert' cross-encoders are accurate but heavy. In production, you need something that can handle hundreds of queries per second without burning through your cloud budget. [storytelling] That's where **MiniLM** 👉 'mini-el-em' comes in - it's like taking a heavyweight champion and training them to box just as well at lightweight.

#### Knowledge Distillation Magic

[excited] Here's the clever part - **MiniLM** 👉 'mini-el-em' uses knowledge distillation. [storytelling] Think of it like learning from a master teacher. A large **BERT** 👉 'bert' model teaches a smaller model how to rank documents. The student model learns to mimic the teacher's decisions but runs much faster. It's trained on **MS MARCO** 👉 'em-es-marco' with eight-point-eight million query-passage pairs, so it really understands English search patterns.

#### When This Shines

[confidently] This is your default starting point for most **RAG** 👉 'rag' pipelines. Use it when you need decent accuracy without heavy **GPU** 👉 'gee-pee-you' requirements. It works great for English-centric applications and can efficiently rerank twenty to one hundred candidates. The latency is much better than full-size models, making it production-ready out of the box.

#### The Code Pattern

[reassuringly] Implementation is straightforward - just import CrossEncoder from sentence-transformers, load the model, and predict scores for your query-document pairs. You get calibrated scores like point-eight-seven or point-six-five, where higher means more relevant. It's that simple!

[warmly] This model proves you don't always need the biggest hammer - sometimes a well-designed smaller tool does the job perfectly!`
        },
        {
          id: 7,
          title: 'Example',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.2}>
              <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                <p style={{ fontSize: '2rem' }}><strong>Example: Medical Query</strong></p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '1.2rem' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div>
                    <p style={{ margin: '0px' }}><strong>Query:</strong> "Side effects of ACE inhibitors in diabetics?"</p>
                    <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                    <GSAPStaggerList stagger={0.1} delay={0.6}>
                    <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                      <li>A) General diabetes treatment overview</li>
                      <li>B) ACE inhibitor adverse effects in diabetic patients</li>
                      <li>C) Hypertension medication guidelines</li>
                    </ul>
                    </GSAPStaggerList>
                  </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div>
                    <p><strong>Ranking:</strong></p>
                    <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <GSAPAnimated animation="scaleIn" delay={0.9}>
                      <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.89 → B) ACE inhibitor adverse effects in diabetic patients</div>
                      </GSAPAnimated>
                      <GSAPAnimated animation="scaleIn" delay={1.0}>
                      <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.41 → A) General diabetes treatment overview</div>
                      </GSAPAnimated>
                      <GSAPAnimated animation="scaleIn" delay={1.1}>
                      <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.32 → C) Hypertension medication guidelines</div>
                      </GSAPAnimated>
                    </div>
                  </div>
                  </GSAPAnimated>
                </div>
              </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#50215d',
          notes: `### Example - Medical Query with MiniLM

[storytelling] Let's see this model in action with a practical medical query example. Imagine a healthcare professional searching for specific information about medication side effects.

#### The Query

[conversational] The user asks: "Side effects of **ACE** 👉 'ace' inhibitors in diabetics?" This is a very precise question - not just about **ACE** 👉 'ace' inhibitors in general, but specifically their effects on diabetic patients.

#### The Documents

[lecture] Our initial retrieval returns three documents. Document A gives a general diabetes treatment overview - useful context, but not specifically answering the question. Document B directly discusses **ACE** 👉 'ace' inhibitor adverse effects in diabetic patients - this is exactly what we need! Document C covers hypertension medication guidelines, which is related but tangential.

#### The Ranking

[excited] Watch how **MiniLM** 👉 'mini-el-em' intelligently scores these documents. Document B receives a score of zero point eight nine - that's "0.89" (zero point eight nine) - making it the clear winner because it directly answers the query. [pleased] Document A gets zero point four one - "0.41" (zero point four one) - because it provides relevant background. Document C scores lowest at zero point three two - "0.32" (zero point three two) - since it's only marginally related.

[enthusiastically] This precision is why re-ranking matters. Without it, these documents might be presented in random order, wasting the physician's time. With **MiniLM** 👉 'mini-el-em', the most relevant information surfaces immediately!`
        },
        {
          id: 8,
          title: 'Strength and Limitations',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
              <h4>
                Understanding the Trade-offs
                <MermaidPopover
                  title="Model Decision Flow"
                  diagram={`flowchart TD
    A["Need Re-Ranking?"] --> B{"Latency<br/>Critical?"}
    B -->|"Yes"| C["MiniLM ✓<br/>Fast & Efficient"]
    B -->|"No"| D{"Domain?"}
    D -->|"Web/General"| E["MiniLM ✓<br/>Great Fit"]
    D -->|"Code/Legal"| F["Consider<br/>Specialized Model"]
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style E fill:#81c784,color:#000
    style F fill:#ffb74d,color:#000`}
                />
              </h4>
              </GSAPAnimated>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}>
                    <GSAPAnimated animation="bounceIn" delay={0.5}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    </GSAPAnimated>
                    <strong>Strengths:</strong>
                  </p>
                  <p>Efficient Practical Low Footprint</p>
                  <GSAPStaggerList stagger={0.1} delay={0.7}>
                  <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                    <li>2-4x faster than full BERT cross-encoders</li>
                    <li>Only 90MB model size (vs. 440MB+ for base BERT)</li>
                    <li>Works well on CPU for moderate throughput</li>
                    <li>Strong performance on standard benchmarks (87% of full model accuracy)</li>
                    <li>Widely available in libraries like sentence-transformers</li>
                  </ul>
                  </GSAPStaggerList>
                </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}>
                    <GSAPAnimated animation="bounceIn" delay={0.6}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    </GSAPAnimated>
                    <strong>Limitations:</strong>
                  </p>
                  <p>English-centric Truncation Specialized</p>
                  <GSAPStaggerList stagger={0.1} delay={0.8}>
                  <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                    <li>Primarily trained on English MS MARCO dataset</li>
                    <li>512 token truncation limits long document scoring</li>
                    <li>Still slower than pure bi-encoders (1-3 orders of magnitude)</li>
                    <li>Less effective on domains far from web search (e.g., code, legal)</li>
                    <li>Lower accuracy than full-sized cross-encoders in complex reasoning</li>
                  </ul>
                  </GSAPStaggerList>
                </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#50215d',
          notes: `### Strength and Limitations - MiniLM

[conversational] Every model has trade-offs, and understanding them helps you make smart architectural decisions. [reassuringly] Let's break down **MiniLM's** 👉 'mini-el-em' strengths and weaknesses so you know exactly when to use it.

#### The Strengths: Speed and Practicality

[enthusiastically] The biggest advantage of **MiniLM** 👉 'mini-el-em' is *efficiency*. It runs two to four times faster than full **BERT** 👉 'bert' cross-encoders while maintaining eighty-seven percent of their accuracy. That's an excellent trade-off! [pleased] The model is only ninety megabytes - compare that to over four hundred forty megabytes for base **BERT** 👉 'bert'. This small footprint means it works well even on **CPU** 👉 'see-pee-you', making it practical for teams without expensive **GPU** 👉 'gee-pee-you' infrastructure. Plus, it's widely available in popular libraries like sentence-transformers, so integration is straightforward.

#### The Limitations: Know Your Boundaries

[cautiously] However, **MiniLM** 👉 'mini-el-em' isn't perfect for every scenario. First, it's primarily trained on the English **MS MARCO** 👉 'em-es marco' dataset, which means it performs best on web search and general English queries. If you're working with specialized domains like legal documents or source code, you might see degraded performance. Second, there's a five hundred twelve token limit - that's "512" (five hundred twelve) - which means long documents get truncated. Third, while it's faster than full cross-encoders, it's still one to three orders of magnitude slower than pure bi-encoders, so you can't use it for first-stage retrieval on millions of documents.

#### Making the Right Choice

[confidently] The decision flow in the diagram helps you decide. Is latency critical? Are you working with web or general content? If yes to both, **MiniLM** 👉 'mini-el-em' is your go-to model. But for highly specialized domains, you'll want to consider alternatives we'll cover next.

[cheerfully] Let's move on to our third model, which takes a completely different approach!`
        }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
        {
          id: 9,
          title: '3) MonoT5 Re-Ranker',
          icon: { name: 'duo-brain' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <GSAPAnimated animation="flipCard" delay={0.2}>
                <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}>
                    <GSAPAnimated animation="rotateIn" delay={0.4}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    <span style={{ marginTop: '4px', fontSize: '2rem' }}>Goal:</span></strong></p>
                  <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>High-accuracy pointwise generative reranking approach that frames relevance as a text generation problem.</p>
                  <GSAPStaggerList stagger={0.1} delay={0.6}>
                  <ul>
                    <li>Provides superior accuracy through generative assessment</li>
                    <li>Offers strong zero-shot and few-shot capabilities</li>
                    <li>Better handles complex semantic relationships than classification-only models</li>
                  </ul>
                  </GSAPStaggerList>
                </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.3}>
                <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}>
                    <GSAPAnimated animation="rotateIn" delay={0.5}>
                    <SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    <span style={{ marginTop: '4px', fontSize: '2rem' }}>How It Works:</span></strong></p>
                  <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>T5 encoder-decoder predicts "true" or "false" tokens for relevance. Higher P("true") = Higher relevance score.</p>
                  <p>Key mechanism: Convert relevance judgment into a text generation task, predicting "true" or "false" tokens</p>
                </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.8}>
                <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}>
                    <GSAPAnimated animation="bounceIn" delay={1.0}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    <span style={{ marginTop: '4px', fontSize: '2rem' }}>When to Use:</span></strong></p>
                  <GSAPStaggerList stagger={0.08} delay={1.1}>
                  <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '1.2rem', lineHeight: '1.4' }}>
                    <li>Web search and QA datasets where accuracy is paramount</li>
                    <li>When higher latency is acceptable for better precision</li>
                    <li>For transfer learning across domains (zero/few-shot)</li>
                    <li>Complex information needs requiring strong reasoning</li>
                    <li>When GPU resources are available for inference</li>
                  </ul>
                  </GSAPStaggerList>
                </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.9}>
                <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}>
                    <GSAPAnimated animation="scaleIn" delay={1.0}>
                    <SvgIcon iconName="duo-code" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    <span style={{ marginTop: '4px', fontSize: '2rem' }}>Input / Output Format:</span></strong></p>
                  <p>Input: Formatted text prompt combining query and document</p>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '1rem' }}>
                    {`prompt = f"Query: {query} Document: {document} Relevant?"`}
                  </pre>
                  <p>Output: Probability of generating "true" token as relevance score</p>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '1rem' }}>
                    {`score = model.predict(prompt)  
# Higher probability of "true" = higher relevance`}
                  </pre>
                </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#257556',
          notes: `### MonoT5 Re-Ranker

[excited] Now we're moving into truly innovative territory with **MonoT5** 👉 'mono-tee-five'. [enthusiastically] This model takes a completely different approach to re-ranking by treating relevance as a *generation problem* rather than just classification.

#### The Core Innovation

[storytelling] Here's what makes **MonoT5** 👉 'mono-tee-five' special - instead of just computing a similarity score, it uses the **T5** 👉 'tee-five' encoder-decoder architecture to actually *generate* a relevance judgment. The model reads your query and document, then predicts either the word "true" or "false" to indicate relevance. [pleased] The probability it assigns to the "true" token becomes your relevance score. Brilliant, right?

#### Why This Approach Works

[confidently] This generative framing gives **MonoT5** 👉 'mono-tee-five' several advantages. First, it achieves superior accuracy because the model can use its full language understanding to reason about relevance. Second, it has *excellent* zero-shot and few-shot transfer capabilities - meaning it works well even on domains it hasn't been specifically trained on. Third, it handles complex semantic relationships better than pure classification models because generation requires deeper understanding.

#### When Should You Use It?

[lecture] **MonoT5** 👉 'mono-tee-five' shines in scenarios where accuracy is your top priority. Think web search, question-answering systems, or complex research tasks. [cautiously] The trade-off is higher latency - this model is slower than **MiniLM** 👉 'mini-el-em'. So if you're okay with an extra hundred to two hundred milliseconds for noticeably better precision, this is your model. Just make sure you have **GPU** 👉 'gee-pee-you' resources available, as the encoder-decoder architecture is computationally intensive.

#### The Mechanics

[conversational] Looking at the input format, you create a natural language prompt combining your query and document, ending with "Relevant?" The model then generates "true" or "false". It's elegantly simple yet surprisingly powerful!

[cheerfully] Let's see this in action with an example next.`
        },
        {
          id: 10,
          title: 'Example',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.2}>
              <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                <p style={{ fontSize: '2rem' }}><strong>Example: RAG Query</strong></p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div>
                    <p style={{ margin: '0px' }}><strong>Query:</strong> "What is FiD in RAG?"</p>
                    <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                    <GSAPStaggerList stagger={0.12} delay={0.6}>
                    <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                      <li>A) Fusion-in-Decoder definition</li>
                      <li>B) Generic RAG overview</li>
                      <li>C) Document retrieval methods</li>
                    </ul>
                    </GSAPStaggerList>
                  </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div>
                    <p><strong>Ranking:</strong></p>
                    <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <GSAPAnimated animation="bounceIn" delay={0.9}>
                      <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.91 → A) Fusion-in-Decoder definition</div>
                      </GSAPAnimated>
                      <GSAPAnimated animation="bounceIn" delay={1.0}>
                      <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.57 → B) Generic RAG overview</div>
                      </GSAPAnimated>
                      <GSAPAnimated animation="bounceIn" delay={1.1}>
                      <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.23 → C) Document retrieval methods</div>
                      </GSAPAnimated>
                    </div>
                  </div>
                  </GSAPAnimated>
                </div>
              </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#257556',
          notes: `### Example - RAG Query with MonoT5

[storytelling] Let's watch **MonoT5** 👉 'mono-tee-five' tackle a technical query about **RAG** 👉 'rag' architecture. This example shows how the model's generative approach handles nuanced technical questions.

#### The Query

[conversational] A developer asks "What is **FiD** 👉 'fid' in **RAG** 👉 'rag'?" This is asking about a specific architecture pattern - **Fusion-in-Decoder** - in the context of **RAG** 👉 'rag' systems. It's a precise technical question that requires understanding both acronyms and their relationship.

#### The Documents

[lecture] Our retrieval returns three candidates. Document A specifically defines **Fusion-in-Decoder** - exactly what the user wants. Document B provides a generic **RAG** 👉 'rag' overview - helpful background but doesn't answer the specific question. Document C discusses document retrieval methods - related to **RAG** 👉 'rag' but tangential to the **FiD** 👉 'fid' question.

#### MonoT5's Judgment

[excited] Watch how **MonoT5** 👉 'mono-tee-five' uses its generative reasoning to score these. Document A receives zero point nine one - "0.91" (zero point nine one) - an *excellent* score because it directly answers the query. The model's encoder-decoder architecture understands that "**FiD** 👉 'fid'" explicitly means "**Fusion-in-Decoder**" and recognizes the perfect match. Document B gets zero point five seven - "0.57" (zero point five seven) - because it provides useful context about **RAG** 👉 'rag' but doesn't define **FiD** 👉 'fid'. Document C scores just zero point two three - "0.23" (zero point two three) - as it's only weakly related.

#### Why This Matters

[enthusiastically] This example highlights **MonoT5's** 👉 'mono-tee-five' strength - it *understands* technical relationships and context, not just keyword matching. A simpler model might rank Document B higher because it mentions **RAG** 👉 'rag' more frequently. [pleased] But **MonoT5** 👉 'mono-tee-five' recognizes that specificity trumps general relevance!

[conversational] Now let's examine this model's strengths and limitations.`
        },
        {
          id: 11,
          title: 'Strength and Limitations',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}>
                    <GSAPAnimated animation="rotateIn" delay={0.4}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    </GSAPAnimated>
                    <strong>Strengths:</strong>
                  </p>
                  <p>Top Accuracy Flexible Zero-shot</p>
                  <GSAPStaggerList stagger={0.1} delay={0.6}>
                  <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                    <li>Excellent accuracy, often outperforming BERT-based rankers</li>
                    <li>Strong transfer learning to new domains</li>
                    <li>Flexible prompting allows adapting to different tasks</li>
                    <li>T5's encoder-decoder architecture enables better understanding</li>
                    <li>Works with standard huggingface/transformers library</li>
                  </ul>
                  </GSAPStaggerList>
                </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}>
                    <GSAPAnimated animation="rotateIn" delay={0.5}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    </GSAPAnimated>
                    <strong>Limitations:</strong>
                  </p>
                  <p>Latency Resources Cost</p>
                  <GSAPStaggerList stagger={0.1} delay={0.7}>
                  <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                    <li>Higher latency due to encoder-decoder architecture</li>
                    <li>Larger models (up to billions of parameters)</li>
                    <li>More computationally expensive than BERT-based models</li>
                    <li>Requires significant GPU memory for larger versions</li>
                    <li>Higher inference cost in production environments</li>
                  </ul>
                  </GSAPStaggerList>
                </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#257556',
          notes: `### Strength and Limitations - MonoT5

[conversational] Let's be honest about what **MonoT5** 👉 'mono-tee-five' can and cannot do. [reassuringly] Understanding these trade-offs helps you architect the right solution for your needs.

#### The Impressive Strengths

[enthusiastically] **MonoT5** 👉 'mono-tee-five' delivers some of the *best* accuracy you'll find in re-ranking models. It frequently outperforms **BERT** 👉 'bert'-based rankers on standard benchmarks, which is remarkable. [pleased] The secret is that encoder-decoder architecture - it enables deeper semantic understanding than classification-only approaches. Another major advantage is transfer learning. Because **MonoT5** 👉 'mono-tee-five' frames relevance as a generation task, it handles new domains surprisingly well in zero-shot or few-shot scenarios. You can also adapt it to different tasks through flexible prompting. Plus, it integrates smoothly with the standard huggingface transformers library, making implementation straightforward.

#### The Practical Limitations

[cautiously] However, that accuracy comes at a cost. First, latency is higher - the encoder-decoder architecture requires more computation than simpler models. [sigh] We're talking an extra hundred to three hundred milliseconds per batch compared to **MiniLM** 👉 'mini-el-em'. Second, the models are *large* - ranging from hundreds of millions to billions of parameters. This means you need significant **GPU** 👉 'gee-pee-you' memory, especially for the larger versions. Third, the inference cost in production can be substantial. If you're re-ranking thousands of query-document pairs per second, those compute costs add up quickly.

#### Making the Decision

[confidently] So when should you choose **MonoT5** 👉 'mono-tee-five'? Use it when accuracy is your primary concern and you have the infrastructure to support it. Think high-value searches, research applications, or cases where a wrong answer is costly. But if you need real-time performance with tight latency budgets, consider the faster models we've covered.

[cheerfully] Let's move on to model number four, which offers a completely different architecture!`
        }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
        {
          id: 12,
          title: '4) MonoBERT Re-Ranker',
          icon: { name: 'duo-copy' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <GSAPAnimated animation="slideInTop" delay={0.2}>
                <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}>
                    <GSAPAnimated animation="scaleIn" delay={0.4}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    <span style={{ marginTop: '4px', fontSize: '2rem' }}>Goal:</span></strong></p>
                  <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Strong transformer-based reranking without the complexity and overhead of encoder-decoder architectures.</p>
                  <GSAPStaggerList stagger={0.1} delay={0.6}>
                  <ul>
                    <li>Provides efficient relevance scoring for passages</li>
                    <li>Offers semantic understanding beyond keyword matching</li>
                    <li>Balances accuracy and computational efficiency</li>
                  </ul>
                  </GSAPStaggerList>
                </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInTop" delay={0.3}>
                <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}>
                    <GSAPAnimated animation="scaleIn" delay={0.5}>
                    <SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    <span style={{ marginTop: '4px', fontSize: '2rem' }}>How It Works:</span></strong></p>
                  <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Uses BERT architecture with a classification head to output relevance scores:</p>
                  <GSAPStaggerList stagger={0.15} delay={0.7}>
                  <ul>
                    <li>Single-pass pointwise scoring for query-document pairs</li>
                  </ul>
                  </GSAPStaggerList>
                  <p>Key mechanism: [CLS] query [SEP] document [SEP] → BERT → classification head → relevance score</p>
                </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.8}>
                <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}>
                    <GSAPAnimated animation="bounceIn" delay={1.0}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    <span style={{ marginTop: '4px', fontSize: '2rem' }}>When to Use:</span></strong></p>
                  <GSAPStaggerList stagger={0.09} delay={1.1}>
                  <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '1.2rem', lineHeight: '1.4' }}>
                    <li>Classic Information Retrieval (IR) pipelines</li>
                    <li>When you have medium latency budgets</li>
                    <li>Primarily for English-language corpora</li>
                    <li>When you need better semantic understanding than BM25</li>
                    <li>As a reranking step after initial retrieval</li>
                  </ul>
                  </GSAPStaggerList>
                </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.9}>
                <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}>
                    <GSAPAnimated animation="rotateIn" delay={1.0}>
                    <SvgIcon iconName="duo-code" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    <span style={{ marginTop: '4px', fontSize: '2rem' }}>Input / Output Format:</span></strong></p>
                  <p>Input: Query and document pairs as text</p>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '1rem' }}>
                    {`inputs = {
  "query": "TLS vs mTLS security",
  "documents": ["doc1_text", "doc2_text", ...] 
}`}
                  </pre>
                  <p>Output: Relevance scores or binary classifications (relevant/not relevant)</p>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '1rem' }}>
                    {`scores = [0.87, 0.42, ...]  # Higher = more relevant`}
                  </pre>
                </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#73262e',
          notes: `### MonoBERT Re-Ranker

[cheerfully] Welcome to **MonoBERT** 👉 'mono-bert' - our fourth model and a classic approach that many consider the gold standard for transformer-based re-ranking. [confidently] This model represents the sweet spot between accuracy and practical performance.

#### The Core Approach

[conversational] **MonoBERT** 👉 'mono-bert' uses the well-known **BERT** 👉 'bert' architecture with a straightforward classification head for relevance scoring. [storytelling] Think of it as **BERT** 👉 'bert' specifically fine-tuned for the re-ranking task. The beauty is in its simplicity - no complex encoder-decoder setup like **MonoT5** 👉 'mono-tee-five', just a clean pointwise scorer that looks at each query-document pair independently.

#### How It Actually Works

[lecture] The input format is elegant. You concatenate your query and document with special tokens - that's **CLS** 👉 'cls', **SEP** 👉 'sep', another **SEP** 👉 'sep' - creating a single sequence that **BERT** 👉 'bert' processes. The model's attention mechanism lets every token interact with every other token, enabling deep semantic understanding. The **CLS** 👉 'cls' token's final representation goes through a classification head that outputs a relevance score. Higher scores mean stronger relevance!

#### Perfect Use Cases

[pleased] **MonoBERT** 👉 'mono-bert' excels in classic information retrieval pipelines where you need semantic understanding beyond keyword matching like **BM25** 👉 'bee-em-twenty-five'. It's perfect when you have *medium* latency budgets - not as fast as **MiniLM** 👉 'mini-el-em', but more accurate. The model works particularly well with English-language corpora, and it's become the de facto choice for second-stage re-ranking in many production systems.

#### Implementation Details

[reassuringly] The code example shows how straightforward it is to use. You pass in your query and a list of documents, and you get back relevance scores. Zero point eight seven - "0.87" (zero point eight seven) - means highly relevant, while zero point four two - "0.42" (zero point four two) - suggests marginal relevance.

[energetic] Let's see a concrete example next!`
        },
        {
          id: 13,
          title: 'Example',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
              <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                <p style={{ fontSize: '2rem' }}><strong>Example:</strong></p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '1.2rem' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div>
                    <p style={{ margin: '0px' }}><strong>Query:</strong> "TLS vs mTLS"</p>
                    <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                    <GSAPStaggerList stagger={0.1} delay={0.6}>
                    <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                      <li>A) Basic TLS overview</li>
                      <li>B) Client authentication in mTLS</li>
                      <li>C) General network security</li>
                    </ul>
                    </GSAPStaggerList>
                  </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div>
                    <p><strong>Ranking:</strong></p>
                    <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <GSAPAnimated animation="scaleIn" delay={0.9}>
                      <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.89 → B) Client authentication in mTLS</div>
                      </GSAPAnimated>
                      <GSAPAnimated animation="scaleIn" delay={1.0}>
                      <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.56 → A) Basic TLS overview</div>
                      </GSAPAnimated>
                      <GSAPAnimated animation="scaleIn" delay={1.1}>
                      <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.32 → C) General network security</div>
                      </GSAPAnimated>
                    </div>
                  </div>
                  </GSAPAnimated>
                </div>
              </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#73262e',
          notes: `### Example - Security Query with MonoBERT

[storytelling] Let's see **MonoBERT** 👉 'mono-bert' handle a common technical query about network security protocols. This example demonstrates how the model understands relationships between related concepts.

#### The Query

[conversational] A developer searches for "**TLS** 👉 'tee-el-es' vs **mTLS** 👉 'em-tee-el-es'". They're specifically looking for information comparing these two security protocols. The "versus" in the query signals they want to understand the *difference* between them, not just information about each one separately.

#### The Documents

[lecture] Our retrieval brings back three candidates. Document A provides a basic **TLS** 👉 'tee-el-es' overview - fundamental knowledge but doesn't address the comparison. Document B discusses client authentication in **mTLS** 👉 'em-tee-el-es' - this gets at the *key* difference between **TLS** 👉 'tee-el-es' and **mTLS** 👉 'em-tee-el-es', which is mutual authentication. Document C covers general network security - too broad to be specifically helpful.

#### MonoBERT's Ranking

[excited] Watch **MonoBERT** 👉 'mono-bert' apply its semantic understanding. Document B scores zero point eight nine - "0.89" (zero point eight nine) - because it directly addresses what makes **mTLS** 👉 'em-tee-el-es' different from **TLS** 👉 'tee-el-es', which is the *heart* of the query. Document A receives zero point five six - "0.56" (zero point five six) - it's relevant background but doesn't answer the "versus" question. Document C gets just zero point three two - "0.32" (zero point three two) - too generic to be useful.

#### Why This Works

[pleased] **MonoBERT** 👉 'mono-bert' doesn't just match keywords. It understands that a "versus" query needs documents that explain *differences*, not just documents that mention both terms. That's the power of transformer-based semantic understanding!

[conversational] Now let's look at this model's trade-offs.`
        },
        {
          id: 14,
          title: 'Strength and Limitations',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <GSAPAnimated animation="flipCard" delay={0.2}>
                <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}>
                    <GSAPAnimated animation="bounceIn" delay={0.4}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    </GSAPAnimated>
                    <strong>Strengths:</strong>
                  </p>
                  <p>Reliable Available Established</p>
                  <GSAPStaggerList stagger={0.1} delay={0.6}>
                  <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                    <li>Solid accuracy above traditional retrieval methods</li>
                    <li>Widely available pre-trained checkpoints</li>
                    <li>Well-tested in production environments</li>
                    <li>Good baseline model for reranking tasks</li>
                    <li>Simpler to deploy than encoder-decoder models</li>
                  </ul>
                  </GSAPStaggerList>
                </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.3}>
                <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}>
                    <GSAPAnimated animation="bounceIn" delay={0.5}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    </GSAPAnimated>
                    <strong>Limitations:</strong>
                  </p>
                  <p>Speed Length Domain</p>
                  <GSAPStaggerList stagger={0.1} delay={0.7}>
                  <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                    <li>Slower than MiniLM and other distilled variants</li>
                    <li>Limited by BERT's 512 token truncation</li>
                    <li>Performance degrades with domain shift</li>
                    <li>Lower accuracy than more recent models (MonoT5, ColBERT)</li>
                    <li>Less effective for multi-hop or complex reasoning</li>
                  </ul>
                  </GSAPStaggerList>
                </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#73262e',
          notes: `### Strength and Limitations - MonoBERT

[conversational] Let's be pragmatic about **MonoBERT's** 👉 'mono-bert' position in the re-ranking landscape. [reassuringly] It's a solid workhorse, but understanding its limitations helps you know when to reach for something else.

#### The Reliable Strengths

[pleased] **MonoBERT** 👉 'mono-bert' is the *reliable* choice. It delivers solid accuracy - consistently better than traditional methods like **BM25** 👉 'bee-em-twenty-five' or pure embedding similarity. The ecosystem support is excellent - you'll find widely available pre-trained checkpoints for various domains. [confidently] It's been battle-tested in production environments for years, which means fewer surprises when you deploy. Think of it as a good *baseline* model. If you're starting with re-ranking, **MonoBERT** 👉 'mono-bert' is a safe bet. Plus, it's simpler to deploy than encoder-decoder models like **MonoT5** 👉 'mono-tee-five', requiring less infrastructure complexity.

#### The Practical Limitations

[cautiously] However, **MonoBERT** 👉 'mono-bert' is showing its age. It's slower than distilled variants like **MiniLM** 👉 'mini-el-em' - about two to three times slower for the same number of documents. [disappointed] The five hundred twelve token limit - that's "512" (five hundred twelve) - means long documents get truncated, potentially losing important context. Performance degrades noticeably with domain shift - if your data looks different from **MS MARCO** 👉 'em-es marco', expect accuracy to drop. More recent models like **MonoT5** 👉 'mono-tee-five' and **ColBERT** 👉 'col-bert' outperform it on standard benchmarks. And for complex reasoning or multi-hop questions, **MonoBERT** 👉 'mono-bert' struggles.

#### The Decision Point

[firmly] So when should you use **MonoBERT** 👉 'mono-bert'? Choose it when you need a *proven*, well-supported baseline with moderate accuracy requirements. But if you need cutting-edge performance or have specialized needs, consider the other models we're covering.

[excited] Speaking of which, let's explore model number five - a truly innovative approach called **ColBERT** 👉 'col-bert'!`
        }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
        {
          id: 15,
          title: '5) ColBERT / ColBERTv2 (Late Interaction)',
          icon: { name: 'duo-graduation-cap' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <GSAPAnimated animation="flipCard" delay={0.2}>
                  <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="scaleIn" delay={0.3}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>Goal:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Provides precise token-level matching between queries and documents while maintaining efficiency and scalability.</p>
                    <GSAPStaggerList stagger={0.12} delay={0.5}>
                      <ul>
                        <li>Balances deep semantic understanding with computational efficiency</li>
                        <li>Preserves term-specific representations instead of single-vector compression</li>
                        <li>Enables fine-grained contextual matching across tokens</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="rotateIn" delay={0.5}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>How It Works:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Employs late interaction pattern: encodes queries and documents independently, but performs fine-grained token-level matching.</p>
                    <p>Key mechanism: MaxSim operation matches each query token to its most similar document token, then aggregates scores</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.6}>
                  <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="bounceIn" delay={0.7}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>When to Use:</span></strong></p>
                    <GSAPStaggerList stagger={0.15} delay={0.8}>
                      <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '1.2rem', lineHeight: '1.4' }}>
                        <li>When term-by-term alignment is important (technical/medical content)</li>
                        <li>For long documents where specific sections may be relevant</li>
                        <li>When you need balance between efficiency and deep matching</li>
                        <li>Systems requiring both scalable indexing and high-precision ranking</li>
                        <li>When handling complex, multi-term queries with specific terminology</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInTop" delay={0.8}>
                  <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="scaleIn" delay={0.9}><SvgIcon iconName="duo-code" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>Input / Output Format:</span></strong></p>
                    <p>Input: Query tokens and document tokens (as separate embeddings)</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '1rem' }}>
                      {`query_embeddings = model.encode_query(query)  # [Q tokens × dim]
doc_embeddings = model.encode_doc(document)    # [D tokens × dim]`}
                    </pre>
                    <p>Output: MaxSim-based relevance score from token interactions</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '1rem' }}>
                      {`score = colbert.score(query_embeddings, doc_embeddings)
 # Scalar score`}
                    </pre>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#486d24',
          notes: `### ColBERT / ColBERTv2 (Late Interaction)

[excited] Let's talk about **ColBERT** 👉 'col-bert' - that's short for Contextualized Late Interaction over **BERT** 👉 'bert'. [enthusiastically] This model represents a fascinating middle ground in the re-ranking world. It's neither a pure bi-encoder nor a full cross-encoder, but something beautifully in between.

#### The Core Innovation

[storytelling] Here's what makes ColBERT special. Most embeddings compress an entire document into a single vector - imagine trying to summarize a fifty-page technical manual into one number! [pleased] ColBERT says "why compress at all?" Instead, it keeps separate embeddings for *every token* in both your query and document. Then, during ranking, it performs what's called **MaxSim** 👉 'max-sim' - each query token finds its best matching document token, and those scores get aggregated.

#### When ColBERT Shines

[confidently] This architecture is perfect for technical documentation, medical content, or legal texts where specific terminology matters. [storytelling] Let's say you're searching for "rotate **S3** 👉 'es-three' access keys safely" - ColBERT can match "rotate" to "rotation," "**S3** 👉 'es-three'" to "**S3** 👉 'es-three'," and "keys" to "credentials," all independently. That token-by-token alignment catches nuances that single-vector models miss.

#### The Performance Sweet Spot

[pleased] **ColBERTv2** 👉 'col-bert-vee-two' adds significant optimizations - better compression, faster indexing, and improved query efficiency. You get cross-encoder-like accuracy but with much better scalability. [cautiously] The trade-off? Higher storage requirements than bi-encoders and more complex infrastructure. But if precision on technical content is your goal, ColBERT delivers!`
        },
        {
          id: 16,
          title: 'Example',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.2}>
                <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <GSAPAnimated animation="fadeIn" delay={0.3}>
                    <p style={{ fontSize: '2rem' }}><strong>Example:</strong></p>
                  </GSAPAnimated>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '1.2rem' }}>
                    <GSAPAnimated animation="slideInLeft" delay={0.4}>
                      <div>
                        <p style={{ margin: '0px' }}><strong>Query:</strong> "Rotate S3 access keys safely"</p>
                        <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                        <GSAPStaggerList stagger={0.15} delay={0.6}>
                          <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                            <li>A) AWS general overview</li>
                            <li>B) S3 policy documentation</li>
                            <li>C) S3 key rotation procedure</li>
                          </ul>
                        </GSAPStaggerList>
                      </div>
                    </GSAPAnimated>
                    <GSAPAnimated animation="slideInRight" delay={0.5}>
                      <div>
                        <p><strong>Ranking:</strong></p>
                        <GSAPStaggerList stagger={0.2} delay={0.8}>
                          <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                            <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.89 → C) S3 key rotation procedure</div>
                            <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.56 → B) S3 policy documentation</div>
                            <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.32 → A) AWS general overview</div>
                          </div>
                        </GSAPStaggerList>
                      </div>
                    </GSAPAnimated>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#486d24',
          notes: `### ColBERT Example

[storytelling] Let me show you ColBERT in action with a real-world scenario. Imagine you're building a cloud infrastructure assistant, and a user asks: "Rotate **S3** 👉 'es-three' access keys safely."

#### The Token-Level Magic

[lecture] ColBERT breaks this query into tokens - "rotate," "**S3** 👉 'es-three'," "access," "keys," "safely." Now, we have three candidate documents. Document A is just a general **AWS** 👉 'ay-double-you-es' overview - too broad. Document B covers **S3** 👉 'es-three' policy documentation - related but not quite right. Document C is specifically about **S3** 👉 'es-three' key rotation procedures - bingo!

#### Why ColBERT Gets It Right

[excited] Here's where the token-level matching shines. The query token "rotate" strongly matches "rotation" in document C. The token "**S3** 👉 'es-three'" exactly matches "**S3** 👉 'es-three'" in documents B and C. The token "keys" aligns with "access keys" in C. And "safely" matches security-related terms in the procedure document. ColBERT's **MaxSim** 👉 'max-sim' operation finds these best matches for each query token and aggregates them.

#### The Scoring Breakdown

[pleased] Document C scores point-eight-nine - clearly the winner because *every* query token finds strong matches. Document B gets point-five-six - it has "**S3** 👉 'es-three'" and "policy" but misses the "rotation" context. Document A scores only point-three-two - too generic, with weak matches across the board. [enthusiastically] This granular, token-by-token analysis is ColBERT's superpower!`
        },
        {
          id: 17,
          title: 'Strength and Limitations',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><GSAPAnimated animation="bounceIn" delay={0.3}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /></GSAPAnimated> <strong>Strengths:</strong></p>
                    <GSAPAnimated animation="fadeIn" delay={0.5}>
                      <p>Precision Efficiency Scalable</p>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.12} delay={0.6}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>Token-level matching captures nuanced relevance signals</li>
                        <li>Maintains efficiency of separate encoding with accuracy of cross-attention</li>
                        <li>Indexes can be compressed and queried with ANN techniques</li>
                        <li>Flexible scoring allows for detailed similarity analysis</li>
                        <li>ColBERTv2 adds significant storage and query efficiency improvements</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><GSAPAnimated animation="rotateIn" delay={0.5}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /></GSAPAnimated> <strong>Limitations:</strong></p>
                    <GSAPAnimated animation="fadeIn" delay={0.7}>
                      <p>Complexity Storage Setup</p>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.12} delay={0.8}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>More complex to implement than standard bi/cross encoders</li>
                        <li>Higher storage requirements than single-vector models</li>
                        <li>Requires specialized indexing infrastructure</li>
                        <li>MaxSim operation has higher computational cost than simple dot products</li>
                        <li>Not as widely supported in off-the-shelf RAG frameworks</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#486d24',
          notes: `### ColBERT Strengths and Limitations

[conversational] Let's break down when ColBERT is your best friend and when it might be overkill. [reassuringly] Understanding these trade-offs is crucial for making the right architectural decisions.

#### The Strengths - Where ColBERT Excels

[enthusiastically] First, the good news. ColBERT achieves remarkable precision through its token-level matching - you're capturing nuanced relevance signals that compressed embeddings simply lose. [storytelling] Think about technical documentation where the term "**TLS** 👉 'tee-el-es' handshake timeout" matters - ColBERT catches every word. [pleased] It maintains the speed benefits of separate encoding while achieving accuracy close to full cross-encoders. That's the best of both worlds!

Plus, **ColBERTv2** 👉 'col-bert-vee-two' brings serious optimizations. We're talking about compressed indexes using approximate nearest neighbor techniques, making it production-ready at scale. The flexible scoring mechanism also lets you analyze *why* a document ranked where it did - incredibly valuable for debugging and improving your system.

#### The Limitations - The Reality Check

[cautiously] Now the challenges. ColBERT is more complex to implement than throwing a cross-encoder into your pipeline. You need specialized indexing infrastructure - not just **Elasticsearch** 👉 'elastic-search' with default settings. [disappointed] Storage requirements are higher because you're keeping embeddings for every token, not just one vector per document. We're talking maybe five-to-ten-times more storage.

The **MaxSim** 👉 'max-sim' operation, while clever, costs more compute than simple dot products. [sigh] And here's the practical issue - off-the-shelf **RAG** 👉 'rag' frameworks like **LangChain** 👉 'lang-chain' or **LlamaIndex** 👉 'llama-index' don't always support ColBERT out of the box. You might be building custom integration. So weigh these factors against your precision requirements!`
        },
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
        {
          id: 18,
          title: '6) E5-Ranker (e.g., intfloat/e5-mistral) as Bi-Encoder Re-Rank',
          icon: { name: 'duo-brain-circuit' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <GSAPAnimated animation="slideInTop" delay={0.2}>
                  <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="bounceIn" delay={0.3}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>Goal:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Enables fast and efficient rescoring of documents using strong sentence embeddings while maintaining reasonable accuracy.</p>
                    <GSAPStaggerList stagger={0.1} delay={0.5}>
                      <ul>
                        <li>Provides efficient alternative to computationally intensive cross-encoders</li>
                        <li>Balances speed and accuracy for high-throughput applications</li>
                        <li>Supports multilingual reranking (depending on checkpoint)</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.3}>
                  <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="scaleIn" delay={0.4}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>How It Works:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Processes query and documents separately with same encoder, then computes similarity.</p>
                    <p>Key mechanism: Encode query_emb and doc_emb independently → compute cosine similarity → rerank top-K</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.5}>
                  <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="rotateIn" delay={0.6}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>When to Use:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} delay={0.7}>
                      <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '1.2rem', lineHeight: '1.4' }}>
                        <li>Low-latency applications where speed is critical</li>
                        <li>CPU-only environments without GPU acceleration</li>
                        <li>High-throughput systems requiring efficient scaling</li>
                        <li>Multilingual applications (especially with e5-mistral variants)</li>
                        <li>When cross-encoder latency is prohibitive</li>
                        <li>For initial rescoring before applying heavier models</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="flipCard" delay={0.7}><SvgIcon iconName="duo-code" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>Input / Output Format:</span></strong></p>
                    <p>Input: Query and document texts processed separately</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '1rem' }}>
                      {`// Encode separately
query_emb = model.encode(query)
doc_embs = [model.encode(doc) for doc in documents]

// Compute similarity
scores = [cosine_similarity(query_emb, doc_emb) 
          for doc_emb in doc_embs]`}
                    </pre>
                    <p>Output: Similarity scores between -1 and 1 (typically normalized to 0-1)</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '1rem' }}>
                      {`scores = [0.87, 0.65, 0.42, ...]  # Higher = more relevant`}
                    </pre>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#541d5f',
          notes: `### E5-Ranker as Bi-Encoder Re-Rank

[excited] Moving on to **E5-Ranker** 👉 'ee-five-ranker' - this is the speed demon of our lineup! [conversational] The "E5" stands for **E**mbeddings from bidirectional **E**ncoder representations, and it's particularly interesting when you need to rerank at scale without breaking the bank or your latency budget.

#### The Bi-Encoder Advantage

[lecture] Here's the fundamental difference from cross-encoders. **E5** 👉 'ee-five' processes your query and documents *separately* using the same encoder. [storytelling] Think of it like having two parallel assembly lines instead of one sequential process. You encode the query once, encode each document once, then just compute cosine similarity between the vectors. [enthusiastically] This separate encoding is what makes it blazingly fast - we're talking five-to-twenty-times faster than cross-encoders!

#### When E5 Makes Sense

[pleased] **E5** 👉 'ee-five' really shines in production scenarios where you're serving hundreds or thousands of queries per second. If you're running on **CPU** 👉 'see-pee-you'-only environments - maybe serverless functions or edge deployments - this is your friend. The **e5-mistral** 👉 'ee-five mistral' variants add fantastic multilingual support, handling everything from English to Mandarin to Arabic with grace.

#### The Speed-Accuracy Trade-off

[conversational] Here's the honest truth - you'll see maybe a ten-to-fifteen-percent accuracy drop compared to cross-encoders. [confidently] But you gain massive speed and scalability! Document embeddings can be pre-computed and cached, so at query time you're only encoding the query and doing simple vector math. For many applications, that trade-off is absolutely worth it. Use **E5** 👉 'ee-five' as your first reranking pass, then optionally apply a heavier cross-encoder to the top-ten results!`
        },
        {
          id: 19,
          title: 'Example',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="bounceIn" delay={0.2}>
                <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <GSAPAnimated animation="fadeIn" delay={0.3}>
                    <p style={{ fontSize: '2rem' }}><strong>Example:</strong></p>
                  </GSAPAnimated>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '1.2rem' }}>
                    <GSAPAnimated animation="slideInLeft" delay={0.5}>
                      <div>
                        <p style={{ margin: '0px' }}><strong>Query:</strong> "GDPR data deletion timeline"</p>
                        <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                        <GSAPStaggerList stagger={0.15} delay={0.7}>
                          <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                            <li>A) Generic GDPR compliance article</li>
                            <li>B) Data retention policy document</li>
                            <li>C) Article with explicit 30-day deletion window</li>
                          </ul>
                        </GSAPStaggerList>
                      </div>
                    </GSAPAnimated>
                    <GSAPAnimated animation="slideInRight" delay={0.6}>
                      <div>
                        <p><strong>Ranking:</strong></p>
                        <GSAPStaggerList stagger={0.18} delay={0.9}>
                          <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                            <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.89 → C) Article with explicit 30-day deletion window</div>
                            <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.72 → B) Data retention policy document</div>
                            <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.64 → A) Generic GDPR compliance article</div>
                          </div>
                        </GSAPStaggerList>
                      </div>
                    </GSAPAnimated>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#541d5f',
          notes: `### E5-Ranker Example

[storytelling] Let me show you **E5** 👉 'ee-five' in a real-world compliance scenario. A user asks: "**GDPR** 👉 'gee-dee-pee-ar' data deletion timeline." This is exactly the kind of query where semantic understanding beats keyword matching.

#### The Document Landscape

[lecture] We have three candidate documents. Document A is a generic **GDPR** 👉 'gee-dee-pee-ar' compliance overview - it mentions deletion but lacks specifics. Document B is a data retention policy - related but focuses more on how long to *keep* data, not the deletion process itself. Document C explicitly discusses the thirty-day deletion window mandated by **GDPR** 👉 'gee-dee-pee-ar' - this is the gold standard answer.

#### How E5 Processes This

[conversational] **E5** 👉 'ee-five' encodes the query "**GDPR** 👉 'gee-dee-pee-ar' data deletion timeline" into a dense vector that captures the semantic intent - the user wants specific timing information about deletion under **GDPR** 👉 'gee-dee-pee-ar' regulations. Each document gets encoded separately. Then it's simple vector math - cosine similarity between the query vector and each document vector.

#### The Results Tell the Story

[pleased] Document C scores point-eight-nine because its semantic meaning strongly aligns with the query - "deletion," "timeline," "thirty days," and "**GDPR** 👉 'gee-dee-pee-ar'" all create strong vector similarity. Document B gets point-seven-two - it's about data policies and **GDPR** 👉 'gee-dee-pee-ar' but less focused on deletion timelines. Document A scores point-six-four - too generic, even though it mentions **GDPR** 👉 'gee-dee-pee-ar'. [enthusiastically] The bi-encoder approach is fast enough to do this across thousands of documents in milliseconds!`
        },
        {
          id: 20,
          title: 'Strength and Limitations',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <GSAPAnimated animation="flipCard" delay={0.2}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><GSAPAnimated animation="scaleIn" delay={0.3}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /></GSAPAnimated> <strong>Strengths:</strong></p>
                    <GSAPAnimated animation="fadeIn" delay={0.5}>
                      <p>Speed Efficiency Scalable Multilingual</p>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.1} delay={0.6}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>Very fast compared to cross-encoders (5-20x speedup)</li>
                        <li>Works well on CPUs without requiring GPU acceleration</li>
                        <li>Efficient for high-volume production systems</li>
                        <li>Document embeddings can be pre-computed and cached</li>
                        <li>Strong multilingual performance with mistral variants</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={0.4}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><GSAPAnimated animation="bounceIn" delay={0.5}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /></GSAPAnimated> <strong>Limitations:</strong></p>
                    <GSAPAnimated animation="fadeIn" delay={0.7}>
                      <p>Precision Reasoning Context</p>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.1} delay={0.8}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>Lower precision than cross-encoders (10-15% accuracy gap)</li>
                        <li>Limited reasoning about relationships between query and document</li>
                        <li>Information loss from compressing documents into single vectors</li>
                        <li>May miss nuanced relevance that requires joint processing</li>
                        <li>Domain-specific performance may require fine-tuning</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#541d5f',
          notes: `### E5-Ranker Strengths and Limitations

[conversational] Let's get real about when **E5** 👉 'ee-five' is your hero and when you need something stronger. [reassuringly] This is all about matching the tool to your requirements.

#### The Speed Advantage is Real

[enthusiastically] **E5** 👉 'ee-five' delivers five-to-twenty-times speedup over cross-encoders - that's not a typo! If you're building a customer-facing search where every hundred milliseconds matters, this is huge. [pleased] It runs beautifully on **CPUs** 👉 'see-pee-yous' - no expensive **GPU** 👉 'gee-pee-you' infrastructure needed. This makes it perfect for serverless deployments or edge computing scenarios.

The caching story is compelling too. Encode your entire document corpus once, store those embeddings, and you're done. At query time, you only encode the query - maybe ten milliseconds - then it's just vector math across your corpus. Scale to millions of documents? No problem. The **mistral** 👉 'mistral' variants handle fifty-plus languages with strong performance, making this ideal for global applications.

#### The Accuracy Trade-offs

[cautiously] Here's where you need to be honest with yourself. You will see a ten-to-fifteen-percent accuracy gap compared to cross-encoders. For some applications, that's totally acceptable. [seriously] For others - medical diagnosis, legal research - it's not. **E5** 👉 'ee-five' compresses entire documents into single vectors, so you lose fine-grained detail. Complex relationships between query and document? The model can't reason about those - it's just comparing vector distances.

#### The Smart Deployment Pattern

[confidently] Think of **E5** 👉 'ee-five' as your first-stage filter. Retrieve fifty documents with **BM25** 👉 'bee-em-twenty-five', rerank to twenty with **E5** 👉 'ee-five' in milliseconds, then optionally apply a cross-encoder to the final ten if precision is critical. That's the production-grade pattern that balances speed and accuracy beautifully!`
        },
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
        {
          id: 21,
          title: '7) LLM-as-a-Ranker (RankGPT-style)',
          icon: { name: 'duo-rocket' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <GSAPAnimated animation="slideInBottom" delay={0.2}>
                  <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="rotateIn" delay={0.3}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>Goal:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Leverages large language models' reasoning capabilities to perform sophisticated relevance ranking beyond traditional re-rankers.</p>
                    <GSAPStaggerList stagger={0.13} delay={0.5}>
                      <ul>
                        <li>Handles complex, multi-criteria document evaluation</li>
                        <li>Performs listwise ranking rather than just pairwise comparisons</li>
                        <li>Zero-shot adaptation to new domains without retraining</li>
                        <li>Combines semantic understanding with world knowledge</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInTop" delay={0.3}>
                  <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="bounceIn" delay={0.4}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>How It Works:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Uses a large language model's reasoning abilities to evaluate and rank document relevance.</p>
                    <p>Key mechanism: Prompt LLM to compare documents → reason about relevance → output ordered ranking</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.5}>
                  <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="scaleIn" delay={0.6}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>When to Use:</span></strong></p>
                    <GSAPStaggerList stagger={0.15} delay={0.7}>
                      <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '1.2rem', lineHeight: '1.4' }}>
                        <li>High-stakes QA applications where accuracy trumps cost</li>
                        <li>For ambiguous or multi-hop queries requiring reasoning</li>
                        <li>When dealing with new domains without training data</li>
                        <li>For complex relevance criteria (freshness, authority, specificity)</li>
                        <li>When processing latency isn't a critical constraint</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.6}>
                  <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="rotateIn" delay={0.7}><SvgIcon iconName="duo-code" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>Input / Output Format:</span></strong></p>
                    <p style={{ margin: '0px' }}>Input: Query and numbered documents list in a prompt</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '1rem' }}>
                      {`prompt = f"""
Rank these passages based on relevance to query: 
"{query}"
[1] {document_1}
[2] {document_2}
...
Return ranking as: [3, 1, 2, ...]
"""`}
                    </pre>
                    <p>Output: Ordered list of document IDs based on relevance</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '1rem' }}>
                      {`[3, 1, 5, 2, 4]  # Most to least relevant`}
                    </pre>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#54611f',
          notes: `### LLM-as-a-Ranker (RankGPT-style)

[excited] Now we're entering exciting territory - using large language models themselves as rankers! [enthusiastically] This approach, popularized by **RankGPT** 👉 'rank-gee-pee-tee', is like having a smart human annotator evaluate your documents, except it's automated and runs at machine speed.

#### The Power of Language Model Reasoning

[storytelling] Think about what makes **LLMs** 👉 'el-el-ems' special - they understand context, they can reason about relationships, they have world knowledge. [conversational] Traditional rerankers are trained on specific datasets with fixed notions of relevance. But an **LLM** 👉 'el-el-em' can understand nuanced criteria like "Is this document recent?" or "Does this source have authority?" or "Is this answer complete?" You can literally ask it to consider multiple factors and explain its reasoning!

#### Listwise vs Pairwise Ranking

[confidently] Here's a key advantage - **LLM-as-a-Ranker** 👉 'el-el-em as a ranker' performs *listwise* ranking. It sees all documents together and can reason about relative relevance. Traditional cross-encoders score pairs independently - they might rank document A over B, B over C, but C over A - creating logical inconsistencies. **LLMs** 👉 'el-el-ems' can maintain global consistency across the entire ranking.

#### Zero-Shot Magic and Trade-offs

[pleased] The zero-shot capability is remarkable. New domain? No problem - just adjust your prompt. No retraining, no fine-tuning. [cautiously] But let's be realistic about costs - we're talking ten-to-fifty-times more expensive than cross-encoders, and latency of one-to-five seconds per query. This makes sense for high-value queries where you absolutely need the best answer, but it's not sustainable for high-throughput systems. Think legal research, medical diagnosis, or strategic business intelligence - not general web search!`
        },
        {
          id: 22,
          title: 'Example',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.2}>
                <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <GSAPAnimated animation="fadeIn" delay={0.3}>
                    <p style={{ fontSize: '2rem' }}><strong>Example:</strong></p>
                  </GSAPAnimated>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '1.2rem' }}>
                    <GSAPAnimated animation="slideInTop" delay={0.4}>
                      <div>
                        <p style={{ margin: '0px' }}><strong>Query:</strong> "Pros/cons of eventual consistency for checkout systems?"</p>
                        <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                        <GSAPStaggerList stagger={0.15} delay={0.6}>
                          <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                            <li>A) General database concepts</li>
                            <li>B) E-commerce design patterns</li>
                            <li>C) System design with consistency trade-offs</li>
                          </ul>
                        </GSAPStaggerList>
                        <GSAPAnimated animation="fadeIn" delay={1.0}>
                          <p style={{ marginTop: '5px', fontSize: '1.2rem' }}><strong>LLM reasoning:</strong></p>
                          <p>"Doc C directly addresses consistency trade-offs in systems. Doc B covers e-commerce patterns which may include checkout. Doc A is too general."</p>
                        </GSAPAnimated>
                      </div>
                    </GSAPAnimated>
                    <GSAPAnimated animation="slideInBottom" delay={0.5}>
                      <div>
                        <p style={{ margin: '0px' }}><strong>Ranking:</strong></p>
                        <GSAPStaggerList stagger={0.2} delay={0.9}>
                          <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                            <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>1st → C) System design with consistency trade-offs</div>
                            <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>2nd → B) E-commerce design patterns</div>
                            <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>3rd → A) General database concepts</div>
                          </div>
                        </GSAPStaggerList>
                      </div>
                    </GSAPAnimated>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#54611f',
          notes: `### LLM-as-a-Ranker Example

[storytelling] Let me show you the **LLM-as-a-Ranker** 👉 'el-el-em as a ranker' approach with a complex, multi-faceted query: "Pros and cons of eventual consistency for checkout systems?" This is exactly where traditional rankers struggle but **LLMs** 👉 'el-el-ems' shine.

#### Why This Query is Challenging

[lecture] Notice the complexity here. The user isn't just asking about eventual consistency or checkout systems - they want trade-off analysis, they want both positives and negatives, and the answer needs to be specifically about e-commerce checkout. Traditional semantic matching might rank any document about consistency or e-commerce highly, missing the nuanced requirement.

#### The LLM's Reasoning Process

[conversational] When we feed this to an **LLM** 👉 'el-el-em', it reasons explicitly. It sees document C discusses system design with consistency trade-offs - that's directly relevant. Document B covers e-commerce design patterns, which *may* include checkout scenarios - that's somewhat relevant. Document A talks about general database concepts - too broad, not specific enough. The **LLM** 👉 'el-el-em' can actually articulate *why* it ranks this way!

#### The Explainability Factor

[pleased] Here's what makes this powerful - you're not just getting a ranking, you're getting reasoning. The **LLM** 👉 'el-el-em' might say "Document C is most relevant because it specifically addresses the trade-offs you're asking about in system design contexts." [enthusiastically] This explainability is invaluable for debugging your **RAG** 👉 'rag' system, understanding user intent, and building trust with stakeholders. In high-stakes applications - legal, medical, financial - this transparency is often a requirement, not just a nice-to-have!`
        },
        {
          id: 23,
          title: 'Strength and Limitations',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><GSAPAnimated animation="scaleIn" delay={0.3}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /></GSAPAnimated> <strong>Strengths:</strong></p>
                    <GSAPAnimated animation="fadeIn" delay={0.5}>
                      <p>Reasoning Zero-shot Adaptable Multilingual</p>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.12} delay={0.6}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>Superior reasoning about complex relevance criteria</li>
                        <li>Excellent zero-shot performance without task-specific training</li>
                        <li>Adaptable to changing ranking requirements via prompting</li>
                        <li>Strong cross-lingual capabilities</li>
                        <li>Can explain ranking decisions (interpretability)</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><GSAPAnimated animation="rotateIn" delay={0.5}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /></GSAPAnimated> <strong>Limitations:</strong></p>
                    <GSAPAnimated animation="fadeIn" delay={0.7}>
                      <p>Cost Latency Scaling</p>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.12} delay={0.8}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>Highest cost among re-ranking approaches (10-50x more expensive)</li>
                        <li>High latency (1-5 seconds per query)</li>
                        <li>Prompt engineering sensitivity and potential inconsistency</li>
                        <li>API rate limits for hosted models</li>
                        <li>Limited scale for high-throughput systems</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#54611f',
          notes: `### LLM-as-a-Ranker Strengths and Limitations

[conversational] Now let's get real about using **LLMs** 👉 'el-el-ems' as rankers - both the amazing capabilities and the harsh realities you'll face in production.

#### The Undeniable Strengths

[enthusiastically] Large language models bring something truly special to reranking - genuine reasoning ability. Unlike trained models that pattern-match, **LLMs** 👉 'el-el-ems' can actually *think* about relevance. [pleased] They understand complex nuance, can handle brand new ranking criteria through prompts alone, and work brilliantly across dozens of languages without retraining. The zero-shot performance is remarkable - just describe what "relevant" means in plain English, and they get it! Plus, they can explain their decisions, making your system transparent and debuggable.

#### The Brutal Trade-offs

[seriously] Here's where reality hits hard. **LLM** 👉 'el-el-em' reranking is *expensive* - we're talking ten-to-fifty-times more costly than cross-encoders. [sigh] Latency is painful, often one-to-five seconds per query batch. For high-throughput systems serving thousands of queries per second, this simply doesn't scale. And there's the prompt engineering challenge - slight wording changes can swing results dramatically.

#### When to Use LLMs Despite the Costs

[confidently] So when does it make sense? When you need complex reasoning that trained models can't handle. When your ranking criteria change frequently and retraining is impractical. When you're prototyping and need quick results. Or when you're in specialized domains where no good reranking model exists. [reassuringly] But for production at scale? Consider this your expensive specialty tool, not your everyday workhorse. Many teams use **LLMs** 👉 'el-el-ems' to generate training data, then distill that knowledge into faster, cheaper models!`
        }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
        {
          id: 24,
          title: '8) RRF (Reciprocal Rank Fusion)',
          icon: { name: 'duo-list-ol' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <GSAPAnimated animation="bounceIn" delay={0.2}>
                  <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="rotateIn" delay={0.3}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>Goal:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Combines multiple ranking signals into a single, unified ranking without requiring relevance scores or training.</p>
                    <GSAPStaggerList stagger={0.15} delay={0.5}>
                      <ul>
                        <li>Effectively merges results from diverse retrieval methods (BM25, dense, etc.)</li>
                        <li>Creates robust rankings that benefit from the strengths of each underlying system</li>
                        <li>Improves overall ranking quality without adding new models</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="scaleIn" delay={0.4}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>How It Works:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Uses a simple yet effective formula to combine rankings based on document positions:</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '1rem' }}>
                      {`RRF(d) = Σ₍ᵣ∈R₎ 1 / (k + rankᵣ(d))`}
                    </pre>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}><strong>Where:</strong></p>
                    <GSAPStaggerList stagger={0.1} delay={0.6}>
                      <ul>
                        <li>d = document being ranked</li>
                        <li>R = set of ranking systems being fused</li>
                        <li>k = constant (typically 60) to manage highly ranked items</li>
                        <li>rankr(d) = position of document d in ranker r</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.5}>
                  <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="bounceIn" delay={0.6}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>When to Use:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} delay={0.7}>
                      <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '1.2rem', lineHeight: '1.4' }}>
                        <li>When combining multiple retrieval methods (e.g., BM25 + neural)</li>
                        <li>For heterogeneous document collections with varying characteristics</li>
                        <li>As a simple baseline before implementing more complex re-rankers</li>
                        <li>For multilingual collections where different retrievers may excel</li>
                        <li>To quickly improve existing systems without new model training</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInTop" delay={0.6}>
                  <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="flipCard" delay={0.7}><SvgIcon iconName="duo-code" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>Input / Output Format:</span></strong></p>
                    <p>Input: Multiple ranked lists of documents from different systems</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '1rem' }}>
                      {`ranker_1 = ["doc_A", "doc_C", "doc_B", ...]
ranker_2 = ["doc_B", "doc_A", "doc_D", ...]
ranker_3 = ["doc_A", "doc_E", "doc_B", ...]`}
                    </pre>
                    <p>Output: A single, fused ranking of documents</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '1rem' }}>
                      {`rrf_ranking = ["doc_A", "doc_B", "doc_C", ...]`}
                    </pre>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#71461b',
          notes: `### RRF (Reciprocal Rank Fusion)

[cheerfully] Let's talk about **RRF** 👉 'ar-ar-ef' - Reciprocal Rank Fusion - which is honestly one of the most underrated techniques in the reranking toolkit. [playfully] This is the Swiss Army knife of result combination!

#### The Beautiful Simplicity

[excited] Here's what makes **RRF** 👉 'ar-ar-ef' special - it's *simple*. Brilliantly simple. You don't need training data. You don't need relevance scores. You don't even need the systems you're combining to produce scores! [conversational] Just give it ranked lists, and it does the magic. The formula is elegant: for each document, sum up one-divided-by-k-plus-rank across all your ranking systems. That k-value, typically sixty, prevents documents ranked number-one from completely dominating.

#### Why This Works So Well

[storytelling] Think about it this way - **BM25** 👉 'bee-em-twenty-five' catches exact keyword matches. Dense retrievers catch semantic similarity. Maybe you have a specialized ranker for technical terms. Each excels at different things, and each fails at different things. [pleased] **RRF** 👉 'ar-ar-ef' lets them vote! A document that appears in multiple top-ten lists - even if not number-one anywhere - will bubble up to the top of the fused results.

#### The Practical Reality

[enthusiastically] Research shows **RRF** 👉 'ar-ar-ef' often outperforms individual rankers and sometimes beats sophisticated learned fusion methods. It's robust - one bad ranker won't ruin your results. And the implementation? Twenty lines of code, no dependencies, runs in microseconds. Start here before reaching for complex neural fusion models!

#### When RRF Is Perfect

[confidently] Use **RRF** 👉 'ar-ar-ef' when combining different retrieval paradigms - keyword plus semantic, multiple embedding models, or cross-lingual retrievers. It's perfect for heterogeneous document collections where different rankers excel on different content types. And it's your go-to baseline - if you can't beat **RRF** 👉 'ar-ar-ef', your fancy fusion model isn't worth the complexity!`
        },
        {
          id: 25,
          title: 'Example',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.2}>
                <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <GSAPAnimated animation="fadeIn" delay={0.3}>
                    <p style={{ fontSize: '2rem' }}><strong>Example:</strong></p>
                  </GSAPAnimated>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
                    <GSAPAnimated animation="slideInLeft" delay={0.4}>
                      <div>
                        <p style={{ margin: '0px' }}><strong>Query:</strong> "Cloud storage security best practices"</p>
                        <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                        <GSAPStaggerList stagger={0.15} delay={0.6}>
                          <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                            <li>A) Security guide</li>
                            <li>B) General cloud info</li>
                            <li>C) Implementation steps</li>
                          </ul>
                        </GSAPStaggerList>
                        <p style={{ marginTop: '5px' }}><strong>RRF Ranks:</strong></p>
                        <p style={{ fontSize: '1.2rem' }}>DocA &gt; DocB &gt; DocC</p>
                        <p style={{ fontSize: '1.2rem' }}>DocA ranks highest despite not being #1 in most systems (balanced signals)</p>
                      </div>
                    </GSAPAnimated>
                    <GSAPAnimated animation="slideInRight" delay={0.5}>
                      <div>
                        <p style={{ margin: '0px' }}><strong>Ranking:</strong></p>
                        <div style={{ display: 'flex', gap: '20px' }}>
                          <div>
                            <p style={{ marginTop: '5px', fontSize: '1.2rem' }}><strong>BM25 Rank:</strong></p>
                            <GSAPStaggerList stagger={0.15} delay={0.7}>
                              <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                                <li>DocA: 2</li>
                                <li>DocB: 1</li>
                                <li>DocC: 5</li>
                              </ul>
                            </GSAPStaggerList>
                          </div>
                          <div>
                            <p style={{ marginTop: '5px', fontSize: '1.2rem' }}><strong>Dense Rank:</strong></p>
                            <GSAPStaggerList stagger={0.15} delay={0.9}>
                              <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                                <li>DocA: 3</li>
                                <li>DocB: 4</li>
                                <li>DocC: 1</li>
                              </ul>
                            </GSAPStaggerList>
                          </div>

                          <div>
                            <p style={{ marginTop: '5px', fontSize: '1.2rem' }}><strong>Hybrid Rank:</strong></p>
                            <GSAPStaggerList stagger={0.15} delay={1.1}>
                              <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                                <li>DocA: 1</li>
                                <li>DocB: 3</li>
                                <li>DocC: 4</li>
                              </ul>
                            </GSAPStaggerList>
                          </div>

                          <div>
                            <p style={{ marginTop: '5px', fontSize: '1.2rem' }}><strong>RRF Score:</strong></p>
                            <GSAPStaggerList stagger={0.2} delay={1.3}>
                              <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                                <li>DocA: 0.044</li>
                                <li>DocB: 0.038</li>
                                <li>DocC: 0.037</li>
                              </ul>
                            </GSAPStaggerList>
                          </div>
                        </div>
                      </div>
                    </GSAPAnimated>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#71461b',
          notes: `### RRF Example

[storytelling] Let me show you **RRF** 👉 'ar-ar-ef' in action with a real-world scenario that demonstrates why this simple algorithm is so powerful.

#### The Query and Candidates

[conversational] A user searches for "Cloud storage security best practices" - a query that has both keyword elements and semantic meaning. We have three candidates: Document A is a comprehensive security guide, Document B is general cloud information, and Document C contains implementation steps.

#### How Different Rankers See It

[lecture] Here's where it gets interesting. **BM25** 👉 'bee-em-twenty-five' ranks Document B first because it matches "cloud storage" exactly, then Document A at position two. The dense retriever ranks Document C first because it semantically matches "best practices" with "implementation steps," then Document A at position three. A hybrid ranker puts Document A first, recognizing its balanced relevance.

#### The RRF Magic

[excited] Now **RRF** 👉 'ar-ar-ef' does its magic. For Document A: one-divided-by-sixty-two plus one-divided-by-sixty-three plus one-divided-by-sixty-one equals point-zero-four-four. For Document B: one-divided-by-sixty-one plus one-divided-by-sixty-four plus one-divided-by-sixty-three equals point-zero-three-eight. Document C gets point-zero-three-seven.

#### Why Document A Wins

[pleased] Notice something fascinating? Document A never ranked first in most individual systems, but it appeared in the top three of *all* systems! [enthusiastically] That consistent presence across different ranking paradigms is exactly what **RRF** 👉 'ar-ar-ef' rewards. It's finding the consensus winner - the document that multiple independent algorithms agree is relevant. This robustness is why **RRF** 👉 'ar-ar-ef' often beats more complex fusion methods!`
        },
        {
          id: 26,
          title: 'Strength and Limitations',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <GSAPAnimated animation="bounceIn" delay={0.2}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><GSAPAnimated animation="rotateIn" delay={0.3}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /></GSAPAnimated> <strong>Strengths:</strong></p>
                    <GSAPAnimated animation="fadeIn" delay={0.5}>
                      <p>Simple Fast Robust No Training</p>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.12} delay={0.6}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>Requires no training data or model optimization</li>
                        <li>Lightweight computation (just basic math operations)</li>
                        <li>Often outperforms individual rankers and complex methods</li>
                        <li>Model-agnostic: works with any retrieval system</li>
                        <li>Handles outliers gracefully: one bad ranker won't ruin results</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.4}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><GSAPAnimated animation="scaleIn" delay={0.5}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /></GSAPAnimated> <strong>Limitations:</strong></p>
                    <GSAPAnimated animation="fadeIn" delay={0.7}>
                      <p>No semantics Parameter k Quality ceiling</p>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.12} delay={0.8}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>No semantic understanding (just combines existing rankings)</li>
                        <li>Parameter k may need tuning for optimal performance</li>
                        <li>Final quality depends on input rankers' quality</li>
                        <li>May struggle with ambiguous queries where one system is clearly better</li>
                        <li>Cannot leverage relevance scores, only ranks</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#71461b',
          notes: `### RRF Strengths and Limitations

[conversational] Let's be completely honest about what **RRF** 👉 'ar-ar-ef' brings to the table and where it falls short.

#### The Incredible Strengths

[enthusiastically] The beauty of **RRF** 👉 'ar-ar-ef' is its zero-friction deployment. No training data collection, no model fine-tuning, no **GPU** 👉 'gee-pee-you' clusters spinning up. It's literally addition and division - computation measured in microseconds, not milliseconds. [pleased] And here's the kicker - it often beats sophisticated learned fusion methods! The algorithm is remarkably robust. If one of your rankers goes haywire and produces garbage rankings, **RRF** 👉 'ar-ar-ef' won't let that single bad actor destroy your results. The other rankers compensate.

Plus, it's completely model-agnostic. Combine **BM25** 👉 'bee-em-twenty-five' with **BERT** 👉 'bert' embeddings and a domain-specific classifier? No problem. Mix lexical, semantic, and learned rankers? Go ahead! There's no integration complexity - just feed it ranked lists.

#### The Honest Limitations

[cautiously] Now the trade-offs. **RRF** 👉 'ar-ar-ef' has no semantic understanding of its own - it's a pure aggregation technique. If all your input rankers miss the right answer, **RRF** 👉 'ar-ar-ef' will miss it too. The quality ceiling is determined by your weakest link. That k-parameter, usually sixty, might need tuning for your specific data distribution. And **RRF** 👉 'ar-ar-ef' doesn't use relevance scores - only ranks - so you're throwing away score magnitude information that could be useful.

#### The Bottom Line

[confidently] Here's my take - **RRF** 👉 'ar-ar-ef' should be in every retrieval engineer's toolkit. Use it as your baseline. [reassuringly] It's so easy to implement that if you can't beat it with your fancy neural fusion model, you haven't justified the complexity. For many production systems, **RRF** 👉 'ar-ar-ef' plus good input rankers is all you need!`
        }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
        {
          id: 27,
          title: '9) Fusion-in-Decoder (FiD) as Re-Rank/Fusion',
          icon: { name: 'duo-microchip' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <GSAPAnimated animation="slideInTop" delay={0.2}>
                  <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="scaleIn" delay={0.3}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>Goal:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Enables more effective multi-document evidence fusion with a specialized encoder-decoder architecture that processes many documents simultaneously.</p>
                    <GSAPStaggerList stagger={0.15} delay={0.5}>
                      <ul>
                        <li>Combines information from multiple passages in the decoder stage</li>
                        <li>Improves answers requiring evidence from multiple sources</li>
                        <li>Provides implicit document ranking through attention mechanisms</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.3}>
                  <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="bounceIn" delay={0.4}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>How It Works:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Uses a specialized fusion architecture for handling multiple documents.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.5}>
                  <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="rotateIn" delay={0.6}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>When to Use:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} delay={0.7}>
                      <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '1.2rem', lineHeight: '1.4' }}>
                        <li>Multi-hop question answering requiring facts from multiple documents</li>
                        <li>Complex queries where information synthesis is needed</li>
                        <li>When implicit document ranking/scoring is desired as a side effect</li>
                        <li>End-to-end RAG systems where generation and ranking are combined</li>
                        <li>When working with many short, potentially complementary passages</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="flipCard" delay={0.7}><SvgIcon iconName="duo-code" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>Input / Output Format:</span></strong></p>
                    <p style={{ margin: '0px' }}>Input: Query and multiple document passages</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.8rem' }}>
                      {`inputs = {
  "query": "Who founded X and what year?",
  "passages": [
    "John Smith founded...", 
    "Company X was established in 1995...",
    ...
  ]
}`}
                    </pre>
                    <p style={{ margin: '0px' }}>Output: Generated answer and optional document salience scores</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.8rem' }}>
                      {`output = {
  "answer": "John Smith founded X in 1995",
  "doc_scores": [0.8, 0.7, 0.2, ...] # Optional
}`}
                    </pre>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#5f1944',
          notes: `### Fusion-in-Decoder (FiD) as Re-Rank/Fusion

[excited] Let's dive into **FiD** 👉 'fid' - Fusion-in-Decoder - which represents a fundamentally different approach to ranking. [enthusiastically] This isn't just a reranker; it's a complete rethinking of how we handle multiple documents!

#### The Core Architecture Innovation

[lecture] **FiD** 👉 'fid' takes an encoder-decoder model like **T5** 👉 'tee-five' and modifies it for multi-document scenarios. [storytelling] Here's the clever part - it encodes each passage independently with the query, creating separate representations. Then, in the decoder stage, it *fuses* information across all passages to generate an answer. The attention mechanism naturally learns which passages are most important, giving you implicit document ranking as a side effect!

#### When FiD Shines Brightest

[pleased] This architecture excels at multi-hop question answering. [storytelling] Imagine asking "Who founded company X and what year?" - one document says "John Smith founded company X" while another says "Company X was established in nineteen-ninety-five." **FiD** 👉 'fid' synthesizes both passages to answer "John Smith founded company X in nineteen-ninety-five." Traditional rerankers just pick one document; **FiD** 👉 'fid' combines evidence from multiple sources!

#### The RAG Connection

[confidently] In modern **RAG** 👉 'rag' systems - that's Retrieval-Augmented Generation - **FiD** 👉 'fid' offers an elegant solution. You retrieve twenty or fifty candidate passages, and **FiD** 👉 'fid' processes them all simultaneously. The model learns which passages contain relevant information and how to combine that information. You get both a high-quality generated answer *and* document importance scores you can use for ranking!

#### The Reality Check

[cautiously] Now, the trade-offs. **FiD** 👉 'fid' is computationally expensive - you're encoding every passage separately. Context length limitations apply - typically two-thousand-to-eight-thousand tokens total. And it's more complex to train and deploy than simple rerankers. But when you need genuine multi-document reasoning, **FiD** 👉 'fid' delivers results that simpler approaches can't match!`
        },
        {
          id: 28,
          title: 'Example',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="rotateIn" delay={0.2}>
                <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <GSAPAnimated animation="fadeIn" delay={0.3}>
                    <p style={{ fontSize: '2rem' }}><strong>Example:</strong></p>
                  </GSAPAnimated>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
                    <GSAPAnimated animation="slideInLeft" delay={0.4}>
                      <div>
                        <p style={{ margin: '0px' }}><strong>Query:</strong> "Who founded X and in what year?"</p>
                        <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                        <GSAPStaggerList stagger={0.15} delay={0.6}>
                          <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                            <li>A) "John Smith is credited as the founder of company X."</li>
                            <li>B) "Company X was formally established in 1995 in California."</li>
                          </ul>
                        </GSAPStaggerList>
                        <p style={{ marginTop: '5px' }}><strong>FiD Output:</strong></p>
                        <p>Answer: "John Smith founded company X in 1995."</p>
                      </div>
                    </GSAPAnimated>
                    <GSAPAnimated animation="slideInRight" delay={0.5}>
                      <div>
                        <p style={{ margin: '0px' }}><strong>Ranking:</strong></p>
                        <GSAPStaggerList stagger={0.2} delay={0.8}>
                          <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                            <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px', fontSize: '1.2rem' }}>0.85 → A) Founder information</div>
                            <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px', fontSize: '1.2rem' }}>0.82 → B) Year information</div>
                          </div>
                        </GSAPStaggerList>
                      </div>
                    </GSAPAnimated>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5f1944',
          notes: `### FiD Example

[storytelling] Let me show you **FiD** 👉 'fid' solving a problem that stumps simpler rerankers - multi-hop reasoning across documents.

#### The Multi-Hop Challenge

[lecture] The query is "Who founded X and in what year?" Notice this requires *two* pieces of information. Document A tells us "John Smith is credited as the founder of company X." Document B tells us "Company X was formally established in nineteen-ninety-five in California." Neither document alone answers the complete question!

#### How FiD Solves This

[conversational] A traditional reranker would pick either Document A or Document B as "most relevant" and call it done. [excited] But **FiD** 👉 'fid' does something smarter. It encodes both passages independently with the query, then in the decoder stage, it *fuses* information from both sources. The attention mechanism learns that the "founder" information comes from Document A and the "year" information comes from Document B.

#### The Generated Answer

[pleased] The result? **FiD** 👉 'fid' generates: "John Smith founded company X in nineteen-ninety-five." This answer synthesizes facts from both passages into a coherent response. And as a bonus, you get document salience scores - point-eight-five for Document A and point-eight-two for Document B - showing both were highly relevant to the answer generation.

#### Why This Matters

[confidently] This capability is crucial for complex question-answering systems. Real-world queries often require synthesizing information from multiple sources. Financial analysis needs data from multiple reports. Medical diagnosis requires combining symptoms, history, and test results. **FiD** 👉 'fid' handles this naturally, where traditional rerankers would force you to pick just one document and lose crucial information!`
        },
        {
          id: 29,
          title: 'Strength and Limitations',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <GSAPAnimated animation="slideInTop" delay={0.2}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><GSAPAnimated animation="bounceIn" delay={0.3}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /></GSAPAnimated> <strong>Strengths:</strong></p>
                    <GSAPAnimated animation="fadeIn" delay={0.5}>
                      <p>Fusion Multi-hop End-to-end</p>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.12} delay={0.6}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>Superior performance on complex multi-document QA tasks</li>
                        <li>Efficiently handles many input passages simultaneously</li>
                        <li>Implicitly ranks document importance through attention signals</li>
                        <li>Single model handles both ranking and generation</li>
                        <li>Can extract cross-document relationships and resolve conflicts</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.4}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><GSAPAnimated animation="scaleIn" delay={0.5}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /></GSAPAnimated> <strong>Limitations:</strong></p>
                    <GSAPAnimated animation="fadeIn" delay={0.7}>
                      <p>Resource Complexity Indirect</p>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.12} delay={0.8}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>Higher training and inference compute requirements</li>
                        <li>Maximum context length limitations (typically 2048-8192 tokens)</li>
                        <li>Re-ranking capabilities are indirect (extracted from attention)</li>
                        <li>More complex to implement and train than pure rerankers</li>
                        <li>Document scores may be less calibrated than dedicated rerankers</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#5f1944',
          notes: `### FiD Strengths and Limitations

[conversational] Let's honestly evaluate **FiD** 👉 'fid' - where it excels and where you might want alternatives.

#### The Powerful Strengths

[enthusiastically] **FiD** 👉 'fid' absolutely dominates on complex multi-document question answering tasks. Benchmark results consistently show it outperforming pipeline approaches that retrieve-then-rank-then-generate. [pleased] The architecture efficiently processes twenty, fifty, even a hundred passages simultaneously - something that would be prohibitively expensive with cross-encoders processing each pair individually. And you get two capabilities in one model: answer generation *and* implicit document ranking through attention weights!

The cross-document reasoning is genuinely impressive. **FiD** 👉 'fid' can resolve contradictions, synthesize complementary information, and understand relationships between documents. When Document A says "The capital is X" but Document B says "Recent legislation moved the capital to Y," **FiD** 👉 'fid' can reason about which is current based on context clues.

#### The Significant Limitations

[cautiously] Now the hard truths. **FiD** 👉 'fid' requires substantial computational resources - you're encoding every passage through the full encoder stack. [sigh] Training is complex, requiring careful tuning and significant **GPU** 👉 'gee-pee-you' time. Context length limits are real - most **FiD** 👉 'fid' implementations top out at two-thousand-to-eight-thousand tokens total across all passages. That constrains how many documents you can process or how long each can be.

The reranking capability, while useful, is indirect - you're extracting attention weights rather than explicit relevance scores. These scores aren't as well-calibrated as dedicated rerankers trained specifically for ranking. And implementation complexity is significant - this isn't a drop-in replacement for a simple cross-encoder.

#### The Strategic Decision

[confidently] Use **FiD** 👉 'fid' when you genuinely need multi-document reasoning and answer generation together. If you just need ranking, simpler models are better. If you need the capability, the complexity is justified. If you don't, it's overkill!`
        }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
        {
          id: 30,
          title: '10) DPR Re-Ranker (Dense Passage Retrieval)',
          icon: { name: 'duo-stream' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <GSAPAnimated animation="flipCard" delay={0.2}>
                  <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="rotateIn" delay={0.3}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>Goal:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Dense Passage Retrieval (DPR) as a re-ranker provides efficient semantic matching specifically optimized for question-answering tasks.</p>
                    <GSAPStaggerList stagger={0.15} delay={0.5}>
                      <ul>
                        <li>Overcomes lexical matching limitations of traditional retrievers</li>
                        <li>Enables fast semantic similarity scoring for candidate documents</li>
                        <li>Bridges the gap between simple vector search and expensive cross-encoders</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="scaleIn" delay={0.4}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>How It Works:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Uses a dual-encoder architecture fine-tuned on question-answer pairs.</p>
                    <p>Key mechanism: Independent encoding → vector similarity → score-based reranking</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.5}>
                  <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="bounceIn" delay={0.6}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>When to Use:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} delay={0.7}>
                      <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '1.2rem', lineHeight: '1.4' }}>
                        <li>Open-domain question answering systems</li>
                        <li>Low-latency reranking after initial retrieval</li>
                        <li>When domain knowledge can be incorporated via fine-tuning</li>
                        <li>Production environments sensitive to computational costs</li>
                        <li>When working with already-embedded document collections</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.6}>
                  <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="flipCard" delay={0.7}><SvgIcon iconName="duo-code" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>Input / Output Format:</span></strong></p>
                    <p style={{ margin: '0px' }}>Input: Query embedding and passage embeddings</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.8rem' }}>
                      {`query_embedding = query_encoder(query)
passage_embeddings = [passage_encoder(p) for p in passages]

# For reranking
scores = []
for emb in passage_embeddings:
    score = cosine_similarity(query_embedding, emb)
    scores.append(score)`}
                    </pre>
                    <p style={{ margin: '0px' }}>Output: Similarity scores for reranking passages</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.8rem' }}>
                      {`ranked_passages = [p for _, p in 
                  sorted(zip(scores, passages), 
                  key=lambda x: x[0], reverse=True)]`}
                    </pre>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#611919',
          notes: `### DPR Re-Ranker (Dense Passage Retrieval)

[cheerfully] Let's talk about **DPR** 👉 'dee-pee-ar' - Dense Passage Retrieval - which pioneered the bi-encoder approach for question answering and remains highly relevant today!

#### The DPR Revolution

[excited] Back in twenty-twenty, Facebook Research - now Meta - released **DPR** 👉 'dee-pee-ar' and it was genuinely revolutionary. [lecture] Before **DPR** 👉 'dee-pee-ar', most question-answering systems relied on **BM25** 👉 'bee-em-twenty-five' for retrieval, missing semantic matches. **DPR** 👉 'dee-pee-ar' showed you could train dual **BERT** 👉 'bert' encoders - one for questions, one for passages - using contrastive learning on question-answer pairs. The result? Semantic matching that crushes keyword-only approaches!

#### The Architecture Advantage

[conversational] Here's why **DPR** 👉 'dee-pee-ar' works so well as a reranker. You encode passages offline and cache the embeddings. At query time, you only encode the question - that's one forward pass through **BERT** 👉 'bert'. Then it's just dot products or cosine similarity to score candidates. [pleased] This separate encoding is what makes it *fast* - we're talking milliseconds for scoring hundreds of passages!

#### When DPR Makes Perfect Sense

[confidently] **DPR** 👉 'dee-pee-ar' shines in open-domain question answering - think Wikipedia-scale knowledge bases. It's perfect when you're cost-sensitive or latency-constrained. If you can fine-tune on your domain-specific question-answer pairs, accuracy improves dramatically. And if you already have document embeddings for retrieval, using those same embeddings for reranking is essentially free!

#### The Modern Context

[reassuringly] Today, **DPR** 👉 'dee-pee-ar' competes with newer models like **E5** 👉 'ee-five' and **BGE** 👉 'bee-gee-ee', but it's still a solid choice. The training approach - hard negatives, in-batch negatives, contrastive learning - established patterns that all modern bi-encoders follow. If you're building a question-answering system and need speed over maximum precision, **DPR** 👉 'dee-pee-ar' or its descendants should be in your toolkit!`
        },
        {
          id: 31,
          title: 'Example',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="bounceIn" delay={0.2}>
                <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <GSAPAnimated animation="fadeIn" delay={0.3}>
                    <p style={{ fontSize: '2rem' }}><strong>Example:</strong></p>
                  </GSAPAnimated>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
                    <GSAPAnimated animation="slideInLeft" delay={0.4}>
                      <div>
                        <p style={{ margin: '0px' }}><strong>Query:</strong> "Capital gains tax allowance UK 2024"</p>
                        <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                        <GSAPStaggerList stagger={0.15} delay={0.6}>
                          <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                            <li>A) Generic UK tax guide</li>
                            <li>B) 2024 tax thresholds and rates</li>
                            <li>C) Investment strategies</li>
                          </ul>
                        </GSAPStaggerList>
                      </div>
                    </GSAPAnimated>
                    <GSAPAnimated animation="slideInRight" delay={0.5}>
                      <div>
                        <p style={{ margin: '0px' }}><strong>Ranking:</strong></p>
                        <GSAPStaggerList stagger={0.2} delay={0.8}>
                          <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                            <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px', fontSize: '1.2rem' }}>0.89 → B) 2024 tax thresholds and rates</div>
                            <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px', fontSize: '1.2rem' }}>0.67 → A) Generic UK tax guide</div>
                            <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px', fontSize: '1.2rem' }}>0.45 → C) Investment strategies</div>
                          </div>
                        </GSAPStaggerList>
                      </div>
                    </GSAPAnimated>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#611919',
          notes: `### DPR Example

[storytelling] Let me show you **DPR** 👉 'dee-pee-ar' handling a specific factual question - exactly the type of query it was designed for!

#### The Specific Factual Query

[conversational] The query is "Capital gains tax allowance UK twenty-twenty-four" - a precise factual question with clear information needs: tax type, jurisdiction, year, and threshold amount. This is classic question-answering territory where **DPR** 👉 'dee-pee-ar' excels!

#### The Document Candidates

[lecture] We have three options. Document A is a generic **UK** 👉 'you-kay' tax guide - useful background but not specific to capital gains or twenty-twenty-four. Document B covers twenty-twenty-four tax thresholds and rates - this is highly specific to both the year and the tax details we need. Document C discusses investment strategies - tangentially related but not answering the specific question.

#### How DPR Processes This

[conversational] **DPR** 👉 'dee-pee-ar' encodes the question: "What is the capital gains tax allowance in the **UK** 👉 'you-kay' for twenty-twenty-four?" into a dense vector that captures the semantic intent - we need a specific numeric threshold for a specific tax in a specific country for a specific year. Each document gets encoded into its own vector. Then it's simple cosine similarity between question vector and document vectors.

#### The Results

[pleased] Document B scores point-eight-nine - the embedding strongly aligns because it contains the exact information needed: "twenty-twenty-four," "tax," "thresholds," and "rates." Document A gets point-six-seven - it's about **UK** 👉 'you-kay' tax, so moderately relevant, but too general. Document C scores point-four-five - weakly related through "investment" and "capital" but missing the core question elements.

#### Why This Works

[confidently] **DPR** 👉 'dee-pee-ar' was specifically trained on question-answer pairs from datasets like Natural Questions and SQuAD. It learned to recognize question patterns like "what is [entity] in [location] for [time]" and match them to passages that answer those patterns. This targeted training makes it incredibly effective for factual **QA** 👉 'que-ay'!`
        },
        {
          id: 32,
          title: 'Strength and Limitations',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <GSAPAnimated animation="slideInTop" delay={0.2}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><GSAPAnimated animation="scaleIn" delay={0.3}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /></GSAPAnimated> <strong>Strengths:</strong></p>
                    <GSAPAnimated animation="fadeIn" delay={0.5}>
                      <p>Speed Efficiency QA-optimized</p>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.12} delay={0.6}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>Fast and efficient compared to cross-encoders</li>
                        <li>Battle-tested in production QA systems</li>
                        <li>Can be fine-tuned for specific domains/tasks</li>
                        <li>Supports indexing for sub-linear retrieval time</li>
                        <li>Easy to integrate with existing vector databases</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.4}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><GSAPAnimated animation="rotateIn" delay={0.5}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /></GSAPAnimated> <strong>Limitations:</strong></p>
                    <GSAPAnimated animation="fadeIn" delay={0.7}>
                      <p>Precision Domain Drift Complexity</p>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.12} delay={0.8}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>Less precise than cross-encoders (no direct query-document interaction)</li>
                        <li>Performance degrades without domain-specific fine-tuning</li>
                        <li>Limited to capturing high-level semantic relationships</li>
                        <li>Vector dimensionality constrains representational capacity</li>
                        <li>Requires careful negative sampling during training</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#611919',
          notes: `### DPR Strengths and Limitations

[conversational] Let's be brutally honest about **DPR** 👉 'dee-pee-ar' - where it excels and where you'll hit walls.

#### The Battle-Tested Strengths

[pleased] **DPR** 👉 'dee-pee-ar' has been deployed at massive scale in production **QA** 👉 'que-ay' systems for years now. [enthusiastically] It's *fast* - we're talking five-to-ten-times faster than cross-encoders, sometimes more. You can score hundreds of candidates in milliseconds. The separate encoding architecture means document embeddings get computed once, cached, and reused for every query. That's huge for cost and latency!

Integration is straightforward - every major vector database supports **DPR** 👉 'dee-pee-ar' embeddings out of the box. **Faiss** 👉 'face', **Pinecone** 👉 'pine-cone', **Weaviate** 👉 'weave-ee-ate', **Qdrant** 👉 'quad-rant' - they all work beautifully. And if you have domain-specific question-answer pairs, fine-tuning **DPR** 👉 'dee-pee-ar' can dramatically improve accuracy. Medical **QA** 👉 'que-ay'? Legal **QA** 👉 'que-ay'? Fine-tune on your data!

#### The Precision Gap

[cautiously] Now the hard truth - **DPR** 👉 'dee-pee-ar' will underperform cross-encoders on precision, typically by ten-to-twenty percent on ranking metrics. Why? No direct query-document interaction during encoding. The question vector and passage vector are created independently, so you're missing the fine-grained attention patterns that cross-encoders capture. For complex reasoning about relevance, separate encoders have a ceiling.

#### The Domain Drift Problem

[seriously] Here's a critical limitation - **DPR** 👉 'dee-pee-ar' trained on Wikipedia questions struggles with specialized domains. Ask it about obscure technical jargon, rare medical conditions, or very recent events, and accuracy drops noticeably. The fix is fine-tuning, but that requires labeled question-passage pairs from your domain. Collecting that training data isn't always feasible.

#### The Strategic Choice

[confidently] Use **DPR** 👉 'dee-pee-ar' when speed and scalability matter more than absolute precision. Use it for first-stage reranking, then apply a cross-encoder to the top-ten. Or fine-tune it on your domain and enjoy both speed and accuracy. Just don't expect out-of-the-box **DPR** 👉 'dee-pee-ar' to match cross-encoder precision on specialized content!`
        }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
        {
          id: 33,
          title: '11) BM25 + LLM Reranking Hybrid)',
          icon: { name: 'duo-stream' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <GSAPAnimated animation="rotateIn" delay={0.2}>
                  <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="scaleIn" delay={0.3}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>Goal:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Combines lexical precision of keyword matching with semantic reasoning capabilities to create a robust, explainable ranking system.</p>
                    <GSAPStaggerList stagger={0.15} delay={0.5}>
                      <ul>
                        <li>Bridges the gap between traditional search and neural approaches</li>
                        <li>Reduces hallucination risk through strong keyword grounding</li>
                        <li>Improves relevance for keyword-heavy and technical content</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="bounceIn" delay={0.4}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>How It Works:</span></strong></p>
                    <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Two-stage pipeline that leverages both traditional IR and advanced neural methods.</p>
                    <p>Key mechanism: BM25 provides initial keyword-based retrieval → LLM analyzes semantic meaning and reranks considering both relevance and BM25 scores</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="flipCard" delay={0.6}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>When to Use:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} delay={0.7}>
                      <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '1.2rem', lineHeight: '1.4' }}>
                        <li>Technical or specialized domains with domain-specific terminology</li>
                        <li>When exact keyword matching is crucial (e.g., error codes, product IDs)</li>
                        <li>Content with structured or semi-structured format</li>
                        <li>When transparency and explainability of results matter</li>
                        <li>Systems requiring resilience to out-of-distribution queries</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInTop" delay={0.6}>
                  <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><GSAPAnimated animation="rotateIn" delay={0.7}><SvgIcon iconName="duo-code" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /></GSAPAnimated><span style={{ marginTop: '4px', fontSize: '2rem' }}>Input / Output Format:</span></strong></p>
                    <p>Input: Query, documents with BM25 scores, and optional embedding similarities</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.8rem' }}>
                      {`hybrid_inputs = {
  "query": "error E101 on firmware v2.3",
  "documents": [
    {"content": "...", "bm25_score": 0.85},
    {"content": "...", "bm25_score": 0.72},
  ]
}`}
                    </pre>
                    <p>Output: Reranked documents with combined relevance scores</p>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.8rem' }}>
                      {`results = [
  {"doc_id": 3, "score": 0.89, "bm25": 0.72, "llm": 0.95},
  {"doc_id": 1, "score": 0.76, "bm25": 0.85, "llm": 0.70},
]`}
                    </pre>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#236521',
          notes: `### BM25 + LLM Reranking Hybrid

[cheerfully] Now let's talk about **BM25** 👉 'bee-em-twenty-five' plus **LLM** 👉 'el-el-em' hybrid reranking - a powerful combination that's becoming increasingly popular in production systems!

#### The Best of Both Worlds Philosophy

[excited] Here's the core insight - **BM25** 👉 'bee-em-twenty-five' and **LLMs** 👉 'el-el-ems' have complementary strengths. [lecture] **BM25** 👉 'bee-em-twenty-five' excels at exact keyword matching - error codes, product numbers, technical acronyms. **LLMs** 👉 'el-el-ems' excel at semantic understanding - paraphrases, synonyms, contextual relevance. [playfully] Why choose when you can combine both?

#### How the Pipeline Works

[conversational] The architecture is straightforward. First, **BM25** 👉 'bee-em-twenty-five' does initial retrieval - fast, lexical, keyword-based. This filters your million-document corpus down to maybe fifty to a hundred candidates. Then the **LLM** 👉 'el-el-em' reranks these candidates, considering both the **BM25** 👉 'bee-em-twenty-five' scores as a signal and its own semantic understanding. You can even prompt the **LLM** 👉 'el-el-em' with custom ranking criteria!

#### The Technical Domain Sweet Spot

[enthusiastically] This hybrid approach absolutely shines in technical domains. [storytelling] Think documentation with error codes, **API** 👉 'ay-pee-eye' references, version numbers, specific function names. The query "error E-one-zero-one on firmware vee-two-point-three" needs *both* exact matching on "E-one-zero-one" and "vee-two-point-three" *and* semantic understanding of troubleshooting intent. **BM25** 👉 'bee-em-twenty-five' ensures you find documents with those exact codes. The **LLM** 👉 'el-el-em' ensures you rank the troubleshooting guide above generic error documentation.

#### The Explainability Advantage

[pleased] Here's a bonus - this hybrid is naturally explainable! You can show users "This result scored high on keyword match *and* the **AI** 👉 'ay-eye' determined it answered your question." [confidently] That transparency builds trust. The **BM25** 👉 'bee-em-twenty-five' component provides a stable, predictable baseline, while the **LLM** 👉 'el-el-em' adds nuanced understanding. It's robust to weird queries because even if the **LLM** 👉 'el-el-em' gets confused, **BM25** 👉 'bee-em-twenty-five' keeps you grounded in keyword relevance!`
        },
        {
          id: 34,
          title: 'Example',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="flipCard" delay={0.2}>
                <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <GSAPAnimated animation="fadeIn" delay={0.3}>
                    <p style={{ fontSize: '2rem' }}><strong>Example:</strong></p>
                  </GSAPAnimated>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
                    <GSAPAnimated animation="slideInLeft" delay={0.4}>
                      <div>
                        <p style={{ margin: '0px' }}><strong>Query:</strong> "error E101 on firmware v2.3"</p>
                        <p style={{ marginTop: '5px' }}><strong>BM25 Rank:</strong></p>
                        <GSAPStaggerList stagger={0.15} delay={0.6}>
                          <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                            <li>A) E101 error documentation</li>
                            <li>B) Firmware update v2.3 release notes</li>
                            <li>C) E101 troubleshooting steps</li>
                          </ul>
                        </GSAPStaggerList>
                      </div>
                    </GSAPAnimated>
                    <GSAPAnimated animation="slideInRight" delay={0.5}>
                      <div>
                        <p style={{ margin: '0px' }}><strong>LLM Rerank:</strong></p>
                        <GSAPStaggerList stagger={0.2} delay={0.8}>
                          <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                            <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px', fontSize: '1.2rem' }}>0.94 → C) E101 troubleshooting steps</div>
                            <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px', fontSize: '1.2rem' }}>0.79 → A) E101 error documentation</div>
                            <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px', fontSize: '1.2rem' }}>0.65 → B) Firmware update v2.3 release notes</div>
                          </div>
                        </GSAPStaggerList>
                      </div>
                    </GSAPAnimated>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#236521',
          notes: `### BM25 + LLM Hybrid Example

[storytelling] Let me show you the hybrid approach solving a technical support query - this is exactly where it shines!

#### The Technical Query

[conversational] The query is "error E-one-zero-one on firmware vee-two-point-three" - notice this has both exact identifiers and implicit intent. The user needs troubleshooting help for a specific error on a specific firmware version. This requires precision on the exact codes *and* understanding what kind of information would be helpful!

#### BM25 Initial Retrieval

[lecture] **BM25** 👉 'bee-em-twenty-five' does initial retrieval based on keyword matching. Document A - "E-one-zero-one error documentation" - gets retrieved because "E-one-zero-one" matches. Document B - "Firmware update vee-two-point-three release notes" - matches "vee-two-point-three" and "firmware." Document C - "E-one-zero-one troubleshooting steps" - matches "E-one-zero-one" strongly. All three get through the initial filter!

#### The LLM Reranking Intelligence

[excited] Now the **LLM** 👉 'el-el-em' reranks with semantic understanding. It recognizes that "error...on firmware" signals a problem-solving intent, not just information gathering. [pleased] Document C - troubleshooting steps - gets boosted to point-nine-four because the **LLM** 👉 'el-el-em' understands this is *actionable* guidance for fixing the error. Document A - error documentation - scores point-seven-nine, useful but more reference than solution. Document B - release notes - drops to point-six-five because while it mentions the firmware version, it's not about fixing errors!

#### Why the Hybrid Wins

[enthusiastically] Here's the magic - **BM25** 👉 'bee-em-twenty-five' ensured we found documents with the exact codes "E-one-zero-one" and "vee-two-point-three." Pure semantic search might have missed the exact version match! But the **LLM** 👉 'el-el-em' understood that among these keyword-matched documents, the troubleshooting guide is most helpful. Pure **BM25** 👉 'bee-em-twenty-five' might have ranked generic documentation higher just because it repeated the error code more times!

#### The Production Value

[confidently] This combination is incredibly robust. If the **LLM** 👉 'el-el-em' makes a weird judgment call, you still have solid keyword-based candidates. If **BM25** 👉 'bee-em-twenty-five' returns some noisy matches, the **LLM** 👉 'el-el-em' filters out the irrelevant ones. [reassuringly] It's defensive programming for search!`
        },
        {
          id: 35,
          title: 'Strength and Limitations',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><GSAPAnimated animation="bounceIn" delay={0.3}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /></GSAPAnimated> <strong>Strengths:</strong></p>
                    <GSAPAnimated animation="fadeIn" delay={0.5}>
                      <p>Robust Explainable Adaptable</p>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.12} delay={0.6}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>Strong real-world performance across diverse query types</li>
                        <li>Resilient to out-of-domain phrases and terminology</li>
                        <li>Maintains keyword precision while adding semantic understanding</li>
                        <li>Can provide transparent, explainable rankings (BM25 + LLM reasons)</li>
                        <li>Adaptable to different domains and content types</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><GSAPAnimated animation="rotateIn" delay={0.5}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /></GSAPAnimated> <strong>Limitations:</strong></p>
                    <GSAPAnimated animation="fadeIn" delay={0.7}>
                      <p>Complexity Tuning Cost</p>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.12} delay={0.8}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                        <li>Pipeline complexity increases development and maintenance overhead</li>
                        <li>Requires careful tuning of fusion weights between BM25 and LLM signals</li>
                        <li>LLM pass adds latency (200-500ms) and API costs</li>
                        <li>Multiple components create more potential failure points</li>
                        <li>BM25 component may need periodic reindexing for dynamic content</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#236521',
          notes: `### BM25 + LLM Hybrid Strengths and Limitations

[conversational] Let's evaluate the **BM25** 👉 'bee-em-twenty-five' plus **LLM** 👉 'el-el-em' hybrid honestly - both its impressive capabilities and real operational challenges.

#### The Proven Strengths

[enthusiastically] This hybrid approach shows remarkable robustness in production. You get the best of both worlds - keyword precision *and* semantic understanding. [pleased] Real-world queries are messy - sometimes keyword-heavy, sometimes semantic, often both - and this architecture handles them all gracefully. The resilience to weird queries is fantastic. If someone searches with obscure jargon or a completely novel phrase, **BM25** 👉 'bee-em-twenty-five' keeps you grounded in term overlap while the **LLM** 👉 'el-el-em' attempts semantic understanding.

The explainability is genuinely valuable. You can tell users "This document matched your keywords *and* our **AI** 👉 'ay-eye' determined it answers your question" - that transparency builds trust. And the system is naturally adaptable - tune the **BM25** 👉 'bee-em-twenty-five' parameters for your corpus, adjust the **LLM** 👉 'el-el-em' prompts for your domain, modify the fusion weights based on query type!

#### The Operational Challenges

[cautiously] Now the hard truths. You're running a multi-component pipeline, which means complexity. [sigh] Development overhead, testing overhead, monitoring overhead - you need to track both **BM25** 👉 'bee-em-twenty-five' performance *and* **LLM** 👉 'el-el-em' performance. The fusion weights - how much to trust **BM25** 👉 'bee-em-twenty-five' versus the **LLM** 👉 'el-el-em' - require careful tuning. Get it wrong and you're either over-relying on keywords or over-trusting the **LLM** 👉 'el-el-em'.

#### The Cost Reality

[seriously] The **LLM** 👉 'el-el-em' reranking pass adds real latency - typically two-hundred-to-five-hundred milliseconds - and **API** 👉 'ay-pee-eye' costs per query. For high-volume systems, those costs add up quickly. And you have multiple failure modes - the **BM25** 👉 'bee-em-twenty-five' index could be stale, the **LLM** 👉 'el-el-em' **API** 👉 'ay-pee-eye' could timeout, the fusion logic could have bugs. More components mean more things to monitor and fix!

#### The Strategic Assessment

[confidently] Use this hybrid when you need both keyword precision and semantic understanding - technical docs, legal content, specialized domains. [reassuringly] The complexity is justified when simpler approaches fail. But if pure semantic search or pure keyword search works well enough, don't overcomplicate! Monitor your metrics, A-B test aggressively, and make sure the gains justify the operational overhead!`
        }
      ]
    },
    {
      id: 'summary-recommendations',
      title: 'Summary & Recommendations',
      slides: [
        {
          id: 36,
          title: 'Model Comparison at a Glance',
          icon: { name: 'duo-table' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <GSAPAnimated animation="fadeIn" delay={0.2}>
                  <table style={{ width: '100%', fontSize: '1.2rem', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: 'rgba(79, 195, 247, 0.2)', borderBottom: '2px solid rgba(79, 195, 247, 0.5)' }}>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Model Type</th>
                        <th style={{ padding: '10px', textAlign: 'center' }}>Accuracy</th>
                        <th style={{ padding: '10px', textAlign: 'center' }}>Speed</th>
                        <th style={{ padding: '10px', textAlign: 'center' }}>Setup</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: '1. Cross-Encoder (MS MARCO)', acc: 'High', speed: 'Slow', setup: 'Medium', use: 'Precision-critical, GPU available' },
                        { name: '2. BERT Cross-Encoder', acc: 'High', speed: 'Medium', setup: 'Easy', use: 'Production default, balanced' },
                        { name: '3. MonoT5 Re-Ranker', acc: 'High', speed: 'Slow', setup: 'Medium', use: 'Transfer learning, accuracy focus' },
                        { name: '4. MonoBERT Re-Ranker', acc: 'High', speed: 'Medium', setup: 'Medium', use: 'Classic IR pipelines' },
                        { name: '5. ColBERT / ColBERTv2', acc: 'High', speed: 'Medium', setup: 'Complex', use: 'Token-level matching, technical docs' },
                        { name: '6. E5-Ranker (bi-encoder)', acc: 'Medium', speed: 'Fast', setup: 'Easy', use: 'Low-latency, high-throughput, CPU' },
                        { name: '7. LLM-as-a-Ranker', acc: 'High', speed: 'Very Slow', setup: 'Medium', use: 'Zero-shot, complex reasoning' },
                        { name: '8. RRF', acc: 'Medium', speed: 'Fast', setup: 'Easy', use: 'Combining multiple retrievers' },
                        { name: '9. Fusion-in-Decoder', acc: 'High', speed: 'Slow', setup: 'Complex', use: 'Multi-hop QA, end-to-end' },
                        { name: '10. DPR Re-Ranker', acc: 'Medium', speed: 'Fast', setup: 'Easy', use: 'QA systems, cost-sensitive' },
                        { name: '11. BM25 + LLM Hybrid', acc: 'High', speed: 'Medium', setup: 'Medium', use: 'Technical domains, explainability' },
                      ].map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: i % 2 === 0 ? 'rgba(0,0,0,0.1)' : 'transparent' }}>
                          <td style={{ padding: '8px' }}>{row.name}</td>
                          <td style={{ padding: '8px', textAlign: 'center' }}>
                            <span style={{
                              padding: '3px 8px',
                              borderRadius: '3px',
                              background: row.acc === 'High' ? 'rgba(129, 199, 132, 0.3)' : 'rgba(255, 183, 77, 0.3)'
                            }}>{row.acc}</span>
                          </td>
                          <td style={{ padding: '8px', textAlign: 'center' }}>
                            <span style={{
                              padding: '3px 8px',
                              borderRadius: '3px',
                              background: row.speed === 'Fast' ? 'rgba(129, 199, 132, 0.3)' : row.speed === 'Medium' ? 'rgba(255, 183, 77, 0.3)' : 'rgba(239, 83, 80, 0.3)'
                            }}>{row.speed}</span>
                          </td>
                          <td style={{ padding: '8px', textAlign: 'center' }}>{row.setup}</td>
                          <td style={{ padding: '8px', fontSize: '0.85em' }}>{row.use}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.4}>
                  <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '8px' }}>
                    <h3 style={{ color: '#ffb74d', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                      <GSAPAnimated animation="rotateIn" delay={0.5}>
                        <SvgIcon iconName="duo-chart-line" sizeName="2x" darkModeInvert={true} />
                      </GSAPAnimated>
                      Key Performance Metrics
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', fontSize: '1.2rem' }}>
                      <GSAPAnimated animation="scaleIn" delay={0.6}>
                        <div style={{ padding: '10px', background: 'rgba(0,0,0,0.2)', borderRadius: '5px' }}>
                          <div>Latency Impact</div>
                          <div style={{ fontWeight: 'bold', color: '#4fc3f7', marginTop: '5px' }}>+200-500ms</div>
                          <div>Per reranking pass</div>
                        </div>
                      </GSAPAnimated>
                      <GSAPAnimated animation="scaleIn" delay={0.7}>
                        <div style={{ padding: '10px', background: 'rgba(0,0,0,0.2)', borderRadius: '5px' }}>
                          <div>Accuracy Gain</div>
                          <div style={{ fontWeight: 'bold', color: '#81c784', marginTop: '5px' }}>+20-35%</div>
                          <div>Precision improvement</div>
                        </div>
                      </GSAPAnimated>
                      <GSAPAnimated animation="scaleIn" delay={0.8}>
                        <div style={{ padding: '10px', background: 'rgba(0,0,0,0.2)', borderRadius: '5px' }}>
                          <div>Optimal Depth</div>
                          <div style={{ fontWeight: 'bold', color: '#ffb74d', marginTop: '5px' }}>20-50 → 5-10</div>
                          <div>Retrieve → Rerank</div>
                        </div>
                      </GSAPAnimated>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.9}>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                    <MermaidPopover
                      diagram={`graph TD
    A[Which Model Should I Choose?] --> B{Need maximum<br/>accuracy?}
    B -->|Yes| C{Have GPU<br/>resources?}
    B -->|No| D{Need high<br/>throughput?}
    
    C -->|Yes| E[Cross-Encoder<br/>MS MARCO/BERT]
    C -->|No| F{Multi-document<br/>reasoning?}
    
    F -->|Yes| G[Fusion-in-Decoder<br/>FiD]
    F -->|No| H[LLM-as-Ranker<br/>GPT-4/Claude]
    
    D -->|Yes| I{Can pre-compute<br/>embeddings?}
    D -->|No| J[Reciprocal Rank<br/>Fusion RRF]
    
    I -->|Yes| K[E5/DPR<br/>Bi-encoder]
    I -->|No| L{Technical<br/>domain?}
    
    L -->|Yes| M[BM25 + LLM<br/>Hybrid]
    L -->|No| N[ColBERT<br/>Token-level]
    
    style E fill:#81c784
    style G fill:#81c784
    style H fill:#ffb74d
    style K fill:#4fc3f7
    style J fill:#64b5f6
    style M fill:#ba68c8
    style N fill:#f06292`}
                      title="Model Selection Decision Tree"
                    />
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#481967',
          notes: `### Model Comparison at a Glance

[cheerfully] Alright, let's pull everything together and give you the practical comparison you can actually use when making architecture decisions!

#### Reading the Comparison Table

[conversational] This table distills eleven models into their essential characteristics. Notice the pattern - high accuracy models tend to be slower, while fast models sacrifice some precision. [playfully] There's no free lunch! [confidently] But the "Best For" column is crucial - it tells you which model matches which use case. Cross-encoders for precision-critical work, bi-encoders for high-throughput, **RRF** 👉 'ar-ar-ef' for simple fusion, **LLMs** 👉 'el-el-ems' for complex reasoning.

#### The Performance Metrics Reality

[lecture] Let's talk real numbers. Adding a reranking pass costs you two-hundred-to-five-hundred milliseconds of latency - that's significant! [pleased] But you gain twenty-to-thirty-five percent precision improvement, which can be transformative for user experience. The optimal pattern? Retrieve twenty-to-fifty candidates with fast methods, then rerank down to five-to-ten with your best model. That's the balance between cost, latency, and accuracy!

#### The Decision Tree

[reassuringly] I've included a decision flowchart to help you navigate model selection. Start with your requirements - do you need maximum accuracy? Are you throughput-constrained? Do you have **GPU** 👉 'gee-pee-you' resources? Can you pre-compute embeddings? The flowchart guides you through these decisions to land on the right model for your specific constraints!

#### The Practical Approach

[warmly] Here's my advice - start with a simple baseline like **RRF** 👉 'ar-ar-ef' or **E5** 👉 'ee-five'. Measure your metrics. Then upgrade incrementally. Maybe add a lightweight cross-encoder for the top-ten results. Or combine **BM25** 👉 'bee-em-twenty-five' with dense retrieval. Don't jump straight to the most complex solution - build up only as needed!

#### Context Matters

[firmly] Remember, these comparisons are guidelines, not absolute rules. Your specific corpus, query distribution, latency requirements, and budget will shift the optimal choice. [storytelling] A medical **QA** 👉 'que-ay' system has different needs than an e-commerce search. A research prototype has different constraints than a production system serving millions. Always A-B test in your actual environment!`
        },
        {
          id: 37,
          title: 'Quick Recommendations by Use Case',
          icon: { name: 'duo-map' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ padding: '15px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '8px' }}>
                    <h3 style={{ color: '#4fc3f7', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                      <GSAPAnimated animation="rotateIn" delay={0.3}>
                        <SvgIcon iconName="duo-star" sizeName="2x" darkModeInvert={true} />
                      </GSAPAnimated>
                      Default / General Purpose
                    </h3>
                    <div style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <p><strong>ms-marco-MiniLM-L-6-v2</strong></p>
                      <p>
                        Rerank top-20→top-5 with this cross-encoder for best accuracy/speed balance
                      </p>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ padding: '15px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
                    <h3 style={{ color: '#81c784', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                      <GSAPAnimated animation="scaleIn" delay={0.4}>
                        <SvgIcon iconName="duo-globe" sizeName="2x" darkModeInvert={true} />
                      </GSAPAnimated>
                      Multilingual & Non-English
                    </h3>
                    <div style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <p><strong>BGE Reranker / LLM-as-Ranker</strong></p>
                      <p>
                        BGE for efficiency, LLM-as-ranker for rare languages with complex reasoning
                      </p>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.5}>
                  <div style={{ padding: '15px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '8px' }}>
                    <h3 style={{ color: '#ffb74d', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                      <GSAPAnimated animation="bounceIn" delay={0.6}>
                        <SvgIcon iconName="duo-gauge-high" sizeName="2x" darkModeInvert={true} />
                      </GSAPAnimated>
                      High Throughput / Low Cost
                    </h3>
                    <div style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <p><strong>E5/DPR + RRF + BM25</strong></p>
                      <p>
                        Bi-encoder cosine rerank + RRF with BM25 for robust baseline at scale
                      </p>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div style={{ padding: '15px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '8px' }}>
                    <h3 style={{ color: '#ba68c8', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                      <GSAPAnimated animation="flipCard" delay={0.7}>
                        <SvgIcon iconName="duo-file-lines" sizeName="2x" darkModeInvert={true} />
                      </GSAPAnimated>
                      Long Documents & Term Alignment
                    </h3>
                    <div style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <p><strong>ColBERT/v2</strong></p>
                      <p>
                        Optimized for fine-grained token-level matching across passages
                      </p>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.8}>
                  <div style={{ padding: '15px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '8px' }}>
                    <h3 style={{ color: '#f06292', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                      <GSAPAnimated animation="rotateIn" delay={0.9}>
                        <SvgIcon iconName="duo-brain" sizeName="2x" darkModeInvert={true} />
                      </GSAPAnimated>
                      Complex Reasoning / Multi-Hop QA
                    </h3>
                    <div style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <p><strong>LLM-as-Ranker / FiD</strong></p>
                      <p>
                        When relationships between documents matter; consider distilling for production
                      </p>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.9}>
                  <div style={{ padding: '15px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '8px' }}>
                    <h3 style={{ color: '#64b5f6', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                      <GSAPAnimated animation="scaleIn" delay={1.0}>
                        <SvgIcon iconName="duo-sliders" sizeName="2x" darkModeInvert={true} />
                      </GSAPAnimated>
                      Hybrid Robust Baseline
                    </h3>
                    <div style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <p><strong>BM25 + Dense + RRF</strong></p>
                      <p>
                        Add cross-encoder for top-10 refinement; balances keyword precision with semantics
                      </p>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#481967',
          notes: `### Quick Recommendations by Use Case

[cheerfully] Let me give you the practical cheat sheet - which models to reach for in specific scenarios you'll actually encounter!

#### Default General Purpose

[confidently] For most people starting out, **ms-marco-MiniLM-L-six-vee-two** 👉 'mini-el-em-el-six-vee-two' is your best friend. This cross-encoder hits the sweet spot of accuracy and speed. [reassuringly] The pattern? Retrieve twenty-to-fifty candidates with your first-stage retrieval, then rerank down to top-five with this model. It's battle-tested, well-supported, and just works!

#### Multilingual Scenarios

[excited] Going global? **BGE** 👉 'bee-gee-ee' rerankers handle dozens of languages efficiently. For rare languages or when you need complex reasoning across language barriers, **LLM** 👉 'el-el-em'-as-ranker with **GPT-four** 👉 'gee-pee-tee-four' or **Claude** 👉 'claude' becomes worth the cost. [pleased] The multilingual capabilities of modern **LLMs** 👉 'el-el-ems' are genuinely impressive!

#### High Throughput and Cost Optimization

[conversational] Serving thousands of queries per second? Cost is your constraint? Go with bi-encoders like **E5** 👉 'ee-five' or **DPR** 👉 'dee-pee-ar' for fast semantic reranking. Add **RRF** 👉 'ar-ar-ef' fusion with **BM25** 👉 'bee-em-twenty-five' for robustness. This combination scales beautifully and keeps costs reasonable even at massive scale!

#### Technical Documentation and Long Content

[enthusiastically] For technical docs, **ColBERT** 👉 'col-bert' or **ColBERTv2** 👉 'col-bert-vee-two' excels with its token-level matching. When specific terminology matters - **API** 👉 'ay-pee-eye' function names, error codes, technical acronyms - that fine-grained matching captures nuances other models miss!

#### Complex Reasoning Needs

[seriously] When you need genuine multi-hop reasoning - combining information from multiple sources - **FiD** 👉 'fid' or **LLM** 👉 'el-el-em'-as-ranker are your tools. Yes, they're expensive. Yes, they're slow. [firmly] But for complex question answering where relationships between documents matter, nothing else delivers. Consider distilling the **LLM** 👉 'el-el-em' behavior into a smaller model for production!

#### The Hybrid Baseline

[warmly] Can't decide? Start with the hybrid robust baseline - **BM25** 👉 'bee-em-twenty-five' plus dense retrieval with **RRF** 👉 'ar-ar-ef' fusion, then add a lightweight cross-encoder for top-ten refinement. This architecture handles diverse query types gracefully!`
        },
        {
          id: 38,
          title: 'Operational Tips & Trade-offs',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <GSAPAnimated animation="slideInTop" delay={0.2}>
                  <div>
                    <h3 style={{ color: '#4fc3f7', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                      <GSAPAnimated animation="scaleIn" delay={0.3}>
                        <SvgIcon iconName="duo-gear" sizeName="2x" darkModeInvert={true} />
                      </GSAPAnimated>
                      Operational Tips
                    </h3>
                    <GSAPStaggerList stagger={0.15} delay={0.5}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', paddingLeft: '20px' }}>
                        <li><strong>Batch processing:</strong> Process pairs in batches to amortize overhead; use async for parallel scoring</li>
                        <li><strong>Caching:</strong> Store reranking results for frequent queries; invalidate when corpus changes</li>
                        <li><strong>Truncation:</strong> Truncate strategically (middle vs end) based on content type</li>
                        <li><strong>A/B testing:</strong> Test rerankers per domain; monitor latency and relevance gains</li>
                        <li><strong>Incremental complexity:</strong> Start simple (RRF + light cross-encoder), scale up only if needed</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.4}>
                  <div>
                    <h3 style={{ color: '#81c784', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                      <GSAPAnimated animation="rotateIn" delay={0.5}>
                        <SvgIcon iconName="duo-sliders" sizeName="2x" darkModeInvert={true} />
                      </GSAPAnimated>
                      Trade-off Considerations
                    </h3>
                    <GSAPStaggerList stagger={0.15} delay={0.7}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', paddingLeft: '20px' }}>
                        <li><strong>Latency vs. accuracy:</strong> Optimize for your specific user experience requirements</li>
                        <li><strong>Re-ranking depth:</strong> More documents = higher recall but diminishing returns after ~50</li>
                        <li><strong>Pre-ranking quality:</strong> Better first-stage retrieval means less re-ranking needed</li>
                        <li><strong>Model size:</strong> Smaller models (MiniLM variants) often suffice for most use cases</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="bounceIn" delay={0.9}>
                <div style={{ marginTop: '20px', padding: '10px', background: 'rgba(186, 104, 200, 0.15)', borderRadius: '8px', textAlign: 'left' }}>
                  <p style={{ margin: '0px', display: 'flex', alignItems: 'center' }}>
                    <GSAPAnimated animation="flipCard" delay={1.0}>
                      <SvgIcon iconName="duo-rocket" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '8px', color: '#ba68c8' }} darkModeInvert={true} />
                    </GSAPAnimated>
                    <p style={{ margin: '0px' }}>
                      <strong>Pro Tip:</strong> Start with ms-marco-MiniLM-L-6-v2 as your baseline, then A/B test against more specialized models
                      <strong>based on your specific domain and performance requirements.</strong> <br />
                    </p>
                  </p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#481967',
          notes: `### Operational Tips & Trade-offs

[warmly] Let's wrap up with the practical wisdom that separates successful deployments from science projects - the operational reality of running rerankers in production!

#### Operational Excellence Matters

[enthusiastically] First, batch processing is your friend. Don't score query-document pairs one at a time - batch them! Most reranking models handle batches efficiently, amortizing the overhead of model loading and **GPU** 👉 'gee-pee-you' setup. Use async processing for parallel scoring when you have multiple independent queries. [pleased] This alone can cut your latency in half!

Caching is criminally underutilized. If you're seeing the same queries repeatedly - and you are, trust me - cache those reranking results! Popular queries like "how to reset password" don't need reranking every single time. Just remember to invalidate your cache when the underlying corpus changes, or you'll serve stale results.

#### The Truncation Strategy

[conversational] Here's a subtlety most people miss - *how* you truncate matters. For technical documentation or code, truncating from the middle preserves both context at the start and the answer at the end. For narrative content, truncating from the end works fine. Test both strategies on your content!

#### A/B Testing Is Non-Negotiable

[firmly] You *must* A-B test your rerankers. What works on benchmarks might underperform on your specific domain. Run experiments comparing models, monitor both latency and relevance metrics, and let the data guide your decisions. And test per domain - your technical docs might need different reranking than your marketing content!

#### The Incremental Complexity Philosophy

[reassuringly] Start simple! Begin with **RRF** 👉 'ar-ar-ef' or a lightweight cross-encoder. Get that working, measure your baseline, then incrementally add complexity only where justified. Many teams over-engineer from day one and regret it. Build up, don't build down!

#### Trade-offs Are Real

[lecture] Every architecture decision is a trade-off. Latency versus accuracy - there's no escaping it. Reranking more documents gives higher recall but with diminishing returns after about fifty candidates. [confidently] And here's the secret - investing in better first-stage retrieval often beats adding heavier reranking! The better your initial candidates, the easier the reranker's job.

#### The Final Word

[inspiringly] Start with **ms-marco-MiniLM-L-six-vee-two** 👉 'mini-el-em-el-six-vee-two', measure everything, iterate based on your specific requirements. That's how you build production systems that actually work!`
        }
      ]
    }
  ]
};

