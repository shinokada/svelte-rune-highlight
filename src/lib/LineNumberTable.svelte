<script lang="ts">
  import type { SvelteSet } from 'svelte/reactivity';

  interface Props {
    lines: string[];
    startingLineNumber?: number;
    highlightedLines: SvelteSet<number>;
    width: number;
    position?: 'static' | 'relative' | 'absolute' | 'sticky';
    hideBorder?: boolean;
    wrapLines?: boolean;
    backgroundColor?: string;
    highlightedBackground?: string;
  }

  let { lines, startingLineNumber = 1, highlightedLines, width, position = 'sticky', hideBorder, wrapLines, backgroundColor, highlightedBackground = 'rgba(254, 241, 96, 0.2)' }: Props = $props();
</script>

<table>
  <tbody class:hljs={true}>
    {#each lines as line, i (i + startingLineNumber)}
      {@const lineNumber = i + startingLineNumber}
      <tr>
        <td class:hljs={true} class:hideBorder style:position style:left="0" style:text-align="right" style:user-select="none" style:width={width + 'px'} style:background-color={backgroundColor}>
          <code style:color="var(--line-number-color, currentColor)">
            {lineNumber}
          </code>
          {#if highlightedLines.has(lineNumber)}
            <div class:line-background={true} style:background={`var(--highlighted-background, ${highlightedBackground})`}></div>
          {/if}
        </td>
        <td>
          <!-- eslint-disable-next-line svelte/no-at-html-tags -->
          <pre class:wrapLines><code>{@html line || '\n'}</code></pre>
          {#if highlightedLines.has(lineNumber)}
            <div class:line-background={true} style:background={`var(--highlighted-background, ${highlightedBackground})`}></div>
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
