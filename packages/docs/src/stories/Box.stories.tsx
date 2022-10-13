import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@pearl-ui/react'
import React from 'react'

export default {
	title: 'Components/Form/Box',
	component: Box,
	args: {
		children: (
			<>
				<Text>Testing this Element</Text>
			</>
		),
	},
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
