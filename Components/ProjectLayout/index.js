/* eslint-disable @next/next/no-img-element */
import { Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { fontSizes } from "../../fonts";
import ProjectStyles from "../../styles/Project.module.css";

export default function ProjectItemLayout(props) {
  const { image, id, name, href, itemNumber } = props;

  return (
    <Grid container columns={12}>
      <Grid item xs={12} sm={1} md={1} lg={1}>
        <Typography variant="h6" className="SpaceFont">
          ({itemNumber})
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={11} className="text_hover">
        <Link href={href}>
          <Typography
            variant="h1"
            fontSize={fontSizes}
            sx={{
              fontStyle: "italic",
              "&:hover": {
                ml: 2,
              },
              transition: `all 0.1s ease-in`,
            }}
          >
            {name}
          </Typography>
        </Link>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} className={ProjectStyles.imageHover} alt="pan" />
      </Grid>
      <Divider
        sx={{ backgroundColor: "#1e2435", width: "100%", mt: 3, mb: 3 }}
      />
    </Grid>
  );
}
