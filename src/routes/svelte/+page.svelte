<script lang="ts">
  import { ExampleWrapper, transformComponents, transformModules } from '$lib';
  import type { Component } from 'svelte';
  import { P, List, Li, Table } from 'flowbite-svelte';
  import { H1, H2, H3 } from '../utils';

  // Import components dynamically
  const componentModules = import.meta.glob('./examples/*.*', {
    eager: true
  }) as Record<string, { default: Component }>;

  // Import source code
  const exampleModules = import.meta.glob('./examples/*.*', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;

  // Transform both using helper functions
  const components = transformComponents(componentModules);
  const modules = transformModules(exampleModules);

  const props = [
    {
      prop: 'code',
      type: 'string',
      default: '""',
      description: 'Svelte code to highlight'
    },
    {
      prop: 'langtag',
      type: 'boolean',
      default: 'false',
      description: 'Show "svelte" language tag in top-right corner'
    },
    {
      prop: 'numberLine',
      type: 'boolean',
      default: 'undefined',
      description: 'Show line numbers'
    },
    {
      prop: 'hideBorder',
      type: 'boolean',
      default: 'undefined',
      description: 'Hide border between line numbers and code'
    },
    {
      prop: 'wrapLines',
      type: 'boolean',
      default: 'undefined',
      description: 'Enable line wrapping'
    },
    {
      prop: 'startingLineNumber',
      type: 'number',
      default: '1',
      description: 'Starting line number for display'
    },
    {
      prop: 'highlightedLines',
      type: 'number[]',
      default: '[]',
      description: 'Array of line numbers to highlight'
    },
    {
      prop: 'highlightedRanges',
      type: '[number, number][]',
      default: '[]',
      description: 'Array of line ranges to highlight [start, end]'
    },
    {
      prop: 'backgroundColor',
      type: 'string',
      default: 'undefined',
      description: 'Background color for line numbers column'
    },
    {
      prop: 'position',
      type: '"static" | "relative" | "absolute" | "sticky"',
      default: '"sticky"',
      description: 'CSS position for line numbers column'
    },
    {
      prop: 'class',
      type: 'string',
      default: 'undefined',
      description: 'CSS class for the component'
    }
  ];
</script>

<H1>HighlightSvelte Component</H1>

<P
  >Specialized syntax highlighting for Svelte code using XML, JavaScript, and CSS parsers. Intelligently detects the best highlighting approach based on relevance scores. Features line numbers,
  language tags, and line highlighting.</P
>

<H2>Features</H2>
<List>
  <Li>✅ Specialized parser for Svelte's XML, JavaScript, and CSS syntax</Li>
  <Li>✅ Compares relevance scores to choose the best highlighting approach</Li>
  <Li>✅ Combines XML, JavaScript, and CSS highlighting</Li>
  <Li>✅ Optional line numbering with customizable starting number</Li>
  <Li>✅ Display "svelte" tag in top-right corner</Li>
  <Li>✅ Highlight specific lines or ranges with custom background</Li>
  <Li>✅ Validates line ranges and warns about invalid inputs</Li>
  <Li>✅ Line numbers stay visible while scrolling horizontally</Li>
  <Li>✅ Optional line wrapping for long lines</Li>
  <Li>✅ Gracefully falls back to plain code if highlighting fails</Li>
  <Li>✅ Configurable colors, borders, and backgrounds via CSS variables</Li>
  <Li>✅ Horizontal scroll for wide code blocks</Li>
</List>

<H2>Props</H2>

<Table items={props} hoverable={true} />

<H2>Types</H2>
<P>HighlightSvelte component has the following types:</P>
<ExampleWrapper component={components['Types']} code={modules['Types']} showCode={false} />

<H2>Language tag style</H2>

<P>Customize the language tag background, color, and border-radius using style props.</P>
<ExampleWrapper component={components['StyleProps']} code={modules['StyleProps']} showCode={false}/>

<H2>Examples</H2>
<P>
  Use the HighlightSvelte component to highlight your Svelte code. The HighlightSvelte component requires code props. <code>langtag</code> and <code>--langtag-color</code> are optional.
</P>
<ExampleWrapper component={components['Sample1']} code={modules['Sample1']} />

<P>
  Using different <code>--langtag-color</code>.
</P>
<ExampleWrapper component={components['Sample2']} code={modules['Sample2']} />

<H3>Numberline for Svelte file</H3>
<ExampleWrapper component={components['SvelteEx']} code={modules['SvelteEx']} />


<H3>Using highlightedRanges</H3>

<P>Use highlightedLines and/or highlightedRanges props to highlight lines as the following example.</P>
<ExampleWrapper component={components['RangeEx']} code={modules['RangeEx']} />

