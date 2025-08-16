<script lang="ts">
  import { Highlight } from "$lib";
  import typescript from 'highlight.js/lib/languages/typescript';
  const examples = import.meta.glob('./*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  const tsLang = {
    name: 'typescript',
    register: typescript
  };
</script>

<Highlight language={tsLang} code={examples["./sample-1.md"] as string} numberLine />