import markdown from "highlight.js/lib/languages/markdown";
import typescript from "highlight.js/lib/languages/typescript";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import yaml from "highlight.js/lib/languages/yaml";

export { default as Highlight } from './Highlight.svelte';
export { default as HighlightAuto } from './HighlightAuto.svelte';
export { default as HighlightSvelte } from './HighlightSvelte.svelte';
export { default as LangTag } from './LangTag.svelte';
export { default as CodeHighlight } from './CodeHighlight.svelte';
export { default as HighlightCompo } from './HighlightCompo.svelte';

export function copyToClipboard(text: string): Promise<void> {
  if (typeof navigator === 'undefined' || !navigator.clipboard) {
    return Promise.reject(new Error('Clipboard API not available'));
  }
  return navigator.clipboard.writeText(text).catch((err) => {
    console.error("Failed to copy: ", err);
    throw err; // Re-throw the error so the caller can handle it if needed
  });
}


export function replaceLibImport(
  componentString: string | undefined,
  libraryName: string = 'svelte-rune-highlight'
): string {
  if (typeof componentString !== 'string') {
    return '';
  }

  // Handle $lib and optional subpaths, both quote styles
  return componentString
    .replace(/from '\$lib(\/[^']*)?'/g, (_m, subpath = '') => `from '${libraryName}${subpath}'`)
    .replace(/from "\$lib(\/[^"]*)?"/g, (_m, subpath = '') => `from "${libraryName}${subpath}"`);
}

// Language configurations
export const languages = {
  md: { name: "markdown", register: markdown },
  ts: { name: "typescript", register: typescript },
  js: { name: "javascript", register: javascript },
  json: { name: "json", register: json },
  yaml: { name: "yaml", register: yaml }
} as const;

export type SupportedLanguage = "svelte" | keyof typeof languages;
