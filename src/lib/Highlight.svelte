<script lang="ts">
  // @ts-check
  interface Props{
    language?: any;
    code?: string;
    langtag?: boolean;
  }
  
  let { language, code = '', langtag = false, ...restProps} = $props<Props>();

  import hljs from "highlight.js/lib/core";
  import { createEventDispatcher } from "svelte";
  import LangTag from "./LangTag.svelte";

  const dispatch = createEventDispatcher();

  let highlighted: string = $state("");

  $effect(() => {
    if (highlighted) dispatch("highlight", { highlighted });
    hljs.registerLanguage(language.name, language.register);
    highlighted = hljs.highlight(code, { language: language.name }).value;
  });

</script>

<LangTag
  {...restProps}
  languageName={language.name}
  {langtag}
  {highlighted}
  {code}
/>

<!--
@component
[Go to docs](https://svelte-rune-highlight.vercel.app/)
## Props
@props: language: any;
@props:code?: string;
@props:langtag?: boolean;
-->
