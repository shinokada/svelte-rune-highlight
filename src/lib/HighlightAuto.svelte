<script lang="ts">
  /**
   * HighlightAuto.svelte
   *
   * A syntax-highlighting component that uses Highlight.js to automatically detect
   * the programming language of the provided code string and render it with
   * syntax highlighting. Supports line numbers and highlighted lines.
   *
   * ## Props
   * @prop {string} [code=''] - The raw code to highlight.
   * @prop {boolean} [langtag=false] - Whether to display the detected language as a tag overlay.
   * @prop {boolean} [numberLine] - Whether to show line numbers.
   * @prop {boolean} [hideBorder] - Hide the border between line numbers and code.
   * @prop {boolean} [wrapLines] - Wrap long lines instead of horizontal scrolling.
   * @prop {number} [startingLineNumber=1] - Starting line number.
   * @prop {number[]} [highlightedLines=[]] - Individual lines to highlight.
   * @prop {[number, number][]} [highlightedRanges=[]] - Ranges of lines to highlight.
   * @prop {string} [backgroundColor] - Background color for line numbers.
   * @prop {'static' | 'relative' | 'absolute' | 'sticky'} [position='sticky'] - Position style for line numbers.
   * @prop {string[]} [languages] - Optional subset of languages to detect from.
   * @prop {string} [class] - Additional classes for the root element.
   *
   * ## Behavior
   * - Automatically detects language via `hljs.highlightAuto`.
   * - Falls back to plaintext if detection fails or code is empty.
   * - Can optionally restrict detection to specific languages for better accuracy.
   * - When `numberLine` is true, renders a table with line numbers; otherwise uses `LangTag.svelte`.
   */
  import LangTag from './LangTag.svelte';
  import hljs from 'highlight.js';
  import type { HighlightAutoProps } from './types';
  import { replaceLibImport } from '$lib';

  let {
    code = '',
    langtag = false,
    numberLine,
    hideBorder,
    wrapLines,
    startingLineNumber = 1,
    highlightedLines = [],
    highlightedRanges = [],
    backgroundColor,
    position = 'sticky',
    languages,
    replaceLib,
    class: className,
    ...restProps
  }: HighlightAutoProps = $props();

  const DIGIT_WIDTH = 12;
  const MIN_DIGITS = 2;
  const HIGHLIGHTED_BACKGROUND = 'rgba(254, 241, 96, 0.2)';

  const displayCode = $derived(replaceLib && typeof replaceLib === 'string' ? replaceLibImport(code, replaceLib) : code);

  let allHighlightedLines = $derived.by(() => {
    const lines = new Set(highlightedLines);

    // Add ranges
    for (const [start, end] of highlightedRanges) {
      for (let i = start; i <= end; i++) {
        lines.add(i);
      }
    }

    return lines;
  });

  let highlightResult = $derived.by(() => {
    if (!displayCode.trim()) {
      return { value: '', language: 'plaintext' };
    }

    try {
      // If languages array is provided, only detect from those languages
      return languages && languages.length > 0 ? hljs.highlightAuto(displayCode, languages) : hljs.highlightAuto(displayCode);
    } catch (error) {
      console.warn('Highlight.js auto-detection failed:', error);
      return { value: displayCode, language: 'plaintext' };
    }
  });

  let highlighted = $derived(highlightResult.value);
  let language = $derived(highlightResult.language || 'plaintext');
  let lines = $derived(highlighted.split('\n'));
  let len_digits = $derived(lines.length.toString().length);
  let len = $derived(len_digits - MIN_DIGITS < 1 ? MIN_DIGITS : len_digits);
  let width = $derived(len * DIGIT_WIDTH);
</script>

{#if numberLine}
  <div style:overflow-x="auto" {...restProps} class="highlight-table {className}">
    <table>
      <tbody class:hljs={true}>
        {#each lines as line, i (i + startingLineNumber)}
          {@const lineNumber = i + startingLineNumber}
          <tr>
            <td class:hljs={true} class:hideBorder style:position style:left="0" style:text-align="right" style:user-select="none" style:width={width + 'px'} style:background-color={backgroundColor}>
              <code style:color="var(--line-number-color, currentColor)">
                {lineNumber}
              </code>
              {#if allHighlightedLines.has(lineNumber)}
                <div class:line-background={true} style:background="var(--highlighted-background, {HIGHLIGHTED_BACKGROUND})"></div>
              {/if}
            </td>
            <td>
              <pre class:wrapLines><code>{@html line || '\n'}</code></pre>
              {#if allHighlightedLines.has(lineNumber)}
                <div class:line-background={true} style:background="var(--highlighted-background, {HIGHLIGHTED_BACKGROUND})"></div>
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{:else}
  <LangTag class={className} {...restProps} languageName={language} {langtag} {highlighted} {code} />
{/if}

{#if numberLine}
  <style>
    .highlight-table pre {
      margin: 0;
    }

    .highlight-table table,
    .highlight-table tr,
    .highlight-table td {
      padding: 0;
      border: 0;
      margin: 0;
      vertical-align: baseline;
    }

    .highlight-table table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
    }

    .highlight-table tr:first-of-type td {
      padding-top: 1em;
    }

    .highlight-table tr:last-child td {
      padding-bottom: 1em;
    }

    .highlight-table tr td:first-of-type {
      z-index: 2;
    }

    .highlight-table td {
      padding-left: var(--padding-left, 1em);
      padding-right: var(--padding-right, 1em);
    }

    .highlight-table td.hljs:not(.hideBorder):after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background: var(--border-color, currentColor);
    }

    .highlight-table .wrapLines {
      white-space: pre-wrap;
    }

    .highlight-table td,
    .highlight-table td > code,
    .highlight-table pre {
      position: relative;
    }

    .highlight-table td > code,
    .highlight-table pre {
      z-index: 1;
    }

    .highlight-table .line-background {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .highlight-table tr:first-of-type td .line-background,
    .highlight-table tr:last-of-type td .line-background {
      height: calc(100% - 1em);
    }

    .highlight-table tr:first-of-type td .line-background {
      top: 1em;
    }

    .highlight-table tr:last-of-type td .line-background {
      bottom: 1em;
    }
  </style>
{/if}

<!--
@component
[Go to docs](https://svelte-rune-highlight.codewithshin.com/)
## Props
@prop code = ''
@prop langtag = false
@prop numberLine
@prop hideBorder
@prop wrapLines
@prop startingLineNumber = 1
@prop highlightedLines = []
@prop highlightedRanges = []
@prop backgroundColor
@prop position = 'sticky'
@prop languages
@prop replaceLib
@prop class: className
@prop ...restProps
-->
