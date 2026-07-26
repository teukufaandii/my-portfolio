# Quickstart & Verification Guide: Portfolio Refactoring

**Feature Branch**: `001-portfolio-refactoring`

**Date**: 2026-07-26

**Spec Reference**: [spec.md](file:///D:/Fandi/Projects/my-portfolio/specs/001-portfolio-refactoring/spec.md)

---

## 1. Local Development Setup

To run the application locally and verify changes:

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser (typically http://localhost:5173)
```

---

## 2. Validation Scenarios

### Scenario 1: Data-Driven Content Audit
- **Goal**: Verify zero hardcoded domain data in UI components and zero placeholder text ("Lorem Ipsum", "Coming Soon").
- **Verification Steps**:
  1. Open browser dev tools and inspect Hero, Services, Portfolio, and Contact sections.
  2. Confirm name displays "T. Fandi Ahmad Fadillah" and role displays "Fullstack Web Developer".
  3. Confirm Services section renders 4 complete service pillars without any "Coming Soon" text.
  4. Search codebase for string `"Lorem Ipsum"` or `"Coming Soon"` — expect 0 results.

### Scenario 2: Project Showcase Order & Link Visibility
- **Goal**: Confirm project showcase order and badge behavior.
- **Verification Steps**:
  1. Scroll to the Featured Works portfolio section.
  2. Confirm the 1st project listed is **Sistem Surat Menyurat Kampus ITB Ahmad Dahlan**.
  3. Verify confidential project cards (Campus Surat, Enterprise Web, Campus Absensi) display `"Internal System / Private Repo"` badges instead of broken links.
  4. Verify the UMKM Landing Page card displays active link buttons.

### Scenario 3: Contact Form & Toast Notification
- **Goal**: Verify contact form submission and feedback.
- **Verification Steps**:
  1. Fill out the contact form with test name, email, and message.
  2. Click Submit.
  3. Observe loading indicator on the submit button.
  4. Confirm popup Toast notification appears with success confirmation.

### Scenario 4: Mobile Responsiveness & Build Verification
- **Goal**: Verify responsive layout and bundle stability.
- **Verification Steps**:
  1. Resize browser viewport to 375px (mobile) and scroll through all sections.
  2. Verify 0 horizontal scrollbar appears (`document.documentElement.scrollWidth <= window.innerWidth`).
  3. Run production build check:
     ```bash
     npm run build
     ```
  4. Confirm build completes with 0 errors.
