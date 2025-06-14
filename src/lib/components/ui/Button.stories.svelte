<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button, { buttonSizeOptions, buttonTypeOptions } from './Button.svelte';
	import { presetColorOptions, presetColorShades, presetColorTypes } from './PresetColors';

	const { Story } = defineMeta({
		title: 'Components/Atoms/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			size: {
				control: { type: 'radio' },
				options: buttonSizeOptions,
			},
			type: {
				control: { type: 'radio' },
				options: buttonTypeOptions,
			},
			colorType: {
				control: { type: 'radio' },
				options: presetColorTypes
			},
			colorOption: {
				control: { type: 'radio' },
				options: presetColorOptions
			},
			colorShade: {
				control: { type: 'radio' },
				options: presetColorShades
			}
		},
		args: {
			type: 'button',
			size: 'btn-base',
			disabled: false,
		},
	});
</script>

<Story name="Primary" args={{
}}>
	Primary
</Story>

<Story name="Secondary" args={{
	color: 'preset-tonal-primary'
}}>
	Secondary
</Story>

<Story name="Outline" args={{
	color: 'preset-outlined-primary-500'
}}>
	Outline
</Story>