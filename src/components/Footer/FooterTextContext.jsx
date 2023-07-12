import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Copyright from "./Copyright";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const FooterTextContent = () => {
  return (
    <Box component="div" sx={{ display: "flex" }}>
      <Logo className="header-logo" />
      <Box
        component="div"
        ml={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="body3"
          sx={{
            color: (theme) => theme.palette.primary.main,
          }}
        >
          Plananny - Portfolio Project
        </Typography>
        <Copyright />
      </Box>
    </Box>
  );
};

export default FooterTextContent;
