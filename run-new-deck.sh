#!/bin/bash

# Array of NEW deck files to create
FILES=(
  # ── Fine-Tuning ──────────────────────────────────────────────────────────────
  "llm-finetuning-techniques-deck.tsx"        # LLM Fine-Tuning Techniques — Full FT vs LoRA vs QLoRA vs Adapters vs Prefix Tuning vs Prompt Tuning
  "lora-peft-methods-deck.tsx"                # LoRA & PEFT Methods Deep Dive — LoRA, QLoRA, IA³, DoRA, LoftQ
  "finetuning-data-preparation-deck.tsx"      # Fine-Tuning Data Preparation — curation, dedup, Alpaca/ChatML/ShareGPT formats, synthetic data
  "finetuning-evaluation-metrics-deck.tsx"    # Fine-Tuning Evaluation Metrics — ROUGE, BLEU, BERTScore, MT-Bench, win-rate, reward model
  "rlhf-alignment-techniques-deck.tsx"        # RLHF & Alignment Techniques — SFT → RM → PPO, DPO, ORPO, RLAIF
  "finetuning-for-rag-deck.tsx"               # Fine-Tuning for RAG — domain adaptation, embedding FT, reader FT, end-to-end RAG FT
  "embedding-model-finetuning-deck.tsx"       # Embedding Model Fine-Tuning — contrastive learning, triplet loss, MNRL, hard negatives, matryoshka
  "continual-learning-deck.tsx"               # Continual Learning & Catastrophic Forgetting — EWC, replay, SLERP/TIES/DARE model merging

  # ── Agent ────────────────────────────────────────────────────────────────────
  "llm-agent-architectures-deck.tsx"          # LLM Agent Architectures — ReAct, Plan-and-Execute, Reflexion, Self-Ask, MRKL
  "agent-memory-systems-deck.tsx"             # Agent Memory Systems — in-context, external/vector, episodic, semantic, procedural
  "tool-use-function-calling-deck.tsx"        # Tool Use & Function Calling — selection, parallel calls, chaining, error recovery, JSON schema
  "agent-planning-techniques-deck.tsx"        # Agent Planning Techniques — CoT, ToT, GoT, MCTS, HuggingGPT decomposition
  "multi-agent-systems-deck.tsx"              # Multi-Agent Systems — orchestrator/subagent, AutoGen, CrewAI, LangGraph, consensus
  "agentic-rag-deck.tsx"                      # Agentic RAG — query decomposition agents, iterative retrieval, self-correcting RAG
  "agent-evaluation-reliability-deck.tsx"     # Agent Evaluation & Reliability — trajectory eval, tool call accuracy, AgentBench, τ-bench
  "agent-safety-guardrails-deck.tsx"          # Agent Safety & Guardrails — prompt injection, sandboxing, output validation, HITL
)

LOG_FILE="/home/nisar/.openclaw/workspace/deck/new-deck-creation.log"
PROMPT_FILE="/home/nisar/.openclaw/workspace/deck/Prompt/create-new-deck-prompt.txt"
cd /home/nisar/.openclaw/workspace/deck

echo "=== Starting new deck creation batch at $(date) ===" >> $LOG_FILE

for i in "${!FILES[@]}"; do
  FILE="${FILES[$i]}"
  FILE_NUM=$((i + 1))
  TOTAL=${#FILES[@]}
  
  echo "[$(date)] Creating file $FILE_NUM/$TOTAL: $FILE" >> $LOG_FILE
  
  # Run copilot to create the new deck file from the prompt template
  # Note: $(cat) expands file contents once - backticks in output are NOT re-evaluated by bash
  copilot --model claude-opus-4-5 --add-dir . --allow-all-tools --no-ask-user \
    -p "Create a new deck file src/data/$FILE. $(cat "$PROMPT_FILE")" >> $LOG_FILE 2>&1
  
  EXIT_CODE=$?
  echo "[$(date)] Finished $FILE - exit code: $EXIT_CODE" >> $LOG_FILE
  
  # Wait 30 seconds before next file (except after last file)
  if [ $i -lt $(($TOTAL - 1)) ]; then
    echo "[$(date)] Waiting 30 seconds before next file..." >> $LOG_FILE
    sleep 30
  fi
done

echo "=== Batch creation completed at $(date) ===" >> $LOG_FILE
