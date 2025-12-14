<script>
  import { HighlightCompo } from '$lib';

  const code = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`;
</script>

<div class="theme-modern">
  <HighlightCompo {code} lang="javascript" class="rounded-xl border-2 border-blue-500 shadow-2xl" />
</div>

<style>
  .theme-modern {
    --code-padding: 1.5rem;
    --code-font-family: 'JetBrains Mono', monospace;
  }
</style>
