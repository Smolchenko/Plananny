import { Typography, Box, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();

  return (
    <Box mb="30px">
      <Typography
        variant="h1"
        color={theme.palette.primary.highlight}
        fontWeight="bold"
        sx={{ mb: "5px" }}
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
