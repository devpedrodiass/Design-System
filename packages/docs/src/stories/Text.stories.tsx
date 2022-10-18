import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@pearl-ui/react'
import React from 'react'

export default {
	title: 'Typography/Text',
	component: Text,
	args: {
		children: 'This is a Text Component',
		size: 'md',
	},
	argTypes: {
		size: {
			options: [
				'xxs',
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
				'2xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'8xl',
				'9xl',
			],
			control: {
				type: 'inline-radio',
			},
		},
	},
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
	args: {
		children: 'Strong Text',
		as: 'strong',
	},
}
