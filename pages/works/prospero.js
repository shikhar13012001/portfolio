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
import Prospero from "../../public/works/prospero/SS5.png";
import Mood from "../../public/works/prospero/moodboard/mood.png";
import { FontSizes, fontSizes } from "../../fonts";
import { RiExternalLinkLine } from "react-icons/ri";
import Image from "next/image";
import ProjectImage1 from "../../public/works/prospero/SS1.png";
import ProjectImage2 from "../../public/works/prospero/SS10.png";
import ProjectImage4 from "../../public/works/prospero/SS4.png";
import ProjectImage5 from "../../public/works/prospero/SS5.png";
import ProjectImage6 from "../../public/works/prospero/SS6.png";
import Layout from "../../Components/Layout";

const Project = () => {
  return (
    <Layout>
      <Box className={WorkStyles.FullSize} id="GScroll">
        <Box className={WorkStyles.FullSize}>
          <Box
            className={WorkStyles.backgroundProject}
            sx={{ backgroundImage: `url("${Prospero.src}")` }}
          >
            <Typography
              variant="h1"
              fontSize={{ lg: 200, md: 180, sm: 140, xs: 100 }}
            >
              Prospero
            </Typography>
          </Box>
        </Box>
        <Container disableGutters={true} className={WorkStyles.description}>
          <Grid container columns={12}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Typography variant="h4" fontSize={FontSizes.subHeading}>
                Prospero
              </Typography>
              <Typography
                variant="subtitle1"
                fontSize={FontSizes.ProjectDescription}
                className={`SpaceFont GrayColor ${WorkStyles.ProjectDescrption}`}
              >
                Prospero is a hackathon project that is a web application that
                is capable of managin user data participating in a college Fest
                website. This is first ever major project that I undertook in my
                college.
              </Typography>
              <Typography
                variant="subtitle1"
                fontSize={FontSizes.para}
                className="SpaceFont"
                component={"a"}
                target={"https://prospero.netlify.app/"}
                href="https://prospero.netlify.app/"
              >
                Visit Site <RiExternalLinkLine />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Typography variant="h4" sx={{ mt: 4 }}>
                Date
              </Typography>
              <Typography
                variant="subtitle1"
                component={"div"}
                fontSize={FontSizes.para}
                className={`SpaceFont GrayColor`}
              >
                August 2021
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
                Web Designer and Developer, DTC
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
                HTML,CSS,Javascript, Postgress, Netlify,MySQL
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
              <Typography variant="h2">Roboto Sans</Typography>
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
                    bgcolor: "#23F800",
                    color: "white!important",
                    width: 400,
                    height: 60,
                    mb: 2,
                    "&:hover": {
                      bgcolor: "#23F800",
                    },
                  }}
                >
                  #23F800
                </Button>
                <Button
                  variant="contained"
                  className="SpaceFont"
                  sx={{
                    bgcolor: "#EA008A",
                    color: "white!important",
                    width: 400,
                    height: 60,
                    mb: 2,
                    "&:hover": {
                      bgcolor: "#EA008A",
                    },
                  }}
                >
                  #EA008A
                </Button>
                <Button
                  variant="contained"
                  className="SpaceFont"
                  sx={{
                    bgcolor: "#B026FF",
                    color: "white!important",
                    width: 400,
                    height: 60,
                    mb: 2,
                    "&:hover": {
                      bgcolor: "#B026FF",
                    },
                  }}
                >
                  #B026FF
                </Button>
                <Button
                  variant="contained"
                  className="SpaceFont"
                  sx={{
                    bgcolor: "#2b2b2b",
                    width: 400,
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
          sx={{ backgroundImage: `url("${Mood.src}")` }}
        ></Box>
        <Box className={WorkStyles.FullSize} sx={{ mt: 20 }}>
          <Container disableGutters={true}>
            <Typography
              variant="h2"
              fontSize={FontSizes.Heading}
              sx={{ mb: 7 }}
            >
              Prospero
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
            <Image src={ProjectImage4} alt="" />
            <Image src={ProjectImage5} alt="" />
            <Image src={ProjectImage6} alt="" />
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default Project;
