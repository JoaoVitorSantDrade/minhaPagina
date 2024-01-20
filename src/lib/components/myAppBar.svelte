<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { BarsOutline } from 'flowbite-svelte-icons';
</script>

<!--Mobile-->
<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<BarsOutline />
	</svelte:fragment>
	(title)
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>
