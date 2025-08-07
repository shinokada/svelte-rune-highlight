pnpm i -D svelte-rune-highlight highlight.js

// +layout.svelte

<script lang="ts">
  // select your faviroite scheme from https://highlightjs.org/demo
  import githubDark from 'svelte-rune-highlight/styles/github-dark';
  let { children } = $props();
</script>

<svelte:head>
{@html githubDark}
</svelte:head>

{@render children?.()}
