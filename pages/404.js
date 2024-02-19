import { Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h1"
        className="bg"
        sx={{ fontSize: "450px !important" }}
      >
        404
      </Typography>
      <Typography
        variant="body1"
        className="GrayColor SpaceFont"
        sx={{ fontWeight: 400 }}
      >
        The page you are looking for is not available
      </Typography>
    </Container>
  );
};
export default NotFound;
