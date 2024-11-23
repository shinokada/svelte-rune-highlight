import { a5 as css_props, S as pop, Q as push } from "../../../chunks/index.js";
import { H as Highlight } from "../../../chunks/Highlight.js";
import { t as typescript } from "../../../chunks/typescript.js";
const __vite_glob_0_0 = `<Highlight 
  language={typescript} 
  code={test1} 
  numberLine
/>
<Avatar src="/images/profile-picture-3.webp" dot={{ placement: 'top-right', color: 'red' }} rounded /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right', color: 'green' }} /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} rounded />`;
const __vite_glob_0_1 = `<Highlight 
  language={typescript} 
  code={test2} 
  hideBorder 
  numberLine
/>
<Avatar src="/images/profile-picture-3.webp" dot={{ placement: 'top-right', color: 'red' }} rounded /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right', color: 'green' }} /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} rounded />`;
const __vite_glob_0_2 = `<Highlight 
  language={typescript} 
  code={test3} 
  wrapLines 
  numberLine
/>
<Avatar src="/images/profile-picture-3.webp" dot={{ placement: 'top-right', color: 'red' }} rounded /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right', color: 'green' }} /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} rounded />`;
const __vite_glob_0_3 = `<Highlight 
  language={typescript} 
  code={test4} 
  startingLineNumber={42} 
  numberLine
/>
<Avatar src="/images/profile-picture-3.webp" dot={{ placement: 'top-right', color: 'red' }} rounded /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right', color: 'green' }} /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} rounded />`;
const __vite_glob_0_4 = `<Highlight
  language={typescript}
  code={modules['./samples/sample-5.svelte'] as string}
  highlightedLines={[2, 4]}
  --highlighted-background="#666"
  numberLine
/>
<Avatar src="/images/profile-picture-3.webp" dot={{ placement: 'top-right', color: 'red' }} rounded /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right', color: 'green' }} /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} rounded />`;
const __vite_glob_0_5 = `<Highlight
  language={typescript}
  code={modules['./samples/sample-6.svelte']}
  highlightedLines={[1, 3]}
  --line-number-color="pink"
  --border-color="rgba(25, 155, 55, 1)"
  --padding-left={0}
  --padding-right="3em"
  --highlighted-background="#6e6e6e"
  numberLine
/>
<Avatar src="/images/profile-picture-3.webp" dot={{ placement: 'top-right', color: 'red' }} rounded /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right', color: 'green' }} /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} rounded />`;
function _page($$payload, $$props) {
  push();
  const modules = /* @__PURE__ */ Object.assign({
    "./md/sample-1.md": __vite_glob_0_0,
    "./md/sample-2.md": __vite_glob_0_1,
    "./md/sample-3.md": __vite_glob_0_2,
    "./md/sample-4.md": __vite_glob_0_3,
    "./md/sample-5.md": __vite_glob_0_4,
    "./md/sample-6.md": __vite_glob_0_5
  });
  $$payload.out += `<h1>Line Numbers</h1> <p>The Highlight component has the option to add line numbers. See the following
  examples.</p> <h2>Number Lines</h2> <p>Add <code>numberLine</code> props to add line numbers.</p> `;
  Highlight($$payload, {
    language: typescript,
    code: modules["./md/sample-1.md"],
    numberLine: true
  });
  $$payload.out += `<!----> <h2>Hide Border</h2> <p>Add <code>hideBorder</code> props to hide the border.</p> `;
  Highlight($$payload, {
    language: typescript,
    code: modules["./md/sample-2.md"],
    hideBorder: true,
    numberLine: true
  });
  $$payload.out += `<!----> <h2>Wraped Lines</h2> <p>Add <code>wrapLines</code> props to wrap lines.</p> `;
  Highlight($$payload, {
    language: typescript,
    code: modules["./md/sample-3.md"],
    wrapLines: true,
    numberLine: true
  });
  $$payload.out += `<!----> <h2>Starting Line Number</h2> <p>Use the <code>startingLineNumber</code> props to set the start line number.</p> `;
  Highlight($$payload, {
    language: typescript,
    code: modules["./md/sample-4.md"],
    startingLineNumber: 42,
    numberLine: true
  });
  $$payload.out += `<!----> <h2>Highlighted Lines and Highlighted Background</h2> <p>Use the <code>highlightedLines</code> and <code>highlightedBackground</code> props to highlight lines.</p> `;
  css_props($$payload, true, { "--highlighted-background": "#666" }, () => {
    Highlight($$payload, {
      language: typescript,
      code: modules["./md/sample-5.md"],
      highlightedLines: [2, 4],
      numberLine: true
    });
  });
  $$payload.out += ` <h2>Custom styles</h2> <p>Use the <code>--line-number-color</code> , <code>--border-color</code> , <code>--padding-left</code> , <code>--padding-right</code> , and <code>--highlighted-background</code> props to customize the styles.</p> `;
  css_props(
    $$payload,
    true,
    {
      "--line-number-color": "pink",
      "--border-color": "rgba(25, 155, 55, 1)",
      "--padding-left": "1em",
      "--padding-right": "2em",
      "--highlighted-background": "#6e6e6e"
    },
    () => {
      Highlight($$payload, {
        language: typescript,
        code: modules["./md/sample-6.md"],
        highlightedLines: [1, 3],
        numberLine: true
      });
    }
  );
  pop();
}
export {
  _page as default
};
