import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@pearl-ui/react'
import React from 'react'

export default {
	title: 'Components/Data Display/Avatar',
	component: Avatar,
	args: {
		src: 'https://github.com/fariapv.png',
		alt: 'Image',
	},
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
	},
}
