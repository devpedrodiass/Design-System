import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@pearl-ui/react'
import React from 'react'

export default {
	title: 'Typography/Text',
	component: Text,
	args: {
		children: 'This is a Text Component',
	},
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
	args: {
		children: 'Strong Text',
		as: 'strong',
	},
}
