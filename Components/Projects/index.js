/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Typography, Container, Grid, Divider } from "@mui/material";
import ProjectStyles from "../../styles/Project.module.css";
import { fontSizes } from "../../fonts";
import Link from "next/link";
import { gsap } from "gsap";
import { useMediaQuery } from "@mui/material";
const Projects = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  React.useEffect(() => {
    const items = document.querySelectorAll(".text_hover");

    if (!isMobile) {
      items.forEach((el) => {
        const image = el.querySelector("img");

        el.addEventListener("mouseenter", (e) => {
          gsap.to(image, {
            autoAlpha: 1,
            translateY: -100,
            duration: 1,
          });
        });

        el.addEventListener("mouseleave", (e) => {
          gsap.to(image, {
            autoAlpha: 0,
            translateY: 100,
            duration: 1,
          });
        });
        el.addEventListener("mousemove", (e) => {
          image.style.top = e.pageY + image.offsetHeight / 2 + "px";
          image.style.left = e.pageX + "px";
          // gsap.set(image, { x: e.offsetX + 20, y: e.offsetY - 130 });
        });
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container
      disableGutters={!isMobile}
      sx={{ width: "100%",   mt: 20, mb: 0 }}
    >
      <a name="projects"></a>
      <Typography variant="h4" className="SpaceFont" sx={{ mb: 1 }}>
        Projects
      </Typography>
      <Typography
        variant="body1"
        className="GrayColor SpaceFont"
        sx={{ width: isMobile ? "100%" : "30%", mb: 15 }}
      >
        Here are some of the projects I have worked on. Feel free to check out
        some of my work. Few Projects are not hosted because of the cost of
        hosting.
      </Typography>
      <Grid container columns={12}>
        <Grid item xs={12} sm={1} md={1} lg={1}>
          <Typography variant="h6" className="SpaceFont">
            (01)
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={11} className="text_hover">
          <Link href="/works/futurepedia">
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
              Futurepedia
            </Typography>
          </Link>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={"https://i.ibb.co/2t0Yg3B/background.png"}
            className={ProjectStyles.imageHover}
            alt="pan"
          />
        </Grid>
        <Divider
          sx={{ backgroundColor: "#1e2435", width: "100%", mt: 3, mb: 3 }}
        />
      </Grid>
     
    </Container>
  );
};

export default Projects;
