import{a as b,t as H}from"../chunks/disclose-version.DrDYUaWN.js";import{s as e,f as w,p as T,a as x,r as l}from"../chunks/runtime.B-swgO6H.js";import{c as r}from"../chunks/css-props.C2671Y2D.js";import"../chunks/Highlight.YoLsuBD8.js";import{H as n}from"../chunks/HighlightAuto.DlF3yZW8.js";import{H as _}from"../chunks/HighlightCompo.FOXMAKYO.js";const A=()=>({pageMetaTags:{title:"HighlightAuto Component - Svelte Rune Highlight",description:"Auto syntax highlight component for Svelte Runes.",og:{title:"HighlightAuto Component - Svelte Rune Highlight",description:"Auto syntax highlight component for Svelte Runes."},twitter:{title:"HighlightAuto Component - Svelte Rune Highlight",description:"Auto syntax highlight component for Svelte Runes."}}}),J=Object.freeze(Object.defineProperty({__proto__:null,load:A},Symbol.toStringTag,{value:"Module"})),C=`body {
  font-family: sans-serif;
  margin: 0;
}

h1 {
  text-align: center;
  font-size: 2em;
}

p {
  color: #333;
  line-height: 1.5;
}

a {
  text-decoration: none;
  color: blue;
}

img {
  max-width: 100%;
  height: auto;
}`,S=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example</title>
</head>
<body>
  <header></header>
  <main></main>
  <footer></footer>
</body>
</html>`,R=`let message = "Hello, world!";
console.log(message);

const age = 25;

if (age > 18) {
  console.log("You are more than 18 years.");
}
`,k=`# This is a heading

This is some paragraph text.

* Here is an unordered list item.
* Another list item.

**This text is bold.**
`,P=`code: string;
langtag?: boolean;
...restProps`,j=`message = "Hello, world!"
print(message)

age = 25
if age >= 18:
    print("You are eligible to vote.")
`,M=`let message = "Hello, world!";
println!("{}", message);

let age = 25;
if age >= 18 {
  println!("You are eligible to vote.");
}
`,O=`--langtag-top = 0:                Top position of the langtag
--langtag-right =  0:             Right position of the langtag
--langtag-background =	inherit:  Background color of the langtag
--langtag-color = inherit:        Text color of the langtag
--langtag-border-radius = 0:      Border radius of the langtag
--langtag-padding = 1em:          Padding of the langtag`,Y=`const message: string = "Hello, world!";
console.log(message);

function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
console.log(greet("Bard"));`;var z=H(`<h1>HighlightAuto Component</h1> HighlightAuto automatically detects the language of the code and highlights it.
All the code has the same structure. <!> <h2>Examples</h2> <h3>Javascript</h3> <!> <h3>Markdown</h3> <!> <h3>HTML</h3> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <h3>CSS</h3> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <h3>Typescript</h3> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <h3>Python</h3> <!> <h3>Rust</h3> <!> <h2>Props</h2> <!> <h2>Language Tag: Caution - This may not be accurate.</h2> <p>Set langtag to true to display the language name in the top right corner of
  the code block.</p> <h2>Language tag style</h2> <p>Customize the language tag background, color, and border-radius using style
  props.</p> <!>`,1);function U(g,v){x(v,!0);const t=Object.assign({"./samples/css.md":C,"./samples/html.md":S,"./samples/javascript.md":R,"./samples/markdown.md":k,"./samples/props.md":P,"./samples/python.md":j,"./samples/rust.md":M,"./samples/style-props.md":O,"./samples/typescript.md":Y}),f="<HighlightAuto code={sample-code} />";var i=z(),p=e(w(i),2);_(p,{code:f});var h=e(p,6);n(h,{get code(){return t["./samples/javascript.md"]}});var d=e(h,4);n(d,{get code(){return t["./samples/markdown.md"]}});var o=e(d,4);r(o,()=>({"--langtag-color":"red"})),n(o.lastChild,{get code(){return t["./samples/html.md"]},langtag:!0}),l(o);var a=e(o,4);r(a,()=>({"--langtag-color":"red"})),n(a.lastChild,{get code(){return t["./samples/css.md"]},langtag:!0}),l(a);var s=e(a,4);r(s,()=>({"--langtag-color":"red"})),n(s.lastChild,{get code(){return t["./samples/typescript.md"]},langtag:!0}),l(s);var m=e(s,4);n(m,{get code(){return t["./samples/python.md"]}});var c=e(m,4);n(c,{get code(){return t["./samples/rust.md"]}});var u=e(c,4);n(u,{get code(){return t["./samples/props.md"]}});var y=e(u,10);_(y,{get code(){return t["./samples/style-props.md"]}}),b(g,i),T()}export{U as component,J as universal};
