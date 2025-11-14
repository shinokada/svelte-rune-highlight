<script lang="ts">
  import { HighlightCompo } from 'runes-webkit';
  import { P } from 'flowbite-svelte';
  import { CodeWrapper, H1, H2 } from '../utils';

  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.*', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;
</script>

<H1>HighlightSvelte Component</H1>

<H2>Example 1</H2>
<P>
  Use the HighlightSvelte component to highlight your Svelte code. The HighlightSvelte component requires code props. <code>langtag</code> and <code>--langtag-color</code> are optional.
</P>

<CodeWrapper>
  <ExampleComponents.Sample1 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Sample1.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Example 2</H2>
<P>
  Using different <code>--langtag-color</code>.
</P>

<CodeWrapper>
  <ExampleComponents.Sample2 />
  {#snippet codeblock()}
    <HighlightCompo codeLang="ts" code={exampleModules['./examples/Sample2.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Numberline for Svelte file</H2>

<CodeWrapper>
  <ExampleComponents.SvelteEx />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/SvelteEx.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Using highlightedRanges</H2>

<P>Use highlightedLines and/or highlightedRanges props to highlight lines as the following example.</P>

<CodeWrapper>
  <ExampleComponents.RangeEx />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/RangeEx.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Props</H2>
<P>HighlightSvelte component has the following props:</P>

<CodeWrapper>
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/props.md'] as string} class="max-w-5xl" />
  {/snippet}
</CodeWrapper>

<H2>Types</H2>
<P>HighlightSvelte component has the following types:</P>

<CodeWrapper>
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/types.md'] as string} class="max-w-5xl" />
  {/snippet}
</CodeWrapper>

<H2>Language tag style</H2>

<P>Customize the language tag background, color, and border-radius using style props.</P>

<CodeWrapper>
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/style-props.md'] as string} class="max-w-5xl" />
  {/snippet}
</CodeWrapper>
