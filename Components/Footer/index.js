import React from "react";
import { Box, Typography } from "@mui/material";
import FooterStyles from "../../styles/Footer.module.css";
const Footer = () => {
  return (
    <Box className={FooterStyles.fullSize}>
      <Typography
        variant="body1"
        className={`${FooterStyles.footerText} SpaceFont`}
        component="a"
        href="https://www.linkedin.com/in/shikhar-gupta-71ab59201/"
      >
        LINKEDIN
      </Typography>
      <Typography
        variant="body1"
        component="a"
        href="https://github.com/shikhar13012001"
        className={`${FooterStyles.footerText} SpaceFont`}
      >
        GITHUB
      </Typography>
      <Typography
        variant="body1"
        component="a"
        href="https://x.com/Nodlehs73"
        className={`${FooterStyles.footerText} SpaceFont`}
      >
        X / TWITTER
      </Typography>
    </Box>
  );
};

export default Footer;
