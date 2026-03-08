# Portfolio — Abdelaziz Mekouar

> Modern, responsive portfolio built with **Astro** and deployed on **Vercel**.

**Live:** [https://portfolio-abdelaziz-mekouar.vercel.app](https://portfolio-abdelaziz-mekouar.vercel.app)

---

## Project Structure

```
src/
├── components/        # Astro section components (Hero, About, Skills, …)
├── data/
│   └── profile.ts     # ← Single source of truth for all portfolio content
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro    # Main page — assembles components
└── styles/
    └── global.css     # CSS variables, resets, animations
```

## Commands

| Command          | Description                    |
| ---------------- | ------------------------------ |
| `npm install`    | Install dependencies           |
| `npm run dev`    | Start dev server (localhost)   |
| `npm run build`  | Build for production           |
| `vercel --prod`  | Deploy to Vercel               |

## How to Update Content

Edit only **`src/data/profile.ts`** — every section of the site reads from this file.

- Sections with empty arrays or blank strings are automatically hidden from the site and navigation.
- Add experience, publications, certifications, or any other section by filling in the corresponding field.

## Tech Stack

- [Astro](https://astro.build) — Static site framework
- CSS Variables + Glassmorphism design
- Lucide SVG icons (inline, no dependencies)
- [formsubmit.co](https://formsubmit.co) — Contact form backend
- [Vercel](https://vercel.com) — Deployment & hosting

## Author

**Abdelaziz Mekouar**
- Email: a.mekouar@esisa.ac.ma
- GitHub: [amekouar-jpg](https://github.com/amekouar-jpg)
- LinkedIn: [abdelaziz-mekouar](https://www.linkedin.com/in/abdelaziz-mekouar-6a4ab438a/)

