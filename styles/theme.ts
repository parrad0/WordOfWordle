import { PaletteMode } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export const designTheme = (mode: PaletteMode) => ({
  typography: {
    allVariants: {
      color: mode == "light" ? "black" : "white",
      fontFamily: "'Lato', sans-serif",
      fontWeight: "1rem",
    },
    h4: {
      color: "black",
      fontWeight: "bold",
    },
    h3: {
      fontWeight: "bold",
      fontSize: "1.3rem",
    },
    h2: {
      fontWeight: "bold",
      fontSize: "3.5rem",
    },
    h1: {
      fontWeight: "bold",
      fontSize: "3.5rem",
    },
    p: {
      color: mode == "light" ? "black" : "white",
      fontSize: "1rem",
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: { main: "#FFFFFF" },
          secondary: { main: "#4B4D4D" },
          background: {
            default: "#FFFBEA",
            success: "#538d4e",
            close: "#c9b458",
            wrong: "#3a3a3c",
          },
        }
      : {
          // palette values for dark mode
          primary: { main: "#4B4D4D" },
          secondary: { main: "#FFFFFF" },
          background: {
            default: "#FFFBEA",
            success: "#538d4e",
            close: "#c9b458",
            wrong: "#3a3a3c",
          },
        }),
  },
});
