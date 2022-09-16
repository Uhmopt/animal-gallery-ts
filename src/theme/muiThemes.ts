import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF5C01",
    },
    secondary: {
      main: "#FFD25F",
    },
    info: {
      main: "#00D1FF",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#181818",
      paper: "#181818",
    },
  },
  typography: { allVariants: { color: "#FFFFFF" } },
});
