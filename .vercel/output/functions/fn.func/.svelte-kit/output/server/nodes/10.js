import * as universal from '../entries/pages/svelte/_page.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/svelte/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/svelte/+page.ts";
export const imports = ["_app/immutable/nodes/10.Di6xg9Vx.js","_app/immutable/chunks/disclose-version.D2sbcNFE.js","_app/immutable/chunks/runtime.Dli3xU3I.js","_app/immutable/chunks/css-props.DC9KARNG.js","_app/immutable/chunks/Highlight.C2N6QQU3.js","_app/immutable/chunks/props.DnjUmrVz.js","_app/immutable/chunks/class.BfioQ9u1.js","_app/immutable/chunks/HighlightSvelte.BxZu-sNK.js","_app/immutable/chunks/HighlightCompo.Cc5z6AHJ.js","_app/immutable/chunks/cjs.C9kuYEwZ.js"];
export const stylesheets = ["_app/immutable/assets/Highlight.CMYouZ3z.css","_app/immutable/assets/cjs.lu8Pa3zS.css"];
export const fonts = [];
