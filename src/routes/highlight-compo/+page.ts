import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags: MetaProps = {
    title: 'HighlightCompo Component - Svelte Rune Highlight',
    description: 'Syntax highlight component for Svelte Runes.',
    og: {
      title: 'HighlightCompo Component - Svelte Rune Highlight',
      description: 'Syntax highlight component for Svelte Runes.',
      image: 'https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=HighlightCompo%20Component'
    },
    twitter: {
      title: 'HighlightCompo Component - Svelte Rune Highlight',
      description: 'Syntax highlight component for Svelte Runes.',
      image: 'https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=HighlightCompo%20Component'
    }
  };
  return { pageMetaTags };
};
