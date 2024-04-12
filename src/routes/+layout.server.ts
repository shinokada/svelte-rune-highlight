import { ANALYTICS_ID } from '$env/static/private';
import type { MetaProps } from 'runes-meta-tags'

export const load = ({ url }) => {
  const layoutMetaTags: MetaProps = {
    title: 'Svelte Rune Highlight',
    description: 'Syntax highlighting for Svelte 5 Runes using highlight.js.',
    keywords: 'runes, Syntax, highlighting, svelte, sveltekit',
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title: 'Svelte Rune Highlight',
      description: 'Syntax highlighting for Svelte 5 Runes using highlight.js.',
      image: 'https://open-graph-vercel.vercel.app/api/svelte-rune-highlight',
      imageAlt: 'Svelte Rune Highlight'
    },
    og: {
      type: 'website',
      title: 'Svelte Rune Highlight',
      description: 'Syntax highlighting for Svelte 5 Runes using highlight.js.',
      url: url.href,
      image: 'https://open-graph-vercel.vercel.app/api/svelte-rune-highlight',
      imageAlt: 'Svelte Rune Highlight',
      siteName: 'Svelte Rune Highlight',
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID
  };
};