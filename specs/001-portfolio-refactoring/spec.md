# Feature Specification: Portfolio Website Refactoring

**Feature Branch**: `001-portfolio-refactoring`

**Created**: 2026-07-26

**Status**: Draft

**Input**: User description: "Refactor portfolio website SPA to remove all placeholder content ('Coming Soon' & Lorem Ipsum), implement a data-driven architecture, and accurately present T. Fandi Ahmad Fadillah as a Fullstack Web Developer across 5 core feature modules: Hero Identity, Functional Services, Dynamic Featured Works, Verified Contact Channels, and Mobile-First Accessibility."

## Clarifications

### Session 2026-07-26

- Q: Top Project Highlight Order → A: Option B - Sistem Surat Menyurat Kampus as Primary Highlight (followed by Enterprise Web App, Campus Attendance System, and UMKM Business Landing Page).
- Q: Project Link & Visibility Strategy → A: Option A - Hybrid Visibility (Display active public demo/repo links where available, and explicit 'Internal System / Private Repo' indicators for confidential enterprise/campus projects).
- Q: Typewriter Content & Social Links → A: Option A - Fullstack Tech Mix (Typewriter cycles role and core tech stack phrases: 'Fullstack Web Developer', 'Golang & Clean Architecture', 'React & Next.js', 'PostgreSQL & Redis'; Navbar social links updated to GitHub, LinkedIn, Email, and Instagram).
- Q: Contact Form Visual Feedback → A: Option A - Toast & Inline Status (Interactive loading state on submit button + popup Toast notification for success/error alerts upon sending via EmailJS to teukufandi14@gmail.com).
- Q: Project Visual Asset Strategy → A: Option B - Minimalist Gradient Cards (Use modern abstract gradient background cards with tech icons for project thumbnails in place of image screenshots).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Hero Identity & First Impression (Priority: P1)

As a potential recruiter or client visiting the portfolio website,
I want to view a clear hero section presenting T. Fandi Ahmad Fadillah's official identity, primary role as Fullstack Web Developer, headline value statement, dynamic typewriter skill highlights, floating text slider, and developer-focused social links (GitHub, LinkedIn, Email, Instagram),
So that I can immediately establish trust and understand his core qualifications within 3 seconds of landing on the site.

**Why this priority**: The hero section forms the critical first impression for visitors, establishing identity and driving engagement to downstream portfolio sections.

**Independent Test**: Can be tested independently by loading the homepage and verifying identity text, dynamic typewriter text transitions (role & tech stack phrases), text slider motion, social links, and CTA button navigation to projects/contact.

**Acceptance Scenarios**:

1. **Given** a visitor loads the portfolio homepage, **When** viewing the hero section and navbar, **Then** the primary role "Fullstack Web Developer", official name, headline value statement, dynamic skill typewriter phrases, and updated social links (GitHub, LinkedIn, Email, Instagram) are visually rendered.
2. **Given** a visitor clicks the Hero primary Call-to-Action button, **When** activated, **Then** the page smoothly scrolls directly to the Featured Works portfolio section or Contact form.

---

### User Story 2 - Functional Services Breakdown (Priority: P2)

As a technical lead or client looking for engineering services,
I want to view 4 clear, authentic service pillars without any placeholder text ("Coming Soon" or Lorem Ipsum),
So that I can evaluate the exact technical solutions and capabilities T. Fandi Ahmad Fadillah can provide to my team or business.

**Why this priority**: Directly replaces dummy content with authentic service offerings, demonstrating fullstack depth across backend, database, devops, and frontend domains.

**Independent Test**: Can be tested independently by inspecting the Services section to confirm all 4 service pillars render accurate descriptions with 0% placeholder text.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to the Services section, **When** viewing service cards, **Then** the system presents 4 distinct pillars:
   - Backend & API Architecture (clean, reliable, secure server foundations)
   - Database & Performance Optimization (efficient data management & response tuning)
   - DevOps & Containerization (isolated, consistent environments for dev & deployment)
   - Interactive Frontend Integration (modern, responsive, user-friendly web interfaces)
2. **Given** a visitor reads service details, **When** checking for placeholder text, **Then** zero instances of "Lorem Ipsum" or "Coming Soon" exist.

---

### User Story 3 - Dynamic Featured Works Showcase (Priority: P3)

As a recruiter or hiring manager,
I want to interactively explore featured real-world projects with scroll progress indicators, minimalist gradient visual cards, and visual transition effects,
So that I can inspect actual project impact, engineering responsibilities, and technologies used in past accomplishments.

**Why this priority**: Demonstrates proven track record and hands-on experience through case studies while delivering a modern, interactive visual experience.

**Independent Test**: Can be tested independently by scrolling through the Featured Works section to observe progress bar updates, project card transitions, and dynamic data rendering.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls through the Featured Works section, **When** viewing project cards, **Then** at least 4 real showcase projects are rendered dynamically from modular data with **Sistem Surat Menyurat Kampus** as the primary top highlight:
   - Sistem Surat Menyurat Kampus ITB Ahmad Dahlan (PHP Native, MySQL, disposition workflow, in-app notification, tracking status) [PRIMARY HIGHLIGHT]
   - Enterprise Web Application & Architecture (scale, performance, RBAC, Redis caching, DB indexing)
   - Sistem Absensi Kampus ITB Ahmad Dahlan (web-based attendance, daily/monthly summaries, Tailwind CSS)
   - UMKM Business Landing Page (modern responsive business landing page)
2. **Given** a visitor views any project entry, **When** reading project details, **Then** each entry displays: project title, concise impact description, key roles/responsibilities, tech stack tags, minimalist abstract gradient visual card with tech icons, and appropriate repository/demo action buttons (active public links or 'Internal System / Private Repo' badges).
3. **Given** a visitor scrolls between projects, **When** progressing down the section, **Then** visual progress bars and smooth Framer Motion transitions update continuously.

---

### User Story 4 - Verified Contact & Communication Channel (Priority: P4)

As a visitor who wants to discuss job opportunities or projects,
I want to access verified contact info (email, phone, location), public code repositories (GitHub), and submit messages directly via an interactive contact form,
So that I can initiate direct communication without friction or delivery failure.

**Why this priority**: Converts visitor interest into direct inquiries and networking opportunities.

**Independent Test**: Can be tested independently by submitting a test inquiry through the contact form and verifying success feedback and social links.

**Acceptance Scenarios**:

1. **Given** a visitor views the Contact section, **When** reading contact information, **Then** verified details are displayed: email (`teukufandi14@gmail.com`), phone (`+62 822-1169-6095`), location (`Tangerang Selatan, Banten`), and GitHub profile link (`https://github.com/teukufaandii`).
2. **Given** a visitor fills out all required contact form fields and clicks submit, **When** submission completes, **Then** an interactive button loading spinner and a Toast notification confirmation ("Pesan Berhasil Terkirim!") are presented within 2 seconds.

---

### User Story 5 - Mobile-First & Accessible Layout (Priority: P5)

As a mobile smartphone user,
I want all sections, floating sidebar toggles, and interactive elements to adapt fluidly to my screen size without horizontal scrolling,
So that I enjoy a touch-friendly, high-performance browsing experience on any mobile device.

**Why this priority**: Ensures optimal user experience and brand credibility across all device viewports.

**Independent Test**: Can be tested independently by opening the site on mobile viewport widths (320px - 768px) and testing touch interactions, sidebar toggles, and page scrollability.

**Acceptance Scenarios**:

1. **Given** a visitor accesses the website on any viewport width from 320px to 4K, **When** navigating through pages, **Then** zero horizontal scrollbars or overflowing containers occur.
2. **Given** a mobile visitor taps on interactive buttons or the sidebar toggle menu, **When** tapped, **Then** the interface responds instantly with adequate touch target sizes.

---

### Edge Cases

- What happens when a user attempts to submit an empty contact form? The form displays inline error messages highlighting missing required fields.
- What happens when the network connection drops during form submission? The system displays a user-friendly Toast notification error message advising the user to check connectivity and retry.
- How does the layout handle screens smaller than 360px (e.g., 320px fold devices)? Typography, project tags, and card padding dynamically scale down without breaking container borders.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST present T. Fandi Ahmad Fadillah as a "Fullstack Web Developer" in the Hero section with dynamic typewriter skill highlights (role and core tech stack phrases) and text slider effects.
- **FR-002**: System MUST eliminate all placeholder text ("Lorem Ipsum", "Coming Soon", dummy data) across all pages and sections.
- **FR-003**: System MUST display 4 core service pillars: Backend & API Architecture, Database & Performance Optimization, DevOps & Containerization, and Interactive Frontend Integration.
- **FR-004**: System MUST render portfolio projects dynamically from modular data files located in `src/data/` (e.g., `projectsData.js`, `servicesData.js`).
- **FR-005**: System MUST showcase at least 4 real projects with **Sistem Surat Menyurat Kampus** positioned as the primary highlight at the top of the showcase.
- **FR-006**: Each portfolio project entry MUST include title, impact description, list of responsibilities, tech stack tags, minimalist abstract gradient card with tech icons, and appropriate link badges (public URL or 'Internal System / Private Repo').
- **FR-007**: System MUST provide visual scroll progress indicators and smooth transitions between project cards.
- **FR-008**: System MUST display verified contact details and developer social navigation links: email (`teukufandi14@gmail.com`), phone (`+62 822-1169-6095`), location (`Tangerang Selatan, Banten`), GitHub (`https://github.com/teukufaandii`), LinkedIn, and Instagram.
- **FR-009**: System MUST provide a functional contact form dispatching inquiries to `teukufandi14@gmail.com` via `@emailjs/browser` with interactive button loading state and Toast feedback notifications.
- **FR-010**: System MUST deliver a mobile-first responsive layout supporting viewports from 320px upward with touch-friendly interactive targets and 0 horizontal overflow.

### Key Entities

- **Hero Identity Entity**: Represents headline profile (Name, Title, Value Statement, Typewriter Phrases, Slider Text, Social Links).
- **Service Entity**: Represents engineering offerings (Id, Title, Description, Icon/Category, Key Capabilities).
- **Project Entity**: Represents showcase portfolio work (Id, Title, Category, Impact Summary, Responsibilities List, Tech Stack Tags, GradientVisualTheme, TechIcons, Demo/Repo Link, AccessStatus).
- **Contact Info & Inquiry Entity**: Represents communication channels (Email, Phone, Location, Social Links) and visitor message inputs (Name, Email, Message, Submission State, ToastState).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 0% placeholder text ("Lorem Ipsum", "Coming Soon") remains across the entire website.
- **SC-002**: 100% of Services and Portfolio entries are rendered dynamically from modular source files in `src/data/`.
- **SC-003**: 100% of displayed projects, education, skills, and contact data authentically accurately reflect the provided CV source of truth.
- **SC-004**: 100% layout responsiveness across screen sizes from 320px to 1920px+ with 0 horizontal overflow occurrences.
- **SC-005**: Valid contact form submissions display interactive Toast success feedback within 2 seconds.

## Assumptions

- Modular data structures will be placed in `src/data/` as JavaScript modules exporting clean arrays/objects.
- Dynamic visual transitions and scroll progress indicators will leverage Framer Motion and modern CSS/SCSS styling.
- Email dispatch functionality uses `@emailjs/browser` with configured service keys targeting `teukufandi14@gmail.com`.
