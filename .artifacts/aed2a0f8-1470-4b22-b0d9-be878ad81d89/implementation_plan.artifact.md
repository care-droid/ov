# Implementation Plan - Unify Typography System

The goal is to unify the typography across the entire website to match the Home page's premium design, using the **Inter** font as the sole typeface.

## User Review Required

> [!IMPORTANT]
> - `Geist` font will be completely removed in favor of `Inter`.
> - Global `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, and `p` styles will be defined in `globals.css`. This will affect all pages, potentially changing some existing specific sizes if they weren't following the Home page's hierarchy.
> - The Home page itself will be updated to use these global styles where it currently uses specific Tailwind classes (e.g., `text-[43px]`).

## Proposed Changes

### [Core Layout & Theme]

#### [MODIFY] [layout.tsx](file:///C:/my-app/src/app/layout.tsx)
- Set `Inter` as the primary font and map it to `--font-sans`.
- Remove `Geist`.
- Apply `font-sans` globally on the `html` tag.

#### [MODIFY] [globals.css](file:///C:/my-app/src/app/globals.css)
- Update CSS variables for fonts.
- Define global base styles for headings and body text matching the Home page:
    - **H1 (Hero)**: `68px` (desktop), `43px` (mobile), semibold, `-0.02em` tracking, `1.05` leading.
    - **H2 (Section)**: `60px` (desktop), `38px` (mobile), bold, tight tracking, `1.08` leading.
    - **H3 (Sub-section)**: `46px` (desktop), `32px` (mobile), bold, tight tracking, `1.1` leading.
    - **Body**: `16px` (desktop), `15px` (mobile), normal weight, `1.6` leading.
- Add utility classes for "Eyebrow" and "Small Text".

### [Home Page]

#### [MODIFY] [Hero.tsx](file:///C:/my-app/src/components/home/Hero.tsx), [Features.tsx](file:///C:/my-app/src/components/home/Features.tsx), [CTA.tsx](file:///C:/my-app/src/components/home/CTA.tsx)
- Replace hardcoded font sizes with the new global tags (h1, h2, h3) or utility classes.
- Remove redundant `font-display` and `font-sans` classes where possible as they will be inherited.

### [Other Pages]

#### [MODIFY] [PricingSection.tsx](file:///C:/my-app/src/components/plans/PricingSection.tsx), [FAQSection.tsx](file:///C:/my-app/src/components/plans/FAQSection.tsx), [BlogCard.tsx](file:///C:/my-app/src/components/blog/BlogCard.tsx)
- Remove inline font styles and specific Tailwind text size classes.
- Use standard `h1`, `h2`, `h3` tags to inherit the global typography.
- Ensure all text uses the `Inter` font (by virtue of being the new `font-sans`).

## Verification Plan

### Manual Verification
- Inspect the Home page to ensure it looks identical to its current state but uses global CSS.
- Check the Pricing page, Blog page, and FAQ page to verify they now use `Inter` and follow the same heading sizes/spacing as the Home page.
- Test responsiveness (mobile vs desktop) for all heading levels.
