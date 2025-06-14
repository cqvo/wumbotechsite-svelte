<script lang="ts">
	import type { PageProps } from './$types';
	import Resume from '$lib/components/ui/Resume.svelte';
	let { data }: PageProps = $props();
	let { resumeData } = $derived(data);
</script>

<Resume {resumeData} />