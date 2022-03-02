import { createTheme, PaletteMode } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import React, { createContext } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import { GlobalStyles } from "../styles/globalStyle";
import { designTheme } from "../styles/theme";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  // Update the theme only if the mode changes
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(designTheme(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </ColorModeContext.Provider>
  );
}

export default MyApp;
