# AGENT.md - Portfolio Website

## Project Type
Portfolio website for web development/IT job applications - built with Next.js (App Router) + Tailwind CSS.

## Purpose
Showcase projects and technical skills for potential employers. Focus on professional presentation, SEO, and responsive design.

## Essential Commands
```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript checks
npm run test:file    # Run single test: npm run test:file <path>
```

## Custom Agents
- `@portfolio-component` - Generate portfolio UI components
- `@responsive-validator` - Check responsive design
- `@seo-optimizer` - Review SEO best practices

## Quick Rules
- Server Components by default, "use client" only when needed
- Tailwind CSS utilities only (no custom CSS)
- TypeScript strict mode enabled
- Mobile-first responsive design
- next/image for all images with proper dimensions
- Follow Conventional Commits for Git messages

## Documentation
Full development guidelines available in `AGENTS.md` (comprehensive reference).
