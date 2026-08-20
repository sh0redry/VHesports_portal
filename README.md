# VH Esports Portal

Static community homepage for VH Esports, built with React and Vite.

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

Pushing to the `main` branch triggers the GitHub Pages workflow in
`.github/workflows/deploy-pages.yml`.

Before the first deployment, open the repository on GitHub and set
**Settings → Pages → Source** to **GitHub Actions**. In the same screen, set
the custom domain to `vhesports.com` and enable **Enforce HTTPS** after DNS
verification completes.
