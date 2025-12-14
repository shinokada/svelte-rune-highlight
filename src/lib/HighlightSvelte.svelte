<script lang="ts">
  import './styles.css';
  import { DEV } from 'esm-env';
  import LangTag from './LangTag.svelte';
  import HighlightTable from './HighlightTable.svelte';
  import LineNumberTable from './LineNumberTable.svelte';
  import hljs from 'highlight.js/lib/core';
  import xml from 'highlight.js/lib/languages/xml';
  import javascript from 'highlight.js/lib/languages/javascript';
  import css from 'highlight.js/lib/languages/css';
  import type { HighlightSvelteProps } from './types';
  import { replaceLibImport, createHighlightedLinesSet, calculateLineNumberWidth, escapeHtml, HIGHLIGHT_CONSTANTS } from './highlightUtils';

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
    replaceLib,
    class: className,
    ...restProps
  }: HighlightSvelteProps = $props();

  // Register languages once
  if (!hljs.getLanguage('xml')) {
    hljs.registerLanguage('xml', xml);
  }
  if (!hljs.getLanguage('javascript')) {
    hljs.registerLanguage('javascript', javascript);
  }
  if (!hljs.getLanguage('css')) {
    hljs.registerLanguage('css', css);
  }

  const allHighlightedLines = $derived.by(() => createHighlightedLinesSet(highlightedLines, highlightedRanges));

  const displayCode = $derived(replaceLib && typeof replaceLib === 'string' ? replaceLibImport(code, replaceLib) : code);

  const isEmpty = $derived(!displayCode?.trim()?.length);

  const highlightResult = $derived.by(() => {
    if (isEmpty) {
      return { value: '', hasError: false };
    }

    try {
      const xmlResult = hljs.highlight(displayCode, { language: 'xml', ignoreIllegals: true });

      if (xmlResult.relevance < 5) {
        const autoResult = hljs.highlightAuto(displayCode, ['javascript', 'xml', 'css']);
        return {
          value: autoResult.relevance > xmlResult.relevance ? autoResult.value : xmlResult.value,
          hasError: false
        };
      }

      return { value: xmlResult.value, hasError: false };
    } catch (error) {
      console.warn('Highlight.js failed for Svelte code:', error);
      return { value: escapeHtml(displayCode), hasError: true };
    }
  });

  const highlighted = $derived(highlightResult.value);
  const isHighlightError = $derived(highlightResult.hasError);
  const lines = $derived(highlighted.split('\n'));
  const width = $derived(calculateLineNumberWidth(lines.length));
</script>

{#if isEmpty}
  <div class="hlc-empty-code">No code provided.</div>
{:else if isHighlightError && DEV}
  <div class="hlc-error">
    ⚠️ Highlight failed — showing raw text instead.
    <div class="hlc-error-hint">(This message appears only in DEV mode.)</div>
  </div>
{:else if numberLine}
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
  <LangTag class={className} {...restProps} languageName="svelte" {langtag} {highlighted} code={displayCode} />
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
@prop replaceLib
@prop class: className
@prop ...restProps
-->
