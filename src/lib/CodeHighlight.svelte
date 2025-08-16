<script lang="ts">
  import hljs from 'highlight.js';

  interface Props {
    code?: string;
    language?: string;
    theme?: string;
    lineNumbers?: boolean;
    copyButton?: boolean;
    class?: string;
    style?: string;
    [key: string]: any;
  }

  let {
    code = '',
    language = 'auto',
    theme = '',
    lineNumbers = false,
    copyButton = false,
    class: className = '',
    style = '',
    ...restProps
  }: Props = $props();

  let preElement = $state<HTMLPreElement>();
  let codeElement = $state<HTMLElement>();
  let copied = $state(false);

  // Reactive highlighted code
  let highlightedCode = $derived.by(() => {
    if (!code) return '';

    try {
      if (language === 'auto') {
        const result = hljs.highlightAuto(code);
        return result.value;
      } else {
        const result = hljs.highlight(code, { language });
        return result.value;
      }
    } catch (error) {
      console.warn('Highlight.js error:', error);
      return hljs.highlightAuto(code).value;
    }
  });

  // Reactive detected language
  let detectedLanguage = $derived.by(() => {
    if (!code) return '';

    try {
      if (language === 'auto') {
        const result = hljs.highlightAuto(code);
        return result.language || 'unknown';
      } else {
        return language;
      }
    } catch (error) {
      return 'unknown';
    }
  });

  // Split code into lines for line numbers
  let codeLines = $derived.by(() => {
    return code.split('\n');
  });

  // Copy to clipboard function
  async function copyToClipboard(): Promise<void> {
    try {
      await navigator.clipboard.writeText(code);
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  }

  // Update highlighted content when it changes
  $effect(() => {
    if (codeElement && highlightedCode) {
      codeElement.innerHTML = highlightedCode;
    }
  });
</script>

<div
  class="code-highlight-container {className}"
  {style}
  data-theme={theme || undefined}
  data-language={detectedLanguage}
  {...restProps}
>
  {#if copyButton}
    <div class="code-highlight-header">
      <span class="code-highlight-language">{detectedLanguage}</span>
      <button
        class="code-highlight-copy-btn"
        onclick={copyToClipboard}
        aria-label="Copy code to clipboard"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  {/if}

  <pre
    bind:this={preElement}
    class="code-highlight-pre"
    class:has-line-numbers={lineNumbers}>{#if lineNumbers}<div
        class="code-highlight-line-numbers">{#each codeLines as _, index}<span
            class="code-highlight-line-number">{index + 1}</span
          >{/each}</div>{/if}<code
      bind:this={codeElement}
      class="code-highlight-code hljs"
      data-language={detectedLanguage}></code></pre>
</div>

<style>
  /* Reset browser defaults and provide minimal base styles */
  .code-highlight-container {
    position: relative;
    display: block;
    box-sizing: border-box;
  }

  .code-highlight-container *,
  .code-highlight-container *::before,
  .code-highlight-container *::after {
    box-sizing: border-box;
  }

  .code-highlight-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px solid #e5e7eb;
    background-color: #f9fafb;
    margin: 0;
  }

  .code-highlight-language {
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    color: #6b7280;
    font-family:
      ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
  }

  .code-highlight-copy-btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-family:
      ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
    background: transparent;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.2s;
    color: inherit;
  }

  .code-highlight-copy-btn:hover {
    background-color: #f3f4f6;
    border-color: #9ca3af;
  }

  .code-highlight-copy-btn:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  /* Reset browser defaults for <pre> */
  .code-highlight-pre {
    /* Reset browser defaults */
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font: inherit;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    tab-size: 4;
    hyphens: none;

    /* Eliminate any gaps/spaces */
    font-size: 0; /* This removes whitespace between inline elements */
    position: relative;
    overflow: auto;
    font-family:
      ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
    line-height: 1.5;
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 0;
  }

  .code-highlight-pre.has-line-numbers {
    display: flex;
    padding: 0;
  }

  .code-highlight-line-numbers {
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem 1rem 1rem;
    border-right: 1px solid #e9ecef;
    background-color: #f1f3f4;
    user-select: none;
    margin: 0;
  }

  .code-highlight-line-number {
    font-size: 0.75rem;
    color: #6b7280;
    text-align: right;
    min-width: 2rem;
    line-height: 1.75;
    font-family:
      ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
    margin: 0;
    padding: 0;
  }

  /* Reset browser defaults for <code> */
  .code-highlight-code {
    /* Reset browser defaults */
    font: inherit;
    margin: 0;
    padding: 1rem;
    border: none;
    white-space: inherit;
    word-spacing: inherit;
    word-break: inherit;
    word-wrap: inherit;
    tab-size: inherit;
    hyphens: inherit;
    font-size: 0.875rem;
    line-height: 1.5;
    display: block;
    font-family:
      ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
  }

  .has-line-numbers .code-highlight-code {
    padding: 1rem;
    flex: 1;
  }

  /* Ensure consistent text rendering across browsers */
  .code-highlight-container,
  .code-highlight-pre,
  .code-highlight-code {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Handle potential conflicts with CSS resets/frameworks */
  .code-highlight-container [class*='hljs'] {
    font-family:
      ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace !important;
    font-size: 0.875rem !important;
    line-height: 1.5 !important;
  }

  .has-line-numbers .code-highlight-code {
    padding: 1rem 1rem 0 1rem !important;
  }
</style>
