import background from "../../public/works/postmortemeng/background.png";
import ProjectImage1 from "../../public/works/postmortemeng/SS3.png";
import ProjectImage2 from "../../public/works/postmortemeng/SS4.png";
import ProjectImage3 from "../../public/works/postmortemeng/SS5.png";
import ProjectImage4 from "../../public/works/postmortemeng/SS6.png";
import ProjectImage5 from "../../public/works/postmortemeng/SS7.png";
import ProjectImage6 from "../../public/works/postmortemeng/SS8.png";
import ProjectImage7 from "../../public/works/postmortemeng/SS9.png";
import ProjectImage8 from "../../public/works/postmortemeng/SS10.png";
import ProjectImage9 from "../../public/works/postmortemeng/SS11.png";
import ProjectImage10 from "../../public/works/postmortemeng/SS12.png";
import ProjectImage11 from "../../public/works/postmortemeng/SS13.png";
import Mood from "../../public/works/postmortemeng/moodboard/image.png";

export const ProjectDetails = {
  title: "PostMortemEng",
  seoDescription: `PostMortemEng is a multi-agent AI pipeline that turns engineering-failure research into narrated YouTube Shorts in minutes instead of hours.`,
  description: `A multi-agent AI video pipeline that turns forensic-engineering research into narrated YouTube Shorts, cutting end-to-end production from 6–10 hours down to about 7 minutes per video.`,
  startDate: "2025",
  endDate: "Present",
  background: background,
  role: "Solo Creator & Engineer",
  techStack: "Remotion, GSAP, Ollama, Kokoro TTS, Whisper, FFmpeg, Zod",
  architecture: `A four-stage agent pipeline — Script Writer, Art Director, Component Builder, then a QA Reviewer — where the QA stage acts as a schema-validated gate between every handoff, rejecting bad generations before they become broken videos (20 rejected across 7 test renders). Narration runs through Kokoro TTS with Whisper for word-level caption alignment, and Remotion + GSAP handle rendering and motion. Render time was the real bottleneck undermining the "fully automated" claim; tracing it to a worker-concurrency misconfiguration and fixing it delivered a 24× render speedup, which is what made the 7-minute number real.`,
  Mood: Mood,
  screenshots: [
    ProjectImage1,
    ProjectImage2,
    ProjectImage3,
    ProjectImage4,
    ProjectImage5,
    ProjectImage6,
    ProjectImage7,
    ProjectImage8,
    ProjectImage9,
    ProjectImage10,
    ProjectImage11,
  ],
  videos: [
    "/works/postmortemeng/video1.mp4",
    "/works/postmortemeng/video2.mp4",
    "/works/postmortemeng/video3.mp4",
    "/works/postmortemeng/video4.mp4",
    "/works/postmortemeng/video5.mp4",
  ],
  impact: "24× faster renders · 6–10 hrs cut to ~7 min per video",
  stack: ["Remotion", "GSAP", "Ollama", "Kokoro TTS", "Whisper", "FFmpeg"],
  githubUrl: "https://github.com/shikhar13012001/remotion-ollama-short-generator",
};
