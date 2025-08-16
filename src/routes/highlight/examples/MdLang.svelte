<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import markdown from 'highlight.js/lib/languages/markdown';
  const code = `# This is a heading This is some paragraph text. 

- Here is an unordered list item. 
- Another list item. 
 
**This text is bold.**`;
  const mdLang = {
    name: 'markdown',
    register: markdown
  };
</script>

<Highlight langtag --langtag-color="Violet" --langtag-background="Gold" --langtag-border-radius="20px" language={mdLang} {code} />
