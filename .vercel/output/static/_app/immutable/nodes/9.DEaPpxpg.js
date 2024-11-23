import{a as u,t as b}from"../chunks/disclose-version.DrDYUaWN.js";import{s as t,f as v,p as _,a as f,r as c}from"../chunks/runtime.B-swgO6H.js";import{c as m}from"../chunks/css-props.C2671Y2D.js";import{H as r}from"../chunks/Highlight.YoLsuBD8.js";import{t as n}from"../chunks/typescript.D7mGh5x8.js";const L=()=>({pageMetaTags:{title:"Line Numbers | Svelte Rune Highlight",description:"Syntax highlight component with line numbers for Svelte Runes.",og:{title:"Line Numbers | Svelte Rune Highlight",description:"Syntax highlight component with line numbers for Svelte Runes.",image:"https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=Line%20Numbers"},twitter:{title:"Line Numbers | Svelte Rune Highlight",description:"Syntax highlight component with line numbers for Svelte Runes.",image:"https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=Line%20Numbers"}}}),C=Object.freeze(Object.defineProperty({__proto__:null,load:L},Symbol.toStringTag,{value:"Module"})),w=`<Highlight 
  language={typescript} 
  code={test1} 
  numberLine
/>
<Avatar src="/images/profile-picture-3.webp" dot={{ placement: 'top-right', color: 'red' }} rounded /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right', color: 'green' }} /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} rounded />`,A=`<Highlight 
  language={typescript} 
  code={test2} 
  hideBorder 
  numberLine
/>
<Avatar src="/images/profile-picture-3.webp" dot={{ placement: 'top-right', color: 'red' }} rounded /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right', color: 'green' }} /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} rounded />`,y=`<Highlight 
  language={typescript} 
  code={test3} 
  wrapLines 
  numberLine
/>
<Avatar src="/images/profile-picture-3.webp" dot={{ placement: 'top-right', color: 'red' }} rounded /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right', color: 'green' }} /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} rounded />`,H=`<Highlight 
  language={typescript} 
  code={test4} 
  startingLineNumber={42} 
  numberLine
/>
<Avatar src="/images/profile-picture-3.webp" dot={{ placement: 'top-right', color: 'red' }} rounded /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right', color: 'green' }} /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} rounded />`,S=`<Highlight
  language={typescript}
  code={modules['./samples/sample-5.svelte'] as string}
  highlightedLines={[2, 4]}
  --highlighted-background="#666"
  numberLine
/>
<Avatar src="/images/profile-picture-3.webp" dot={{ placement: 'top-right', color: 'red' }} rounded /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right', color: 'green' }} /> 
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} rounded />`,N=`<Highlight
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
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} rounded />`;var k=b(`<h1>Line Numbers</h1> <p>The Highlight component has the option to add line numbers. See the following
  examples.</p> <h2>Number Lines</h2> <p>Add <code>numberLine</code> props to add line numbers.</p> <!> <h2>Hide Border</h2> <p>Add <code>hideBorder</code> props to hide the border.</p> <!> <h2>Wraped Lines</h2> <p>Add <code>wrapLines</code> props to wrap lines.</p> <!> <h2>Starting Line Number</h2> <p>Use the <code>startingLineNumber</code> props to set the start line number.</p> <!> <h2>Highlighted Lines and Highlighted Background</h2> <p>Use the <code>highlightedLines</code> and <code>highlightedBackground</code> props to highlight lines.</p> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <h2>Custom styles</h2> <p>Use the <code>--line-number-color</code> , <code>--border-color</code> , <code>--padding-left</code> , <code>--padding-right</code> , and <code>--highlighted-background</code> props to customize the styles.</p> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>`,1);function M(a,h){f(h,!0);const e=Object.assign({"./md/sample-1.md":w,"./md/sample-2.md":A,"./md/sample-3.md":y,"./md/sample-4.md":H,"./md/sample-5.md":S,"./md/sample-6.md":N});var p=k(),d=t(v(p),8);r(d,{language:n,get code(){return e["./md/sample-1.md"]},numberLine:!0});var s=t(d,6);r(s,{language:n,get code(){return e["./md/sample-2.md"]},hideBorder:!0,numberLine:!0});var l=t(s,6);r(l,{language:n,get code(){return e["./md/sample-3.md"]},wrapLines:!0,numberLine:!0});var g=t(l,6);r(g,{language:n,get code(){return e["./md/sample-4.md"]},startingLineNumber:42,numberLine:!0});var i=t(g,6);m(i,()=>({"--highlighted-background":"#666"})),r(i.lastChild,{language:n,get code(){return e["./md/sample-5.md"]},highlightedLines:[2,4],numberLine:!0}),c(i);var o=t(i,6);m(o,()=>({"--line-number-color":"pink","--border-color":"rgba(25, 155, 55, 1)","--padding-left":"1em","--padding-right":"2em","--highlighted-background":"#6e6e6e"})),r(o.lastChild,{language:n,get code(){return e["./md/sample-6.md"]},highlightedLines:[1,3],numberLine:!0}),c(o),u(a,p),_()}export{M as component,C as universal};
