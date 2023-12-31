/* eslint-disable @next/next/no-img-element */
import { Container, Typography, useMediaQuery } from "@mui/material";
import { gsap } from "gsap";
import React from "react";
import ProjectItemLayout from "../ProjectLayout";
const WorkPaths = [
  {
    id: "futurepedia",
    name: "Futurepedia",
    href: "/works/futurepedia",
    image: "https://i.ibb.co/2t0Yg3B/background.png",
    itemNumber: "01",
  },
  {
    id: "black-bird-blog",
    name: "Black Bird Blog",
    href: "/works/blackbird",
    image: "https://i.ibb.co/pP48W4j/Blog.png",
    itemNumber: "02",
  },
  {
    id: "gissues",
    name: "Gissues",
    href: "/works/gissues",
    image: "https://i.ibb.co/QmfJjfm/Gissues.png",
    itemNumber: "03",
  },
  {
    id: "museum-of-louvre",
    name: "Museum of Louvre",
    href: "/works/louvre",
    image: "https://i.ibb.co/8PZbBWq/Museum.png",
    itemNumber: "04",
  },
  {
    id: "prospero",
    name: "Prospero",
    href: "/works/prospero",
    image: "https://i.ibb.co/sV9nX4Z/Screenshot-189.png",
    itemNumber: "05",
  },
];

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
        Here are some of the projects I have worked on. Feel free to check out
        some of my work. Few Projects are not hosted because of the cost of
        hosting.
      </Typography>
      {WorkPaths.map((work, index) => (
        <ProjectItemLayout {...work} key={index} />
      ))}
    </Container>
  );
};

export default Projects;
