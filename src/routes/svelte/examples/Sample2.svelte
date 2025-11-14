<script lang="ts">
  import { HighlightSvelte } from '$lib';
  const code = `<button onclick={() => { console.log(0); }}>Increment {count}</button>`;
</script>

<HighlightSvelte {code} langtag --langtag-color="green"/>