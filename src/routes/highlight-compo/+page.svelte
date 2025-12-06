<script lang="ts">
  import { ExampleWrapper, transformComponents, transformModules } from '$lib';
  import type { Component } from 'svelte';
  import { H1, H2 } from '../utils';
  import { List, Li } from 'flowbite-svelte';

  // Import components dynamically
  const componentModules = import.meta.glob('./examples/*.svelte', {
    eager: true
  }) as Record<string, { default: Component }>;

  // Import source code
  const sourceCodeModules = import.meta.glob('./examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;

  // Transform both using helper functions
  const components = transformComponents(componentModules);
  const sourceCodes = transformModules(sourceCodeModules);
</script>

<div class="space-y-8">
  <H1>HighlightCompo Component</H1>
  <div class="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6 pt-0 dark:border-blue-800 dark:bg-blue-950">
    <H2>Key Features</H2>
    <List tag="ul" class="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
      <Li>✓ <strong>Copy to Clipboard</strong> - One-click code copying with visual feedback</Li>
      <Li>✓ <strong>Auto Expand/Collapse</strong> - Automatically adds expand button for code over 18rem height</Li>
      <Li>✓ <strong>Multi-Language</strong> - Supports JavaScript, TypeScript, JSON, YAML, Markdown, Svelte, and more</Li>
      <Li>✓ <strong>Syntax Highlighting</strong> - Powered by highlight.js for accurate code coloring</Li>
      <Li>✓ <strong>Optional Line Numbers</strong> - Add with <code>numberLine={true}</code></Li>
      <Li>
        ✓ <strong>Highlighted Lines</strong> - Emphasize specific lines with <code>highlightedLines={JSON.stringify([1, 3, 5])}</code>
      </Li>
      <Li>✓ <strong>Language Tags</strong> - Show language label with <code>langtag={true}</code></Li>
    </List>
  </div>
  <div>
    <H2>JavaScript - Copy Functionality Demo</H2>
    <p class="mb-4 text-gray-600 dark:text-gray-400">Try clicking the "Copy" button in the top-right corner. You'll see feedback: "✓ Copied!" or "✗ Failed"</p>
    <ExampleWrapper component={components['Js']} code={sourceCodes['Js']} />
  </div>

  <div>
    <H2>TypeScript - Type Definitions</H2>
    <p class="mb-4 text-gray-600 dark:text-gray-400">Full TypeScript syntax highlighting support with interfaces, types, and generics</p>
    <ExampleWrapper component={components['Ts']} code={sourceCodes['Ts']} />
  </div>

  <div>
    <H2>JSON - Configuration Example</H2>
    <p class="mb-4 text-gray-600 dark:text-gray-400">Perfect for displaying API responses and configuration files</p>
    <ExampleWrapper component={components['Json']} code={sourceCodes['Json']} />
  </div>

  <div>
    <H2>YAML - Config Files</H2>
    <p class="mb-4 text-gray-600 dark:text-gray-400">Great for CI/CD configs, Docker Compose, and deployment files</p>
    <ExampleWrapper component={components['Yaml']} code={sourceCodes['Yaml']} />
  </div>

  <div>
    <H2>Markdown - Documentation</H2>
    <p class="mb-4 text-gray-600 dark:text-gray-400">Display formatted documentation with code blocks and syntax highlighting</p>
    <ExampleWrapper component={components['Md']} code={sourceCodes['Md']} />
  </div>

  <div>
    <H2>Svelte - Component Examples</H2>
    <p class="mb-4 text-gray-600 dark:text-gray-400">Show Svelte component code with runes, props, and reactive statements</p>
    <ExampleWrapper component={components['SvelteEx']} code={sourceCodes['SvelteEx']} />
  </div>
</div>
