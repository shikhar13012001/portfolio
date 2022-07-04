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
import Bird from "../../public/works/blackbird/SS1.png";
import { FontSizes } from "../../fonts";
import { RiExternalLinkLine } from "react-icons/ri";
import Image from "next/image";
import ProjectImage1 from "../../public/works/blackbird/SS1.png";
import ProjectImage2 from "../../public/works/blackbird/SS2.png";
import ProjectImage3 from "../../public/works/blackbird/SS3.png";
import ProjectImage4 from "../../public/works/blackbird/SS4.png";
import ProjectImage6 from "../../public/works/blackbird/SS5.png";
import ProjectImage7 from "../../public/works/blackbird/SS19.png";
import ProjectImage8 from "../../public/works/blackbird/SS13.png";
import Mood from "../../public/works/blackbird/moodboard/mood.png";
import Layout from "../../Components/Layout";
import { useMediaQuery } from "@mui/material";
const Project = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Layout
      title={"WORKS | BLACKBIRD"}
      description={`This project is an educational asset demonstrating the use of
                AWS amplify, Graphql API, Appsync, Material UI and amazon
                cognito.`}
    >
      <Container
        disableGutters={!isMobile}
        className={WorkStyles.FullSize}
        id="GScroll"
      >
        <Box className={WorkStyles.FullSize}>
          <Box
            className={WorkStyles.backgroundProject}
            sx={{
              backgroundImage: `url("${Bird.src}")`,
              backgroundSize: "cover!important",
              backgroundRepeat: "no-repeat!important",
            }}
          >
            <Typography
              variant="h1"
              fontSize={{ lg: 200, md: 180, sm: 140, xs: 100 }}
            >
              Black Bird
            </Typography>
          </Box>
        </Box>
        <Container disableGutters={true} className={WorkStyles.description}>
          <Grid container columns={12}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Typography variant="h4" fontSize={FontSizes.subHeading}>
                Black Bird Blog
              </Typography>
              <Typography
                variant="subtitle1"
                fontSize={FontSizes.ProjectDescription}
                className={`SpaceFont GrayColor ${WorkStyles.ProjectDescrption}`}
              >
                This project is an educational asset demonstrating the use of
                AWS amplify, Graphql API, Appsync, Material UI and amazon
                cognito. This project belongs to Black bird and this repo will
                remain dormant until final decision.
              </Typography>
              <Typography
                variant="subtitle1"
                fontSize={FontSizes.para}
                className="SpaceFont"
                component="a"
                href="https://github.com/shikhar13012001/black-bird-blog-Dormant"
                target="_blank"
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
                Feb 2022
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
                Developer , designer and its Open Source Maintainer
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
                Nextjs, Google Fonts, Material UI, Nextjs, Material UI, Amplify
                react components, Amplify, Graphql, Appsync, Cognito, AWS.
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
              <Typography variant="h2">PROJEKT BLACKBIRD</Typography>
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
                    bgcolor: "#404EED",
                    color: "white!important",
                    width: isMobile ? "100%" : 400,
                    height: 60,
                    mb: 2,
                    "&:hover": {
                      bgcolor: "#404EED",
                    },
                  }}
                >
                  #404EED
                </Button>
                <Button
                  variant="contained"
                  className="SpaceFont"
                  sx={{
                    bgcolor: "#E14531",
                    color: "white!important",
                    width: isMobile ? "100%" : 400,
                    height: 60,
                    mb: 2,
                    "&:hover": {
                      bgcolor: "#E14531",
                    },
                  }}
                >
                  #404EED
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
              Gissues
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
            <br />
            <Image src={ProjectImage2} alt="" />
            <br />

            <Image src={ProjectImage6} alt="" />
            <br />

            <Image src={ProjectImage3} alt="" />
            <br />

            <Image src={ProjectImage4} alt="" />
            <br />

            <Image src={ProjectImage7} alt="" />
            <Image src={ProjectImage8} alt="" />
          </Container>
        </Box>
      </Container>
    </Layout>
  );
};

export default Project;
