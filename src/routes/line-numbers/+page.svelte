<script lang="ts">
  import { ExampleWrapper, transformComponents, transformModules } from '$lib';
  import type { Component } from 'svelte';
  import { P } from 'flowbite-svelte';
  import { H1, H2 } from '../utils';

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

<H1>Line Numbers</H1>

<P>The Highlight component has the option to add line numbers. See the following examples.</P>

<H2>Number Lines</H2>

<P>
  Add <code>numberLine</code> props to add line numbers.
</P>
<ExampleWrapper component={components['Example1']} code={sourceCodes['Example1']} />

<H2>Hide Border</H2>

<P>
  Add <code>hideBorder</code> props to hide the border.
</P>
<ExampleWrapper component={components['Example2']} code={sourceCodes['Example2']} />

<H2>Wrapped Lines</H2>

<P>
  Add <code>wrapLines</code> props to wrap lines.
</P>
<ExampleWrapper component={components['Example3']} code={sourceCodes['Example3']} />

<H2>Background color</H2>
<ExampleWrapper component={components['Example4']} code={sourceCodes['Example4']} />

<H2>Position</H2>

<P>Use one of 'static' | 'relative' | 'absolute' | 'sticky' | undefined. The default value is 'sticky'.</P>
<ExampleWrapper component={components['Example5']} code={sourceCodes['Example5']} />

<H2>Starting Line Number</H2>

<P>
  Use the <code>startingLineNumber</code> props to set the start line number.
</P>
<ExampleWrapper component={components['Example6']} code={sourceCodes['Example6']} />

<H2>Highlighted Lines and Highlighted Background</H2>

<P>
  Use the <code>highlightedLines</code> and <code>highlightedBackground</code> props to highlight lines.
</P>
<ExampleWrapper component={components['Example7']} code={sourceCodes['Example7']} />

<H2>Custom styles</H2>

<P>
  Use the <code>--line-number-color</code>, <code>--border-color</code> <code>--padding-left</code>, <code>--padding-right</code>, and <code>--highlighted-background</code> props to customize the styles.
</P>
<ExampleWrapper component={components['Example8']} code={sourceCodes['Example8']} />

<H2>Showing Type File</H2>
<ExampleWrapper component={components['TypeEx']} code={sourceCodes['TypeEx']} />

<H2>Numberline for Svelte file</H2>
<ExampleWrapper component={components['SvelteEx']} code={sourceCodes['SvelteEx']} />

<H2>Highlighting lines</H2>
<P>Use highlightedLines and/or highlightedRanges props to highlight lines as the following example.</P>
<P>[start, end] ranges are inclusive and 1‑based.</P>
<ExampleWrapper component={components['RangeEx']} code={sourceCodes['RangeEx']} />
