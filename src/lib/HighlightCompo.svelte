<script lang="ts">
  import '../lib/styles.css';
  import { DEV } from 'esm-env';
  import { HighlightSvelte, Highlight, copyToClipboard, replaceLibImport, languages } from '$lib';
  import { highlightcompo } from './theme';
  import { onDestroy } from 'svelte';
  import type { HighlightCompoProps } from './types';

  let {
    code,
    lang = 'svelte',
    contentClass = '',
    replaceLib,
    showCopy = true,
    showExpand = true,
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
    const updateOverflowState = () => {
      const hasOverflow = el.scrollHeight > el.clientHeight;
      // Only update showExpandButton if we're not expanded
      // Once expanded, keep the button visible so user can collapse
      if (!expand) {
        showExpandButton = showExpand && hasOverflow;
      }
    };

    // Initial check with RAF to ensure layout is complete
    requestAnimationFrame(() => {
      updateOverflowState();
    });

    // Use ResizeObserver to watch for size changes
    const resizeObserver = new ResizeObserver(() => {
      updateOverflowState();
    });

    resizeObserver.observe(el);

    return {
      update() {
        updateOverflowState();
      },
      destroy() {
        resizeObserver.disconnect();
      }
    };
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

  // Debug logging removed for production
  // You can use console.log if needed for debugging:
  // console.log('HighlightCompo:', { hasCode: !!displayCode, codeLength: displayCode?.length, lang, isEmpty, showExpandButton, expand });
</script>

{#if isEmpty && DEV}
  <div class="hlc-empty-code hlc-warning">
    ⚠️ <strong>HighlightCompo:</strong> No code was passed to this component.
  </div>
{:else}
  <div class={base}>
    <div class={contentClass} style="overflow-y: auto; {!expand ? 'max-height: 288px;' : ''} {showExpandButton ? 'padding-bottom: 2.5rem;' : ''}" tabindex="-1" use:checkOverflow>
      <!-- Copy Button -->
      {#if displayCode && showCopy}
        <button
          onclick={handleCopyClick}
          type="button"
          aria-label={copyStatus === 'success' ? 'Code copied to clipboard' : 'Copy code to clipboard'}
          class="hlc-copy-button"
          class:hlc-copy-success={buttonStyles.success}
          class:hlc-copy-error={buttonStyles.error}
          class:hlc-copy-idle={buttonStyles.idle}
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
        <div class="hlc-no-code">No code provided</div>
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
      <button onclick={handleExpandClick} type="button" aria-expanded={expand} aria-label={expand ? 'Collapse code' : 'Expand code'} class="hlc-expand-button">
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
@prop contentClass = ''
@prop replaceLib
@prop showCopy = true
@prop showExpand = true
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
