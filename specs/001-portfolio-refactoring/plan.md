# Implementation Plan: Portfolio Website Refactoring

**Branch**: `001-portfolio-refactoring` | **Date**: 2026-07-26 | **Spec**: [spec.md](file:///D:/Fandi/Projects/my-portfolio/specs/001-portfolio-refactoring/spec.md)

**Input**: Feature specification from `/specs/001-portfolio-refactoring/spec.md` and user technical design input.

## Summary

Refactor the single-page React portfolio website to eliminate all placeholder content ("Coming Soon" and "Lorem Ipsum"), transition to a modular data-driven architecture (`src/data/`), accurately present T. Fandi Ahmad Fadillah as a Fullstack Web Developer across 5 core feature modules (Hero, Services, Portfolio, Contact, Mobile layout), and modernize build dependencies while preserving visual excellence and animation stability.

## Technical Context

**Language/Version**: JavaScript (ESNext / Node.js 18+)

**Primary Dependencies**: React (v18.2.0), Vite (v4.4.5), Framer Motion (v10.16.4), Sass/SCSS (v1.68.0), @emailjs/browser (v4.4.1), @vercel/analytics (v1.3.1)

**Storage**: N/A (Static SPA client with modular data files)

**Testing**: Manual scenario testing + Vite build validation (`npm run build`)

**Target Platform**: Web Browsers (Desktop, Tablet, Mobile 320px+)

**Project Type**: Single Page Web Application (SPA)

**Performance Goals**: Fast page load (<1.5s), 60fps animations, 0 horizontal overflow

**Constraints**: Zero breaking changes to build process, preserve EmailJS integration, 0% placeholder text

**Scale/Scope**: 5 main scroll sections (Hero, Services, Portfolio, Parallax, Contact)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Data-Driven Architecture**: PASS (All domain data isolated to `src/data/`)
- **Authentic Resume Alignment**: PASS (100% aligned with CV source of truth)
- **Zero Placeholder Policy**: PASS (All dummy strings replaced with authentic data)
- **Build & Layout Stability**: PASS (Zero build warnings/errors, 0 horizontal overflow)

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-refactoring/
├── spec.md              # Feature specification
├── plan.md              # Implementation plan (this file)
├── research.md          # Phase 0 research & technical decisions
├── data-model.md        # Phase 1 data schema specifications
├── quickstart.md        # Phase 1 validation scenarios
└── contracts/           # Component interface contracts
    └── ui-contracts.md  # UI component contracts & props mapping
```

### Source Code (repository root)

```text
src/
├── assets/                  # Public visual assets & brand icons
├── components/              # Modular UI components
│   ├── navbar/              # Navbar branding & social links navigation
│   ├── hero/                # Hero section (Typewriter skills & text slider)
│   ├── services/            # 4 Service pillars breakdown cards
│   ├── portfolio/           # Dynamic featured projects showcase & scroll progress
│   ├── parallax/            # Parallax transition section dividers
│   └── contact/             # Contact info & EmailJS form with Toast feedback
├── data/                    # [NEW] Modular Data Layer
│   ├── profileData.js       # Identity, contact info, typewriter skills, social links
│   ├── servicesData.js      # 4 Service pillars breakdown details
│   └── projectsData.js      # Showcase projects list ordered by primary highlight
├── App.jsx                  # Main SPA container
├── App.scss                 # Global SASS styling & dark mode palette
└── main.jsx                 # Entry point
```

**Structure Decision**: Single project web application using a decoupled data layer (`src/data/`) supplying presentation components (`src/components/`).

## Complexity Tracking

*No constitution violations present.*
