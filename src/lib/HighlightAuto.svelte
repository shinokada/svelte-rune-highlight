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
  import '../lib/styles.css';
  import { DEV } from 'esm-env';
  import LangTag from './LangTag.svelte';
  import HighlightTable from './HighlightTable.svelte';
  import LineNumberTable from './LineNumberTable.svelte';
  import hljs from 'highlight.js';
  import type { HighlightAutoProps } from './types';
  import { replaceLibImport, createHighlightedLinesSet, calculateLineNumberWidth, HIGHLIGHT_CONSTANTS } from './highlightUtils';

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

  const displayCode = $derived(replaceLib && typeof replaceLib === 'string' ? replaceLibImport(code, replaceLib) : code);
  const isValid = $derived(displayCode.trim().length > 0);

  const allHighlightedLines = $derived.by(() => createHighlightedLinesSet(highlightedLines, highlightedRanges));

  const highlightResult = $derived.by(() => {
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

  const highlighted = $derived(highlightResult.value);
  const language = $derived(highlightResult.language || 'plaintext');
  const lines = $derived(highlighted.split('\n'));
  const width = $derived(calculateLineNumberWidth(lines.length));
</script>

{#if isValid}
  {#if numberLine}
    <HighlightTable class={className} {...restProps}>
      <LineNumberTable
        {lines}
        {startingLineNumber}
        highlightedLines={allHighlightedLines}
        {width}
        {position}
        {hideBorder}
        {wrapLines}
        {backgroundColor}
        highlightedBackground={HIGHLIGHT_CONSTANTS.HIGHLIGHTED_BACKGROUND}
      />
    </HighlightTable>
  {:else}
    <LangTag class={className} {...restProps} languageName={language} {langtag} {highlighted} code={displayCode} />
  {/if}
{:else if DEV}
  <p class="hlc-warning">⚠️ No code provided to highlight.</p>
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
