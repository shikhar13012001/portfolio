import React from "react";
import { Grid, Typography } from "@mui/material";
import HeaderStyles from "../../styles/Header.module.css";
import { BsGithub } from "react-icons/bs";
const Header = () => {
  return (
    <Grid container columns={12} className={HeaderStyles.headerSize}>
      <Grid item lg={4} className={HeaderStyles.sideBorder}>
        <BsGithub size={40} />{" "}
        <span className="important-word margin-left-short SpaceFont">
          @shikhar13012001
        </span>
      </Grid>
      <Grid
        item
        lg={4}
        className={`${HeaderStyles.sideBorder} ${HeaderStyles.NavLinkSpacing}`}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold" }}
          className="SpaceFont"
        >
          ABOUT
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold" }}
          className="SpaceFont"
        >
          WORK
        </Typography>
      </Grid>
      <Grid
        item
        lg={4}
        className={`${HeaderStyles.sideBorder} ${HeaderStyles.NavLinkSpacing}`}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold" }}
          className="SpaceFont"
        >
        GET IN TOUCH
        </Typography>
         
      </Grid>
    </Grid>
  );
};

export default Header;
