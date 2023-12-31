import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import ColorPaletteButtons from "../../Components/ColorPaletteButtons";
import Layout from "../../Components/Layout";
import { FontSizes } from "../../fonts";
import ProjectImage1 from "../../public/works/gissues/SS1.png";
import ProjectImage2 from "../../public/works/gissues/SS2.png";
import ProjectImage3 from "../../public/works/gissues/SS3.png";
import ProjectImage4 from "../../public/works/gissues/SS4.png";
import ProjectImage6 from "../../public/works/gissues/SS6.png";
import Git from "../../public/works/gissues/background.jpg";
import GissuesMood from "../../public/works/gissues/moodboard/mood.png";
import WorkStyles from "../../styles/Works.module.css";

import { ProjectDetails as BlackBirdBlog } from "../../data/projects/black-bird-blog";
import { ProjectDetails as Futurepedia } from "../../data/projects/futurepedia";
import { ProjectDetails as Louvre } from "../../data/projects/louvre-meaux";
import { ProjectDetails as Prospero } from "../../data/projects/prospero";

const Gissues = {
  title: "Gissues",
  background: Git,
  seoDescription: `Gissues is small side educational project build upon GitHub API
    ( GraphQl ) to demonstrate the usage of graphql and Apollo
    client in Next js.`,
  description: `Gissues is small side educational project build upon GitHub API
    ( GraphQl ) to demonstrate the usage of graphql and Apollo
    client in Next js. This project is to help new developer to step
    in Open source.`,
  startDate: "May 2022",
  endDate: "May 2022",
  role: "Developer , designer and its Open Source Maintainer",
  techStack:
    "Nextjs, Google Fonts, Material UI, GitHub API, Apollo Client, Firebase, Google OAuth",
  graphicDirection: `I spearheaded the design of the website and oversaw the development. This was my first React based Project so I kept with Modern, Functional and Swift Design.`,
  Mood: GissuesMood,
  screenshots: [
    ProjectImage1,
    ProjectImage2,
    ProjectImage3,
    ProjectImage4,
    ProjectImage6,
  ],
  typography: "Space Grotesk",
  colors: ["#ffffff", "#C4FDE5", "#2b2b2b"],
  href: "https://gissues.vercel.app/",
};

const ProjectDetailObject = {
  gissues: Gissues,
  blackbird: BlackBirdBlog,
  futurepedia: Futurepedia,
  louvre: Louvre,
//   prospero: Prospero,
};

const Project = ({ slug }) => {
  const {
    title,
    typography,
    Mood,
    description,
    colors,
    role,
    techStack,
    graphicDirection,
    screenshots,
    href,
    background,
  } = ProjectDetailObject[slug];
  const isMobile = useMediaQuery("(max-width:600px)");
  console.log(Mood, background)

  return (
    <Layout title={`WORKS | ${title.toUpperCase()}`} description={description}>
      <Container 
        className={WorkStyles.FullSize}
        id="GScroll"
      >
        <Box sx={{ mb: 3 }}>
          <Box
            className={WorkStyles.backgroundProject}
            sx={{ backgroundImage: `url("${background.blurDataURL}")`,
          backdropFilter: "blur(10px)!important"
        }}
          >
            <Typography variant="h1">{title}</Typography>
          </Box>
        </Box>
        <Container disableGutters={true} className={WorkStyles.description}>
          <Grid container columns={12}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Typography variant="h4" fontSize={FontSizes.subHeading}>
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                fontSize={FontSizes.ProjectDescription}
                className={`SpaceFont GrayColor ${WorkStyles.ProjectDescrption}`}
              >
                {description}
              </Typography>
              <Link href={href} target="_blank">
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
                {role}
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
                {techStack}
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
                {graphicDirection}
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
              <Typography variant="h2">{typography}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                variant="h5"
                className="SpaceFont"
                sx={{ mt: 3, mb: 3 }}
              >
                colors
              </Typography>

              <ColorPaletteButtons colors={colors} />
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
              {title}
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
            {screenshots.map((shot, index) => (
              <Image
                key={index}
                src={shot}
                alt={`${title} screenshot-${index}`}
              />
            ))}
          </Container>
        </Box>
      </Container>
    </Layout>
  );
};

export default Project;

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  const ProjectDetails = ProjectDetailObject[slug];
  if (!ProjectDetails) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      slug:slug,
    },
  };
}
