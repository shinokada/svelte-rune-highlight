import type { languages } from '$lib';
import type { LanguageFn } from 'highlight.js';
import type { HTMLAttributes } from 'svelte/elements';
import type { Component } from 'svelte';

export type SupportedLanguage = 'svelte' | keyof typeof languages;

export interface ExampleWrapperProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  component?: Component;
  code?: string;
  components?: Record<string, Component>;
  modules?: Record<string, string>;
  innerClass?: string;
  class?: string;
  codeClass?: string;
  lang?: SupportedLanguage;
  showCopy?: boolean;
  replaceLib?: string | false;
}

export type HighlightLanguage = {
  name: string;
  register: LanguageFn;
};

export interface HighlightProps {
  numberLine?: boolean;
  language: HighlightLanguage;
  code: string;
  langtag?: boolean;
  hideBorder?: boolean;
  wrapLines?: boolean;
  startingLineNumber?: number;
  highlightedLines?: number[];
  highlightedRanges?: [number, number][];
  backgroundColor?: string;
  replaceLib?: string | false;
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | undefined;
  class?: string;
}

export interface HighlightAutoProps {
  code?: string;
  langtag?: boolean;
  numberLine?: boolean;
  hideBorder?: boolean;
  wrapLines?: boolean;
  startingLineNumber?: number;
  highlightedLines?: number[];
  highlightedRanges?: [number, number][];
  backgroundColor?: string;
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | undefined;
  languages?: string[];
  replaceLib?: string | false;
  class?: string;
}

export interface HighlightCompoProps {
  code: string;
  contentClass?: string;
  lang?: SupportedLanguage;
  class?: string;
  replaceLib?: string | false;
  showCopy?: boolean;
}

export interface HighlightSvelteProps {
  code?: string;
  langtag?: boolean;
  numberLine?: boolean;
  hideBorder?: boolean;
  wrapLines?: boolean;
  startingLineNumber?: number;
  highlightedLines?: number[];
  highlightedRanges?: [number, number][];
  backgroundColor?: string;
  replaceLib?: string | false;
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | undefined;
  class?: string;
}

export interface LangTagProps extends HTMLAttributes<HTMLPreElement> {
  code?: string;
  highlighted?: string;
  languageName?: string;
  langtag?: boolean;
  class?: string;
  codeClass?: string;
}
