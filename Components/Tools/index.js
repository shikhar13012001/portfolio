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

import JavaIcon from "../../public/tools/java.svg";
import SpringBootIcon from "../../public/tools/springboot.svg";
import PythonIcon from "../../public/tools/python.svg";
import NextJsIcon from "../../public/tools/nextdotjs.svg";
import TypeScriptIcon from "../../public/tools/typescript.svg";
import LangChainIcon from "../../public/tools/langchain.svg";
import DockerIcon from "../../public/tools/docker.svg";
import KubernetesIcon from "../../public/tools/kubernetes.svg";
import PostgreSQLIcon from "../../public/tools/postgresql.svg";
import TwilioIcon from "../../public/tools/twilio.svg";
import GitHubActionsIcon from "../../public/tools/githubactions.svg";
import VercelIcon from "../../public/tools/vercel.svg";

const skills = [
  {
    name: "Java",
    icon: JavaIcon,
    description:
      "Primary language for production backend services and JVM tooling at American Express",
  },
  {
    name: "Spring Boot",
    icon: SpringBootIcon,
    description:
      "Framework for production backend services and internal developer tools",
  },
  {
    name: "Python",
    icon: PythonIcon,
    description:
      "Language of choice for ML pipelines, model-scoring APIs, and automation tooling",
  },
  {
    name: "Next js",
    icon: NextJsIcon,
    description: "React framework for full-stack product frontends",
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
    description:
      "Typed JavaScript I default to for frontends, CLIs and Node services",
  },
  {
    name: "LangChain",
    icon: LangChainIcon,
    description:
      "Agentic pipelines and retrieval-augmented systems on GPT-4o, Claude and Azure OpenAI",
  },
  {
    name: "Docker",
    icon: DockerIcon,
    description:
      "Containerizing services for consistent local dev and deployment",
  },
  {
    name: "Kubernetes",
    icon: KubernetesIcon,
    description: "Orchestrating containerized workloads in production",
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQLIcon,
    description:
      "Primary relational store for application and clinical data via Supabase and Prisma",
  },
  {
    name: "Twilio",
    icon: TwilioIcon,
    description:
      "SIP telephony and messaging infrastructure behind my voice AI and WhatsApp integrations",
  },
  {
    name: "GitHub Actions",
    icon: GitHubActionsIcon,
    description: "CI/CD pipelines for build-validate-test-deploy workflows",
  },
  {
    name: "Vercel",
    icon: VercelIcon,
    description:
      "Deployment platform for Next.js apps and preview environments",
  },
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
          There are many tools out there for backend systems, AI pipelines and
          developer tooling. These are the ones I reach for most. In my
          opinion tools are not permanent and I&apos;ll always be trying out
          new stuff :)
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
                <Box
                  sx={{
                    width: isMobile ? 190 : 150,
                    height: isMobile ? 190 : 150,
                    borderRadius: 3,
                    bgcolor: "#f4f4f4",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={isMobile ? 130 : 100}
                    height={isMobile ? 130 : 100}
                    priority
                  />
                </Box>
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
