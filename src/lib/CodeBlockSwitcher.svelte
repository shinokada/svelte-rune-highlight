<script lang="ts">
  // users need to put styles dir where this component is used
  import { browser } from '$app/environment';

  interface Props {
    stylesImport: any;
    class?: string;
  }
  let { stylesImport, class: className }: Props = $props();
 
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
      const css = await import(`./styles/${selected}.css?url`);
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
</script>

<select class={className} bind:value={selected}>
  {#each styles as theme}
    <option value={theme.value}>{theme.value}</option>
  {/each}
</select>

<!--
@component
[Go to docs](https://svelte-rune-highlight.codewithshin.com/)
## Props
@props: stylesImport: any;
@props:class?: string;
-->
