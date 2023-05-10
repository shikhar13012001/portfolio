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
import Git from "../../public/works/futurepedia/background.png";
import { FontSizes } from "../../fonts";
import { RiExternalLinkLine } from "react-icons/ri";
import Image from "next/image";
import ProjectImage1 from "../../public/works/futurepedia/SS1.png";
import ProjectImage2 from "../../public/works/futurepedia/SS2.png";
import ProjectImage3 from "../../public/works/futurepedia/SS3.png";
import ProjectImage4 from "../../public/works/futurepedia/SS4.png";
import ProjectImage6 from "../../public/works/futurepedia/SS6.png";
import ProjectImage7 from "../../public/works/futurepedia/SS7.png";
import Mood from "../../public/works/futurepedia/moodboard/moodboard.png";
import Layout from "../../Components/Layout";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
const Project = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Layout
      title={"WORKS | Futurepedia"}
      description={`Futurepedia is the go-to place for AI tools and news. Join 150,000+ AI enthusiasts getting new tools in their inbox every week.`}
    >
      <Container
        disableGutters={!isMobile}
        className={WorkStyles.FullSize}
        id="GScroll"
      >
        <Box sx={{mb:3}}>
          <Box
            className={WorkStyles.backgroundProject}
            sx={{ backgroundImage: `url("${Git.src}")` }}
          >
            <Typography
              variant="h1" 
            >
              Futurepedia
            </Typography>
          </Box>
        </Box>
        <Container disableGutters={true} className={WorkStyles.description}>
          <Grid container columns={12}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Typography variant="h4" fontSize={FontSizes.subHeading}>
                Futurepedia
              </Typography>
              <Typography
                variant="subtitle1"
                fontSize={FontSizes.ProjectDescription}
                className={`SpaceFont GrayColor ${WorkStyles.ProjectDescrption}`}
              >
                Futurepedia is the go-to place for AI tools and news. Join
                150,000+ AI enthusiasts getting new tools in their inbox every
                week.
              </Typography>
              <Link href="https://futurepedia.io/">
                <Typography
                  variant="subtitle1"
                  fontSize={FontSizes.para}
                  className="SpaceFont"
                >
                  Visit Site <RiExternalLinkLine />
                </Typography>
              </Link>
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
                May 2023
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
                Full Stack Developer and Designer.
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
                Nextjs, Google Fonts, Material UI, Sanity CMS, Vercel, Figma,
                Sentence Transformers, Typesense, Google Analytics, Firebase,
                Google Cloud, Cloud Functions.
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
                development. This was my first large scale project and I learned
                about optimization and performance, as well as how to work with
                a team of developers. I also learned how to work with a designer
                and how to implement their designs into the website.
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
              <Typography variant="h2">DM Sans</Typography>
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
                    bgcolor: "#0369a1",
                    color: "black!important",
                    width: isMobile ? "100%" : 400,
                    height: 60,
                    mb: 2,
                    "&:hover": {
                      bgcolor: "#0369a1",
                    },
                  }}
                >
                  #0369a1
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
              Futurepedia
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
            <Image src={ProjectImage7} alt="" />
            <Image src={ProjectImage1} alt="" />
            <Image src={ProjectImage2} alt="" />
            <Image src={ProjectImage6} alt="" />
            <Image src={ProjectImage3} alt="" />
            <Image src={ProjectImage4} alt="" />
          </Container>
        </Box>
      </Container>
    </Layout>
  );
};

export default Project;
