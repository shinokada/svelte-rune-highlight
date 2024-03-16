<script lang="ts">
  import { Highlight, HighlightSvelte, HighlightAuto } from '$lib';
  import typescript from '$lib/languages/typescript';
  const modules = import.meta.glob('./codes/*.svelte', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  import { Select, Label } from 'svelte-5-ui-lib';

  const stylesImport = import.meta.glob('$lib/styles/*.css');
  let selected = $state('github-dark');
  const styles = Object.entries(stylesImport).map(([path, importFn]) => ({
    value: path.replace('/src/lib/styles/', '').replace('.css', ''),
    name: path.slice(path.lastIndexOf('/') + 1, -4)
  }));
  $effect(() => {
    let link: HTMLLinkElement;
    (async () => {
      const css = await import(`../../lib/styles/${selected}.css?url`);
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

<h1>Importing Svelte files for code blocks</h1>
<div class="w-64">
  <Label>
    You can select a theme
    <Select selectclass="mt-2" items={styles} bind:value={selected} />
  </Label>
</div>

<h2>Highlight</h2>
<Highlight
  code={modules['./codes/setup.svelte'] as string}
  language={typescript}
/>

<h2>HighlightSvelte</h2>
<HighlightSvelte
  code={modules['./codes/multi-level-dropdown.svelte'] as string}
/>

<h2>HighlightAuto</h2>
<HighlightAuto code={modules['./codes/outline-with-icon.svelte'] as string} />
