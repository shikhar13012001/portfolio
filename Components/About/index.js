import React from "react";
import { Grid, Typography,Button,styled } from "@mui/material";
import AboutStyles from "../../styles/About.module.css";
import { fontSizes } from "../../fonts";
import Image from "next/image";
import ME from "../../public/images/demo.png";
import Marquee from "react-fast-marquee";
import { BsFillCircleFill } from "react-icons/bs";

const About = () => {
  const StyledButton = styled(Button)({
    border: `1px solid #1a2430`,
    borderRadius: "5px",
  });
  return (
    <Grid container columns={12} className={AboutStyles.fullSize}>
      <Grid item xs={6}>
        <Typography variant="h1" fontSize={fontSizes}>
          About
        </Typography>
        <br />
        <br />
        <br />
        <Typography variant="h5" className="SpaceFont">
          I’m a Digital Designer & Visual Developer based in Enschede,
          Netherlands. Creating digital experiences with an eye for design and
          motion.
        </Typography>
        <br />
        <br />
        <Typography
          variant="h6"
          className={`SpaceFont ${AboutStyles.description}`}
        >
          Being creative with digital and motion design for websites is what
          I’ve been doing for the past 5+ years. With just UI / UX design I was
          not satisfied. Creating websites that are visually attractive through
          design and motion is what I love to do.
        </Typography>
        <br />
        <br />
        <Typography
          variant="h6"
          className={`SpaceFont ${AboutStyles.description}`}
        >
          By embracing no-code tools like Webflow I'm not just the designer
          anymore. Now I can develop my own digital creations into an online
          experience, while having full control of design, motion and build.
        </Typography>
        <Typography variant="h2" className={AboutStyles.Rtitle}>
          FIND MY <span className="important-word">RESUME</span> HERE
        </Typography>
        <StyledButton>Download Resume</StyledButton>
      </Grid>
      <Grid item xs={6} className={AboutStyles.AboutImage}>
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
  );
};

export default About;
