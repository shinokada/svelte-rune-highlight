<script lang="ts">
  /**
   * HighlightAuto.svelte
   *
   * A syntax-highlighting component that uses Highlight.js to automatically detect
   * the programming language of the provided code string and render it with
   * syntax highlighting. Supports an optional language tag overlay.
   *
   * ## Props
   * @prop {string} [code=''] - The raw code to highlight.
   * @prop {boolean} [langtag=false] - Whether to display the detected language as a tag overlay.
   * @prop {string} [class] - Additional classes for the <pre> element.
   * @prop {...HTMLAttributes<HTMLPreElement>} restProps - Any other <pre> attributes.
   *
   * ## Behavior
   * - Automatically detects language via `hljs.highlightAuto`.
   * - Falls back to plaintext if detection fails or code is empty.
   * - Passes highlighted HTML, raw code, and detected language to `LangTag.svelte`.
   * - `LangTag.svelte` handles optional language overlay and rendering within <pre><code>.
   */
  import LangTag from './LangTag.svelte';
  import hljs from 'highlight.js';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLPreElement> {
    code?: string;
    langtag?: boolean;
    class?: string;
  }

  let { code = '', langtag = false, class: className, ...restProps }: Props = $props();

  // Use $derived for reactive highlighting - more efficient than $state + $effect
  let highlightResult = $derived.by(() => {
    if (!code.trim()) {
      return { value: '', language: 'plaintext' };
    }

    try {
      return hljs.highlightAuto(code);
    } catch (error) {
      console.warn('Highlight.js auto-detection failed:', error);
      return { value: code, language: 'plaintext' };
    }
  });

  let highlighted = $derived(highlightResult.value);
  let language = $derived(highlightResult.language || 'plaintext');
</script>

<LangTag class={className} {...restProps} languageName={language} {langtag} {highlighted} {code} />

<!--
@component
[Go to docs](https://svelte-rune-highlight.codewithshin.com/)
## Props
@prop code = ''
@prop langtag = false
@prop class: className
@prop ...restProps
-->
