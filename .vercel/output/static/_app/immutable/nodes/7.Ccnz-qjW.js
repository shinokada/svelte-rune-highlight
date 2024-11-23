import{a as N,t as R,m as S}from"../chunks/disclose-version.DrDYUaWN.js";import{s as t,f as H,p as A,a as C,r as b,c as O,ak as f}from"../chunks/runtime.B-swgO6H.js";import{c as T}from"../chunks/css-props.C2671Y2D.js";import{H as v}from"../chunks/Highlight.YoLsuBD8.js";import"../chunks/theme.DbMJ_-UE.js";import{A as M}from"../chunks/A.CpyyQl21.js";import{H as i,m as L}from"../chunks/HighlightCompo.FOXMAKYO.js";import{t as k}from"../chunks/typescript.D7mGh5x8.js";const I=()=>({pageMetaTags:{title:"Highlight Component - Svelte Rune Highlight",description:"Highlight component - Syntax highlight component for Svelte Runes.",og:{title:"Highlight Component - Svelte Rune Highlight",description:"Highlight component - Syntax highlight component for Svelte Runes.",image:"https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=Highlight%20Component"},twitter:{title:"Highlight component - Svelte Rune Highlight",description:"Highlight component - Syntax highlight component for Svelte Runes.",image:"https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=Highlight%20Component"}}}),le=Object.freeze(Object.defineProperty({__proto__:null,load:I},Symbol.toStringTag,{value:"Module"})),$=`<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import typescript from 'svelte-rune-highlight/languages/typescript';
  const modules = import.meta.glob('./samples/*.md', { query: '?raw', import: 'default', eager: true });
<\/script>

<Highlight language={typescript} code={modules['./samples/javascript.md'] as string} />`,x=`<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import json from 'svelte-rune-highlight/languages/json';
  const modules = import.meta.glob('./samples/*.md', { query: '?raw', import: 'default', eager: true });
<\/script>

<Highlight language={json} code={modules['./samples/json.md'] as string} langtag --langtag-color="springgreen" />`,D=`<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import markdown from 'svelte-rune-highlight/languages/markdown';
  const modules = import.meta.glob('./samples/*.md', { query: '?raw', import: 'default', eager: true });
<\/script>

<Highlight language={markdown} code={modules['./samples/markdown.md'] as string} langtag --langtag-color="lightgreen" />`,B=`<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import yaml from 'svelte-rune-highlight/languages/yaml';
  const modules = import.meta.glob('./samples/*.md', { query: '?raw', import: 'default', eager: true });
<\/script>

<Highlight language={yaml} code={modules['./samples/yaml.md'] as string} langtag --langtag-color="lightcoral" />`,j=`let message = "Hello, world!";
console.log(message);

const age = 25;

if (age > 18) {
  console.log("You are more than 18 years.");
}
`,U=`{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "is_active": true,
  "hobbies": ["reading", "hiking", "coding"]
}`,P=`# This is a heading

This is some paragraph text.

* Here is an unordered list item.
* Another list item.

**This text is bold.**
`,Y=`numberLine?: boolean;
language: any;
code: string;
langtag?: boolean;
hideBorder?: boolean;
wrapLines?: boolean;
startingLineNumber?: number = 1;
highlightedLines?: number[];`,q=`--langtag-top = 0:                Top position of the langtag
--langtag-right =  0:             Right position of the langtag
--langtag-background =	inherit:  Background color of the langtag
--langtag-color = inherit:        Text color of the langtag
--langtag-border-radius = 0:      Border radius of the langtag
--langtag-padding = 1em:          Padding of the langtag`,J=`const message: string = "Hello, world!";
console.log(message);

function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
console.log(greet("Bard"));`,K=`name: My Application
version: 1.0.0
services:
  - name: web
    image: my-image:latest
    ports:
      - 80:80`;function G(n){const a="true false yes no null",e="[\\w#;/?:@&=+$,.~*'()[\\]]+",s={className:"attr",variants:[{begin:/\w[\w :()\./-]*:(?=[ \t]|$)/},{begin:/"\w[\w :()\./-]*":(?=[ \t]|$)/},{begin:/'\w[\w :()\./-]*':(?=[ \t]|$)/}]},o={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},r={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[n.BACKSLASH_ESCAPE,o]},h=n.inherit(r,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),l={className:"number",begin:"\\b"+"[0-9]{4}(-[0-9][0-9]){0,2}"+"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?"+"(\\.[0-9]*)?"+"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?"+"\\b"},g={end:",",endsWithParent:!0,excludeEnd:!0,keywords:a,relevance:0},d={begin:/\{/,end:/\}/,contains:[g],illegal:"\\n",relevance:0},u={begin:"\\[",end:"\\]",contains:[g],illegal:"\\n",relevance:0},_=[s,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+e},{className:"type",begin:"!<"+e+">"},{className:"type",begin:"!"+e},{className:"type",begin:"!!"+e},{className:"meta",begin:"&"+n.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+n.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},n.HASH_COMMENT_MODE,{beginKeywords:a,keywords:{literal:a}},l,{className:"number",begin:n.C_NUMBER_RE+"\\b",relevance:0},d,u,r],c=[..._];return c.pop(),c.push(h),g.contains=c,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:_}}const V={name:"yaml",register:G};function Z(n){const a={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},e={match:/[{}[\],:]/,className:"punctuation",relevance:0},s=["true","false","null"],o={scope:"literal",beginKeywords:s.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:s},contains:[a,e,n.QUOTE_STRING_MODE,o,n.C_NUMBER_MODE,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}const z={name:"json",register:Z};var F=R(`<h1>Highlight Component</h1> <h2>Basic</h2> <p>The Highlight component requires language and code props. The langtag prop is
  optional and it will add a language tag.</p> <!> The above code will produce: <!> <h2>Language Tag</h2> <h3>Markdown</h3> <p>Set langtag and language props to display the language name in the top right
  corner of the code block.</p> <!> <p>Here's what you'll see when you run this code:</p> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <h3>YAML</h3> <p>Yaml example:</p> <!> <p>This code generates the following output:</p> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <h3>JSON</h3> <p>JSON example:</p> <!> <p>The code produces this output:</p> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <h2>Props</h2> <p>Props example:</p> <!> <h2>Language tag style</h2> <p>Customize the language tag background, color, and border-radius using style
  props.</p> <!> <p>See more about line numbers in the <!> page.</p>`,1);function ge(n,a){C(a,!0);const e=Object.assign({"./samples/highlight/basic.md":$,"./samples/highlight/json.md":x,"./samples/highlight/markdown.md":D,"./samples/highlight/yaml.md":B,"./samples/javascript.md":j,"./samples/json.md":U,"./samples/markdown.md":P,"./samples/props.md":Y,"./samples/style-props.md":q,"./samples/typescript.md":J,"./samples/yaml.md":K});var s=F(),o=t(H(s),6);i(o,{get code(){return e["./samples/highlight/basic.md"]}});var r=t(o,2);v(r,{language:k,get code(){return e["./samples/javascript.md"]}});var h=t(r,8);i(h,{get code(){return e["./samples/highlight/markdown.md"]}});var m=t(h,4);T(m,()=>({"--langtag-color":"lightgreen"})),v(m.lastChild,{language:L,get code(){return e["./samples/markdown.md"]},langtag:!0}),b(m);var E=t(m,6);i(E,{get code(){return e["./samples/highlight/yaml.md"]}});var p=t(E,4);T(p,()=>({"--langtag-color":"lightcoral"})),v(p.lastChild,{language:V,get code(){return e["./samples/yaml.md"]},langtag:!0}),b(p);var y=t(p,6);i(y,{get code(){return e["./samples/highlight/json.md"]}});var l=t(y,4);T(l,()=>({"--langtag-color":"springgreen"})),v(l.lastChild,{language:z,get code(){return e["./samples/json.md"]},langtag:!0}),b(l);var g=t(l,6);i(g,{get code(){return e["./samples/props.md"]}});var d=t(g,6);i(d,{get code(){return e["./samples/style-props.md"]}});var u=t(d,2),_=t(O(u));M(_,{href:"/line-numbers",children:(c,Q)=>{f();var w=S("Line Numbers");N(c,w)},$$slots:{default:!0}}),f(),b(u),N(n,s),A()}export{ge as component,le as universal};
