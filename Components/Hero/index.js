import { Container } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import styles from "../../styles/Home.module.css";
import AnimatedText from "../AnimatedText";

// Only one line should render as a real <h1> — the rest are decorative
// lead-in text sharing the same h1 font styling via the `variant` prop.
const placeholderText = [
  { type: "heading1", text: "WELCOME TO THE ", color: "white", component: "p" },
  { type: "heading1", text: "WORKSPACE OF", color: "white", component: "p" },
  { type: "heading1", text: "SHIKHAR", color: "#7176eb", component: "h1" },
];
const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};
export default function Home() {
  return (
    <Container className={`${styles.center} ${styles.fullSize}`}>
      <motion.div
        initial="hidden"
        animate="visible"
        //   animate={"hidden"}
        variants={container}
      >
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </motion.div>
    </Container>
  );
}
