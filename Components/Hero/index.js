import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Container, Typography } from "@mui/material";
import { fontSizes, FontSizes } from "../../fonts";
import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";
import { useMediaQuery } from "@mui/material";

const placeholderText = [
  { type: "heading1", text: "WELCOME TO THE ",color:"white" },
  { type: "heading1", text: "WORKSPACE OF",color:"white" },
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
  const isMobile = useMediaQuery("(max-width:600px)");
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
