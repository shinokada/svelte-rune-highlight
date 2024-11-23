import * as universal from '../entries/pages/highlight/_page.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/highlight/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/highlight/+page.ts";
export const imports = ["_app/immutable/nodes/7.Ccnz-qjW.js","_app/immutable/chunks/disclose-version.DrDYUaWN.js","_app/immutable/chunks/runtime.B-swgO6H.js","_app/immutable/chunks/css-props.C2671Y2D.js","_app/immutable/chunks/Highlight.YoLsuBD8.js","_app/immutable/chunks/props.CTE-8nyO.js","_app/immutable/chunks/class.iQEJ4mK_.js","_app/immutable/chunks/theme.DbMJ_-UE.js","_app/immutable/chunks/A.CpyyQl21.js","_app/immutable/chunks/HighlightCompo.FOXMAKYO.js","_app/immutable/chunks/HighlightSvelte.c-_dwP9L.js","_app/immutable/chunks/typescript.D7mGh5x8.js"];
export const stylesheets = ["_app/immutable/assets/Highlight.CMYouZ3z.css","_app/immutable/assets/theme.lu8Pa3zS.css"];
export const fonts = [];
