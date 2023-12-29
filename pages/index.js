import { Box } from "@mui/material";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Layout from "../Components/Layout";
import Projects from "../Components/Projects";
import Scroller from "../Components/Scroller";
import Skills from "../Components/Skills";
import Tools from "../Components/Tools";
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
