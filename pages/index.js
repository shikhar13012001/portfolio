
import { Container } from "@mui/material";
import Scroller from "../Components/Scroller";
import Hero from "../Components/Hero";
import About from "../Components/About";
export default function Home() {
  return (
    <Container disableGutters sx={{width:'100%',minHeight:'100vh'}}>
      <Hero />
      <Scroller />
      <About />
    </Container>
  );
}
