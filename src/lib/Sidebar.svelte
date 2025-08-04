<script>
  export let filesByFolder = {};
</script>

<aside class="w-64 p-4 bg-[#1e293b] text-slate-200 h-screen overflow-y-auto">
  {#each Object.entries(filesByFolder) as [folder, files]}
    <h2 class="text-lg font-semibold mt-4 mb-2">{folder}</h2>
    <ul class="space-y-1">
      {#each files as file}
        <li>
          <a
            class="hover:underline text-blue-400"
            href={`/view/${folder}/${file.slug}`}
          >
            {file.title}
          </a>
        </li>
      {/each}
    </ul>
  {/each}
</aside>
