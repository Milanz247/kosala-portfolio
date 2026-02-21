# Project Structure — Kosala Dananjaya Portfolio

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · shadcn/ui · next-themes

---

## Root Files

| File | Purpose |
|------|---------|
| `next.config.ts` | Next.js configuration |
| `tsconfig.json` | TypeScript compiler options |
| `postcss.config.mjs` | PostCSS config (Tailwind integration) |
| `eslint.config.mjs` | ESLint flat config |
| `components.json` | shadcn/ui component registry config |
| `package.json` | Dependencies & npm scripts (`dev`, `build`, `start`, `lint`) |
| `README.md` | Default Next.js getting-started notes |

---

## `app/` — Next.js App Router

```
app/
├── globals.css       # Global styles, CSS custom properties (--bg, --fg, --border, etc.)
├── layout.tsx        # Root layout — sets metadata, Inter font, ThemeProvider wrapper
└── page.tsx          # Home page — composes all sections in order
```

### `app/layout.tsx`
- **Metadata:** Title = `"Kosala Dananjaya | Social Media Manager & Meta Ads Specialist"`, OpenGraph tags, keywords.
- Wraps the app in `ThemeProvider` with `defaultTheme="dark"`.
- Uses `Inter` font from `next/font/google`.

### `app/page.tsx`
Renders the full single-page layout in this order:

```
Navbar
  └── Hero
  └── About
  └── Services
  └── CaseStudies
  └── Skills
  └── Experience
  └── Contact
Footer
WhatsAppFloat
```

---

## `components/` — UI Components

### Top-Level Components

| Component | Description |
|-----------|-------------|
| `Navbar.tsx` | Fixed top navigation bar. Scroll-aware background blur, smooth-scroll links, mobile hamburger menu, `ThemeToggle`. Nav links: About · Services · Case Studies · Skills · Experience · Contact |
| `Footer.tsx` | Page footer |
| `WhatsAppFloat.tsx` | Floating WhatsApp contact button (bottom-right) |

---

### `components/providers/`

| File | Description |
|------|-------------|
| `ThemeProvider.tsx` | Wraps `next-themes` `ThemeProvider` for dark/light mode support |

---

### `components/sections/` — Page Sections

Each section maps to an anchor link in the Navbar.

| Section | Anchor | Description |
|---------|--------|-------------|
| `Hero.tsx` | `#home` | Landing hero — name, title, CTA buttons |
| `About.tsx` | `#about` | Bio and personal background |
| `Services.tsx` | `#services` | Service offerings (Social Media Management, Meta Ads, etc.) |
| `CaseStudies.tsx` | `#case-studies` | Client results and campaign case studies |
| `Skills.tsx` | `#skills` | Skills & tools overview |
| `Experience.tsx` | `#experience` | Work history / experience timeline |
| `Contact.tsx` | `#contact` | Contact form / contact details |

---

### `components/ui/` — Reusable UI Primitives (shadcn/ui)

| Component | Description |
|-----------|-------------|
| `badge.tsx` | Badge chip component (`cva`-based variants) |
| `button.tsx` | Button component (`cva`-based variants: default, outline, ghost, etc.) |
| `card.tsx` | Card container with `CardHeader`, `CardContent`, `CardFooter` sub-components |
| `theme-toggle.tsx` | Dark/Light mode toggle button using `next-themes` |

---

## `lib/`

| File | Description |
|------|-------------|
| `utils.ts` | `cn()` helper — merges Tailwind classes with `clsx` + `tailwind-merge` |

---

## `public/`

Static asset folder served at `/`. Add images, icons, and other public files here.

---

## Key Dependencies

| Package | Version | Use |
|---------|---------|-----|
| `next` | 16.1.6 | Framework |
| `react` / `react-dom` | 19.2.3 | UI library |
| `framer-motion` | ^12 | Animations |
| `next-themes` | ^0.4.6 | Dark/light theme |
| `lucide-react` | ^0.575 | Icons |
| `@radix-ui/*` | various | Accessible UI primitives |
| `tailwindcss` | ^4 | Utility-first CSS |
| `class-variance-authority` | ^0.7 | Component variant system |
| `clsx` + `tailwind-merge` | latest | Class name merging |

---

## Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

---

## Theme System

CSS custom properties defined in `globals.css` control the color palette:

| Variable | Use |
|----------|-----|
| `--bg` | Page background |
| `--fg` | Foreground / text |
| `--border` | Border color |

Accent color: **`#FF7A00`** (orange) — used in branding and highlights.

ThemeProvider defaults to **dark mode** with `enableSystem={false}`.

---

## Component Data Flow

```
app/layout.tsx
  └── ThemeProvider (next-themes)
        └── app/page.tsx
              ├── Navbar          ← scroll state, mobile menu, theme toggle
              ├── sections/*      ← independent section components
              ├── Footer
              └── WhatsAppFloat  ← floating overlay
```

---

*Last updated: February 21, 2026*
