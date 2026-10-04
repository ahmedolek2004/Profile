# portfolio-v2 Architecture

This directory contains a fresh portfolio application architecture created from scratch.

## Structure

- `src_v2`
  - `animations`
    - `entrance.ts`
    - `hover.ts`
    - `scroll.ts`
  - `components`
    - `background`
      - `GradientGrid.tsx`
    - `blog`
    - `caseStudies`
    - `certificates`
    - `contact`
    - `cursor`
      - `CustomCursor.tsx`
    - `dashboard`
    - `effects`
      - `GlowRing.tsx`
    - `footer`
    - `github`
    - `hero`
    - `layouts`
      - `PageShell.tsx`
      - `SectionShell.tsx`
      - `SideLayout.tsx`
    - `navigation`
      - `NavLinkPrimary.tsx`
    - `project`
      - `ProjectBadge.tsx`
    - `sections`
      - `About`
      - `Blog`
      - `CaseStudies`
      - `Certificates`
      - `Contact`
      - `Experience`
      - `Footer`
      - `Hero`
      - `Projects`
      - `Skills`
      - `Testimonials`
    - `terminal`
      - `TerminalCommand.tsx`
    - `timeline`
      - `TimelineItem.tsx`
    - `ui`
      - `background`
      - `buttons`
      - `cards`
      - `cursor`
      - `effects`
      - `loader`
      - `navigation`
      - `project`
      - `terminal`
      - `timeline`
  - `config`
    - `animations.ts`
    - `colors.ts`
    - `spacing.ts`
    - `typography.ts`
  - `hooks`
    - `useMediaQuery.ts`
    - `usePrefersReducedMotion.ts`
    - `useScrollDirection.ts`
  - `lib`
    - `utils.ts`
  - `pages`
    - `Blog.tsx`
    - `Dashboard.tsx`
    - `Home.tsx`
    - `Project.tsx`
    - `Resume.tsx`
    - `404.tsx`

## Notes

- No existing portfolio components were reused.
- No existing CSS rules were reused.
- This is a brand new architecture and foundation.
- UI sections are intentionally omitted until approval.
