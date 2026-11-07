# Paperless Desktop — Landing Page

Official landing page and showcase website for **[Paperless Desktop](https://github.com/vittoriom/paperless)**, a privacy-first, local-first document management system and instant search engine for macOS built with Tauri v2, Rust, and React.

## Features

- **Zero-Dependency Architecture**: Lightweight static website with no build step required. Open `index.html` directly in any modern browser or host via GitHub Pages, Vercel, or Cloudflare Pages.
- **Feature & Architecture Showcase**: Visual overview of instant SQLite FTS5 search, on-device neural translation, automated inbox ingestion with directory mirroring, duplicate detection with SHA-256 relinking, decoupled external drive storage, and native Model Context Protocol (MCP) server support.
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
