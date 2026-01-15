export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  techStack: TechStackItem[];
  links: ProjectLinks;
  featured?: boolean;
  category?: ProjectCategory;
}

export interface TechStackItem {
  name: string;
  category: TechCategory;
  color?: string;
}

export type TechCategory =
  | "frontend"
  | "backend"
  | "devops"
  | "tools"
  | "other";

export interface ProjectLinks {
  liveUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export type ProjectCategory =
  | "web-app"
  | "mobile-app"
  | "api"
  | "tool"
  | "other";

export interface Skill {
  id: string;
  name: string;
  category: TechCategory;
  proficiency: number;
  icon?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  graduationYear: number;
  description?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormState {
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface AnalyticsData {
  date: string;
  visitors: number;
  pageViews: number;
  bounceRate: number;
}

export interface AuthFormState {
  success: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: number;
  description: string;
}
