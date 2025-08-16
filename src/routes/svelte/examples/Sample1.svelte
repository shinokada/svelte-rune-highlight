<script lang="ts">
  import { HighlightSvelte } from 'svelte-rune-highlight';
  const code = `<button onclick={() => { console.log(0); }}>Increment {count}</button>`;
</script>

<HighlightSvelte {code} langtag />