<script lang="ts">
  import { HighlightAuto } from '$lib';
  const code = `// language tag
--langtag-top = 0: Top position of the langtag
--langtag-right = 0: Right position of the langtag
--langtag-background = inherit: Background color of the langtag
--langtag-color = inherit: Text color of the langtag
--langtag-border-radius = 0: Border radius of the langtag
--langtag-padding = 1em: Padding of the langtag
// line number
--line-number-color
--highlighted-background
--border-color
--padding-left
--padding-right
`;
</script>

<HighlightAuto {code} />
