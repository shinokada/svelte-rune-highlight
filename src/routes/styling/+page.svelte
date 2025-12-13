<script lang="ts">
  import { ExampleWrapper, transformComponents, transformModules } from '$lib';
  import type { Component } from 'svelte';
  import { P, List, Li, Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell, A } from 'flowbite-svelte';
  import { H1, H2, H3 } from '../utils';

  // Import components dynamically
  const componentModules = import.meta.glob('./examples/*.svelte', {
    eager: true
  }) as Record<string, { default: Component }>;

  // Import source code - include all file types
  const sourceCodeModules = import.meta.glob('./examples/*.*', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;

  // Transform both using helper functions
  const components = transformComponents(componentModules);
  const sourceCodes = transformModules(sourceCodeModules);
</script>

<svelte:head>
  <title>Styling Guide - Svelte Rune Highlight</title>
</svelte:head>

<main class="mx-auto max-w-6xl p-6">
  <H1>Styling Guide</H1>
  <P class="mb-8 text-xl text-gray-600 dark:text-gray-400">Learn how to customize svelte-rune-highlight components using CSS variables, custom classes, and Tailwind CSS</P>

  <!-- Introduction -->
  <section class="mb-12">
    <H2>Overview</H2>
    <P>
      svelte-rune-highlight is a CSS framework-free library. You can customize it using CSS custom properties (variables), custom classes, or Tailwind CSS utilities. All components are designed to
      work seamlessly with any styling approach.
    </P>
  </section>

  <!-- Method 1: CSS Variables -->
  <section class="mb-12">
    <H2>1. CSS Custom Properties (Recommended)</H2>
    <P class="mb-4">The easiest way to customize components globally is through CSS variables. Add these to your global stylesheet:</P>

    <ExampleWrapper name="css-variables" lang="css" {components} modules={sourceCodes} />

    <div class="mt-6">
      <H3>Available CSS Variables</H3>
      <div class="overflow-x-auto">
        <Table>
          <TableHead>
            <TableHeadCell>Variable</TableHeadCell>
            <TableHeadCell>Default</TableHeadCell>
            <TableHeadCell>Description</TableHeadCell>
          </TableHead>
          <TableBody>
            <TableBodyRow>
              <TableBodyCell class="font-mono text-sm">--code-padding</TableBodyCell>
              <TableBodyCell>1rem</TableBodyCell>
              <TableBodyCell>Padding inside code blocks</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell class="font-mono text-sm">--code-font-family</TableBodyCell>
              <TableBodyCell>'Fira Code', monospace</TableBodyCell>
              <TableBodyCell>Font family for code</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell class="font-mono text-sm">--code-font-size</TableBodyCell>
              <TableBodyCell>0.875rem</TableBodyCell>
              <TableBodyCell>Font size for code text</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell class="font-mono text-sm">--code-line-height</TableBodyCell>
              <TableBodyCell>1.5</TableBodyCell>
              <TableBodyCell>Line height for code</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell class="font-mono text-sm">--langtag-background</TableBodyCell>
              <TableBodyCell>rgba(0, 0, 0, 0.1)</TableBodyCell>
              <TableBodyCell>Language tag background</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell class="font-mono text-sm">--langtag-color</TableBodyCell>
              <TableBodyCell>currentColor</TableBodyCell>
              <TableBodyCell>Language tag text color</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell class="font-mono text-sm">--highlighted-background</TableBodyCell>
              <TableBodyCell>rgba(254, 241, 96, 0.2)</TableBodyCell>
              <TableBodyCell>Highlighted line background</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell class="font-mono text-sm">--line-number-color</TableBodyCell>
              <TableBodyCell>currentColor</TableBodyCell>
              <TableBodyCell>Line number color</TableBodyCell>
            </TableBodyRow>
          </TableBody>
        </Table>
      </div>
    </div>
  </section>

  <!-- Method 2: Custom Classes -->
  <section class="mb-12">
    <H2>2. Custom Classes</H2>
    <P class="mb-4">Pass custom classes to components for specific styling:</P>

    <ExampleWrapper name="custom-class" {components} modules={sourceCodes} />

    <div class="mt-4 border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950">
      <P class="text-sm">
        <strong>💡 Tip:</strong> Use <code class="rounded bg-yellow-100 px-2 py-1 text-xs dark:bg-yellow-900">:global()</code>
        in Svelte to style components from parent scopes.
      </P>
    </div>
  </section>

  <!-- Method 3: Tailwind CSS -->
  <section class="mb-12">
    <H2>3. Tailwind CSS Utilities</H2>
    <P class="mb-4">If your project uses Tailwind CSS, you can leverage its utility classes for quick styling. Define reusable component classes:</P>

    <ExampleWrapper name="tailwind-components" {components} modules={sourceCodes} />

    <H3 class="mt-6">Usage Examples</H3>
    <ExampleWrapper name="tailwind-usage" {components} modules={sourceCodes} />
  </section>

  <!-- Method 4: Highlight.js Themes -->
  <section class="mb-12">
    <H2>4. Highlight.js Themes</H2>
    <P class="mb-4">Change syntax highlighting colors by importing different highlight.js themes:</P>

    <ExampleWrapper name="highlight-themes" {components} modules={sourceCodes} />

    <P class="mt-4">
      Popular themes:
      <code class="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">github-dark</code>,
      <code class="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">atom-one-dark</code>,
      <code class="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">monokai</code>,
      <code class="rounded bg-gray-100 px-2 py-1 dark:bg-gray-800">nord</code>
    </P>
  </section>

  <!-- Live Examples -->
  <section class="mb-12">
    <H2>Live Examples</H2>

    <H3>Tailwind: Modern Bordered</H3>
    <ExampleWrapper name="modern-bordered" {components} modules={sourceCodes} />

    <H3 class="mt-8">Tailwind: Card Style</H3>
    <ExampleWrapper name="card-style" {components} modules={sourceCodes} />

    <H3 class="mt-8">Tailwind: Gradient Border</H3>
    <ExampleWrapper name="gradient-border" {components} modules={sourceCodes} />

    <H3 class="mt-8">CSS Variables: Purple Theme</H3>
    <ExampleWrapper name="purple-theme" {components} modules={sourceCodes} />

    <H3 class="mt-8">CSS Variables: Retro Terminal</H3>
    <ExampleWrapper name="retro-terminal" {components} modules={sourceCodes} />
  </section>

  <!-- Built-in CSS Classes -->
  <section class="mb-12">
    <H2>Built-in CSS Classes</H2>
    <P class="mb-4">The library includes several built-in CSS classes you can override:</P>

    <div class="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>Class Name</TableHeadCell>
          <TableHeadCell>Used In</TableHeadCell>
          <TableHeadCell>Purpose</TableHeadCell>
        </TableHead>
        <TableBody>
          <TableBodyRow>
            <TableBodyCell class="font-mono text-sm">.hlc-base</TableBodyCell>
            <TableBodyCell>HighlightCompo</TableBodyCell>
            <TableBodyCell>Base container styling</TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell class="font-mono text-sm">.hlc-warning</TableBodyCell>
            <TableBodyCell>All components</TableBodyCell>
            <TableBodyCell>Warning messages in DEV mode</TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell class="font-mono text-sm">.hlc-error</TableBodyCell>
            <TableBodyCell>HighlightSvelte</TableBodyCell>
            <TableBodyCell>Error messages</TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell class="font-mono text-sm">.hlc-empty-code</TableBodyCell>
            <TableBodyCell>HighlightSvelte</TableBodyCell>
            <TableBodyCell>Empty code message</TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell class="font-mono text-sm">.cw-base</TableBodyCell>
            <TableBodyCell>ExampleWrapper</TableBodyCell>
            <TableBodyCell>Wrapper container</TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell class="font-mono text-sm">.cw-inner</TableBodyCell>
            <TableBodyCell>ExampleWrapper</TableBodyCell>
            <TableBodyCell>Inner content area</TableBodyCell>
          </TableBodyRow>
        </TableBody>
      </Table>
    </div>
  </section>

  <!-- When to Use Each Method -->
  <section class="mb-12">
    <H2>When to Use Each Method</H2>

    <div class="grid gap-6 md:grid-cols-2">
      <!-- CSS Variables -->
      <div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
        <h3 class="mb-3 text-lg font-semibold text-blue-600 dark:text-blue-400">CSS Custom Properties</h3>
        <P class="mb-3 text-sm">Best for:</P>
        <List tag="ul" class="space-y-1 text-sm">
          <Li>Global theming across entire site</Li>
          <Li>Dynamic theme switching</Li>
          <Li>Framework-agnostic projects</Li>
          <Li>Fine-tuned control over properties</Li>
        </List>
      </div>

      <!-- Tailwind CSS -->
      <div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
        <h3 class="mb-3 text-lg font-semibold text-purple-600 dark:text-purple-400">Tailwind CSS</h3>
        <P class="mb-3 text-sm">Best for:</P>
        <List tag="ul" class="space-y-1 text-sm">
          <Li>Quick prototyping and iteration</Li>
          <Li>Consistent spacing and sizing</Li>
          <Li>Responsive designs</Li>
          <Li>Modern effects (shadows, gradients)</Li>
        </List>
      </div>

      <!-- Custom Classes -->
      <div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
        <h3 class="mb-3 text-lg font-semibold text-green-600 dark:text-green-400">Custom Classes</h3>
        <P class="mb-3 text-sm">Best for:</P>
        <List tag="ul" class="space-y-1 text-sm">
          <Li>Component-specific styling</Li>
          <Li>Complex animations</Li>
          <Li>Unique design requirements</Li>
          <Li>Reusable component patterns</Li>
        </List>
      </div>

      <!-- Highlight.js Themes -->
      <div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
        <h3 class="mb-3 text-lg font-semibold text-orange-600 dark:text-orange-400">Highlight.js Themes</h3>
        <P class="mb-3 text-sm">Best for:</P>
        <List tag="ul" class="space-y-1 text-sm">
          <Li>Syntax highlighting colors</Li>
          <Li>Pre-made color schemes</Li>
          <Li>Matching IDE themes</Li>
          <Li>Quick theme changes</Li>
        </List>
      </div>
    </div>
  </section>

  <!-- Resources -->
  <section class="mb-12">
    <H2>Resources</H2>
    <List tag="ul" class="space-y-2">
      <Li>
        <A href="https://github.com/shinokada/svelte-rune-highlight" target="_blank">svelte-rune-highlight on GitHub</A>
      </Li>
      <Li>
        <A href="https://tailwindcss.com/docs" target="_blank">Tailwind CSS Documentation</A>
      </Li>
      <Li>
        <A href="https://highlightjs.org/demo" target="_blank">Highlight.js theme demo</A>
      </Li>
      <Li>
        <A href="https://github.com/highlightjs/highlight.js/tree/main/src/styles" target="_blank">All available highlight.js themes</A>
      </Li>
      <Li>
        <A href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank">MDN: CSS Custom Properties</A>
      </Li>
    </List>
  </section>
</main>
