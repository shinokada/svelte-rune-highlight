import { a5 as css_props, S as pop, Q as push } from "../../../chunks/index.js";
import "../../../chunks/Highlight.js";
import { H as HighlightSvelte } from "../../../chunks/HighlightSvelte.js";
import { H as HighlightCompo } from "../../../chunks/HighlightCompo.js";
const __vite_glob_0_0 = `<HighlightSvelte code={modules['./samples/sample-1.svelte'] as string} langtag --langtag-color="aqua" />`;
const __vite_glob_0_1 = `<HighlightSvelte code={modules['./samples/sample-2.svelte'] as string} langtag --langtag-color="red" />`;
const __vite_glob_0_2 = "code?: string;\nlangtag?: boolean;\npreClass?: string;\n";
const __vite_glob_0_3 = "<script lang=\"ts\">\n  import { HighlightSvelte } from 'svelte-rune-highlight';\n  const code2 = `<button on:click={() => { console.log(0); }}>Increment {count}</button>`;\n<\/script>\n\n<HighlightSvelte code={code2} />\n\n";
const __vite_glob_0_4 = `<script>
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers } from 'flowbite-svelte';
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
</Navbar>`;
const __vite_glob_0_5 = "--langtag-top = 0:                Top position of the langtag\n--langtag-right =  0:             Right position of the langtag\n--langtag-background =	inherit:  Background color of the langtag\n--langtag-color = inherit:        Text color of the langtag\n--langtag-border-radius = 0:      Border radius of the langtag\n--langtag-padding = 1em:          Padding of the langtag";
function _page($$payload, $$props) {
  push();
  const modules = /* @__PURE__ */ Object.assign({
    "./samples/highlight/example-1.md": __vite_glob_0_0,
    "./samples/highlight/example-2.md": __vite_glob_0_1,
    "./samples/props.md": __vite_glob_0_2,
    "./samples/sample-1.md": __vite_glob_0_3,
    "./samples/sample-2.md": __vite_glob_0_4,
    "./samples/style-props.md": __vite_glob_0_5
  });
  $$payload.out += `<h1>HighlightSvelte Component</h1> <h2>Example 1</h2> <p>Use the HighlightSvelte component to highlight your Svelte code. The
  HighlightSvelte component requires code props. <code>langtag</code> and <code>--langtag-color</code> are optional.</p> `;
  HighlightCompo($$payload, {
    code: modules["./samples/highlight/example-1.md"]
  });
  $$payload.out += `<!----> <p>Here's the resulting output from the code:</p> `;
  css_props($$payload, true, { "--langtag-color": "aqua" }, () => {
    HighlightSvelte($$payload, {
      code: modules["./samples/sample-1.md"],
      langtag: true
    });
  });
  $$payload.out += ` <h2>Example 2</h2> <p>Using different <code>--langtag-color</code> .</p> `;
  HighlightCompo($$payload, {
    code: modules["./samples/highlight/example-2.md"]
  });
  $$payload.out += `<!----> <p>The code creates this output:</p> `;
  css_props($$payload, true, { "--langtag-color": "red" }, () => {
    HighlightSvelte($$payload, {
      code: modules["./samples/sample-2.md"],
      langtag: true
    });
  });
  $$payload.out += ` <h2>Props</h2> <p>HighlightSvelte component has the following props:</p> `;
  HighlightCompo($$payload, { code: modules["./samples/props.md"] });
  $$payload.out += `<!----> <h2>Language tag style</h2> <p>Customize the language tag background, color, and border-radius using style
  props.</p> `;
  HighlightCompo($$payload, { code: modules["./samples/style-props.md"] });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
