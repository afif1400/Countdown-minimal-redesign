import { red } from '@material-ui/core/colors'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

// A custom theme for this app
let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f1ff39',
            yellow: '#f1ff39',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Inter',
            'Anton',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontFamily: 'Anton',
        },
        h2: { fontFamily: 'Anton', fontSize: '5rem' },
        h3: {
            fontSize: '3.5rem',
        },
    },
})

theme = responsiveFontSizes(theme)

export default theme
