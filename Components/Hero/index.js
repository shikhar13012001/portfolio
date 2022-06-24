import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Container, Typography } from "@mui/material";
import { fontSizes } from "../../fonts";


export default function Home() {
  return (
    <Container className={`${styles.center} ${styles.fullSize}`}>
      <Typography variant="h1" fontSize={fontSizes}>
        WELCOME TO
        <br />
        <span className="margin-left">THE WORKSPACE</span> OF
        <span className="important-word margin-left-short">SHIKHAR</span>
      </Typography>
    </Container>
  );
}
