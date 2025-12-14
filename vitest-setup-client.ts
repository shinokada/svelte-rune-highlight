import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// Mock ResizeObserver globally
global.ResizeObserver = class ResizeObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
  constructor() {
    // Store callback if needed for testing
  }
} as unknown as typeof ResizeObserver;

// required for svelte5 + jsdom as jsdom does not support matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  enumerable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
});

// add more mocks here if you need them
