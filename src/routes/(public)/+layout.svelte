<script lang="ts">
	import type { LayoutProps } from './$types';
	import Header from '$lib/components/ui/Header.svelte';

	let { children }: LayoutProps = $props();
</script>

<Header />

{@render children()}