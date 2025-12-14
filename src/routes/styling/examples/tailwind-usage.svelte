<script>
  import { HighlightCompo } from '$lib';

  const code = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`;
</script>

<!-- Modern bordered style -->
<HighlightCompo {code} lang="javascript" class="code-block-modern" />

<!-- Or use utilities directly -->
<!-- <HighlightCompo 
  {code}
  lang="javascript"
  class="rounded-xl border-2 border-blue-500 shadow-2xl"
/> -->
