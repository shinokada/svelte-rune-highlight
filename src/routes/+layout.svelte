<script lang="ts">
	import '../app.css';
	import { Runatics } from 'runatics';
	import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
	import { page } from '$app/stores';
	import Nav from './utils/Nav.svelte';
	import Footer from './utils/Footer.svelte';
	let { children, data } = $props();
	const analyticsId = data.ANALYTICS_ID;
	// meta tags
	let metaTags = $state(
		$page.data.pageMetaTags
			? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
			: data.layoutMetaTags
	);
	$effect(() => {
		metaTags = $page.data.pageMetaTags
			? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
			: data.layoutMetaTags;
	});
</script>

<Runatics {analyticsId} />
<RunesMetaTags {...metaTags} />

<Nav />
<div
	class="mx-auto max-w-5xl min-w-0 flex-auto p-8 pb-20 md:static md:max-h-full md:overflow-visible"
>
	{@render children()}
</div>
<Footer />
