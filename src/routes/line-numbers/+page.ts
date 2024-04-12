import type { MetaProps } from 'runes-meta-tags'

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Line Numbers | Svelte Rune Highlight',
    description: 'Syntax highlight component with line numbers for Svelte Runes.',
    og: {
      title: 'Line Numbers | Svelte Rune Highlight',
      description: 'Syntax highlight component with line numbers for Svelte Runes.',
      image: 'https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=Line%20Numbers'
    },
    twitter: {
      title: 'Line Numbers | Svelte Rune Highlight',
      description: 'Syntax highlight component with line numbers for Svelte Runes.',
      image: 'https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=Line%20Numbers'
    },
  }) satisfies MetaProps;
  return { pageMetaTags };
}