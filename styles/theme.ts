import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover, &:focus': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          '&:active': {
            color: '#0079bf',
            background: '#e4f0f6',
          },
        },
        containedSecondary: {
          '&:active': {
            background: '#055a8c',
          },
        },
        containedError: {
          '&:active': {
            background: '#6e2f1a',
          },
        },
      },
    },
  },
  palette: {
    primary: { main: '#091e420a', dark: '#091e4214', contrastText: '#172b4d' },
    secondary: { main: '#0079bf', dark: '#026aa7', contrastText: '#fff' },
    error: { main: '#b04632', dark: '#933b27', contrastText: '#fff' },
  },
});

export default theme;
