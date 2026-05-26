# AGENTS.md

Static portfolio site — HTML, CSS, vanilla JS. No build step, no npm, no frameworks.

## Key constraints

- **Never mention client company names.** Describe projects only by industry/company size (e.g. "large enterprise in the power generation industry").
- **Never include the old portfolio URL** (`buckypinkman.github.io`).

## Commands

No lint, typecheck, or test commands exist. Open `index.html` in a browser or serve locally:

```
python3 -m http.server 8000
npx serve .
```

## Structure

| File | Purpose |
|---|---|
| `index.html` | All HTML content + OG tags + Inter font CDN import |
| `styles.css` | Everything — layout, components, responsive (breakpoints: 1024, 768, 480) |
| `script.js` | Mobile hamburger toggle + IntersectionObserver nav highlight |
| `assets/profile.jpg` | Avatar (120×120px). SVG fallback with "RD" initials on load failure |

## Architecture notes

- 8 sections in DOM: about, skills, experience, projects, education, certifications, contact. Nav links must match section IDs.
- Desktop: CSS Grid 300px sticky sidebar + scrollable main (max-width 720px). Mobile: single column, sidebar becomes compact header.
- Active nav item tracked via IntersectionObserver (rootMargin: `-20% 0px -70% 0px`).
- Deploy by pushing to GitHub Pages (root folder, main branch) — no build required.
