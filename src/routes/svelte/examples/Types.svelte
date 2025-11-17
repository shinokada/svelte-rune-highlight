<script lang="ts">
  import { HighlightAuto } from '$lib';
  const code = `code?: string;
  langtag?: boolean;
  numberLine?: boolean;
  hideBorder?: boolean;
  wrapLines?: boolean;
  startingLineNumber?: number;
  highlightedLines?: number[];
  highlightedRanges?: [number, number][];
  backgroundColor?: string;
  replaceLib?: string | false;
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | undefined;
  class?: string;
`;
</script>

<HighlightAuto {code} />
