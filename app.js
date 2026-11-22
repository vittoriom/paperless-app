/* Paperless Desktop Landing Page — powered by @vittoriom/landing-kit */
LandingKit.init({
  theme: { storageKey: 'paperless_theme' },
  i18n: { storageKey: 'paperless_lang' },
  release: {
    repoOwner: 'vittoriom',
    repoName: 'paperless-app',
    defaultVersion: 'v0.5.0',
    showSize: false,
  },
  installGuide: {
    extraSteps: [
      {
        num: 4,
        titleKey: 'install-step4-title',
        title: '4. Initialize Your Vault',
        descKey: 'install-step4-desc',
        desc: 'Launch the app and select any local folder or existing document directory. Paperless instantly sets up indexing without modifying your originals.',
      },
    ],
  },
});
