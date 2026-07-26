# Interface & Component Contracts: Portfolio Refactoring

**Feature Branch**: `001-portfolio-refactoring`

**Date**: 2026-07-26

**Spec Reference**: [spec.md](file:///D:/Fandi/Projects/my-portfolio/specs/001-portfolio-refactoring/spec.md)

---

## 1. Component Data Interfaces

### 1.1 Navbar & Sidebar Component Contract (`src/components/navbar/`)
- **Imports**: `profileData` from `../../data/profileData.js`
- **Exposed Branding**: `"Fandi Tech"` or `profileData.name`
- **Social Links Render**: Maps `profileData.socials` into navigation icons (`GitHub`, `LinkedIn`, `Email`, `Instagram`).
- **Sidebar Toggle**: Toggles mobile drawer navigation cleanly without obstructing page scrolling.

### 1.2 Hero Component Contract (`src/components/hero/`)
- **Imports**: `profileData` from `../../data/profileData.js`
- **Render Targets**:
  - Name: `profileData.name` ("T. Fandi Ahmad Fadillah")
  - Role: `profileData.role` ("Fullstack Web Developer")
  - Typewriter Animation: Cycles through `profileData.typewriterSkills` array
  - Text Slider: Floating background text slider ("Fullstack Web Developer Scalable Systems Clean Arch")
  - Primary CTA: Smooth scrolls to `#Portfolio` or `#Contact`

### 1.3 Services Component Contract (`src/components/services/`)
- **Imports**: `servicesData` from `../../data/servicesData.js`
- **Render Output**: 4 Service Cards mapped dynamically from `servicesData`.
- **Card Elements**: Title, description, technology tags list.

### 1.4 Portfolio Component Contract (`src/components/portfolio/`)
- **Imports**: `projectsData` from `../../data/projectsData.js`
- **Highlight Order**: First card rendered MUST be `Sistem Surat Menyurat Kampus ITB Ahmad Dahlan`.
- **Card Elements**:
  - Project Title & Category
  - Description & Impact Summary
  - Tech Stack Tags
  - Visual Container: Minimalist abstract gradient background card with technology icons
  - Action Badge: Public repo/demo button OR `"Internal System / Private Repo"` badge based on `isPrivate`.
- **Interactivity**: Framer Motion scroll progress indicator and parallax card transitions.

### 1.5 Contact Component Contract (`src/components/contact/`)
- **Imports**: `profileData` from `../../data/profileData.js`
- **Contact Details**: Renders email (`teukufandi14@gmail.com`), phone (`+62 822-1169-6095`), location (`Tangerang Selatan, Banten`).
- **Form State Contract**:
  - Input Fields: `user_name` (required), `user_email` (required, email format), `message` (required).
  - Submit Handler: Calls `@emailjs/browser` sendForm API targeting `teukufandi14@gmail.com`.
  - Loading State: Submit button shows animated spinner while awaiting API response.
  - Toast Notification: Displays popup Toast ("Pesan Berhasil Terkirim!") upon success.

---

## 2. Global Styling & Responsive Breakpoints

- **Theme Palette**: Futuristic Dark-Mode (Dark slate/black background `#0c0c1d` / `#111132`, neon/gold accents `#orange` / `#rebeccapurple` / `#6c5ce7`).
- **Breakpoints**:
  - Mobile Small: `<480px`
  - Mobile / Tablet: `<768px`
  - Desktop: `>1024px`
- **Overflow Rule**: `overflow-x: hidden` enforced on top-level container (`#root` / `.app-container`).
