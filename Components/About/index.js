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
            Im a Digital Designer & Visual Developer based in Lucknow, India.
            Creating digital experiences with an eye for design and motion.
          </Typography>
          <br />
          <br />
          <Typography
            variant="h6"
            className={`SpaceFont ${AboutStyles.description}`}
            fontSize={FontSizes.ProjectDescription}
          >
            Being creative with digital and motion design for websites is what
            I’ve been doing for the past few months of College. With just UI /
            UX design I was not satisfied. Creating websites that are visually
            attractive through design and motion is what I love to do.
          </Typography>
          <br />
          <br />
          <Typography
            variant="h6"
            className={`SpaceFont ${AboutStyles.description}`}
          >
            By embracing code and proper tools. I&apos;m not just the designer
            anymore. Now I can develop my own digital creations into an online
            experience, while having full control of design, motion and build.
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
              FRONTEND DEVELOPER{" "}
              <BsFillCircleFill className={AboutStyles.Circle} size={10} />
            </Typography>
            <Typography variant="h4" className={AboutStyles.title}>
              <BsFillCircleFill className={AboutStyles.Circle} size={10} /> WEB
              DESIGNER{" "}
              <BsFillCircleFill className={AboutStyles.Circle} size={10} />
            </Typography>
          </Marquee>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
