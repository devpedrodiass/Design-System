import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@pearl-ui/react'
import React from 'react'

export default {
	title: 'Typography/Heading',
	component: Heading,
	args: {
		children: 'This is a Heading Component',
	},
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
	args: {
		children: 'H1 Heading',
		as: 'h1',
	},
	parameters: {
		docs: {
			description: {
				story:
					'By default, heading is gonna be `h2` tag. You can change it by passing `as` prop.',
			},
		},
	},
}
