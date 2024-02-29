<script lang="ts">
  import { Highlight } from "$lib";
  // import Highlight from "$lib/Highlight.svelte";
  import HighlightCompo from "../utils/HighlightCompo.svelte";
  import typescript from "$lib/languages/typescript";
  import markdown from "$lib/languages/markdown";
  import yaml from "$lib/languages/yaml";
  import json from "$lib/languages/json";
  const modules = import.meta.glob('./samples/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<h1>Highlight Component</h1>

<p>The Highlight component requires language and code props. The langtag prop is optional and it will add a language tag.</p>

<h2>Basic</h2>
<Highlight language={typescript} code={modules['./samples/javascript.md'] as string} />

<h2>Language Tag</h2>

<p>Set langtag to true to display the language name in the top right corner of the code block.</p>

<h3>Markdown</h3>
<Highlight language={markdown} code={modules['./samples/markdown.md'] as string} langtag  --langtag-color='lightgreen'/>

<h3>YAML</h3>
<Highlight language={yaml} code={modules['./samples/yaml.md'] as string} langtag  --langtag-color='lightcoral'/>

<h3>JSON</h3>
<Highlight language={json} code={modules['./samples/json.md'] as string} langtag --langtag-color='springgreen' />


<h2>Props</h2>

<HighlightCompo code={modules['./samples/props.md'] as string} />

<h2>Style Props</h2>
<p>Customize the language tag background, color, and border-radius using style props.</p>

<HighlightCompo code={modules['./samples/style-props.md'] as string} />