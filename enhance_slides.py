#!/usr/bin/env python3
"""
Script to enhance chunking-techniques-deck.tsx with GSAP animations,
speaker notes, and MermaidPopover components.
"""

import re
import sys

# Read the file
with open('/home/runner/work/deck/deck/src/data/chunking-techniques-deck.tsx', 'r') as f:
    content = f.read()

# First, let's identify all slide objects and their structure
# We'll parse through and find each slide block

print("File loaded successfully. Total characters:", len(content))
print("\nSearching for slide patterns...")

# Find all slide objects (simple pattern match)
slide_pattern = r'\{\s*id:\s*(\d+),.*?notes:\s*[\'"]([^\'"]*)[\'"].*?\}'
matches = re.findall(slide_pattern, content, re.DOTALL)

print(f"Found {len(matches)} slides with notes field")

# Count empty notes
empty_notes = sum(1 for _, notes in matches if notes == '')
print(f"Slides with empty notes: {empty_notes}")

# Let's find all slides by id
id_pattern = r'id:\s*(\d+),'
ids = re.findall(id_pattern, content)
print(f"\nTotal slide IDs found: {len(ids)}")
print(f"IDs: {sorted(set(int(x) for x in ids))}")
