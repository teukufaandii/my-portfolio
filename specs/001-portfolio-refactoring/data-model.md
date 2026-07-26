# Data Model & Schema Specifications: Portfolio Refactoring

**Feature Branch**: `001-portfolio-refactoring`

**Date**: 2026-07-26

**Spec Reference**: [spec.md](file:///D:/Fandi/Projects/my-portfolio/specs/001-portfolio-refactoring/spec.md)

---

## 1. Data Schema Definitions

### 1.1 Profile Data (`src/data/profileData.js`)

Defines the engineer's core persona, authentic CV contact details, developer social links, and typewriter skill phrases.

```javascript
/**
 * @typedef {Object} SocialLink
 * @property {string} name - Platform display name (GitHub, LinkedIn, Instagram, Email)
 * @property {string} url - Target profile URI
 * @property {string} icon - Icon identifier matching the icon component/SVG
 */

/**
 * @typedef {Object} ProfileData
 * @property {string} name - Official full name ("T. Fandi Ahmad Fadillah")
 * @property {string} role - Primary professional title ("Fullstack Web Developer")
 * @property {string} tagline - Value statement/headline
 * @property {Object} contact - Verified contact information
 * @property {string} contact.email - "teukufandi14@gmail.com"
 * @property {string} contact.phone - "+62 822-1169-6095"
 * @property {string} contact.location - "Tangerang Selatan, Banten"
 * @property {string} contact.education - "Sistem Informasi, ITB Ahmad Dahlan Jakarta (IPK 3.81)"
 * @property {SocialLink[]} socials - Developer navigation social links
 * @property {string[]} typewriterSkills - Array of typewriter animated skill phrases
 */
```

### 1.2 Services Data (`src/data/servicesData.js`)

Defines the 4 functional engineering service pillars without placeholder text.

```javascript
/**
 * @typedef {Object} ServicePillar
 * @property {number} id - Unique numeric identifier (1..4)
 * @property {string} title - Service title
 * @property {string} description - Service capability description
 * @property {string[]} tags - Associated tech stack keywords
 */

/** @type {ServicePillar[]} */
```

**Service Pillars Array Content**:
1. **Backend & API Architecture**: RESTful API engineering using Golang (Gin, GORM), PHP Native, Clean Architecture, central RBAC, and middleware security.
2. **Database & Performance Optimization**: PostgreSQL/MySQL schema design, Redis caching, DB indexing, N+1 query solver, and async Goroutine processing.
3. **DevOps & Containerization**: Isolated development & deployment environments using Docker & Docker Compose with Air live-reloading.
4. **Interactive Frontend Integration**: Modern web interfaces built with React, Next.js, Vite, Tailwind CSS, Redux Toolkit, and Zod.

### 1.3 Projects Data (`src/data/projectsData.js`)

Defines showcase portfolio works ordered with **Sistem Surat Menyurat Kampus** as the primary top highlight.

```javascript
/**
 * @typedef {Object} ProjectItem
 * @property {string} id - Unique slug identifier
 * @property {string} title - Full project name
 * @property {string} category - Project classification
 * @property {string} desc - Impact summary and engineering scope
 * @property {string[]} techStack - Array of technology tags
 * @property {string} link - Repository or live demo URL ("#" if private)
 * @property {boolean} isPrivate - True if internal/confidential, false if public
 * @property {string} gradientTheme - SASS/CSS gradient background theme name
 * @property {string[]} techIcons - List of tech icons to display on card
 */

/** @type {ProjectItem[]} */
```

**Project Array Order**:
1. `surat-kampus` — **Sistem Surat Menyurat Kampus ITB Ahmad Dahlan** [PRIMARY HIGHLIGHT] (`isPrivate: true`)
2. `enterprise-web-arch` — **Enterprise Web Architecture & Backend API** (`isPrivate: true`)
3. `absensi-kampus` — **Sistem Absensi Kampus ITB Ahmad Dahlan** (`isPrivate: true`)
4. `umkm-landing` — **Website Bisnis & Promosi UMKM** (`isPrivate: false`)

---

## 2. Validation & Invariants

- **Zero Placeholder Policy**: No fields in `profileData`, `servicesData`, or `projectsData` may contain `"Lorem Ipsum"`, `"Coming Soon"`, or dummy strings.
- **Unique IDs**: All `id` fields in `servicesData` and `projectsData` must be strictly unique strings or numbers.
- **Link Integrity**: If `isPrivate` is `true`, the UI MUST render an `"Internal System / Private Repo"` badge instead of an active external navigation link.
