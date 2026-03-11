import { Metadata } from "next";
import ResumeContent from "./resume-content";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional experience, education, and technical skills of Raisul Rayat, a Frontend Developer specialized in React and Next.js.",
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return <ResumeContent />;
}
