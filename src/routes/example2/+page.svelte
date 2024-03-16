<script lang="ts">
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  import themeNames from '../utils/themeNames.json';
  import { Label } from 'svelte-5-ui-lib';
  let selected = $state('github-dark');
</script>

<h2>Usage</h2>

Seletcted: {selected}
<div class="w-64">
  <Label>
    You can select a theme
    <select class="mt-2 border border-gray-200 p-2" bind:value={selected}>
      {#each themeNames as theme}
        <option value={theme}>{theme}</option>
      {/each}
    </select>
  </Label>
</div>

<h3>Highlight</h3>

<HighlightCompo code={modules['./md/setup.md'] as string} theme={selected} />

<HighlightCompo
  code={modules['./md/default-sidebar.md'] as string}
  theme={selected}
/>
