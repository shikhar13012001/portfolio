import { Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ProjectItemLayout from "../ProjectLayout";
const WorkPaths = [
  {
    id: "schedurx",
    name: "ScheduRx",
    href: "/works/schedurx",
    image: "/works/schedurx/background.png",
    itemNumber: "01",
  },
  {
    id: "postmortemeng",
    name: "PostMortemEng",
    href: "/works/postmortemeng",
    image: "/works/postmortemeng/background.png",
    itemNumber: "02",
  },
  {
    id: "rampify",
    name: "Rampify",
    href: "/works/rampify",
    image: "/works/rampify/background.png",
    itemNumber: "03",
  },
  {
    id: "futurepedia",
    name: "Futurepedia",
    href: "/works/futurepedia",
    image: "/works/futurepedia/background.png",
    itemNumber: "04",
  },
];

const Projects = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Container disableGutters={!isMobile} sx={{ width: "100%", mt: 20, mb: 0 }}>
      <a id="projects"></a>
      <Typography variant="h4" className="SpaceFont" sx={{ mb: 1 }}>
        Projects
      </Typography>
      <Typography
        variant="body1"
        className="GrayColor SpaceFont"
        sx={{ width: isMobile ? "100%" : "30%", mb: 15 }}
      >
        A mix of production systems, AI agents, and independent builds. Some
        of my work at American Express is internal and isn&apos;t publicly
        linked, so it isn&apos;t listed here.
      </Typography>
      {WorkPaths.map((work, index) => (
        <ProjectItemLayout {...work} disableHover={isMobile} key={index} />
      ))}
    </Container>
  );
};

export default Projects;