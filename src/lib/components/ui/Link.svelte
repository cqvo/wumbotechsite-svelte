<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type AnchorProps = {
		type: 'link' | 'button',
		size?: 'btn-sm' | 'btn-base' | 'btn-lg',
		color?: string,
		disabled?: boolean,
	}

	let props = $props();

	let {
		children,
		href,
		target
	}: HTMLAnchorAttributes = $derived(props);

	let {
		type = 'link',
		color = 'preset-filled-primary-500',
		size = 'btn-base',
		disabled = false,
	}: AnchorProps = $derived(props);

	let anchorClasses = $derived(
		type === 'link' ? `anchor` : `btn ${color} ${size} ${disabled ? 'disabled' : ''}`
	);
</script>

<a
	{href}
	{target}
	class={anchorClasses}
>
	{@render children?.()}
</a>