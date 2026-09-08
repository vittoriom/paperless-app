window.translations = {
  en: {
    "meta-desc": "Paperless Desktop — Privacy-first, local document management and sub-millisecond search for macOS. 100% offline, on-device translation, SQLite FTS5, and zero cloud lock-in.",
    "meta-title": "Paperless Desktop — Your Documents, Indexed & Private",
    "nav-features": "Features",
    "nav-sandbox": "Live Demo",
    "nav-architecture": "Architecture",
    "nav-compare": "Compare",
    "nav-install": "Install Guide",
    "nav-faq": "FAQ",
    "nav-download": "Download DMG",
    "hero-badge": "🛡️ 100% Local-First • Zero Cloud • Native macOS",
    "hero-title": "Your Documents, Indexed & Private.<br><span class=\"gradient-text\">Sub-Millisecond Search on macOS.</span>",
    "hero-subtitle": "Turn any folder into an intelligent, indexed archive. Instant SQLite FTS5 search, on-device neural translation via Apple Translation, automated inbox filing, and duplicate detection — with zero cloud dependencies.",
    "hero-download": "Download for macOS",
    "hero-demo": "Try Interactive Demo",
    "hero-version": "Latest Release: v0.1.0 • macOS 13+ (Universal)",
    "stat-speed": "< 1ms",
    "stat-speed-sub": "Full-text FTS5 queries",
    "stat-privacy": "100%",
    "stat-privacy-sub": "On-device & offline",
    "stat-size": "< 15 MB",
    "stat-size-sub": "Lightweight Tauri v2 binary",
    "stat-ai": "Native MCP",
    "stat-ai-sub": "Claude & Cursor ready",

    /* Mockup window */
    "mockup-title": "Paperless Desktop — Vault: Personal Archive (~/Documents/Archive)",
    "mockup-search-placeholder": "Search documents (e.g. tag:taxes correspondent:Apple date:>2025)...",
    "mockup-section-vaults": "VAULTS",
    "mockup-vault-main": "Personal Archive",
    "mockup-vault-biz": "Work & Invoices (NAS)",
    "mockup-section-views": "EXPLORER",
    "mockup-nav-inbox": "Inbox (3 new)",
    "mockup-nav-all": "All Documents",
    "mockup-nav-duplicates": "Duplicate Candidates",
    "mockup-nav-favorites": "Saved Searches",
    "mockup-nav-tags": "Tags & Entities",
    "mockup-section-folders": "FOLDERS",
    "mockup-badge-active": "Archive Active",
    "mockup-badge-storage": "Decoupled SSD / NAS",

    /* Features */
    "features-title": "Architected for Speed & Total Sovereignty",
    "features-subtitle": "No heavyweight Docker containers, no remote databases, and no cloud subscriptions. Paperless Desktop gives you native Mac performance and complete data ownership.",
    
    "feat-fts-title": "Sub-Millisecond FTS5 Search",
    "feat-fts-desc": "Embedded SQLite with FTS5 tokenization and custom Rust AST query compiler. Filter by boolean logic, dates, prefixes (`tag:`, `type:`, `correspondent:`, `ext:`), and custom metadata.",
    
    "feat-translate-title": "On-Device Neural Translation",
    "feat-translate-desc": "Integrated with macOS native `Translation.framework` via Swift. Ingest contracts or receipts in German, Italian, or French and search them seamlessly in English without cloud APIs.",
    
    "feat-inbox-title": "Automated Inbox Ingestion",
    "feat-inbox-desc": "Monitors an `inbox/` directory in background. Automatically organizes incoming scans and PDFs into date hierarchies (`documents/YYYY/MM/`), extracts text, and computes SHA-256 hashes.",
    
    "feat-dedup-title": "Duplicate & Similarity Engine",
    "feat-dedup-desc": "Combines cryptographic SHA-256 matching with an 85%+ lexical token & 2-gram Jaccard similarity engine. Review side-by-side diffs and merge metadata in one click.",
    
    "feat-external-title": "Decoupled Storage & External Vaults",
    "feat-external-desc": "Store your lightning-fast SQLite index on your internal SSD while keeping gigabytes of PDFs on external hard drives, network NAS, or encrypted volumes. Degrades gracefully offline.",
    
    "feat-mcp-title": "CLI & Model Context Protocol (MCP)",
    "feat-mcp-desc": "Native command-line interface and built-in MCP server. Connect local AI tools like Claude Desktop or Cursor to query, summarize, and cross-reference your archive securely.",

    /* Sandbox */
    "sandbox-badge": "Live Interactive Explorer",
    "sandbox-title": "Experience Paperless in Your Browser",
    "sandbox-subtitle": "Test the real query syntax, inspect extracted metadata, and preview on-device bilingual translation in this interactive sandbox.",
    "sandbox-search-placeholder": "Try: tag:taxes, correspondent:Apple, type:invoice, amount:>500, or lang:de",
    "sandbox-preset-all": "All Documents",
    "sandbox-preset-taxes": "🏷️ tag:taxes",
    "sandbox-preset-apple": "🏢 correspondent:Apple",
    "sandbox-preset-invoice": "🧾 type:invoice",
    "sandbox-preset-trans": "🌐 translated:true (German)",
    "sandbox-preset-dup": "⚠️ is:duplicate",
    "sandbox-view-grid": "Grid",
    "sandbox-view-list": "List",
    "sandbox-drawer-title": "Document Inspector",
    "sandbox-drawer-empty": "Click any document to inspect metadata, custom fields, and on-device translation.",
    "sandbox-tab-meta": "Metadata",
    "sandbox-tab-trans": "Neural Translation",
    "sandbox-tab-diff": "Duplicate Diff",
    "sandbox-open-native": "Open in Preview (Cmd+O)",
    "sandbox-reveal-finder": "Reveal in Finder",

    /* Comparison Matrix */
    "compare-badge": "Uncompromising Architecture",
    "compare-title": "Why Paperless Desktop?",
    "compare-subtitle": "Compare how Paperless Desktop contrasts with heavy self-hosted Docker stacks and proprietary cloud storage services.",
    "col-feature": "Capability",
    "col-paperless": "Paperless Desktop",
    "col-docker": "Paperless-ngx (Docker)",
    "col-cloud": "Cloud Storage (Drive / Notion)",
    
    "comp-setup": "Setup Friction",
    "comp-setup-p": "Single DMG drag-and-drop",
    "comp-setup-d": "Complex Docker, Redis, Postgres, Celery",
    "comp-setup-c": "Sign up, OAuth, client install",
    
    "comp-privacy": "Data Privacy & Telemetry",
    "comp-privacy-p": "100% on-device, zero telemetry",
    "comp-privacy-d": "Local, but requires running local web services",
    "comp-privacy-c": "Files scanned in the cloud, telemetry collected",
    
    "comp-ram": "Resource Footprint",
    "comp-ram-p": "< 60 MB RAM (Rust + Tauri v2)",
    "comp-ram-d": "1.5 GB - 3 GB RAM (Docker containers)",
    "comp-ram-c": "150 MB - 600 MB (Electron app / background sync)",
    
    "comp-search": "Search Engine",
    "comp-search-p": "Native SQLite FTS5 (sub-millisecond)",
    "comp-search-d": "Whoosh / PostgreSQL full-text",
    "comp-search-c": "Remote cloud search with network latency",
    
    "comp-translate": "Document Translation",
    "comp-translate-p": "Native macOS Translation.framework (Free, private)",
    "comp-translate-d": "Not built-in / requires paid cloud API keys",
    "comp-translate-c": "Third-party AI plugins with per-token pricing",
    
    "comp-ai": "Local AI & Agent Extensibility",
    "comp-ai-p": "Native CLI & built-in Model Context Protocol (MCP)",
    "comp-ai-d": "REST API (requires token setup)",
    "comp-ai-c": "Walled garden APIs with rate limits",

    /* Install Guide */
    "install-badge": "Quick Setup",
    "install-title": "macOS Installation Guide",
    "install-subtitle": "Because Paperless Desktop is open-source and built locally, follow these simple steps to install and run it on Apple Silicon or Intel Macs.",
    "install-step1-title": "1. Download the Disk Image (.dmg)",
    "install-step1-desc": "Download the latest universal macOS DMG bundle directly from our GitHub Releases page.",
    "install-step2-title": "2. Drag to Applications Folder",
    "install-step2-desc": "Mount the DMG and drag Paperless Desktop into your <code>/Applications</code> directory.",
    "install-step3-title": "3. Allow First Launch (macOS Gatekeeper)",
    "install-step3-desc": "As an independently compiled open-source binary, right-click the app in Finder and choose <strong>Open</strong>, or run the standard one-line terminal command:",
    "install-step4-title": "4. Initialize Your First Vault",
    "install-step4-desc": "Launch the app and select any local folder (or create a new one). Paperless instantly generates an <code>inbox/</code> and SQLite index without modifying your originals.",
    "install-btn-copy": "Copy Command",
    "install-copied": "Copied to clipboard!",

    /* FAQ */
    "faq-badge": "Got Questions?",
    "faq-title": "Frequently Asked Questions",
    "faq-subtitle": "Everything you need to know about storage formats, backups, translation, and privacy.",
    "faq-q1": "Where are my actual document files stored?",
    "faq-a1": "Your files remain regular, standard files in whatever folder you choose on disk! Paperless never locks your files inside proprietary databases or hidden containers. It organizes documents into clean date hierarchies (e.g. <code>documents/2026/09/</code>) while keeping an embedded SQLite index (<code>.paperless/paperless.db</code>) for instant querying.",
    
    "faq-q2": "Does Paperless modify or alter my original documents?",
    "faq-a2": "Never. Paperless strictly adheres to non-destructive ingestion. Extracted full-text layers, tags, translation caches, and custom metadata are stored in the SQLite database alongside the original file. Your PDFs and original files are left untouched.",
    
    "faq-q3": "How does on-device translation work without the internet?",
    "faq-a3": "On macOS 13+, Paperless leverages Apple's native <code>Translation.framework</code> executed in a companion Swift helper. All neural machine translation happens on the Apple Neural Engine directly on your Mac, ensuring zero bytes of your sensitive invoices or contracts ever hit a remote server.",
    
    "faq-q4": "Can I store my documents on a Synology, QNAP, or external SSD?",
    "faq-a4": "Yes! Paperless features Decoupled External Storage. You can place your document archive and inbox on a NAS network share or external drive, while keeping the SQLite database on your fast internal SSD. If the drive is unplugged, Paperless remains fully searchable and warns you gracefully.",
    
    "faq-q5": "How does the Model Context Protocol (MCP) server work?",
    "faq-a5": "Paperless comes with a built-in MCP server that exposes tools like <code>search_documents</code>, <code>get_document_text</code>, and <code>list_tags</code>. You can plug it into Claude Desktop or Cursor in seconds to ask questions like: <em>'Summarize all invoices from Apple in 2025'</em>.",
    
    "faq-q6": "How do I backup my archive?",
    "faq-a6": "Because everything resides in standard directories on disk, backups are trivial. Apple Time Machine, rsync, restic, or your preferred backup tool will seamlessly back up both your files and the <code>.paperless/</code> database without needing to dump Docker containers or databases.",

    /* CTA Section */
    "cta-title": "Take Complete Control of Your Digital Archive",
    "cta-subtitle": "Lightweight, blazing-fast, and 100% private. Ready for macOS 13+ on Apple Silicon & Intel.",
    "cta-download": "Download Latest Release (.dmg)",
    "cta-github": "View on GitHub",

    /* Footer */
    "footer-desc": "Privacy-first, local-first desktop document manager and search engine for macOS.",
    "footer-license": "Open-Source Software • MIT License",
    "footer-author": "Crafted by Vittorio Monaco",
    "footer-links-title": "Resources",
    "footer-docs": "Documentation",
    "footer-releases": "Releases",
    "footer-issues": "Issue Tracker",
    "footer-mcp": "MCP Guide"
  },

  it: {
    "meta-desc": "Paperless Desktop — Gestione documentale locale e ricerca istantanea sub-millisecondo per macOS. 100% offline, traduzione on-device, SQLite FTS5 e zero dipendenza dal cloud.",
    "meta-title": "Paperless Desktop — I tuoi Documenti, Indicizzati e Privati",
    "nav-features": "Funzionalità",
    "nav-sandbox": "Demo Live",
    "nav-architecture": "Architettura",
    "nav-compare": "Confronto",
    "nav-install": "Installazione",
    "nav-faq": "FAQ",
    "nav-download": "Scarica DMG",
    "hero-badge": "🛡️ 100% Locale • Zero Cloud • Nativo per macOS",
    "hero-title": "I tuoi Documenti, Indicizzati e Privati.<br><span class=\"gradient-text\">Ricerca Sub-Millisecondo su macOS.</span>",
    "hero-subtitle": "Trasforma qualsiasi cartella in un archivio intelligente e indicizzato. Ricerca istantanea SQLite FTS5, traduzione neurale on-device tramite Apple Translation, inbox automatica e rilevamento duplicati — senza alcun cloud.",
    "hero-download": "Scarica per macOS",
    "hero-demo": "Prova la Demo Interattiva",
    "hero-version": "Ultima Release: v0.1.0 • macOS 13+ (Universale)",
    "stat-speed": "< 1ms",
    "stat-speed-sub": "Query full-text con FTS5",
    "stat-privacy": "100%",
    "stat-privacy-sub": "On-device e offline",
    "stat-size": "< 15 MB",
    "stat-size-sub": "Binario ultraleggero Tauri v2",
    "stat-ai": "Nativo MCP",
    "stat-ai-sub": "Pronto per Claude & Cursor",

    /* Mockup window */
    "mockup-title": "Paperless Desktop — Vault: Archivio Personale (~/Documents/Archive)",
    "mockup-search-placeholder": "Cerca documenti (es. tag:tasse correspondent:Apple date:>2025)...",
    "mockup-section-vaults": "VAULT",
    "mockup-vault-main": "Archivio Personale",
    "mockup-vault-biz": "Lavoro & Fatture (NAS)",
    "mockup-section-views": "ESPLORA",
    "mockup-nav-inbox": "Inbox (3 nuovi)",
    "mockup-nav-all": "Tutti i Documenti",
    "mockup-nav-duplicates": "Candidati Duplicati",
    "mockup-nav-favorites": "Ricerche Salvate",
    "mockup-nav-tags": "Tag & Mittenti",
    "mockup-section-folders": "CARTELLE",
    "mockup-badge-active": "Archivio Attivo",
    "mockup-badge-storage": "Disaccoppiato SSD / NAS",

    /* Features */
    "features-title": "Architettato per Massima Velocità e Sovranità",
    "features-subtitle": "Nessun container Docker pesante, nessun database remoto e nessun abbonamento cloud. Paperless Desktop offre prestazioni Mac native e il controllo totale dei tuoi dati.",
    
    "feat-fts-title": "Ricerca Sub-Millisecondo FTS5",
    "feat-fts-desc": "SQLite integrato con tokenizzazione FTS5 e compilatore AST per query in Rust. Filtra per logica booleana, date, prefissi (`tag:`, `type:`, `correspondent:`, `ext:`) e campi personalizzati.",
    
    "feat-translate-title": "Traduzione Neurale On-Device",
    "feat-translate-desc": "Integrato con il `Translation.framework` nativo di macOS tramite Swift. Acquisisci contratti o ricevute in tedesco o francese e cercali direttamente in italiano o inglese senza API cloud.",
    
    "feat-inbox-title": "Ingestione Automatica da Inbox",
    "feat-inbox-desc": "Monitora la cartella `inbox/` in background. Organizza automaticamente i nuovi PDF in gerarchie per data (`documents/YYYY/MM/`), estrae il testo e calcola gli hash SHA-256.",
    
    "feat-dedup-title": "Rilevamento Duplicati e Similarità",
    "feat-dedup-desc": "Combina hash crittografico SHA-256 con un motore di similarità lessicale (token + 2-gram Jaccard) all'85%+. Confronta i diff affiancati e unisci i metadati con un clic.",
    
    "feat-external-title": "Storage Disaccoppiato & Vault Esterni",
    "feat-external-desc": "Conserva l'indice SQLite sull'SSD interno veloce e archivia gigabyte di file su dischi esterni, NAS di rete o volumi cifrati. Continua a cercare anche offline.",
    
    "feat-mcp-title": "CLI & Model Context Protocol (MCP)",
    "feat-mcp-desc": "Interfaccia CLI nativa e server MCP integrato. Collega strumenti AI locali come Claude Desktop o Cursor per interrogare e riassumere l'archivio in totale sicurezza.",

    /* Sandbox */
    "sandbox-badge": "Esploratore Interattivo",
    "sandbox-title": "Prova Paperless Direttamente nel Browser",
    "sandbox-subtitle": "Sperimenta la sintassi reale di ricerca, esamina i metadati estratti e guarda la traduzione neurale on-device in questa demo.",
    "sandbox-search-placeholder": "Prova: tag:taxes, correspondent:Apple, type:invoice, amount:>500, o lang:de",
    "sandbox-preset-all": "Tutti i Documenti",
    "sandbox-preset-taxes": "🏷️ tag:taxes",
    "sandbox-preset-apple": "🏢 correspondent:Apple",
    "sandbox-preset-invoice": "🧾 type:invoice",
    "sandbox-preset-trans": "🌐 translated:true (Tedesco)",
    "sandbox-preset-dup": "⚠️ is:duplicate",
    "sandbox-view-grid": "Griglia",
    "sandbox-view-list": "Lista",
    "sandbox-drawer-title": "Ispettore Documento",
    "sandbox-drawer-empty": "Clicca su qualsiasi documento per visualizzare metadati, campi personalizzati e traduzione.",
    "sandbox-tab-meta": "Metadati",
    "sandbox-tab-trans": "Traduzione Neurale",
    "sandbox-tab-diff": "Diff Duplicato",
    "sandbox-open-native": "Apri in Anteprima (Cmd+O)",
    "sandbox-reveal-finder": "Mostra nel Finder",

    /* Comparison Matrix */
    "compare-badge": "Architettura Senza Compromessi",
    "compare-title": "Perché Paperless Desktop?",
    "compare-subtitle": "Confronta Paperless Desktop con gli stack Docker complessi e i servizi di cloud storage proprietari.",
    "col-feature": "Caratteristica",
    "col-paperless": "Paperless Desktop",
    "col-docker": "Paperless-ngx (Docker)",
    "col-cloud": "Cloud Storage (Drive / Notion)",
    
    "comp-setup": "Facilità d'Installazione",
    "comp-setup-p": "Trascina il file DMG nelle Applicazioni",
    "comp-setup-d": "Docker complesso, Redis, Postgres, Celery",
    "comp-setup-c": "Registrazione account, login, client sync",
    
    "comp-privacy": "Privacy & Telemetria",
    "comp-privacy-p": "100% on-device, zero telemetria",
    "comp-privacy-d": "Locale, ma richiede server web locali sempre attivi",
    "comp-privacy-c": "File scansionati nel cloud, dati profilati",
    
    "comp-ram": "Consumo Risorse",
    "comp-ram-p": "< 60 MB RAM (Rust + Tauri v2)",
    "comp-ram-d": "1.5 GB - 3 GB RAM (container Docker)",
    "comp-ram-c": "150 MB - 600 MB (app Electron / sync)",
    
    "comp-search": "Motore di Ricerca",
    "comp-search-p": "SQLite FTS5 nativo (sub-millisecondo)",
    "comp-search-d": "Whoosh / PostgreSQL full-text",
    "comp-search-c": "Ricerca remota con latenza di rete",
    
    "comp-translate": "Traduzione Documentale",
    "comp-translate-p": "macOS Translation.framework nativo (Gratuito, privato)",
    "comp-translate-d": "Non integrato / richiede chiavi API a pagamento",
    "comp-translate-c": "Plugin AI terzi con costi a consumo",
    
    "comp-ai": "Estensibilità AI & Agenti",
    "comp-ai-p": "CLI nativa e Model Context Protocol (MCP) integrato",
    "comp-ai-d": "API REST (richiede token e configurazione)",
    "comp-ai-c": "API chiuse con limitazioni di rate limit",

    /* Install Guide */
    "install-badge": "Installazione Rapida",
    "install-title": "Guida all'Installazione su macOS",
    "install-subtitle": "Essendo un software open-source compilato direttamente dai sorgenti, segui questi semplici passaggi per avviarlo su Mac Apple Silicon o Intel.",
    "install-step1-title": "1. Scarica l'Immagine Disco (.dmg)",
    "install-step1-desc": "Scarica l'ultimo bundle universale macOS direttamente dalla nostra pagina GitHub Releases.",
    "install-step2-title": "2. Trascina in Applicazioni",
    "install-step2-desc": "Apri il DMG e trascina Paperless Desktop nella cartella <code>/Applications</code>.",
    "install-step3-title": "3. Autorizza il Primo Avvio (macOS Gatekeeper)",
    "install-step3-desc": "Trattandosi di un binario open-source compilato indipendentemente, fai clic destro sull'app nel Finder e scegli <strong>Apri</strong>, oppure esegui questo comando nel Terminale:",
    "install-step4-title": "4. Inizializza il tuo Primo Vault",
    "install-step4-desc": "Avvia l'app e scegli una qualsiasi cartella (o creane una nuova). Paperless crea subito la cartella <code>inbox/</code> e l'indice SQLite lasciando intatti i tuoi file.",
    "install-btn-copy": "Copia Comando",
    "install-copied": "Copiato negli appunti!",

    /* FAQ */
    "faq-badge": "Hai Domande?",
    "faq-title": "Domande Frequenti",
    "faq-subtitle": "Tutto ciò che c'è da sapere su formati di archiviazione, backup, traduzione e privacy.",
    "faq-q1": "Dove sono salvati i miei file effettivi?",
    "faq-a1": "I tuoi file rimangono file normali e standard nella cartella che hai scelto! Paperless non li rinchiude mai in database proprietari o container invisibili. Li organizza in una pulita gerarchia per data (es. <code>documents/2026/09/</code>) e mantiene un indice SQLite (<code>.paperless/paperless.db</code>) per la ricerca istantanea.",
    
    "faq-q2": "Paperless modifica o altera i documenti originali?",
    "faq-a2": "Mai. Paperless adotta un'ingestione strettamente non-distruttiva. Il testo estratto, i tag, la cache di traduzione e i metadati risiedono nel database SQLite. I tuoi file PDF e documenti originali non vengono mai modificati.",
    
    "faq-q3": "Come funziona la traduzione on-device senza internet?",
    "faq-a3": "Su macOS 13+, Paperless utilizza il framework nativo di Apple <code>Translation.framework</code> tramite un helper Swift. Tutta la traduzione con reti neurali avviene sul Neural Engine del tuo Mac: zero byte lasciano il computer.",
    
    "faq-q4": "Posso salvare i documenti su un NAS (Synology, QNAP) o SSD esterno?",
    "faq-a4": "Certamente! Paperless include il supporto allo storage disaccoppiato. Puoi collocare l'archivio dei documenti su una condivisione NAS o disco esterno, conservando l'indice SQLite sull'SSD veloce del Mac. Se il disco è scollegato, la ricerca continua a funzionare avvisandoti con eleganza.",
    
    "faq-q5": "Come funziona il server Model Context Protocol (MCP)?",
    "faq-a5": "Paperless include un server MCP integrato che espone strumenti come <code>search_documents</code>, <code>get_document_text</code> e <code>list_tags</code>. Puoi collegarlo a Claude Desktop o Cursor per chiedere: <em>'Riassumi tutte le fatture Apple del 2025'</em>.",
    
    "faq-q6": "Come posso fare il backup del mio archivio?",
    "faq-a6": "Poiché tutto risiede in semplici cartelle su disco, i backup sono immediati. Apple Time Machine, rsync, restic o il tuo tool di backup preferito salveranno automaticamente sia i documenti che il database <code>.paperless/</code> senza dump o procedure complesse.",

    /* CTA Section */
    "cta-title": "Prendi il Controllo Totale del Tuo Archivio Digitale",
    "cta-subtitle": "Leggero, istantaneo e 100% privato. Ottimizzato per macOS 13+ su Apple Silicon e Intel.",
    "cta-download": "Scarica l'Ultima Versione (.dmg)",
    "cta-github": "Vedi su GitHub",

    /* Footer */
    "footer-desc": "Gestore documentale e motore di ricerca locale e privato per macOS.",
    "footer-license": "Software Open-Source • Licenza MIT",
    "footer-author": "Creato da Vittorio Monaco",
    "footer-links-title": "Risorse",
    "footer-docs": "Documentazione",
    "footer-releases": "Release",
    "footer-issues": "Segnala un Problema",
    "footer-mcp": "Guida MCP"
  }
};
