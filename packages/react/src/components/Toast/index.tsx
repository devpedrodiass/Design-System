import { X } from 'phosphor-react'
import React, { ComponentProps } from 'react'
import { Text } from '../Text'
import {
	StyledText,
	TitleContainer,
	ToastContainer,
	StyledButton,
} from './styles'

export function Toast({ title, description, variant, onClose }: ToastProps) {
	return (
		<ToastContainer variant={variant}>
			<TitleContainer>
				<Text size="lg">{title}</Text>
				<StyledButton
					onClick={onClose}
					variant={'tertiary'}
					size="sm"
					type="button"
				>
					<X size={24} />
				</StyledButton>
			</TitleContainer>
			<StyledText>{description}</StyledText>
		</ToastContainer>
	)
}

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
	title: string
	description: string
	onClose: () => void
}

Toast.displayName = 'Toast'
