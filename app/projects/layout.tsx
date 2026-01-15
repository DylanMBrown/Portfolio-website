import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Dylan Brown - Full Stack Developer",
  description:
    "Explore my portfolio of web applications, tools, and projects built with React, Next.js, TypeScript, and modern web technologies.",
  openGraph: {
    title: "Projects | Dylan Brown",
    description:
      "Full Stack Developer portfolio showcasing web applications and projects.",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
