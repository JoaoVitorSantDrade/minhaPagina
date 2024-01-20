<script>
	import ProjectCard from '$lib/components/projectCard.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	//injectSpeedInsights();
	import PlaceholderCard from '$lib/components/placeholderCard.svelte';
	export let data;
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-16 py-2">
	{#await data.projects}
		{#each Array(2) as _}
			{import.meta.env.MSG}
			<PlaceholderCard />
		{/each}
	{:then projects}
		{#each Array(Math.min(3, projects.length)) as _, i}
			{import.meta.env.VITE_MSG}
			<ProjectCard projeto={projects[i].project} tech={projects[i].technologies}></ProjectCard>
		{/each}
	{/await}
</div>
