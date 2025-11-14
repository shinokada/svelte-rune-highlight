<script lang="ts">
  import { HighlightCompo } from 'runes-webkit';
  import { P } from 'flowbite-svelte';
  import { CodeWrapper, H1, H2 } from '../utils';
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.*', {
    query: '?raw',
    import: 'default',
    eager: true
  });

</script>

<H1>Line Numbers</H1>

<P>The Highlight component has the option to add line numbers. See the following examples.</P>

<H2>Number Lines</H2>

<P>
  Add <code>numberLine</code> props to add line numbers.
</P>

<CodeWrapper>
  <ExampleComponents.Example1 />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/Example1.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Hide Border</H2>

<P>
  Add <code>hideBorder</code> props to hide the border.
</P>

<CodeWrapper>
  <ExampleComponents.Example2 />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/Example2.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Wrapped Lines</H2>

<P>
  Add <code>wrapLines</code> props to wrap lines.
</P>

<CodeWrapper>
  <ExampleComponents.Example3 />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/Example3.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Background color</H2>

<CodeWrapper>
  <ExampleComponents.Example4 />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/Example4.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Position</H2>

<P>Use one of 'static' | 'relative' | 'abolute' | 'sticky' | undefined. The default value is 'sticky'.</P>

<CodeWrapper>
  <ExampleComponents.Example5 />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/Example5.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Starting Line Number</H2>

<P>
  Use the <code>startingLineNumber</code> props to set the start line number.
</P>

<CodeWrapper>
  <ExampleComponents.Example6 />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/Example6.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Highlighted Lines and Highlighted Background</H2>

<P>
  Use the <code>highlightedLines</code> and <code>highlightedBackground</code> props to highlight lines.
</P>

<CodeWrapper>
  <ExampleComponents.Example7 />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/Example7.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Custom styles</H2>

<P>
  Use the <code>--line-number-color</code>, <code>--border-color</code> <code>--padding-left</code>, <code>--padding-right</code>, and <code>--highlighted-background</code> props to customize the styles.
</P>

<CodeWrapper>
  <ExampleComponents.Example8 />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/Example8.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Types</H2>

<CodeWrapper>
  <ExampleComponents.TypeEx />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/TypeEx.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Numberline for Svelte file</H2>

<CodeWrapper>
  <ExampleComponents.SvelteEx />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/SvelteEx.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Highlighting lines</H2>
<P>Use highlightedLines and/or highlightedRanges props to highlight lines as the following example.</P>
<P>[start, end] ranges are inclusive and 1‑based.</P>
<CodeWrapper>
  <ExampleComponents.RangeEx />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/RangeEx.svelte'] as string} />
  {/snippet}
</CodeWrapper>

