import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const title = style({
  fontWeight: 500,
  fontVariationSettings: `'wght' 500`,
  fontSize: 'larger',
  color: '#000',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#eee',
    },
  },
})

export const description = style({
  color: '#000 !important',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#eee !important',
    },
  },
  textDecoration: 'none',
  ':focus': {
    outline: 'transparent'
  },
  '::before': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    content: `''`
  }
})

export const card = style({
  transition: 'box-shadow cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s, border cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s',
  padding: '1.55rem 1.3rem',
  borderRadius: '.25rem',
  border: '1px solid #ececec',
  background: vars.background.light.primary,
  textDecoration: 'none',
  position: 'relative',
  filter: `drop-shadow(1.5px 1.5px 3px #1c1c1c10)`,
  '::after': {
    transition: 'opacity cubic-bezier(0.455, 0.03, 0.515, 0.955) 150ms',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    content: `''`,
    zIndex: '-1',
    background: '#ff7aa2',
    opacity: 0,
  },
  ':hover': {
    borderColor: '#ffc2d4',
    boxShadow: `inset 0 0 0 .3rem #ffe0e9`
  },
  ':focus-within': {
    borderColor: '#ffc2d4',
    boxShadow: `inset 0 0 0 .3rem #ffe0e9`,
  },
  '@media': {
    'screen and (max-width: 640px)': {
      marginBottom: '.6rem',
      width: '100%',
    },
    '(prefers-color-scheme: dark)': {
      background: '#1e1e1e',
      borderColor: '#393939',
      filter: `drop-shadow(2px 2px 5px #1c1c1c)`,
      ':hover': {
        borderColor: '#1a1a1a',
        boxShadow: `inset 0 0 0 .3rem #ff9ebb`
      },
      ':focus-within': {
        borderColor: '#1a1a1a',
        boxShadow: `inset 0 0 0 .3rem #ff9ebb`
      },
    }
  },
  selectors: {
    '&:active::after': {
      opacity: 0.2
    }
  }
})
