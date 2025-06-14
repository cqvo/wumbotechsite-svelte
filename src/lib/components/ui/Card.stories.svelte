<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Card from './Card.svelte';

	const { Story } = defineMeta({
		title: 'Components/Atoms/Card',
		component: Card
	})
</script>

<Story name="Simple">Simple Card</Story>