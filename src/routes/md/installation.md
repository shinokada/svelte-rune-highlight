pnpm i -D svelte-rune-highlight highlight.js

// +layout.svelte

<script lang="ts">
  // select your faviroite scheme from https://highlightjs.org/demo
  import 'highlight.js/styles/github-dark.css';
</script>

// or use directly from cdnjs
<svelte:head>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github-dark.min.css" />
</svelte:head>
