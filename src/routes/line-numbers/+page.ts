import type { MetaProps } from 'runes-meta-tags'

export const load = () => {
  const pageMetaTags: MetaProps = {
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
  };
  return { pageMetaTags };
}