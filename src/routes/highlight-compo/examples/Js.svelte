<script lang="ts">
  import { HighlightCompo } from 'svelte-rune-highlight';
  import jsCode from '../../examples/jsCode?raw';
</script>

<HighlightCompo code={jsCode} lang="js" showCopy={false} showExpand={false} />
