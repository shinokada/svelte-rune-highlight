<script lang="ts">
  import hljs from 'highlight.js/lib/core';
  // import { createEventDispatcher } from 'svelte';
  import LangTag from './LangTag.svelte';
  import type { Snippet } from 'svelte';


  interface Props {
    children?: Snippet;
    numbers?: boolean;
    language?: any;
    code?: string;
    langtag?: boolean;
  }

  let { children, numbers, language, code = '', langtag = false, ...restProps } = $props<Props>();

  // const dispatch = createEventDispatcher();

  let highlighted: string = $state('');

  $effect(() => {
    // if (highlighted) dispatch('highlight', { highlighted });
    hljs.registerLanguage(language.name, language.register);
    highlighted = hljs.highlight(code, { language: language.name }).value;
    // console.log('highlighted', highlighted);
  });
  // console.log('code: ', code);
</script>

{#if children}
  {@render children(highlighted)}
{:else}
<LangTag {...restProps} languageName={language.name} {langtag} {highlighted} {code} />
{/if}

<!--
@component
[Go to docs](https://svelte-rune-highlight.vercel.app/)
## Props
@props: language?: any;
@props:code?: string;
@props:langtag?: boolean;
-->
