import { a1 as spread_props, S as pop, Q as push } from "./index.js";
import { L as LangTag } from "./Highlight.js";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
function HighlightSvelte($$payload, $$props) {
  push();
  let {
    code = "",
    langtag = false,
    preClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("css", css);
  let highlighted = hljs.highlightAuto(code).value;
  LangTag($$payload, spread_props([
    { preClass },
    restProps,
    {
      languageName: "svelte",
      langtag,
      highlighted,
      code
    }
  ]));
  pop();
}
export {
  HighlightSvelte as H
};
