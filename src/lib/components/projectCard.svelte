<script>
	import { getContext } from 'svelte';
	import ButtonExterior from '$lib/components/buttonExterior.svelte';
	const i18n = getContext('i18n');

	export let titulo = '';
	export let descricao = '';
	export let data = '';
	export let botaoLink = '';
	export let botaoTexto = '';
	export let className = ' ';
</script>

<div class="mx-8 relative {className}">
	<div class="card p-4 card-hover">
		<header class="card-header relative">
			<h1 class="text-4xl py-1 font-bold whitespace-nowrap truncate">{titulo}</h1>
			<div class="absolute top-0 -right-20 flex flex-col gap-2 items-start truncate">
				<ButtonExterior href={botaoLink}>{botaoTexto}</ButtonExterior>
				<ButtonExterior href={botaoLink}>SvelteKit</ButtonExterior>
				<ButtonExterior href={botaoLink}>Skeleton UI</ButtonExterior>
				<ButtonExterior href={botaoLink}>Tailwind</ButtonExterior>
				<ButtonExterior href={botaoLink}>i18n</ButtonExterior>
			</div>
		</header>
		<section class="p-4">
			<p class="text-xl">{descricao}</p>
		</section>
		<footer class="card-footer flex justify-between items-center">
			<p class="text-sm">{data}</p>
			<a class="anchor" href="portfolio/{titulo}">{$i18n.t('portfolio.card.about')}</a>
		</footer>
	</div>
</div>
