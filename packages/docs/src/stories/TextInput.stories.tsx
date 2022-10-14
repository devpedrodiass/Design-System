import type { StoryObj, Meta } from '@storybook/react'
import { Text, Box, TextInput, TextInputProps } from '@pearl-ui/react'
import React from 'react'

export default {
	title: 'Components/Form/Text Input',
	component: TextInput,
	args: {
		placeholder: 'Type your username',
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
				<Text size="sm">Username</Text>
				{Story()}
			</Box>
		),
	],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const WithPrefix: StoryObj<TextInputProps> = {
	args: {
		prefix: 'www.test.com/',
	},
}

export const Disabled: StoryObj<TextInputProps> = {
	args: {
		disabled: true,
	},
}
