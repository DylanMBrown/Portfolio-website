# AGENTS.md - Portfolio Website Development Guide

## Project Overview
Portfolio website showcasing web development/IT projects for potential employers and employees. Built with Next.js (App Router) + Tailwind CSS for optimal performance, SEO, and developer experience.

---

## Build, Lint, and Test Commands

### Development
```bash
npm run dev          # Start development server on localhost:3000
npm run build        # Create production build in .next/
npm start            # Start production server (after build)
npm run preview      # Preview production build locally
```

### Code Quality
```bash
npm run lint         # Run ESLint for code quality checks
npm run lint:fix     # Auto-fix ESLint issues where possible
npm run format       # Run Prettier to format code
npm run format:check # Check if code is formatted (CI-friendly)
npm run type-check   # Run TypeScript type checking without building
```

### Testing
```bash
npm run test         # Run all tests (Jest/Vitest)
npm run test:watch   # Run tests in watch mode for development
npm run test:ui      # Launch interactive test UI
npm run test:file    # Run single test file: npm run test:file path/to/test.test.ts
npm run test:coverage # Generate test coverage report
```

### E2E Testing
```bash
npm run e2e          # Run Playwright E2E tests headless
npm run e2e:ui       # Launch Playwright test UI for debugging
npm run e2e:headed   # Run E2E tests with visible browser
```

---

## Agent Usage Guidelines

### Built-in Agents

**Build Agent** (default)
- Use for full development work: creating files, editing code, running commands
- Has all tools enabled (write, edit, bash, etc.)
- Switch to this agent when making actual code changes

**Plan Agent**
- Use for analysis, planning, and code review without making changes
- File edits and bash commands require approval (set to "ask")
- Switch to this agent when you want suggestions or analysis only

### Custom Portfolio Agents

**@portfolio-component** - Generate Portfolio Components
- Use when creating portfolio-specific React/Next.js components
- Generates components like ProjectCard, SkillsSection, ContactForm, Navigation
- Follows the project's component architecture and Tailwind CSS conventions
- Example: "Create a ProjectCard component with screenshot, tech stack, and links"

**@responsive-validator** - Validate Responsive Design
- Use to check responsive design patterns across the portfolio
- Validates breakpoints, touch targets, mobile usability, image handling
- Provides specific issues with file references and recommended fixes
- Example: "Validate the home page for responsive design issues"

**@seo-optimizer** - Review SEO Best Practices
- Use to ensure pages follow SEO best practices
- Checks metadata, semantic HTML, performance, accessibility, technical SEO
- Provides SEO score and prioritized recommendations
- Example: "Review the About page for SEO optimization"

### When to Use Each Agent

| Task | Recommended Agent |
|------|------------------|
| Create new components | Build or @portfolio-component |
| Fix bugs, implement features | Build |
| Code review, analysis | Plan |
| Check responsive design | @responsive-validator |
| SEO audit | @seo-optimizer |
| Planning architecture | Plan |
| Generate portfolio-specific UI | @portfolio-component |

### Switching Between Agents

- Press **Tab** to cycle between primary agents (Build ↔ Plan)
- Mention subagents with **@**: `@responsive-validator check the navigation component`
- Use agent **description** to decide which agent to invoke

---

## Code Style Guidelines

### Project Structure
- **Next.js App Router**: Use `app/` directory with file-based routing
- **Components**: Server components by default, mark with `"use client"` only when needed
- **Pages**: Route files named `page.tsx`, layouts as `layout.tsx`
- **Public Assets**: Static files in `public/` (images, fonts, icons)
- **API Routes**: Server actions in `app/actions/` or route handlers in `app/api/`

### Import Ordering
Organize imports in this exact order with blank lines between groups:
1. External libraries (React, Next.js, etc.)
2. Internal utilities and helpers
3. Components from the same project
4. Component-specific types and interfaces
5. CSS/Style imports (last, no blank line after)

```typescript
import { useState } from 'react'
import Image from 'next/image'
import { formatDate } from '@/utils/date'
import { ProjectCard } from '@/components/ProjectCard'
import type { Project } from '@/types/project'
import styles from './ProjectCard.module.css'
```

### Component Architecture
- **Server Components**: Default for pages and components without interactivity
- **Client Components**: Only add `"use client"` when using hooks (useState, useEffect, etc.)
- **Async Components**: Use async/await for data fetching, never `useEffect` for initial data
- **Error Boundaries**: Wrap components in error.tsx files for route-level error handling

### TypeScript Guidelines
- **Strict Mode**: Enabled in tsconfig.json, never disable strict checks
- **Interfaces vs Types**: Use `interface` for object shapes, `type` for unions/primitives
- **No `any`**: Use `unknown` instead of `any`, with proper type guards
- **Function Parameters**: Destructure objects in function signatures for clarity
- **Component Props**: Define props as interface, export for type inference

```typescript
interface ProjectCardProps {
  project: Project
  priority?: boolean
  onClick?: () => void
}
```

### Naming Conventions
- **Components**: PascalCase (`ProjectCard.tsx`, `Navigation.tsx`)
- **Utilities/Functions**: camelCase (`formatDate.ts`, `calculateScore.ts`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_ITEMS_PER_PAGE`, `API_BASE_URL`)
- **Files**: kebab-case for utilities (`date-utils.ts`), PascalCase for components
- **CSS Classes**: Tailwind utility classes only, no custom CSS classes unless necessary
- **Variables**: camelCase (`projectList`, `isLoading`), boolean prefixes (`isLoading`, `hasError`)

### Error Handling
- **Forms**: Use Server Actions with `action` prop for form submissions
- **API Calls**: Wrap in try/catch, return error objects with `message` and `code` fields
- **User Messages**: Display user-friendly error messages, never expose stack traces
- **Error Boundaries**: Create error.tsx pages for graceful failure states
- **Loading States**: Always show loading indicators for async operations

```typescript
try {
  const projects = await getProjects()
  return { success: true, data: projects }
} catch (error) {
  console.error('Failed to fetch projects:', error)
  return { success: false, error: 'Unable to load projects. Please try again.' }
}
```

### Styling with Tailwind CSS
- **Utility-First**: Use Tailwind classes exclusively, avoid custom CSS
- **Responsive Design**: Mobile-first approach, use `sm:`, `md:`, `lg:`, `xl:`, `2xl:` prefixes
- **Custom Components**: Reusable UI components in `components/ui/` following shadcn/ui patterns
- **Dark Mode**: Support dark mode with `dark:` prefix, use `class` strategy in tailwind.config.js
- **Spacing**: Use consistent spacing scale (4px base), avoid arbitrary values
- **Colors**: Use semantic color tokens (primary, secondary, accent) for theming

```tsx
<div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
    Project Title
  </h2>
</div>
```

### Performance Optimization
- **Images**: Always use `next/image` component with proper `width`, `height`, or `fill` prop
- **Lazy Loading**: Use `loading="lazy"` on images below the fold
- **Code Splitting**: Next.js automatically splits code, use dynamic imports for heavy components
- **Font Optimization**: Use `next/font` for optimized font loading
- **Meta Tags**: Use Next.js Metadata API for SEO, never use `<head>` tags directly

```typescript
import Image from 'next/image'
<Image src="/project-screenshot.png" alt="Project screenshot" width={800} height={600} loading="lazy" />
```

### SEO Best Practices
- **Metadata**: Define `metadata` object in each route file with title, description, openGraph
- **Sitemap**: Generate sitemap.xml using `app/sitemap.ts` route
- **Robots**: Use `app/robots.ts` for crawl directives
- **Structured Data**: Add JSON-LD for rich snippets (Person, WebSite schemas)
- **Alt Text**: Always include descriptive alt text for images

```typescript
export const metadata = {
  title: 'Full Stack Developer Portfolio',
  description: 'Portfolio showcasing web development projects and technical skills',
  openGraph: {
    title: 'John Doe - Full Stack Developer',
    images: ['/og-image.png'],
  },
}
```

### Accessibility (a11y)
- **Semantic HTML**: Use proper HTML5 elements (nav, main, article, section)
- **ARIA Labels**: Add `aria-label` to icon-only buttons and links
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **Focus States**: Use `focus-visible:` class for clear focus indicators
- **Color Contrast**: Meet WCAG AA standards (4.5:1 for text, 3:1 for UI components)

---

## Portfolio-Specific Guidelines

### Project Showcase Section
- **Card Layout**: Use responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- **Project Cards**: Include screenshot/title/description/tech stack/demo links
- **Tech Stack**: Display as badge pills with color coding by category
- **Filtering**: Client-side filter by tech stack or project type
- **Priority Projects**: Feature 3-6 best projects prominently

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div>
```

### Skills Section
- **Categorization**: Group skills by category (Frontend, Backend, DevOps, Tools)
- **Proficiency Levels**: Visual indicator (progress bar or星级) for each skill
- **Icons**: Use Lucide React icons for visual appeal
- **Update Frequency**: Keep skills current, remove outdated technologies

### Contact Section
- **Form**: Name, email, message fields with validation
- **Validation**: Client-side HTML5 validation + server-side verification
- **Email Protection**: Use reCAPTCHA or honeypot for spam prevention
- **Social Links**: LinkedIn, GitHub, Twitter/X, and portfolio links
- **Privacy**: Store no personal data, use serverless email service

### About Section
- **Professional Summary**: 2-3 paragraph bio highlighting expertise and goals
- **Resume**: Downloadable PDF button with download icon
- **Photo**: Professional headshot, circular or rounded square format
- **Timeline**: Work history or education timeline (optional)

### Analytics & Tracking
- **Privacy First**: No third-party cookies, respect user privacy
- **Server-Side Analytics**: Use Vercel Analytics or similar server-side solution
- **No PII**: Never collect personal identifiable information
- **Opt-Out**: Provide privacy policy and option to opt-out

---

## Development Workflow

### Git Workflow
- **Branch Naming**: Use conventional prefixes
  - `feature/project-showcase` - New features
  - `fix/responsive-issue` - Bug fixes
  - `chore/update-dependencies` - Maintenance tasks
- **Commit Messages**: Follow Conventional Commits specification
  - `feat: add project filtering by tech stack`
  - `fix: resolve mobile navigation menu overlap`
  - `chore: update Tailwind CSS to v4`
- **Pull Requests**: Self-review code before requesting review
- **Main Branch**: Always deployable, protected branch

### Deployment
- **Platform**: Vercel recommended for Next.js (zero-config deployment)
- **Environment Variables**: Use `.env.local` for development, Vercel dashboard for production
- **Preview Deployments**: Automatic on every PR to main branch
- **Domain**: Custom domain setup with HTTPS (automatic on Vercel)

### Code Review Checklist
- [ ] TypeScript strict mode passes with no errors
- [ ] All imports are properly organized
- [ ] Components follow server/client component conventions
- [ ] Images use `next/image` with proper dimensions
- [ ] Forms have proper validation and error handling
- [ ] Accessibility tested with keyboard navigation
- [ ] Responsive design tested on mobile, tablet, desktop
- [ ] No console errors or warnings in production build
- [ ] SEO metadata complete with title/description/OG tags

---

## Common Commands Reference

### Running Single Test
```bash
# Jest/Vitest
npm run test:file components/ProjectCard.test.tsx

# With filter
npm run test -- --testNamePattern="renders project card"
```

### Debugging
```bash
# TypeScript errors
npm run type-check

# Lint specific file
npx eslint components/ProjectCard.tsx

# Format specific file
npx prettier --write components/ProjectCard.tsx
```

### Build Analysis
```bash
# Analyze bundle size
npm run build -- --analyze

# Check production build locally
npm run build && npm run preview
```

---

## Important Notes

- **Never commit sensitive data**: API keys, secrets, or environment variables
- **Keep dependencies updated**: Run `npm audit` regularly for security vulnerabilities
- **Test responsive layouts**: Use browser DevTools device emulation
- **Optimize images**: Use WebP format, compress before adding to project
- **Write self-documenting code**: Comments should explain "why", not "what"
- **Keep components small**: Single responsibility, max 200-300 lines per component
- **Use TypeScript everywhere**: Avoid `.js` or `.jsx` files, prefer `.ts`/`.tsx`
