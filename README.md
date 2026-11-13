# Valour House E-Sports Portal

Static official website for Valour House E-Sports at NUS, built with React and Vite. It is hosted on GitHub Pages at the custom domain `vhesports.com`.

Every update is recorded in [CHANGELOG.md](CHANGELOG.md).

## Where things live

| What | Where |
| --- | --- |
| Committee, games, toolkit links, Telegram invite, VHCG results | `app/data.ts` |
| VHCG rulebooks | `app/vhcgRulebooks.ts` |
| News posts | `src/content/news/*.md` |
| Gallery photos | `app/gallery.ts` (files in `public/images/gallery/`) |
| Page titles and descriptions | `app/siteMeta.json` |
| One file per page | `app/pages/` |
| Header and footer | `app/components/` |
| News posts with a hand-built layout | `app/articles/` |
| Colours and all styling | `app/globals.css` (theme colours are at the top) |
| Images | `public/images/source/` |

## Publishing a news post

Add a Markdown file to `src/content/news/`, named `YYYY-MM-short-name.md`. The part after the date becomes the address: `2026-12-winter-cup.md` is published at `/news/winter-cup`.

```markdown
---
title: Winter Cup Results
date: DEC 2026
tag: RESULTS
order: 50
cover: winter-cup.jpg
---

The first paragraph is the summary shown on cards and under the title.

## A heading

Normal text with **bold**, *italic* and a [link](https://example.com).

- A bullet point
- Another one

![Description of the photo](winter-cup.jpg "Optional caption")
```

- `order`: a higher number appears first in the news list. The homepage shows the first three.
- `cover` (optional): the photo shown on news cards. Without it, a purple tile with the emblem is shown.
- Images go in `public/images/source/` and are referred to by file name. Keep photos under about 300 KB (1600 px wide JPG is plenty).
- No code change is needed. A post only needs an entry in `app/articles/index.ts` if it uses a special hand-built layout.

## Adding gallery photos

1. Put the full-size photo in `public/images/gallery/` (1600-1700 px on the long side is plenty).
2. Put a 640 px wide copy with the same file name in `public/images/gallery/thumbs/`.
3. Add a line for it in `app/gallery.ts` with its file name, a short description (not displayed) and its pixel size.

Every photo appears on the Gallery page; landscape photos also rotate in the homepage slider.

## VHCG results

Enter match results in `app/data.ts`. Placement points and the overall standings table are calculated from the match records; the two short notes below the tables (`vhcgStandingsNote`, `mlbbTieBreakerNote`) are written by hand and should be updated with them.

## Adding a page

1. Create the page in `app/pages/`.
2. Add its address, title and description to `app/siteMeta.json`.
3. Add it to `pageFor` in `app/App.tsx`.

## Local development

Requires Node.js 22.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The built site is written to `dist/`. After Vite builds the app, `scripts/prerender.mjs` writes a copy of the page for every address (with its own title and description), plus `sitemap.xml` and `robots.txt`. `public/404.html` forwards any other address into the app, which shows a "Page not found" view.

## Deployment

Pushing to the `main` branch triggers the GitHub Pages workflow in `.github/workflows/deploy-pages.yml`; the site updates a minute or two later. There is no review step, so run `npm run build` locally before pushing.

GitHub Pages settings (already configured): **Settings -> Pages -> Source** is **GitHub Actions**, the custom domain is `vhesports.com`, and **Enforce HTTPS** is on.
