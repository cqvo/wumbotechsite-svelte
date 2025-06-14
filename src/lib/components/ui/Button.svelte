<script lang="ts" module>
	export const buttonSizeOptions = ['btn-sm', 'btn-base', 'btn-lg'] as const;
	export type ButtonSize = typeof buttonSizeOptions[number];

	export const buttonTypeOptions = ['button', 'submit', 'reset'] as const;
	export type ButtonType = typeof buttonTypeOptions[number];
</script>

<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { preset, type PresetColorType, type PresetColorOption, type PresetColorShade } from './PresetColors';

	type ButtonProps = {
		size: ButtonSize,
		color: string,
		colorType?: PresetColorType,
		colorOption?: PresetColorOption,
		colorShade?: PresetColorShade,
		disabled?: boolean,
	}

	let props = $props();

	let {
		children,
		type = 'button'
	}: HTMLButtonAttributes = $derived(props);

	let {
		colorType,
		colorOption,
		colorShade,
		size = 'btn-base',
		disabled = false
	}: ButtonProps = $derived(props);

	let presetColor = $derived.by(() => preset(colorType, colorOption, colorShade));

	let btnClasses = $derived(
		`btn ${presetColor} ${size}`
	);
</script>

<button
	type={type}
	class={btnClasses}
	{disabled}
>
	{@render children?.()}
</button>