import React from "react";
import {
  Box,
  Typography,
  Container,
  styled,
  Grid,
  Divider,
} from "@mui/material";
import { fontSizes } from "../../fonts";
import ToolsStyle from "../../styles/Tools.module.css";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
const skills = [
  {
    name: "Next js",
    description: "UI library for interfaces and serverless workflows",
  },
  {
    name: "GraphQL",
    description:
      "GraphQL is a query language for APIs and is used for data fetching and mutation",
  },
  {
    name: "Firebase",
    description:
      "Firebase is a cloud database and cloud storage platform for web, mobile and server apps",
  },
  {
    name: "AWS-Amplify",
    description:
      "AWS Amplify is a framework for building APIs and mobile apps with AWS",
  },
  {
    name: "Figma",
    description:
      "Figma is a tool for designing and prototyping web and mobile apps",
  },
  {
    name: "Nodejs",
    description:
      "Nodejs is a JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  {
    name: "MongoDB",
    description:
      "MongoDB is a document-oriented database designed for storing data",
  },
  {
    name: "Material UI",
    description: "Material UI is a library for building user interfaces",
  },
  {
    name: "TypeScript",
    description:
      "TypeScript is a superset of JavaScript that compiles to plain JavaScript",
  },
  {
    name: "Sanity",
    description:
      "Sanity is a headless CMS that lets you manage content with a structured content model",
  },
  {
    name: "Typesense",
    description:
      "Typesense is a fast, typo-tolerant search engine, easier than elastic search",
  },

  {
    name: "Vercel",
    description:
      "Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow.",
  }
];
const Tools = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ width: "100%", minHeight: "40vh", mt: 8 }}>
      <Container>
        <Typography variant="h5" id="circular-text" className="SpaceFont">
          Tools / Libraries
        </Typography>
        <Typography
          variant="subtitle1"
          className="GrayColor SpaceFont"
          sx={{
            width: "60%",
            "@media (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          There are many tools that can be used for design, animation and visual
          development. But these are the tools I prefer to use to build the best
          digital experiences. In my opinion tools are not permanent and I’ll be
          always trying out new stuff :)
        </Typography>
      </Container>
      <Container
        disableGutters={true}
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 10,
          mb: 10,
          gap: 6,
          "@media (max-width: 600px)": {
            justifyContent: "center",
          },
        }}
      >
        {skills.map((item, key) => (
          <Box key={key} sx={{ width: isMobile ? "90%" : 300 }}>
            <Grid container columns={12}>
              <Grid
                item
                xs={12}
                sx={{
                  width: "100%",
                  height: isMobile ? 300 : 200,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  placeholder={require(`../../public/gradients/purple.png`)}
                  src={require(`../../public/gradients/${key + 1}.png`)}
                  alt=""
                  objectPosition={"center"}
                  priority
                />
              </Grid>
              <Grid item xs={3} sx={{ width: "100%", mr: 1 }}>
                <Typography variant="h2" className="GrayColor">
                  {key+1<10?`0${key + 1}`:`${key + 1}`}
                </Typography>
              </Grid>
              <Grid item xs={8} sx={{ width: "100%" }}>
                <Typography variant="h6" className="SpaceFont">
                  {item.name}
                </Typography>
                <Typography variant="caption" className="SpaceFont GrayColor">
                  {item.description}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
        <Typography
          variant="subtitle1"
          className="GrayColor SpaceFont"
          sx={{ width: "60%" }}
        >
          Still learning new stuff, I’ll be adding more tools as I learn new :)
        </Typography>
      </Container>
      <Divider sx={{ backgroundColor: "#1e2435" }} />
    </Box>
  );
};

export default Tools;
