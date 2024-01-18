<script lang="ts">
	import '../app.postcss';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>


<ol class="breadcrumb">
	<li class="crumb"><a class="anchor" href="/about">Sobre mim</a></li>
</ol>

<slot />
