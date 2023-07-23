import { Typography, Box, useTheme } from "@mui/material";

import darkHighlight from "../../assets/yellow_vector_highlight_dark.svg";
import lightHighlight from "../../assets/yellow_vector_highlight.svg";

const Header = () => {
  const theme = useTheme();

  return (
    <Box mb="30px">
      <Typography
        variant="h1"
        color={theme.palette.primary.highlight}
        fontWeight="bold"
        sx={{
          mb: "5px",
          backgroundImage: `url(${
            theme.palette.mode === "dark" ? darkHighlight : lightHighlight
          })`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        Calendar
      </Typography>
      <Typography variant="h4" color={theme.palette.secondary.highlight}>
        An Interactive Calendar Page
      </Typography>
    </Box>
  );
};

export default Header;
