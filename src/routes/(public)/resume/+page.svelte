<script lang="ts">
	import type { PageProps } from './$types';
	import Resume from '$lib/components/ui/Resume.svelte';
	let { data }: PageProps = $props();
	let { resumeData } = $derived(data);
	$inspect(resumeData);
</script>

{#await resumeData}
	<p>await</p>
	<p>{JSON.stringify(resumeData)}</p>
{:then value}
	<p>then</p>
	<p>{JSON.stringify(value)}</p>
<!--	<Resume resumeData={value} />-->
{:catch error}
	{error.message}
{/await}