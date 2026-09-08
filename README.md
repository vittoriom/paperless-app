# Paperless Desktop — Landing Page

Official landing page and showcase website for **[Paperless Desktop](https://github.com/vittoriom/paperless)**, a privacy-first, local-first document management system and sub-millisecond search engine for macOS built with Tauri v2, Rust, and React.

## Features

- **Zero-Dependency Architecture**: Lightweight static website with no build step required. Open `index.html` directly in any modern browser or host via GitHub Pages, Vercel, or Cloudflare Pages.
- **Interactive Document Explorer Sandbox**: Live in-browser demonstration of the search query syntax (prefixes like `tag:`, `type:`, `correspondent:`, `amount:`, `lang:`, `is:duplicate`), dynamic snippet highlighting (`<mark>`), typed custom metadata inspector, side-by-side duplicate diff modal, and on-device neural translation preview.
- **Bilingual Localization (EN / IT)**: Full English and Italian translations with automated browser language detection and instant client-side toggle.
- **Dark & Light Mode**: macOS-aligned dark and light theme toggle with persistent state in `localStorage`.
- **GitHub Release Integration**: Live fetching of the latest `.dmg` release binary asset, tag version, and file size via GitHub REST API.
- **Gatekeeper Terminal Helper**: Copy-paste terminal command helper for opening independently compiled macOS binaries.

## Local Preview

You can preview the landing page instantly using Python's built-in HTTP server or any static web server:

```bash
# Using Python 3
python3 -m http.server 8080

# Or using Node / npx
npx serve .
```

Then open `http://localhost:8080` in your browser.

## Deployment

### GitHub Pages
1. Go to **Settings > Pages** in the `vittoriom/paperless-app` repository on GitHub.
2. Select the `main` branch and `/ (root)` folder.
3. Save to deploy automatically.

## License

MIT License © 2026 Vittorio Monaco
