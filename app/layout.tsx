import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dylanbrown.dev"),
  title: "DBro - 3D Graffiti Portfolio",
  description:
    "Interactive 3D graffiti portfolio of Dylan Brown - Aboriginal Web Dev, IT, AI/LLM",
  keywords: [
    "Dylan Brown",
    "DBro",
    "Aboriginal Web Dev",
    "IT",
    "AI",
    "LLM",
    "Homelaber",
    "Networker",
    "Full Stack Developer",
    "3D Portfolio",
    "Graffiti Wall",
  ],
  authors: [{ name: "Dylan Brown" }],
  creator: "Dylan Brown",
  publisher: "Dylan Brown",
  openGraph: {
    title: "DBro - 3D Graffiti Portfolio",
    description:
      "Interactive 3D graffiti portfolio of Dylan Brown - Aboriginal Web Dev, IT, AI/LLM",
    type: "website",
    locale: "en_US",
    siteName: "3D Graffiti Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Graffiti Portfolio",
    description:
      "Interactive 3D portfolio with graffiti wall and floating projects",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dylan Brown",
    jobTitle: "Full Stack Developer",
    url: "https://yourdomain.com",
    sameAs: ["https://github.com/dbro", "https://linkedin.com/in/dbro"],
    knowsAbout: [
      "Web Development",
      "Full Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.webgl = (function() {
                try {
                  const canvas = document.createElement('canvas');
                  return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
                } catch (e) {
                  return false;
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} ${jetbrains.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
