<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import typescript from 'highlight.js/lib/languages/typescript';
  const code = `const message: string = "Hello, world!";
console.log(message);

function greet(fname: string): string {
  return "Hello, \${fname}!";
}
console.log(greet("Bard"));`;
  const tsLang = {
    name: 'typescript',
    register: typescript
  };
</script>

<Highlight langtag --langtag-color="Violet" --langtag-background="#fff" --langtag-border-radius="10px" --code-font-family="cursive" language={tsLang} {code} />
