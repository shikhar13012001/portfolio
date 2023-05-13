import { Container } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import styles from "../../styles/Home.module.css";
import AnimatedText from "../AnimatedText";

const placeholderText = [
  { type: "heading1", text: "WELCOME TO THE ", color: "white" },
  { type: "heading1", text: "WORKSPACE OF", color: "white" },
  { type: "heading1", text: "SHIKHAR", color: "#7176eb" },
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
