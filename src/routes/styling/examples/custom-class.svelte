<script>
  import { HighlightCompo } from '$lib';

  const code = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`;
</script>

<HighlightCompo {code} lang="javascript" class="custom-code-block" />

<style>
  :global(.custom-code-block) {
    border: 2px solid #667eea;
    border-radius: 0.75rem;
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }
</style>
