<script>
	export let href = '/';
	export let className = ' ';
</script>

<a class="btn variant-glass-surface py-0 px-1 {className}" target="_blank" {href}><slot /></a>
