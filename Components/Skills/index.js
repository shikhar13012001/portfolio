import React from "react";
import Marquee from "react-fast-marquee";
import { fontSizes } from "../../fonts";
import { Box, Typography, styled, Container, Divider } from "@mui/material";
import { BsFillCircleFill } from "react-icons/bs";
import SkillsStyle from "../../styles/Skills.module.css";
const Skills = () => {
  const StyledTypography = styled(Typography)({
    marginRight: 80,
    fontStyle: "italic",
    "@media (max-width:600px)": {
      marginRight: 0,
    },
  });
  return (
    <Box sx={{ width: "100%", minHeight: "30vh", mt: 5 }}>
      <Marquee
        gradient={false}
        style={{ width: "100%", height: 200, overflow: "hidden" }}
      >
        <StyledTypography variant="h2">
          <BsFillCircleFill className={SkillsStyle.circle} size={30} />{" "}
          FULLSTACK DEVELOPER{" "}
          <BsFillCircleFill className={SkillsStyle.circle} size={30} />
        </StyledTypography>
        <StyledTypography variant="h2">
          <BsFillCircleFill className={SkillsStyle.circle} size={30} /> FRONTEND
          ENGINEER <BsFillCircleFill className={SkillsStyle.circle} size={30} />
        </StyledTypography>
        <StyledTypography variant="h2">
          <BsFillCircleFill className={SkillsStyle.circle} size={30} /> WEB
          DESIGNER <BsFillCircleFill className={SkillsStyle.circle} size={30} />
        </StyledTypography>
        <StyledTypography variant="h2">
          <BsFillCircleFill className={SkillsStyle.circle} size={30} /> OPEN
          SOURCE CONTRIBUTOR{" "}
          <BsFillCircleFill className={SkillsStyle.circle} size={30} />
        </StyledTypography>
      </Marquee>
      <Divider sx={{ backgroundColor: "#1e2435" }} />
    </Box>
  );
};

export default Skills;
