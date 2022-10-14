import type { StoryObj, Meta } from '@storybook/react'
import { Text, Box, Checkbox, CheckboxProps } from '@pearl-ui/react'
import React from 'react'

export default {
	title: 'Components/Form/Checkbox',
	component: Checkbox,
	decorators: [
		(Story) => (
			<Box
				as="label"
				css={{
					display: 'flex',
					flexDirection: 'row',
					gap: '$2',
				}}
			>
				{Story()}
				<Text size="sm">Accept the terms</Text>
			</Box>
		),
	],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Disabled: StoryObj<CheckboxProps> = {
	args: {
		disabled: true,
	},
}
