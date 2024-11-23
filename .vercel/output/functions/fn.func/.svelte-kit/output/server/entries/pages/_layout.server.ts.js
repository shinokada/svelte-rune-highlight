const ANALYTICS_ID = "G-56Q5D99ZCL";
const title = "Svelte Rune Highlight";
const description = "Syntax highlighting for Svelte 5 Runes using highlight.js";
const keywords = "highlightjs, svelte, runes, syntax, library";
const image = "https://open-graph-vercel.vercel.app/api/svelte-rune-highlight";
const load = ({ url }) => {
  const layoutMetaTags = {
    title,
    description,
    keywords,
    twitter: {
      card: "summary_large_image",
      site: "@shinokada",
      handle: "@shinokada",
      title,
      description,
      image,
      imageAlt: title
    },
    og: {
      type: "website",
      title,
      description,
      url: url.href,
      image,
      imageAlt: title,
      siteName: title,
      imageWidth: "1200",
      imageHeight: "630"
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID
  };
};
export {
  load
};
