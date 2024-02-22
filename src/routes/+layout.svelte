<script>
	import '../app.pcss';
	let { children } = $props();
</script>

<div
	class="mx-auto min-w-0 max-w-5xl flex-auto px-8 pb-20 md:static md:max-h-full md:overflow-visible"
>
	{@render children()}
</div>
