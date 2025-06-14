<script>
	import { page } from '$app/state';

	let { status, error: { message } } = $derived(page);
</script>

{status} {message}