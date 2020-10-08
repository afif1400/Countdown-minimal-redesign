import { red } from '@material-ui/core/colors'
import { createMuiTheme, withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

// A custom theme for this app
const theme = createMuiTheme({
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
            'Open Sans',
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

export const PrimaryTextField = withStyles((theme) => ({
    root: {
        '& label.Mui-focused': {
            color: 'black',
            fontWeight: 700,
        },

        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'black',
            },
            '&:hover fieldset': {
                boxShadow: '0 0  18px rgba(0, 0, 0,0.1)',
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'black',
            },
        },
        borderColor: 'black',
    },
}))(TextField)

export default theme
