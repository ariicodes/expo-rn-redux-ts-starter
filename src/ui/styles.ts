import { StyleSheet } from 'react-native';
import { colors, spacing, radii } from './tokens';

export const s = StyleSheet.create({
	screen: { flex: 1, backgroundColor: colors.bg, padding: spacing.xl },
	title: { fontSize: 22, fontWeight: '700', color: colors.text },
	text: { fontSize: 16, color: colors.text },
	sub: { fontSize: 14, color: colors.sub },
	input: {
		backgroundColor: colors.card,
		padding: spacing.md,
		borderRadius: radii.md,
		borderWidth: 1,
		borderColor: colors.border,
	},
	card: {
		backgroundColor: colors.card,
		padding: spacing.md,
		borderRadius: radii.md,
		borderWidth: 1,
		borderColor: colors.border,
	},
	danger: { color: colors.danger, fontWeight: '600' },
});
