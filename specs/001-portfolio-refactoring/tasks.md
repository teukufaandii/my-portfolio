# Tasks: Portfolio Website Refactoring

**Input**: Design documents from `/specs/001-portfolio-refactoring/` (`spec.md`, `plan.md`, `research.md`, `data-model.md`, `contracts/ui-contracts.md`, `quickstart.md`)

**Prerequisites**: plan.md (required), spec.md (required)

**Organization**: Tasks are grouped by user story (US1 through US5) to enable independent implementation and testing of each story increment.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: User story label (`[US1]`, `[US2]`, `[US3]`, `[US4]`, `[US5]`)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Infrastructure initialization for the modular data layer

- [X] T001 Create modular data layer directory in `src/data/`
- [X] T002 Audit project dependencies and build configuration in `package.json`

---

## Phase 2: Foundational (Modular Data Abstraction)

**Purpose**: Core data layer modules that MUST be complete before user story UI refactoring can begin

**⚠️ CRITICAL**: Blocked until Phase 1 is complete. Blocks all downstream user story UI components.

- [X] T003 [P] Create profile data module containing identity, contact details, social links, and typewriter skill phrases in `src/data/profileData.js`
- [X] T004 [P] Create services data module containing the 4 authentic engineering service pillars in `src/data/servicesData.js`
- [X] T005 [P] Create featured projects showcase data module with *Sistem Surat Menyurat Kampus* as top highlight in `src/data/projectsData.js`

**Checkpoint**: Data layer complete - UI component refactoring can now proceed per user story.

---

## Phase 3: User Story 1 - Hero Identity & First Impression (Priority: P1) 🎯 MVP

**Goal**: Present T. Fandi Ahmad Fadillah's identity as Fullstack Web Developer with dynamic typewriter skill highlights, text slider, and updated developer social links (GitHub, LinkedIn, Email, Instagram).

**Independent Test**: Load the homepage and verify identity text, dynamic typewriter text transitions, text slider motion, and social links render dynamically without hardcoded strings.

### Implementation for User Story 1

- [X] T006 [US1] Refactor navbar branding and developer social navigation links in `src/components/navbar/Navbar.jsx` to consume `src/data/profileData.js`
- [X] T007 [US1] Refactor hero component identity text, headline value statement, typewriter skill phrases, and floating text slider in `src/components/hero/Hero.jsx` to consume `src/data/profileData.js`
- [X] T008 [US1] Update SASS styling and responsive layouts for hero section in `src/components/hero/hero.scss` and `src/components/navbar/navbar.scss`

**Checkpoint**: At this point, User Story 1 (Hero Identity & Navbar) is fully functional and testable independently (MVP!).

---

## Phase 4: User Story 2 - Functional Services Breakdown (Priority: P2)

**Goal**: Display 4 clear, authentic engineering service pillars (Backend & API, DB & Performance, DevOps & Docker, Interactive Frontend) rendered dynamically with 0% placeholder text.

**Independent Test**: Inspect the Services section to confirm all 4 service cards render accurate descriptions and tech stack tags without "Coming Soon" or "Lorem Ipsum".

### Implementation for User Story 2

- [X] T009 [US2] Refactor services container and card rendering in `src/components/services/Services.jsx` to map over `src/data/servicesData.js`
- [X] T010 [US2] Update service card styling, hover effects, and responsive grid layouts in `src/components/services/services.scss`

**Checkpoint**: User Stories 1 AND 2 are both functional independently.

---

## Phase 5: User Story 3 - Dynamic Featured Works Showcase (Priority: P3)

**Goal**: Showcase 4 real projects rendered dynamically from `src/data/projectsData.js` with *Sistem Surat Menyurat Kampus* as top highlight, minimalist abstract gradient visual cards, and hybrid link badges.

**Independent Test**: Scroll through the Featured Works section to observe progress bar updates, project card transitions, top project ordering, and `"Internal System / Private Repo"` badges.

### Implementation for User Story 3

- [X] T011 [US3] Refactor portfolio section component in `src/components/portfolio/Portfolio.jsx` to consume `src/data/projectsData.js` and render project cards dynamically
- [X] T012 [US3] Implement minimalist abstract gradient visual cards and tech icon displays in `src/components/portfolio/Portfolio.jsx`
- [X] T013 [US3] Implement hybrid action link buttons (`"Internal System / Private Repo"` badges vs active public links) in `src/components/portfolio/Portfolio.jsx`
- [X] T014 [US3] Update SASS styling, Framer Motion parallax transitions, and scroll progress bar in `src/components/portfolio/portfolio.scss`

**Checkpoint**: User Stories 1, 2, and 3 are all functional independently.

---

## Phase 6: User Story 4 - Verified Contact & Communication Channel (Priority: P4)

**Goal**: Provide verified contact information (`teukufandi14@gmail.com`, phone, location) and functional EmailJS form with button loading state and Toast feedback notifications.

**Independent Test**: Fill out and submit the contact form, observing button loading state and Toast success confirmation notification.

### Implementation for User Story 4

- [X] T015 [US4] Refactor contact info display (email, phone, location) in `src/components/contact/Contact.jsx` to consume `src/data/profileData.js`
- [X] T016 [US4] Implement interactive button loading state and Toast notification feedback upon EmailJS submission in `src/components/contact/Contact.jsx`
- [X] T017 [US4] Update SASS styling and Toast notification positioning in `src/components/contact/contact.scss`

**Checkpoint**: User Stories 1 through 4 are fully integrated and testable.

---

## Phase 7: User Story 5 - Mobile-First & Accessible Layout (Priority: P5)

**Goal**: Ensure fluid layout adaptation across screen viewports (320px+) with touch-friendly navigation toggles and 0 horizontal overflow.

**Independent Test**: Open site on mobile viewports (320px–768px) and test sidebar drawer toggle, touch targets, and page scrollability with 0 horizontal overflow.

### Implementation for User Story 5

- [X] T018 [US5] Audit sidebar toggle menu and mobile navigation overlay in `src/components/sidebar/Sidebar.jsx` and `src/components/sidebar/toggleButton/ToggleButton.jsx`
- [X] T019 [US5] Audit global SASS layout styles, body overflow constraints, and mobile media queries in `src/App.scss`

---

## Phase 8: Polish & Build Audit

**Purpose**: Cross-cutting audit, zero-placeholder verification, and build validation

- [X] T020 [P] Search codebase to confirm 0 instances of `"Lorem Ipsum"` or `"Coming Soon"` remain across all files
- [X] T021 Execute production build check `npm run build` to verify clean compilation with 0 build errors
- [X] T022 Run quickstart validation scenarios defined in `specs/001-portfolio-refactoring/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately
- **Foundational Data Layer (Phase 2)**: Depends on Phase 1 - BLOCKS all UI user stories
- **User Stories (Phase 3 through 7)**: All depend on Phase 2 completion
  - Can proceed sequentially in priority order (P1 → P2 → P3 → P4 → P5)
- **Polish & Build Audit (Phase 8)**: Depends on completion of all user story phases

### Parallel Opportunities

- Foundational data tasks (T003, T004, T005) can run in parallel
- Code search audit (T020) can run in parallel with final verification

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (`src/data/`)
2. Complete Phase 2: Foundational Data Modules (`profileData.js`, `servicesData.js`, `projectsData.js`)
3. Complete Phase 3: User Story 1 (Hero Identity & Navbar)
4. **VALIDATE MVP**: Verify hero section and typewriter skills render cleanly from data layer.

### Incremental Delivery

1. Setup + Foundational Data Modules → Core data layer ready
2. Add User Story 1 (Hero & Navbar) → Test MVP
3. Add User Story 2 (Services Breakdown) → Test
4. Add User Story 3 (Featured Works Showcase) → Test
5. Add User Story 4 (Contact & Toast Feedback) → Test
6. Add User Story 5 (Mobile Responsiveness) → Test
7. Phase 8 Polish & `npm run build` → Complete Delivery
