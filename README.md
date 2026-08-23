# Valour House E-Sports Portal

Static official website for Valour House E-Sports at NUS, built with React and Vite. It is designed for GitHub Pages and the custom domain `vhesports.com`.

## Content maintenance

- Update community roles, games, image filenames, and homepage news cards in `app/data.ts`.
- Add future editorial drafts under `src/content/news/`; this keeps source material separate from the page layout.
- Replace images in `public/images/source/` and keep their filenames aligned with `app/data.ts`.
- The Telegram invite is maintained in one place: `telegramUrl` in `app/data.ts`.

The site includes Home, News, individual-news, Committee, ICG, and Join Us views. `public/404.html` routes direct GitHub Pages visits such as `/news/...` back into the static app.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The built site is written to `dist/`.

## Deployment

Pushing to the `main` branch triggers the GitHub Pages workflow in `.github/workflows/deploy-pages.yml`.

Before the first deployment, open the repository on GitHub and set **Settings -> Pages -> Source** to **GitHub Actions**. In the same screen, set the custom domain to `vhesports.com` and enable **Enforce HTTPS** after DNS verification completes.
