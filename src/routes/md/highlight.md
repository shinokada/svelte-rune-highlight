<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import typescript from "highlight.js/lib/languages/typescript";
  const code = "const add = (a: number, b: number) => a + b;";
  const tsLang = {
    name: 'typescript',
    register: typescript
  }
</script>

<Highlight language={tsLang} {code} />
