import { colors, fontSizes, fonts, fontWeights, lineHeights, radii, space } from '@pearl-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	createTheme,
	theme,
	config
} = createStitches({
	themeMap: {
		...defaultThemeMap,
		height: 'space',
		width: 'space',
	},
	theme: {
		colors,
		fontSizes,
		fontWeights,
		fonts,
		lineHeights,
		radii,
		space
	},
})