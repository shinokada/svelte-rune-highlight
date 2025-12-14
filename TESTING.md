# Testing Guide

This guide explains how to run and write tests for svelte-rune-highlight.

## Quick Start

```bash
# Run all tests
pnpm test

# Run tests in watch mode (auto-rerun on changes)
pnpm test:watch

# Run tests with coverage report
pnpm test:coverage

# Open interactive test UI
pnpm test:ui
```

## Test Structure

Our test suite is organized into:

### Unit Tests (`tests/unit/`)
- **Components** - Tests for Svelte components (HighlightCompo, ExampleWrapper, etc.)
- **Utils** - Tests for utility functions (copyToClipboard, replaceLibImport, etc.)

### E2E Tests (`e2e/`)
- End-to-end tests using Playwright

## Coverage

Current test coverage:

| Category | Files | Coverage Goal |
|----------|-------|---------------|
| Components | HighlightCompo, ExampleWrapper | 70%+ |
| Utilities | highlightUtils, copyToClipboard | 80%+ |
| Critical Paths | Copy, Expand/Collapse | 100% |

View coverage report:
```bash
pnpm test:coverage
open coverage/index.html
```

## Writing Tests

### Component Test Example

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import HighlightCompo from '$lib/HighlightCompo.svelte';

describe('HighlightCompo', () => {
  it('should copy code to clipboard', async () => {
    const code = 'console.log("test")';
    render(HighlightCompo, { props: { code, lang: 'javascript' } });
    
    const copyButton = screen.getByRole('button', { name: /copy/i });
    await fireEvent.click(copyButton);
    
    expect(screen.getByText('✓ Copied!')).toBeInTheDocument();
  });
});
```

### Utility Test Example

```typescript
import { describe, it, expect } from 'vitest';
import { replaceLibImport } from '$lib';

describe('replaceLibImport', () => {
  it('should replace $lib imports', () => {
    const input = "import { X } from '$lib';";
    const output = replaceLibImport(input, 'my-lib');
    expect(output).toBe("import { X } from 'my-lib';");
  });
});
```

## Testing Best Practices

### 1. Test Behavior, Not Implementation
✅ **Good**: Test what the user sees and does
```typescript
it('should show success message after copying', async () => {
  render(HighlightCompo, { props: { code: 'test' } });
  await fireEvent.click(screen.getByRole('button', { name: /copy/i }));
  expect(screen.getByText('✓ Copied!')).toBeInTheDocument();
});
```

❌ **Bad**: Test internal state
```typescript
it('should set copyStatus to success', async () => {
  // Don't test internal implementation details
});
```

### 2. Keep Tests Focused
Each test should verify one specific behavior:

```typescript
// ✅ Focused tests
it('should render code', () => { ... });
it('should copy code', () => { ... });
it('should show expand button', () => { ... });

// ❌ Testing too much at once
it('should render, copy, and expand', () => { ... });
```

### 3. Use Descriptive Names
```typescript
// ✅ Clear and descriptive
it('should show error message when clipboard API fails', () => { ... });

// ❌ Vague
it('should handle errors', () => { ... });
```

### 4. Test Edge Cases
```typescript
describe('copyToClipboard', () => {
  it('should copy normal text', () => { ... });
  it('should copy empty string', () => { ... });
  it('should copy multi-line text', () => { ... });
  it('should handle special characters', () => { ... });
  it('should reject when API unavailable', () => { ... });
});
```

## Mocking

### Mock Clipboard API
```typescript
beforeEach(() => {
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText: vi.fn().mockResolvedValue(undefined) },
    writable: true,
    configurable: true
  });
});
```

### Mock ResizeObserver
Already mocked globally in `vitest-setup-client.ts`, but you can override:

```typescript
beforeEach(() => {
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn()
  }));
});
```

### Mock Timers
```typescript
import { vi } from 'vitest';

it('should reset after 2 seconds', async () => {
  vi.useFakeTimers();
  
  // ... trigger action ...
  
  vi.advanceTimersByTime(2000);
  
  // ... verify reset ...
  
  vi.useRealTimers();
});
```

## Continuous Integration

Tests run automatically on GitHub Actions:

- **On Push**: `main` and `dev` branches
- **On PR**: All pull requests
- **Node Versions**: 20.x and 22.x
- **Jobs**: Unit tests, Build, E2E tests
- **Coverage**: Uploaded to Codecov (on Node 22.x)

See `.github/workflows/ci.yml` for configuration.

## Debugging

### Run Specific Test
```bash
pnpm vitest run tests/unit/utils/highlightUtils.test.ts
```

### Run Tests Matching Pattern
```bash
pnpm vitest run -t "copy"
```

### Use Interactive UI
```bash
pnpm test:ui
# Opens browser with interactive test runner
```

### VS Code Debugging
1. Install "Vitest" extension
2. Set breakpoints in test files
3. Click "Debug" above test function

## Common Issues

### "ResizeObserver is not defined"
**Solution**: Already mocked in `vitest-setup-client.ts`, ensure it's loaded

### Tests timing out
**Solution**: Increase timeout or use `waitFor`:
```typescript
it('async test', { timeout: 10000 }, async () => {
  await waitFor(() => {
    expect(screen.getByText('loaded')).toBeInTheDocument();
  });
});
```

### "Clipboard API not available"
**Solution**: Mock it in your test:
```typescript
Object.defineProperty(navigator, 'clipboard', {
  value: { writeText: vi.fn().mockResolvedValue(undefined) },
  writable: true
});
```

## Contributing Tests

When adding new features:

1. **Write tests first** (TDD approach) or alongside the feature
2. **Ensure tests pass**: `pnpm test`
3. **Check coverage**: `pnpm test:coverage`
4. **Add edge case tests** for error handling
5. **Update this guide** if you add new testing patterns

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Svelte Testing Library](https://testing-library.com/docs/svelte-testing-library/intro)
- [Test Directory README](./tests/README.md)

## Test Scripts Reference

| Command | Description |
|---------|-------------|
| `pnpm test` | Run all tests once |
| `pnpm test:unit` | Run unit tests once |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm test:ui` | Open interactive test UI |
| `pnpm test:coverage` | Generate coverage report |
| `pnpm test:e2e` | Run E2E tests with Playwright |
