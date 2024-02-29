<script lang="ts">
  // HighlightSvelte
  import LangTag from './LangTag.svelte';
  import hljs from 'highlight.js/lib/core';
  import xml from 'highlight.js/lib/languages/xml';
  import javascript from 'highlight.js/lib/languages/javascript';
  import css from 'highlight.js/lib/languages/css';
  // import { createEventDispatcher } from 'svelte';

  interface Props {
    numberLine?: boolean;
    language?: any;
    code?: string;
    langtag?: boolean;
    preClass?: string;
    hideBorder?: boolean;
    wrapLines?: boolean;
    startingLineNumber?: number;
    highlightedLines?: number[];
  }

  let { numberLine, language, code = '', langtag = false, preClass, hideBorder, wrapLines, startingLineNumber = 1, highlightedLines = [], ...restProps } = $props<Props>();

  // const dispatch = createEventDispatcher();

  hljs.registerLanguage('xml', xml);
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('css', css);

  let highlighted = $state(hljs.highlightAuto(code).value);

  // $effect(() => {
  //   if (highlighted) dispatch('highlight', { highlighted });
  // });
  const DIGIT_WIDTH = 12;
  const MIN_DIGITS = 2;
  const HIGHLIGHTED_BACKGROUND = 'rgba(254, 241, 96, 0.2)';

  // hljs.registerLanguage(language.name, language.register);

  // let highlighted: string = $state(hljs.highlight(code, { language: language.name }).value);
  let lines = $state(<string[]>highlighted.split('\n'));
  let len_digits = lines.length.toString().length;
  let len = len_digits - MIN_DIGITS < 1 ? MIN_DIGITS : len_digits;
  let width = len * DIGIT_WIDTH;
</script>

{#if numberLine}
<div style:overflow-x="auto" {...restProps}>
  <table>
    <tbody class:hljs={true}>
      {#each lines as line, i}
        {@const lineNumber = i + startingLineNumber}
        <tr>
          <td class:hljs={true} class:hideBorder style:position="sticky" style:left="0" style:text-align="right" style:user-select="none" style:width={width + 'px'}>
            <code style:color="var(--line-number-color, currentColor)">
              {lineNumber}
            </code>
            {#if highlightedLines.includes(i)}
              <div class:line-background={true} style:background="var(--highlighted-background, {HIGHLIGHTED_BACKGROUND})" />
            {/if}
          </td>
          <td>
            <pre class:wrapLines><code>{@html line || '\n'}</code></pre>
            {#if highlightedLines.includes(i)}
              <div class:line-background={true} style:background="var(--highlighted-background, {HIGHLIGHTED_BACKGROUND})" />
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
{:else}
<LangTag {preClass} {...restProps} languageName="svelte" {langtag} {highlighted} {code} />
{/if}

