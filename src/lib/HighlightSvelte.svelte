<script lang="ts">
  import LangTag from './LangTag.svelte';
  import hljs from 'highlight.js/lib/core';
  import xml from 'highlight.js/lib/languages/xml';
  import javascript from 'highlight.js/lib/languages/javascript';
  import css from 'highlight.js/lib/languages/css';
  import type { HighlightSvelteProps } from "./types";
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
    replaceLib,
    class: className,
    ...restProps
  }: HighlightSvelteProps = $props();

  const DIGIT_WIDTH = 12;
  const MIN_DIGITS = 2;
  const HIGHLIGHTED_BACKGROUND = 'rgba(254, 241, 96, 0.2)';

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

  let allHighlightedLines = $derived.by(() => {
    const lines = new Set(highlightedLines);

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
  });

  const displayCode = $derived(
    replaceLib && typeof replaceLib === 'string' 
      ? replaceLibImport(code, replaceLib) 
      : code
  );

  let highlighted = $derived.by(() => {
    if (!displayCode.trim()) {
      return '';
    }

    try {
      const xmlResult = hljs.highlight(displayCode, { language: 'xml', ignoreIllegals: true });

      if (xmlResult.relevance < 5) {
        const autoResult = hljs.highlightAuto(displayCode, ['javascript', 'xml', 'css']);
        return autoResult.relevance > xmlResult.relevance ? autoResult.value : xmlResult.value;
      }

      return xmlResult.value;
    } catch (error) {
      console.warn('Highlight.js failed for Svelte code:', error);
      return displayCode;
    }
  });

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
  <LangTag class={className} {...restProps} languageName="svelte" {langtag} {highlighted} code={displayCode} />
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
@prop class: className
@prop ...restProps
-->
