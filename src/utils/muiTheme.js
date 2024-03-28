import { lightBlue, indigo } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: indigo[400],
        contrastText: "#fff",
    },
    secondary: {
        main: lightBlue[100],
        contrastText: "#fff",
    },
  },
});

export default theme;