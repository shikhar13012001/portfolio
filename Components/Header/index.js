import React from "react";
import { Grid, Typography } from "@mui/material";
import HeaderStyles from "../../styles/Header.module.css";
import { BsGithub } from "react-icons/bs";
import { FontSizes } from "../../fonts";
import { useMediaQuery } from "@mui/material";
import Drawer from "../Drawer";
import Link from "next/link";
const Header = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return !isMobile ? (
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
        <Link href="github.com/shikhar13012001">
          <Typography className="margin-left-short" fontSize={FontSizes.para}>
            <span className="important-word SpaceFont">@shikhar13012001</span>
          </Typography>
        </Link>
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
          className="SpaceFont GrayColor"
          fontSize={FontSizes.para}
          component="a"
          href="#about"
        >
          ABOUT
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold" }}
          className="SpaceFont GrayColor"
          fontSize={FontSizes.para}
          component="a"
          href="#projects"
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
          className="SpaceFont GrayColor"
          component="a"
          href="#contact"
        >
          GET IN TOUCH
        </Typography>
      </Grid>
    </Grid>
  ) : (
    <Grid container columns={12} className={HeaderStyles.headerSize}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{
          display: "flex",
          p: `0 20px`,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BsGithub size={30} /> <Drawer />
      </Grid>
    </Grid>
  );
};

export default Header;
