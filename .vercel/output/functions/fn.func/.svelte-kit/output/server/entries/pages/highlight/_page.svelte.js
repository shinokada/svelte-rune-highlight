import { a5 as css_props, S as pop, Q as push } from "../../../chunks/index.js";
import { H as Highlight } from "../../../chunks/Highlight.js";
import "../../../chunks/theme.js";
import { A } from "../../../chunks/A.js";
import { H as HighlightCompo, m as markdown } from "../../../chunks/HighlightCompo.js";
import { t as typescript } from "../../../chunks/typescript.js";
import register from "highlight.js/lib/languages/yaml";
import register$1 from "highlight.js/lib/languages/json";
const __vite_glob_0_0 = `<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import typescript from 'svelte-rune-highlight/languages/typescript';
  const modules = import.meta.glob('./samples/*.md', { query: '?raw', import: 'default', eager: true });
<\/script>

<Highlight language={typescript} code={modules['./samples/javascript.md'] as string} />`;
const __vite_glob_0_1 = `<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import json from 'svelte-rune-highlight/languages/json';
  const modules = import.meta.glob('./samples/*.md', { query: '?raw', import: 'default', eager: true });
<\/script>

<Highlight language={json} code={modules['./samples/json.md'] as string} langtag --langtag-color="springgreen" />`;
const __vite_glob_0_2 = `<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import markdown from 'svelte-rune-highlight/languages/markdown';
  const modules = import.meta.glob('./samples/*.md', { query: '?raw', import: 'default', eager: true });
<\/script>

<Highlight language={markdown} code={modules['./samples/markdown.md'] as string} langtag --langtag-color="lightgreen" />`;
const __vite_glob_0_3 = `<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import yaml from 'svelte-rune-highlight/languages/yaml';
  const modules = import.meta.glob('./samples/*.md', { query: '?raw', import: 'default', eager: true });
<\/script>

<Highlight language={yaml} code={modules['./samples/yaml.md'] as string} langtag --langtag-color="lightcoral" />`;
const __vite_glob_0_4 = 'let message = "Hello, world!";\nconsole.log(message);\n\nconst age = 25;\n\nif (age > 18) {\n  console.log("You are more than 18 years.");\n}\n';
const __vite_glob_0_5 = '{\n  "name": "John Doe",\n  "age": 30,\n  "city": "New York",\n  "is_active": true,\n  "hobbies": ["reading", "hiking", "coding"]\n}';
const __vite_glob_0_6 = "# This is a heading\n\nThis is some paragraph text.\n\n* Here is an unordered list item.\n* Another list item.\n\n**This text is bold.**\n";
const __vite_glob_0_7 = "numberLine?: boolean;\nlanguage: any;\ncode: string;\nlangtag?: boolean;\nhideBorder?: boolean;\nwrapLines?: boolean;\nstartingLineNumber?: number = 1;\nhighlightedLines?: number[];";
const __vite_glob_0_8 = "--langtag-top = 0:                Top position of the langtag\n--langtag-right =  0:             Right position of the langtag\n--langtag-background =	inherit:  Background color of the langtag\n--langtag-color = inherit:        Text color of the langtag\n--langtag-border-radius = 0:      Border radius of the langtag\n--langtag-padding = 1em:          Padding of the langtag";
const __vite_glob_0_9 = 'const message: string = "Hello, world!";\nconsole.log(message);\n\nfunction greet(name: string): string {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet("Bard"));';
const __vite_glob_0_10 = "name: My Application\nversion: 1.0.0\nservices:\n  - name: web\n    image: my-image:latest\n    ports:\n      - 80:80";
const yaml = { name: "yaml", register };
const json = { name: "json", register: register$1 };
function _page($$payload, $$props) {
  push();
  const modules = /* @__PURE__ */ Object.assign({
    "./samples/highlight/basic.md": __vite_glob_0_0,
    "./samples/highlight/json.md": __vite_glob_0_1,
    "./samples/highlight/markdown.md": __vite_glob_0_2,
    "./samples/highlight/yaml.md": __vite_glob_0_3,
    "./samples/javascript.md": __vite_glob_0_4,
    "./samples/json.md": __vite_glob_0_5,
    "./samples/markdown.md": __vite_glob_0_6,
    "./samples/props.md": __vite_glob_0_7,
    "./samples/style-props.md": __vite_glob_0_8,
    "./samples/typescript.md": __vite_glob_0_9,
    "./samples/yaml.md": __vite_glob_0_10
  });
  $$payload.out += `<h1>Highlight Component</h1> <h2>Basic</h2> <p>The Highlight component requires language and code props. The langtag prop is
  optional and it will add a language tag.</p> `;
  HighlightCompo($$payload, { code: modules["./samples/highlight/basic.md"] });
  $$payload.out += `<!----> The above code will produce: `;
  Highlight($$payload, {
    language: typescript,
    code: modules["./samples/javascript.md"]
  });
  $$payload.out += `<!----> <h2>Language Tag</h2> <h3>Markdown</h3> <p>Set langtag and language props to display the language name in the top right
  corner of the code block.</p> `;
  HighlightCompo($$payload, {
    code: modules["./samples/highlight/markdown.md"]
  });
  $$payload.out += `<!----> <p>Here's what you'll see when you run this code:</p> `;
  css_props($$payload, true, { "--langtag-color": "lightgreen" }, () => {
    Highlight($$payload, {
      language: markdown,
      code: modules["./samples/markdown.md"],
      langtag: true
    });
  });
  $$payload.out += ` <h3>YAML</h3> <p>Yaml example:</p> `;
  HighlightCompo($$payload, { code: modules["./samples/highlight/yaml.md"] });
  $$payload.out += `<!----> <p>This code generates the following output:</p> `;
  css_props($$payload, true, { "--langtag-color": "lightcoral" }, () => {
    Highlight($$payload, {
      language: yaml,
      code: modules["./samples/yaml.md"],
      langtag: true
    });
  });
  $$payload.out += ` <h3>JSON</h3> <p>JSON example:</p> `;
  HighlightCompo($$payload, { code: modules["./samples/highlight/json.md"] });
  $$payload.out += `<!----> <p>The code produces this output:</p> `;
  css_props($$payload, true, { "--langtag-color": "springgreen" }, () => {
    Highlight($$payload, {
      language: json,
      code: modules["./samples/json.md"],
      langtag: true
    });
  });
  $$payload.out += ` <h2>Props</h2> <p>Props example:</p> `;
  HighlightCompo($$payload, { code: modules["./samples/props.md"] });
  $$payload.out += `<!----> <h2>Language tag style</h2> <p>Customize the language tag background, color, and border-radius using style
  props.</p> `;
  HighlightCompo($$payload, { code: modules["./samples/style-props.md"] });
  $$payload.out += `<!----> <p>See more about line numbers in the `;
  A($$payload, {
    href: "/line-numbers",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Line Numbers`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> page.</p>`;
  pop();
}
export {
  _page as default
};
