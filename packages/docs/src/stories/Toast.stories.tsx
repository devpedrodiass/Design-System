import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@pearl-ui/react'
import React from 'react'

export default {
	title: 'Components/Data Display/Toast',
	component: Toast,
	args: {
		title: 'This is a Toast',
		description: 'Description',
	},
	argTypes: {
		title: {
			control: {
				type: 'text',
			},
		},
		description: {
			control: {
				type: 'text',
			},
		},
		variant: {
			options: ['default', 'success', 'warning', 'error'],
			control: {
				type: 'inline-radio',
			},
		},
		onClose: {
			action: 'clicked',
		},
	},
} as Meta<ToastProps>

export const Default: StoryObj<ToastProps> = {}
export const Success: StoryObj<ToastProps> = {
	args: {
		variant: 'success',
	},
}
export const Warning: StoryObj<ToastProps> = {
	args: {
		variant: 'warning',
	},
}
export const Error: StoryObj<ToastProps> = {
	args: {
		variant: 'error',
	},
}
