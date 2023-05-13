import { Stack, Typography } from "@mui/material";
import { curveText } from "curvetext";
import React from "react";
import { BsArrowDown } from "react-icons/bs";
const Scroller = () => {
  React.useEffect(() => {
    const circularText = document.querySelector(".circular-text");
    curveText({
      element: circularText,
      radius: 60,
      angle: 360,
    });
  }, []);
  return (
    <Stack sx={{ width: "100%" }} display="flex" alignItems="center">
      <Typography
        variant="body1"
        className="circular-text"
        sx={{ width: "100%", height: 200 }}
      >
        DISCOVER. ME.
      </Typography>
    </Stack>
  );
};

export default Scroller;
