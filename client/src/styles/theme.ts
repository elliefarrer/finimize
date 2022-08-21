import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3BA9FC',
      light: '#F6FBFF'
    },
    success: {
      main: '#0FD165',
    },
    error: {
      main: '#FD2F60',
    },
  },
  typography: {
    h1: {
        fontSize: '4rem'
    }
  }
});

export default theme;
