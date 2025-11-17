<script lang="ts">
  import { HighlightAuto } from 'svelte-rune-highlight';
  const typeCode = `code?: string;
langtag?: boolean;
numberLine?: boolean;
hideBorder?: boolean;
wrapLines?: boolean;
startingLineNumber?: number;
highlightedLines?: number[];
highlightedRanges?: [number, number][];
backgroundColor?: string;
position?: 'static' | 'relative' | 'absolute' | 'sticky' | undefined;
languages?: string[];
replaceLib?: string | false;
class?: string;
`
</script>

<HighlightAuto code={typeCode} />
