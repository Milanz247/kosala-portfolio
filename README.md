# Kosala Dananjaya — Personal Portfolio

> Personal portfolio website for **Kosala Dananjaya**, Meta Ads Strategist & Social Media Manager based in Al Ain, UAE.

Live site: [https://kosala.vercel.app](https://kosala.vercel.app) _(update with your actual URL)_

---

## 🛠 Technology Stack

| Technology                   | Version | Purpose                                                     |
| ---------------------------- | ------- | ----------------------------------------------------------- |
| **Next.js**                  | 16.1.6  | React framework (App Router, SSR, routing)                  |
| **React**                    | 19.2.3  | UI component library                                        |
| **TypeScript**               | ^5      | Type-safe JavaScript                                        |
| **Tailwind CSS**             | ^4      | Utility-first CSS styling                                   |
| **Framer Motion**            | ^12     | Animations & scroll-triggered transitions                   |
| **next-themes**              | ^0.4.6  | Dark / Light mode support                                   |
| **lucide-react**             | ^0.575  | Icon library                                                |
| **Radix UI**                 | various | Accessible component primitives (accordion, dropdown, tabs) |
| **shadcn/ui**                | —       | Pre-built UI components built on Radix UI                   |
| **class-variance-authority** | ^0.7    | Component variant system                                    |
| **clsx + tailwind-merge**    | latest  | Safe Tailwind class merging utility                         |

---

## ✅ Prerequisites

Make sure the following are installed on your machine before running the project:

- **Node.js** — v18 or higher → [Download Node.js](https://nodejs.org)
- **npm** — comes bundled with Node.js (or use `pnpm` / `yarn` if preferred)

Check your versions:

```bash
node -v
npm -v
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/kosala-portfolio.git
cd kosala-portfolio
```

### 2. Install dependencies

```bash
npm install
```

This installs all packages listed in `package.json` — including Next.js, React, Tailwind CSS, Framer Motion, and all other dependencies.

### 3. Start the development server

```bash
npm run dev
```

Open your browser and go to:

```
http://localhost:3000
```

The page **auto-refreshes** every time you save a file — no manual reload needed.

---

## 📜 Available Scripts

| Command         | Description                                               |
| --------------- | --------------------------------------------------------- |
| `npm run dev`   | Start local development server at `http://localhost:3000` |
| `npm run build` | Build the optimised production bundle                     |
| `npm run start` | Start the production server (run `build` first)           |
| `npm run lint`  | Run ESLint to check for code errors                       |

---

## 📁 Project Structure

```
kosala-portfolio/
├── app/
│   ├── globals.css          # Global styles & CSS variables (colors, typography)
│   ├── layout.tsx           # Root layout — metadata, fonts, ThemeProvider
│   ├── page.tsx             # Home page — assembles all sections in order
│   └── privacy-policy/      # Privacy Policy page
│
├── components/
│   ├── Navbar.tsx           # Fixed top navigation bar (scroll-aware, mobile menu)
│   ├── Footer.tsx           # Page footer
│   ├── WhatsAppFloat.tsx    # Floating WhatsApp contact button (bottom-right)
│   ├── PageLoader.tsx       # Initial page load animation
│   │
│   ├── sections/            # Individual page sections
│   │   ├── Hero.tsx         # Landing hero — name, title, CTA buttons
│   │   ├── About.tsx        # Bio and personal background
│   │   ├── Services.tsx     # Service offerings
│   │   ├── CaseStudies.tsx  # Client results & campaign case studies
│   │   ├── Skills.tsx       # Tools & skills overview
│   │   ├── Experience.tsx   # Work history / experience timeline
│   │   ├── Education.tsx    # Education & certifications
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Process.tsx      # Working process steps
│   │   ├── PainPoints.tsx   # Pain points section
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   └── Contact.tsx      # Contact form & details
│   │
│   ├── providers/
│   │   └── ThemeProvider.tsx  # next-themes wrapper for dark/light mode
│   │
│   └── ui/                  # Reusable shadcn/ui primitives
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── theme-toggle.tsx
│
├── lib/
│   └── utils.ts             # cn() helper for merging Tailwind classes
│
├── public/                  # Static assets (images, icons, etc.)
│
├── package.json             # Project dependencies & scripts
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS config (Tailwind integration)
├── eslint.config.mjs        # ESLint flat config
└── components.json          # shadcn/ui component registry config
```

---

## 🎨 Design System

The color palette and theme are controlled via CSS custom properties in `app/globals.css`:

| Variable         | Usage                           |
| ---------------- | ------------------------------- |
| `--bg`           | Page background                 |
| `--bg-secondary` | Secondary background (sections) |
| `--fg`           | Primary text / foreground       |
| `--fg-subtle`    | Secondary text                  |
| `--fg-muted`     | Muted / tertiary text           |
| `--card-bg`      | Card background                 |
| `--card-border`  | Card border color               |
| `--icon-bg`      | Icon container background       |

**Accent colour:** `#FF7A00` (orange) — used across all branding highlights.

**Default theme:** Dark mode (`defaultTheme="dark"` with `enableSystem={false}`).

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Next.js — click **Deploy**

No extra configuration needed. Vercel handles the build and deployment automatically.

### Manual Production Build

```bash
npm run build
npm run start
```

---

## 📦 Key Dependencies Explained

| Package                    | Why it's used                                                              |
| -------------------------- | -------------------------------------------------------------------------- |
| `next`                     | The core framework — handles routing, server rendering, image optimisation |
| `framer-motion`            | Powers all scroll-triggered animations and micro-interactions              |
| `next-themes`              | Provides dark/light mode switching with zero flicker                       |
| `lucide-react`             | Clean, consistent SVG icon set                                             |
| `@radix-ui/*`              | Accessible, unstyled UI primitives (dropdown, accordion, tabs)             |
| `tailwindcss`              | Utility-first CSS framework                                                |
| `class-variance-authority` | Manages component variants (e.g. button sizes and styles)                  |
| `clsx` + `tailwind-merge`  | Safely combines Tailwind class names without conflicts                     |

---

## 👤 Author

**Kosala Dananjaya**
Meta Ads Strategist & Social Media Manager
📍 Al Ain, UAE

---

_Last updated: March 2026_
