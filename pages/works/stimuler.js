import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import WorkStyles from "../../styles/Works.module.css";
import Stimuler from "../../public/works/stimuler/background.jpg";
import { FontSizes } from "../../fonts";
import { RiExternalLinkLine } from "react-icons/ri";
import Image from "next/image";
import ProjectImage1 from "../../public/works/stimuler/SS1.png";
import ProjectImage2 from "../../public/works/stimuler/SS2.png";
import ProjectImage3 from "../../public/works/stimuler/SS3.png";
import ProjectImage4 from "../../public/works/stimuler/SS4.png";
import ProjectImage5 from "../../public/works/stimuler/SS5.png";
import Mood from "../../public/works/stimuler/moodboard/mood.png";
import Layout from "../../Components/Layout";
import {useMediaQuery } from "@mui/material"
const Project = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Layout>
      <Container
        disableGutters={!isMobile}
        className={WorkStyles.FullSize}
        id="GScroll"
      >
        <Box className={WorkStyles.FullSize}>
          <Box
            className={WorkStyles.backgroundProject}
            sx={{ backgroundImage: `url("${Stimuler.src}")` }}
          >
            <Typography
              variant="h1"
              fontSize={{ lg: 200, md: 180, sm: 140, xs: 100 }}
            >
              Stimuler
            </Typography>
          </Box>
        </Box>
        <Container disableGutters={true} className={WorkStyles.description}>
          <Grid container columns={12}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Typography variant="h4" fontSize={FontSizes.subHeading}>
                Stimuler
              </Typography>
              <Typography
                variant="subtitle1"
                fontSize={FontSizes.ProjectDescription}
                className={`SpaceFont GrayColor ${WorkStyles.ProjectDescrption}`}
              >
                Stimuler is an tech agency that specializes in speech training
                of linguistics, particulary English, This website is the home
                page of the agency.
              </Typography>
              <Typography
                variant="subtitle1"
                fontSize={FontSizes.para}
                className="SpaceFont"
              >
                Visit Site <RiExternalLinkLine />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} sx={{mb:isMobile?10:0}}>
              <Typography variant="h4" sx={{ mt: 4 }}>
                Date
              </Typography>
              <Typography
                variant="subtitle1"
                component={"div"}
                fontSize={FontSizes.para}
                className={`SpaceFont GrayColor`}
              >
                May 2022
              </Typography>
              <Typography variant="h4" sx={{ mt: 4 }}>
                Role
              </Typography>
              <Typography
                variant="subtitle1"
                component={"div"}
                fontSize={FontSizes.para}
                className={`SpaceFont GrayColor`}
              >
                Developer , designer and Lead Frontend Engineer
              </Typography>
              <Typography variant="h4" sx={{ mt: 4 }}>
                Techs
              </Typography>
              <Typography
                variant="subtitle1"
                component={"div"}
                fontSize={FontSizes.para}
                className={`SpaceFont GrayColor`}
              >
                Nextjs, Google Fonts, Material UI, React, React-icons, Three js,
                GSAP, Hoverjs.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container disableGutters={true} className={WorkStyles.description}>
          <Grid container columns={12}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Typography variant="h3" sx={{ mb: 6 }}>
                Graphic Direction
              </Typography>
              <Typography
                variant="subtitle1"
                fontSize={FontSizes.ProjectDescription}
                className={`GrayColor SpaceFont  ${WorkStyles.ProjectDescrption}`}
              >
                I spearheaded the design of the website and oversaw the
                development. This was my first React based Project so I kept
                with Modern, Functional and Swift Design.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                variant="h5"
                className="SpaceFont"
                sx={{ opacity: 0.7, mt: 3, mb: 3 }}
              >
                Typography
              </Typography>
              <Typography variant="h2">G I N G E R</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                variant="h5"
                className="SpaceFont"
                sx={{ mt: 3, mb: 3 }}
              >
                colors
              </Typography>
              <Stack>
                <Button
                  variant="contained"
                  className="SpaceFont"
                  sx={{
                    bgcolor: "#ffffff",
                    color: "black!important",
                    width: isMobile ? "100%" : 400,
                    height: 60,
                    mb: 2,
                    "&:hover": {
                      bgcolor: "#ffffff",
                    },
                  }}
                >
                  #ffffff
                </Button>
                <Button
                  variant="contained"
                  className="SpaceFont"
                  sx={{
                    bgcolor: "#2b2b2b",
                    width: isMobile ? "100%" : 400,
                    height: 60,
                    mb: 2,
                    "&:hover": {
                      bgcolor: "#2b2b2b",
                    },
                  }}
                >
                  #2b2b2b
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Box
          className={`${WorkStyles.FullSize} ${WorkStyles.MoodBoard}`}
          sx={{ backgroundImage: `url(${Mood.src})` }}
        ></Box>
        <Box className={WorkStyles.FullSize} sx={{ mt: 20 }}>
          <Container disableGutters={true}>
            <Typography
              variant="h2"
              fontSize={FontSizes.Heading}
              sx={{ mb: 7 }}
            >
              Stimuler
            </Typography>

            <Typography
              variant="h4"
              fontSize={FontSizes.para}
              className="SpaceFont"
              sx={{ mb: 7, textAlign: "center" }}
            >
              Screenshots
            </Typography>
            <Divider
              sx={{
                width: "100%",
                height: 3,
                mb: 3,
                backgroundColor: "#1e2435!important",
                display: "flex",
              }}
            />
            <Image src={ProjectImage1} alt="" />
            <Image src={ProjectImage2} alt="" />
            <Typography
              variant="h4"
              fontSize={FontSizes.para}
              className="SpaceFont"
              sx={{ mb: 7, textAlign: "center" }}
            >
              App Screenshots
            </Typography>
            <Divider
              sx={{
                width: "100%",
                height: 3,
                mb: 3,
                backgroundColor: "#1e2435!important",
                display: "flex",
              }}
            />
            <Image src={ProjectImage5} alt="" />
            <Image src={ProjectImage3} alt="" />
            <Image src={ProjectImage4} alt="" />
          </Container>
        </Box>
      </Container>
    </Layout>
  );
};

export default Project;
