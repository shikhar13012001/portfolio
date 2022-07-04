import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { FontSizes } from "../../fonts";
import { RiMenu4Fill } from "react-icons/ri";
import DrawerStyles from "../../styles/Drawer.module.css";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const placeholderText = [
    { type: "heading1", text: "Home" },
    { type: "heading1", text: "About" },
    { type: "heading1", text: "Works" },
    { type: "heading1", text: "Contact" },
  ];
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={DrawerStyles.Drawer}
    >
      <motion.div
        className="App"
        initial="hidden"
        animate="visible"
        //   animate={"hidden"}
        variants={container}
      >
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </motion.div>
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <RiMenu4Fill size={30} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            transitionDuration={{ enter: 500, exit: 200 }}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
