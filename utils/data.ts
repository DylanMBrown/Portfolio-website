import type { Project, Skill, SocialLink } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with payment integration",
    longDescription:
      "A complete e-commerce solution featuring product catalog, shopping cart, checkout flow, and Stripe payment integration. Built with Next.js App Router for optimal performance and SEO.",
    image: "/projects/ecommerce.png",
    techStack: [
      { name: "Next.js", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Stripe", category: "backend" },
      { name: "PostgreSQL", category: "backend" },
    ],
    links: {
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/ecommerce",
    },
    featured: true,
    category: "web-app",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    longDescription:
      "A real-time task management application featuring drag-and-drop task boards, team collaboration, and live updates using WebSockets.",
    image: "/projects/taskapp.png",
    techStack: [
      { name: "React", category: "frontend" },
      { name: "Next.js", category: "frontend" },
      { name: "Socket.io", category: "backend" },
      { name: "MongoDB", category: "backend" },
    ],
    links: {
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/taskapp",
    },
    featured: true,
    category: "web-app",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Real-time weather data visualization dashboard",
    longDescription:
      "An interactive weather dashboard displaying current conditions, forecasts, and historical data with beautiful visualizations.",
    image: "/projects/weather.png",
    techStack: [
      { name: "Next.js", category: "frontend" },
      { name: "Chart.js", category: "frontend" },
      { name: "OpenWeather API", category: "backend" },
    ],
    links: {
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/weather",
    },
    category: "web-app",
  },
  {
    id: "4",
    title: "Analytics Dashboard",
    description:
      "Interactive data visualization with multiple chart types and filters",
    longDescription:
      "A comprehensive analytics dashboard featuring line charts, bar charts, and pie charts for data visualization. Includes date range filtering, dark mode support, and responsive design.",
    image: "/projects/analytics.png",
    techStack: [
      { name: "Next.js", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Recharts", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
    ],
    links: {
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/analytics",
    },
    featured: true,
    category: "web-app",
  },
  {
    id: "5",
    title: "Authentication System",
    description: "Secure OAuth-based authentication with NextAuth.js",
    longDescription:
      "A complete authentication system supporting OAuth providers (GitHub, Google), session management, and protected routes. Built with NextAuth.js v5 and Next.js App Router.",
    image: "/projects/auth.png",
    techStack: [
      { name: "Next.js", category: "frontend" },
      { name: "NextAuth.js", category: "backend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Zod", category: "tools" },
      { name: "Tailwind CSS", category: "frontend" },
    ],
    links: {
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/auth",
    },
    featured: true,
    category: "web-app",
  },
];

export const skills: Skill[] = [
  { id: "1", name: "React", category: "frontend", proficiency: 90 },
  { id: "2", name: "Next.js", category: "frontend", proficiency: 85 },
  { id: "3", name: "TypeScript", category: "frontend", proficiency: 85 },
  { id: "4", name: "Tailwind CSS", category: "frontend", proficiency: 90 },
  { id: "5", name: "Node.js", category: "backend", proficiency: 80 },
  { id: "6", name: "PostgreSQL", category: "backend", proficiency: 75 },
  { id: "7", name: "MongoDB", category: "backend", proficiency: 70 },
  { id: "8", name: "Docker", category: "devops", proficiency: 65 },
  { id: "9", name: "Git", category: "tools", proficiency: 90 },
  { id: "10", name: "AWS", category: "devops", proficiency: 60 },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
];
