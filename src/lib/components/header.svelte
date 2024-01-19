<script>
	import { getContext } from 'svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import brazilFlag from '$lib/assets/flags/brazil.svg';
	import usFlag from '$lib/assets/flags/us.svg';
	const i18n = getContext('i18n');
</script>

<header class="px-60 flex flex-rox justify-between bg-tertiary-900 bg-opacity-30 shadow-xl">
	<div class="flex flex-row p-4 gap-4 items-center">
		<button
			class="btn px-4 h-10 hover:variant-outline"
			aria-label={$i18n.t('navbar.flags.brazil')}
			on:click={() => $i18n.changeLanguage('pt_br')}
		>
			<img src={brazilFlag} height="20px" width="30px" alt="Brasil" />
		</button>
		<button
			class="btn px-4 h-10 hover:variant-outline"
			aria-label={$i18n.t('navbar.flags.us')}
			on:click={() => $i18n.changeLanguage('en')}
			><img src={usFlag} height="20px" width="30px" alt="United States" />
		</button>
	</div>
	<div class="flex flex-row p-4 gap-8 items-center">
		<a class="btn hover:variant-ghost-primary font-semibold" href="/">{$i18n.t('navbar.home')}</a>
		<a class="btn hover:variant-ghost-primary font-semibold" href="/about"
			>{$i18n.t('navbar.about')}</a
		>
		<a class="btn hover:variant-ghost-primary font-semibold" href="/portfolio"
			>{$i18n.t('navbar.portfolio')}</a
		>
		<LightSwitch />
	</div>
</header>
