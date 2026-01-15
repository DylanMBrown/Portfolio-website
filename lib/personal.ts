import type {
  Project,
  Skill,
  SocialLink,
  Experience,
  Education,
  Certification,
  Testimonial,
  ContactFormData,
  ContactFormState,
} from "@/types";

export const personalInfo = {
  name: "Dylan Brown",
  title: "Web Developer & IT Specialist",
  tagline: "Bridging Healthcare Systems & Modern Web Tech",
  description: `I am an emerging Web Developer and IT Professional with a strong foundation in healthcare systems and student support. Currently pivoting from a career in NSW Health and TAFE NSW into the digital space, I offer a unique blend of technical discipline, complex problem-solving, and community-focused values.

My journey is just beginning. I am "learning by doing"—building real-world projects like 'Mob Kin Connect' to master modern frameworks like Next.js and Tailwind. I am available for freelance projects and keen to help businesses build accessible, culturally-aware digital solutions.`,
  location: "Mount Annan, NSW 2567",
  email: "Dylan.Brown127@tafensw.edu.au",
  availability: "Open to opportunities",
  github: "https://github.com/dylanbrown127",
  linkedin: "https://linkedin.com/in/dylan-brown-127",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/dylanbrown127",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/dylan-brown-127",
    icon: "linkedin",
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    role: "Aboriginal Student Support Officer",
    company: "TAFFE NSW, Sydney",
    location: "Sydney, NSW",
    startDate: "2022-12",
    endDate: "Present",
    description: `Manage student database systems and provide technical support services while developing career pathway plans for diverse student populations. Collaborate with IT teams on system improvements and create documentation for database procedures. Prepare data reports and analytics to support strategic planning initiatives. This role strengthens ability to understand user needs, communicate technical concepts clearly, and work effectively in team environments.`,
    technologies: [
      "Customer Service",
      "Technical Support",
      "Documentation",
      "Team Leadership",
      "Problem Solving",
    ],
  },
  {
    id: "2",
    role: "Team Leader Aboriginal Student Support Officer",
    company: "TAFFE NSW, Sydney",
    location: "Sydney, NSW",
    startDate: "2022-06",
    endDate: "2022-12",
    description: `Led distributed team through organizational modernization, managing resource allocation and implementing continuous improvement processes. Developed strategic plans in collaboration with senior stakeholders while maintaining strong focus on user experience and service delivery. Enhanced skills in project management, stakeholder communication, and leading technical initiatives under changing requirements.`,
    technologies: [
      "Project Management",
      "Stakeholder Management",
      "Strategic Planning",
      "Team Leadership",
      "Process Improvement",
    ],
  },
  {
    id: "3",
    role: "Medical Records Administration",
    company: "Concord Hospital, NSW Health",
    location: "Concord, NSW",
    startDate: "2021-01",
    endDate: "2021-12",
    description: `Maintained detailed digital records and documentation using care management systems. Demonstrated adaptability in understanding and responding to diverse individual needs while working collaboratively with multidisciplinary teams. Developed expertise in healthcare data systems, user training, and technical problem-solving.`,
    technologies: [
      "Electronic Medical Records",
      "Patient Management",
      "Healthcare Systems",
      "Documentation",
    ],
  },
  {
    id: "4",
    role: "Medical Records Administration",
    company: "Concord Hospital, NSW Health",
    location: "Concord, NSW",
    startDate: "2020-12",
    endDate: "2021-12",
    description: `Demonstrated adaptability in understanding and responding to diverse individual needs while working collaboratively with multidisciplinary teams. Developed expertise in healthcare data systems, user training, and technical problem-solving.`,
    technologies: [
      "Patient Management",
      "Data Entry",
      "Healthcare Systems",
      "Documentation",
    ],
  },
  {
    id: "5",
    role: "PAS Supervisor, Medical Records Department",
    company: "Concord Hospital, NSW Health",
    location: "Concord, NSW",
    startDate: "2021-01",
    endDate: "2021-12",
    description: `Supervised patient access systems team while managing EMR and PowerChart electronic health record platforms. Trained staff on complex database systems, resolved technical issues, and maintained data integrity across patient registration workflows. Handled system access provisioning, audit compliance, and collaborated with IT department on system improvements.`,
    technologies: [
      "EMR",
      "PowerChart",
      "Electronic Medical Records",
      "Patient Management",
      "Data Integrity",
      "System Implementation",
    ],
  },
  {
    id: "6",
    role: "Scanning Supervisor, Medical Records Department",
    company: "Concord Hospital, NSW Health",
    location: "Concord, NSW",
    startDate: "2021-01",
    endDate: "2019-01",
    description: `Managed document digitization workflows and quality assurance processes for medical records database. Generated monthly statistical reports, audited system usage, and provided technical support to scanning staff. Coordinated with IT teams on system updates and process improvements.`,
    technologies: [
      "Document Management",
      "Quality Assurance",
      "Data Analysis",
      "Technical Support",
      "System Auditing",
    ],
  },
  {
    id: "7",
    role: "Administration Officer, Emergency Department",
    company: "Concord Hospital, NSW Health",
    location: "Concord, NSW",
    startDate: "2019-01",
    endDate: "2020-12",
    description: `Operated FIRSTNET patient management system in high-pressure environment requiring quick technical proficiency and attention to detail. Managed patient data entry, file assembly, and appointment scheduling while maintaining data accuracy standards. Developed ability to learn complex software quickly and work effectively under time constraints.`,
    technologies: [
      "FIRSTNET",
      "Patient Management",
      "Healthcare Systems",
      "Data Entry",
      "System Administration",
    ],
  },
  {
    id: "8",
    role: "Disability Support Worker",
    company: "Australian Mentoring Services (NDIS)",
    location: "Remote",
    startDate: "2022-03",
    endDate: "2023-12",
    description: `Maintained detailed digital records and documentation using care management systems. Demonstrated adaptability in understanding and responding to diverse individual needs while working collaboratively with multidisciplinary teams.`,
    technologies: [
      "Care Management Systems",
      "Documentation",
      "Communication",
      "Team Collaboration",
    ],
  },
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Certificate III in Information, Digital Media and Technology",
    field: "Front-End Development",
    institution: "TAFFE NSW, Eora College",
    location: "Sydney, NSW",
    graduationYear: 2023,
    description:
      "Comprehensive training in HTML5, CSS3, JavaScript ES6+, responsive design, and modern web development practices. Included projects in dynamic web applications and user interface design.",
  },
  {
    id: "2",
    degree: "Certificate IV in Information Technology",
    field: "Programming",
    institution: "TAFFE NSW, Eora College",
    location: "Sydney, NSW",
    graduationYear: 2022,
    description:
      "Advanced programming concepts including algorithms, data structures, database design, and software development methodologies. Focused on building robust, scalable applications.",
  },
  {
    id: "3",
    degree: "Certificate III in Vocational Studies and Pathways",
    field: "Information, Digital Media and Technology",
    institution: "TAFFE NSW, Eora College",
    location: "Sydney, NSW",
    graduationYear: 2013,
    description:
      "Introduction to Front-End Development. Version control, collaborative workflows, pull requests, and team development practices.",
  },
  {
    id: "4",
    degree: "Certificate IV in Information Technology",
    field: "Programming",
    institution: "TAFFE NSW, Eora College",
    location: "Sydney, NSW",
    graduationYear: 2022,
    description:
      "Version control, collaborative workflows, pull requests, and team development practices.",
  },
  {
    id: "5",
    degree: "Certificate III in Vocational Studies and Pathways",
    field: "Information, Digital Media and Technology - Front-End Development",
    institution: "TAFFE NSW, Eora College",
    location: "Sydney, NSW",
    graduationYear: 2022,
    description:
      "Information, Digital Media and Technology - Front-End Development stream.",
  },
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    year: 2023,
    description:
      "Comprehensive training in React, responsive design, and modern JavaScript practices.",
  },
  {
    id: "2",
    name: "Git & GitHub Training",
    issuer: "TAFFE NSW",
    year: 2023,
    description:
      "Version control, collaborative workflows, pull requests, and team development practices.",
  },
  {
    id: "3",
    name: "Certificate III in Vocational Studies and Pathways",
    issuer: "TAFFE NSW",
    year: 2013,
    description:
      "Information, Digital Media and Technology - Front-End Development stream.",
  },
];

export const interests = [
  "Homelabbing & Infrastructure",
  "AI/LLM Development",
  "Open Source Contributing",
  "Tech Community Networking",
  "Continuous Learning",
  "Clean Code & Best Practices",
];

export const values = [
  {
    title: "Accessibility First",
    description:
      "Building inclusive experiences that work for everyone, regardless of abilities or devices.",
  },
  {
    title: "Performance Matters",
    description:
      "Optimizing for speed and efficiency to provide best possible user experience.",
  },
  {
    title: "Clean Code",
    description:
      "Writing maintainable, well-documented code that stands the test of time.",
  },
  {
    title: "Continuous Learning",
    description:
      "Staying current with industry trends and always expanding my skill set.",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Mob Kin Connect",
    description:
      "A digital platform enabling Indigenous communities to maintain kinship connections and ensure digital sovereignty over their cultural data.",
    longDescription: `Mob Kin Connect represents a significant step forward in digital self-determination for Indigenous communities. Key features include:

• Secure Kinship Mapping: Privacy-focused tools for tracing and maintaining family connections.
• Cultural Data Sovereignty: ensuring communities retain full ownership and control of their information.
• Accessible Design: Built with a 'community-first' approach, ensuring usability for Elders and youth alike.
• Community Moderation: Tools for Elders to govern community spaces and cultural protocols.

This project combines modern full-stack engineering with deep cultural respect, implementing complex permission systems to adhere to traditional knowledge protocols.`,
    image: "/projects/mob-kin-connect.png", // specific placeholder
    techStack: [
      { name: "Next.js", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Supabase", category: "backend" },
      { name: "Tailwind CSS", category: "frontend" },
    ],
    links: {
      githubUrl: "https://github.com/DylanMBrown/mob-kin-connect",
      liveUrl: "https://mob-kin-connect.vercel.app", // Assumed Vercel deployment
    },
    featured: true,
    category: "web-app",
  },
];

export const skills: Skill[] = [
  { id: "1", name: "React", category: "frontend", proficiency: 95 },
  { id: "2", name: "Next.js", category: "frontend", proficiency: 90 },
  { id: "3", name: "TypeScript", category: "frontend", proficiency: 90 },
  { id: "4", name: "Tailwind CSS", category: "frontend", proficiency: 95 },
  { id: "5", name: "Vue.js", category: "frontend", proficiency: 80 },
  { id: "6", name: "Node.js", category: "backend", proficiency: 85 },
  { id: "7", name: "PostgreSQL", category: "backend", proficiency: 80 },
  { id: "8", name: "MongoDB", category: "backend", proficiency: 75 },
  { id: "9", name: "Prisma", category: "tools", proficiency: 85 },
  { id: "10", name: "Docker", category: "devops", proficiency: 70 },
  { id: "11", name: "AWS", category: "devops", proficiency: 65 },
  { id: "12", name: "Git", category: "tools", proficiency: 95 },
  { id: "13", name: "Jest", category: "tools", proficiency: 80 },
  { id: "14", name: "Cypress", category: "tools", proficiency: 75 },
  { id: "15", name: "AI/LLM Integration", category: "other", proficiency: 80 },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Team Leader Aboriginal Student Support Officers, TAFE NSW",
    company: "TAFFE NSW, Sydney",
    content:
      "Dylan is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    avatar: "/testimonials/sarah.jpg",
  },
  {
    id: "2",
    name: "Belinda Craig",
    role: "Senior Manager Aboriginal Education and Engagement, TAFE NSW",
    company: "TAFFE NSW, Sydney",
    content:
      "Working with Dylan was a pleasure. He brings not just technical skills but also a great understanding of business requirements and user needs.",
    avatar: "/testimonials/belinda.jpg",
  },
];
