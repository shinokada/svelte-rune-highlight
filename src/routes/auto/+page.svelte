<script lang="ts">
  import { HighlightAuto } from '$lib';
  import { HighlightCompo } from 'runes-webkit';
  const modules = import.meta.glob('./samples/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const code = `<HighlightAuto code={sample-code} />`;
</script>

<h1>HighlightAuto Component</h1>

HighlightAuto automatically detects the programming language of the provided code using Highlight.js
and applies syntax highlighting. Optionally, it can display a language tag overlay showing the
detected language.

<HighlightCompo {code} class="max-w-5xl" />

<h2>Examples</h2>
<h3>Javascript</h3>
<HighlightAuto code={modules['./samples/javascript.md'] as string} />

<h3>Markdown</h3>
<HighlightAuto code={modules['./samples/markdown.md'] as string} />

<h3>HTML</h3>
<HighlightAuto code={modules['./samples/html.md'] as string} langtag --langtag-color="red" />

<h3>CSS</h3>
<HighlightAuto code={modules['./samples/css.md'] as string} langtag --langtag-color="red" />

<h3>Typescript</h3>
<HighlightAuto code={modules['./samples/typescript.md'] as string} langtag --langtag-color="red" />

<h3>Python</h3>
<HighlightAuto code={modules['./samples/python.md'] as string} />

<h3>Rust</h3>

<HighlightAuto code={modules['./samples/rust.md'] as string} />

<h2>Props</h2>

<HighlightAuto code={modules['./samples/props.md'] as string} />

<h2>Language Tag: Caution - This may not be accurate.</h2>

<p>Set langtag to true to display the language name in the top right corner of the code block.</p>

<h2>Language tag style</h2>
<p>Customize the language tag background, color, and border-radius using style props.</p>

<HighlightCompo code={modules['./samples/style-props.md'] as string} class="max-w-5xl" />
