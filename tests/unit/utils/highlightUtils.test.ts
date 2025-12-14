import { describe, it, expect, vi } from 'vitest';
import { HIGHLIGHT_CONSTANTS, createHighlightedLinesSet, calculateLineNumberWidth, escapeHtml, replaceLibImport } from '$lib/highlightUtils';

describe('highlightUtils', () => {
  describe('HIGHLIGHT_CONSTANTS', () => {
    it('should have correct constant values', () => {
      expect(HIGHLIGHT_CONSTANTS.DIGIT_WIDTH).toBe(12);
      expect(HIGHLIGHT_CONSTANTS.MIN_DIGITS).toBe(2);
      expect(HIGHLIGHT_CONSTANTS.HIGHLIGHTED_BACKGROUND).toBe('rgba(254, 241, 96, 0.2)');
    });
  });

  describe('createHighlightedLinesSet', () => {
    it('should create set from individual lines', () => {
      const result = createHighlightedLinesSet([1, 3, 5]);
      expect(result.has(1)).toBe(true);
      expect(result.has(3)).toBe(true);
      expect(result.has(5)).toBe(true);
      expect(result.has(2)).toBe(false);
    });

    it('should create set from ranges', () => {
      const result = createHighlightedLinesSet([], [[1, 3]]);
      expect(result.has(1)).toBe(true);
      expect(result.has(2)).toBe(true);
      expect(result.has(3)).toBe(true);
      expect(result.has(4)).toBe(false);
    });

    it('should combine individual lines and ranges', () => {
      const result = createHighlightedLinesSet([1, 5], [[7, 9]]);
      expect(result.has(1)).toBe(true);
      expect(result.has(5)).toBe(true);
      expect(result.has(7)).toBe(true);
      expect(result.has(8)).toBe(true);
      expect(result.has(9)).toBe(true);
      expect(result.has(2)).toBe(false);
    });

    it('should handle empty input', () => {
      const result = createHighlightedLinesSet();
      expect(result.size).toBe(0);
    });

    it('should handle invalid ranges gracefully', () => {
      const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      const result = createHighlightedLinesSet(
        [],
        [
          [0, 3],
          [-1, 5]
        ]
      );

      expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid range:', [0, 3]);
      expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid range:', [-1, 5]);
      expect(result.size).toBe(0);

      consoleWarnSpy.mockRestore();
    });

    it('should handle duplicate lines', () => {
      const result = createHighlightedLinesSet([1, 1, 2, 2], [[1, 3]]);
      expect(result.size).toBe(3); // Set should only have 1, 2, 3
      expect(result.has(1)).toBe(true);
      expect(result.has(2)).toBe(true);
      expect(result.has(3)).toBe(true);
    });
  });

  describe('calculateLineNumberWidth', () => {
    it('should calculate width for small line counts', () => {
      expect(calculateLineNumberWidth(5)).toBe(24); // 2 digits * 12
      expect(calculateLineNumberWidth(9)).toBe(24); // 2 digits * 12
    });

    it('should calculate width for larger line counts', () => {
      expect(calculateLineNumberWidth(99)).toBe(24); // 2 digits * 12
      expect(calculateLineNumberWidth(100)).toBe(36); // 3 digits * 12
      expect(calculateLineNumberWidth(999)).toBe(36); // 3 digits * 12
      expect(calculateLineNumberWidth(1000)).toBe(48); // 4 digits * 12
    });

    it('should respect custom digit width', () => {
      expect(calculateLineNumberWidth(100, 10)).toBe(30); // 3 digits * 10
    });

    it('should respect custom min digits', () => {
      expect(calculateLineNumberWidth(5, 12, 3)).toBe(36); // 3 digits * 12
    });

    it('should handle edge cases', () => {
      expect(calculateLineNumberWidth(1)).toBe(24); // Uses min digits
      expect(calculateLineNumberWidth(0)).toBe(24); // Uses min digits
    });
  });

  describe('escapeHtml', () => {
    it('should escape ampersand', () => {
      expect(escapeHtml('A & B')).toBe('A &amp; B');
    });

    it('should escape less than', () => {
      expect(escapeHtml('<div>')).toBe('&lt;div&gt;');
    });

    it('should escape greater than', () => {
      expect(escapeHtml('5 > 3')).toBe('5 &gt; 3');
    });

    it('should escape double quotes', () => {
      expect(escapeHtml('Say "hello"')).toBe('Say &quot;hello&quot;');
    });

    it('should escape single quotes', () => {
      expect(escapeHtml("It's nice")).toBe('It&#39;s nice');
    });

    it('should escape multiple characters', () => {
      const input = '<script>alert("XSS & injection")</script>';
      const expected = '&lt;script&gt;alert(&quot;XSS &amp; injection&quot;)&lt;/script&gt;';
      expect(escapeHtml(input)).toBe(expected);
    });

    it('should handle empty string', () => {
      expect(escapeHtml('')).toBe('');
    });

    it('should handle string without special characters', () => {
      expect(escapeHtml('Hello World')).toBe('Hello World');
    });
  });

  describe('replaceLibImport', () => {
    it('should replace $lib with default library name', () => {
      const input = "import { Component } from '$lib';";
      const expected = "import { Component } from 'svelte-rune-highlight';";
      expect(replaceLibImport(input)).toBe(expected);
    });

    it('should replace $lib with custom library name', () => {
      const input = "import { Component } from '$lib';";
      const expected = "import { Component } from 'my-custom-lib';";
      expect(replaceLibImport(input, 'my-custom-lib')).toBe(expected);
    });

    it('should handle $lib with subpaths', () => {
      const input = "import { Component } from '$lib/components';";
      const expected = "import { Component } from 'svelte-rune-highlight/components';";
      expect(replaceLibImport(input)).toBe(expected);
    });

    it('should handle double quotes', () => {
      const input = 'import { Component } from "$lib";';
      const expected = 'import { Component } from "svelte-rune-highlight";';
      expect(replaceLibImport(input)).toBe(expected);
    });

    it('should handle multiple imports', () => {
      const input = `import { A } from '$lib';
import { B } from '$lib/components';
import { C } from '$lib/utils';`;
      const expected = `import { A } from 'svelte-rune-highlight';
import { B } from 'svelte-rune-highlight/components';
import { C } from 'svelte-rune-highlight/utils';`;
      expect(replaceLibImport(input)).toBe(expected);
    });

    it('should handle undefined input', () => {
      expect(replaceLibImport(undefined)).toBe('');
    });

    it('should handle non-string input', () => {
      // @ts-expect-error Testing runtime behavior
      expect(replaceLibImport(null)).toBe('');
      // @ts-expect-error Testing runtime behavior
      expect(replaceLibImport(123)).toBe('');
    });

    it('should not replace non-$lib imports', () => {
      const input = "import { Component } from 'some-other-lib';";
      expect(replaceLibImport(input)).toBe(input);
    });
  });
});
