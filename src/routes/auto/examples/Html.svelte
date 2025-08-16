<script lang="ts">
  import { HighlightAuto } from 'svelte-rune-highlight';
  const code = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Example</title>
  </head>
  <body>
    <header></header>
    <main></main>
    <footer></footer>
  </body>
  </html>`;
</script>

<HighlightAuto {code} />
