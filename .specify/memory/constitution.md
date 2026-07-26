# Portfolio Website Project Constitution & Development Principles

## Core Principles

### I. Authentic Resume Alignment & Role Identity
- **Primary Role**: The engineer MUST be presented as a "Fullstack Web Developer".
- **Source of Truth**: All skills, projects, and contact data MUST strictly reflect the authentic CV source of truth.
- **Zero Placeholder Policy**: Placeholder text ("Lorem Ipsum", "Coming Soon", dummy entries) is STRICTLY PROHIBITED across all pages and components.

### II. Data-Driven Architecture (Separation of Concerns)
- **Data Isolation**: All domain data (projects, services, profile, contact info) MUST be extracted into modular data files under `src/data/` (e.g. `profileData.js`, `servicesData.js`, `projectsData.js`).
- **No Hardcoded Content**: UI components MUST receive domain content exclusively via data module imports or props and MUST NOT hardcode domain content strings inside JSX rendering files.

### III. Instant Remote Push Workflow
- **Immediate Push**: Every completed task commit on a development/feature branch MUST be immediately pushed to the remote repository branch (`git push origin <branch>`).
- **Review Readiness**: Instant pushing ensures remote changes are readily available for immediate code review.

### IV. Modernization & Build Stability
- **Build Integrity**: Dependency updates MUST NOT break existing build scripts (`npm run build`), Framer Motion scroll animations, or `@emailjs/browser` contact form integrations.
- **Zero Build Warnings**: Production builds MUST compile cleanly without deprecation errors or unhandled warnings.

### V. Mobile-First Responsiveness & UX Integrity
- **Zero Horizontal Overflow**: Layouts MUST render fluidly across mobile (320px+), tablet, and desktop viewports with zero horizontal scrolling.
- **Touch Accessibility**: Floating toggles, navigation items, and action buttons MUST maintain touch-friendly target sizes.

---

## Governance

- This constitution supersedes default scaffolding practices across the project.
- Every implementation task executed via `/speckit-implement` MUST adhere to these core principles.

**Version**: 1.0.0 | **Ratified**: 2026-07-26
