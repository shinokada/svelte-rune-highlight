<script lang="ts">
  import { HighlightCompo } from 'runes-webkit';
  import { P } from 'flowbite-svelte';
  import { CodeWrapper, H1, H2, H3 } from '../utils';

  const code = `<HighlightAuto code={sample-code} />`;

  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;
</script>

<H1>HighlightAuto Component</H1>

<P
  >HighlightAuto automatically detects the programming language of the provided code using
  Highlight.js and applies syntax highlighting. Optionally, it can display a language tag overlay
  showing the detected language.</P
>

<HighlightCompo {code} clipboardClass="top-2" />

<H2>Examples</H2>
<H3>HTML</H3>
<CodeWrapper>
  <ExampleComponents.Html />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      code={exampleModules['./examples/Html.svelte'] as string}
      clipboardClass="top-2"
    />
  {/snippet}
</CodeWrapper>

<H3>CSS</H3>
<CodeWrapper>
  <ExampleComponents.Css />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      code={exampleModules['./examples/Css.svelte'] as string}
      clipboardClass="top-2"
    />
  {/snippet}
</CodeWrapper>

<H3>Javascript</H3>
<P>You can use vite's `import.meta.glob()`:</P>
<CodeWrapper>
  <ExampleComponents.Javascript />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      code={exampleModules['./examples/Javascript.svelte'] as string}
      clipboardClass="top-2"
    />
  {/snippet}
</CodeWrapper>

<H3>Markdown</H3>
<CodeWrapper>
  <ExampleComponents.Markdown />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      code={exampleModules['./examples/Markdown.svelte'] as string}
      clipboardClass="top-2"
    />
  {/snippet}
</CodeWrapper>

<H3>Typescript</H3>
<CodeWrapper>
  <ExampleComponents.Typescript />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      code={exampleModules['./examples/Typescript.svelte'] as string}
      clipboardClass="top-2"
    />
  {/snippet}
</CodeWrapper>

<H3>Python</H3>
<CodeWrapper>
  <ExampleComponents.Python />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      code={exampleModules['./examples/Python.svelte'] as string}
      clipboardClass="top-2"
    />
  {/snippet}
</CodeWrapper>

<H3>Rust</H3>
<CodeWrapper>
  <ExampleComponents.Rust />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      code={exampleModules['./examples/Rust.svelte'] as string}
      clipboardClass="top-2"
    />
  {/snippet}
</CodeWrapper>

<h2>Props</h2>
<CodeWrapper>
  <ExampleComponents.Props />
</CodeWrapper>

<h2>Language Tag: Caution - This may not be accurate.</h2>

<p>Set langtag to true to display the language name in the top right corner of the code block.</p>

<h2>Language tag style</h2>
<p>Customize the language tag background, color, and border-radius using style props.</p>
<CodeWrapper>
  <ExampleComponents.StyleProps />
</CodeWrapper>
