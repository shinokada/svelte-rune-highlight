import * as universal from '../entries/pages/auto/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auto/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/auto/+page.ts";
export const imports = ["_app/immutable/nodes/3.BD6L9FVQ.js","_app/immutable/chunks/disclose-version.Du1tclZY.js","_app/immutable/chunks/runtime.C3oXmx21.js","_app/immutable/chunks/css-props.DlFLL9nz.js","_app/immutable/chunks/Highlight.C6Kzqjp6.js","_app/immutable/chunks/props.rgNRwxWn.js","_app/immutable/chunks/class.BOWPHdjZ.js","_app/immutable/chunks/HighlightAuto.CxSxp2pi.js","_app/immutable/chunks/HighlightCompo.Cf_dINQo.js","_app/immutable/chunks/theme.-FSGytcX.js","_app/immutable/chunks/HighlightSvelte.CIDxasXG.js"];
export const stylesheets = ["_app/immutable/assets/Highlight.CMYouZ3z.css","_app/immutable/assets/theme.lu8Pa3zS.css"];
export const fonts = [];
