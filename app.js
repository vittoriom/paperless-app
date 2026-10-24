/* ============================================================
   Paperless Desktop Landing Page JavaScript
   i18n + GitHub Release Fetcher + Interactive Explorer Sandbox
   ============================================================ */

let currentLang = 'en';

// Realistic sample documents for the interactive sandbox
const sampleDocuments = [
  {
    id: 1,
    title: "Apple_Store_MacBook_Pro_Invoice.pdf",
    correspondent: "Apple",
    type: "Invoice",
    date: "2025-11-14",
    tags: ["taxes", "expenses", "hardware"],
    amount: "$2,499.00",
    lang: "en",
    langLabel: "English",
    isDuplicate: false,
    fileSize: "148 KB",
    hash: "a4f8...9b12",
    customFields: {
      "Invoice Number": "INV-98231-APL",
      "Payment Status": "Paid (Apple Card)",
      "Tax Deductible": "Yes (100%)",
      "Depreciation Class": "Computer Equipment"
    },
    originalText: "Apple Distribution International Ltd. Hollyhill Industrial Estate, Cork, Ireland. Invoice Number: INV-98231-APL. Date: November 14, 2025. Item: MacBook Pro 16-inch (Space Black), Apple M3 Max with 16-core CPU, 40-core GPU, 36GB Unified Memory, 1TB SSD Storage. Total Amount: $2,499.00. VAT/Sales Tax Paid: $0.00. Paid in full via Apple Pay.",
    translatedText: null
  },
  {
    id: 2,
    title: "Deloitte_Jahresabschluss_Prufung_2025.pdf",
    correspondent: "Deloitte",
    type: "Financial Report",
    date: "2026-02-10",
    tags: ["taxes", "corporate", "audit"],
    amount: "€14,200.00",
    lang: "de",
    langLabel: "German (Deutsch)",
    isDuplicate: false,
    fileSize: "892 KB",
    hash: "c3e1...77b4",
    customFields: {
      "Audit Cycle": "FY2025 Annual Review",
      "Auditor Partner": "Dr. H. Zimmermann",
      "Status": "Approved & Signed",
      "Tax Jurisdiction": "Germany / EU"
    },
    originalText: "Deloitte GmbH Wirtschaftsprüfungsgesellschaft. Prüfungsbericht und Jahresabschluss für das Geschäftsjahr 2025. Die Buchführung und der Jahresabschluss entsprechen den gesetzlichen Vorschriften (HGB). Der ausgewiesene Jahresüberschuss beträgt 142.500 Euro. Bestätigungsvermerk uneingeschränkt erteilt.",
    translatedText: "Deloitte GmbH Auditing Firm. Audit report and annual financial statements for fiscal year 2025. The accounting and annual accounts comply with statutory regulations (German Commercial Code HGB). The reported net annual surplus is 142,500 euros. Unconditional audit certificate issued."
  },
  {
    id: 3,
    title: "Stripe_Monthly_Payout_Settlement_2026_01.pdf",
    correspondent: "Stripe",
    type: "Statement",
    date: "2026-01-31",
    tags: ["finances", "revenue", "saas"],
    amount: "€8,750.50",
    lang: "en",
    langLabel: "English",
    isDuplicate: false,
    fileSize: "210 KB",
    hash: "f7a2...18d9",
    customFields: {
      "Settlement ID": "po_1P98xL2eZvKYlo2C",
      "Gross Volume": "€9,120.00",
      "Stripe Fees": "€369.50",
      "Payout Currency": "EUR"
    },
    originalText: "Stripe Payments Europe, Limited. Monthly Merchant Settlement Summary for period Jan 01 - Jan 31, 2026. Gross charge volume: €9,120.00 across 214 transactions. Total processing fees deducted: €369.50. Net payout transferred to Bank Account: €8,750.50.",
    translatedText: null
  },
  {
    id: 4,
    title: "Contratto_Locazione_Appartamento_Milano.pdf",
    correspondent: "Studio Immobiliare",
    type: "Contract",
    date: "2024-09-01",
    tags: ["personal", "legal", "housing"],
    amount: "€1,200.00/mo",
    lang: "it",
    langLabel: "Italian (Italiano)",
    isDuplicate: false,
    fileSize: "1.4 MB",
    hash: "e5d0...321c",
    customFields: {
      "Contract Type": "4+4 Canone Libero",
      "Security Deposit": "€3,600.00 (3 months)",
      "Notice Period": "6 months",
      "Registered At": "Agenzia delle Entrate"
    },
    originalText: "Contratto di locazione ad uso abitativo ai sensi della Legge 9 dicembre 1998, n. 431, art. 2, comma 1. Il canone annuo di locazione è convenuto in € 14.400,00 da corrispondersi in 12 rate mensili anticipate di € 1.200,00 ciascuna entro il giorno 5 di ogni mese.",
    translatedText: "Residential lease agreement pursuant to Italian Law 9 December 1998, n. 431, art. 2, paragraph 1. The annual rent is agreed at €14,400.00 payable in 12 advance monthly installments of €1,200.00 each by the 5th day of every month."
  },
  {
    id: 5,
    title: "Apple_Store_Invoice_Nov2025_Scan.pdf",
    correspondent: "Apple",
    type: "Invoice",
    date: "2025-11-14",
    tags: ["taxes", "expenses"],
    amount: "$2,499.00",
    lang: "en",
    langLabel: "English",
    isDuplicate: true,
    duplicateOfId: 1,
    similarityScore: "98.4%",
    fileSize: "152 KB",
    hash: "a4f8...9b12",
    customFields: {
      "Invoice Number": "INV-98231-APL",
      "Duplicate Reason": "Identical Content & Metadata",
      "Ingested Via": "Scanner Inbox Watcher"
    },
    originalText: "Apple Distribution International Ltd. Invoice Number: INV-98231-APL. Date: November 14, 2025. MacBook Pro 16-inch M3 Max 36GB 1TB. Total Amount: $2,499.00 Paid in full.",
    translatedText: null
  },
  {
    id: 6,
    title: "Allianz_Care_Medical_Claim_Reimbursement.pdf",
    correspondent: "Allianz",
    type: "Insurance",
    date: "2026-03-02",
    tags: ["health", "receipts", "refunds"],
    amount: "€430.00",
    lang: "en",
    langLabel: "English",
    isDuplicate: false,
    fileSize: "95 KB",
    hash: "66d8...44e1",
    customFields: {
      "Policy ID": "ALZ-HEALTH-9941",
      "Claim Status": "Approved for Direct Deposit",
      "Treatment Type": "Specialist Consultation"
    },
    originalText: "Allianz Care International. Notice of Claim Settlement #MED-2026-88. Patient Claim for Specialist Consultation and Prescription medicines dated Feb 20, 2026. Eligible amount: €430.00. Approved payment will be credited to registered IBAN within 3 business days.",
    translatedText: null
  }
];

let selectedDocId = 1;
let currentActiveTab = 'meta';
let activeSearchQuery = '';
let currentViewMode = 'grid';

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initTheme();
  initReleaseFetcher();
  initSandbox();
  initAccordion();
  initCopyButton();
  initMobileNav();
});

/* ============================================================
   1. Localization Engine (i18n)
   ============================================================ */
function initI18n() {
  const savedLang = localStorage.getItem('paperless_lang');
  const browserLang = navigator.language || navigator.userLanguage || 'en';
  const defaultLang = browserLang.toLowerCase().startsWith('it') ? 'it' : 'en';
  currentLang = savedLang || defaultLang;

  updateLangButtons();
  applyTranslations();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-lang');
      if (selected !== currentLang) {
        currentLang = selected;
        localStorage.setItem('paperless_lang', currentLang);
        updateLangButtons();
        applyTranslations();
        renderSandboxDocs();
        renderDocDrawer();
      }
    });
  });
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function applyTranslations() {
  const dict = (window.translations && window.translations[currentLang]) ? window.translations[currentLang] : window.translations['en'];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  if (dict['meta-desc']) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', dict['meta-desc']);
  }
  if (dict['meta-title']) {
    document.title = dict['meta-title'];
  }
}

/* ============================================================
   2. Theme Toggle (Dark / Light)
   ============================================================ */
function initTheme() {
  const savedTheme = localStorage.getItem('paperless_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeToggleUI(savedTheme);

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('paperless_theme', next);
      updateThemeToggleUI(next);
    });
  }
}

function updateThemeToggleUI(theme) {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  const icon = btn.querySelector('.theme-icon');
  if (icon) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
}

/* ============================================================
   3. GitHub Release Fetcher
   ============================================================ */
function initReleaseFetcher() {
  const repoOwner = 'vittoriom';
  const repoName = 'paperless-app';
  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/releases/latest`;
  const defaultDownloadUrl = `https://github.com/${repoOwner}/${repoName}/releases`;

  fetch(apiUrl)
    .then(res => {
      if (!res.ok) throw new Error('Release not found or rate limited');
      return res.json();
    })
    .then(data => {
      const tagName = data.tag_name || 'v0.1.0';
      const dmgAsset = data.assets && data.assets.find(a => a.name.endsWith('.dmg'));
      const downloadUrl = dmgAsset ? dmgAsset.browser_download_url : data.html_url || defaultDownloadUrl;
      const sizeMb = dmgAsset ? (dmgAsset.size / (1024 * 1024)).toFixed(1) + ' MB' : '~14 MB';

      // Update all download buttons
      ['nav-download-btn', 'hero-download-btn', 'cta-download-btn'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.href = downloadUrl;
        }
      });

      // Update version badge
      const versionEl = document.getElementById('hero-version-text');
      if (versionEl) {
        versionEl.innerHTML = `Latest Release: <strong>${tagName}</strong> (${sizeMb}) • macOS 13+ Universal`;
      }
    })
    .catch(() => {
      // Fallback to repository releases page
      ['nav-download-btn', 'hero-download-btn', 'cta-download-btn'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.href = defaultDownloadUrl;
      });
    });
}

/* ============================================================
   4. Interactive Document Explorer Sandbox
   ============================================================ */
function initSandbox() {
  const searchInput = document.getElementById('sandbox-search-input');
  const clearBtn = document.getElementById('sandbox-clear-search');
  const presetChips = document.querySelectorAll('.sandbox-preset-chip');
  const viewBtns = document.querySelectorAll('.sandbox-view-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearchQuery = e.target.value.trim();
      renderSandboxDocs();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      activeSearchQuery = '';
      presetChips.forEach(c => c.classList.remove('active'));
      document.querySelector('[data-query=""]')?.classList.add('active');
      renderSandboxDocs();
    });
  }

  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      presetChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const query = chip.getAttribute('data-query') || '';
      activeSearchQuery = query;
      if (searchInput) searchInput.value = query;
      renderSandboxDocs();
    });
  });

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentViewMode = btn.getAttribute('data-view') || 'grid';
      const container = document.getElementById('sandbox-docs-container');
      if (container) {
        container.className = `sandbox-docs-list ${currentViewMode}-view`;
      }
    });
  });

  // Drawer tabs
  document.querySelectorAll('.drawer-tab-btn').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.drawer-tab-btn').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentActiveTab = tab.getAttribute('data-tab');
      renderDocDrawer();
    });
  });

  renderSandboxDocs();
  renderDocDrawer();
}

function filterDocuments(query) {
  if (!query) return sampleDocuments;
  const q = query.toLowerCase();

  // Prefix handling
  if (q.startsWith('tag:')) {
    const val = q.replace('tag:', '').trim();
    return sampleDocuments.filter(d => d.tags.some(t => t.toLowerCase().includes(val)));
  }
  if (q.startsWith('correspondent:') || q.startsWith('from:')) {
    const val = q.replace(/(correspondent:|from:)/, '').trim();
    return sampleDocuments.filter(d => d.correspondent.toLowerCase().includes(val));
  }
  if (q.startsWith('type:')) {
    const val = q.replace('type:', '').trim();
    return sampleDocuments.filter(d => d.type.toLowerCase().includes(val));
  }
  if (q.startsWith('lang:')) {
    const val = q.replace('lang:', '').trim();
    return sampleDocuments.filter(d => d.lang.toLowerCase() === val);
  }
  if (q.includes('is:duplicate')) {
    return sampleDocuments.filter(d => d.isDuplicate);
  }
  if (q.includes('translated:true')) {
    return sampleDocuments.filter(d => d.translatedText !== null);
  }
  if (q.startsWith('amount:')) {
    const val = q.replace('amount:', '').replace('>', '').replace('<', '').trim();
    return sampleDocuments.filter(d => d.amount.includes(val) || parseInt(d.amount.replace(/\D/g, '') || '0') > 500);
  }

  // General text search
  return sampleDocuments.filter(d => {
    return d.title.toLowerCase().includes(q) ||
           d.correspondent.toLowerCase().includes(q) ||
           d.type.toLowerCase().includes(q) ||
           d.originalText.toLowerCase().includes(q) ||
           (d.translatedText && d.translatedText.toLowerCase().includes(q)) ||
           d.tags.some(t => t.toLowerCase().includes(q));
  });
}

function highlightText(text, query) {
  if (!query || query.includes(':')) return escapeHtml(text);
  const words = query.trim().split(/\s+/).map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${words.join('|')})`, 'gi');
  return escapeHtml(text).replace(regex, '<mark class="query-hit">$1</mark>');
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderSandboxDocs() {
  const container = document.getElementById('sandbox-docs-container');
  if (!container) return;

  const results = filterDocuments(activeSearchQuery);
  const countBadge = document.getElementById('sandbox-results-count');
  if (countBadge) {
    countBadge.textContent = `${results.length} ${results.length === 1 ? 'doc' : 'docs'} matching`;
  }

  if (results.length === 0) {
    container.innerHTML = `
      <div class="sandbox-empty-state">
        <div class="empty-icon">🔍</div>
        <p>No documents found matching <code>"${escapeHtml(activeSearchQuery)}"</code></p>
        <button class="btn btn-sm btn-outline" onclick="document.getElementById('sandbox-clear-search').click()">Reset Query</button>
      </div>
    `;
    return;
  }

  // If currently selected doc was filtered out, select first result
  if (!results.some(d => d.id === selectedDocId)) {
    selectedDocId = results[0].id;
    renderDocDrawer();
  }

  container.innerHTML = results.map(doc => {
    const isSelected = doc.id === selectedDocId ? 'selected' : '';
    const dupBadge = doc.isDuplicate ? `<span class="badge-dup" title="Near-duplicate detected">⚠️ Duplicate (${doc.similarityScore})</span>` : '';
    const transBadge = doc.translatedText ? `<span class="badge-trans" title="On-device translated">🌐 Apple Neural Translation</span>` : '';
    
    // Preview snippet
    const rawSnippet = doc.originalText.slice(0, 115) + '...';
    const snippetHtml = highlightText(rawSnippet, activeSearchQuery);

    return `
      <div class="doc-card ${isSelected}" data-doc-id="${doc.id}">
        <div class="doc-card-header">
          <div class="doc-type-icon">${doc.type === 'Invoice' ? '🧾' : doc.type === 'Contract' ? '📜' : doc.type === 'Statement' ? '📊' : '📄'}</div>
          <div class="doc-header-info">
            <div class="doc-card-title">${highlightText(doc.title, activeSearchQuery)}</div>
            <div class="doc-card-sub">${doc.correspondent} • ${doc.date} • ${doc.fileSize}</div>
          </div>
          ${dupBadge}
        </div>
        <div class="doc-card-body">
          <p class="doc-snippet">${snippetHtml}</p>
        </div>
        <div class="doc-card-footer">
          <div class="doc-tags">
            ${doc.tags.map(t => `<span class="tag-chip">#${t}</span>`).join('')}
          </div>
          <div class="doc-card-meta-right">
            ${transBadge}
            <span class="doc-amount-badge">${doc.amount}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach card click listeners
  container.querySelectorAll('.doc-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-doc-id'));
      selectedDocId = id;
      container.querySelectorAll('.doc-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      renderDocDrawer();
    });
  });
}

function renderDocDrawer() {
  const drawer = document.getElementById('sandbox-drawer-content');
  if (!drawer) return;

  const doc = sampleDocuments.find(d => d.id === selectedDocId);
  if (!doc) {
    drawer.innerHTML = `<div class="drawer-empty">Select a document</div>`;
    return;
  }

  // Update tab availability
  const transTabBtn = document.querySelector('[data-tab="trans"]');
  const diffTabBtn = document.querySelector('[data-tab="diff"]');
  if (transTabBtn) transTabBtn.style.display = doc.translatedText ? 'inline-flex' : 'none';
  if (diffTabBtn) diffTabBtn.style.display = doc.isDuplicate ? 'inline-flex' : 'none';

  // If current tab is hidden, fallback to 'meta'
  if ((currentActiveTab === 'trans' && !doc.translatedText) ||
      (currentActiveTab === 'diff' && !doc.isDuplicate)) {
    currentActiveTab = 'meta';
    document.querySelectorAll('.drawer-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-tab="meta"]')?.classList.add('active');
  }

  if (currentActiveTab === 'meta') {
    drawer.innerHTML = `
      <div class="drawer-meta-pane">
        <div class="drawer-header-row">
          <span class="drawer-filename">${escapeHtml(doc.title)}</span>
          <span class="drawer-hash">SHA256: <code>${doc.hash}</code></span>
        </div>
        
        <div class="drawer-fields-grid">
          <div class="drawer-field-item">
            <span class="field-label">Correspondent</span>
            <span class="field-value highlight">${doc.correspondent}</span>
          </div>
          <div class="drawer-field-item">
            <span class="field-label">Document Date</span>
            <span class="field-value">${doc.date}</span>
          </div>
          <div class="drawer-field-item">
            <span class="field-label">Document Type</span>
            <span class="field-value">${doc.type}</span>
          </div>
          <div class="drawer-field-item">
            <span class="field-label">Language</span>
            <span class="field-value">${doc.langLabel}</span>
          </div>
        </div>

        <div class="drawer-section-title">Typed Custom Metadata</div>
        <div class="custom-fields-table">
          ${Object.entries(doc.customFields).map(([k, v]) => `
            <div class="custom-field-row">
              <span class="custom-key">${k}</span>
              <span class="custom-val">${v}</span>
            </div>
          `).join('')}
        </div>

        <div class="drawer-section-title">Extracted Plain-Text Layer</div>
        <div class="drawer-text-box">
          <p>${escapeHtml(doc.originalText)}</p>
        </div>

        <div class="drawer-actions-bar">
          <button class="btn btn-sm btn-secondary" onclick="simulateNativeAction('Preview')">
            <span>👁️ Open in Preview</span>
          </button>
          <button class="btn btn-sm btn-outline" onclick="simulateNativeAction('Finder')">
            <span>📂 Reveal in Finder</span>
          </button>
        </div>
      </div>
    `;
  } else if (currentActiveTab === 'trans') {
    drawer.innerHTML = `
      <div class="drawer-trans-pane">
        <div class="trans-banner">
          <span class="banner-icon">⚡</span>
          <div>
            <strong>Apple Neural Translation Active</strong>
            <p>Translated completely on-device via Apple <code>Translation.framework</code>. Zero cloud API calls.</p>
          </div>
        </div>

        <div class="trans-split-view">
          <div class="trans-column">
            <div class="trans-col-header">Original (${doc.langLabel})</div>
            <div class="trans-content-box">${escapeHtml(doc.originalText)}</div>
          </div>
          <div class="trans-column">
            <div class="trans-col-header">On-Device Neural Translation (English)</div>
            <div class="trans-content-box highlight">${escapeHtml(doc.translatedText || '')}</div>
          </div>
        </div>

        <div class="trans-footer-note">
          ✓ Both original and translated versions are automatically indexed in SQLite FTS5 for seamless bilingual keyword retrieval.
        </div>
      </div>
    `;
  } else if (currentActiveTab === 'diff') {
    const parentDoc = sampleDocuments.find(d => d.id === doc.duplicateOfId) || sampleDocuments[0];
    drawer.innerHTML = `
      <div class="drawer-diff-pane">
        <div class="diff-banner">
          <span class="diff-icon">⚠️</span>
          <div>
            <strong>Duplicate Candidate Detected (${doc.similarityScore} similarity)</strong>
            <p>Lexical token and 2-gram Jaccard similarity threshold exceeded (>= 85%). Original files are untouched.</p>
          </div>
        </div>

        <div class="diff-comparison-table">
          <div class="diff-col primary">
            <div class="diff-col-tag">Primary Canonical Document (ID #${parentDoc.id})</div>
            <div class="diff-filename">${escapeHtml(parentDoc.title)}</div>
            <div class="diff-meta">Date: ${parentDoc.date} • Size: ${parentDoc.fileSize}</div>
            <div class="diff-tags">${parentDoc.tags.map(t => `<span class="tag-chip">#${t}</span>`).join('')}</div>
            <div class="diff-text-preview">${escapeHtml(parentDoc.originalText)}</div>
          </div>

          <div class="diff-col candidate">
            <div class="diff-col-tag candidate-tag">New Ingested Candidate (ID #${doc.id})</div>
            <div class="diff-filename">${escapeHtml(doc.title)}</div>
            <div class="diff-meta">Date: ${doc.date} • Size: ${doc.fileSize}</div>
            <div class="diff-tags">${doc.tags.map(t => `<span class="tag-chip">#${t}</span>`).join('')}</div>
            <div class="diff-text-preview">${escapeHtml(doc.originalText)}</div>
          </div>
        </div>

        <div class="diff-actions">
          <button class="btn btn-sm btn-primary" onclick="simulateMerge(${parentDoc.id}, ${doc.id})">
            <span>✨ Merge Metadata into Primary</span>
          </button>
          <button class="btn btn-sm btn-danger" onclick="simulateDismiss()">
            <span>Dismiss (Mark False Positive)</span>
          </button>
        </div>
      </div>
    `;
  }
}

window.simulateNativeAction = function(action) {
  showToast(`Simulated: Delegated to native macOS ${action}`);
};

window.simulateMerge = function(primaryId, candidateId) {
  showToast(`Merged tags & metadata into Primary #${primaryId}! Candidate resolved.`);
};

window.simulateDismiss = function() {
  showToast('Duplicate flag dismissed.');
};

/* ============================================================
   5. FAQ Accordion
   ============================================================ */
function initAccordion() {
  const headers = document.querySelectorAll('.faq-item-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.faq-item');
      const isOpen = item.classList.contains('active');

      // Close all other items
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-toggle-icon').textContent = '+';
      });

      if (!isOpen) {
        item.classList.add('active');
        item.querySelector('.faq-toggle-icon').textContent = '−';
      }
    });
  });
}

/* ============================================================
   6. Copy Command Button
   ============================================================ */
function initCopyButton() {
  const copyBtn = document.getElementById('copy-gatekeeper-cmd');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const cmdText = 'xattr -cr "/Applications/Paperless Desktop.app"';
      navigator.clipboard.writeText(cmdText).then(() => {
        const dict = (window.translations && window.translations[currentLang]) || window.translations['en'];
        const label = copyBtn.querySelector('.btn-text');
        const originalText = label ? label.innerHTML : 'Copy Command';
        if (label) label.textContent = dict['install-copied'] || 'Copied!';
        copyBtn.classList.add('copied');
        showToast(dict['install-copied'] || 'Copied to clipboard!');
        setTimeout(() => {
          if (label) label.innerHTML = originalText;
          copyBtn.classList.remove('copied');
        }, 2500);
      });
    });
  }
}

/* ============================================================
   7. Mobile Navigation Drawer
   ============================================================ */
function initMobileNav() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

/* ============================================================
   8. Toast Notification Utility
   ============================================================ */
function showToast(msg) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}
