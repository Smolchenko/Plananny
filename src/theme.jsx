import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// Returns color design tokens based on the provided mode ("dark" or "light").
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          100: "#202a42", // footer, Calendar bg
          200: "#141b2d", // main
          300: "#8CC0DE", // footer span text, Header title
          400: "#2c3958", // event item background, calendar border
          500: "#CAF2D7", // Header subheader, item date
        },
        neutral: {
          100: "#e2deda", // copyright
          200: "brightness(130%)", // Events background
        },
      }
    : {
        primary: {
          100: "#EAFDFC", // footer
          200: "#FFFBEB", // main
          300: "#354259", // footer span text
          400: "#27AA80", // Header subheader
          500: "#FFD56F", // EventItem bg
          600: "#60A9A6", // copyright, Header title, calendar border
          700: "#237e61", // item date
        },
        neutral: {
          100: "#FFF", // main, Calendar bg
          200: "brightness(120%) blur(15px)", // Events background
        },
      }),
});

// Takes the mode as an argument and generates the theme settings object.
// It utilizes the color tokens from the tokens() function to define the palette, typography, and potentially other settings for the MUI theme.
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode, // used to specify the overall color mode of the theme
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[300],
              highlight: colors.primary[300],
            },
            secondary: {
              main: colors.neutral[100],
              highlight: colors.primary[500],
              dateHighlight: colors.primary[500],
            },
            background: {
              main: colors.primary[200],
              footer: colors.primary[100],
              calendar: colors.primary[100],
              event: colors.primary[400],
              eventList: colors.neutral[200],
            },
          }
        : {
            primary: {
              main: colors.primary[300],
              highlight: colors.primary[600],
            },
            secondary: {
              main: colors.primary[600],
              highlight: colors.primary[400],
              dateHighlight: colors.primary[700],
            },
            background: {
              main: colors.neutral[100],
              footer: colors.primary[100],
              calendar: colors.neutral[100],
              event: colors.primary[500],
              eventList: colors.neutral[200],
            },
          }),
    },
    // This section defines the typography settings for the theme, such as font family and font sizes for various heading levels (h1, h2, h3, etc.).
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
    // Changing MUIs semantic element
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h4: "p",
            h3: "h2",
          },
        },
      },
    },
  };
};

// Serves as the context for the color mode, allowing components to access and toggle the color mode.
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// This custom hook defines the color mode state and provides the toggleColorMode function to toggle between "dark" and "light" modes.
// It also generates the Material-UI theme using the createTheme() function and the theme settings generated by the themeSettings() function.
// The useMemo() hook is used to memoize the theme and color mode values, ensuring they are only recalculated when the mode changes.
export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
