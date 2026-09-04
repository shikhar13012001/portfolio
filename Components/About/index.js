import {
  Button,
  Container,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { BsFillCircleFill } from "react-icons/bs";
import { FontSizes, fontSizes } from "../../fonts";
import ME from "../../public/images/profile.png";
import AboutStyles from "../../styles/About.module.css";
const About = () => {
  const StyledButton = styled(Button)({
    border: `1px solid #1a2430`,
    borderRadius: "5px",
  });
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Container disableGutters={!isMobile} className={AboutStyles.fullSize}>
      <a id="about"></a>
      <Grid container columns={12} className={AboutStyles.fullSize}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h1" fontSize={fontSizes}>
            About
          </Typography>
          <br />
          <br />
          <br />
          <Typography
            variant="h5"
            className="SpaceFont"
            fontSize={FontSizes.about}
          >
            I&apos;m a Software Engineer at American Express, based in
            Bengaluru, India. I build AI-driven products, agentic developer
            tooling, and backend systems.
          </Typography>
          <br />
          <br />
          <Typography
            variant="h6"
            className={`SpaceFont ${AboutStyles.description}`}
            fontSize={FontSizes.ProjectDescription}
          >
            At American Express I work on Automation &amp; Tools — shipping
            an LLM-powered VS Code extension for autonomous test generation, a
            terminal-native package manager for our internal Claude skills
            ecosystem, and an ML-based record-linkage system for payment
            adjudication. Before that, I built a RAG platform at Nasdaq and
            scaled a 200k-user product at Futurepedia.
          </Typography>
          <br />
          <br />
          <Typography
            variant="h6"
            className={`SpaceFont ${AboutStyles.description}`}
          >
            Outside of work, I build my own AI agents and voice systems end
            to end — from a multilingual clinic voice receptionist to a
            multi-agent video-generation pipeline — because I like owning a
            product from architecture through to the last mile of the UI.
          </Typography>
          <Typography
            variant="h2"
            className={AboutStyles.Rtitle}
            fontSize={FontSizes.subHeading}
          >
            FIND MY <span className="important-word">RESUME</span> HERE
          </Typography>

          <StyledButton fullWidth={isMobile}>
            <a
              href="/files/RESUME.pdf"
              download
              style={{ textDecoration: "none" }}
              className="SpaceFont"
            >
              Download Resume
            </a>
          </StyledButton>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className={AboutStyles.AboutImage}
        >
          <Image
            src={ME}
            alt="shikhar13012001"
            className={AboutStyles.AboutImageComponent}
          />
          <Marquee gradient={false} className={AboutStyles.Marquee}>
            <Typography variant="h4" className={AboutStyles.title}>
              <BsFillCircleFill size={10} className={AboutStyles.Circle} />{" "}
              SOFTWARE ENGINEER{" "}
              <BsFillCircleFill className={AboutStyles.Circle} size={10} />
            </Typography>
            <Typography variant="h4" className={AboutStyles.title}>
              <BsFillCircleFill className={AboutStyles.Circle} size={10} /> AI
              / ML ENGINEER{" "}
              <BsFillCircleFill className={AboutStyles.Circle} size={10} />
            </Typography>
          </Marquee>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
