<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	const { data } = $props();

	let mounted = $state(false); // ✅ this allows reactivity + mutation

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div in:fade={{ duration: 500 }} class="text-center">
		<h1 class="text-4xl font-bold mb-8 poppins-extrabold">📚 Markdown Reader</h1>
		<p class="text-xl mb-8 poppins-bold">Select a page from the sidebar to get started</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
			{#each data.pages as page}
				<a
					href="/{page.slug}"
					class="p-4 border border-gray-700 rounded-lg hover:border-blue-400 transition hover:scale-105 duration-250 poppins-bold"
				>
					<div class="font-semibold">{page.slug}</div>
				</a>
			{/each}
		</div>
	</div>
{/if}
