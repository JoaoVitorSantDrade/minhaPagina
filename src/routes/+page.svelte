<script>
	import ProjectCard from '$lib/components/projectCard.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	injectSpeedInsights();
	import PlaceholderCard from '$lib/components/placeholderCard.svelte';
	export let data;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 py-2">
	{#await data.projects}
		{#each Array(3) as _}
			<PlaceholderCard />
		{/each}
	{:then projects}
		{#each Array(Math.min(3, projects.length)) as _, i}
			<ProjectCard projeto={projects[i].project} tech={projects[i].technologies}></ProjectCard>
		{/each}
	{:catch error}
		{#each Array(2) as _}
			<div>Erro {error}</div>
		{/each}
	{/await}
</div>
