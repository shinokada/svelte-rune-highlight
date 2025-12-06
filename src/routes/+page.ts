import type { MetaProps } from 'runes-meta-tags';
import type { PageLoad } from './$types';

const title = 'Svelte Rune Highlight';
const description = 'Syntax highlighting for Svelte 5 Runes using highlight.js';
const keywords = 'highlightjs, svelte, runes, syntax, library';
const image = 'https://open-graph-vercel.vercel.app/api/svelte-rune-highlight';

export const load: PageLoad = ({ url }) => {
  const pageMetaTags: MetaProps = {
    title,
    description,
    keywords,
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      creator: '@shinokada',
      title,
      description,
      image,
      imageAlt: title
    },
    og: {
      type: 'website',
      title,
      description,
      url: url.href,
      image,
      imageAlt: title,
      siteName: title,
      imageWidth: '1200',
      imageHeight: '630'
    }
  };

  return {
    pageMetaTags
  };
};
