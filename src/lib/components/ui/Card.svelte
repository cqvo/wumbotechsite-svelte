<script lang="ts">
	let { children } = $props();
</script>

<div class="card w-full max-w-md preset-filled-surface-100-900 p-4 text-center">
	{@render children()}
</div>