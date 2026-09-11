import {
  Button,
  Grid,
  TextField,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { FontSizes } from "../../fonts";
import Flower from "../../public/flower.svg";
import { SITE } from "../../lib/site-config";
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
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Grid
      container
      columns={12}
      sx={{ minHeight: "80vh", mt: 20, pl: isMobile ? 0 : 10 }}
      className={ContactStyles.Border}
    >
      <a name="contact"></a>
      <Grid item xs={12} sm={12} md={7} lg={7} sx={{ pt: 10 }}>
        <Image src={Flower} alt="flower" className={ContactStyles.rotate} />
        <Typography
          variant="h1"
          component="h2"
          fontSize={FontSizes.Heading}
          sx={{ textAlign: isMobile ? "center" : null }}
        >
          Let&apos;s get in touch
        </Typography>
        <Typography
          variant="body1"
          className="GrayColor SpaceFont"
          sx={{
            width: isMobile ? "100%" : "60%",
            padding: isMobile ? "0 20px" : null,
            textAlign: isMobile ? "justify" : null,
            mb: 3,
          }}
          fontSize={FontSizes.ProjectDescription}
        >
          I&apos;m always open to interesting conversations and opportunities.
          Looking for a SOFTWARE ENGINEER with AI and backend experience?
          Just get in touch.
        </Typography>
        <Typography
          variant="body1"
          className="SpaceFont"
          sx={{
            textAlign: isMobile ? "center" : null,
            mb: 3,
          }}
          fontSize={FontSizes.para}
        >
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        lg={5}
        className={ContactStyles.form}
        component="form"
        action="https://getform.io/f/ebec9532-ea83-4728-9a06-26dc8aba0bc1"
        method="POST"
      >
        <StyledTextField
          label="Name"
          placeholder="Name"
          inputProps={{
            className: "SpaceFont",
          }}
          required
          name="name"
        />
        <StyledTextField
          label="Email"
          placeholder="And your Email?"
          inputProps={{
            className: "SpaceFont",
          }}
          required
          name="email"
        />
        <StyledTextField
          label="Message"
          placeholder="Type your message here"
          multiline
          minRows={4}
          inputProps={{
            className: "SpaceFont",
          }}
          required
          name="message"
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          className={`SpaceFont ${ContactStyles.formBtn}`}
          sx={{ mb: isMobile ? 2 : 0 }}
        >
          Submit
        </Button>
        <Typography
          variant="body2"
          className="GrayColor SpaceFont"
          sx={{ fontSize: "0.75rem", mt: 1 }}
        >
          Submitted directly to Getform for delivery to me — used only to
          reply to your message, not stored or shared elsewhere by this site.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Contact;
