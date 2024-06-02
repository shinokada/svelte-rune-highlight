import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/highlight');
});

test('highlight page has expected h1', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Highlight Component', level: 1 })).toBeVisible();
});

test('highlight page has expected meta title', async ({ page }) => {
  await expect(page).toHaveTitle('Highlight Component - Svelte Rune Highlight');
});

test('highlight page has expected meta description', async ({ page }) => {
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', 'Highlight component - Syntax highlight component for Svelte Runes.');
});

test('highlight page has expected meta keywords', async ({ page }) => {
  const metaKeywords = page.locator('meta[name="keywords"]');
  await expect(metaKeywords).toHaveAttribute('content', 'highlightjs, svelte, runes, syntax, library');
});

test('highlight page has expected meta og', async ({ page }) => {
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', 'Highlight Component - Svelte Rune Highlight');
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute('content', 'Highlight component - Syntax highlight component for Svelte Runes.');
  const metaOgUrl = page.locator('meta[property="og:url"]');
  await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/highlight');
  const metaOgImage = page.locator('meta[property="og:image"]');
  await expect(metaOgImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=Highlight%20Component'
  );
});

test('highlight page has expected meta twitter', async ({ page }) => {
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', 'Highlight component - Svelte Rune Highlight');
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
  await expect(metaTwitterDescription).toHaveAttribute('content', 'Highlight component - Syntax highlight component for Svelte Runes.');
  const metaTwitterImage = page.locator('meta[name="twitter:image"]');
  await expect(metaTwitterImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=Highlight%20Component'
  );
});
