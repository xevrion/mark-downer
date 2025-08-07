<script>
	import '../app.css';
	const { children, data } = $props();
	import favicon from '$lib/assets/favicon.svg';
</script>

<svelte:head>
	<link rel="shortcut icon" href="$lib/assets/favicon.svg">
	
</svelte:head>


<div class="flex min-h-screen dark bg-black text-white ">
	<aside class="w-60 border-r border-gray-800 p-4 overflow-y-auto">
		<a href='/' class="text-xl font-bold mb-4 poppins-semibold hover:text-blue-500 duration-250 ">📚 All Notes</a>
		<ul class="space-y-2 mt-4">
			{#each data.pages as page}
				<li class="transition hover:scale-105 justify-center">
					<a href="/{page.slug}" class="hover:text-blue-400 duration-250 poppins-medium">
						{page.slug}
					</a>
				</li>
			{/each}
		</ul>
	</aside>

	<main class="flex-1 prose dark:prose-invert max-w-3xl mx-auto p-6 sm:p-8">
		{@render children()}
	</main>
</div>