import { Container, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { fontSizes } from "../../fonts";

const ExperienceData = [
  {
    itemNumber: "01",
    company: "American Express",
    role: "Software Engineer — Automation & Tools",
    meta: "Bengaluru, India · January 2025 – Present",
    points: [
      "Built a VS Code extension that autonomously generates JUnit tests for Java codebases using LLMs, AST parsing, and build-validate-fix loops — integrating JaCoCo coverage analysis and automated retry logic, cutting test-creation time by ~20%.",
      "Built Skills-PM, a terminal-native package manager for Amex's internal Claude skills ecosystem (TypeScript, Ink, Octokit) with multi-registry federation and a lock-file system, enabling discovery and install of 15,000+ skills without redundant cloning across 12+ teams.",
      "Designed a record-linkage system for France-market bill-payment adjudication — an 8-stage pipeline pairing Fellegi-Sunter probabilistic scoring with a calibrated LightGBM classifier over a 25-feature name-comparison vector, served via a Flask REST API.",
      "Built automated PR review agents on OpenCode and a Confluence-to-video documentation pipeline (Remotion + Claude); handled Dependabot, EarlyBird secrets-scanning, and OpenTelemetry instrumentation work across services.",
    ],
  },
  {
    itemNumber: "02",
    company: "Nasdaq",
    role: "Software Engineering Intern",
    meta: "Remote · June 2024 – July 2024",
    points: [
      "Developed a RAG-based conversational agent backend for large, sensitive documents using Spring Boot and Azure OpenAI, improving processing accuracy by ~30%.",
      "Designed and implemented a parallel processing framework for batch embedding creation, cutting document indexing time by ~80%.",
      "Built a prototype iOS app with an intuitive UI, integrating the backend via Alamofire.",
    ],
  },
  {
    itemNumber: "03",
    company: "Futurepedia",
    role: "Software Engineering Intern — Full Stack",
    meta: "Remote · October 2022 – June 2024",
    points: [
      "Scaled a Next.js + Sanity CMS platform to 200,000+ users on Vercel.",
      "Led integration of Typesense vector search, improving search precision by ~60%.",
      "Added serverless caching with Upstash Redis and custom lazy-loaded YouTube embeds — cutting operational costs by ~19%, lifting the Lighthouse score by ~20 points, and improving conversions by ~15%.",
    ],
  },
];

const Experience = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Container disableGutters={!isMobile} sx={{ width: "100%", mt: 20, mb: 0 }}>
      <a id="experience"></a>
      <Typography variant="h4" className="SpaceFont" sx={{ mb: 1 }}>
        Work Experience
      </Typography>
      <Typography
        variant="body1"
        className="GrayColor SpaceFont"
        sx={{ width: isMobile ? "100%" : "40%", mb: 10 }}
      >
        Where I&apos;ve built software professionally, most recent first.
      </Typography>
      {ExperienceData.map((exp, index) => (
        <Grid container columns={12} key={index} sx={{ mb: 8 }}>
          <Grid item xs={12} sm={1} md={1} lg={1}>
            <Typography variant="h6" className="SpaceFont">
              ({exp.itemNumber})
            </Typography>
          </Grid>
          <Grid item xs={12} sm={11} md={11} lg={11}>
            <Typography
              variant="h4"
              fontSize={fontSizes}
              sx={{ fontStyle: "italic", mb: 1 }}
            >
              {exp.company}
            </Typography>
            <Typography
              variant="subtitle1"
              className="SpaceFont"
              sx={{ mb: 0.5 }}
            >
              {exp.role}
            </Typography>
            <Typography
              variant="body2"
              className="GrayColor SpaceFont"
              sx={{ mb: 3 }}
            >
              {exp.meta}
            </Typography>
            <Grid container spacing={1}>
              {exp.points.map((point, i) => (
                <Grid item xs={12} md={10} lg={9} key={i}>
                  <Typography
                    variant="body2"
                    className="GrayColor SpaceFont"
                    sx={{ mb: 1.5, lineHeight: 1.7 }}
                  >
                    — {point}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Divider
            sx={{ backgroundColor: "#1e2435", width: "100%", mt: 5 }}
          />
        </Grid>
      ))}
    </Container>
  );
};

export default Experience;
