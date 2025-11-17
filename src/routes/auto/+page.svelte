<script lang="ts">
  import { ExampleWrapper, transformComponents, transformModules } from '$lib';
  import type { Component } from 'svelte';
  import { P, List, Li, Table } from 'flowbite-svelte';
  import { H1, H2, H3 } from '../utils';

  // import StyleProps
  import StylePropsCompo from '../line-numbers/examples/StyleProps.svelte'

  // Import components dynamically
  const componentModules = import.meta.glob('./examples/*.svelte', {
    eager: true
  }) as Record<string, { default: Component }>;

  // Import source code
  const exampleModules = import.meta.glob('./examples/*.svelte', {
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
      description: 'Code to highlight with automatic language detection'
    },
    {
      prop: 'langtag',
      type: 'boolean',
      default: 'false',
      description: 'Show detected language tag in top-right corner'
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
      prop: 'languages',
      type: 'string[]',
      default: 'undefined',
      description: 'Optional subset of languages to restrict detection'
    },
    {
      prop: 'class',
      type: 'string',
      default: 'undefined',
      description: 'CSS class for the component'
    }
  ];
</script>

<H1>HighlightAuto Component</H1>

<P
  >HighlightAuto automatically detects the programming language of the provided code using Highlight.js and applies syntax highlighting. Optionally, it can display a language tag overlay showing the
  detected language.</P
>

<H2>Features</H2>
<List>
  <Li>✅ Uses highlight.js auto-detection to identify code language</Li>
  <Li>✅ Optionally limit detection to specific languages for better accuracy</Li>
  <Li>✅ Optional line numbering with customizable starting number</Li>
  <Li>✅ Display detected language name in top-right corner</Li>
  <Li>✅ Highlight specific lines or ranges with custom background</Li>
  <Li>✅ Line numbers stay visible while scrolling horizontally</Li>
  <Li>✅ Optional line wrapping for long lines</Li>
  <Li>✅ Gracefully falls back to plaintext if detection fails</Li>
  <Li>✅ Handles empty or whitespace-only code strings</Li>
  <Li>✅ Configurable colors, borders, and backgrounds via CSS variables</Li>
  <Li>✅ Supports static, relative, absolute, or sticky positioning</Li>
  <Li>✅ Horizontal scroll for wide code blocks</Li>
</List>

<H2>Props</H2>

<Table items={props} hoverable={true} />

<H2>Language Tag: Caution - This may not be accurate.</H2>

<p>Set langtag to true to display the language name in the top right corner of the code block.</p>

<H2>Types</H2>
<ExampleWrapper component={components['Types']} />

<H2>Style</H2>

<P>Customize the language tag background, color, numberline style and border-radius using style props.</P>
<ExampleWrapper component={StylePropsCompo} />

<H2>Examples</H2>
<H3>HTML</H3>
<ExampleWrapper component={components['Html']} code={modules['Html']} />

<H3>CSS</H3>
<ExampleWrapper component={components['Css']} code={modules['Css']} />

<H3>Javascript</H3>

<ExampleWrapper component={components['Javascript']} code={modules['Javascript']} />

<H3>Markdown</H3>

<ExampleWrapper component={components['Markdown']} code={modules['Markdown']} />

<H3>Typescript</H3>
<ExampleWrapper component={components['Typescript']} code={modules['Typescript']} />

<H3>Python</H3>
<ExampleWrapper component={components['Python']} code={modules['Python']} />

<H3>Rust</H3>
<ExampleWrapper component={components['Rust']} code={modules['Rust']} />

<H3>Other examples</H3>
<ExampleWrapper component={components['ExampleAuto']} code={modules['ExampleAuto']} />
