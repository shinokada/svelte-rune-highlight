<script lang="ts">
  import { HighlightCompo } from 'runes-webkit';
  import { P } from 'flowbite-svelte';
  import { CodeWrapper, H1, H2, H3 } from '../utils';

  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.*', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;
</script>

<H1>Highlight Component</H1>

<H2>Basic</H2>
<P>The Highlight component requires language and code props. The langtag prop is optional and it will add a language tag.</P>

<CodeWrapper>
  <ExampleComponents.JsLang />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/JsLang.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Language Tag with different styles</H2>

<H3>Markdown</H3>
<P>Set langtag and language props to display the language name in the top right corner of the code block.</P>
<CodeWrapper>
  <ExampleComponents.MdLang />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/MdLang.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H3>YAML</H3>
<CodeWrapper>
  <ExampleComponents.YmlLang />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/YmlLang.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H3>JSON</H3>

<CodeWrapper>
  <ExampleComponents.JsonLang />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/JsonLang.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H3>Typescript</H3>

<CodeWrapper>
  <ExampleComponents.TsLang />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/TsLang.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Props</H2>
<CodeWrapper>
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/props.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Types</H2>
<CodeWrapper>
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/types.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Language tag style</H2>

<P>Customize the language tag background, color, and border-radius using style props.</P>

<CodeWrapper>
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/style-props.md'] as string} />
  {/snippet}
</CodeWrapper>
