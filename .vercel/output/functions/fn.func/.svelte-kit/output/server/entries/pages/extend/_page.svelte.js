import { S as pop, Q as push } from "../../../chunks/index.js";
import { H as HighlightCompo } from "../../../chunks/HighlightCompo.js";
const __vite_glob_0_0 = "<script lang=\"ts\">\n  // users need to put styles dir where this component is used\n  // stylesDir need to be relative to this component\n  import { browser } from '$app/environment';\n\n  interface Props {\n    stylesImport: any;\n    stylesDir?: string;\n    class?: string;\n  }\n  let { stylesImport, stylesDir = 'styles', class: className }: Props = $props();\n \n  // @ts-ignore\n  let selected: string = $state(\n    browser && (localStorage.getItem('CODE_BLOCK_STYLE') ?? 'gigavolt')\n  );\n\n  const styles = Object.entries(stylesImport).map(([path, importFn]) => ({\n    value: path.slice(path.lastIndexOf('/') + 1, -4),\n    name: path.slice(path.lastIndexOf('/') + 1, -4)\n  }));\n\n  $effect(() => {\n    let link: HTMLLinkElement;\n    (async () => {\n      const css = await import(`./${stylesDir}/${selected}.css?url`);\n      link = document.createElement('link');\n\n      link.rel = 'stylesheet';\n      link.href = css.default;\n      document.head.append(link);\n    })();\n    if (browser) {\n      // get selected style from localStorage\n      localStorage.setItem('CODE_BLOCK_STYLE', selected);\n    }\n    return () => {\n      // clean up\n      link.remove();\n    };\n  });\n<\/script>\n\n<select class={className} bind:value={selected}>\n  {#each styles as theme}\n    <option value={theme.value}>{theme.value}</option>\n  {/each}\n</select>";
const __vite_glob_0_1 = `<script lang="ts">
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
<\/script>

<HighlightCompo code={modules['./md/setup.md'] as string} />
`;
const __vite_glob_0_2 = `// utils/HighlightCompo.svelte

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
`;
function _page($$payload, $$props) {
  push();
  const modules = /* @__PURE__ */ Object.assign({
    "./md/block-switch.md": __vite_glob_0_0,
    "./md/usage.md": __vite_glob_0_1,
    "./md/wrapper.md": __vite_glob_0_2
  });
  $$payload.out += `<h1>Extend</h1> <h2>Wrapper example</h2> <p>The following is an example of how to create a custom wrapper for your svelte
  file:</p> `;
  HighlightCompo($$payload, { code: modules["./md/wrapper.md"] });
  $$payload.out += `<!----> <p>Create a md directory and add some markdown files. Then in your svelte file:</p> `;
  HighlightCompo($$payload, { code: modules["./md/usage.md"] });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
