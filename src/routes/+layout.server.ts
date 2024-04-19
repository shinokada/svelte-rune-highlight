import { ANALYTICS_ID } from '$env/static/private';
import type { MetaProps } from 'runes-meta-tags';
import { splitAndCapitalize, removeHyphensAndCapitalize } from './utils/helpers';

export const load = ({ url }) => {
  const title = splitAndCapitalize(url.pathname) ? `${splitAndCapitalize(url.pathname)} - ${removeHyphensAndCapitalize(__NAME__)}` : `${removeHyphensAndCapitalize(__NAME__)}`;
  const description = splitAndCapitalize(url.pathname) ? `${splitAndCapitalize(url.pathname)} component for Svelte 5 Runes.` : 'Syntax highlighting for Svelte 5 Runes using highlight.js';
  const image = splitAndCapitalize(url.pathname) ? `https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=${splitAndCapitalize(url.pathname)}` : 'https://open-graph-vercel.vercel.app/api/svelte-rune-highlight';
  // console.log('url: ', splitAndCapitalize(url.pathname));
  const layoutMetaTags: MetaProps = {
    title,
    description,
    keywords: 'svelte, runes, syntax, highlightjs, library',
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title,
      description,
      image,
      imageAlt: title,
    },
    og: {
      type: 'website',
      title,
      description,
      url: url.href,
      image,
      imageAlt: title,
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
