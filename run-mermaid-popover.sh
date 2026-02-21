#!/bin/bash

# Array of deck files to process
FILES=(
  "chunking-techniques-deck.tsx"
  "context-packing-deck.tsx"
  "death-deck.tsx"
  "document-preprocessing-deck.tsx"
  "embedding-models-deck.tsx"
  "embedding-quality-deck.tsx"
  "entity-normalization-deck.tsx"
  "feature-extraction-deck.tsx"
  "graph-retrieval-deck.tsx"
  "guru-puja-deck.tsx"
  "hybrid-search-deck.tsx"
  "llm-caching-deck.tsx"
  "metadata-enrichment-deck.tsx"
  "multi-step-retrieval-deck.tsx"
  "ner-approaches-deck.tsx"
  "ner-metrics-deck.tsx"
  "ner-training-deck.tsx"
  "parent-child-retrieval-deck.tsx"
  "production-rag-deck.tsx"
  "prompt-engineering-deck.tsx"
  "query-rewriting-deck.tsx"
  "rag-evaluation-metrics-deck.tsx"
  "rag-latency-deck.tsx"
  "reranking-models-deck.tsx"
  "sentiment-analysis-deck.tsx"
  "text-preprocessing-deck.tsx"
  "vector-databases-deck.tsx"
)

LOG_FILE="/home/nisar/.openclaw/workspace/deck/mermaid-popover-cron.log"
cd /home/nisar/.openclaw/workspace/deck

echo "=== Starting MermaidPopover batch job at $(date) ===" >> $LOG_FILE

for i in "${!FILES[@]}"; do
  FILE="${FILES[$i]}"
  FILE_NUM=$((i + 1))
  TOTAL=${#FILES[@]}
  
  echo "[$(date)] Processing file $FILE_NUM/$TOTAL: $FILE" >> $LOG_FILE
  
  # Run copilot for this file
  copilot --model claude-sonnet-4.6 --add-dir . --allow-all-tools --no-ask-user -p "In src/data/$FILE: Add MermaidPopover badges to Best Use Case / Use Cases / Notes / Configuration slides using NEW pattern: parent div with position: 'relative', badge in div with position: 'absolute', top: '-5px', right: 0. No h4 wrapper. Add relevant diagrams based on slide content. Use colors: success=#c8e6c9, error=#ffcdd2, warning=#fff9c4, info=#e3f2fd, input=#4fc3f7, result=#81c784" >> $LOG_FILE 2>&1
  
  EXIT_CODE=$?
  echo "[$(date)] Finished $FILE - exit code: $EXIT_CODE" >> $LOG_FILE
  
  # Wait 20 minutes before next file (except after last file)
  if [ $i -lt $(($TOTAL - 1)) ]; then
    echo "[$(date)] Waiting 20 minutes before next file..." >> $LOG_FILE
    sleep 1200
  fi
done

echo "=== Batch job completed at $(date) ===" >> $LOG_FILE
