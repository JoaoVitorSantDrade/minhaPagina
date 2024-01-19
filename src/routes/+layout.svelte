<script lang="ts">
	import getI18nStore from '$lib/i18n';
	import { setContext } from 'svelte';
	setContext('i18n', getI18nStore());
	import '../app.postcss';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { SpeedInsights } from '@vercel/speed-insights/next';

	import Header from '$lib/components/header.svelte';
</script>

<AppShell regionPage="pt-20 px-12 2xl:px-32">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<svelte:fragment><slot /></svelte:fragment>
</AppShell>
