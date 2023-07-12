import { useContext } from "react";
import useSound from "use-sound";
import { useTheme, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import { ColorModeContext } from "../../theme";
import boopSfx from "./click_sound.mp3";

const ColorMode = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [play] = useSound(boopSfx);

  const handleColorModeToggle = () => {
    colorMode.toggleColorMode();
    play();
  };

  return (
    <Box display="flex">
      <IconButton onClick={handleColorModeToggle}>
        {theme.palette.mode === "dark" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </IconButton>
    </Box>
  );
};

export default ColorMode;
