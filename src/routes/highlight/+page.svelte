<script lang="ts">
  import { Highlight } from '$lib';
  import { A } from 'flowbite-svelte';
  // import Highlight from "$lib/Highlight.svelte";
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  import typescript from '$lib/languages/typescript';
  import markdown from '$lib/languages/markdown';
  import yaml from '$lib/languages/yaml';
  import json from '$lib/languages/json';
  const modules = import.meta.glob('./samples/**/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Highlight Component</h1>

<h2>Basic</h2>
<p>
  The Highlight component requires language and code props. The langtag prop is
  optional and it will add a language tag.
</p>

<HighlightCompo code={modules['./samples/highlight/basic.md'] as string} />
The above code will produce:
<Highlight
  language={typescript}
  code={modules['./samples/javascript.md'] as string}
/>

<h2>Language Tag</h2>

<h3>Markdown</h3>
<p>
  Set langtag and language props to display the language name in the top right
  corner of the code block.
</p>
<HighlightCompo code={modules['./samples/highlight/markdown.md'] as string} />

<p>Here's what you'll see when you run this code:</p>

<Highlight
  language={markdown}
  code={modules['./samples/markdown.md'] as string}
  langtag
  --langtag-color="lightgreen"
/>

<h3>YAML</h3>

<p>Yaml example:</p>
<HighlightCompo code={modules['./samples/highlight/yaml.md'] as string} />

<p>This code generates the following output:</p>

<Highlight
  language={yaml}
  code={modules['./samples/yaml.md'] as string}
  langtag
  --langtag-color="lightcoral"
/>

<h3>JSON</h3>
<p>JSON example:</p>
<HighlightCompo code={modules['./samples/highlight/json.md'] as string} />

<p>The code produces this output:</p>

<Highlight
  language={json}
  code={modules['./samples/json.md'] as string}
  langtag
  --langtag-color="springgreen"
/>

<h2>Props</h2>
<p>Props example:</p>
<HighlightCompo code={modules['./samples/props.md'] as string} />

<h2>Language tag style</h2>
<p>
  Customize the language tag background, color, and border-radius using style
  props.
</p>

<HighlightCompo code={modules['./samples/style-props.md'] as string} />

<p>
  See more about line numbers in the <A href="/line-numbers">Line Numbers</A> page.
</p>
