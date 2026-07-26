# Research & Technical Decision Document: Portfolio Refactoring

**Feature Branch**: `001-portfolio-refactoring`

**Date**: 2026-07-26

**Spec Reference**: [spec.md](file:///D:/Fandi/Projects/my-portfolio/specs/001-portfolio-refactoring/spec.md)

---

## 1. Technical Choices & Rationales

### Decision 1: Data-Driven Architecture (`src/data/`)
- **Decision**: Extract all domain content (Profile, Services, Projects) from hardcoded JSX components into separate JavaScript modules under `src/data/` (`profileData.js`, `servicesData.js`, `projectsData.js`).
- **Rationale**: Decouples UI visual presentation from content definitions. Allows adding or updating portfolio projects without risking broken layout markup or CSS regressions.
- **Alternatives Considered**: 
  - *JSON files in `public/` fetched via `fetch()`*: Rejected due to unnecessary asynchronous loading overhead and network dependency for static single-page client rendering.
  - *Hardcoded component props*: Rejected as it violates Rule 2 (Separation of Concerns).

### Decision 2: Dependency Upgrade Strategy (React & Vite)
- **Decision**: Keep core versions compatible while auditing dependencies. Upgrade Vite from `4.4.5` to latest stable `5.x`, React/React-DOM from `18.2.0` to latest stable `18.3.x`, while preserving `@emailjs/browser` (v4.4.1) and `framer-motion` (v10.16.4).
- **Rationale**: Ensures zero breaking changes for existing Framer Motion scroll parallax animations and EmailJS contact form integrations while modernizing build performance and security security patches.
- **Alternatives Considered**:
  - *Upgrade React to v19*: Deferred until Framer Motion and legacy animation hooks are fully audited for React 19 compatibility.

### Decision 3: Project Visual Asset & Action Link Strategy
- **Decision**: Implement **Minimalist Gradient Cards with Tech Icons** for project visual thumbnails instead of static screenshots. Use a **Hybrid Visibility** strategy for project action links: active links for public sites, and explicit `"Internal System / Private Repo"` badges for confidential campus/enterprise systems.
- **Rationale**: Ensures a sleek, futuristic dark-mode design aesthetic (aligning with visual guidelines) without requiring heavy screenshot image assets, while providing transparent repository status for recruiters.
- **Alternatives Considered**:
  - *Static screenshots in `public/`*: Required manual asset exports and prone to aspect ratio distortion across mobile viewports.

### Decision 4: Contact Form Dispatch & Feedback Mechanism
- **Decision**: Retain `@emailjs/browser` targeting `teukufandi14@gmail.com`. Add a button loading spinner state during dispatch, and an interactive popup **Toast notification** ("Pesan Berhasil Terkirim!") upon success.
- **Rationale**: Provides immediate, clear visual feedback (under 2 seconds) fulfilling SC-005 and improving UX.

---

## 2. Best Practices & Design Pattern Conventions

- **Component Mapping**: All list renders (`servicesData`, `projectsData`, `typewriterSkills`, `socials`) MUST use `.map()` with unique string keys (e.g. `item.id` or `item.name`).
- **Prop Validation / Clean Imports**: Modular data files export named constants (`export const profileData = ...`). Components import only required data constants.
- **Mobile-First Layout**: Use responsive SASS/SCSS mixins or media queries at `768px` (tablet) and `480px` / `320px` (mobile). Ensure minimum touch targets of 44x44px for sidebar toggles and buttons.
