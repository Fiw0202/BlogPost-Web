import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#243831",
      light: "#D8E9E4",
      dark: "#2B5F44",
      contrastText: "#ffffff",
    },
    success: {
      main: "#49A569",
      contrastText: "#ffffff",
    },
    info: {
      main: "#0bb2fb",
      light: "#a7e3f4",
      dark: "#0bb2fb",
      contrastText: "#ffffff",
    },
    error: {
      main: "#F23536",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#fec90f",
      light: "#fff4e5",
      dark: "#dcb014",
      contrastText: "#ffffff",
    },
  },
});

export default theme;
