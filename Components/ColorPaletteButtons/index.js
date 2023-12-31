import { Button, Stack, Snackbar, useMediaQuery  } from "@mui/material";
import { MdOutlineContentCopy } from "react-icons/md";

import React from "react";
const ColorPaletteButtons = ({ colors }) => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const [open, setOpen] = React.useState(false);

    
    const copyColor = (color) => {
        navigator.clipboard.writeText(color);
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
  return (
    <Stack>
      {colors.map((color) => (
        <Button
          variant="contained"
          className="SpaceFont"
          key={color}
          sx={{
            bgcolor: color,
            color: "black!important",
            width: isMobile ? "100%" : 400,
            height: 60,
            mb: 2,
            "&:hover": {
              bgcolor: color,
            },
          }}
          endIcon={<MdOutlineContentCopy/>}
          onClick={() => copyColor(color)}
        >
          {color}
        </Button>
      ))}
      <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Color Copied to Clipboard" 
    />
    </Stack>
  );
};
export default ColorPaletteButtons;

 