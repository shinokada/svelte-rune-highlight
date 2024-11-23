import { Y as spread_attributes, W as stringify, V as attr, X as escape_html, _ as ensure_array_like, a8 as add_styles, a1 as spread_props, S as pop, Q as push } from "./index.js";
import hljs from "highlight.js/lib/core";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function LangTag($$payload, $$props) {
  let {
    code,
    highlighted,
    languageName = "plaintext",
    langtag = false,
    preClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<pre${spread_attributes(
    {
      class: `${stringify(preClass)} ${stringify(langtag ? "langtag" : "")}`,
      "data-language": languageName,
      ...restProps
    },
    { "svelte-1w9vok": true }
  )}><code${attr("class", ["hljs"].filter(Boolean).join(" "))}>`;
  if (highlighted) {
    $$payload.out += "<!--[-->";
    $$payload.out += `${html(highlighted)}`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html(code)}`;
  }
  $$payload.out += `<!--]--></code></pre>`;
}
function Highlight($$payload, $$props) {
  push();
  let {
    numberLine,
    language,
    code = "",
    langtag = false,
    hideBorder,
    wrapLines,
    startingLineNumber = 1,
    highlightedLines = [],
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const DIGIT_WIDTH = 12;
  const MIN_DIGITS = 2;
  const HIGHLIGHTED_BACKGROUND = "rgba(254, 241, 96, 0.2)";
  hljs.registerLanguage(language.name, language.register);
  let highlighted = hljs.highlight(code, { language: language.name }).value;
  let lines = highlighted.split("\n");
  let len_digits = lines.length.toString().length;
  let len = len_digits - MIN_DIGITS < 1 ? MIN_DIGITS : len_digits;
  let width = len * DIGIT_WIDTH;
  if (numberLine) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(lines);
    $$payload.out += `<div${spread_attributes({ ...restProps }, void 0, { "overflow-x": "auto" })}><table><tbody${attr("class", ["hljs"].filter(Boolean).join(" "))}><!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let line = each_array[i];
      const lineNumber = i + startingLineNumber;
      $$payload.out += `<tr><td${add_styles({
        position: "sticky",
        left: "0",
        "text-align": "right",
        "user-select": "none",
        width: width + "px"
      })}${attr("class", [
        "hljs",
        hideBorder ? "hideBorder" : ""
      ].filter(Boolean).join(" "))}><code${add_styles({
        color: "var(--line-number-color, currentColor)"
      })}>${escape_html(lineNumber)}</code> `;
      if (highlightedLines.includes(i)) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div${add_styles({
          background: `var(--highlighted-background, ${stringify(HIGHLIGHTED_BACKGROUND)})`
        })}${attr("class", ["line-background"].filter(Boolean).join(" "))}></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></td><td><pre${attr("class", [wrapLines ? "wrapLines" : ""].filter(Boolean).join(" "))}><code>${html(line || "\n")}</code></pre> `;
      if (highlightedLines.includes(i)) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div${add_styles({
          background: `var(--highlighted-background, ${stringify(HIGHLIGHTED_BACKGROUND)})`
        })}${attr("class", ["line-background"].filter(Boolean).join(" "))}></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></td></tr>`;
    }
    $$payload.out += `<!--]--></tbody></table></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    LangTag($$payload, spread_props([
      restProps,
      {
        languageName: language.name,
        langtag,
        highlighted,
        code
      }
    ]));
  }
  $$payload.out += `<!--]--> `;
  if (numberLine) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<style>
    pre {
      margin: 0;
    }

    table,
    tr,
    td {
      padding: 0;
      border: 0;
      margin: 0;
      vertical-align: baseline;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
    }

    tr:first-of-type td {
      padding-top: 1em;
    }

    tr:last-child td {
      padding-bottom: 1em;
    }

    tr td:first-of-type {
      z-index: 2;
    }

    td {
      padding-left: var(--padding-left, 1em);
      padding-right: var(--padding-right, 1em);
    }

    td.hljs:not(.hideBorder):after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background: var(--border-color, currentColor);
    }

    .wrapLines {
      white-space: pre-wrap;
    }

    td,
    td > code,
    pre {
      position: relative;
    }

    td > code,
    pre {
      z-index: 1;
    }

    .line-background {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    tr:first-of-type td .line-background,
    tr:last-of-type td .line-background {
      height: calc(100% - 1em);
    }

    tr:first-of-type td .line-background {
      top: 1em;
    }

    tr:last-of-type td .line-background {
      bottom: 1em;
    }
  </style>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  Highlight as H,
  LangTag as L
};
