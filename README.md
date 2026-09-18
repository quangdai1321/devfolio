# devfolio

Personal CV site for **Trương Quang Đại** — Software Developer at ISC, FPT Telecom.

A single static page, no build step and no dependencies. Deploy by pointing any static host at the repository root.

## Features

- **Bilingual (VI / EN)** — Vietnamese is the default; the toggle stores the choice in `localStorage`. All copy is seeded into the HTML so the page still reads correctly without JavaScript, for crawlers and link previews.
- **Light and dark themes** — follows the visitor's system preference through CSS custom properties.
- **Print-ready** — a dedicated print stylesheet so "Save as PDF" produces a clean document.
- **Responsive** — two-column layout on desktop, stacked on tablet and phone.
- **Accessible** — keyboard-operable portrait lightbox with focus management and `Esc` to close, visible focus rings, and WCAG-checked contrast in both themes.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | The entire site — markup, styles and script |
| `avatar.webp` / `avatar.png` | Portrait used in the header (WebP with PNG fallback) |
| `avatar-large.webp` | Full portrait shown in the lightbox |

## Local preview

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Deploy

The repository root is already a deployable static site.

- **Vercel** — import the repository, framework preset *Other*, leave build command and output directory empty.
- **GitHub Pages** — enable Pages on the `main` branch, root folder.

## License

[MIT](LICENSE)
