<script lang="ts">
	import getI18nStore from '$lib/i18n';
	import { setContext } from 'svelte';
	setContext('i18n', getI18nStore());
	import '../app.postcss';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import Header from '$lib/components/header.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
