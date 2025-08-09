<script lang="ts">
  import { Highlight } from '$lib';
  import { A } from 'flowbite-svelte';
  import { HighlightCompo } from 'runes-webkit';
  import typescript from 'highlight.js/lib/languages/typescript';
  import markdown from 'highlight.js/lib/languages/markdown';
  import yaml from 'highlight.js/lib/languages/yaml';
  import json from 'highlight.js/lib/languages/json';
  const modules = import.meta.glob('./samples/**/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const tsLang = {
    name: 'typescript',
    register: typescript
  };
  const mdLang = {
    name: 'markdown',
    register: markdown
  };
  const yamlLang = {
    name: 'yaml',
    register: yaml
  };
  const jsonLang = {
    name: 'json',
    register: json
  };
</script>

<h1>Highlight Component</h1>

<h2>Basic</h2>
<p>
  The Highlight component requires language and code props. The langtag prop is optional and it will
  add a language tag.
</p>

<HighlightCompo code={modules['./samples/highlight/basic.md'] as string} class="max-w-5xl" />
The above code will produce:
<Highlight language={tsLang} code={modules['./samples/javascript.md'] as string} />

<h2>Language Tag</h2>

<h3>Markdown</h3>
<p>
  Set langtag and language props to display the language name in the top right corner of the code
  block.
</p>
<HighlightCompo code={modules['./samples/highlight/markdown.md'] as string} class="max-w-5xl" />

<p>Here's what you'll see when you run this code:</p>

<Highlight
  language={mdLang}
  code={modules['./samples/markdown.md'] as string}
  langtag
  --langtag-color="lightgreen"
/>

<h3>YAML</h3>

<p>Yaml example:</p>
<HighlightCompo code={modules['./samples/highlight/yaml.md'] as string} class="max-w-5xl" />

<p>This code generates the following output:</p>

<Highlight
  language={yamlLang}
  code={modules['./samples/yaml.md'] as string}
  langtag
  --langtag-color="lightcoral"
/>

<h3>JSON</h3>
<p>JSON example:</p>
<HighlightCompo code={modules['./samples/highlight/json.md'] as string} class="max-w-5xl" />

<p>The code produces this output:</p>

<Highlight
  language={jsonLang}
  code={modules['./samples/json.md'] as string}
  langtag
  --langtag-color="springgreen"
/>

<h2>Props</h2>
<p>Props example:</p>
<HighlightCompo code={modules['./samples/props.md'] as string} class="max-w-5xl" />

<h2>Language tag style</h2>
<p>Customize the language tag background, color, and border-radius using style props.</p>

<HighlightCompo code={modules['./samples/style-props.md'] as string} class="max-w-5xl" />

<p>
  See more about line numbers in the <A href="/line-numbers">Line Numbers</A> page.
</p>
