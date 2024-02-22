<script>
	import '../app.pcss';
	import MetaTag from './utils/MetaTag.svelte';
	let { children } = $props();
</script>

<MetaTag />
<div
	class="mx-auto min-w-0 max-w-5xl flex-auto px-8 pb-20 md:static md:max-h-full md:overflow-visible"
>
	{@render children()}
</div>
