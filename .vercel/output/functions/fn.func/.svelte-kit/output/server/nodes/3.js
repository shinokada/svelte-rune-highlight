import * as universal from '../entries/pages/auto/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auto/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/auto/+page.ts";
export const imports = ["_app/immutable/nodes/3.D8DDy36G.js","_app/immutable/chunks/disclose-version.B7T7DJ8b.js","_app/immutable/chunks/runtime.Ch1iFr63.js","_app/immutable/chunks/css-props.CgC8uLQz.js","_app/immutable/chunks/Highlight.CQPd7z_6.js","_app/immutable/chunks/props.t523P_8_.js","_app/immutable/chunks/class.CqYioM-h.js","_app/immutable/chunks/HighlightAuto.CQJLyMKL.js","_app/immutable/chunks/HighlightCompo.tSnUup2s.js","_app/immutable/chunks/theme.CDpxv0IG.js","_app/immutable/chunks/HighlightSvelte.4F3oADc4.js"];
export const stylesheets = ["_app/immutable/assets/Highlight.CMYouZ3z.css","_app/immutable/assets/theme.lu8Pa3zS.css"];
export const fonts = [];
