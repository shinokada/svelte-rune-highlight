<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    class?: string;
    children: Snippet;
  }

  let { class: className, children }: Props = $props();
</script>

<div style:overflow-x="auto" class="highlight-table class={className}">
  {@render children()}
</div>

<style>
  /* Use :global() since we're styling content from child components */
  .highlight-table :global(pre) {
    margin: 0;
  }

  .highlight-table :global(table),
  .highlight-table :global(tr),
  .highlight-table :global(td) {
    padding: 0;
    border: 0;
    margin: 0;
    vertical-align: baseline;
  }

  .highlight-table :global(table) {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  .highlight-table :global(tr:first-of-type td) {
    padding-top: 1em;
  }

  .highlight-table :global(tr:last-child td) {
    padding-bottom: 1em;
  }

  .highlight-table :global(tr td:first-of-type) {
    z-index: 2;
  }

  .highlight-table :global(td) {
    padding-left: var(--padding-left, 1em);
    padding-right: var(--padding-right, 1em);
  }

  .highlight-table :global(td.hljs:not(.hideBorder):after) {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background: var(--border-color, currentColor);
  }

  .highlight-table :global(.wrapLines) {
    white-space: pre-wrap;
  }

  .highlight-table :global(td),
  .highlight-table :global(td > code),
  .highlight-table :global(pre) {
    position: relative;
  }

  .highlight-table :global(td > code),
  .highlight-table :global(pre) {
    z-index: 1;
  }

  .highlight-table :global(.line-background) {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .highlight-table :global(tr:first-of-type td .line-background),
  .highlight-table :global(tr:last-of-type td .line-background) {
    height: calc(100% - 1em);
  }

  .highlight-table :global(tr:first-of-type td .line-background) {
    top: 1em;
  }

  .highlight-table :global(tr:last-of-type td .line-background) {
    bottom: 1em;
  }
</style>
