import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import FooterTextContent from "./FooterTextContext";
import ColorMode from "./ColorMode";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.background.footer,
        py: 2,
        px: 2,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <FooterTextContent />
        <ColorMode />
      </Container>
    </Box>
  );
};

export default Footer;
