<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import javascript from 'highlight.js/lib/languages/javascript';
  const code = `let message = "Hello, world!";
console.log(message);
const age = 25;
if (age > 18) {
  console.log("You are more than 18 years.");
}`;
  const jsLang = {
    name: 'javascript',
    register: javascript
  };
</script>

<Highlight langtag --langtag-color="LightCyan" --code-font-size="20px" language={jsLang} {code} />
