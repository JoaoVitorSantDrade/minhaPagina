<script lang="ts">
	import { getContext } from 'svelte';
	import ButtonExterior from '$lib/components/buttonExterior.svelte';
	import type { projects, technologies } from '$lib/db/schemas/project';

	const i18n = getContext('i18n');
	export let className: string = '';
	export let projeto: typeof projects.$inferSelect;
	export let tech: (typeof technologies.$inferSelect)[];
</script>

<div class="mx-8 relative {className}">
	<div class="card p-4 card-hover">
		<header class="card-header relative">
			<h1 class="text-4xl py-1 font-bold whitespace-nowrap truncate">{projeto.name}</h1>
			<div class="relative pt-2 top-0 flex flex-row gap-2 items-start grid-cols-3 overflow-auto">
				<ButtonExterior href={projeto.github}>Github</ButtonExterior>
				{#each tech as tech_stack (tech_stack.id)}
					<ButtonExterior href={tech_stack.link}>{tech_stack.name}</ButtonExterior>
				{/each}
			</div>
		</header>
		<section class="p-4">
			<p class="text-xl">{projeto.description}</p>
		</section>
		<footer class="card-footer flex justify-between items-center">
			<p class="text-sm">19/01/2024</p>
			<a class="anchor" href="portfolio/{projeto.name}">{$i18n.t('portfolio.card.about')}</a>
		</footer>
	</div>
</div>
