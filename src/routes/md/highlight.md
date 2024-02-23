<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import typescript from "svelte-rune-highlight/languages/typescript";
  const code = "const add = (a: number, b: number) => a + b;";
</script>

<Highlight language={typescript} {code} />