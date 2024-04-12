import type { MetaProps } from 'runes-meta-tags'

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'HighlightSvelte Component | Svelte Rune Highlight',
    description: 'Syntax highlight component for Svelte Runes.',
    og: {
      title: 'HighlightSvelte Component | Svelte Rune Highlight',
      description: 'Syntax highlight component for Svelte Runes.',
      image: 'https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=HighlightSvelte%20Component'
    },
    twitter: {
      title: 'HighlightSvelte Component | Svelte Rune Highlight',
      description: 'Syntax highlight component for Svelte Runes.',
      image: 'https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=HighlightSvelte%20Component'
    },
  }) satisfies MetaProps;
  return { pageMetaTags };
}