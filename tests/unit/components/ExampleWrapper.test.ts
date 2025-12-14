import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ExampleWrapper from '$lib/ExampleWrapper.svelte';
import type { Component } from 'svelte';

// Mock esm-env to control DEV constant
vi.mock('esm-env', () => ({
  DEV: true,
  BROWSER: false,
  PROD: false
}));

// Create a simple test component for Svelte 5
const TestComponent: Component = () => {
  return {};
};

describe('ExampleWrapper', () => {
  const sampleCode = `<script>
  let count = 0;
</script>

<button on:click={() => count++}>
  Count: {count}
</button>`;

  beforeEach(() => {
    vi.clearAllMocks();
    // Mock ResizeObserver for HighlightCompo
    global.ResizeObserver = class ResizeObserver {
      observe = vi.fn();
      disconnect = vi.fn();
      unobserve = vi.fn();
      constructor() {
        // Store callback if needed for testing
      }
    } as unknown as typeof ResizeObserver;
  });

  describe('Rendering with Component and Code', () => {
    it('should render both component and code when both provided', () => {
      const { container } = render(ExampleWrapper, {
        props: {
          component: TestComponent,
          code: sampleCode,
          lang: 'svelte'
        }
      });

      // Should have both sections
      expect(container.querySelector('.cw-base')).toBeInTheDocument();
      expect(container.textContent).toContain('Count'); // From code
    });

    it('should render only component when no code provided', () => {
      const { container } = render(ExampleWrapper, {
        props: {
          component: TestComponent
        }
      });

      expect(container.querySelector('.cw-inner')).toBeInTheDocument();
      // No code section should be present
      expect(container.querySelector('.border-t')).not.toBeInTheDocument();
    });

    it('should render only code when no component provided', () => {
      const { container } = render(ExampleWrapper, {
        props: {
          code: sampleCode,
          lang: 'svelte'
        }
      });

      expect(container.textContent).toContain('Count');
      // No component wrapper should be present
      expect(container.querySelector('.cw-inner')).not.toBeInTheDocument();
    });
  });

  describe('Props - Name-based Loading', () => {
    it('should load component from components object using name', () => {
      const components = {
        TestComp: TestComponent
      };

      const { container } = render(ExampleWrapper, {
        props: {
          name: 'TestComp',
          components,
          modules: {}
        }
      });

      expect(container.querySelector('.cw-inner')).toBeInTheDocument();
    });

    it('should load code from modules object using name', () => {
      const modules = {
        TestComp: sampleCode
      };

      const { container } = render(ExampleWrapper, {
        props: {
          name: 'TestComp',
          components: {},
          modules
        }
      });

      expect(container.textContent).toContain('Count');
    });

    it('should load both component and code using name', () => {
      const components = { TestComp: TestComponent };
      const modules = { TestComp: sampleCode };

      const { container } = render(ExampleWrapper, {
        props: {
          name: 'TestComp',
          components,
          modules
        }
      });

      expect(container.querySelector('.cw-inner')).toBeInTheDocument();
      expect(container.textContent).toContain('Count');
    });
  });

  describe('Styling Props', () => {
    it('should apply custom class to wrapper', () => {
      const { container } = render(ExampleWrapper, {
        props: {
          component: TestComponent,
          code: sampleCode,
          class: 'custom-wrapper-class'
        }
      });

      expect(container.querySelector('.custom-wrapper-class')).toBeInTheDocument();
    });

    it('should apply innerClass to component area', () => {
      const { container } = render(ExampleWrapper, {
        props: {
          component: TestComponent,
          code: sampleCode,
          innerClass: 'custom-inner-class'
        }
      });

      expect(container.querySelector('.custom-inner-class')).toBeInTheDocument();
    });

    it('should apply codeClass to code section', () => {
      const { container } = render(ExampleWrapper, {
        props: {
          component: TestComponent,
          code: sampleCode,
          codeClass: 'custom-code-class'
        }
      });

      const codeSection = container.querySelector('.border-t');
      expect(codeSection).toHaveClass('custom-code-class');
    });
  });

  describe('Language Prop', () => {
    it('should default to svelte language', () => {
      const { container } = render(ExampleWrapper, {
        props: {
          code: sampleCode
        }
      });

      expect(container).toBeInTheDocument();
    });

    it('should accept custom language', () => {
      const jsCode = 'const x = 42;';
      const { container } = render(ExampleWrapper, {
        props: {
          code: jsCode,
          lang: 'javascript'
        }
      });

      expect(container.textContent).toContain('const x = 42;');
    });
  });

  describe('HighlightCompo Integration', () => {
    it('should pass showCopy prop to HighlightCompo', () => {
      render(ExampleWrapper, {
        props: {
          code: sampleCode,
          showCopy: false
        }
      });

      // Copy button should not be present
      expect(screen.queryByRole('button', { name: /copy/i })).not.toBeInTheDocument();
    });

    it('should pass replaceLib prop to HighlightCompo', () => {
      const codeWithImport = "import { Component } from '$lib';";
      const { container } = render(ExampleWrapper, {
        props: {
          code: codeWithImport,
          replaceLib: 'my-custom-lib'
        }
      });

      // Verify replacement happened: new lib present, old lib gone
      expect(container.textContent).toContain('my-custom-lib');
      expect(container.textContent).not.toContain("$lib'");
    });
  });

  describe('Edge Cases', () => {
    it('should show warning in DEV when name is provided but nothing found', () => {
      // DEV is mocked as true at the top of the file via vi.mock('esm-env')
      render(ExampleWrapper, {
        props: {
          name: 'NonExistent',
          components: {},
          modules: {}
        }
      });

      expect(screen.getByText(/No example or code found/i)).toBeInTheDocument();
    });

    it('should handle null component gracefully', () => {
      const { container } = render(ExampleWrapper, {
        props: {
          component: null as unknown as Component,
          code: sampleCode
        }
      });

      // Should only show code section
      expect(container.textContent).toContain('Count');
      expect(container.querySelector('.cw-inner')).not.toBeInTheDocument();
    });

    it('should handle undefined code gracefully', () => {
      const { container } = render(ExampleWrapper, {
        props: {
          component: TestComponent,
          code: undefined
        }
      });

      // Should only show component section
      expect(container.querySelector('.cw-inner')).toBeInTheDocument();
      expect(container.querySelector('.border-t')).not.toBeInTheDocument();
    });

    it('should handle empty code string', () => {
      const { container } = render(ExampleWrapper, {
        props: {
          component: TestComponent,
          code: ''
        }
      });

      // Empty code should not show code section
      expect(container.querySelector('.border-t')).not.toBeInTheDocument();
    });
  });

  describe('Layout Structure', () => {
    it('should have correct layout structure with both sections', () => {
      const { container } = render(ExampleWrapper, {
        props: {
          component: TestComponent,
          code: sampleCode
        }
      });

      // Check for wrapper
      const wrapper = container.querySelector('.cw-base');
      expect(wrapper).toBeInTheDocument();

      // Check for inner component area
      const inner = container.querySelector('.cw-inner');
      expect(inner).toBeInTheDocument();

      // Check for code section with border
      const codeSection = container.querySelector('.border-t');
      expect(codeSection).toBeInTheDocument();
    });

    it('should maintain proper DOM hierarchy', () => {
      const { container } = render(ExampleWrapper, {
        props: {
          component: TestComponent,
          code: sampleCode
        }
      });

      const wrapper = container.querySelector('.cw-base') as HTMLElement;
      const inner = container.querySelector('.cw-inner') as HTMLElement;
      const codeSection = container.querySelector('.border-t') as HTMLElement;

      // Inner should be child of wrapper
      expect(wrapper).toContainElement(inner);
      // Code section should be child of wrapper
      expect(wrapper).toContainElement(codeSection);
    });
  });

  describe('Component Priority', () => {
    it('should prioritize direct component prop over name lookup', () => {
      const DirectComponent: Component = () => ({});
      const NamedComponent: Component = () => ({});

      const { container } = render(ExampleWrapper, {
        props: {
          component: DirectComponent,
          name: 'Named',
          components: { Named: NamedComponent }
        }
      });

      // Should use DirectComponent, not NamedComponent
      expect(container.querySelector('.cw-inner')).toBeInTheDocument();
    });

    it('should prioritize direct code prop over name lookup', () => {
      const directCode = 'const direct = true;';
      const namedCode = 'const named = true;';

      const { container } = render(ExampleWrapper, {
        props: {
          code: directCode,
          name: 'Named',
          modules: { Named: namedCode }
        }
      });

      expect(container.textContent).toContain('direct');
      expect(container.textContent).not.toContain('named');
    });
  });
});
