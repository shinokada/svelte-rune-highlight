<script lang="ts">
  import { HighlightAuto } from '$lib';
  const code = `numberLine?: boolean;
  language: HighlightLanguage;
  code: string;
  langtag?: boolean;
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
