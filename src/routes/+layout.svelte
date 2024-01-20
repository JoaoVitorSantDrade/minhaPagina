<script lang="ts">
	import getI18nStore from '$lib/i18n';
	import { setContext } from 'svelte';
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';

	import Header from '$lib/components/header.svelte';
	import MyAppBar from '$lib/components/myAppBar.svelte';

	setContext('i18n', getI18nStore());
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	let innerWidth: number;

	$: mobileCodition = innerWidth < 768;
</script>

<svelte:window bind:innerWidth />

<AppShell regionPage="pt-20 xl:px-12 2xl:px-32">
	<svelte:fragment slot="header">
		{#await innerWidth then}
			{#if mobileCodition}
				<MyAppBar />
			{:else}
				<Header />
			{/if}
		{:catch}
			<Header />
		{/await}
	</svelte:fragment>
	<svelte:fragment><slot /></svelte:fragment>
</AppShell>
