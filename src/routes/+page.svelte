<script lang="ts">
	import { List, Li, A, Banner } from 'svelte-5-ui-lib';
	import HighlightCompo from './utils/HighlightCompo.svelte';
	import { CheckOutline } from 'flowbite-svelte-icons';
	// import { clickToCopy } from './utils/helpers';
	const modules = import.meta.glob('./md/*.md', {
		query: '?raw',
		import: 'default',
		eager: true
	});
	import { removeHyphensAndCapitalize } from './utils/helpers';
	/*eslint no-undef: "off"*/
	const name = __NAME__;
	const version = __VERSION__;
	const svelteVersion = __SVELTE_VERSION__;
	const svelteKitVersion = __SVELTEKIT_VERSION__;
	const viteVersion = __VITE_VERSION__;
	const highlightjsVersion = __HIGHLIGHTJSVERSION__;
</script>

<Banner id="default-banner" dismissable={false} divClass="p-2">
	<p class="flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100">
		To Keep It Going, Please Show Your Love.
		<a href="https://ko-fi.com/Z8Z2CHALG" target="_blank">
			<img
				height="42"
				style="border:0px;height:42px;"
				src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
				alt="Buy Me a Coffee at ko-fi.com"
			/>
		</a>
	</p>
</Banner>

<h1>
	{removeHyphensAndCapitalize(name)}: v{version}
</h1>

<p>
	Syntax highlighting for Svelte 5 Runes using <a
		class="dark:text-primary-500 hover:underline"
		href="https://github.com/highlightjs/highlight.js"
	>
		highlight.js
	</a>
	.
</p>

<h2>Installation</h2>

<HighlightCompo code={modules['./md/installation.md'] as string} />

<h2>Components</h2>

<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
	<Li icon class="gap-3">
		<CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
		<A href="/highlight">Highlight</A>
	</Li>
	<Li icon class="gap-3">
		<CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
		<A href="/auto">HighlightAuto</A>
	</Li>
	<Li icon class="gap-3">
		<CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
		<A href="/svelte">HighlightSvelte</A>
	</Li>
	<Li icon class="gap-3">
		<CheckOutline class="h-5 w-5 text-green-500 dark:text-green-400" />
		<A href="/code-block-switcher">Line numbers</A>
	</Li>
</List>

<h2>Credit</h2>
<p>
	<a
		class="dark:text-primary-500 hover:underline"
		href="https://www.npmjs.com/package/svelte-highlight"
	>
		Svelte-Highlight
	</a>
</p>

<h2>Technical Details of this website</h2>
<ul>
	<li>Svelte: {svelteVersion}</li>
	<li>SvelteKit: {svelteKitVersion}</li>
	<li>Vite: {viteVersion}</li>
	<li>highlight.js: {highlightjsVersion}</li>
</ul>
