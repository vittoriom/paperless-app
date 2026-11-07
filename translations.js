window.translations = {
  en: {
    "meta-desc": "Paperless Desktop — Privacy-first, local document management and instant search for macOS. 100% offline, on-device translation, SQLite FTS5, and zero cloud lock-in.",
    "meta-title": "Paperless Desktop — Your Documents, Organized & Private",
    "nav-features": "Features",
    "nav-compare": "Compare",
    "nav-install": "Install Guide",
    "nav-faq": "FAQ",
    "nav-download": "Download DMG",
    "hero-badge": "🛡️ 100% Local-First • Intelligent Vaults • Neural Translation • Native macOS",
    "hero-title": "Your Documents, Organized & Private.<br><span class=\"gradient-text\">Fast, Sovereign Document Management on macOS.</span>",
    "hero-subtitle": "Turn any folder into an intelligent, indexed archive. Instant SQLite full-text search, on-device neural translation via Apple Translation, automated inbox filing, and duplicate detection — with zero cloud dependencies.",
    "hero-download": "Download for macOS",
    "hero-explore": "Explore Capabilities",
    "hero-version": "Latest Release: v0.5.0 • macOS 13+ (Universal Apple Silicon & Intel)",

    /* Quick stats bar */
    "stat-local": "100% Local-First",
    "stat-local-sub": "Your data never leaves your Mac",
    "stat-search": "Instant Search",
    "stat-search-sub": "SQLite FTS5 query compiler",
    "stat-trans": "Neural Translation",
    "stat-trans-sub": "On-device Apple Neural Engine",
    "stat-ai": "Native MCP & CLI",
    "stat-ai-sub": "Claude & Cursor AI ready",

    /* Mockup window */
    "mockup-title": "Paperless Desktop — Vault: Personal Archive (~/Documents/Archive)",
    "mockup-section-vaults": "VAULTS",
    "mockup-vault-main": "Personal Archive",
    "mockup-vault-biz": "Work & Invoices (NAS)",
    "mockup-section-views": "EXPLORER",
    "mockup-nav-inbox": "Inbox",
    "mockup-nav-all": "All Documents",
    "mockup-nav-duplicates": "Duplicate Candidates",
    "mockup-nav-favorites": "Saved Searches",
    "mockup-nav-tags": "Tags & Entities",
    "mockup-badge-active": "Archive Active",

    /* Features */
    "features-badge": "Core Capabilities",
    "features-title": "Engineered for Privacy & Organization",
    "features-subtitle": "No heavyweight Docker containers, no remote databases, and no cloud subscriptions. Paperless Desktop gives you native Mac performance and complete data ownership.",
    
    "feat-fts-title": "Instant Full-Text Search",
    "feat-fts-desc": "Embedded SQLite with FTS5 tokenization and custom Rust AST query compiler. Filter by boolean logic, dates, prefixes (`tag:`, `type:`, `correspondent:`, `ext:`), and custom metadata.",
    
    "feat-translate-title": "On-Device Neural Translation",
    "feat-translate-desc": "Integrated with macOS native `Translation.framework` via Swift. Ingest contracts or receipts in German, Italian, or French and search them seamlessly in English without cloud APIs.",
    
    "feat-inbox-title": "Automated Inbox & Folder Mirroring",
    "feat-inbox-desc": "Monitors your inbox directory in the background. Ingests files into date hierarchies or preserves your existing folder tree as mirrored virtual folders.",
    
    "feat-dedup-title": "Duplicate Detection & Relinking",
    "feat-dedup-desc": "Combines cryptographic SHA-256 matching with lexical token similarity. Automatically relinks moved or renamed documents preserving tags and custom fields.",
    
    "feat-external-title": "Decoupled Storage & External Drives",
    "feat-external-desc": "Store your SQLite index locally while keeping gigabytes of documents on external drives, network shares, or secondary disks. Degrades gracefully offline.",
    
    "feat-mcp-title": "CLI & Model Context Protocol (MCP)",
    "feat-mcp-desc": "Native command-line interface and built-in MCP server. Connect local AI tools like Claude Desktop or Cursor to query, summarize, and cross-reference your archive securely.",

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
    "comp-setup-c": "Account creation & client install",
    
    "comp-privacy": "Data Privacy & Telemetry",
    "comp-privacy-p": "100% on-device, zero telemetry",
    "comp-privacy-d": "Local, but requires running local web services",
    "comp-privacy-c": "Files scanned in the cloud, telemetry collected",
    
    "comp-arch": "Architecture & Containers",
    "comp-arch-p": "Zero Docker / containers (Native macOS app)",
    "comp-arch-d": "Heavyweight multi-container server stack",
    "comp-arch-c": "Proprietary cloud web / Electron app",
    
    "comp-search": "Search Engine",
    "comp-search-p": "Native SQLite FTS5 (Local & instant)",
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
    "install-subtitle": "Follow these simple steps to install and run Paperless Desktop on Apple Silicon or Intel Macs.",
    "install-step1-title": "1. Download the Disk Image (.dmg)",
    "install-step1-desc": "Download the latest universal macOS DMG bundle directly from our GitHub Releases page.",
    
    "install-step2-title": "2. Drag to Applications Folder",
    "install-step2-desc": "Mount the DMG and drag Paperless Desktop into your /Applications directory.",
    
    "install-step3-title": "3. Allow First Launch (macOS Gatekeeper)",
    "install-step3-desc": "As an independently compiled open-source binary, right-click the app in Finder and choose Open, or run this one-line terminal command:",
    "install-btn-copy": "Copy Command",
    
    "install-step4-title": "4. Initialize Your Vault",
    "install-step4-desc": "Launch the app and select any local folder or existing document directory. Paperless instantly sets up indexing without modifying your originals.",

    /* FAQ */
    "faq-badge": "Got Questions?",
    "faq-title": "Frequently Asked Questions",
    "faq-subtitle": "Everything you need to know about storage formats, backups, translation, and privacy.",
    
    "faq-q1": "Where are my actual document files stored?",
    "faq-a1": "Your files remain regular, standard files in whatever folder you choose on disk! Paperless never locks your files inside proprietary databases or hidden containers. It organizes documents into clean date hierarchies (e.g. documents/YYYY/MM/) or preserves your existing folder tree while keeping an embedded SQLite index (.paperless/paperless.db) for instant querying.",
    
    "faq-q2": "Does Paperless modify or alter my original documents?",
    "faq-a2": "Never. Paperless strictly adheres to non-destructive ingestion. Extracted full-text layers, tags, translation caches, and custom metadata are stored in the SQLite database alongside the original file. Your PDFs and original files are left untouched.",
    
    "faq-q3": "How does on-device translation work without the internet?",
    "faq-a3": "On macOS 13+, Paperless leverages Apple's native Translation.framework executed in a companion Swift helper. All neural machine translation happens on the Apple Neural Engine directly on your Mac, ensuring zero bytes of your sensitive invoices or contracts ever hit a remote server.",
    
    "faq-q4": "Can I store my documents on an external SSD or network drive?",
    "faq-a4": "Yes! Paperless features Decoupled External Storage. You can place your document archive and inbox on a NAS network share or external drive, while keeping the SQLite database on your fast internal SSD. If the drive is unplugged, Paperless remains fully searchable and warns you gracefully.",
    
    "faq-q5": "How does the Model Context Protocol (MCP) server work?",
    "faq-a5": "Paperless comes with a built-in MCP server that exposes tools like search_documents, get_document_text, and list_tags. You can plug it into Claude Desktop or Cursor in seconds to ask questions like: 'Summarize all invoices from Apple in 2025'.",
    
    "faq-q6": "How do I backup my archive?",
    "faq-a6": "Because everything resides in standard directories on disk, backups are trivial. Apple Time Machine, rsync, restic, or your preferred backup tool will seamlessly back up both your files and the .paperless/ database without needing to dump Docker containers or databases.",

    /* CTA */
    "cta-title": "Take Complete Control of Your Digital Archive",
    "cta-subtitle": "Private, native, and sovereign. Ready for macOS 13+ on Apple Silicon & Intel.",
    "cta-download": "Download Latest Release (.dmg)",
    "cta-github": "View on GitHub",

    /* Footer */
    "footer-brand-desc": "Privacy-first, local-first desktop document manager and search engine for macOS. 100% of your documents and index remain private on your machine.",
    "footer-badge-local": "🔒 Local-First",
    "footer-badge-private": "🛡️ 100% Private",
    "footer-creator-title": "About the Developer",
    "footer-creator-name": "Vittorio Monaco",
    "footer-creator-role": "Staff Software Engineer @ Databricks",
    "footer-creator-bio": "Built Paperless Desktop to make fast, organized, and private document management accessible to everyone without server setups or cloud subscriptions.",
    "footer-creator-github": "GitHub Profile",
    "footer-links-title": "Resources",
    "footer-docs": "Documentation",
    "footer-releases": "Releases & Changelog",
    "footer-mcp": "MCP Guide",
    "footer-issues": "Issue Tracker",
    "footer-copyright": "© 2026 Paperless Desktop. Developed by <a href=\"https://github.com/vittoriom\" target=\"_blank\" rel=\"noopener noreferrer\">Vittorio Monaco</a>.",
    "footer-tagline": "Built with Tauri v2, Rust & React for macOS."
  },

  it: {
    "meta-desc": "Paperless Desktop — Gestione documentale locale, privata e ricerca istantanea per macOS. 100% offline, traduzione on-device, SQLite FTS5 e zero dipendenza dal cloud.",
    "meta-title": "Paperless Desktop — I tuoi Documenti, Organizzati e Privati",
    "nav-features": "Funzionalità",
    "nav-compare": "Confronto",
    "nav-install": "Guida Installazione",
    "nav-faq": "FAQ",
    "nav-download": "Scarica DMG",
    "hero-badge": "🛡️ 100% Locale • Vault Intelligenti • Traduzione Neurale • macOS Nativo",
    "hero-title": "I tuoi Documenti, Organizzati e Privati.<br><span class=\"gradient-text\">Gestione Documentale Rapida e Sovrana su macOS.</span>",
    "hero-subtitle": "Trasforma qualsiasi cartella in un archivio intelligente e indicizzato. Ricerca istantanea full-text con SQLite, traduzione neurale on-device con Apple Translation, archiviazione automatica e rilevamento duplicati — senza dipendenze cloud.",
    "hero-download": "Scarica per macOS",
    "hero-explore": "Esplora le Funzionalità",
    "hero-version": "Ultima Versione: v0.5.0 • macOS 13+ (Universale Apple Silicon & Intel)",

    /* Quick stats bar */
    "stat-local": "100% Locale",
    "stat-local-sub": "I tuoi dati non lasciano mai il Mac",
    "stat-search": "Ricerca Istantanea",
    "stat-search-sub": "Compilatore query SQLite FTS5",
    "stat-trans": "Traduzione Neurale",
    "stat-trans-sub": "Apple Neural Engine on-device",
    "stat-ai": "MCP e CLI Nativi",
    "stat-ai-sub": "Pronto per Claude e Cursor",

    /* Mockup window */
    "mockup-title": "Paperless Desktop — Vault: Archivio Personale (~/Documents/Archive)",
    "mockup-section-vaults": "VAULT",
    "mockup-vault-main": "Archivio Personale",
    "mockup-vault-biz": "Lavoro e Ricevute (NAS)",
    "mockup-section-views": "ESPLORATORE",
    "mockup-nav-inbox": "Posta in arrivo",
    "mockup-nav-all": "Tutti i Documenti",
    "mockup-nav-duplicates": "Candidati Duplicati",
    "mockup-nav-favorites": "Ricerche Salvate",
    "mockup-nav-tags": "Tag e Corrispondenti",
    "mockup-badge-active": "Archivio Attivo",

    /* Features */
    "features-badge": "Funzionalità Chiave",
    "features-title": "Progettato per Privacy e Organizzazione",
    "features-subtitle": "Nessun container Docker pesante, nessun database remoto e nessun abbonamento cloud. Paperless Desktop offre prestazioni native per Mac e la sovranità totale sui tuoi dati.",
    
    "feat-fts-title": "Ricerca Full-Text Istantanea",
    "feat-fts-desc": "SQLite integrato con tokenizzazione FTS5 e compilatore AST in Rust. Filtra per logica booleana, date, prefissi (`tag:`, `type:`, `correspondent:`, `ext:`) e campi personalizzati.",
    
    "feat-translate-title": "Traduzione Neurale On-Device",
    "feat-translate-desc": "Integrato con il `Translation.framework` nativo di macOS tramite Swift. Acquisisci contratti o ricevute in tedesco o francese e cercali direttamente in italiano o inglese senza API cloud.",
    
    "feat-inbox-title": "Inbox Automatica e Cartelle Speculari",
    "feat-inbox-desc": "Monitora la cartella inbox in background. Archivia i file per data o preserva l'albero di directory esistente come cartelle virtuali speculari.",
    
    "feat-dedup-title": "Rilevamento Duplicati e Ricollegamento",
    "feat-dedup-desc": "Combina hash SHA-256 crittografico e similarità lessicale. Ricollega automaticamente i file spostati o rinominati preservando tag e campi personalizzati.",
    
    "feat-external-title": "Storage Disaccoppiato e Drive Esterni",
    "feat-external-desc": "Conserva l'indice SQLite in locale mantenendo i documenti su dischi esterni, condivisioni di rete o volumi secondari. Riconosce lo stato offline in modo trasparente.",
    
    "feat-mcp-title": "CLI e Model Context Protocol (MCP)",
    "feat-mcp-desc": "Interfaccia a riga di comando nativa e server MCP integrato. Connetti strumenti AI come Claude Desktop o Cursor per interrogare e riassumere il tuo archivio.",

    /* Comparison Matrix */
    "compare-badge": "Architettura Senza Compromessi",
    "compare-title": "Perché Paperless Desktop?",
    "compare-subtitle": "Confronta Paperless Desktop con pesanti stack Docker self-hosted e servizi cloud proprietari.",
    "col-feature": "Caratteristica",
    "col-paperless": "Paperless Desktop",
    "col-docker": "Paperless-ngx (Docker)",
    "col-cloud": "Cloud Storage (Drive / Notion)",
    
    "comp-setup": "Installazione e Configurazione",
    "comp-setup-p": "Semplice DMG drag-and-drop",
    "comp-setup-d": "Stack complesso Docker, Redis, Postgres, Celery",
    "comp-setup-c": "Creazione account e installazione client",
    
    "comp-privacy": "Privacy Dati e Telemetria",
    "comp-privacy-p": "100% sul dispositivo, zero telemetria",
    "comp-privacy-d": "Locale, ma richiede servizi web sempre attivi",
    "comp-privacy-c": "File scansionati nel cloud e telemetria attiva",
    
    "comp-arch": "Architettura e Container",
    "comp-arch-p": "Zero Docker o container (App nativa macOS)",
    "comp-arch-d": "Pesante stack server multi-container",
    "comp-arch-c": "App web o Electron proprietaria",
    
    "comp-search": "Motore di Ricerca",
    "comp-search-p": "SQLite FTS5 nativo (Locale e istantaneo)",
    "comp-search-d": "Whoosh / PostgreSQL full-text",
    "comp-search-c": "Ricerca remota con latenza di rete",
    
    "comp-translate": "Traduzione Documenti",
    "comp-translate-p": "macOS Translation.framework nativo (Gratuito, privato)",
    "comp-translate-d": "Non integrata / richiede chiavi API a pagamento",
    "comp-translate-c": "Plugin AI di terze parti a pagamento per token",
    
    "comp-ai": "AI Locale ed Estensibilità Agenti",
    "comp-ai-p": "CLI nativa e server MCP integrato",
    "comp-ai-d": "API REST (richiede configurazione token)",
    "comp-ai-c": "API chiuse con limitazioni di frequenza",

    /* Install Guide */
    "install-badge": "Configurazione Rapida",
    "install-title": "Guida all'Installazione su macOS",
    "install-subtitle": "Segui questi semplici passaggi per installare ed eseguire Paperless Desktop su Mac Apple Silicon o Intel.",
    "install-step1-title": "1. Scarica l'Immagine Disco (.dmg)",
    "install-step1-desc": "Scarica l'ultimo file DMG universale per macOS direttamente dalla pagina Releases di GitHub.",
    
    "install-step2-title": "2. Trascina nella Cartella Applicazioni",
    "install-step2-desc": "Apri il DMG e trascina Paperless Desktop nella cartella /Applicazioni.",
    
    "install-step3-title": "3. Consenti il Primo Avvio (macOS Gatekeeper)",
    "install-step3-desc": "Trattandosi di un binario open-source compilato indipendentemente, fai clic con il tasto destro sull'app nel Finder e seleziona Apri, oppure esegui questo comando nel terminale:",
    "install-btn-copy": "Copia Comando",
    
    "install-step4-title": "4. Inizializza il Tuo Vault",
    "install-step4-desc": "Avvia l'app e seleziona una cartella locale o una directory esistente. Paperless configura istantaneamente l'indicizzazione senza alterare i file originali.",

    /* FAQ */
    "faq-badge": "Domande Frequenti",
    "faq-title": "Domande Frequenti",
    "faq-subtitle": "Tutto quello che c'è da sapere su formati di archiviazione, backup, traduzione e privacy.",
    
    "faq-q1": "Dove vengono salvati fisicamente i miei documenti?",
    "faq-a1": "I tuoi file restano normali file nella cartella che hai scelto su disco! Paperless non chiude mai i tuoi documenti in database proprietari. Organizza i file in cartelle per data (es. documents/YYYY/MM/) o preserva le tue cartelle esistenti, mantenendo un indice SQLite (.paperless/paperless.db) per le ricerche istantanee.",
    
    "faq-q2": "Paperless modifica o altera i documenti originali?",
    "faq-a2": "Mai. Paperless adotta una politica di acquisizione non distruttiva. Il testo estratto, i tag, le traduzioni e i metadati personalizzati sono salvati nel database SQLite. I file originali non vengono mai alterati.",
    
    "faq-q3": "Come funziona la traduzione on-device senza connessione internet?",
    "faq-a3": "Su macOS 13+, Paperless utilizza il Translation.framework nativo di Apple tramite un helper Swift. Tutta la traduzione neurale avviene sull'Apple Neural Engine direttamente sul tuo Mac: nessun dato lascia il dispositivo.",
    
    "faq-q4": "Posso salvare i documenti su un SSD esterno o un NAS di rete?",
    "faq-a4": "Sì! Paperless supporta lo storage disaccoppiato. Puoi collocare l'archivio documenti e la cartella inbox su una condivisione NAS o un disco esterno, conservando il database SQLite sul veloce disco interno. Se il disco viene scollegato, l'app resta ricercabile e segnala lo stato con trasparenza.",
    
    "faq-q5": "Come funziona il server Model Context Protocol (MCP)?",
    "faq-a5": "Paperless include un server MCP integrato con strumenti come search_documents, get_document_text e list_tags. Puoi collegarlo in pochi secondi a Claude Desktop o Cursor per porre domande sui tuoi documenti in linguaggio naturale.",
    
    "faq-q6": "Come posso effettuare il backup del mio archivio?",
    "faq-a6": "Dato che tutto risiede in cartelle standard su disco, i backup sono immediati. Apple Time Machine, rsync o il tuo strumento di backup preferito salveranno sia i file che il database .paperless/ senza bisogno di esportare dump complessi.",

    /* CTA */
    "cta-title": "Prendi il Controllo Completo del Tuo Archivio",
    "cta-subtitle": "Privato, nativo e sovrano. Pronto per macOS 13+ su Apple Silicon e Intel.",
    "cta-download": "Scarica l'Ultima Versione (.dmg)",
    "cta-github": "Visualizza su GitHub",

    /* Footer */
    "footer-brand-desc": "Gestore documentale e motore di ricerca locale e privato per macOS. Il 100% dei tuoi documenti e indici rimane riservato sul tuo Mac.",
    "footer-badge-local": "🔒 Locale",
    "footer-badge-private": "🛡️ 100% Privato",
    "footer-creator-title": "Informazioni sullo Sviluppatore",
    "footer-creator-name": "Vittorio Monaco",
    "footer-creator-role": "Staff Software Engineer @ Databricks",
    "footer-creator-bio": "Ho creato Paperless Desktop per rendere la gestione documentale privata, veloce e organizzata accessibile a tutti senza configurazioni server o abbonamenti cloud.",
    "footer-creator-github": "Profilo GitHub",
    "footer-links-title": "Risorse",
    "footer-docs": "Documentazione",
    "footer-releases": "Versioni e Changelog",
    "footer-mcp": "Guida MCP",
    "footer-issues": "Segnalazione Problemi",
    "footer-copyright": "© 2026 Paperless Desktop. Sviluppato da <a href=\"https://github.com/vittoriom\" target=\"_blank\" rel=\"noopener noreferrer\">Vittorio Monaco</a>.",
    "footer-tagline": "Creato con Tauri v2, Rust e React per macOS."
  }
};
