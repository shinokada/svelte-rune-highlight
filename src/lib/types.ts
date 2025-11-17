import type { languages } from '$lib';
import type { LanguageFn } from 'highlight.js';
import type { HTMLAttributes } from 'svelte/elements';
import type { Component } from 'svelte';

export type SupportedLanguage = 'svelte' | keyof typeof languages;

export type HighlightLanguage = {
  name: string;
  register: LanguageFn;
};

// Common highlight display options
export interface HighlightDisplayOptions {
  langtag?: boolean;
  numberLine?: boolean;
  hideBorder?: boolean;
  wrapLines?: boolean;
  startingLineNumber?: number;
  highlightedLines?: number[];
  highlightedRanges?: [number, number][];
  backgroundColor?: string;
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | undefined;
}

// Common library replacement option
export interface LibReplaceOption {
  replaceLib?: string | false;
}

// Common class styling option
export interface ClassOption {
  class?: string;
}

export interface ExampleWrapperProps extends HTMLAttributes<HTMLDivElement>, LibReplaceOption {
  name?: string;
  component?: Component;
  code?: string;
  components?: Record<string, Component>;
  modules?: Record<string, string>;
  innerClass?: string;
  codeClass?: string;
  lang?: SupportedLanguage;
  showCopy?: boolean;
  class?: string;
}

export interface HighlightProps extends HighlightDisplayOptions, LibReplaceOption, ClassOption {
  language: HighlightLanguage;
  code: string;
}

export interface HighlightAutoProps extends HighlightDisplayOptions, LibReplaceOption, ClassOption {
  code?: string;
  languages?: string[];
}

export interface HighlightCompoProps extends HighlightDisplayOptions, LibReplaceOption, ClassOption {
  code: string;
  contentClass?: string;
  lang?: SupportedLanguage;
  showCopy?: boolean;
}

export interface HighlightSvelteProps extends HighlightDisplayOptions, LibReplaceOption, ClassOption {
  code?: string;
}

export interface LangTagProps extends HTMLAttributes<HTMLPreElement> {
  code?: string;
  highlighted?: string;
  languageName?: string;
  langtag?: boolean;
  codeClass?: string;
}