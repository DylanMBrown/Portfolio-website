---
description: Generate Portfolio Components
---

1. **Understand Component Requirements**
   - If the user hasn't specified details, ASK for:
     - Component purpose (e.g., "Skill Card", "Hero Section").
     - Necessary data/props.
     - **Styling preferences**: Must align with **Neon Tech** theme (Cyan/Purple/Green, Glassmorphism).
        - Use `text-neon-cyan`, `text-neon-purple`, `bg-neon-dark` etc.
        - Use `glass-card` class for containers.

2. **Generate Component**
   - Create a new file in `app/components/` (or `components/`).
   - Use **PascalCase** for the filename (e.g., `ProjectCard.tsx`).
   - **Framework**: React (Function Components).
   - **Styling**: Tailwind CSS.
   - **Type Safety**: strict TypeScript interfaces for Props.
   - **Interactive**: If it needs hooks (useState, etc.), add `"use client"` at the very top.
   - **Images**: Use `next/image` for any images.

3. **Adhere to Code Standards**
   - **Import Order**:
     1. External (React, Next.js)
     2. Internal Utils
     3. Other Components
     4. Types
     5. CSS (if using modules, but prefer Tailwind)
   - **Naming**: `PascalCase` for components, `camelCase` for functions/vars.

4. **Example Structure**
   ```tsx
   "use client"; // only if needed

   import Image from 'next/image';
   import { FC } from 'react';

   interface MyComponentProps {
     title: string;
     isActive?: boolean;
   }

   export const MyComponent: FC<MyComponentProps> = ({ title, isActive }) => {
     return (
       <div className={`p-4 rounded ${isActive ? 'bg-blue-500' : 'bg-gray-100'}`}>
         <h2 className="text-xl font-bold">{title}</h2>
       </div>
     );
   };
   ```
