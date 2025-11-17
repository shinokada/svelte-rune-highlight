<script lang="ts">
  import { ExampleWrapper, transformComponents, transformModules } from '$lib';
  import type { Component } from 'svelte';
  import { P, List, Li, Table } from 'flowbite-svelte';
  import { H1, H2, H3 } from '../utils';

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
      default: 'required',
      description: 'Code to highlight'
    },
    {
      prop: 'lang',
      type: 'SupportedLanguage',
      default: '"svelte"',
      description: 'Language: "svelte", "ts", "js", "json", "yaml", "md"'
    },
    {
      prop: 'contentClass',
      type: 'string',
      default: '"overflow-hidden"',
      description: 'CSS class for content wrapper'
    },
    {
      prop: 'class',
      type: 'string',
      default: 'undefined',
      description: 'CSS class for outer container'
    },
    {
      prop: 'replaceLib',
      type: 'string | false',
      default: '"svelte-rune-highlight"',
      description: 'Replace $lib imports or disable with false'
    },
    {
      prop: 'showCopy',
      type: 'boolean',
      default: 'true',
      description: 'Show or hide the copy button'
    }
  ];
</script>

<H1>HighlightCompo Component</H1>
<P
  >A Svelte component for syntax highlighting with copy-to-clipboard functionality, expandable code blocks, and support for multiple languages (Svelte, TypeScript, JavaScript, JSON, YAML, Markdown).
  Features automatic library import replacement and responsive overflow detection.</P
>

<H2>Features</H2>

<List>
  <Li>✅ One-click code copying with visual feedback</Li>
  <Li>✅ Automatically detects overflow and adds expand/collapse</Li>
  <Li>✅ Svelte, TypeScript, JavaScript, JSON, YAML, Markdown</Li>
  <Li>✅ Automatically replaces $lib imports for documentation</Li>
  <Li>✅ Shows error state if copy fails</Li>
  <Li>✅ ARIA labels and keyboard support</Li>
  <Li>✅ Automatic dark mode support</Li>
</List>

<H2>Props</H2>

<Table items={props} hoverable={true} />

<H2>Examples</H2>
<H3>Svelte</H3>
<ExampleWrapper component={components['SvelteEx']} code={modules['SvelteEx']} />

<H3>JavaScript</H3>
<ExampleWrapper component={components['Js']} code={modules['Js']} />

<H3>JSON</H3>
<ExampleWrapper component={components['Json']} code={modules['Json']} />

<H3>Markdown</H3>
<ExampleWrapper component={components['Md']} code={modules['Md']} />

<H3>TypeScript</H3>
<ExampleWrapper component={components['Ts']} code={modules['Ts']} />

<H3>YAML</H3>
<ExampleWrapper component={components['Yaml']} code={modules['Yaml']} />
