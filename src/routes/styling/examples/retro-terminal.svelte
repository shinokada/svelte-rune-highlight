<script>
  import { HighlightCompo } from '$lib';

  const code = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`;
</script>

<div class="theme-retro">
  <HighlightCompo {code} lang="javascript" class="retro-theme" />
</div>

<style>
  .theme-retro {
    --code-padding: 1.5rem;
    --code-font-family: 'Courier New', monospace;
    --code-font-size: 0.875rem;
    --code-line-height: 1.6;
    --langtag-background: #00ff00;
    --langtag-color: #000;
    --langtag-text-transform: uppercase;
  }

  :global(.retro-theme) {
    background: #000;
    color: #00ff00;
    border: 2px solid #00ff00;
    border-radius: 0;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
    font-family: 'Courier New', monospace;
  }

  :global(.retro-theme code) {
    color: #00ff00 !important;
  }
</style>
