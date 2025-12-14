import { describe, it, expect, beforeEach, vi } from 'vitest';
import { copyToClipboard } from '$lib';

describe('copyToClipboard', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
  });

  it('should copy text to clipboard successfully', async () => {
    const mockWriteText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: mockWriteText },
      writable: true,
      configurable: true
    });

    const text = 'Hello, World!';
    await copyToClipboard(text);

    expect(mockWriteText).toHaveBeenCalledWith(text);
    expect(mockWriteText).toHaveBeenCalledTimes(1);
  });

  it('should handle clipboard API errors', async () => {
    const mockError = new Error('Clipboard write failed');
    const mockWriteText = vi.fn().mockRejectedValue(mockError);
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: mockWriteText },
      writable: true,
      configurable: true
    });

    await expect(copyToClipboard('test')).rejects.toThrow('Clipboard write failed');
    expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to copy: ', mockError);

    consoleErrorSpy.mockRestore();
  });

  it('should reject when clipboard API is not available', async () => {
    // Simulate environment without clipboard API
    const originalClipboard = navigator.clipboard;
    Object.defineProperty(navigator, 'clipboard', {
      value: undefined,
      writable: true,
      configurable: true
    });

    await expect(copyToClipboard('test')).rejects.toThrow('Clipboard API not available');

    // Restore
    Object.defineProperty(navigator, 'clipboard', {
      value: originalClipboard,
      writable: true,
      configurable: true
    });
  });

  it('should copy multi-line text', async () => {
    const mockWriteText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: mockWriteText },
      writable: true,
      configurable: true
    });

    const multiLineText = `Line 1
Line 2
Line 3`;
    await copyToClipboard(multiLineText);

    expect(mockWriteText).toHaveBeenCalledWith(multiLineText);
  });

  it('should copy empty string', async () => {
    const mockWriteText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: mockWriteText },
      writable: true,
      configurable: true
    });

    await copyToClipboard('');

    expect(mockWriteText).toHaveBeenCalledWith('');
  });

  it('should copy text with special characters', async () => {
    const mockWriteText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: mockWriteText },
      writable: true,
      configurable: true
    });

    const specialText = '<script>alert("XSS")</script>\n\t& more';
    await copyToClipboard(specialText);

    expect(mockWriteText).toHaveBeenCalledWith(specialText);
  });
});
