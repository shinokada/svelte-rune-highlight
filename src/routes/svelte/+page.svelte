<script lang="ts">
  import { HighlightSvelte } from '$lib';
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  const modules = import.meta.glob('./samples/**/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>HighlightSvelte Component</h1>

<h2>Example 1</h2>
<p>
  Use the HighlightSvelte component to highlight your Svelte code. The
  HighlightSvelte component requires code props. <code>langtag</code>
  and
  <code>--langtag-color</code>
  are optional.
</p>
<HighlightCompo code={modules['./samples/highlight/example-1.md'] as string} />
<p>Here's the resulting output from the code:</p>
<HighlightSvelte
  code={modules['./samples/sample-1.md'] as string}
  langtag
  --langtag-color="aqua"
/>

<h2>Example 2</h2>
<p>
  Using different <code>--langtag-color</code>
  .
</p>
<HighlightCompo code={modules['./samples/highlight/example-2.md'] as string} />
<p>The code creates this output:</p>
<HighlightSvelte
  code={modules['./samples/sample-2.md'] as string}
  langtag
  --langtag-color="red"
/>

<h2>Props</h2>
<p>HighlightSvelte component has the following props:</p>
<HighlightCompo code={modules['./samples/props.md'] as string} />

<h2>Language tag style</h2>

<p>
  Customize the language tag background, color, and border-radius using style
  props.
</p>

<HighlightCompo code={modules['./samples/style-props.md'] as string} />
