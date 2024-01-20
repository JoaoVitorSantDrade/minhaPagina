<script>
	import { getContext } from 'svelte';
	import PlaceholderCard from '$lib/components/placeholderCard.svelte';
	import ProjectCard from '$lib/components/projectCard.svelte';

	export let data;

	const i18n = getContext('i18n');
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-16 py-2">
	{#await data.streamed.projects}
		{#each Array(6) as _}
			<PlaceholderCard />
		{/each}
	{:then projects}
		{#each projects as project (project.project.id)}
			<ProjectCard projeto={project.project} tech={project.technologies}></ProjectCard>
		{/each}
	{/await}
</div>
