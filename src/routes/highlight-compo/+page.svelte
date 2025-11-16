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

<CodeWrapper>
  <ExampleComponents.SvelteEx />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/SvelteEx.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H3>JavaScript</H3>

<CodeWrapper>
  <ExampleComponents.Js />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/Js.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H3>JSON</H3>

<CodeWrapper>
  <ExampleComponents.Json />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/Json.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H3>Markdown</H3>

<CodeWrapper>
  <ExampleComponents.Md />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/Md.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H3>TypeScript</H3>

<CodeWrapper>
  <ExampleComponents.Ts />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/Ts.svelte'] as string} />
  {/snippet}
</CodeWrapper>

<H3>YAML</H3>

<CodeWrapper>
  <ExampleComponents.Yaml />
  {#snippet codeblock()}
    <HighlightCompo code={exampleModules['./examples/Yaml.svelte'] as string} />
  {/snippet}
</CodeWrapper>
