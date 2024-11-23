import{a as d,t as u}from"../chunks/disclose-version.DrDYUaWN.js";import{s as t,f as _,p as f,a as S,r as p}from"../chunks/runtime.B-swgO6H.js";import{c as h}from"../chunks/css-props.C2671Y2D.js";import"../chunks/Highlight.YoLsuBD8.js";import{H as c}from"../chunks/HighlightSvelte.c-_dwP9L.js";import{H as o}from"../chunks/HighlightCompo.FOXMAKYO.js";const b=()=>({pageMetaTags:{title:"HighlightSvelte Component - Svelte Rune Highlight",description:"Syntax highlight component for Svelte Runes.",og:{title:"HighlightSvelte Component - Svelte Rune Highlight",description:"Syntax highlight component for Svelte Runes.",image:"https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=HighlightSvelte%20Component"},twitter:{title:"HighlightSvelte Component - Svelte Rune Highlight",description:"Syntax highlight component for Svelte Runes.",image:"https://open-graph-vercel.vercel.app/api/svelte-rune-highlight?title=HighlightSvelte%20Component"}}}),M=Object.freeze(Object.defineProperty({__proto__:null,load:b},Symbol.toStringTag,{value:"Module"})),H=`<HighlightSvelte code={modules['./samples/sample-1.svelte'] as string} langtag --langtag-color="aqua" />`,N=`<HighlightSvelte code={modules['./samples/sample-2.svelte'] as string} langtag --langtag-color="red" />`,y=`code?: string;
langtag?: boolean;
preClass?: string;
`,x=`<script lang="ts">
  import { HighlightSvelte } from 'svelte-rune-highlight';
  const code2 = \`<button on:click={() => { console.log(0); }}>Increment {count}</button>\`;
<\/script>

<HighlightSvelte code={code2} />

`,C=`<script>
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers } from 'svelte-5-ui-lib';
	let nav = uiHelpers();

	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		navStatus = nav.isOpen;
	});
<\/script>


<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="md">
	{#snippet brand()}
		<NavBrand siteName="Svelte 5">
			<img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
		</NavBrand>
	{/snippet}

	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/components/navbar">Navbar</NavLi>
		<NavLi href="/components/footer">Footer</NavLi>
	</NavUl>
</Navbar>`,w=`--langtag-top = 0:                Top position of the langtag
--langtag-right =  0:             Right position of the langtag
--langtag-background =	inherit:  Background color of the langtag
--langtag-color = inherit:        Text color of the langtag
--langtag-border-radius = 0:      Border radius of the langtag
--langtag-padding = 1em:          Padding of the langtag`;var L=u(`<h1>HighlightSvelte Component</h1> <h2>Example 1</h2> <p>Use the HighlightSvelte component to highlight your Svelte code. The
  HighlightSvelte component requires code props. <code>langtag</code> and <code>--langtag-color</code> are optional.</p> <!> <p>Here's the resulting output from the code:</p> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <h2>Example 2</h2> <p>Using different <code>--langtag-color</code> .</p> <!> <p>The code creates this output:</p> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <h2>Props</h2> <p>HighlightSvelte component has the following props:</p> <!> <h2>Language tag style</h2> <p>Customize the language tag background, color, and border-radius using style
  props.</p> <!>`,1);function P(l,m){S(m,!0);const e=Object.assign({"./samples/highlight/example-1.md":H,"./samples/highlight/example-2.md":N,"./samples/props.md":y,"./samples/sample-1.md":x,"./samples/sample-2.md":C,"./samples/style-props.md":w});var s=L(),g=t(_(s),6);o(g,{get code(){return e["./samples/highlight/example-1.md"]}});var a=t(g,4);h(a,()=>({"--langtag-color":"aqua"})),c(a.lastChild,{get code(){return e["./samples/sample-1.md"]},langtag:!0}),p(a);var i=t(a,6);o(i,{get code(){return e["./samples/highlight/example-2.md"]}});var n=t(i,4);h(n,()=>({"--langtag-color":"red"})),c(n.lastChild,{get code(){return e["./samples/sample-2.md"]},langtag:!0}),p(n);var r=t(n,6);o(r,{get code(){return e["./samples/props.md"]}});var v=t(r,6);o(v,{get code(){return e["./samples/style-props.md"]}}),d(l,s),f()}export{P as component,M as universal};
