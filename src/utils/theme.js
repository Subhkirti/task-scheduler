import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


// A custom theme for this app
const theme = createTheme({
  themeName: 'MM theme',
  spacing: 4,
  palette: {
    background: {
      default: '#1976d2',
      secondary: '#f0f0f0',
    },
    primary: {
      main: '#1976d2',
      light: '#f0f0f0',
    },
    secondary: {
      main: '#414141',
      light: '#579AFF',
    },
    grey: {
      50: '#90949c',
      100: '#dcdcdc',
      200: '#c7c7c7',
      300: '#aaaaaa',
      400: '#878787',
      500: '#3c3c3c',
      600: '#979797',
      700: '#f2f2f2',
      800: '#ececec',
      900: '#f4f4f4',
    },
    link: {
      main: '#CBE3FB',
    },
    error: {
      main: red.A400,
    },

    text: {
      primary: '#3c3c3c',
      secondary: '#878787',
    },
  },
  typography: {
    fontFamily: '"Lora", serif;',
    h1: {
      fontSize: '2rem',//32px
      fontWeight: 'bolder',
    },
    h2: {
      fontSize: '1.3rem',//28px
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5rem'//24px
    },
    h4: {
      fontSize: '1.25rem' //20px
    },
    h5: {
      fontSize: '1.125rem' //18px
    },
    h6: {
      fontSize: "1rem", //16px
      fontWeight: 600,
      lineHeight: '24px',
    },
    body1: {
      fontSize: "0.875rem", //14px
      lineHeight: '19px',
    },
    body2: {
      fontSize: "0.875rem", //14px
      fontWeight: 600,
      lineHeight: '19px',
    },
    button: {
      fontSize: 16,
      fontWeight: 600,
      textTransform: 'inherit',
    },
    caption: {
      fontSize: "0.75rem", //12px
      fontWeight: 400,
      lineHeight: '17px',
    },
    overline: {
      fontSize: "0.75rem", //12px
      fontWeight: 600,
      lineHeight: '17px',
      textTransform: 'capitalize',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true, // No more ripple, on the whole application 💣!
      disableTouchRipple: true,
    },
  },
  overrides: {
    MuiCardHeader: {
      avatar: {
        marginRight: '8px',
      },
      root: {
        alignItems: 'flex-start',
        padding: '16px 16px 8px 16px',
      },
    },
    MuiCardContent: {
      root: {
        padding: '0 16px 0px 16px',
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
    },
    MuiDialog: {
      paperFullScreen: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      },
      paper: {
        margin: '16px',
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.77)',
      },
    },
    MuiSwitch: {
      track: {
        backgroundColor: '#dcdcdc',
      },
      switchBase: {
        color: '#dcdcdc',
      },
    },
    MuiTab: {
      wrapper: {
        minHeight: '12px',
      },
      root: {
        minHeight: '24px',
      },
    },
    MuiTabs: {
      scrollButtonsDesktop: {
        color: '#fff',
      },
    },
  },
});

export default theme;
