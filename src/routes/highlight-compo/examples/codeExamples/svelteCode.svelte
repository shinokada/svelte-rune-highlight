<script lang="ts">
  // HighlightCompo: Perfect for documentation sites
  import { HighlightCompo } from '$lib';

  let code = $state('console.log("Hello World");');
</script>

<!-- Basic usage -->
<HighlightCompo {code} lang="js" showCopy={true} />

<!-- With line numbers -->
<HighlightCompo {code} lang="js" numberLine={true} startingLineNumber={1} />

<!-- With highlighted lines -->
<HighlightCompo {code} lang="js" highlightedLines={[2, 5, 8]} />

<!-- Disable copy button for read-only displays -->
<HighlightCompo {code} lang="js" showCopy={false} />
