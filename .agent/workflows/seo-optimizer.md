---
description: Review SEO Best Practices
---

1. **Check Metadata**
   - Open the relevant `page.tsx` or `layout.tsx`.
   - Ensure a `metadata` object is exported.
   - Verify presence of `title`, `description`, and `openGraph`.

2. **Analyze Semantic HTML**
   - Read the component JSX.
   - **Structure**: Ensure usage of `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`.
   - **Headings**: Verify only one `<h1>` per page. Ensure logical hierarchy (`h2` follows `h1`, etc.).
   - **Interactivity**: Buttons for actions, Links (`<a>`/`<Link>`) for navigation.

3. **Media Optimization**
   - Check `Image` components.
   - **Alt Text**: REQUIRED. Must be descriptive.
   - **Attributes**: Ensure `width`/`height` or `fill` are used to prevent layout shift.

4. **Technical SEO Checks**
   - Verify `robots.txt` exists in `app/` or `public/`.
   - Verify `sitemap.ts` or `sitemap.xml` exists.

5. **Report & Recommendations**
   - Provide a checklist of what passed/failed.
   - Score the page (Good/Needs Improvement).
   - specific code snippets to fix issues (e.g., "Add `alt='Headshot of John'` to line 45").
