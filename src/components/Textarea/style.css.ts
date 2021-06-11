import { style } from '@vanilla-extract/css'

export const textarea = style({
  fontSize: 'inherit',
  fontFamily: 'var(--font-serif)',
  marginBottom: '0.5em',
  padding: '0.4rem',
  boxSizing: 'border-box',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '90%',
  resize: 'vertical',
  overflowX: 'hidden',
  minHeight: '25vh',
  '@media': {
    '(prefers-color-scheme: dark)': {
      background: '#0000',
      borderColor: '#3b3b3b',
      color: '#eee',
      ':focus': {
        outlineColor: '#ccc',
      },
    },
    'screen and (max-width: 640px)': {
      resize: 'none',
    },
  },
})
