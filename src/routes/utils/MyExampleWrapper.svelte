<script lang="ts">
  import { ExampleWrapper, transformComponents, transformModules } from '$lib';
  import type { Component } from 'svelte';
  
  // Import components dynamically
  const componentModules = import.meta.glob('../examples/*.svelte', {
    eager: true
  }) as Record<string, { default: Component }>;
  
  // Import source code
  const exampleModules = import.meta.glob('../examples/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;
  
  // Transform both using helper functions
  const components = transformComponents(componentModules);
  const modules = transformModules(exampleModules);
  
  interface Props {
    name: string;
  }
  let { name }: Props = $props();
</script>

<ExampleWrapper {name} {components} {modules} />