<script>
	import ProjectCard from '$lib/components/projectCard.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	injectSpeedInsights();
	import { getContext } from 'svelte';
	import PlaceholderCard from '$lib/components/placeholderCard.svelte';
	export let data;
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-16 py-2">
	{#await data.streamed.projects}
		{#each Array(6) as _, i}
			<PlaceholderCard />
		{/each}
	{:then projects}
		{#each projects as project, i}
			<ProjectCard projeto={project.project} tech={project.technologies}></ProjectCard>
		{/each}
	{/await}
</div>
