import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dylan Brown - Web Developer",
  description:
    "Get in touch with Dylan Brown for project inquiries, collaboration opportunities, or just to say hello. I'm always excited to connect with fellow developers.",
  openGraph: {
    title: "Contact | Dylan Brown",
    description:
      "Web Developer open for new opportunities and collaborations.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
