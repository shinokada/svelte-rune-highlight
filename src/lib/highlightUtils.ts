import { SvelteSet } from 'svelte/reactivity';

/**
 * Configuration constants for highlighting
 */
export const HIGHLIGHT_CONSTANTS = {
  DIGIT_WIDTH: 12,
  MIN_DIGITS: 2,
  HIGHLIGHTED_BACKGROUND: 'rgba(254, 241, 96, 0.2)'
} as const;

/**
 * Creates a set of all highlighted line numbers from individual lines and ranges
 */
export function createHighlightedLinesSet(highlightedLines: number[] = [], highlightedRanges: [number, number][] = []): SvelteSet<number> {
  const lines = new SvelteSet<number>(highlightedLines);

  // Add ranges
  for (const [start, end] of highlightedRanges) {
    if (typeof start !== 'number' || typeof end !== 'number' || start < 1 || end < 1) {
      console.warn('Invalid range:', [start, end]);
      continue;
    }
    for (let i = start; i <= end; i++) {
      lines.add(i);
    }
  }

  return lines;
}

/**
 * Calculates the width needed for line numbers based on the number of lines
 */
export function calculateLineNumberWidth(lineCount: number, digitWidth: number = HIGHLIGHT_CONSTANTS.DIGIT_WIDTH, minDigits: number = HIGHLIGHT_CONSTANTS.MIN_DIGITS): number {
  const lenDigits = lineCount.toString().length;
  const len = lenDigits < minDigits ? minDigits : lenDigits;
  return len * digitWidth;
}

/**
 * Escapes HTML special characters
 */
export function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
