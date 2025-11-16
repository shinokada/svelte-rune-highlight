<script lang="ts">
  import { HighlightCompo } from '$lib';
  import { P, List, Li, Table } from 'flowbite-svelte';
  import { CodeWrapper, H1, H2, H3 } from '../utils';

  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*.*', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;

  const props = [
    {
      prop: 'language',
      type: 'HighlightLanguage',
      default: 'required',
      description: 'Language configuration with name and register function'
    },
    {
      prop: 'code',
      type: 'string',
      default: '""',
      description: 'Code to highlight'
    },
    {
      prop: 'numberLine',
      type: 'boolean',
      default: 'undefined',
      description: 'Show line numbers'
    },
    {
      prop: 'langtag',
      type: 'boolean',
      default: 'false',
      description: 'Show language tag in top-right corner'
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
      default: '"relative"',
      description: 'CSS class for the component'
    }
  ];
</script>

<H1>Highlight Component</H1>

<P
  >A flexible syntax highlighting component with line numbers, language tags, line highlighting, and customizable styling. Supports sticky positioning, custom backgrounds, and advanced features like
  highlighting specific lines or ranges.</P
>

<H2>Features</H2>
<List>
  <Li>✅ Optional line numbering with customizable starting number</Li>
  <Li>✅ Display language name in top-right corner</Li>
  <Li>✅ Highlight specific lines or ranges with custom background</Li>
  <Li>✅ Line numbers stay visible while scrolling horizontally</Li>
  <Li>✅ Optional line wrapping for long lines</Li>
  <Li>✅ Configurable colors, borders, and backgrounds via CSS variables</Li>
  <Li>✅ Supports static, relative, absolute, or sticky positioning</Li>
  <Li>✅ Powered by highlight.js with language registration</Li>
  <Li>✅ Horizontal scroll for wide code blocks</Li>
  <Li>✅ Extensive customization through CSS custom properties</Li>
</List>

<H2>Props</H2>

<Table items={props} hoverable={true} />

<H2>Types</H2>
<CodeWrapper>
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/types.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Language tag style</H2>

<P>Customize the language tag background, color, and border-radius using style props.</P>

<CodeWrapper>
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/style-props.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Examples</H2>

<H3>Basic</H3>
<P>The Highlight component requires language and code props. The langtag prop is optional and it will add a language tag.</P>

<CodeWrapper>
  <ExampleComponents.JsLang />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/JsLang.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H3>Markdown</H3>
<P>Set langtag and language props to display the language name in the top right corner of the code block.</P>
<CodeWrapper>
  <ExampleComponents.MdLang />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/MdLang.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H3>YAML</H3>
<CodeWrapper>
  <ExampleComponents.YmlLang />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/YmlLang.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H3>JSON</H3>

<CodeWrapper>
  <ExampleComponents.JsonLang />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/JsonLang.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H3>Typescript</H3>

<CodeWrapper>
  <ExampleComponents.TsLang />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/TsLang.svelte'] as string} />
  {/snippet}
</CodeWrapper>
