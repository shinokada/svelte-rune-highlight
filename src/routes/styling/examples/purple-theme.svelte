<script>
  import { HighlightCompo } from '$lib';

  const code = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`;
</script>

<div class="theme-purple">
  <HighlightCompo {code} lang="javascript" class="purple-theme" />
</div>

<style>
  .theme-purple {
    --code-padding: 1.5rem;
    --code-font-family: 'JetBrains Mono', 'Fira Code', monospace;
    --langtag-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --langtag-color: white;
    --langtag-padding: 0.5rem 1rem;
    --langtag-border-radius: 0.5rem;
  }

  :global(.purple-theme) {
    border: 2px solid #667eea;
    border-radius: 0.75rem;
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
    overflow: hidden;
  }
</style>
