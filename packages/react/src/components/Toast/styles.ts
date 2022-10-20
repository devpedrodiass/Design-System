import { styled } from "../../styles";
import { Box } from "../Box";
import { Button } from "../Button";
import { Text } from "../Text";

export const ToastContainer = styled(Box, {
	position: 'fixed',
	bottom: '10px',
	right: '10px',
	zIndex: '9999',
	minWidth: 180,
	maxHeight: 82,

	variants: {
		variant: {
			default: {
				border: '2px solid $gray800',
			},
			success: {
				border: '2px solid $pearl500',
			},
			warning: {
				border: '2px solid $yellow300',
			},
			error: {
				border: '2px solid $red300',
			}
		}
	},

	defaultVariant: {
		variant: 'default'
	}
})

export const TitleContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: '0.5rem',
	color: '$white',
	p: {
		fontWeight: 'bold',
	},
	svg: {
		color: '$gray200'
	}
})

export const StyledButton = styled(Button, {
	minWidth: 30,
	padding: '0px 0px',
})

export const StyledText = styled(Text, {
	color: '$gray400'
})