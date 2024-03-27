<script lang="ts">
  interface Props {
    class?: string;
  }
  let { class: className }: Props = $props();
  const stylesImport = import.meta.glob('./styles/*.css');
  let selected = $state('gigavolt');
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

    return () => {
      // clean up
      link.remove();
    };
  });
</script>

<select
  class="{className}"
  bind:value={selected}
>
  {#each styles as theme}
    <option value={theme.value}>{theme.value}</option>
  {/each}
</select>
