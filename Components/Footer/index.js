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
        href="https://twitter.com/Nodlehs73"
        className={`${FooterStyles.footerText} SpaceFont`}
      >
        TWITTER
      </Typography>
      <Typography
        variant="body1"
        className={`${FooterStyles.footerText} SpaceFont`}
      >
        DISCORD
      </Typography>
    </Box>
  );
};

export default Footer;
