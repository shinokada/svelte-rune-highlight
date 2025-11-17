<script lang="ts">
  import { HighlightCompo } from '$lib';
  import { codewrapper } from './theme';
  import type { ExampleWrapperProps } from './types';

  let {
    name,
    component,
    code,
    components = {},
    modules = {},
    innerClass,
    codeClass,
    lang = 'svelte',
    showCopy = true,
    replaceLib,
    class: classname
  }: ExampleWrapperProps = $props();

  // Derive component and code based on what's provided
  const ExampleComponent = $derived(component || (name && components[name]) || null);

  const displayCode = $derived(code || (name && modules[name]) || null);

  // Use codewrapper theme
  const { base, inner } = $derived(codewrapper());
  const codeCls = 'border-t border-gray-600';
</script>

{#if ExampleComponent || displayCode}
  <div class={base({ class: classname })}>
    {#if ExampleComponent}
      <div class={inner({ class: innerClass })}>
        <ExampleComponent />
      </div>
    {/if}
    {#if displayCode}
      <div class="{codeCls} {codeClass}">
        <HighlightCompo code={displayCode} {lang} {showCopy} {replaceLib} />
      </div>
    {/if}
  </div>
{/if}

