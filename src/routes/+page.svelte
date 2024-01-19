<script>
	import ProjectCard from '$lib/components/projectCard.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	injectSpeedInsights();
	import { getContext } from 'svelte';
	const i18n = getContext('i18n');
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-16 py-2">
	{#each { length: 3 } as _, i}
		<ProjectCard
			className=""
			botaoLink="http://www.google.com"
			botaoTexto="Github"
			data="18/01/2024"
			descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl"
			titulo="Projeto {i + 1}"
		></ProjectCard>
	{/each}
</div>
