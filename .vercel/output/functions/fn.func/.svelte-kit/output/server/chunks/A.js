import { Y as spread_attributes, S as pop, Q as push } from "./index.js";
import { k as anchor } from "./theme.js";
function A($$payload, $$props) {
  push();
  let {
    children,
    color = "primary",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let linkClass = anchor({ color, className });
  $$payload.out += `<a${spread_attributes({ ...restProps, class: linkClass })}>`;
  children($$payload);
  $$payload.out += `<!----></a>`;
  pop();
}
export {
  A
};
