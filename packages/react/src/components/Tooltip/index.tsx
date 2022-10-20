import React from 'react'
import { Text } from '../Text'
import {
	TooltipArrow,
	TooltipContainer,
	TooltipContent,
	TooltipPopup,
} from './styles'

export interface TooltipProps {
	text: string
	children: React.ReactNode
}

export function Tooltip({ text, children }: TooltipProps) {
	return (
		<TooltipContainer>
			{children}
			<TooltipPopup role="tooltip">
				<TooltipContent>
					<Text>{text}</Text>
					<TooltipArrow />
				</TooltipContent>
			</TooltipPopup>
		</TooltipContainer>
	)
}

Tooltip.displayName = 'Tooltip'
