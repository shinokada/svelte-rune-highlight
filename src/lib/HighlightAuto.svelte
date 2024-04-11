<script lang="ts">
  import LangTag from './LangTag.svelte';
  import hljs from 'highlight.js';

  interface Props {
    code?: string;
    langtag?: boolean;
  }
  let { code = '', langtag = false, ...restProps }: Props = $props();
  let highlighted: string = $state('');
  let language: string = $state('');

  $effect(() => {
    ({ value: highlighted, language = '' } = hljs.highlightAuto(code));
  });
</script>

<LangTag
  {...restProps}
  languageName={language}
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
-->
