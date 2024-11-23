import { Y as spread_attributes, S as pop, Q as push } from "./index.js";
import { m as label } from "./theme.js";
function Label($$payload, $$props) {
  push();
  let {
    children,
    color = "gray",
    show = true,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = label({ color, className });
  if (show) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<label${spread_attributes({ ...restProps, class: base })}>`;
    children($$payload);
    $$payload.out += `<!----></label>`;
  } else {
    $$payload.out += "<!--[!-->";
    children($$payload);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  Label as L
};
