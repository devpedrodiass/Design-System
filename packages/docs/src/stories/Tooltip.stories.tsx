import type { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@pearl-ui/react'
import React from 'react'

export default {
	title: 'Components/Tooltip',
	component: Tooltip,
	args: {
		text: 'This is a Tooltip',
		children: <Button>Hover me</Button>,
	},
	argTypes: {
		children: {
			control: {
				type: 'null',
			},
		},
	},
	decorators: [
		(Story) => (
			<Box
				css={{
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{Story()}
			</Box>
		),
	],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
