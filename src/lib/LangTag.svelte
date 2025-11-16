<script lang="ts">
  import type { LangTagProps } from './types';

  let {
    code = '',
    highlighted = '',
    languageName = 'plaintext',
    langtag = false,
    class: className = '',
    codeClass,
    ...restProps
  }: LangTagProps = $props();

  // Clean class concatenation
  let preClass = $derived([className, langtag && 'langtag'].filter(Boolean).join(' '));
  // $inspect('classes: ', classes )

  // Ensure we have a valid language name
  let displayLanguage = $derived(languageName || 'plaintext');
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<pre
  class={preClass}
  data-language={displayLanguage}
  role="img"
  aria-label="Code block in {displayLanguage}"
  {...restProps}><code class="hljs {codeClass}">{#if highlighted}{@html highlighted}{:else}{code}{/if}</code></pre>

<style>
  .langtag {
    position: relative;
  }

  .langtag::after {
    content: attr(data-language);
    position: absolute;
    top: var(--langtag-top, 0.5rem);
    right: var(--langtag-right, 0.5rem);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--langtag-background, rgba(0, 0, 0, 0.1));
    color: var(--langtag-color, currentColor);
    border-radius: var(--langtag-border-radius, 4px);
    padding: var(--langtag-padding, 0.25rem 0.5rem);
    font-size: var(--langtag-font-size, 0.75rem);
    font-family: var(--langtag-font-family, monospace);
    text-transform: var(--langtag-text-transform, uppercase);
    letter-spacing: var(--langtag-letter-spacing, 0.025em);
    z-index: var(--langtag-z-index, 1);
    pointer-events: none;
    user-select: none;
  }

  pre code.hljs {
    display: block;
    padding: var(--code-padding, 1rem);
    font-family: var(--code-font-family, 'Fira Code', 'Monaco', 'Cascadia Code', monospace);
    font-size: var(--code-font-size, 0.875rem);
    line-height: var(--code-line-height, 1.5);
  }
</style>

<!--
@component
[Go to docs](https://svelte-rune-highlight.codewithshin.com/)
## Props
@prop code = ''
@prop highlighted = ''
@prop languageName = 'plaintext'
@prop langtag = false
@prop class: className = ''
@prop codeClass
@prop ...restProps
-->
