import { H as Highlight } from "./Highlight.js";
import { H as HighlightSvelte } from "./HighlightSvelte.js";
import "./theme.js";
import register from "highlight.js/lib/languages/markdown";
const markdown = { name: "markdown", register };
function HighlightCompo($$payload, $$props) {
  let { code, codeLang } = $$props;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div role="button" tabindex="0" class="my-8 border border-gray-500 bg-gray-300 dark:border-gray-600 dark:bg-gray-700"><div class="relative"><button type="button" class="absolute right-0 -mt-11 flex items-center border border-gray-200 bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-200 hover:text-primary-700 dark:border-gray-500 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"><svg class="me-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> Copy</button></div> `;
  if (codeLang === "md") {
    $$payload.out += "<!--[-->";
    Highlight($$payload, { language: markdown, code });
  } else {
    $$payload.out += "<!--[!-->";
    if (code) {
      $$payload.out += "<!--[-->";
      HighlightSvelte($$payload, { code });
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `no code is provided`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div>`;
}
export {
  HighlightCompo as H,
  markdown as m
};
