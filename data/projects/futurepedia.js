import ProjectImage1 from "../../public/works/futurepedia/SS1.png";
import ProjectImage2 from "../../public/works/futurepedia/SS2.png";
import ProjectImage3 from "../../public/works/futurepedia/SS3.png";
import ProjectImage4 from "../../public/works/futurepedia/SS4.png";
import ProjectImage6 from "../../public/works/futurepedia/SS6.png";
import ProjectImage7 from "../../public/works/futurepedia/SS7.png";
import background from "../../public/works/futurepedia/background.png";
import Mood from "../../public/works/futurepedia/moodboard/moodboard.png";

export const ProjectDetails = {
  title: "Futurepedia",
  seoDescription: `Futurepedia is the go-to place for AI tools and news, scaled to 200,000+ users on Next.js and Sanity CMS.`,
  description: `Futurepedia is the go-to place for AI tools and news, serving 200,000+ AI enthusiasts. I worked full-stack across the platform, from vector search to performance and infrastructure cost.`,
  startDate: "October 2022",
  endDate: "June 2024",
  background: background,
  role: "Software Engineering Intern — Full Stack",
  techStack:
    "Next.js, Sanity CMS, Vercel, Typesense, Upstash Redis, Firebase, Google Cloud, Google Analytics",
  architecture: `Scaled a Next.js + Sanity CMS platform to 200,000+ users on Vercel. Led integration of Typesense vector search to replace basic keyword search, improving search precision by roughly 60%. Added serverless caching with Upstash Redis and shipped custom lazy-loaded YouTube embeds, which cut operational costs by about 19%, lifted the Lighthouse performance score by roughly 20 points, and improved conversions by about 15%.`,
  Mood: Mood,
  screenshots: [
    ProjectImage1,
    ProjectImage2,
    ProjectImage3,
    ProjectImage4,
    ProjectImage6,
    ProjectImage7,
  ],
  impact: "200K+ users · 60% better search precision · 19% lower infra cost",
  stack: ["Next.js", "Sanity CMS", "Typesense", "Upstash Redis", "Vercel"],
  liveUrl: "https://futurepedia.io/",
};
