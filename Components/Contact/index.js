import React from "react";
import {
  Grid,
  TextField,
  Typography,
  styled,
  InputBase,
  Button,
} from "@mui/material";
import { fontSizes } from "../../fonts";
import Flower from "../../public/flower.svg";
import Image from "next/image";
import ContactStyles from "../../styles/Contact.module.css";
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
  return (
    <Grid
      container
      columns={12}
      sx={{ minHeight: "80vh", mt: 20, pl: 10 }}
      className={ContactStyles.Border}
    >
      <Grid item xs={12} sm={12} md={7} lg={7} sx={{ pt: 10 }}>
        <Image src={Flower} alt="flower" className={ContactStyles.rotate} />
        <Typography variant="h1" fontSize={fontSizes.sm}>
          Let&apos;s get in touch
        </Typography>
        <Typography
          variant="body1"
          className="GrayColor SpaceFont"
          sx={{ width: "60%", margin: 4 }}
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
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Contact;
