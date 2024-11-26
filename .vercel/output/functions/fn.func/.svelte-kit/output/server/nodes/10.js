import * as universal from '../entries/pages/svelte/_page.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/svelte/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/svelte/+page.ts";
export const imports = ["_app/immutable/nodes/10.C5SgdbOo.js","_app/immutable/chunks/disclose-version.B4sAXDTL.js","_app/immutable/chunks/runtime.CkMulldu.js","_app/immutable/chunks/css-props.DWUofsby.js","_app/immutable/chunks/Highlight.Du5HnNxg.js","_app/immutable/chunks/props.BJgWNeQ6.js","_app/immutable/chunks/class.No2-36i1.js","_app/immutable/chunks/HighlightSvelte.wd-to6vh.js","_app/immutable/chunks/HighlightCompo.R2yK9IMh.js","_app/immutable/chunks/theme.OwzenBMM.js"];
export const stylesheets = ["_app/immutable/assets/Highlight.CMYouZ3z.css","_app/immutable/assets/theme.lu8Pa3zS.css"];
export const fonts = [];
