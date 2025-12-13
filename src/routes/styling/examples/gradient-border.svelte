<script>
  import { HighlightCompo } from '$lib';

  const code = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`;
</script>

<div class="rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-1">
  <HighlightCompo {code} lang="javascript" class="overflow-hidden rounded-xl" />
</div>
