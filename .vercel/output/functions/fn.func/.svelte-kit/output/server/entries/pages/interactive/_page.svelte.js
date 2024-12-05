import { Q as push, Y as spread_attributes, V as attr, S as pop, Z as getContext, a3 as bind_props, a1 as spread_props, a6 as copy_payload, a7 as assign_payload, _ as ensure_array_like, X as escape_html } from "../../../chunks/index.js";
import { L as LangTag, H as Highlight } from "../../../chunks/Highlight.js";
import { H as HighlightSvelte } from "../../../chunks/HighlightSvelte.js";
import { s as spinner, r as radio } from "../../../chunks/cjs.js";
import { L as Label } from "../../../chunks/Label.js";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import { t as typescript } from "../../../chunks/typescript.js";
/* empty css                           */
function Spinner($$payload, $$props) {
  push();
  let {
    color = "primary",
    size = "8",
    class: className,
    currentFill = "currentFill",
    currentColor = "currentColor",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let spinnerClass = spinner({ color, size, className });
  $$payload.out += `<svg${spread_attributes(
    {
      ...restProps,
      role: "status",
      class: spinnerClass,
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    },
    void 0,
    void 0,
    3
  )}><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"${attr("fill", currentColor)}></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"${attr("fill", currentFill)}></path></svg>`;
  pop();
}
function Radio($$payload, $$props) {
  push();
  let {
    children,
    aria_describedby,
    labelClass,
    color = "primary",
    group = void 0,
    value = void 0,
    inputClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { input, label } = radio({ color, tinted: !!getContext("background") });
  Label($$payload, {
    class: label({ class: labelClass }),
    children: ($$payload2) => {
      $$payload2.out += `<input${spread_attributes({
        type: "radio",
        checked: group === value,
        value,
        "aria-describedby": aria_describedby,
        ...restProps,
        class: input({ class: inputClass })
      })}> `;
      children($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { group, value });
  pop();
}
function Codewrapper($$payload, $$props) {
  push();
  let {
    code,
    langtag = false,
    preClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("css", css);
  $$payload.out += `<div class="bg-red-500 p-4">`;
  LangTag($$payload, spread_props([
    { preClass },
    restProps,
    { languageName: "svelte", langtag, code }
  ]));
  $$payload.out += `<!----></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  const sizes = ["4", "5", "6", "8", "10", "12", "16"];
  let spinnerSize = "8";
  let generatedCode = (() => {
    let props = [];
    if (spinnerSize !== "8") props.push(` size="${spinnerSize}"`);
    return `<Spinner${props.join("")} />`;
  })();
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(sizes);
    $$payload2.out += `<h2>HighlightSvelte</h2> `;
    HighlightSvelte($$payload2, { code: `let banana = 🍌` });
    $$payload2.out += `<!----> `;
    Spinner($$payload2, { size: spinnerSize });
    $$payload2.out += `<!----> <div class="mb-4 flex flex-wrap space-x-4">`;
    Label($$payload2, {
      class: "mb-4 w-full font-bold",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Size:`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let size = each_array[$$index];
      Radio($$payload2, {
        labelClass: "w-24 my-1",
        name: "spinnersize",
        get group() {
          return spinnerSize;
        },
        set group($$value) {
          spinnerSize = $$value;
          $$settled = false;
        },
        value: size,
        children: ($$payload3) => {
          $$payload3.out += `<!---->${escape_html(size)}`;
        },
        $$slots: { default: true }
      });
    }
    $$payload2.out += `<!--]--></div> ${escape_html(generatedCode)}
Highlight `;
    Highlight($$payload2, {
      code: generatedCode,
      language: typescript,
      numberLine: true
    });
    $$payload2.out += `<!----> HighlightSvelte `;
    HighlightSvelte($$payload2, { code: generatedCode });
    $$payload2.out += `<!----> LangTag `;
    LangTag($$payload2, { languageName: "svelte", code: generatedCode });
    $$payload2.out += `<!----> Codewrapper `;
    Codewrapper($$payload2, { code: generatedCode });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
