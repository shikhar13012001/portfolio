import React from "react";
import { Stack, Typography } from "@mui/material";
import { BsArrowDown } from "react-icons/bs";

const Scroller = () => {
  return (
    <Stack sx={{ width: "100%" }} display="flex" alignItems="center">
      <Typography variant="body1">Discover</Typography>
      <BsArrowDown size={30} />
    </Stack>
  );
};

export default Scroller;
