<script lang="ts">
  import LangTag from './LangTag.svelte';
  import hljs from 'highlight.js/lib/core';
  import xml from 'highlight.js/lib/languages/xml';
  import javascript from 'highlight.js/lib/languages/javascript';
  import css from 'highlight.js/lib/languages/css';
  // import { createEventDispatcher } from 'svelte';

  interface Props {
    code?: string;
    langtag?: boolean;
    preClass?: string;
  }

  let { code = '', langtag = false, preClass, ...restProps }: Props = $props();

  // const dispatch = createEventDispatcher();

  hljs.registerLanguage('xml', xml);
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('css', css);

  let highlighted = $state(hljs.highlightAuto(code).value);

  // $effect(() => {
  //   if (highlighted) dispatch('highlight', { highlighted });
  // });
</script>

<LangTag
  {preClass}
  {...restProps}
  languageName="svelte"
  {langtag}
  {highlighted}
  {code}
/>

<!--
@component
[Go to docs](https://svelte-rune-highlight.codewithshin.com/)
## Props
@props: code?:  string; = '', langtag;
@props:langtag?: boolean;
@props:preClass?: string;
-->
