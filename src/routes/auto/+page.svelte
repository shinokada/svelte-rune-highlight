<script lang="ts">
  import {HighlightAuto} from "$lib";
  import HighlightCompo from "../utils/HighlightCompo.svelte";
  import typescript from "$lib/languages/typescript";
  import markdown from "$lib/languages/markdown";
  import javascript from "$lib/languages/javascript";
  import json from "$lib/languages/json";
  import css from "$lib/languages/css";
  import python from "$lib/languages/python";
  import rust from "$lib/languages/rust";
  const modules = import.meta.glob('./samples/*.md', { query: '?raw', import: 'default', eager: true });

  const code = `<HighlightAuto code={sample-code} />`;
 
</script>

<h1>HighlightAuto Component</h1>

HighlightAuto automatically detects the language of the code and highlights it.

All the code has the same structure.

<HighlightCompo {code} />

<h2>Examples</h2>
<h3>Javascript</h3>
<HighlightAuto code={modules['./samples/javascript.md'] as string}/>

<h3>Markdown</h3>
<HighlightAuto code={modules['./samples/markdown.md'] as string} />

<h3>HTML</h3>
<HighlightAuto code={modules['./samples/html.md'] as string} langtag --langtag-color='red'/>

<h3>CSS</h3>
<HighlightAuto code={modules['./samples/css.md'] as string} langtag --langtag-color='red'/>

<h3>Typescript</h3>
<HighlightAuto code={modules['./samples/typescript.md'] as string} langtag --langtag-color='red'/>

<h3>Python</h3>
<HighlightAuto code={modules['./samples/python.md'] as string} />

<h3>Rust</h3>
<HighlightAuto code={modules['./samples/rust.md'] as string} />



<h2>Props</h2>
<HighlightCompo code={modules['./samples/props.md'] as string} />

<h2>Language Tag: Caution - This may not be accurate.</h2>

<p>Set langtag to true to display the language name in the top right corner of the code block. </p>

<h2>Style Props</h2>
<p>Customize the language tag background, color, and border-radius using style props.</p>

<HighlightCompo code={modules['./samples/style-props.md'] as string} />



