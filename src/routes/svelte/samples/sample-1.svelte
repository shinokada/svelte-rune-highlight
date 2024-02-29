<script lang="ts">
  import { HighlightSvelte } from 'svelte-rune-highlight';
  const code2 = `<button on:click={() => { console.log(0); }}>Increment {count}</button>`;
</script>

<HighlightSvelte code={code2} />

