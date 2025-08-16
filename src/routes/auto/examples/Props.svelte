<script lang="ts">
  import { HighlightAuto } from 'svelte-rune-highlight';
  const code = `@prop code = ''
@prop langtag = false
@prop class: className
@prop ...restProps`;
</script>

<HighlightAuto {code} />
