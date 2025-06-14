<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
</script>

<header>
	<AppBar
		headlineClasses="sm:hidden"
		leadClasses="h4"
		centerClasses="hidden sm:block"
		trailClasses="items-center"
	>
		{#snippet lead()}
			WumboTech
		{/snippet}
		{#snippet trail()}
			<a class="anchor" href="/">Home</a>
			<a class="anchor" href="/about">About</a>
			<a class="anchor" href="/projects">Projects</a>
		{/snippet}
	</AppBar>
</header>