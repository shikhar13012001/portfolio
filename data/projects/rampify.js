import background from "../../public/works/rampify/background.png";
import ProjectImage1 from "../../public/works/rampify/SS1.png";
import ProjectImage2 from "../../public/works/rampify/SS2.png";
import ProjectImage3 from "../../public/works/rampify/SS3.png";
import ProjectImage4 from "../../public/works/rampify/SS4.png";
import ProjectImage5 from "../../public/works/rampify/SS5.png";
import ProjectImage6 from "../../public/works/rampify/SS6.png";
import Mood from "../../public/works/rampify/moodboard/moodboard.png";

export const ProjectDetails = {
  title: "Rampify",
  seoDescription: `Rampify is a browser-based cinematic speed-ramp video editor. Draw a speed curve and export — entirely client-side, no upload required.`,
  description: `A browser-based cinematic speed-ramp video editor, built to slot into an automated video pipeline that desktop editors like DaVinci Resolve or CapCut couldn't support. Everything runs client-side — footage never leaves the browser.`,
  startDate: "2025",
  endDate: "Present",
  background: background,
  role: "Creator & Engineer",
  techStack: "React, Zustand, HTML Canvas, FFmpeg.wasm",
  architecture: `The core problem was converting an arbitrary Bézier speed curve into accurate frame-timestamp remapping. A Newton-Raphson solver handles the curve math, and since FFmpeg can't natively apply a continuously varying speed function, each timeline region is split into 50–100 constant-speed segments that approximate the smooth curve before being stitched together with FFmpeg.wasm. The editor has an interactive timeline with draggable section dividers, entirely in-browser via Canvas.`,
  Mood: Mood,
  screenshots: [ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4, ProjectImage5, ProjectImage6],
  impact: "100% client-side rendering — footage never leaves the browser",
  stack: ["React", "Zustand", "Canvas", "FFmpeg.wasm", "Bézier Curves"],
  liveUrl: "https://rampify-eight.vercel.app/",
};
