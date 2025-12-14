<script>
  import { HighlightCompo } from '$lib';

  const code = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`;
</script>

<HighlightCompo {code} lang="javascript" class="rounded-lg bg-white shadow-lg ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800" />
