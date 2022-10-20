import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	position: 'relative',
	'&:hover': {
		'& > [role=tooltip]': {
			opacity: 1,
		},
	},
})

export const TooltipPopup = styled('div', {
	position: 'absolute',
	zIndex: 1000,
	minWidth: 180,
	height: 'calc(44px - 1.5rem)',
	backgroundColor: '$gray900',
	padding: '0.75rem 1rem',
	borderRadius: '$sm',
	top: '-50px',
	left: '50%',
	transform: 'translateX(-50%)',
	opacity: 0,

	boxShadow: '0 0 0 1px $colors$gray900, 0 4px 5px $colors$gray900',
})

export const TooltipContent = styled('div', {
	position: 'relative',
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',

	'&::after': {
		content: '',
		position: 'absolute',
		width: 0,
		height: 0,
		borderWidth: '10px',
		borderStyle: 'solid',
		borderColor: '$gray900 transparent transparent transparent',
		bottom: '-35px',
		left: '50%',
		right: '50%',
		transform: 'translateX(-50%)',
	},
})

export const TooltipArrow = styled('span', {})
