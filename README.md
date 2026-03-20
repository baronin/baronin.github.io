# Yaroslav Baronin — Portfolio

Personal portfolio website built with Vue 3 + Vite. Responsive, multilingual, supports dark/light theme.

**Live:** [baronin.github.io](https://baronin.github.io)

---

## Tech Stack

- **Vue 3** — Options API, SFCs
- **Vite 4** — build tool
- **SCSS** — BEM, mobile-first, custom mixins & design tokens
- **vue-i18n** — EN / UA / RU
- **vue-router** — SPA routing
- **Font Awesome 6** — icons
- **vite-plugin-pwa** — PWA support
- **gh-pages** — deployment

---

## Features

- Mobile-first responsive layout (390px → 768px → 1280px → 1440px)
- Desktop: sticky sidebar (hero) + scrollable main content
- Dark / Light theme toggle
- Language switcher (EN / UA / RU)
- Sections: Hero, About, Experience, Contact

---

## Local Development

```bash
npm install
npm run dev
```

---

## Deployment to GitHub Pages

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`).

Every push to `master` automatically:
1. Installs dependencies
2. Runs `vite build`
3. Pushes `dist/` to the `gh-pages` branch

**One-time GitHub setup:**
1. Go to repository **Settings → Pages**
2. Set **Source** to `Deploy from a branch`
3. Select branch: `gh-pages`, folder: `/ (root)`
4. Save

After that — just push to `master`, the site updates automatically.

**Manual deploy (fallback):**
```bash
npm run deploy
```

---

## Project Structure

```
src/
├── assets/
│   ├── images/
│   └── scss/
│       └── common/      # vars, mixins, tokens, reset
├── components/
│   ├── AppHero.vue
│   ├── AppAbout.vue
│   ├── AppExperience.vue
│   ├── AppContact.vue
│   ├── AppFooter.vue
│   ├── AppContainer.vue
│   ├── AppSocialList.vue
│   ├── AppThemeToggle.vue
│   └── AppLangSwitcher.vue
├── layouts/
│   └── DefaultLayout.vue
├── locales/             # en.json, ua.json, ru.json
├── pages/
│   └── index.vue
└── constants/
    └── socials.js
```

---

## Breakpoints

| Name | Width | Layout |
|---|---|---|
| Mobile | < 768px | Single column, centered hero |
| Tablet | 768px+ | Single column, wider container |
| Desktop | 1280px+ | Sidebar (hero) + main content |
| Wide | 1440px+ | Max-width container, wider sidebar |

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build + deploy to GitHub Pages |
| `npm run lint` | Lint and auto-fix |
| `npm run format` | Format with Prettier |
