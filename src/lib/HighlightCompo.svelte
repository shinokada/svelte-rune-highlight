<script lang="ts">
  import { HighlightSvelte, Highlight, copyToClipboard, replaceLibImport } from "$lib";
  import markdown from "highlight.js/lib/languages/markdown";
  import typescript from "highlight.js/lib/languages/typescript";
  import javascript from "highlight.js/lib/languages/javascript";
  import json from "highlight.js/lib/languages/json";
  import yaml from "highlight.js/lib/languages/yaml";
  import { highlightcompo } from "./theme";
  import { onDestroy } from "svelte";

  type SupportedLanguage = "svelte" | "md" | "ts" | "js" | "json" | "yaml";

  interface Props {
    code: string;
    contentClass?: string;
    lang?: SupportedLanguage;
    class?: string;
    replaceLib?: string | false;
  }

  let { 
    code, 
    lang = "svelte",
    contentClass = "overflow-hidden", 
    replaceLib = "runes-webkit", 
    class: className 
  }: Props = $props();

  // Apply library replacement if specified
  if (replaceLib && typeof replaceLib === "string") {
    code = replaceLibImport(code, replaceLib);
  }

  let showExpandButton: boolean = $state(false);
  let expand: boolean = $state(false);
  let copiedStatus: boolean = $state(false);
  let copyError: boolean = $state(false);
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const checkOverflow = (el: HTMLElement) => {
    const isOverflowingY = el.clientHeight < el.scrollHeight;
    showExpandButton = isOverflowingY;
  };

  const base = $derived(highlightcompo({ class: className }));

  const handleExpandClick = () => {
    expand = !expand;
  };

  function handleCopyClick() {
    if (!code) return;

    copyToClipboard(code)
      .then(() => {
        copiedStatus = true;
        copyError = false;
        timeoutId = setTimeout(() => {
          copiedStatus = false;
        }, 2000);
      })
      .catch((err) => {
        console.error("Error in copying:", err);
        copyError = true;
        timeoutId = setTimeout(() => {
          copyError = false;
        }, 2000);
      });
  }

  // Cleanup timeout on component destroy
  onDestroy(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  });

  // Language configurations
  const languages = {
    md: { name: "markdown", register: markdown },
    ts: { name: "typescript", register: typescript },
    js: { name: "javascript", register: javascript },
    json: { name: "json", register: json },
    yaml: { name: "yaml", register: yaml }
  };
</script>

<div class={base}>
  <div 
    class="{contentClass} {showExpandButton ? 'pb-8' : ''}" 
    class:max-h-72={!expand} 
    tabindex="-1" 
    use:checkOverflow
  >
    <!-- Copy Button -->
    {#if code}
      <button
        onclick={handleCopyClick}
        type="button"
        aria-label={copiedStatus ? "Code copied to clipboard" : "Copy code to clipboard"}
        class="absolute top-4 right-2 z-10 rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-800 dark:focus:ring-gray-700"
        class:text-green-700={copiedStatus}
        class:bg-green-50={copiedStatus}
        class:dark:text-green-400={copiedStatus}
        class:dark:bg-green-900={copiedStatus}
        class:text-red-700={copyError}
        class:bg-red-50={copyError}
        class:dark:text-red-400={copyError}
        class:dark:bg-red-900={copyError}
        class:text-gray-900={!copiedStatus && !copyError}
        class:hover:bg-gray-100={!copiedStatus && !copyError}
        class:dark:text-gray-400={!copiedStatus && !copyError}
        class:dark:hover:bg-gray-700={!copiedStatus && !copyError}
      >
        {#if copiedStatus}
          ✓ Copied!
        {:else if copyError}
          ✗ Failed
        {:else}
          Copy
        {/if}
      </button>
    {/if}

    <!-- Code Content -->
    {#if lang === "svelte"}
      <HighlightSvelte {code} class="m-0 p-0" />
    {:else if lang && languages[lang]}
      <Highlight language={languages[lang]} {code} class="m-0 p-0" />
    {:else if code}
      <HighlightSvelte {code} class="m-0 p-0" />
    {:else}
      <div class="p-4 text-sm text-gray-500 dark:text-gray-400">
        No code provided
      </div>
    {/if}
  </div>

  <!-- Expand/Collapse Button -->
  {#if showExpandButton}
    <button
      onclick={handleExpandClick}
      type="button"
      aria-expanded={expand}
      aria-label={expand ? "Collapse code" : "Expand code"}
      class="hover:text-primary-700 absolute start-0 bottom-0 w-full border-t border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      {expand ? "Collapse code" : "Expand code"}
    </button>
  {/if}
</div>