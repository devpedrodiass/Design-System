import type { StoryObj, Meta } from '@storybook/react'
import { Text, Box, TextArea, TextAreaProps } from '@pearl-ui/react'
import React from 'react'

export default {
	title: 'Components/Form/Text Area',
	component: TextArea,
	args: {
		placeholder: 'Type a description',
	},
	decorators: [
		(Story) => (
			<Box
				as="label"
				css={{
					display: 'flex',
					flexDirection: 'column',
					gap: '$2',
				}}
			>
				<Text size="sm">Description</Text>
				{Story()}
			</Box>
		),
	],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
	args: {
		disabled: true,
	},
}
