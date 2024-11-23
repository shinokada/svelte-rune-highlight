import { a1 as spread_props, S as pop, Q as push } from "./index.js";
import { L as LangTag } from "./Highlight.js";
function HighlightAuto($$payload, $$props) {
  push();
  let {
    code = "",
    langtag = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let highlighted = "";
  let language = "";
  LangTag($$payload, spread_props([
    restProps,
    {
      languageName: language,
      langtag,
      highlighted,
      code
    }
  ]));
  pop();
}
export {
  HighlightAuto as H
};
