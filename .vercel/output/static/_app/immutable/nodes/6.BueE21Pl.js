import{a as i,t as m}from"../chunks/disclose-version.DrDYUaWN.js";import{s,f as d,p,a as g}from"../chunks/runtime.B-swgO6H.js";import{H as o}from"../chunks/HighlightCompo.FOXMAKYO.js";const c=`<script lang="ts">
  // users need to put styles dir where this component is used
  // stylesDir need to be relative to this component
  import { browser } from '$app/environment';

  interface Props {
    stylesImport: any;
    stylesDir?: string;
    class?: string;
  }
  let { stylesImport, stylesDir = 'styles', class: className }: Props = $props();
 
  // @ts-ignore
  let selected: string = $state(
    browser && (localStorage.getItem('CODE_BLOCK_STYLE') ?? 'gigavolt')
  );

  const styles = Object.entries(stylesImport).map(([path, importFn]) => ({
    value: path.slice(path.lastIndexOf('/') + 1, -4),
    name: path.slice(path.lastIndexOf('/') + 1, -4)
  }));

  $effect(() => {
    let link: HTMLLinkElement;
    (async () => {
      const css = await import(\`./\${stylesDir}/\${selected}.css?url\`);
      link = document.createElement('link');

      link.rel = 'stylesheet';
      link.href = css.default;
      document.head.append(link);
    })();
    if (browser) {
      // get selected style from localStorage
      localStorage.setItem('CODE_BLOCK_STYLE', selected);
    }
    return () => {
      // clean up
      link.remove();
    };
  });
<\/script>

<select class={className} bind:value={selected}>
  {#each styles as theme}
    <option value={theme.value}>{theme.value}</option>
  {/each}
</select>`,h=`<script lang="ts">
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
<\/script>

<HighlightCompo code={modules['./md/setup.md'] as string} />
`,u=`// utils/HighlightCompo.svelte

<script lang="ts">
  import { HighlightSvelte, Highlight } from '$lib';
  // check colorscheme at https://highlightjs.org/demo
  import githubDark from 'svelte-rune-highlight/styles/github-dark';
  import markdown from 'svelte-rune-highlight/languages/markdown';
  let { code, codeLang }: { code: string; codeLang?: string } = $props();
<\/script>

<svelte:head>
{@html githubDark}
</svelte:head>

<div class="mx-auto my-8 max-w-4xl rounded-md border border-gray-200 bg-gray-50 p-0.5 dark:border-gray-600 dark:bg-gray-700">
  {#if codeLang === 'md'}
    <Highlight language={markdown} {code} />
  {:else if code}
    <HighlightSvelte {code} />
  {:else}
    no code is provided
  {/if}
</div>
`;var f=m(`<h1>Extend</h1> <h2>Wrapper example</h2> <p>The following is an example of how to create a custom wrapper for your svelte
  file:</p> <!> <p>Create a md directory and add some markdown files. Then in your svelte file:</p> <!>`,1);function _(r,l){g(l,!0);const e=Object.assign({"./md/block-switch.md":c,"./md/usage.md":h,"./md/wrapper.md":u});var t=f(),n=s(d(t),6);o(n,{get code(){return e["./md/wrapper.md"]}});var a=s(n,4);o(a,{get code(){return e["./md/usage.md"]}}),i(r,t),p()}export{_ as component};
