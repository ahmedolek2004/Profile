# src_v2 Architecture Documentation

## Complete Project Structure

```
src_v2/
│
├── app/
│   ├── App.tsx                    # Root app component with routing
│   ├── root.tsx                   # Root layout wrapper
│   └── providers.tsx              # Context/provider setup
│
├── assets/
│   ├── fonts/                     # Web font files (if needed)
│   ├── icons/                     # SVG icons (beyond Lucide)
│   ├── images/                    # Static images, logos, screenshots
│   ├── videos/                    # Video assets for showcases
│   ├── lottie/                    # Lottie animation JSON files
│   └── models/                    # 3D models for Three.js
│
├── components/
│   │
│   ├── ui/                        # Reusable primitive UI components
│   │   ├── button/
│   │   │   ├── ButtonPrimary.tsx
│   │   │   ├── ButtonSecondary.tsx
│   │   │   ├── ButtonGhost.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── input/
│   │   │   ├── InputText.tsx
│   │   │   ├── InputEmail.tsx
│   │   │   ├── InputTextarea.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── badge/
│   │   │   ├── BadgeDefault.tsx
│   │   │   ├── BadgeSuccess.tsx
│   │   │   ├── BadgeWarning.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── card/
│   │   │   ├── CardGlass.tsx
│   │   │   ├── CardElevated.tsx
│   │   │   ├── CardFlat.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── modal/
│   │   │   ├── Modal.tsx
│   │   │   ├── ModalContent.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── dialog/
│   │   │   ├── Dialog.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── tooltip/
│   │   │   ├── Tooltip.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── tabs/
│   │   │   ├── Tabs.tsx
│   │   │   ├── TabsContent.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── accordion/
│   │   │   ├── Accordion.tsx
│   │   │   ├── AccordionItem.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── avatar/
│   │   │   ├── Avatar.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── progress/
│   │   │   ├── ProgressBar.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── skeleton/
│   │   │   ├── Skeleton.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── toast/
│   │   │   ├── Toast.tsx
│   │   │   ├── useToast.ts
│   │   │   └── index.ts
│   │   │
│   │   └── dropdown/
│   │       ├── Dropdown.tsx
│   │       ├── DropdownItem.tsx
│   │       └── index.ts
│   │
│   ├── layout/                    # Layout components (composite)
│   │   ├── PageShell.tsx          # Full-page wrapper
│   │   ├── SectionShell.tsx       # Section container
│   │   ├── SideLayout.tsx         # Sidebar + main grid
│   │   ├── GridLayout.tsx         # CSS grid layouts
│   │   └── index.ts
│   │
│   ├── navigation/                # Navigation-specific components
│   │   ├── Navbar.tsx
│   │   ├── NavLinkPrimary.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── BreadcrumbNav.tsx
│   │   └── index.ts
│   │
│   ├── hero/                      # Hero section components
│   │   ├── Hero.tsx
│   │   ├── HeroContent.tsx
│   │   ├── HeroBackground.tsx
│   │   └── index.ts
│   │
│   ├── about/                     # About section components
│   │   ├── About.tsx
│   │   ├── BioCard.tsx
│   │   └── index.ts
│   │
│   ├── skills/                    # Skills section components
│   │   ├── Skills.tsx
│   │   ├── SkillCategory.tsx
│   │   ├── SkillCard.tsx
│   │   ├── SkillTree.tsx
│   │   └── index.ts
│   │
│   ├── projects/                  # Projects section components
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectFilter.tsx
│   │   └── index.ts
│   │
│   ├── github/                    # GitHub integration components
│   │   ├── GitHubStats.tsx
│   │   ├── RepositoryCard.tsx
│   │   ├── ContributionGraph.tsx
│   │   └── index.ts
│   │
│   ├── blog/                      # Blog section components
│   │   ├── Blog.tsx
│   │   ├── BlogCard.tsx
│   │   ├── BlogGrid.tsx
│   │   ├── BlogFilter.tsx
│   │   └── index.ts
│   │
│   ├── certificates/              # Certificates/achievements
│   │   ├── Certificates.tsx
│   │   ├── CertificateCard.tsx
│   │   ├── CertificateGrid.tsx
│   │   └── index.ts
│   │
│   ├── contact/                   # Contact section components
│   │   ├── Contact.tsx
│   │   ├── ContactForm.tsx
│   │   ├── SocialLinks.tsx
│   │   └── index.ts
│   │
│   ├── footer/                    # Footer components
│   │   ├── Footer.tsx
│   │   ├── FooterLinks.tsx
│   │   ├── NewsletterCTA.tsx
│   │   └── index.ts
│   │
│   ├── loader/                    # Loading indicators
│   │   ├── PageLoader.tsx
│   │   ├── SkeletonLoader.tsx
│   │   └── index.ts
│   │
│   ├── cursor/                    # Custom cursor effects
│   │   ├── CustomCursor.tsx
│   │   └── index.ts
│   │
│   ├── effects/                   # Visual effects
│   │   ├── GlowRing.tsx
│   │   ├── GradientGrid.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── FloatingElements.tsx
│   │   └── index.ts
│   │
│   ├── particles/                 # Particle systems
│   │   ├── ParticleSystem.tsx
│   │   ├── useParticles.ts
│   │   └── index.ts
│   │
│   ├── terminal/                  # Terminal-style components
│   │   ├── TerminalCommand.tsx
│   │   ├── TerminalOutput.tsx
│   │   └── index.ts
│   │
│   ├── command-palette/           # Command palette (Cmd+K style)
│   │   ├── CommandPalette.tsx
│   │   ├── CommandItem.tsx
│   │   └── index.ts
│   │
│   ├── statistics/                # Stats/metrics display
│   │   ├── StatCard.tsx
│   │   ├── StatCounter.tsx
│   │   ├── StatGrid.tsx
│   │   └── index.ts
│   │
│   ├── timeline/                  # Timeline components
│   │   ├── Timeline.tsx
│   │   ├── TimelineItem.tsx
│   │   └── index.ts
│   │
│   ├── testimonials/              # Testimonial/review components
│   │   ├── Testimonials.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   └── index.ts
│   │
│   ├── animations/                # Reusable animation wrappers
│   │   ├── FadeInOnScroll.tsx
│   │   ├── SlideInOnScroll.tsx
│   │   ├── AnimatedCounter.tsx
│   │   └── index.ts
│   │
│   └── common/                    # Other shared components
│       ├── Section.tsx
│       ├── Container.tsx
│       └── index.ts
│
├── sections/                      # Page sections (composite components)
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── BlogSection.tsx
│   ├── CertificatesSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ContactSection.tsx
│   ├── FooterSection.tsx
│   └── index.ts
│
├── layouts/                       # Page layout templates
│   ├── MainLayout.tsx             # Main content layout
│   ├── BlogLayout.tsx             # Blog post layout
│   ├── ProjectLayout.tsx          # Project detail layout
│   └── index.ts
│
├── pages/                         # Page components (route-mapped)
│   ├── Home.tsx                   # Landing/home page
│   ├── Projects.tsx               # Projects showcase page
│   ├── ProjectDetail.tsx          # Single project case study
│   ├── Blog.tsx                   # Blog listing page
│   ├── BlogPost.tsx               # Single blog post
│   ├── About.tsx                  # About page
│   ├── Resume.tsx                 # Resume/CV page
│   ├── Dashboard.tsx              # Admin dashboard (private)
│   ├── NotFound.tsx               # 404 page
│   └── index.ts
│
├── routes/                        # Routing configuration
│   ├── routes.config.ts           # Route definitions
│   ├── ProtectedRoute.tsx         # Auth guard wrapper
│   └── index.ts
│
├── hooks/                         # Custom React hooks
│   ├── useMediaQuery.ts           # Breakpoint detection
│   ├── usePrefersReducedMotion.ts # Accessibility
│   ├── useScrollDirection.ts      # Scroll detection
│   ├── useIntersectionObserver.ts # Viewport detection
│   ├── useWindowSize.ts           # Window dimensions
│   ├── useLocalStorage.ts         # Local storage wrapper
│   ├── useAsync.ts                # Async data loading
│   ├── useFetch.ts                # HTTP fetching
│   └── index.ts
│
├── context/                       # React Context providers
│   ├── ThemeContext.tsx           # Theme switching
│   ├── AuthContext.tsx            # Authentication state
│   ├── DataContext.tsx            # Global portfolio data
│   └── index.ts
│
├── providers/                     # Provider composition
│   ├── RootProvider.tsx           # All providers combined
│   └── index.ts
│
├── store/                         # State management (if using Zustand/Redux)
│   ├── auth.store.ts
│   ├── theme.store.ts
│   ├── data.store.ts
│   └── index.ts
│
├── services/                      # Business logic services
│   ├── portfolioService.ts        # Portfolio data operations
│   ├── projectService.ts          # Project operations
│   ├── blogService.ts             # Blog operations
│   ├── authService.ts             # Authentication
│   ├── analyticsService.ts        # Analytics tracking
│   └── index.ts
│
├── api/                           # API client and endpoints
│   ├── client.ts                  # Axios/fetch client setup
│   ├── endpoints.ts               # API endpoint definitions
│   ├── projects.api.ts            # Project endpoints
│   ├── blog.api.ts                # Blog endpoints
│   ├── analytics.api.ts           # Analytics endpoints
│   └── index.ts
│
├── lib/                           # Utility libraries
│   ├── utils.ts                   # General utilities (cn, clamp, etc.)
│   ├── formatting.ts              # String/date formatting
│   ├── validation.ts              # Validation helpers
│   ├── math.ts                    # Math utilities
│   └── index.ts
│
├── config/                        # Configuration files
│   ├── colors.ts                  # Color tokens
│   ├── typography.ts              # Font & text tokens
│   ├── spacing.ts                 # Spacing scale
│   ├── radius.ts                  # Border radius tokens
│   ├── breakpoints.ts             # Responsive breakpoints
│   ├── motion.ts                  # Animation timings & easing
│   ├── shadows.ts                 # Shadow tokens
│   ├── gradients.ts               # Gradient presets
│   ├── glass.ts                   # Glassmorphism tokens
│   ├── z-index.ts                 # Z-index scale
│   ├── animations.ts              # Animation configurations
│   ├── elevation.ts               # Elevation tokens
│   ├── constants.ts               # App constants
│   └── index.ts
│
├── constants/                     # Static constants
│   ├── routes.ts                  # Route paths
│   ├── links.ts                   # External links
│   ├── social.ts                  # Social media links
│   ├── nav.ts                     # Navigation items
│   └── index.ts
│
├── types/                         # TypeScript type definitions
│   ├── portfolio.ts               # Portfolio models
│   ├── project.ts                 # Project types
│   ├── blog.ts                    # Blog types
│   ├── user.ts                    # User/auth types
│   ├── api.ts                     # API types
│   ├── ui.ts                      # UI component props
│   └── index.ts
│
├── utils/                         # Utility functions
│   ├── styling.ts                 # Tailwind/className helpers
│   ├── dates.ts                   # Date manipulation
│   ├── numbers.ts                 # Number formatting
│   ├── strings.ts                 # String manipulation
│   ├── arrays.ts                  # Array helpers
│   ├── objects.ts                 # Object utilities
│   └── index.ts
│
├── styles/                        # Global styles
│   ├── globals.css                # Tailwind directives & base styles
│   ├── animations.css             # Global animation classes
│   ├── utilities.css              # Custom utility classes
│   └── themes.css                 # Theme-specific styles
│
├── animations/                    # Animation definitions & presets
│   ├── entrance.ts                # Entry animations
│   ├── hover.ts                   # Hover state animations
│   ├── scroll.ts                  # Scroll-triggered animations
│   ├── transition.ts              # Transition presets
│   └── index.ts
│
├── data/                          # Static data & content
│   ├── portfolio.data.ts          # Portfolio metadata
│   ├── projects.data.ts           # Project listings
│   ├── skills.data.ts             # Skills taxonomy
│   ├── experience.data.ts         # Work experience
│   ├── education.data.ts          # Education history
│   ├── blog.data.ts               # Blog posts metadata
│   ├── testimonials.data.ts       # User testimonials
│   ├── certificates.data.ts       # Certificates/achievements
│   └── index.ts
│
├── content/                       # Markdown/rich content
│   ├── projects/
│   │   ├── project-1.mdx
│   │   ├── project-2.mdx
│   │   └── ...
│   ├── blog/
│   │   ├── post-1.mdx
│   │   ├── post-2.mdx
│   │   └── ...
│   └── pages/
│       ├── about.mdx
│       ├── resume.mdx
│       └── ...
│
├── seo/                           # SEO utilities
│   ├── meta.ts                    # Meta tags generation
│   ├── sitemap.ts                 # Sitemap generation
│   ├── robots.ts                  # Robots.txt generation
│   └── index.ts
│
├── tests/                         # Testing files
│   ├── unit/
│   │   ├── utils.test.ts
│   │   ├── services.test.ts
│   │   └── ...
│   ├── integration/
│   │   ├── api.test.ts
│   │   └── ...
│   ├── e2e/
│   │   ├── home.spec.ts
│   │   └── ...
│   └── setup.ts
│
├── docs/                          # Documentation
│   ├── ARCHITECTURE.md            # This file
│   ├── COMPONENTS.md              # Component documentation
│   ├── DATA_FLOW.md               # Data flow diagrams
│   ├── STYLING.md                 # Styling guide
│   ├── CONTRIBUTING.md            # Contribution guidelines
│   └── CHANGELOG.md               # Version history
│
├── main.tsx                       # React entry point
├── index.html                     # HTML template
└── README.md                      # Project overview

```

---

## Folder Responsibility Matrix

| Folder                     | Purpose              | Responsibility                                                               |
| -------------------------- | -------------------- | ---------------------------------------------------------------------------- |
| **app/**                   | Application root     | React Router setup, root layout, provider initialization                     |
| **assets/**                | Static files         | Images, icons, videos, 3D models, animations (Lottie)                        |
| **components/ui/**         | Primitive components | Reusable, unstyled or minimally styled building blocks (Button, Input, etc.) |
| **components/layout/**     | Layout composites    | Page structure components (grids, shells, wrappers)                          |
| **components/navigation/** | Nav-specific         | Navbar, breadcrumbs, mobile menus                                            |
| **components/[section]/**  | Section composites   | Hero, About, Skills, Projects, etc. - built from UI components               |
| **components/effects/**    | Visual effects       | Decorative elements, gradients, glows, particles                             |
| **components/animations/** | Animation wrappers   | Reusable animated state containers                                           |
| **sections/**              | Full sections        | Complete, standalone section implementations                                 |
| **layouts/**               | Page templates       | Full page layout structures for different page types                         |
| **pages/**                 | Route components     | Route-mapped page components, compose sections and layouts                   |
| **routes/**                | Routing config       | Route definitions, protected routes, path constants                          |
| **hooks/**                 | Custom hooks         | React hooks for common patterns (media query, scroll, async, etc.)           |
| **context/**               | Global state         | React Context for theme, auth, global data                                   |
| **providers/**             | Provider composition | Root provider component combining all contexts                               |
| **store/**                 | State management     | Centralized state (Zustand/Redux if needed)                                  |
| **services/**              | Business logic       | Data operations, transformations, domain logic                               |
| **api/**                   | HTTP client          | API client configuration, endpoint definitions, request/response             |
| **lib/**                   | Utilities            | General-purpose utilities (cn, clamp, validation)                            |
| **config/**                | Tokens & constants   | Design tokens (colors, spacing, motion, typography, etc.)                    |
| **constants/**             | Static values        | App constants (routes, links, navigation items)                              |
| **types/**                 | TypeScript defs      | All .ts/.d.ts type definitions                                               |
| **utils/**                 | Helper functions     | Utility functions (formatting, dates, strings, arrays)                       |
| **styles/**                | Global styles        | CSS files, Tailwind directives, base/utility classes                         |
| **animations/**            | Animation presets    | Framer Motion variants, GSAP timelines, transition configs                   |
| **data/**                  | Static content       | Hardcoded data (projects, skills, testimonials)                              |
| **content/**               | Markdown/MDX         | Rich content files for projects, blog, pages                                 |
| **seo/**                   | SEO generation       | Meta tags, sitemap, robots.txt                                               |
| **tests/**                 | Testing              | Unit, integration, E2E tests                                                 |
| **docs/**                  | Documentation        | Architecture, components, contribution guides                                |

---

## Why This Architecture Is Scalable

### 1. **Clear Separation of Concerns**

- **UI Components** are divorced from business logic
- **Services** handle data operations independently
- **Pages** compose sections without knowing implementation details
- **Hooks** encapsulate complex state/side effects

### 2. **Modular Component Structure**

- Each component folder is self-contained with an `index.ts` export
- Components can be moved, duplicated, or refactored without affecting others
- Easy to test components in isolation
- New component categories can be added without restructuring

### 3. **Decoupled Data Flow**

- API calls → **services** → **stores/context** → **components**
- Data changes propagate via React Context or state management, not prop drilling
- Easy to swap API provider, switch state management, or add caching
- Mock services for testing without changing components

### 4. **Configuration Centralization**

- Design tokens in `/config/` as single source of truth
- Change colors/spacing/motion in one place
- No scattered magic numbers in components
- Easy to implement dark mode, themes, or branding

### 5. **Horizontal Scaling**

- Add new sections (e.g., "Testimonials") → new folder in `/components/testimonials/` + new section in `/sections/` + new page route
- Add new API endpoints → new file in `/api/` + new service in `/services/`
- No merging with existing code; purely additive

### 6. **Vertical Scaling**

- Complex features broken into smaller hooks, utilities, services
- Each layer can be tested independently
- Services can migrate to microservices later
- Hook logic can be extracted to custom hook libraries

### 7. **Type Safety**

- Centralized types in `/types/` with no duplication
- TypeScript catches errors at build time
- Easy refactoring with compiler feedback
- Clear contracts between layers

### 8. **Reusability**

- UI components are primitive and reusable across sections
- Custom hooks are shareable across pages
- Utilities and services are not page-specific
- Animations and effects are composable

### 9. **Performance Optimization Points**

- Code splitting per route (via React Router lazy loading)
- Component-level code splitting via React.lazy()
- Service-level caching with React Query
- Custom hooks for performance optimization (memo, useCallback)

### 10. **Easy Onboarding**

- New developers see clear folder structure
- Each folder has a single responsibility
- Component naming conventions are consistent
- Types make expected props/data obvious

---

## Design Patterns

### 1. **Composite Pattern** (Components)

```
Page (composite)
├── Section (composite)
│   ├── FeatureCard (composite)
│   │   ├── Button (primitive)
│   │   ├── Badge (primitive)
│   │   └── Avatar (primitive)
│   └── Card (composite/primitive)
└── Footer (composite)
    └── Link (primitive)
```

- Sections are composites of UI primitives
- Pages are composites of sections
- Allows building complex UIs from simple, testable pieces

### 2. **Factory Pattern** (Hooks)

```typescript
const data = useFetch(url); // Factory hook
const theme = useTheme(); // Factory hook
const mediaQuery = useMediaQuery("md"); // Factory hook
```

- Custom hooks encapsulate creation logic
- Consumer doesn't need to know implementation
- Easy to swap implementation (e.g., REST → GraphQL)

### 3. **Observer Pattern** (Context)

```typescript
<ThemeProvider>
  <Component />  // Observes theme changes
</ThemeProvider>
```

- Context subscribers receive updates automatically
- No prop drilling for global state
- Multiple listeners for single data source

### 4. **Singleton Pattern** (Services & Config)

```typescript
// config/colors.ts - single source of truth
export const colors = { ... }

// services/portfolioService.ts - single service instance
export const portfolioService = { ... }
```

- Centralized, immutable configuration
- Services are instantiated once and reused
- No duplicate logic or conflicting state

### 5. **Adapter Pattern** (API Layer)

```typescript
// api/projects.api.ts
export const getProjects = async () => {
  const response = await client.get("/projects");
  return transformProjectsToPortfolioFormat(response);
};
```

- API responses adapted to internal types
- Easy to swap API provider or format
- Components never touch raw API responses

### 6. **Presentational vs. Container Pattern** (Components)

```typescript
// Container: Data fetching, state management
function ProjectsPage() {
  const projects = useFetch('/projects');
  return <ProjectsGrid projects={projects} />;
}

// Presentational: Pure rendering
function ProjectsGrid({ projects }) {
  return projects.map(p => <ProjectCard project={p} />);
}
```

- Separation of data logic and presentation
- Easy to test presentational components
- Reusable presentational components

### 7. **Higher-Order Component Pattern** (Layout wrappers)

```typescript
export function withPageShell<P>(Component: React.ComponentType<P>) {
  return (props: P) => (
    <PageShell>
      <Component {...props} />
    </PageShell>
  );
}
```

- Wrap components with common behavior/styling
- Avoids repetition in page components
- Easy to inject global concerns

### 8. **Dependency Injection** (Services)

```typescript
// Inject dependencies into services
function createProjectService(api: IApiClient, cache: ICache) {
  return {
    getProjects: () => cache.get("projects", () => api.get("/projects")),
  };
}
```

- Services don't create their own dependencies
- Easy to mock for testing
- Flexible to swap implementations

### 9. **Strategy Pattern** (Animation/Styling)

```typescript
const animations = {
  entrance: { fadeIn: {...}, slideIn: {...} },
  hover: { pulse: {...}, drift: {...} },
  scroll: { reveal: {...}, parallax: {...} }
};

// Use different strategies based on context
<motion.div variants={animations.entrance.fadeIn}>
```

- Different animation strategies per context
- Easy to add new animation types
- Centralized animation library

### 10. **Provider Pattern** (Root setup)

```typescript
export function RootProvider({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DataProvider>
          {children}
        </DataProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
```

- Compose multiple providers in single place
- Easy to add/remove providers
- Clear initialization order

---

## Data Flow Through the Application

### Flow Diagram: User Action → State Update → UI Render

```
┌─────────────────────────────────────────────────────────────┐
│                     USER INTERACTION                         │
│              (Click, Scroll, Input, etc.)                   │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│              COMPONENT EVENT HANDLER                         │
│          (onClick, onChange, onSubmit, etc.)                │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                  HOOK/CONTEXT UPDATE                         │
│    (useState, useContext, useReducer, custom hook)          │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│             OPTIONAL: SERVICE CALL                           │
│    (portfolioService.updateProject, etc.)                   │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│              OPTIONAL: API CALL                              │
│       (via services/api layer, handled by axios)            │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│            STATE/CONTEXT UPDATED                             │
│        (React state tree re-renders subscribers)            │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│              COMPONENTS RE-RENDER                            │
│      (Only affected components re-render via diffing)       │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│               UI UPDATES DISPLAYED                           │
│           (Browser repaints affected DOM nodes)             │
└─────────────────────────────────────────────────────────────┘
```

### Specific Data Flow Examples

**Example 1: Static Portfolio Display (No User Action)**

```
/config/colors.ts (design tokens)
         ↓
/data/projects.data.ts (static content)
         ↓
pages/Home.tsx (imports data & tokens)
         ↓
<sections/ProjectsSection.tsx> (maps over data)
         ↓
<components/sections/ProjectCard.tsx> (renders individual project)
         ↓
<components/ui/card/CardGlass.tsx> + <components/ui/button/> (primitives)
         ↓
Browser renders styled project card
```

**Example 2: Dynamic Data with User Filter**

```
User clicks "JavaScript" filter
         ↓
<components/sections/ProjectCard.tsx> onClick handler
         ↓
Calls setFilteredSkill('JavaScript') in local state or context
         ↓
DataContext subscribers re-render with new filter
         ↓
<sections/SkillsSection.tsx> re-runs with filtered data
         ↓
ProjectCard list updates to show only JS projects
         ↓
Browser updates project display
```

**Example 3: Async Data Loading**

```
User navigates to /projects
         ↓
pages/ProjectsPage.tsx useEffect hook
         ↓
Calls useFetch('/api/projects') custom hook
         ↓
Hook calls services/projectService.ts
         ↓
projectService calls api/projects.api.ts
         ↓
api makes axios request → server
         ↓
Response adapter transforms data to internal types
         ↓
Hook updates local state with projects
         ↓
Component re-renders with fetched data
         ↓
Browser displays project list with case study cards
```

**Example 4: Theme Switching**

```
User clicks theme toggle in Navbar
         ↓
onClick handler calls useTheme() hook
         ↓
useTheme updates ThemeContext
         ↓
All components subscribed to ThemeContext re-render
         ↓
RootLayout reads new theme value
         ↓
Applies dark/light classes to root element
         ↓
Tailwind dark: prefix styles take effect
         ↓
Browser applies dark theme CSS
```

### Data Flow Layers

1. **Static Data Layer**
   - `/data/` files provide hardcoded content
   - No state, just constants
   - Used by components directly

2. **Service Layer**
   - `/services/` encapsulates business logic
   - Transforms data, handles validation
   - Called by hooks or components

3. **API Layer**
   - `/api/` manages HTTP communication
   - Adapts responses to internal types
   - Only called by services

4. **State Layer**
   - `/context/` & `/store/` manage global state
   - React Context for theme, auth, global data
   - Custom hooks expose state to components

5. **Component Layer**
   - Pages consume data from state/hooks
   - Sections compose UI primitives
   - UI components receive props and render

---

## How Future Features Can Be Added Without Restructuring

### Scenario 1: Add Blog Feature

```
1. Create new type in /types/blog.ts
2. Create new data in /data/blog.data.ts
3. Create new service in /services/blogService.ts
4. Create new API endpoints in /api/blog.api.ts
5. Create new components in /components/blog/
6. Create new section in /sections/BlogSection.tsx
7. Create new page in /pages/Blog.tsx
8. Add route in /routes/routes.config.ts
9. Add nav item in /constants/nav.ts

✅ NO changes to existing code, purely additive
```

### Scenario 2: Add Dark Mode

```
1. Add theme tokens to /config/colors.ts
2. Create ThemeContext in /context/ThemeContext.tsx
3. Add useTheme() hook in /hooks/useTheme.ts
4. Wrap app with ThemeProvider in /providers/RootProvider.tsx
5. Add toggle button in Navbar (no existing changes)
6. Update Tailwind config (already supports dark:)

✅ Modular addition, no refactoring needed
```

### Scenario 3: Add Analytics Tracking

```
1. Create analyticsService.ts in /services/
2. Create analytics.api.ts in /api/
3. Create AnalyticsProvider in /context/ or /providers/
4. Add tracking calls in existing component event handlers

✅ Services handle complexity, minimal component changes
```

### Scenario 4: Add Authentication/Dashboard

```
1. Create user.ts, auth.ts types in /types/
2. Create authService.ts in /services/
3. Create auth.api.ts in /api/
4. Create AuthContext in /context/
5. Create ProtectedRoute.tsx in /routes/
6. Create Dashboard.tsx page in /pages/
7. Create dashboard components in /components/dashboard/
8. Add admin routes in /routes/routes.config.ts

✅ Self-contained addition, no existing changes
```

### Scenario 5: Add 3D Hero with Three.js

```
1. Add 3D model to /assets/models/
2. Create ThreeScene.tsx in /components/effects/
3. Create Scene, Camera, Renderer setup (isolated)
4. Update HeroBackground.tsx to conditionally render 3D
5. Add useMediaQuery check to disable 3D on mobile

✅ Effect layer addition, sections unchanged
```

### Scenario 6: Switch from Static to CMS

```
Before:
  components → /data/projects.data.ts (static)

After:
  components → /hooks/useFetch('/api/projects') → /api/projects.api.ts → CMS API

No component code changes needed, only data source swapped in services layer
```

### Scenario 7: Add Email Subscription

```
1. Create EmailJS service in /services/emailService.ts
2. Create contact form in /components/contact/ContactForm.tsx
3. Call emailService.subscribe() on form submit
4. Show success toast via /components/ui/toast/

✅ Isolated feature, no existing changes
```

### Scenario 8: Add Internationalization (i18n)

```
1. Create /i18n/ folder with language files
2. Create I18nProvider in /providers/
3. Create useTranslation() hook
4. Add language selector in Navbar
5. Wrap translatable content with hook

✅ Orthogonal to component structure, can be added anytime
```

### Scenario 9: Add PWA/Offline Support

```
1. Create service worker in /public/
2. Create PWA manifest
3. Add PWA detection hook in /hooks/
4. Wrap app with PWAProvider

✅ Infrastructure layer, no component changes
```

### Scenario 10: Add Form Validation Across App

```
1. Create validation utilities in /utils/validation.ts
2. Create form hooks in /hooks/useForm.ts
3. Use in all existing forms without refactoring

✅ Utility addition, components remain unchanged
```

### Why Restructuring Is Never Needed

- ✅ **New features are folders, not restructures** - Add `/components/feature/`, not move existing code
- ✅ **Layer separation** - New services don't affect components; new hooks don't affect pages
- ✅ **Dependency flow** - Data flows down (config → services → components), not sideways
- ✅ **Index.ts exports** - Folders are encapsulated; internals are hidden from other folders
- ✅ **Type contracts** - TypeScript ensures compatibility between layers
- ✅ **Provider pattern** - New global state via new context, no prop drilling refactor
- ✅ **Route isolation** - New pages don't affect existing pages; just add to router config

---

## Configuration Token Files

These files centralize all design decisions:

### `/config/colors.ts`

Defines the entire color palette (primary, secondary, backgrounds, text, etc.)

### `/config/typography.ts`

Font families, weights, line heights, sizes (xs, sm, base, lg, xl, etc.)

### `/config/spacing.ts`

Spacing scale (xxxs, xxs, xs, sm, md, lg, xl, xxl, xxxl, etc.)

### `/config/radius.ts`

Border radius tokens (none, sm, md, lg, xl, full, etc.)

### `/config/breakpoints.ts`

Responsive breakpoints (xs, sm, md, lg, xl, 2xl, etc.)

### `/config/motion.ts`

Animation durations (fast, base, slow, slowest) and easing functions (ease-out, ease-in-out, etc.)

### `/config/shadows.ts`

Shadow presets for depth/elevation (shadow-sm, shadow-md, shadow-lg, etc.)

### `/config/gradients.ts`

Gradient presets (hero-gradient, accent-gradient, etc.)

### `/config/glass.ts`

Glassmorphism settings (backdrop blur values, opacity, etc.)

### `/config/z-index.ts`

Z-index scale to prevent stacking context issues (base, dropdown, modal, tooltip, etc.)

### `/config/animations.ts`

Pre-configured Framer Motion variants and animation timelines

### `/config/elevation.ts`

Elevation/shadow scale for layered depth (1px, 2px, 4px, 8px, etc.)

---

## Summary: Architecture Advantages

| Aspect              | Advantage                                                           |
| ------------------- | ------------------------------------------------------------------- |
| **Maintainability** | Clear file organization; easy to find and edit code                 |
| **Scalability**     | Add features without restructuring existing code                    |
| **Testability**     | Isolated layers (services, components, hooks) easy to unit test     |
| **Reusability**     | Hooks, services, components are highly reusable                     |
| **Performance**     | Code splitting per route, component-level memoization, lazy loading |
| **Type Safety**     | Centralized types, TypeScript catches errors early                  |
| **Onboarding**      | New developers understand structure within minutes                  |
| **Flexibility**     | Easy to swap implementations (e.g., API provider, state management) |
| **Accessibility**   | Custom hooks for media queries and reduced motion                   |
| **SEO**             | Dedicated SEO utilities for meta tags, sitemap, robots              |

---

## Next Steps (Pending Approval)

This architecture provides:

1. ✅ Complete folder structure with 100+ sub-directories
2. ✅ Clear responsibility matrix for every folder
3. ✅ 10 proven design patterns for scalability
4. ✅ Detailed data flow with examples
5. ✅ 10+ future feature scenarios with no restructuring needed
6. ✅ 13 configuration token files for design system

**Once approved**, implementation will proceed in phases:

- Phase 2: Create Hero, Navbar, About sections (if approved)
- Phase 3: Implement Projects, Blog, Skills sections
- Phase 4: Add API integration and data fetching
- Phase 5: Polish animations, accessibility, SEO

---

**Status:** 🟡 Awaiting approval to proceed with Phase 2 (UI Implementation)
