import { CssBaseline, ThemeProvider } from "@mui/material";

import { ColorModeContext, useMode } from "./theme";
import Planner from "./components/Planner";
import Footer from "./components/Footer/Footer";
import pencilImage from "./assets/pencil.jpeg";

import "./App.css";

const App = () => {
  const [theme, colorMode] = useMode();

  const mainStyles = {
    backgroundColor: theme.palette.background.main,
    backgroundImage: theme.palette.mode !== "dark" ? `url(${pencilImage})` : "",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flex: 1,
    padding: "0 20px",
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main style={mainStyles}>
            <Planner />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
