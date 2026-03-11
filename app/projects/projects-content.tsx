import { Metadata } from "next";
import ProjectsContent from "./projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of web applications, tools, and experiments built by Raisul Rayat. Showcasing expertise in React, Next.js, and modern web technologies.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
