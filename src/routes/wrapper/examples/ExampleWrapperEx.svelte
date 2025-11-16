<script lang="ts">
  import { ExampleWrapper } from '$lib';
  import SampleCode from '../../examples/svelteCode.svelte';
  import sampleCodeRaw from '../../examples/svelteCode.svelte?raw';
</script>

<ExampleWrapper component={SampleCode} code={sampleCodeRaw} />