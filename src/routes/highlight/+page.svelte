<script lang="ts">
  import { ExampleWrapper, transformComponents, transformModules } from '$lib';
  import type { Component } from 'svelte';
  import { P, List, Li, Table } from 'flowbite-svelte';
  import { H1, H2, H3 } from '../utils';

  // import StyleProps
  import StylePropsCompo from '../line-numbers/examples/StyleProps.svelte';

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

<ExampleWrapper component={components['Types']} />

<H2>Style</H2>

<P>Customize the language tag background, color, numberline style and border-radius using style props.</P>
<ExampleWrapper component={StylePropsCompo} />

<H2>Examples</H2>

<H3>Basic</H3>
<P>The Highlight component requires language and code props. The langtag prop is optional and it will add a language tag.</P>

<ExampleWrapper component={components['JsLang']} code={modules['JsLang']} />

<H3>Markdown</H3>
<P>Set langtag and language props to display the language name in the top right corner of the code block.</P>
<ExampleWrapper component={components['MdLang']} code={modules['MdLang']} />

<H3>YAML</H3>
<ExampleWrapper component={components['YmlLang']} code={modules['YmlLang']} />

<H3>JSON</H3>
<ExampleWrapper component={components['JsonLang']} code={modules['JsonLang']} />

<H3>Typescript</H3>
<ExampleWrapper component={components['TsLang']} code={modules['TsLang']} />
