<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Layout from './+layout.svelte';
	import HomePage from './+page.svelte';
	// import AboutPage from './about/+page.svelte';

	const { Story } = defineMeta({
		title: 'Pages/Public',
		component: Layout,
	});
</script>

<Story name="Home">
	<HomePage />
</Story>

<!--<Story name="About">-->
<!--	<AboutPage />-->
<!--</Story>-->