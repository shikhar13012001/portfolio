import background from "../../public/works/schedurx/background.png";
import ProjectImage1 from "../../public/works/schedurx/SS2.png";
import ProjectImage2 from "../../public/works/schedurx/SS3.png";
import ProjectImage3 from "../../public/works/schedurx/SS4.png";
import ProjectImage4 from "../../public/works/schedurx/SS6.png";
import ProjectImage5 from "../../public/works/schedurx/SS7.png";
import ProjectImage6 from "../../public/works/schedurx/SS8.png";
import Mood from "../../public/works/schedurx/SS5.png";

export const ProjectDetails = {
  title: "ScheduRx",
  seoDescription: `ScheduRx is a clinic operating system for independent doctors in India — a staff dashboard, patient booking site and phone voice agent sharing one backend on Supabase Postgres.`,
  description: `A clinic operating system for independent doctors in India, built as a set of independently deployable services: a staff-facing "Clinic Command Center" dashboard, a public patient booking site, and a phone-based voice agent — all backed by one Express API that owns the data.`,
  startDate: "2025",
  endDate: "Present",
  background: background,
  role: "Founder & Full-Stack Engineer",
  techStack:
    "Next.js 14, TypeScript, Firebase Auth, Supabase (Postgres + Realtime), Zustand, TanStack Query, Radix UI, Tailwind CSS, Express 5, Stripe, Twilio, ElevenLabs, Vercel AI SDK, Nettu Scheduler",
  architecture: `The staff dashboard is a Next.js 14 App Router app authenticated with Firebase ID tokens (custom claims carry role, clinicId, doctorId — no server-side sessions), using Zustand for client state and TanStack Query/Table for data, with a Supabase Realtime channel driving the live patient queue. It talks to a separate Express 5 API that is the actual source of truth on Supabase Postgres, and owns every third-party integration: Nettu Scheduler for calendar and availability only, Stripe for billing (a migration off an earlier Razorpay integration — the old razorpayOrderId columns are still in the schema, dormant), Twilio for WhatsApp and SMS, and a Vercel AI SDK assistant on GPT-4o mini that streams answers inside the dashboard and auto-replies to WhatsApp messages via tool-calling. ElevenLabs powers dashboard-side text-to-speech and an ambient visit-transcription feature (Scribe), while phone calls are handled by a dedicated calling-agent service that authenticates against a bearer-token-gated internal tools API rather than touching the database directly — keeping the dashboard, patient booking site, and telephony layer as separate, independently deployable pieces of one system.`,
  Mood: Mood,
  screenshots: [
    ProjectImage1,
    ProjectImage2,
    ProjectImage3,
    ProjectImage4,
    ProjectImage5,
    ProjectImage6,
  ],
  impact: "Dashboard, booking site & voice agent as separate services on one data model",
  stack: [
    "Next.js 14",
    "Firebase Auth",
    "Supabase",
    "Express",
    "Stripe",
    "Twilio",
    "ElevenLabs",
    "Vercel AI SDK",
  ],
  liveUrl: "https://schedurx.com",
};
