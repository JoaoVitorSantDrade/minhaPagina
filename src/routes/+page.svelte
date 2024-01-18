<script>
	import { getContext } from 'svelte';

	const i18n = getContext('i18n');
</script>

<div>
	<h1>{$i18n.t('key')}</h1>
</div>
