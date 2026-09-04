import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import Layout from "../../Components/Layout";
import ProjectLinks from "../../Components/ProjectLinks";
import { SITE } from "../../lib/site-config";
import { FontSizes } from "../../fonts";
import WorkStyles from "../../styles/Works.module.css";

import { ProjectDetails as Schedurx } from "../../data/projects/schedurx";
import { ProjectDetails as PostMortemEng } from "../../data/projects/postmortemeng";
import { ProjectDetails as Rampify } from "../../data/projects/rampify";
import { ProjectDetails as Futurepedia } from "../../data/projects/futurepedia";

// Images are statically imported inside each project data file. Next.js
// strips any top-level import that is only referenced inside
// getStaticProps out of the client bundle, so this map must also be read
// directly in the component body below — otherwise webpack only processes
// these images in the server compilation and never emits them to the
// client-servable _next/static/media output, and every image 404s.
const projectDetails = {
  schedurx: Schedurx,
  postmortemeng: PostMortemEng,
  rampify: Rampify,
  futurepedia: Futurepedia,
};

const sectionDividerSx = {
  width: "100%",
  height: 3,
  mb: 3,
  backgroundColor: "#1e2435!important",
  display: "flex",
};

const ProjectVisitLink = ({ liveUrl, githubUrl }) => {
  if (liveUrl && githubUrl) {
    return <ProjectLinks websiteUrl={liveUrl} githubUrl={githubUrl} />;
  }
  if (liveUrl) {
    return (
      <Link href={liveUrl} target="_blank">
        <Typography
          variant="subtitle1"
          fontSize={FontSizes.para}
          className="SpaceFont"
        >
          Visit Site <RiExternalLinkLine />
        </Typography>
      </Link>
    );
  }
  if (githubUrl) {
    return (
      <Link href={githubUrl} target="_blank">
        <Typography
          variant="subtitle1"
          fontSize={FontSizes.para}
          className="SpaceFont"
        >
          View on GitHub <FaGithub />
        </Typography>
      </Link>
    );
  }
  return (
    <Typography
      variant="subtitle1"
      fontSize={FontSizes.para}
      className="SpaceFont GrayColor"
    >
      Private project — details on request
    </Typography>
  );
};

const Project = ({ slug }) => {
  const project = projectDetails[slug];
  const {
    title,
    description,
    seoDescription,
    role,
    techStack,
    architecture,
    impact,
    stack,
    Mood,
    screenshots,
    videos,
    liveUrl,
    githubUrl,
    background,
    startDate,
    endDate,
  } = project;
  const isMobile = useMediaQuery("(max-width:600px)");
  const metaDescription = seoDescription || description;

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description: metaDescription,
    url: `${SITE.url}/works/${slug}`,
    image: `${SITE.url}${background.src}`,
    author: {
      "@type": "Person",
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <Layout
      title={title}
      description={metaDescription}
      path={`/works/${slug}`}
      jsonLd={creativeWorkJsonLd}
    >
      <Container className={WorkStyles.FullSize} id="GScroll">
        <Box sx={{ mb: 3 }}>
          <Box
            className={WorkStyles.backgroundProject}
            sx={{ position: "relative" }}
          >
            <Image
              src={background}
              alt={`${title} cover`}
              layout="fill"
              objectFit="cover"
              priority
              placeholder="blur"
            />
            <Typography variant="h1" sx={{ position: "relative", zIndex: 1 }}>
              {title}
            </Typography>
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
              <ProjectVisitLink liveUrl={liveUrl} githubUrl={githubUrl} />
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
                {startDate} — {endDate}
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
                Architecture &amp; Approach
              </Typography>
              <Typography
                variant="subtitle1"
                fontSize={FontSizes.ProjectDescription}
                className={`GrayColor SpaceFont  ${WorkStyles.ProjectDescrption}`}
              >
                {architecture}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                variant="h5"
                className="SpaceFont"
                sx={{ opacity: 0.7, mt: 3, mb: 3 }}
              >
                Key Result
              </Typography>
              <Typography variant="h4" className="SpaceFont">
                {impact}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                variant="h5"
                className="SpaceFont"
                sx={{ mt: 3, mb: 3 }}
              >
                Tech Stack
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1.5}>
                {stack.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    className="SpaceFont"
                    sx={{
                      bgcolor: "#14192A",
                      color: "white",
                      border: "1px solid #1e2435",
                    }}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Box
          className={`${WorkStyles.MoodBoard}`}
          sx={{ position: "relative" }}
        >
          <Image
            src={Mood}
            alt={`${title} moodboard`}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </Box>
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
            <Divider sx={sectionDividerSx} />
            <Box className={WorkStyles.MasonryGrid}>
              {screenshots.map((shot, index) => (
                <Box key={index} className={WorkStyles.MasonryItem}>
                  <Image
                    src={shot}
                    alt={`${title} screenshot-${index}`}
                    layout="responsive"
                  />
                </Box>
              ))}
            </Box>

            {videos && videos.length > 0 && (
              <>
                <Typography
                  variant="h4"
                  fontSize={FontSizes.para}
                  className="SpaceFont"
                  sx={{ mt: 12, mb: 7, textAlign: "center" }}
                >
                  Videos
                </Typography>
                <Divider sx={sectionDividerSx} />
                <Box className={WorkStyles.MasonryGrid}>
                  {videos.map((videoSrc, index) => (
                    <Box key={index} className={WorkStyles.MasonryItem}>
                      <video
                        src={videoSrc}
                        controls
                        playsInline
                        preload="metadata"
                        style={{ width: "100%", display: "block" }}
                      />
                    </Box>
                  ))}
                </Box>
              </>
            )}
          </Container>
        </Box>
      </Container>
    </Layout>
  );
};

export default Project;

export async function getStaticPaths() {
  return {
    paths: SITE.works.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  if (!projectDetails[slug]) return { notFound: true };
  return {
    props: { slug },
    revalidate: 3600,
  };
}