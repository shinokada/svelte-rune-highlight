<script lang="ts">
  import { HighlightCompo } from 'svelte-rune-highlight';
  import yamlCode from '../../examples/yamlCode.yaml?raw';
</script>

<HighlightCompo code={yamlCode} lang="yaml" showCopy={false} />
