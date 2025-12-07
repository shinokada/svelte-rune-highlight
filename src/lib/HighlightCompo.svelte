<script lang="ts">
  import { DEV } from 'esm-env';
  import { HighlightSvelte, Highlight, copyToClipboard, replaceLibImport, languages } from '$lib';
  import { highlightcompo } from './theme';
  import { onDestroy } from 'svelte';
  import type { HighlightCompoProps } from './types';

  let {
    code,
    lang = 'svelte',
    contentClass = 'overflow-hidden',
    replaceLib,
    showCopy = true,
    class: className,
    langtag = false,
    numberLine = false,
    hideBorder = false,
    wrapLines = false,
    startingLineNumber = 1,
    highlightedLines = [],
    highlightedRanges = [],
    backgroundColor,
    position = 'sticky'
  }: HighlightCompoProps = $props();

  // Apply library replacement if specified
  const displayCode = $derived(replaceLib && typeof replaceLib === 'string' ? replaceLibImport(code, replaceLib) : code);

  let showExpandButton = $state(false);
  let expand = $state(false);

  // Use a single state for copy status
  type CopyStatus = 'idle' | 'success' | 'error';
  let copyStatus = $state<CopyStatus>('idle');
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const checkOverflow = (el: HTMLElement) => {
    showExpandButton = el.clientHeight < el.scrollHeight;
  };

  const base = $derived(highlightcompo({ class: className }));

  const handleExpandClick = () => {
    expand = !expand;
  };

  function handleCopyClick() {
    if (!displayCode) return;

    // Clear any existing timeout to prevent overlapping timers
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    copyToClipboard(displayCode)
      .then(() => {
        copyStatus = 'success';
        timeoutId = setTimeout(() => {
          copyStatus = 'idle';
          timeoutId = null;
        }, 2000);
      })
      .catch((err) => {
        console.error('Error in copying:', err);
        copyStatus = 'error';
        timeoutId = setTimeout(() => {
          copyStatus = 'idle';
          timeoutId = null;
        }, 2000);
      });
  }

  // Cleanup timeout on component destroy
  onDestroy(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  });

  // Derive button styles based on copy status
  const buttonStyles = $derived({
    success: copyStatus === 'success',
    error: copyStatus === 'error',
    idle: copyStatus === 'idle'
  });

  const isEmpty = $derived(!displayCode?.trim()?.length);
</script>

{#if isEmpty && DEV}
  <div class="p-4 text-orange-500">
    ⚠️ <strong>HighlightCompo:</strong> No code was passed to this component.
  </div>
{:else}
  <div class={base}>
    <div class={contentClass} class:max-h-72={!expand} class:pb-10={showExpandButton} tabindex="-1" use:checkOverflow>
      <!-- Copy Button -->
      {#if displayCode && showCopy}
        <button
          onclick={handleCopyClick}
          type="button"
          aria-label={copyStatus === 'success' ? 'Code copied to clipboard' : 'Copy code to clipboard'}
          class="absolute top-4 right-2 z-10 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors focus:ring-2 focus:outline-none"
          class:text-green-700={buttonStyles.success}
          class:bg-green-50={buttonStyles.success}
          class:dark:text-green-400={buttonStyles.success}
          class:dark:bg-green-900={buttonStyles.success}
          class:focus:ring-green-200={buttonStyles.success}
          class:dark:focus:ring-green-700={buttonStyles.success}
          class:text-red-700={buttonStyles.error}
          class:bg-red-50={buttonStyles.error}
          class:dark:text-red-400={buttonStyles.error}
          class:dark:bg-red-900={buttonStyles.error}
          class:focus:ring-red-200={buttonStyles.error}
          class:dark:focus:ring-red-700={buttonStyles.error}
          class:text-gray-900={buttonStyles.idle}
          class:bg-gray-50={buttonStyles.idle}
          class:hover:bg-gray-100={buttonStyles.idle}
          class:dark:text-gray-400={buttonStyles.idle}
          class:dark:bg-gray-800={buttonStyles.idle}
          class:dark:hover:bg-gray-700={buttonStyles.idle}
          class:focus:ring-gray-200={buttonStyles.idle}
          class:dark:focus:ring-gray-700={buttonStyles.idle}
        >
          {#if copyStatus === 'success'}
            ✓ Copied!
          {:else if copyStatus === 'error'}
            ✗ Failed
          {:else}
            Copy
          {/if}
        </button>
      {/if}

      <!-- Code Content -->
      {#if !displayCode}
        <div class="p-4 text-sm text-gray-500 dark:text-gray-400">No code provided</div>
      {:else if lang === 'svelte'}
        <HighlightSvelte code={displayCode} class="m-0 p-0" {langtag} {numberLine} {hideBorder} {wrapLines} {startingLineNumber} {highlightedLines} {highlightedRanges} {backgroundColor} {position} />
      {:else if lang && lang in languages}
        <Highlight
          language={languages[lang]}
          code={displayCode}
          class="m-0 p-0"
          {numberLine}
          {langtag}
          {hideBorder}
          {wrapLines}
          {startingLineNumber}
          {highlightedLines}
          {highlightedRanges}
          {backgroundColor}
          {position}
        />
      {:else}
        <HighlightSvelte code={displayCode} class="m-0 p-0" {langtag} {numberLine} {hideBorder} {wrapLines} {startingLineNumber} {highlightedLines} {highlightedRanges} {backgroundColor} {position} />
      {/if}
    </div>

    <!-- Expand/Collapse Button -->
    {#if showExpandButton}
      <button
        onclick={handleExpandClick}
        type="button"
        aria-expanded={expand}
        aria-label={expand ? 'Collapse code' : 'Expand code'}
        class="hover:text-primary-700 absolute start-0 bottom-0 w-full border-t border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {expand ? 'Collapse code' : 'Expand code'}
      </button>
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-rune-highlight.codewithshin.com/)
## Props
@prop code
@prop lang = 'svelte'
@prop contentClass = 'overflow-hidden'
@prop replaceLib
@prop showCopy = true
@prop class: className
@prop langtag = false
@prop numberLine = false
@prop hideBorder = false
@prop wrapLines = false
@prop startingLineNumber = 1
@prop highlightedLines = []
@prop highlightedRanges = []
@prop backgroundColor
@prop position = 'sticky'
-->
