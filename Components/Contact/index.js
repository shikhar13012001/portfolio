import React from "react";
import {
  Grid,
  TextField,
  Typography,
  styled,
  InputBase,
  Button,
} from "@mui/material";
import { fontSizes,FontSizes } from "../../fonts";
import Flower from "../../public/flower.svg";
import Image from "next/image";
import ContactStyles from "../../styles/Contact.module.css";
import {useMediaQuery} from "@mui/material"
const StyledTextField = styled(TextField)({
  width: "80%",
  minHeight: 60,
  color: "white",
  borderColor: "white",
  backgroundColor: "#14192A",
  borderRadius: "5px",
  marginBottom: 60,
  fontFamily: "Space Grotesk",
  "& label": {
    color: "white",
    fontFamily: "Space Grotesk!important",
    border: `1.5px solid #1e2435`,
  },
});
const Contact = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Grid
      container
      columns={12}
      sx={{ minHeight: "80vh", mt: 20, pl: isMobile ? 0 : 10 }}
      className={ContactStyles.Border}
    >
      <Grid item xs={12} sm={12} md={7} lg={7} sx={{ pt: 10 }}>
        <Image src={Flower} alt="flower" className={ContactStyles.rotate} />
        <Typography
          variant="h1"
          fontSize={FontSizes.Heading}
          sx={{ textAlign: isMobile ? "center" : null }}
        >
          Let&apos;s get in touch
        </Typography>
        <Typography
          variant="body1"
          className="GrayColor SpaceFont"
          sx={{ width: isMobile ? "100%" : "60%", padding:isMobile?'0 20px':null, textAlign: isMobile ? "justify" : null }}
          fontSize={FontSizes.ProjectDescription}
        >
          I am available for a limited number of freelance projects this year.
          Looking for a DIGITAL DESIGNER VISUAL DEVELOPER? Just get in touch.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5} className={ContactStyles.form}>
        <StyledTextField
          label="Name"
          placeholder="Name"
          inputProps={{
            className: "SpaceFont",
          }}
        />
        <StyledTextField
          label="Email"
          placeholder="And your Email?"
          inputProps={{
            className: "SpaceFont",
          }}
        />
        <StyledTextField
          label="Message"
          placeholder="Type your message here"
          multiline
          minRows={4}
          inputProps={{
            className: "SpaceFont",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className={`SpaceFont ${ContactStyles.formBtn}`}
          sx={{ mb: isMobile ? 2 : 0 }}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Contact;
