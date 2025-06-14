export const presetColorTypes = [
	'filled', 'tonal', 'outlined',
] as const;
export type PresetColorType = typeof presetColorTypes[number];

export const presetColorOptions = [
	'primary', 'secondary', 'tertiary',
	'success', 'warning', 'error',
] as const;
export type PresetColorOption = typeof presetColorOptions[number];

export const presetColorShades = [
	'950-50', '900-100', '800-200',
	'700-300', '600-400', '500',
	'400-600', '300-700', '200-800',
	'100-900', '50-950',
] as const;
export type PresetColorShade = typeof presetColorShades[number];

export const preset = (
	type: PresetColorType = 'filled',
	color: PresetColorOption = 'primary',
	shade: PresetColorShade = '500'
): string => {
	const result = `preset-${type}-${color}`;
	if (type !== 'tonal') {
		return result.concat(`-${shade}`)
	}
	return result;
}