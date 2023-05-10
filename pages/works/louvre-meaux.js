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
import LouvreBanner from "../../public/works/Louvre/background.png";
import { FontSizes } from "../../fonts";
import { RiExternalLinkLine } from "react-icons/ri";
import Image from "next/image";
import ProjectImage1 from "../../public/works/Louvre/bosch.jpg";
import ProjectImage2 from "../../public/works/Louvre/SS.png";
import ProjectImage3 from "../../public/works/Louvre/SS2.png";
import ProjectImage4 from "../../public/works/Louvre/SS3.png";
import Mood from "../../public/works/Louvre/moodboard/mood.png";
import Layout from "../../Components/Layout";
import { useMediaQuery } from "@mui/material";
const Project = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Layout
      title={"WORKS | LOUVRE"}
      description={`Louvre is a museum in Paris, France. It is the world&apos;s
                largest art museum and a historic monument. It is a must-see for
                tourists and is a popular destination for art lovers.`}
    >
      <Container
        disableGutters={!isMobile}
        className={WorkStyles.FullSize}
        id="GScroll"
      >
        <Box sx={{ mb: 3 }}>
          <Box
            className={WorkStyles.backgroundProject}
            sx={{ backgroundImage: `url("${LouvreBanner.src}")` }}
          ></Box>
        </Box>
        <Container disableGutters={true} className={WorkStyles.description}>
          <Grid container columns={12}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Typography variant="h4" fontSize={FontSizes.subHeading}>
                Louvre Meuax
              </Typography>
              <Typography
                variant="subtitle1"
                fontSize={FontSizes.ProjectDescription}
                className={`SpaceFont GrayColor ${WorkStyles.ProjectDescrption}`}
              >
                Louvre is a museum in Paris, France. It is the world&apos;s
                largest art museum and a historic monument. It is a must-see for
                tourists and is a popular destination for art lovers.
              </Typography>
              <Typography
                variant="subtitle1"
                fontSize={FontSizes.para}
                className="SpaceFont"
              >
                Visit Site <RiExternalLinkLine />
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ mb: isMobile ? 10 : 0 }}
            >
              <Typography variant="h4" sx={{ mt: 4 }}>
                Date
              </Typography>
              <Typography
                variant="subtitle1"
                component={"div"}
                fontSize={FontSizes.para}
                className={`SpaceFont GrayColor`}
              >
                January 2022
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
                Project Manager, Designer and Developer
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
                React, Node, Express, MongoDB, Mongoose, Material-UI,
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
              <Typography variant="h2">B O S C H</Typography>
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
          className={`${WorkStyles.MoodBoard}`}
          sx={{ backgroundImage: `url(${Mood.src})` }}
        ></Box>
        <Box className={WorkStyles.FullSize} sx={{ mt: 20 }}>
          <Container disableGutters={true}>
            <Typography
              variant="h2"
              fontSize={FontSizes.Heading}
              sx={{ mb: 7 }}
            >
              Louvre Meuax
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
            <Image src={ProjectImage3} alt="" />
            <Image src={ProjectImage2} alt="" />
            <Image src={ProjectImage1} alt="" />
            <Image src={ProjectImage4} alt="" />
          </Container>
        </Box>
      </Container>
    </Layout>
  );
};

export default Project;
