import * as universal from '../entries/pages/auto/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auto/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/auto/+page.ts";
export const imports = ["_app/immutable/nodes/3.hMONd9_8.js","_app/immutable/chunks/disclose-version.B4sAXDTL.js","_app/immutable/chunks/runtime.CkMulldu.js","_app/immutable/chunks/css-props.DWUofsby.js","_app/immutable/chunks/Highlight.Du5HnNxg.js","_app/immutable/chunks/props.BJgWNeQ6.js","_app/immutable/chunks/class.No2-36i1.js","_app/immutable/chunks/HighlightAuto.CoevoDwV.js","_app/immutable/chunks/HighlightCompo.R2yK9IMh.js","_app/immutable/chunks/theme.OwzenBMM.js","_app/immutable/chunks/HighlightSvelte.wd-to6vh.js"];
export const stylesheets = ["_app/immutable/assets/Highlight.CMYouZ3z.css","_app/immutable/assets/theme.lu8Pa3zS.css"];
export const fonts = [];
