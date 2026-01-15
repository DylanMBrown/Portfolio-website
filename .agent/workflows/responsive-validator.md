---
description: Validate Responsive Design
---

1. **Identify Scope**
   - Determine which page or component the user wants verified.
   - If not specified, ask the user.

2. **Check Code for Responsive Patterns**
   - Open the target file(s).
   - Look for Tailwind standard breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`.
   - **Rule**: Essential layout elements (grids, flex containers) MUST have responsive behaviors (e.g., `grid-cols-1 md:grid-cols-3`).

3. **Validate Mobile Usability**
   - Check clickable elements (buttons, links). Ensure they have enough padding (min 44x44px touch area recommended).
   - Verify font sizes are readable on mobile (base 16px usually).
   - Ensure no fixed widths (`w-[500px]`) that would break on small screens. Use `max-w` or percentages.

4. **Report Findings**
   - List any missing responsive modifiers.
   - Highlight fixed dimensions that might overflow.
   - Suggest specific Tailwind class fixes (e.g., "Change `w-96` to `w-full max-w-sm`").

5. **(Optional) Browser Verification**
   - If you can run the app, use the browser tool to resize the window and check for visual breakage.
