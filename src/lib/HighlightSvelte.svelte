<script lang="ts">
  import LangTag from './LangTag.svelte';
  import HighlightTable from './HighlightTable.svelte';
  import LineNumberTable from './LineNumberTable.svelte';
  import hljs from 'highlight.js/lib/core';
  import xml from 'highlight.js/lib/languages/xml';
  import javascript from 'highlight.js/lib/languages/javascript';
  import css from 'highlight.js/lib/languages/css';
  import type { HighlightSvelteProps } from './types';
  import { replaceLibImport, createHighlightedLinesSet, calculateLineNumberWidth, escapeHtml, HIGHLIGHT_CONSTANTS } from '$lib';

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

  const isDev = import.meta.env.DEV;

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
  let isHighlightError = $state(false);

  const highlighted = $derived.by(() => {
    if (isEmpty) {
      isHighlightError = false;
      return '';
    }

    try {
      isHighlightError = false;
      const xmlResult = hljs.highlight(displayCode, { language: 'xml', ignoreIllegals: true });

      if (xmlResult.relevance < 5) {
        const autoResult = hljs.highlightAuto(displayCode, ['javascript', 'xml', 'css']);
        return autoResult.relevance > xmlResult.relevance ? autoResult.value : xmlResult.value;
      }

      return xmlResult.value;
    } catch (error) {
      isHighlightError = true;
      console.warn('Highlight.js failed for Svelte code:', error);
      return escapeHtml(displayCode);
    }
  });

  const lines = $derived(highlighted.split('\n'));
  const width = $derived(calculateLineNumberWidth(lines.length));
</script>

{#if isEmpty}
  <div class="p-4 text-sm text-gray-500 dark:text-gray-400">No code provided.</div>
{:else if isHighlightError && isDev}
  <div class="mb-2 rounded border border-red-400 p-4 text-sm text-red-500 dark:border-red-700 dark:text-red-400">
    ⚠️ Highlight failed — showing raw text instead.
    <div class="mt-2 text-xs opacity-80">(This message appears only in DEV mode.)</div>
  </div>
{:else}

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
  <LangTag class={className} {...restProps} languageName="svelte" {langtag} {highlighted} code={displayCode} />
{/if}
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
