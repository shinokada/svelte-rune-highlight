<script lang="ts">
  import { HighlightAuto } from '$lib';
  const code = `code: string;
contentClass?: string;
lang?: SupportedLanguage;
class?: string;
replaceLib?: string | false;
showCopy?: boolean;
`;
</script>

<HighlightAuto {code} />
