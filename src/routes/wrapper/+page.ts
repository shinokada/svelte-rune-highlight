import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags: MetaProps = {
    title: 'ExampleWrapper Component - Svelte Rune Highlight',
    description: 'Syntax highlight component for Svelte Runes.',
    og: {
      title: 'ExampleWrapper Component - Svelte Rune Highlight',
      description: 'Syntax highlight component for Svelte Runes.',
      image: 'https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=HighlightSvelte%20Component'
    },
    twitter: {
      title: 'ExampleWrapper Component - Svelte Rune Highlight',
      description: 'Syntax highlight component for Svelte Runes.',
      image: 'https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=HighlightSvelte%20Component'
    }
  };
  return { pageMetaTags };
};
