import { a5 as css_props, S as pop, Q as push } from "../../../chunks/index.js";
import "../../../chunks/Highlight.js";
import { H as HighlightAuto } from "../../../chunks/HighlightAuto.js";
import { H as HighlightCompo } from "../../../chunks/HighlightCompo.js";
const __vite_glob_0_0 = "body {\n  font-family: sans-serif;\n  margin: 0;\n}\n\nh1 {\n  text-align: center;\n  font-size: 2em;\n}\n\np {\n  color: #333;\n  line-height: 1.5;\n}\n\na {\n  text-decoration: none;\n  color: blue;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}";
const __vite_glob_0_1 = '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Example</title>\n</head>\n<body>\n  <header></header>\n  <main></main>\n  <footer></footer>\n</body>\n</html>';
const __vite_glob_0_2 = 'let message = "Hello, world!";\nconsole.log(message);\n\nconst age = 25;\n\nif (age > 18) {\n  console.log("You are more than 18 years.");\n}\n';
const __vite_glob_0_3 = "# This is a heading\n\nThis is some paragraph text.\n\n* Here is an unordered list item.\n* Another list item.\n\n**This text is bold.**\n";
const __vite_glob_0_4 = "code: string;\nlangtag?: boolean;\n...restProps";
const __vite_glob_0_5 = 'message = "Hello, world!"\nprint(message)\n\nage = 25\nif age >= 18:\n    print("You are eligible to vote.")\n';
const __vite_glob_0_6 = 'let message = "Hello, world!";\nprintln!("{}", message);\n\nlet age = 25;\nif age >= 18 {\n  println!("You are eligible to vote.");\n}\n';
const __vite_glob_0_7 = "--langtag-top = 0:                Top position of the langtag\n--langtag-right =  0:             Right position of the langtag\n--langtag-background =	inherit:  Background color of the langtag\n--langtag-color = inherit:        Text color of the langtag\n--langtag-border-radius = 0:      Border radius of the langtag\n--langtag-padding = 1em:          Padding of the langtag";
const __vite_glob_0_8 = 'const message: string = "Hello, world!";\nconsole.log(message);\n\nfunction greet(name: string): string {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet("Bard"));';
function _page($$payload, $$props) {
  push();
  const modules = /* @__PURE__ */ Object.assign({
    "./samples/css.md": __vite_glob_0_0,
    "./samples/html.md": __vite_glob_0_1,
    "./samples/javascript.md": __vite_glob_0_2,
    "./samples/markdown.md": __vite_glob_0_3,
    "./samples/props.md": __vite_glob_0_4,
    "./samples/python.md": __vite_glob_0_5,
    "./samples/rust.md": __vite_glob_0_6,
    "./samples/style-props.md": __vite_glob_0_7,
    "./samples/typescript.md": __vite_glob_0_8
  });
  const code = `<HighlightAuto code={sample-code} />`;
  $$payload.out += `<h1>HighlightAuto Component</h1> HighlightAuto automatically detects the language of the code and highlights it.
All the code has the same structure. `;
  HighlightCompo($$payload, { code });
  $$payload.out += `<!----> <h2>Examples</h2> <h3>Javascript</h3> `;
  HighlightAuto($$payload, { code: modules["./samples/javascript.md"] });
  $$payload.out += `<!----> <h3>Markdown</h3> `;
  HighlightAuto($$payload, { code: modules["./samples/markdown.md"] });
  $$payload.out += `<!----> <h3>HTML</h3> `;
  css_props($$payload, true, { "--langtag-color": "red" }, () => {
    HighlightAuto($$payload, {
      code: modules["./samples/html.md"],
      langtag: true
    });
  });
  $$payload.out += ` <h3>CSS</h3> `;
  css_props($$payload, true, { "--langtag-color": "red" }, () => {
    HighlightAuto($$payload, {
      code: modules["./samples/css.md"],
      langtag: true
    });
  });
  $$payload.out += ` <h3>Typescript</h3> `;
  css_props($$payload, true, { "--langtag-color": "red" }, () => {
    HighlightAuto($$payload, {
      code: modules["./samples/typescript.md"],
      langtag: true
    });
  });
  $$payload.out += ` <h3>Python</h3> `;
  HighlightAuto($$payload, { code: modules["./samples/python.md"] });
  $$payload.out += `<!----> <h3>Rust</h3> `;
  HighlightAuto($$payload, { code: modules["./samples/rust.md"] });
  $$payload.out += `<!----> <h2>Props</h2> `;
  HighlightAuto($$payload, { code: modules["./samples/props.md"] });
  $$payload.out += `<!----> <h2>Language Tag: Caution - This may not be accurate.</h2> <p>Set langtag to true to display the language name in the top right corner of
  the code block.</p> <h2>Language tag style</h2> <p>Customize the language tag background, color, and border-radius using style
  props.</p> `;
  HighlightCompo($$payload, { code: modules["./samples/style-props.md"] });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
