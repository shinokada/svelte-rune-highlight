<script lang="ts">
  import { HighlightCompo } from '$lib';
  import { codewrapper } from './theme';
  import type { ExampleWrapperProps } from './types';

  let { name, component, code, components = {}, modules = {}, innerClass, codeClass, lang = 'svelte', showCopy = true, replaceLib, showRender = true, showCode = true, class: classname }: ExampleWrapperProps = $props();

  // Derive component and code based on what's provided
  const ExampleComponent = $derived(component || (name && components[name]) || null);

  const displayCode = $derived(code || (name && modules[name]) || null);

  // Use codewrapper theme
  const { base, inner } = $derived(codewrapper());
  const codeCls = 'border-t border-gray-600';
</script>

{#if ExampleComponent && displayCode}
  <div class={base({ class: classname })}>
    {#if showRender}
    <div class={inner({ class: innerClass })}>
      <ExampleComponent />
    </div>
    {/if}
    {#if showCode}
    <div class="{codeCls} {codeClass}">
      <HighlightCompo code={displayCode} {lang} {showCopy} {replaceLib} />
    </div>
    {/if}
  </div>
{:else}
  <div class="p-4 text-red-600 dark:text-red-400">
    {#if !ExampleComponent}
      Error: No component provided {name ? `for "${name}"` : ''}
      {#if name && Object.keys(components).length > 0}
        <div class="mt-2 text-sm">Available: {Object.keys(components).join(', ')}</div>
      {/if}
    {:else}
      Error: No code provided {name ? `for "${name}"` : ''}
      {#if name && Object.keys(modules).length > 0}
        <div class="mt-2 text-sm">Available: {Object.keys(modules).join(', ')}</div>
      {/if}
    {/if}
  </div>
{/if}
