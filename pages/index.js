
import { Container,Box } from "@mui/material";
import Scroller from "../Components/Scroller";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Tools from "../Components/Tools";
export default function Home() {
  return (
    <Box  sx={{ width: "100%", minHeight: "100vh" }}>
      <Hero />
      <Scroller />
      <About />
      <Skills />
      <Tools />
    </Box>
  );
}
