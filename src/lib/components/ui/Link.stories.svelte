<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Link from './Link.svelte';

	const { Story } = defineMeta({
		title: 'Components/Atoms/Link',
		component: Link,
	});
</script>

<Story name="Simple" args={{
	href: 'https://www.google.com'
}}>
	Simple Link
</Story>

<Story name="Button" args={{
	href: 'https://www.google.com',
	type: 'button',
	disabled: false
}}>
	Button Link
</Story>