import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

// A custom theme for this app
const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: `#ffffff`,
      // main: `#6E357E`,
      mainGradient:
        'linear-gradient(256.5deg, #D82644 -6.61%, #6E357E 112.39%)',
    },
    // secondary: {
    //   main: `#ffffff`,
    // },
    //   // main: `#D82644`,
    // },
    // error: {
    //   main: colors.red.A400,
    // },
    // background: {
    //   default: `#fff`,
    // },
    // text: {
    //   primary: `#ffffff`,
    //   secondary: `#ffffff`,
    //   //   disabled: `rgba(255, 255, 255, 0.5)`,
    //   //   hint: `rgba(255, 255, 255, 0.5)`,
    //   //   icon: `rgba(255, 255, 255, 0.5)`,
    // },
    // divider: `rgba(255, 255, 255, 0.12)`,
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontSize: 16,
    h1: {
      fontSize: '1.875em',
      fontWeight: 'bolder',
    },
    h2: {
      fontSize: '1.875em',
      fontWeight: 'bolder',
    },
    h3: {
      fontSize: '1.17em',
      fontWeight: 'bolder',
    },
    h4: {
      fontSize: '1em',
      fontWeight: 'bolder',
    },
    h5: {
      fontSize: '.83em',
      fontWeight: 'bolder',
    },
    h6: {
      fontSize: '.67em',
      fontWeight: 'bolder',
    },
    subtitle1: {
      fontSize: '1em',
    },
    body1: {
      fontSize: '0.9em',
    },
  },
  // overrides: {
  //   MuiPaper: {
  //     root: {
  //       // background: 'linear-gradient(333.26deg, #D82644 2.15%, #6E357E 85.74%)',
  //       // color: '#393E46',
  //       // color: '#fff',
  //     },
  //   },
  // },
})

const theme = responsiveFontSizes(myTheme)

export default theme
