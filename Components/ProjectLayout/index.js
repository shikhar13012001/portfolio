/* eslint-disable @next/next/no-img-element */
import { Divider, Grid, Typography } from "@mui/material";
import { gsap } from "gsap";
import Link from "next/link";
import React from "react";
import { fontSizes } from "../../fonts";
import ProjectStyles from "../../styles/Project.module.css";

export default function ProjectItemLayout(props) {
  const { image, id, name, href, itemNumber, disableHover } = props;
  const imageRef = React.useRef(null);

  const onMouseEnter = () => {
    gsap.to(imageRef.current, {
      autoAlpha: 1,
      translateY: -100,
      duration: 1,
    });
  };

  const onMouseLeave = () => {
    gsap.to(imageRef.current, {
      autoAlpha: 0,
      translateY: 100,
      duration: 1,
    });
  };

  const onMouseMove = (e) => {
    const img = imageRef.current;
    if (!img) return;
    img.style.top = e.pageY + img.offsetHeight / 2 + "px";
    img.style.left = e.pageX + "px";
  };

  const hoverHandlers = disableHover
    ? {}
    : { onMouseEnter, onMouseLeave, onMouseMove };

  return (
    <Grid container columns={12}>
      <Grid item xs={12} sm={1} md={1} lg={1}>
        <Typography variant="h6" className="SpaceFont">
          ({itemNumber})
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={8}
        lg={11}
        className="text_hover"
        {...hoverHandlers}
      >
        <Typography
          variant="h1"
          component="h3"
          fontSize={fontSizes}
          sx={{
            fontStyle: "italic",
            "&:hover": {
              ml: 2,
            },
            transition: `all 0.1s ease-in`,
          }}
        >
          <Link href={href}>
            <a>{name}</a>
          </Link>
        </Typography>

        {/* Raw <img> because next/image in Next 12.1.6 does not forward refs,
            which the gsap hover animation needs. */}
        <img
          ref={imageRef}
          src={image}
          className={ProjectStyles.imageHover}
          alt={name}
          width={500}
          height={300}
          loading="lazy"
          decoding="async"
        />
      </Grid>
      <Divider
        sx={{ backgroundColor: "#1e2435", width: "100%", mt: 3, mb: 3 }}
      />
    </Grid>
  );
}