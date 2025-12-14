# Tests

This directory contains the test suite for svelte-rune-highlight.

## Structure

```
tests/
├── unit/
│   ├── components/     # Component tests
│   │   ├── HighlightCompo.test.ts
│   │   └── ExampleWrapper.test.ts
│   └── utils/          # Utility function tests
│       ├── highlightUtils.test.ts
│       └── copyToClipboard.test.ts
└── README.md
```

## Running Tests

### Run all tests
```bash
pnpm test
```

### Run tests in watch mode
```bash
pnpm test:watch
```

### Run tests with UI
```bash
pnpm test:ui
```

### Run tests with coverage
```bash
pnpm test:coverage
```

### Run only unit tests
```bash
pnpm test:unit
```

### Run E2E tests
```bash
pnpm test:e2e
```

## Writing Tests

### Component Tests

Component tests use `@testing-library/svelte` for rendering and querying components:

```typescript
import { render, screen, fireEvent } from '@testing-library/svelte';
import MyComponent from '$lib/MyComponent.svelte';

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(MyComponent, { props: { text: 'Hello' } });
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Utility Tests

Utility function tests are straightforward:

```typescript
import { myUtilFunction } from '$lib/utils';

describe('myUtilFunction', () => {
  it('should process input correctly', () => {
    expect(myUtilFunction('input')).toBe('expected output');
  });
});
```

## Testing Philosophy

1. **Test behavior, not implementation** - Focus on what the component does, not how it does it
2. **Keep tests focused** - Each test should verify one specific behavior
3. **Use descriptive names** - Test names should clearly describe what they're testing
4. **Test edge cases** - Include tests for error conditions and boundary cases
5. **Avoid test interdependence** - Each test should be able to run independently

## Coverage Goals

We aim for:
- **80%+ code coverage** for utility functions
- **70%+ code coverage** for components
- **100% coverage** for critical paths (copy functionality, overflow detection, etc.)

## Continuous Integration

Tests run automatically on:
- Every push to `main` and `dev` branches
- Every pull request
- Multiple Node.js versions (20.x, 22.x)

See `.github/workflows/ci.yml` for full CI configuration.

## Mocking

### ResizeObserver
ResizeObserver is mocked globally in `vitest-setup-client.ts`:

```typescript
global.ResizeObserver = class ResizeObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
  constructor(callback: ResizeObserverCallback) {
    // Store callback if needed for testing
  }
} as any;
```

### Clipboard API
Mock the clipboard API in individual tests:

```typescript
Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: vi.fn().mockResolvedValue(undefined)
  },
  writable: true,
  configurable: true
});
```

## Debugging Tests

### Run a specific test file
```bash
pnpm vitest run tests/unit/utils/highlightUtils.test.ts
```

### Run tests matching a pattern
```bash
pnpm vitest run -t "copy functionality"
```

### Debug in VS Code
Add breakpoints in your test file and use the "JavaScript Debug Terminal" in VS Code.

## Common Issues

### Tests timing out
If tests are timing out, you may need to:
1. Increase timeout: `it('test', { timeout: 10000 }, () => { ... })`
2. Use `waitFor` for async operations
3. Check for unresolved promises

### ResizeObserver errors
If you see ResizeObserver errors, ensure the mock is set up in `beforeEach`:
```typescript
beforeEach(() => {
  global.ResizeObserver = class ResizeObserver {
    observe = vi.fn();
    disconnect = vi.fn();
    unobserve = vi.fn();
    constructor(callback: ResizeObserverCallback) {}
  } as any;
});
```

### Svelte component rendering issues
Ensure you're using `@testing-library/svelte` version compatible with Svelte 5:
```json
"@testing-library/svelte": "^5.2.9"
```

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library - Svelte](https://testing-library.com/docs/svelte-testing-library/intro)
- [Testing Library - Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
