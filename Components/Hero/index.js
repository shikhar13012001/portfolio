import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Container, Typography } from "@mui/material";
import { fontSizes,FontSizes } from "../../fonts";
import React from "react";
import { useMediaQuery } from "@mui/material";
export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Container className={`${styles.center} ${styles.fullSize}`}>
      <Typography variant="h1" fontSize={FontSizes.Heading} className="stagger">
        WELCOME TO
        <br />
        <span className={isMobile ? "" : "margin-left"}>THE WORKSPACE</span> OF
        <span
          className={`important-word ${isMobile ? "" : "margin-left-short"}`}
        >
          SHIKHAR
        </span>
      </Typography>
    </Container>
  );
}
