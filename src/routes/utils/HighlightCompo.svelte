<script lang="ts">
  import { HighlightSvelte, Highlight } from '$lib';
  import { Badge } from 'flowbite-svelte';
  import { clickToCopy } from './helpers';
  import markdown from '$lib/languages/markdown';
  let { code, codeLang }: { code: string; codeLang?: string; theme?: string } =
    $props();

  let text = $state('');
  let open = $state(false);
  let counter = $state(2);

  function copySuccess() {
    text = 'Success!';
  }

  function trigger() {
    open = true;
    counter = 2;
    timeout();
  }

  function timeout() {
    if (--counter > 0) return setTimeout(timeout, 1000);
    open = false;
  }
</script>

{#if open}
  <div class="relative">
    <Badge large class="absolute -top-10 right-0">
      <span class="font-medium">{text}</span>
    </Badge>
  </div>
{/if}

<!--svelte-ignore a11y_click_events_have_key_events -->
<div
  role="button"
  tabindex="0"
  class=" my-8 border border-gray-500 bg-gray-300 dark:border-gray-600 dark:bg-gray-700"
  onclick={() => copySuccess()}
>
  <div class="relative">
    <button
      type="button"
      use:clickToCopy={code}
      onclick={trigger}
      class="absolute right-0 -mt-11 flex items-center border border-gray-200 bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-200 hover:text-primary-700 dark:border-gray-500 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <svg
        class="me-2 h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        ></path>
      </svg>
      Copy
    </button>
  </div>
  {#if codeLang === 'md'}
    <Highlight language={markdown} {code} />
  {:else if code}
    <HighlightSvelte {code} />
  {:else}
    no code is provided
  {/if}
</div>
