import { Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { fontSizes } from "../../fonts";
import styles from "../../styles/AnimatedText.module.css";
// Word wrapper
const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props) => {
  // Framer Motion variant object, for controlling animation
  const isMobile = useMediaQuery("(max-width:600px)");
  const MobileResponsive = isMobile ? {} : fontSizes;
  const item = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap

  return (
    <Typography
      variant={isMobile ? "h2" : "h1"}
      className={styles.textAlign}
      fontSize={MobileResponsive}
    >
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                    color: `${props.color}!important`,
                  }}
                  key={index}
                >
                  <motion.span
                    style={{
                      display: "inline-block",
                      color: `${props.color}!important`,
                    }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Typography>
  );
};

export default AnimatedCharacters;
