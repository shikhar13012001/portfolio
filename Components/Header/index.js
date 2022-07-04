import React from "react";
import { Grid, Typography } from "@mui/material";
import HeaderStyles from "../../styles/Header.module.css";
import { BsGithub } from "react-icons/bs";
import { FontSizes } from "../../fonts";
const Header = () => {
  return (
    <Grid container columns={12} className={HeaderStyles.headerSize}>
      <Grid
        item
        lg={4}
        md={4}
        sm={4}
        xs={4}
        className={HeaderStyles.sideBorder}
      >
        <BsGithub size={40} />{" "}
        <Typography className="margin-left-short" fontSize={FontSizes.para}>
          <span className="important-word SpaceFont">@shikhar13012001</span>
        </Typography>
      </Grid>
      <Grid
        item
        lg={4}
        md={4}
        sm={4}
        xs={4}
        className={`${HeaderStyles.sideBorder} ${HeaderStyles.NavLinkSpacing}`}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold" }}
          className="SpaceFont"
          fontSize={FontSizes.para}
        >
          ABOUT
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold" }}
          className="SpaceFont"
          fontSize={FontSizes.para}
        >
          WORK
        </Typography>
      </Grid>
      <Grid
        item
        lg={4}
        md={4}
        sm={4}
        xs={4}
        className={`${HeaderStyles.sideBorder} ${HeaderStyles.NavLinkSpacing}`}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold" }}
          fontSize={FontSizes.para}
          className="SpaceFont"
        >
          GET IN TOUCH
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
