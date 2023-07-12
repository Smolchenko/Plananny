import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      sx={{
        color: (theme) => theme.palette.secondary.main,
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Irene Smolchenko
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
