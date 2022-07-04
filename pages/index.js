import { Container, Box } from "@mui/material";
import Scroller from "../Components/Scroller";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Tools from "../Components/Tools";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
export default function Home() {
  return (
    <Layout>
      <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <Header />
        <Hero />
        <Scroller />
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </Layout>
  );
}
