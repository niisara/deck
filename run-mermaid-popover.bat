@echo off
setlocal enabledelayedexpansion

rem Array of deck files to process
set FILES[0]=chunking-techniques-deck.tsx
set FILES[1]=context-packing-deck.tsx
set FILES[2]=death-deck.tsx
set FILES[3]=document-preprocessing-deck.tsx
set FILES[4]=embedding-models-deck.tsx
set FILES[5]=embedding-quality-deck.tsx
set FILES[6]=entity-normalization-deck.tsx
set FILES[7]=feature-extraction-deck.tsx
set FILES[8]=graph-retrieval-deck.tsx
set FILES[9]=guru-puja-deck.tsx
set FILES[10]=hybrid-search-deck.tsx
set FILES[11]=llm-caching-deck.tsx
set FILES[12]=metadata-enrichment-deck.tsx
set FILES[13]=multi-step-retrieval-deck.tsx
set FILES[14]=ner-approaches-deck.tsx
set FILES[15]=ner-metrics-deck.tsx
set FILES[16]=ner-training-deck.tsx
set FILES[17]=parent-child-retrieval-deck.tsx
set FILES[18]=production-rag-deck.tsx
set FILES[19]=prompt-engineering-deck.tsx
set FILES[20]=query-rewriting-deck.tsx
set FILES[21]=rag-evaluation-metrics-deck.tsx
set FILES[22]=rag-latency-deck.tsx
set FILES[23]=reranking-models-deck.tsx
set FILES[24]=sentiment-analysis-deck.tsx
set FILES[25]=text-preprocessing-deck.tsx
set FILES[26]=vector-databases-deck.tsx
set TOTAL=27

set "SCRIPT_DIR=%~dp0"
set "PROMPT_FILE=%SCRIPT_DIR%Prompt\mermaid-popover-prompt.txt"
cd /d "%SCRIPT_DIR%"

echo === Starting MermaidPopover batch job at %date% %time% ===

for /L %%i in (0,1,26) do (
  set "FILE=!FILES[%%i]!"
  set /a FILE_NUM=%%i+1

  echo [%date% %time%] Processing file !FILE_NUM!/%TOTAL%: !FILE!

  rem Read prompt file content into a variable
  set "PROMPT_CONTENT="
  for /f "usebackq delims=" %%p in ("%PROMPT_FILE%") do (
    if defined PROMPT_CONTENT (
      set "PROMPT_CONTENT=!PROMPT_CONTENT! %%p"
    ) else (
      set "PROMPT_CONTENT=%%p"
    )
  )

  rem Run copilot for this file using full prompt from file
  copilot --model claude-sonnet-4.6 --add-dir . --allow-all-tools --no-ask-user -p "In src/data/!FILE!: !PROMPT_CONTENT!"

  set EXIT_CODE=!errorlevel!
  echo [%date% %time%] Finished !FILE! - exit code: !EXIT_CODE!

  rem Wait 30 seconds before next file (except after last file)
  if %%i LSS 26 (
    echo [%date% %time%] Waiting 30 seconds before next file...
    timeout /t 30 /nobreak >nul
  )
)

echo === Batch job completed at %date% %time% ===
endlocal
