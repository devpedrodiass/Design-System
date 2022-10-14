import type { StoryObj, Meta } from '@storybook/react'
import { Text, Box, MultiStep, MultiStepProps } from '@pearl-ui/react'
import React from 'react'

export default {
	title: 'Components/Form/MultiStep',
	component: MultiStep,
	args: {
		size: 4,
		currentStep: 1,
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
				{Story()}
			</Box>
		),
	],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
	args: {
		currentStep: 4,
	},
}
