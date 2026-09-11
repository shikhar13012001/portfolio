import { Box } from "@mui/material";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Layout from "../Components/Layout";
import Projects from "../Components/Projects";
import Scroller from "../Components/Scroller";
import Skills from "../Components/Skills";
import Tools from "../Components/Tools";
import PublishedPackages from "../Components/PublishedPackages";
import { SITE } from "../lib/site-config";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: `${SITE.url}/`,
  image: `${SITE.url}${SITE.ogImage}`,
  email: SITE.email,
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "American Express",
  },
  sameAs: [SITE.socials.github, SITE.socials.linkedin, SITE.socials.twitter],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: `${SITE.url}/`,
};

export default function Home() {
  return (
    <Layout path="/" jsonLd={[personJsonLd, websiteJsonLd]}>
      <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <Header />
        <Hero />
        <Scroller />
        <About />
        <Experience />
        <Skills />
        <Tools />
        <Projects />
        <PublishedPackages />
        <Contact />
        <Footer />
      </Box>
    </Layout>
  );
}
