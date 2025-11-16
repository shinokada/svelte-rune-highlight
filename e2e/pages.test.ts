import { expect, test } from '@playwright/test';

test('highlight page has expected h1', async ({ page }) => {
  await page.goto('/highlight');
  await expect(page.getByRole('heading', { name: 'Highlight Component' })).toBeVisible();
});

test('highlightauto page has expected h1', async ({ page }) => {
  await page.goto('/auto');
  await expect(page.getByRole('heading', { name: 'HighlightAuto Component' })).toBeVisible();
});

test('highlightsvelte page has expected h1', async ({ page }) => {
  await page.goto('/svelte');
  await expect(page.getByRole('heading', { name: 'HighlightSvelte Component' })).toBeVisible();
});

test('line-numbers page has expected h1', async ({ page }) => {
  await page.goto('/line-numbers');
  await expect(page.getByRole('heading', { name: 'Line Numbers' })).toBeVisible();
});

test('ExampleWrapper page has expected h1', async ({ page }) => {
  await page.goto('/wrapper');
  await expect(page.getByRole('heading', { name: 'ExampleWrapper' })).toBeVisible();
});

test('Theme selector page has expected h1', async ({ page }) => {
  await page.goto('/theme-selector');
  await expect(page.getByRole('heading', { name: 'Theme Selector' })).toBeVisible();
});
