<script lang="ts">
  import hljs from 'highlight.js/lib/core';
  import { untrack } from 'svelte';
  import LangTag from './LangTag.svelte';
  import HighlightTable from './HighlightTable.svelte';
  import LineNumberTable from './LineNumberTable.svelte';
  import type { HighlightProps } from './types';
  import { replaceLibImport, createHighlightedLinesSet, calculateLineNumberWidth, HIGHLIGHT_CONSTANTS } from '$lib';

  let {
    numberLine,
    language,
    code = '',
    langtag = false,
    hideBorder,
    wrapLines,
    startingLineNumber = 1,
    highlightedLines = [],
    highlightedRanges = [],
    backgroundColor,
    position = 'sticky',
    replaceLib,
    class: className = 'relative',
    ...restProps
  }: HighlightProps = $props();

  const DEV = import.meta.env.DEV;

  // Register language immediately for SSR compatibility
  // Use untrack to avoid the state reference warning
  untrack(() => {
    if (!hljs.getLanguage(language.name)) {
      hljs.registerLanguage(language.name, language.register);
    }
  });

  // Re-register on client side if needed
  $effect(() => {
    const langName = language.name;
    if (!hljs.getLanguage(langName)) {
      hljs.registerLanguage(langName, language.register);
    }
  });

  const displayCode = $derived(replaceLib && typeof replaceLib === 'string' ? replaceLibImport(code, replaceLib) : code);

  const allHighlightedLines = $derived.by(() => createHighlightedLinesSet(highlightedLines, highlightedRanges));

  const highlighted = $derived.by(() => {
    if (!isValid) return '';
    return hljs.highlight(displayCode, { language: language.name }).value;
  });
  const lines = $derived(highlighted.split('\n'));
  const width = $derived(calculateLineNumberWidth(lines.length));
  const isValid = $derived(language && typeof language.name === 'string' && displayCode.trim().length > 0);
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
    <LangTag class={className} {...restProps} languageName={language.name} {langtag} {highlighted} code={displayCode} />
  {/if}
{:else if DEV}
  <p class="text-gray-400 italic">
    ⚠️ Unable to render highlighted code — missing {language ? 'code' : 'language'}.
  </p>
{/if}

<!--
@component
[Go to docs](https://svelte-rune-highlight.codewithshin.com/)
## Props
@prop numberLine
@prop language
@prop code = ''
@prop langtag = false
@prop hideBorder
@prop wrapLines
@prop startingLineNumber = 1
@prop highlightedLines = []
@prop highlightedRanges = []
@prop backgroundColor
@prop position = 'sticky'
@prop replaceLib
@prop class: className = 'relative'
@prop ...restProps
-->
