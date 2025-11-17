<script lang="ts">
  import MyExampleWrapper from '../utils/MyExampleWrapper.svelte';
  import { ExampleWrapper, HighlightSvelte } from '$lib';
  import { H1, H2 } from '../utils';
  import { P } from 'flowbite-svelte';
  import SampleCode from '../examples/svelteCode.svelte';
  import sampleCodeRaw from '../examples/svelteCode.svelte?raw';
  import ExampleCode from './examples/ExampleWrapperEx.svelte?raw';
  import MyExampleCode from '../utils/MyExampleWrapper.svelte?raw';
  import MyExampleWrapperCode from './examples/MyExampleWrapperEx.svelte?raw';
</script>

<H1>Wrappers</H1>

<H2>ExampleWrapper</H2>
<P
  >A flexible component that displays both rendered Svelte components and their source code side-by-side. Supports name-based lookup or direct component/code props with automatic $lib import
  replacement.</P
>

<HighlightSvelte code={ExampleCode} langtag replaceLib="svelte-rune-highlight" />

<P>The above code produces the following actual output and code:</P>
<ExampleWrapper component={SampleCode} code={sampleCodeRaw} />

<H2>MyExampleWrapper</H2>
<P>Project-specific wrapper that auto-discovers example components from a directory, simplifying usage to just passing a component name.</P>
<P>If you have multiple files to display, it is possible to use ExampleWrapper. Create MyExampleWrapper as the following:</P>
<HighlightSvelte code={MyExampleCode} langtag replaceLib="svelte-rune-highlight" />

<P>And use this as the following:</P>
<HighlightSvelte code={MyExampleWrapperCode} langtag />
<P>The following is the output.</P>
<MyExampleWrapper name="svelteCode" />
