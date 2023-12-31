import { Button, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
export default function ProjectLinks(props) {
  const { websiteUrl, githubUrl } = props;
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Stack direction="column" spacing={1} sx={{ my: 2 }}>
      <Button
        variant="contained"
        className="SpaceFont"
        sx={{
          bgcolor: "white",
          color: "black!important",
          width: isMobile ? "100%" : 400,
          height: 40,
          my: 2,
          mb: 2,
          "&:hover": {
            bgcolor: "whitesmoke",
            color: "white",
          },
        }}
        endIcon={<RiExternalLinkLine color="black" fill="black" size={20} />}
        href={websiteUrl}
        target="_blank"
      >
        Visit Site
      </Button>
      <Button
        variant="contained"
        className="SpaceFont"
        sx={{
          bgcolor: "white",
          color: "black!important",
          width: isMobile ? "100%" : 400,
          height: 40,
          my: 2,
          mb: 2,
          "&:hover": {
            bgcolor: "whitesmoke",
            color: "white",
          },
        }}
        endIcon={<FaGithub color="black" fill="black" size={20} />}
        href={githubUrl}
        target="_blank"
      >
        GitHub
      </Button>
    </Stack>
  );
}
