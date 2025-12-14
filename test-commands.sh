#!/bin/bash

# Test Commands Quick Reference
# Run this script with: bash test-commands.sh [command]

set -euo pipefail

open_file() {
  local path="$1"
  if command -v open >/dev/null 2>&1; then
    open "$path"
  elif command -v xdg-open >/dev/null 2>&1; then
    xdg-open "$path"
  elif command -v powershell.exe >/dev/null 2>&1; then
    powershell.exe -NoProfile -Command "Start-Process '$path'" >/dev/null
  else
    echo "Could not find a browser opener (open/xdg-open/powershell). Report at: $path"
  fi
}

case "$1" in
  "all")
    echo "Running all tests..."
    pnpm test
    ;;
  "watch")
    echo "Running tests in watch mode..."
    pnpm test:watch
    ;;
  "ui")
    echo "Opening test UI..."
    pnpm test:ui
    ;;
  "coverage")
    echo "Running tests with coverage..."
    pnpm test:coverage
    echo "Opening coverage report..."
    if [[ -f coverage/index.html ]]; then
      open_file "coverage/index.html"
    else
      echo "coverage/index.html not found (did coverage run produce html output?)"
    fi
    ;;
  "unit")
    echo "Running unit tests..."
    pnpm test:unit
    ;;
  "e2e")
    echo "Running E2E tests..."
    pnpm test:e2e
    ;;
  "ci")
    echo "Running CI checks..."
    echo "1. Type checking..."
    pnpm check
    echo "2. Linting..."
    pnpm lint
    echo "3. Unit tests..."
    pnpm test:unit
    echo "4. Building..."
    pnpm build
    echo "✅ All CI checks passed!"
    ;;
  *)
    echo "Test Commands Quick Reference"
    echo ""
    echo "Usage: bash test-commands.sh [command]"
    echo ""
    echo "Available commands:"
    echo "  all       - Run all tests once"
    echo "  watch     - Run tests in watch mode (auto-rerun on changes)"
    echo "  ui        - Open interactive test UI in browser"
    echo "  coverage  - Run tests with coverage and open report"
    echo "  unit      - Run unit tests only"
    echo "  e2e       - Run E2E tests with Playwright"
    echo "  ci        - Run all CI checks (type, lint, test, build)"
    echo ""
    echo "Examples:"
    echo "  bash test-commands.sh all"
    echo "  bash test-commands.sh watch"
    echo "  bash test-commands.sh coverage"
    ;;
esac
