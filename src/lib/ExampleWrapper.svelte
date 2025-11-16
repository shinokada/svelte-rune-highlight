<script lang="ts">
  import type { Component } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { HighlightCompo } from '$lib';
  import { codewrapper } from './theme';
  import type { SupportedLanguage } from "./types";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    name?: string;
    component?: Component;
    code?: string;
    components?: Record<string, Component>;
    modules?: Record<string, string>;
    innerClass?: string;
    class?: string;
    codeClass?: string;
    lang?: SupportedLanguage;
    showCopy?: boolean;
  }

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
    class: classname 
  }: Props = $props();

  // Derive component and code based on what's provided
  const ExampleComponent = $derived(
    component || (name && components[name]) || null
  );
  
  const displayCode = $derived(
    code || (name && modules[name]) || null
  );

  // Use codewrapper theme
  const { base, inner } = $derived(codewrapper());
  const codeCls = 'border-t border-gray-600';
</script>

{#if ExampleComponent && displayCode}
  <div class={base({ class: classname })}>
    <div class={inner({ class: innerClass })}>
      <ExampleComponent />
    </div>
    <div class="{codeCls} {codeClass}">
      <HighlightCompo code={displayCode} {lang} {showCopy} />
    </div>
  </div>
{:else}
  <div class="p-4 text-red-600 dark:text-red-400">
    {#if !ExampleComponent}
      Error: No component provided
    {:else}
      Error: No code provided
    {/if}
  </div>
{/if}