import * as universal from '../entries/pages/auto/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auto/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/auto/+page.ts";
export const imports = ["_app/immutable/nodes/3.FmwZ5WZx.js","_app/immutable/chunks/disclose-version.D2sbcNFE.js","_app/immutable/chunks/runtime.Dli3xU3I.js","_app/immutable/chunks/css-props.DC9KARNG.js","_app/immutable/chunks/Highlight.C2N6QQU3.js","_app/immutable/chunks/props.DnjUmrVz.js","_app/immutable/chunks/class.BfioQ9u1.js","_app/immutable/chunks/HighlightAuto.DFeZ2kqg.js","_app/immutable/chunks/HighlightCompo.Cc5z6AHJ.js","_app/immutable/chunks/cjs.C9kuYEwZ.js","_app/immutable/chunks/HighlightSvelte.BxZu-sNK.js"];
export const stylesheets = ["_app/immutable/assets/Highlight.CMYouZ3z.css","_app/immutable/assets/cjs.lu8Pa3zS.css"];
export const fonts = [];
