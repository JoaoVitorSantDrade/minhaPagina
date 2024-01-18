<script>
	import { getContext } from 'svelte';

	const i18n = getContext('i18n');
</script>

<header class="flex flex-rox justify-between">
	<div class="flex flex-row p-4 gap-4 items-center">
		<button
			class="btn px-4 h-10 hover:variant-outline"
			aria-label={$i18n.t('navbar.flags.brazil')}
			on:click={() => $i18n.changeLanguage('pt_br')}
		>
			<img src="./src/lib/assets/flags/brazil.svg" height="20px" width="30px" alt="Brasil" />
		</button>
		<button
			class="btn px-4 h-10 hover:variant-outline"
			aria-label={$i18n.t('navbar.flags.us')}
			on:click={() => $i18n.changeLanguage('en')}
			><img src="./src/lib/assets/flags/uk.svg" height="20px" width="30px" alt="United States" />
		</button>
	</div>
	<div class="flex flex-row p-4 gap-8 item">
		<a class="btn hover:variant-ghost-primary" href="/">{$i18n.t('navbar.home')}</a>

		<a class="btn hover:variant-ghost-primary" href="/about">{$i18n.t('navbar.about')}</a>

		<a class="btn hover:variant-ghost-primary" href="/portfolio">{$i18n.t('navbar.portfolio')}</a>
	</div>

	<div class="flex flex-row justify-around p-4 gap-4">
		<a class="btn px-0" target="_blank" href="https://github.com/JoaoVitorSantDrade"
			><kbd class="kbd">Github</kbd></a
		>
		<a
			class="btn px-0"
			target="_blank"
			href="https://www.linkedin.com/in/jo%C3%A3o-v%C3%ADtor-santos-de-andrade-5a244a18a/"
			><kbd class="kbd">Linkedin</kbd></a
		>
	</div>
</header>

<style>
	/* Add your header styles here */
</style>
