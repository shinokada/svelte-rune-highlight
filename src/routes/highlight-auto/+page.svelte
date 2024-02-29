<script lang="ts">
  import HighlightAuto from "$lib/HighlightAuto.svelte";

  const stylesImport = import.meta.glob('$lib/styles/*.css');
  let selected = $state('github-dark');
  const styles = Object.entries(stylesImport).map(([path, importFn]) => ({
    value: path.slice(path.lastIndexOf('/') + 1, -4),
    name: path.slice(path.lastIndexOf('/') + 1, -4)
  }));
  $effect(() => {
    let link: HTMLLinkElement;
    (async () => {
      const css = await import(`../../lib/styles/${selected}.css?url`);
      link = document.createElement('link')

      link.rel = 'stylesheet';
      link.href = css.default;
      document.head.append(link)
    })();

    return () => {
      // clean up
      link.remove()
    };
  });

  const code = 'const add = (a: number, b: number) => a + b;';
  const code2 = `<button on:click={() => { console.log(0); }}>Increment {count}</button>`;
  const code3 = `body {\n  padding: 0;\n  color: red;\n}`;
</script>
<h1>HilightAuto</h1>
<div>
  <label for="html">Select a theme</label><br>
    <select bind:value={selected} class='dark:text-gray-500'>
    {#each styles as theme}
    <option value={theme.value}>{theme.value}</option>
    {/each}
    </select>
</div>

Test 1

<HighlightAuto code={code}  />

Test 2

<HighlightAuto code={code2}  />

Test 3

<HighlightAuto code={code3}  />



