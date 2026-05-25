/* =============================================
   STAR CITIZEN REFERRAL PAGE — MAIN JS
   ============================================= */

const REFERRAL_CODE = 'STAR-VJ67-N2YG';
const REFERRAL_URL  = 'https://www.robertsspaceindustries.com/enlist?referral=STAR-VJ67-N2YG';

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
const i18n = {
  de: {
    logoBonusTag: 'Referral Bonus',
    mfrTag: 'Schiffshersteller im Verse',
    // Trust Bar
    trust1Val: '100% kostenlos', trust1Lbl: 'keine versteckten Kosten',
    trust2Val: 'In 2 Minuten', trust2Lbl: 'registriert & bereit',
    trust3Val: 'Offizieller RSI-Link', trust3Lbl: '100% sicher',
    trust4Val: '5.000 aUEC', trust4Lbl: 'sofortiger In-Game Bonus',
    // Gallery
    galleryTag: 'Eindrücke',
    galleryTitle: 'Erlebe das Verse',
    galleryLead: 'Bilder aus dem Star Citizen Universum — Planeten, Schiffe, Stationen und epische Schauplätze.',
    gal1Cap: 'Endlose Weiten — über 100 Sternensysteme warten',
    gal2Cap: 'Maßstabsgetreue Planeten',
    gal3Cap: 'First-Person Immersion',
    gal4Cap: 'Epische Raumkämpfe',
    gal5Cap: 'Pulsierende Stationen & Cities',
    gal6Cap: 'Mining auf Asteroiden',
    // Testimonials
    testiTag: 'Was Spieler sagen',
    testiTitle: 'Die Verse-Community',
    testiLead: 'Hunderttausende von Spielern erkunden bereits das Star Citizen Universum — schließe dich ihnen an.',
    testi1Text: '"Star Citizen ist visuell und spielerisch beeindruckend. Der Bonus war ein perfekter Einstieg für meine erste Ausrüstung."',
    testi1Name: 'Marcus K.', testi1Role: 'Bounty Hunter · 2 Jahre im Verse',
    testi2Text: '"Die Skalierung des Universums ist unfassbar. Echte Planeten betreten, Asteroidengürtel erkunden — nichts vergleichbares auf dem Markt."',
    testi2Name: 'Sarah L.', testi2Role: 'Explorer · Org-Mitglied',
    testi3Text: '"Ich habe mit dem günstigsten Starter angefangen, hab den Bonus bekommen und mir direkt In-Game ein besseres Schiff erspielt. Genau so soll das sein."',
    testi3Name: 'Thomas B.', testi3Role: 'Trader · Neu im Verse',
    testiDisclaim: '* Repräsentative Stimmen aus der Star Citizen Community.',
    // Loops
    loopsTag: 'Gameplay',
    loopsTitle: 'Was du im Verse machen kannst',
    loopsLead: 'Vielfältige Karrierepfade — wähle deinen eigenen Weg durch das Star Citizen Universum.',
    loop1Title: 'Handel & Logistik',
    loop1Desc: 'Kaufe günstig, verkaufe teuer. Transportiere legale Güter — oder schmuggle Konterbande durch Sicherheitssektoren.',
    loop2Title: 'Mining & Salvage',
    loop2Desc: 'Baue seltene Mineralien auf Asteroiden und Planeten ab oder berge Wracks gestrandeter Schiffe für wertvolle Ressourcen.',
    loop3Title: 'Kampf & Bounty Hunting',
    loop3Desc: 'Liefere dir Dogfights mit Piraten, jage Verbrecher gegen Kopfgelder oder schließe dich Großschlachten zwischen Konzernen an.',
    loop4Title: 'Exploration',
    loop4Desc: 'Erkunde unentdeckte Sprungpunkte, kartiere unbekannte Systeme und finde Wracks oder verlorene Außenposten.',
    loop5Title: 'Missionen & Verträge',
    loop5Desc: 'Übernimm Aufträge von Konzernen, Sicherheitsdiensten oder kriminellen Organisationen — die Wahl liegt bei dir.',
    loop6Title: 'Organisationen',
    loop6Desc: 'Schließe dich einer Org an oder gründe deine eigene. Spiele mit Hunderten anderer in koordinierten Operationen.',
    // Ships
    shipsTag: 'Starter Schiffe',
    shipsTitle: 'Beliebte Einstiegsschiffe',
    shipsLead: 'Diese Starter-Pakete eignen sich perfekt für den Einstieg und qualifizieren dich für den vollen Referral-Bonus.',
    shipFeaturedLabel: 'Empfohlen',
    ship1Role: 'Allrounder · Multi-Crew Fähig',
    ship1Desc: 'Das günstigste Starter-Schiff. Solide für Anfänger, mit Schlafplatz und Frachtraum.',
    ship2Role: 'Wendig · Fokus auf Geschwindigkeit',
    ship2Desc: 'Schnelles, agiles Schiff. Ideal für Kampf-orientierte Anfänger und Erkundungstrips.',
    ship3Role: 'Kampf & Fracht · Bewährter Klassiker',
    ship3Desc: 'Ausgewogenes Multirole-Schiff mit gutem Frachtraum und solider Bewaffnung.',
    shipsNote: '💡 Bereits ab dem günstigsten Pack erhältst du den vollen 5.000 aUEC Bonus.',
    // Header
    headerCta: 'Jetzt registrieren',
    // Hero
    heroBadge: 'Exklusiver Bonus für Neuspieler',
    heroBannerTag: 'Eingehende Übertragung',
    heroBannerTitle: 'Referral-Kanal Offen',
    heroBannerMeta: 'KANAL ·',
    heroH1Line1: 'Starte dein',
    heroH1Line2: 'Star Citizen Abenteuer',
    heroSubtitle: 'Erhalte deinen kostenlosen Startbonus und erkunde eines der ambitioniertesten Weltraumspiele aller Zeiten.',
    bonusLabel: 'Dein Startbonus bei Registrierung',
    bonusAmount: '5.000 aUEC',
    bonusDesc: 'Alpha UEC — In-Game-Währung für deinen ersten Einkauf im Verse',
    ctaMain: 'Jetzt mit Bonus starten',
    ctaSub: 'Mehr über Star Citizen',
    codeLabel: 'Referral-Code',
    // How it works
    howTag: 'So einfach geht\'s',
    howTitle: 'In 3 Schritten ins Verse',
    howLead: 'Registrierung, Download, Abheben — so startest du mit maximalem Bonus in dein Abenteuer.',
    step1Title: 'Registrieren',
    step1Desc: 'Erstelle deinen kostenlosen Account über den Registrierungslink mit eingetragenem Referral-Code.',
    step2Title: 'Spielpaket wählen',
    step2Desc: 'Wähle dein Einstiegspaket — schon ab dem günstigsten Starter-Pack erhältst du den vollen Bonus.',
    step3Title: 'Ins Verse starten',
    step3Desc: 'Lade den Launcher herunter, logge dich ein und dein Bonus-aUEC erscheint automatisch in deinem Konto.',
    step4Title: 'Erkunde das Verse',
    step4Desc: 'Handel, kämpfe, erforsche — das Star Citizen Universum gehört dir. Willkommen im \'Verse!',
    // Bonuses
    bonusTag: 'Was du bekommst',
    bonusTitle: 'Dein komplettes Starterpaket',
    bonusLead: 'Mit deinem Referral-Code sicherst du dir Extras, die anderen Spielern vorenthalten bleiben.',
    b1Title: 'Alpha UEC',
    b1Value: '5.000 aUEC',
    b1Desc: 'Sofort verwendbare In-Game-Währung für Ausrüstung, Komponenten und mehr im Verse.',
    b2Title: 'Keine Extrakosten',
    b2Value: 'Kostenlos',
    b2Desc: 'Der Bonus entsteht dir ohne Mehrkosten — du zahlst nur für dein gewähltes Spielpaket.',
    b3Title: 'Exklusiver Code',
    b3Value: REFERRAL_CODE,
    b3Desc: 'Dieser persönliche Referral-Code wird automatisch hinterlegt und sichert deinen Bonus.',
    // Game Info
    gameTag: 'Das Spiel',
    gameTitle: 'Was ist Star Citizen?',
    gameFeature1: 'Persistentes, massiv multiplayer Weltraumuniversum',
    gameFeature2: 'Maßstabsgetreue Planeten, Monde und Raumstationen',
    gameFeature3: 'Handel, Piraterie, Mining, Exploration & Dogfighting',
    gameFeature4: 'Ständige Entwicklung — neue Features jeden Patch',
    gameFeature5: 'Squadron 42: Epische Einzelspieler-Story-Kampagne',
    gameFeature6: 'Hunderttausende aktive Spieler weltweit',
    stat1Value: '700k+',
    stat1Label: 'Spieler',
    stat2Value: '100+',
    stat2Label: 'Sternensysteme',
    stat3Value: '4.8',
    stat3Label: 'Akt. Version',
    gameCta: 'Jetzt mit Bonus starten',
    // FAQ
    faqTag: 'Häufige Fragen',
    faqTitle: 'Alles, was du wissen musst',
    faq1Q: 'Wie funktioniert der Referral-Code?',
    faq1A: 'Beim Registrieren über den Referral-Link wird der Code STAR-VJ67-N2YG automatisch eingetragen. Nach dem Kauf eines Spielpakets werden dir 5.000 aUEC (Alpha UEC) gutgeschrieben — eine In-Game-Währung, die du direkt zum Kaufen von Ausrüstung nutzen kannst.',
    faq2Q: 'Ist Star Citizen kostenlos spielbar?',
    faq2A: 'Star Citizen ist kein Free-to-Play-Spiel. Zum Spielen benötigst du mindestens ein Starter-Paket. Diese beinhalten ein Schiff und Spielzugang. Günstige Einstiegspakete gibt es bereits ab ~45€. Mit deinem Referral-Bonus bekommst du direkt Extra-Währung dazu.',
    faq3Q: 'Wann erscheint der Bonus in meinem Konto?',
    faq3A: 'Die 5.000 aUEC werden deinem RSI-Konto nach dem Kauf eines qualifizierenden Pakets gutgeschrieben. In der Regel erscheint der Bonus innerhalb weniger Minuten nach dem Kauf in deinem Konto.',
    faq4Q: 'Kann ich den Referral-Code auch manuell eingeben?',
    faq4A: 'Ja! Falls der Code nicht automatisch eingetragen wurde, kannst du ihn manuell eingeben. Logge dich auf der RSI-Website ein, gehe zu deinen Account-Einstellungen und trage dort STAR-VJ67-N2YG unter "Referral Code" ein — vor deinem ersten Kauf.',
    faq5Q: 'Ist Star Citizen ein fertiges Spiel?',
    faq5A: 'Star Citizen ist offiziell noch in der Alpha-Phase, ist aber schon heute umfangreich und aktiv bespielbar. Mit Version 4.0 hat das Spiel einen Meilenstein erreicht. Regelmäßige Updates erweitern das Universum kontinuierlich. Für Early Access und leidenschaftliche Gamer ist dies ein großartiger Zeitpunkt einzusteigen.',
    faq6Q: 'Wann kommt Star Citizen raus — ist das noch Alpha?',
    faq6A: 'Star Citizen befindet sich offiziell noch in der Alpha-Phase, ist aber schon voll spielbar. Es gibt noch kein offizielles Release-Datum für den 1.0-Release. Cloud Imperium Games veröffentlicht regelmäßig neue Patches — im Jahr 2025 ist Star Citizen so poliert wie nie zuvor.',
    faq7Q: 'Gibt es Free-to-Play Zeiträume zum Testen?',
    faq7A: 'Ja! RSI bietet gelegentlich kostenlose Testwochenenden (Free Fly Events) an, bei denen man das Spiel ohne Kauf ausprobieren kann. Für dauerhaften Zugang benötigst du jedoch ein Spielpaket. Über den Referral-Link bist du bei zukünftigen Events immer registriert.',
    faq8Q: 'Kann ich das Spiel auf mehreren PCs nutzen?',
    faq8A: 'Ja, dein RSI-Account ist an deinen Login gebunden, nicht an eine Hardware. Du kannst dich von beliebigen PCs mit deinem Konto anmelden und spielen — solange du nicht gleichzeitig auf zwei Geräten eingeloggt bist.',
    faq9Q: 'Welche Systemanforderungen hat Star Citizen?',
    faq9A: 'Star Citizen ist ressourcenhungrig. Empfohlen werden: CPU Intel Core i7 oder AMD Ryzen 7, 32 GB RAM, eine Nvidia RTX 3070 oder AMD RX 6700 XT oder besser, sowie eine SSD (NVMe empfohlen). Mindestanforderungen liegen bei 16 GB RAM und einer GTX 1070 — das Spielerlebnis ist dort aber eingeschränkt.',
    faq10Q: 'Was passiert mit meinem Konto und Schiffen nach dem Release?',
    faq10A: 'Schiffe und Pakete, die du kaufst, gehören dir dauerhaft — auch nach dem offiziellen Release von 1.0. Alpha UEC wird zwar regelmäßig zurückgesetzt, dein Schiff bleibt aber erhalten. Beim finalen Release werden alle Alpha-Fortschritte einmalig zurückgesetzt, aber deine Ausrüstung bleibt.',
    // Guide sections
    guideTag: 'Einsteiger Guide 2025',
    guideTitle: 'Star Citizen starten — der komplette Guide',
    guide1Title: 'Was ist Star Citizen — und warum jetzt?',
    guide2Title: 'Was ist aUEC — und wofür nutzt man es?',
    guide3Title: 'Referral Code: So funktioniert STAR-VJ67-N2YG',
    guide2Tag: 'Für Einsteiger',
    guide2MainTitle: 'Häufige Fragen zum Einstieg',
    gt1Title: 'Star Citizen vs. Elite Dangerous vs. No Man\'s Sky',
    gt2Title: 'Was ist Squadron 42?',
    gt3Title: 'Lohnt sich der Einstieg in der Alpha?',
    gt4Title: 'Welches Starter-Paket ist das beste für Anfänger?',
    guideCta: 'Jetzt mit Bonus registrieren',
    // Final CTA
    finalTag: 'Bereit für das Verse?',
    finalTitle: 'Starte jetzt mit Bonus',
    finalSubtitle: 'Sichere dir deinen Startbonus über den offiziellen Registrierungslink. Es dauert nur 2 Minuten.',
    // Footer
    footerDisclaimer: 'Star Citizen ist ein eingetragenes Markenzeichen von Cloud Imperium Games. Diese Seite ist kein offizielles RSI-Produkt. Sie ist eine unabhängige Fan-Seite zur Information und Vermittlung. Beim Kauf über den Referral-Link erhält der Seitenbetreiber ggf. Ingame-Vorteile.',
    footerCopy: '© 2025 — Inoffizielle Star Citizen Referral Seite',
    // Toast
    toastCopied: '✓ Code kopiert!',
    // Nav anchor labels
    navHow: 'Wie es funktioniert',
    navBonus: 'Bonus',
    navFaq: 'FAQ',
    newsTag: 'Comm-Link',
    newsTitle: 'Aktuelle News aus dem Verse',
    newsSubtitle: 'Offizielle Meldungen von Roberts Space Industries — immer aktuell direkt vom RSI Comm-Link.',
    newsReadMore: 'Weiterlesen →',
    newsLoading: 'Lade aktuelle Meldungen…',
    newsError: 'News konnten nicht geladen werden. Alle Meldungen findest du auf robertsspaceindustries.com.',
    newsAllText: 'Alle News auf RSI lesen',
    newsReadMore: 'Weiterlesen →',
    news1Title: 'Alpha 4.8 — Tactical Strike', news1Desc: 'Drake Ironclad, MISC Starlite, Crossbow, Plasma Grenades, Vehicle Loadout und Tactical Strike Groups. DefenseCon auf ArcCorp.',
    news2Title: 'Alpha 4.7 — Welcome to the Rock', news2Desc: 'Breaker Stations: mehrstufige Asteroiden-Missionen, Crafting T0 und die neue Aurora Mk II mit modularem Pilotenkonzept.',
    news3Title: 'Alpha 4.6 — Lifeline for Levski', news3Desc: 'LAMP-Nachtsicht-System, neue Levski-Missionen und umfangreiche Stabilitätsverbesserungen für das Verse.',
    news4Title: 'Alpha 4.5 — Dawn of Engineering', news4Desc: 'Engineering-Gameplay: Schiffssysteme managen, Schäden beheben, Vulkan-Renderer-Updates und experimenteller VR-Support.',
    news5Title: 'Alpha 4.3 — Dark Territory', news5Desc: 'Dynamischer Schnee, verbesserte Leitern aus Squadron 42 und erweiterte Wettersysteme für Planeten und Monde.',
    news6Title: 'Alpha 4.2 — Storm Breaker', news6Desc: 'Dynamischer Regen und Radiation-Gameplay: Strahlungszonen, Schutzausrüstung und neue Umweltgefahren in Stanton.',
    stickyLabel: 'Referral-Code',
    stickyCopy: 'Kopieren',
    stickyCta: 'Jetzt registrieren',
    stickyLabel: 'Code:',
    stickyCta: 'Bonus holen',
  },
  en: {
    logoBonusTag: 'Referral Bonus',
    mfrTag: 'Ship Manufacturers in the Verse',
    trust1Val: '100% free', trust1Lbl: 'no hidden costs',
    trust2Val: 'In 2 minutes', trust2Lbl: 'registered & ready',
    trust3Val: 'Official RSI link', trust3Lbl: '100% safe',
    trust4Val: '5,000 aUEC', trust4Lbl: 'instant in-game bonus',
    galleryTag: 'Impressions', galleryTitle: 'Experience the Verse',
    galleryLead: 'Images from the Star Citizen universe — planets, ships, stations and epic locations.',
    gal1Cap: 'Endless vistas — over 100 star systems', gal2Cap: 'True-to-scale planets',
    gal3Cap: 'First-person immersion', gal4Cap: 'Epic space combat',
    gal5Cap: 'Pulsing stations & cities', gal6Cap: 'Asteroid mining',
    testiTag: 'What players say', testiTitle: 'The Verse Community',
    testiLead: 'Hundreds of thousands of players are already exploring the Star Citizen universe — join them.',
    testi1Text: '"Star Citizen is visually and gameplay-wise stunning. The bonus was a perfect entry for my first gear."',
    testi1Name: 'Marcus K.', testi1Role: 'Bounty Hunter · 2 years in the Verse',
    testi2Text: '"The scale of the universe is unbelievable. Walking on real planets, exploring asteroid belts — nothing comparable on the market."',
    testi2Name: 'Sarah L.', testi2Role: 'Explorer · Org Member',
    testi3Text: '"I started with the cheapest starter, got the bonus and earned a better ship in-game. Exactly how it should be."',
    testi3Name: 'Thomas B.', testi3Role: 'Trader · New in the Verse',
    testiDisclaim: '* Representative voices from the Star Citizen community.',
    loopsTag: 'Gameplay',
    loopsTitle: 'What you can do in the Verse',
    loopsLead: 'Diverse career paths — choose your own way through the Star Citizen universe.',
    loop1Title: 'Trading & Logistics',
    loop1Desc: 'Buy low, sell high. Transport legal cargo — or smuggle contraband through security sectors.',
    loop2Title: 'Mining & Salvage',
    loop2Desc: 'Mine rare minerals on asteroids and planets, or salvage wrecks of stranded ships for valuable resources.',
    loop3Title: 'Combat & Bounty Hunting',
    loop3Desc: 'Engage in dogfights with pirates, hunt criminals for bounties, or join large-scale battles between corporations.',
    loop4Title: 'Exploration',
    loop4Desc: 'Discover undiscovered jump points, map unknown systems, and find wrecks or lost outposts.',
    loop5Title: 'Missions & Contracts',
    loop5Desc: 'Take contracts from corporations, security agencies, or criminal organizations — the choice is yours.',
    loop6Title: 'Organizations',
    loop6Desc: 'Join an org or found your own. Play with hundreds of others in coordinated operations.',
    shipsTag: 'Starter Ships',
    shipsTitle: 'Popular Starter Ships',
    shipsLead: 'These starter packages are perfect for getting started and qualify you for the full referral bonus.',
    shipFeaturedLabel: 'Recommended',
    ship1Role: 'All-rounder · Multi-Crew Capable',
    ship1Desc: 'The cheapest starter ship. Solid for beginners, with a sleep area and cargo hold.',
    ship2Role: 'Agile · Speed Focused',
    ship2Desc: 'Fast, agile ship. Ideal for combat-oriented beginners and exploration trips.',
    ship3Role: 'Combat & Cargo · Proven Classic',
    ship3Desc: 'Balanced multi-role ship with good cargo capacity and solid armament.',
    shipsNote: '💡 Even the cheapest pack qualifies you for the full 5,000 aUEC bonus.',
    headerCta: 'Register now',
    heroBadge: 'Exclusive Bonus for New Players',
    heroBannerTag: 'Incoming Transmission',
    heroBannerTitle: 'Referral Channel Open',
    heroBannerMeta: 'CH ·',
    heroH1Line1: 'Start your',
    heroH1Line2: 'Star Citizen Journey',
    heroSubtitle: 'Claim your free sign-up bonus and explore one of the most ambitious space games ever created.',
    bonusLabel: 'Your sign-up bonus',
    bonusAmount: '5,000 aUEC',
    bonusDesc: 'Alpha UEC — in-game currency for your first purchases in the Verse',
    ctaMain: 'Claim Bonus & Register',
    ctaSub: 'Learn about Star Citizen',
    codeLabel: 'Referral Code',
    howTag: 'Getting Started',
    howTitle: '3 Steps into the Verse',
    howLead: 'Register, download, fly — start your adventure with maximum bonus from day one.',
    step1Title: 'Register',
    step1Desc: 'Create your free account via the referral link with the code pre-filled automatically.',
    step2Title: 'Choose a Package',
    step2Desc: 'Pick your starter package — even the cheapest starter ship qualifies for the full bonus.',
    step3Title: 'Enter the Verse',
    step3Desc: 'Download the launcher, log in, and your bonus aUEC will appear automatically in your account.',
    step4Title: 'Explore the Universe',
    step4Desc: 'Trade, fight, explore — the Star Citizen universe is yours. Welcome to the \'Verse!',
    bonusTag: 'What you get',
    bonusTitle: 'Your Complete Starter Package',
    bonusLead: 'With your referral code you unlock extras unavailable to other new players.',
    b1Title: 'Alpha UEC',
    b1Value: '5,000 aUEC',
    b1Desc: 'Immediately usable in-game currency for gear, components and more in the Verse.',
    b2Title: 'No Extra Cost',
    b2Value: 'Free',
    b2Desc: 'The bonus costs you nothing extra — you only pay for your chosen game package.',
    b3Title: 'Exclusive Code',
    b3Value: REFERRAL_CODE,
    b3Desc: 'This personal referral code is auto-applied, securing your bonus at checkout.',
    gameTag: 'The Game',
    gameTitle: 'What is Star Citizen?',
    gameFeature1: 'Persistent, massively multiplayer space universe',
    gameFeature2: 'True-to-scale planets, moons and space stations',
    gameFeature3: 'Trading, piracy, mining, exploration & dogfighting',
    gameFeature4: 'Continuous development — new features every patch',
    gameFeature5: 'Squadron 42: Epic single-player story campaign',
    gameFeature6: 'Hundreds of thousands of active players worldwide',
    stat1Value: '700k+',
    stat1Label: 'Players',
    stat2Value: '100+',
    stat2Label: 'Star Systems',
    stat3Value: '4.8',
    stat3Label: 'Cur. Version',
    gameCta: 'Claim Bonus & Register',
    faqTag: 'FAQ',
    faqTitle: 'Everything you need to know',
    faq1Q: 'How does the referral code work?',
    faq1A: 'When you register via the referral link, the code STAR-VJ67-N2YG is automatically applied. After purchasing any game package, 5,000 aUEC (Alpha UEC) are credited to your account — in-game currency you can use immediately to buy equipment.',
    faq2Q: 'Is Star Citizen free to play?',
    faq2A: 'Star Citizen is not a free-to-play game. You need at least a starter package to play, which includes a ship and game access. Entry-level packages start around €45. With your referral bonus you get extra currency on top.',
    faq3Q: 'When does the bonus appear in my account?',
    faq3A: 'The 5,000 aUEC are credited to your RSI account after purchasing a qualifying package. The bonus typically appears within a few minutes of your purchase.',
    faq4Q: 'Can I enter the referral code manually?',
    faq4A: 'Yes! If the code was not auto-applied, you can enter it manually. Log into the RSI website, go to your account settings and enter STAR-VJ67-N2YG under "Referral Code" — before your first purchase.',
    faq5Q: 'Is Star Citizen a finished game?',
    faq5A: 'Star Citizen is officially still in Alpha, but is already extensively playable and active. Version 4.0 marked a major milestone. Regular updates continuously expand the universe. For early access enthusiasts and passionate gamers, this is a great time to dive in.',
    faq6Q: 'When is Star Citizen releasing — is it still Alpha?',
    faq6A: 'Star Citizen is officially still in Alpha but is fully playable. There is no official release date for 1.0 yet. Cloud Imperium Games releases regular patches — in 2025 Star Citizen is more polished than ever.',
    faq7Q: 'Are there free-to-play test periods?',
    faq7A: 'Yes! RSI occasionally offers free test weekends (Free Fly Events) where you can try the game without purchasing. For permanent access you need a game package. By registering via the referral link, you\'ll be ready for future Free Fly events too.',
    faq8Q: 'Can I play on multiple PCs?',
    faq8A: 'Yes, your RSI account is tied to your login, not to hardware. You can log in from any PC — just not simultaneously on two devices.',
    faq9Q: 'What are the system requirements?',
    faq9A: 'Star Citizen is demanding. Recommended: Intel Core i7 or AMD Ryzen 7 CPU, 32 GB RAM, Nvidia RTX 3070 or AMD RX 6700 XT or better, and an SSD (NVMe recommended). Minimum specs are 16 GB RAM and GTX 1070, but the experience will be limited.',
    faq10Q: 'What happens to my account and ships after release?',
    faq10A: 'Ships and packages you purchase are yours permanently — even after the 1.0 release. Alpha UEC is periodically reset, but your ship remains. At final 1.0 release, Alpha progress will be wiped once, but your purchased equipment stays.',
    // Guide sections
    guideTag: 'Beginner Guide 2025',
    guideTitle: 'Getting Started in Star Citizen — The Complete Guide',
    guide1Title: 'What is Star Citizen — and why now?',
    guide2Title: 'What is aUEC — and what do you use it for?',
    guide3Title: 'Referral Code: How STAR-VJ67-N2YG works',
    guide2Tag: 'For Beginners',
    guide2MainTitle: 'Common Questions About Getting Started',
    gt1Title: 'Star Citizen vs. Elite Dangerous vs. No Man\'s Sky',
    gt2Title: 'What is Squadron 42?',
    gt3Title: 'Is it worth joining in Alpha?',
    gt4Title: 'Which starter package is best for beginners?',
    guideCta: 'Register now with bonus',
    finalTag: 'Ready for the Verse?',
    finalTitle: 'Start Now with Bonus',
    finalSubtitle: 'Claim your starter bonus via the official registration link. It only takes 2 minutes.',
    footerDisclaimer: 'Star Citizen is a registered trademark of Cloud Imperium Games. This site is not an official RSI product. It is an independent fan site for information and referral purposes. The site operator may receive in-game benefits when purchases are made via the referral link.',
    footerCopy: '© 2025 — Unofficial Star Citizen Referral Site',
    toastCopied: '✓ Code copied!',
    navHow: 'How It Works',
    navBonus: 'Bonus',
    navFaq: 'FAQ',
    newsTag: 'Comm-Link',
    newsTitle: 'Latest News from the Verse',
    newsSubtitle: 'Official dispatches from Roberts Space Industries — always up to date from the RSI Comm-Link.',
    newsReadMore: 'Read more →',
    newsLoading: 'Loading latest news…',
    newsError: 'Could not load news. Find all updates at robertsspaceindustries.com.',
    newsAllText: 'Read all news on RSI',
    newsReadMore: 'Read more →',
    news1Title: 'Alpha 4.8 — Tactical Strike', news1Desc: 'Drake Ironclad, MISC Starlite, Crossbow, Plasma Grenades, Vehicle Loadout System and Tactical Strike Groups. DefenseCon at ArcCorp.',
    news2Title: 'Alpha 4.7 — Welcome to the Rock', news2Desc: 'Breaker Stations: multi-stage asteroid missions, Crafting T0, and the new Aurora Mk II with a modular pilot system.',
    news3Title: 'Alpha 4.6 — Lifeline for Levski', news3Desc: 'LAMP low-light vision system, new Levski missions, and broad stability improvements across the Verse.',
    news4Title: 'Alpha 4.5 — Dawn of Engineering', news4Desc: 'Engineering gameplay: manage ship systems, repair damage, Vulkan renderer updates and experimental VR support.',
    news5Title: 'Alpha 4.3 — Dark Territory', news5Desc: 'Dynamic snow, improved ladders from Squadron 42, and expanded weather systems across all planets and moons.',
    news6Title: 'Alpha 4.2 — Storm Breaker', news6Desc: 'Dynamic rain and radiation gameplay: radiation zones, protective gear and new environmental hazards throughout Stanton.',
    stickyLabel: 'Referral Code',
    stickyCopy: 'Copy',
    stickyCta: 'Register now',
    stickyLabel: 'Code:',
    stickyCta: 'Claim bonus',
  },
  fr: {
    logoBonusTag: 'Bonus de Parrainage',
    mfrTag: 'Constructeurs de Vaisseaux',
    trust1Val: '100% gratuit', trust1Lbl: 'aucun coût caché',
    trust2Val: 'En 2 minutes', trust2Lbl: 'inscrit & prêt',
    trust3Val: 'Lien RSI officiel', trust3Lbl: '100% sécurisé',
    trust4Val: '5 000 aUEC', trust4Lbl: 'bonus instantané en jeu',
    galleryTag: 'Aperçu', galleryTitle: 'Découvre le Verse',
    galleryLead: "Images de l'univers Star Citizen — planètes, vaisseaux, stations et lieux épiques.",
    gal1Cap: 'Étendues infinies — plus de 100 systèmes', gal2Cap: 'Planètes à échelle réelle',
    gal3Cap: 'Immersion à la première personne', gal4Cap: 'Combats spatiaux épiques',
    gal5Cap: 'Stations & villes pulsantes', gal6Cap: 'Minage sur astéroïdes',
    testiTag: 'Avis des joueurs', testiTitle: 'La communauté du Verse',
    testiLead: "Des centaines de milliers de joueurs explorent déjà l'univers Star Citizen — rejoins-les.",
    testi1Text: '"Star Citizen est visuellement et techniquement impressionnant. Le bonus a été parfait pour mon premier équipement."',
    testi1Name: 'Marcus K.', testi1Role: 'Chasseur de primes · 2 ans dans le Verse',
    testi2Text: "\"L'échelle de l'univers est incroyable. Marcher sur de vraies planètes, explorer des astéroïdes — rien de comparable.\"",
    testi2Name: 'Sarah L.', testi2Role: "Exploratrice · Membre d'org",
    testi3Text: '"J\'ai commencé avec le starter le moins cher, obtenu le bonus et gagné un meilleur vaisseau en jeu. C\'est comme ça que ça doit être."',
    testi3Name: 'Thomas B.', testi3Role: 'Trader · Nouveau dans le Verse',
    testiDisclaim: '* Voix représentatives de la communauté Star Citizen.',
    loopsTag: 'Gameplay',
    loopsTitle: 'Ce que tu peux faire dans le Verse',
    loopsLead: "Des parcours variés — choisis ton propre chemin à travers l'univers Star Citizen.",
    loop1Title: 'Commerce & Logistique',
    loop1Desc: 'Achète bas, vends haut. Transporte des marchandises légales — ou de la contrebande à travers les secteurs sécurisés.',
    loop2Title: 'Mining & Salvage',
    loop2Desc: 'Extrais des minéraux rares sur les astéroïdes et les planètes, ou récupère des épaves pour des ressources précieuses.',
    loop3Title: 'Combat & Chasse aux Primes',
    loop3Desc: 'Engage des combats spatiaux avec des pirates, traque les criminels contre des primes, ou rejoins des batailles épiques.',
    loop4Title: 'Exploration',
    loop4Desc: "Découvre des points de saut inexplorés, cartographie des systèmes inconnus et trouve des épaves ou avant-postes perdus.",
    loop5Title: 'Missions & Contrats',
    loop5Desc: "Prends des contrats avec des entreprises, agences de sécurité ou organisations criminelles — le choix t'appartient.",
    loop6Title: 'Organisations',
    loop6Desc: 'Rejoins une organisation ou fonde la tienne. Joue avec des centaines d\'autres joueurs lors d\'opérations coordonnées.',
    shipsTag: 'Vaisseaux Starter',
    shipsTitle: 'Vaisseaux de Démarrage Populaires',
    shipsLead: 'Ces packs starter sont parfaits pour commencer et te qualifient pour le bonus de parrainage complet.',
    shipFeaturedLabel: 'Recommandé',
    ship1Role: 'Polyvalent · Multi-Équipage',
    ship1Desc: 'Le vaisseau starter le moins cher. Solide pour les débutants, avec couchage et soute.',
    ship2Role: 'Agile · Focus Vitesse',
    ship2Desc: "Vaisseau rapide et agile. Idéal pour débutants axés combat et voyages d'exploration.",
    ship3Role: 'Combat & Cargo · Classique Éprouvé',
    ship3Desc: 'Vaisseau multirôle équilibré avec bonne capacité de cargo et armement solide.',
    shipsNote: '💡 Même le pack le moins cher te qualifie pour le bonus complet de 5 000 aUEC.',
    headerCta: "S'inscrire maintenant",
    heroBadge: 'Bonus Exclusif pour Nouveaux Joueurs',
    heroBannerTag: 'Transmission Entrante',
    heroBannerTitle: 'Canal de Parrainage Ouvert',
    heroBannerMeta: 'CH ·',
    heroH1Line1: 'Lance ton',
    heroH1Line2: 'Aventure Star Citizen',
    heroSubtitle: "Réclame ton bonus d'inscription gratuit et explore l'un des jeux spatiaux les plus ambitieux jamais créés.",
    bonusLabel: "Ton bonus d'inscription",
    bonusAmount: '5 000 aUEC',
    bonusDesc: "Alpha UEC — monnaie du jeu pour tes premiers achats dans le Verse",
    ctaMain: 'Obtenir le Bonus & S\'inscrire',
    ctaSub: 'En savoir plus',
    codeLabel: 'Code Référent',
    howTag: 'Comment ça marche',
    howTitle: '3 étapes vers le Verse',
    howLead: "Inscription, téléchargement, décollage — commence ton aventure avec le bonus maximum.",
    step1Title: "S'inscrire",
    step1Desc: "Crée ton compte gratuit via le lien de parrainage avec le code pré-rempli automatiquement.",
    step2Title: 'Choisir un Pack',
    step2Desc: "Choisis ton pack de démarrage — même le moins cher donne droit au bonus complet.",
    step3Title: 'Entrer dans le Verse',
    step3Desc: "Télécharge le launcher, connecte-toi et tes aUEC bonus apparaîtront automatiquement.",
    step4Title: "Explorer l'Univers",
    step4Desc: "Commerce, combat, exploration — l'univers Star Citizen est à toi. Bienvenue dans le Verse !",
    bonusTag: 'Ce que tu obtiens',
    bonusTitle: 'Ton Pack Complet de Démarrage',
    bonusLead: 'Avec ton code de parrainage, tu débloque des extras non disponibles pour les autres nouveaux joueurs.',
    b1Title: 'Alpha UEC',
    b1Value: '5 000 aUEC',
    b1Desc: 'Monnaie du jeu utilisable immédiatement pour de l\'équipement dans le Verse.',
    b2Title: 'Aucun Coût Supplémentaire',
    b2Value: 'Gratuit',
    b2Desc: 'Le bonus ne te coûte rien de plus — tu paies seulement ton pack de jeu choisi.',
    b3Title: 'Code Exclusif',
    b3Value: REFERRAL_CODE,
    b3Desc: 'Ce code de parrainage personnel est appliqué automatiquement pour sécuriser ton bonus.',
    gameTag: 'Le Jeu',
    gameTitle: "Qu'est-ce que Star Citizen ?",
    gameFeature1: 'Univers spatial persistant et massivement multijoueur',
    gameFeature2: 'Planètes, lunes et stations spatiales à l\'échelle réelle',
    gameFeature3: 'Commerce, piraterie, mining, exploration & dogfight',
    gameFeature4: 'Développement continu — nouvelles fonctionnalités à chaque patch',
    gameFeature5: 'Squadron 42 : Campagne épique en solo',
    gameFeature6: 'Des centaines de milliers de joueurs actifs dans le monde',
    stat1Value: '700k+',
    stat1Label: 'Joueurs',
    stat2Value: '100+',
    stat2Label: 'Systèmes',
    stat3Value: '4.8',
    stat3Label: 'Ver. Actuelle',
    gameCta: 'Obtenir le Bonus & S\'inscrire',
    faqTag: 'Questions Fréquentes',
    faqTitle: 'Tout ce que tu dois savoir',
    faq1Q: 'Comment fonctionne le code de parrainage ?',
    faq1A: 'Lors de l\'inscription via le lien de parrainage, le code STAR-VJ67-N2YG est appliqué automatiquement. Après l\'achat d\'un pack, 5 000 aUEC sont crédités sur ton compte.',
    faq2Q: 'Star Citizen est-il gratuit ?',
    faq2A: 'Star Citizen n\'est pas un jeu free-to-play. Tu as besoin d\'au moins un pack de démarrage pour jouer, qui comprend un vaisseau et l\'accès au jeu. Les packs d\'entrée de gamme commencent à environ 45€.',
    faq3Q: 'Quand le bonus apparaît-il sur mon compte ?',
    faq3A: 'Les 5 000 aUEC sont crédités sur ton compte RSI après l\'achat d\'un pack éligible, généralement en quelques minutes.',
    faq4Q: 'Puis-je entrer le code manuellement ?',
    faq4A: 'Oui ! Si le code n\'a pas été appliqué automatiquement, connecte-toi au site RSI, va dans les paramètres de ton compte et entre STAR-VJ67-N2YG sous "Code de Parrainage" — avant ton premier achat.',
    faq5Q: 'Star Citizen est-il un jeu terminé ?',
    faq5A: 'Star Citizen est officiellement encore en Alpha, mais est déjà largement jouable. La version 4.0 a marqué une étape majeure. Des mises à jour régulières enrichissent continuellement l\'univers.',
    faq6Q: 'Quand sort Star Citizen — est-ce encore en Alpha ?',
    faq6A: 'Star Citizen est officiellement encore en Alpha mais est entièrement jouable. Il n\'y a pas encore de date de sortie officielle pour la version 1.0. Cloud Imperium Games publie régulièrement de nouveaux correctifs — en 2025, Star Citizen est plus poli que jamais.',
    faq7Q: 'Y a-t-il des périodes d\'essai gratuites ?',
    faq7A: 'Oui ! RSI propose occasionnellement des week-ends d\'essai gratuits (Free Fly Events) où tu peux essayer le jeu sans acheter. Pour un accès permanent, tu as besoin d\'un pack de jeu. En t\'inscrivant via le lien de parrainage, tu seras prêt pour les futurs événements Free Fly.',
    faq8Q: 'Puis-je jouer sur plusieurs PC ?',
    faq8A: 'Oui, ton compte RSI est lié à ton identifiant, pas à un matériel. Tu peux te connecter depuis n\'importe quel PC — mais pas simultanément sur deux appareils.',
    faq9Q: 'Quelles sont les configurations requises ?',
    faq9A: 'Star Citizen est exigeant. Recommandé : processeur Intel Core i7 ou AMD Ryzen 7, 32 Go de RAM, Nvidia RTX 3070 ou AMD RX 6700 XT ou mieux, et un SSD (NVMe recommandé). La configuration minimale est de 16 Go de RAM et une GTX 1070, mais l\'expérience sera limitée.',
    faq10Q: 'Que se passe-t-il avec mon compte et mes vaisseaux après la sortie ?',
    faq10A: 'Les vaisseaux et packs que tu achètes t\'appartiennent définitivement — même après la sortie officielle 1.0. Les aUEC Alpha sont réinitialisés périodiquement, mais ton vaisseau reste. À la sortie finale 1.0, les progrès Alpha seront effacés une fois, mais ton équipement acheté reste.',
    // Guide sections
    guideTag: 'Guide Débutant 2025',
    guideTitle: 'Commencer dans Star Citizen — Le Guide Complet',
    guide1Title: 'Qu\'est-ce que Star Citizen — et pourquoi maintenant ?',
    guide2Title: 'Qu\'est-ce que l\'aUEC — et à quoi ça sert ?',
    guide3Title: 'Code Parrainage : Comment fonctionne STAR-VJ67-N2YG',
    guide2Tag: 'Pour les Débutants',
    guide2MainTitle: 'Questions Courantes sur le Démarrage',
    gt1Title: 'Star Citizen vs. Elite Dangerous vs. No Man\'s Sky',
    gt2Title: 'Qu\'est-ce que Squadron 42 ?',
    gt3Title: 'Vaut-il la peine de rejoindre en Alpha ?',
    gt4Title: 'Quel pack starter est le meilleur pour les débutants ?',
    guideCta: 'S\'inscrire maintenant avec le bonus',
    finalTag: 'Prêt pour le Verse ?',
    finalTitle: 'Commence Maintenant avec le Bonus',
    finalSubtitle: "Réclame ton bonus de démarrage via le lien d'inscription officiel. Ça ne prend que 2 minutes.",
    footerDisclaimer: "Star Citizen est une marque déposée de Cloud Imperium Games. Ce site n'est pas un produit RSI officiel. C'est un site fan indépendant à des fins d'information et de parrainage.",
    footerCopy: '© 2025 — Site de Parrainage Star Citizen Non Officiel',
    toastCopied: '✓ Code copié !',
    navHow: 'Comment ça marche',
    navBonus: 'Bonus',
    navFaq: 'FAQ',
    newsTag: 'Comm-Link',
    newsTitle: 'Actualités du Verse',
    newsSubtitle: 'Dépêches officielles de Roberts Space Industries — toujours à jour depuis le RSI Comm-Link.',
    newsReadMore: 'Lire la suite →',
    newsLoading: 'Chargement des actualités…',
    newsError: 'Impossible de charger les actualités. Retrouvez toutes les mises à jour sur robertsspaceindustries.com.',
    newsAllText: 'Toutes les news sur RSI',
    newsReadMore: 'Lire la suite →',
    news1Title: 'Alpha 4.8 — Tactical Strike', news1Desc: 'Drake Ironclad, MISC Starlite, Arbalète, Grenades Plasma, Système de Chargement et Groupes d\'Assaut Tactique. DefenseCon sur ArcCorp.',
    news2Title: 'Alpha 4.7 — Welcome to the Rock', news2Desc: 'Stations Breaker : missions d\'astéroïdes multi-étapes, Crafting T0 et nouvelle Aurora Mk II avec système modulaire.',
    news3Title: 'Alpha 4.6 — Lifeline for Levski', news3Desc: 'Système de vision nocturne LAMP, nouvelles missions Levski et améliorations de stabilité dans tout le Verse.',
    news4Title: 'Alpha 4.5 — Dawn of Engineering', news4Desc: 'Gameplay d\'ingénierie : gérer les systèmes de vaisseau, réparer les dommages, mises à jour du renderer Vulkan et VR expérimental.',
    news5Title: 'Alpha 4.3 — Dark Territory', news5Desc: 'Neige dynamique, échelles améliorées de Squadron 42 et systèmes météo étendus sur planètes et lunes.',
    news6Title: 'Alpha 4.2 — Storm Breaker', news6Desc: 'Pluie dynamique et gameplay de radiation : zones irradiées, équipement de protection et nouveaux dangers environnementaux.',
    stickyLabel: 'Code de Parrainage',
    stickyCopy: 'Copier',
    stickyCta: "S'inscrire maintenant",
    stickyLabel: 'Code :',
    stickyCta: 'Obtenir le bonus',
  },
  es: {
    logoBonusTag: 'Bono de Referido',
    mfrTag: 'Fabricantes en el Verse',
    trust1Val: '100% gratis', trust1Lbl: 'sin costes ocultos',
    trust2Val: 'En 2 minutos', trust2Lbl: 'registrado y listo',
    trust3Val: 'Enlace RSI oficial', trust3Lbl: '100% seguro',
    trust4Val: '5.000 aUEC', trust4Lbl: 'bono instantáneo en el juego',
    galleryTag: 'Impresiones', galleryTitle: 'Vive el Verse',
    galleryLead: 'Imágenes del universo Star Citizen — planetas, naves, estaciones y lugares épicos.',
    gal1Cap: 'Extensiones infinitas — más de 100 sistemas', gal2Cap: 'Planetas a escala real',
    gal3Cap: 'Inmersión en primera persona', gal4Cap: 'Combates espaciales épicos',
    gal5Cap: 'Estaciones y ciudades vibrantes', gal6Cap: 'Minería en asteroides',
    testiTag: 'Lo que dicen los jugadores', testiTitle: 'La Comunidad del Verse',
    testiLead: 'Cientos de miles de jugadores ya exploran el universo Star Citizen — únete a ellos.',
    testi1Text: '"Star Citizen es visualmente y jugablemente impresionante. El bono fue una entrada perfecta para mi primer equipo."',
    testi1Name: 'Marcus K.', testi1Role: 'Cazarrecompensas · 2 años en el Verse',
    testi2Text: '"La escala del universo es increíble. Caminar por planetas reales, explorar asteroides — nada comparable."',
    testi2Name: 'Sarah L.', testi2Role: 'Exploradora · Miembro de Org',
    testi3Text: '"Empecé con el starter más barato, obtuve el bono y conseguí una nave mejor en el juego. Así debe ser."',
    testi3Name: 'Thomas B.', testi3Role: 'Trader · Nuevo en el Verse',
    testiDisclaim: '* Voces representativas de la comunidad de Star Citizen.',
    loopsTag: 'Jugabilidad',
    loopsTitle: 'Qué puedes hacer en el Verse',
    loopsLead: 'Diversas trayectorias profesionales — elige tu propio camino a través del universo de Star Citizen.',
    loop1Title: 'Comercio y Logística',
    loop1Desc: 'Compra barato, vende caro. Transporta carga legal — o contrabandea mercancía ilegal por sectores de seguridad.',
    loop2Title: 'Minería y Salvamento',
    loop2Desc: 'Extrae minerales raros en asteroides y planetas, o recupera restos de naves para conseguir recursos valiosos.',
    loop3Title: 'Combate y Caza de Recompensas',
    loop3Desc: 'Combate en dogfights contra piratas, caza criminales por recompensas o únete a batallas a gran escala.',
    loop4Title: 'Exploración',
    loop4Desc: 'Descubre puntos de salto sin explorar, cartografía sistemas desconocidos y encuentra naves perdidas u outposts.',
    loop5Title: 'Misiones y Contratos',
    loop5Desc: 'Acepta contratos de corporaciones, agencias de seguridad u organizaciones criminales — tú decides.',
    loop6Title: 'Organizaciones',
    loop6Desc: 'Únete a una organización o funda la tuya. Juega con cientos de jugadores en operaciones coordinadas.',
    shipsTag: 'Naves Starter',
    shipsTitle: 'Naves Iniciales Populares',
    shipsLead: 'Estos paquetes starter son perfectos para empezar y te califican para el bono completo de referido.',
    shipFeaturedLabel: 'Recomendado',
    ship1Role: 'Polivalente · Multi-Tripulación',
    ship1Desc: 'La nave starter más económica. Sólida para principiantes, con cama y bodega de carga.',
    ship2Role: 'Ágil · Enfoque en Velocidad',
    ship2Desc: 'Nave rápida y ágil. Ideal para principiantes orientados al combate y la exploración.',
    ship3Role: 'Combate y Carga · Clásico Probado',
    ship3Desc: 'Nave multirol equilibrada con buena capacidad de carga y armamento sólido.',
    shipsNote: '💡 Incluso el paquete más barato te califica para el bono completo de 5.000 aUEC.',
    headerCta: 'Registrarse ahora',
    heroBadge: 'Bono Exclusivo para Nuevos Jugadores',
    heroBannerTag: 'Transmisión Entrante',
    heroBannerTitle: 'Canal de Referido Abierto',
    heroBannerMeta: 'CH ·',
    heroH1Line1: 'Comienza tu',
    heroH1Line2: 'Aventura en Star Citizen',
    heroSubtitle: 'Consigue tu bono de registro gratuito y explora uno de los juegos espaciales más ambiciosos jamás creados.',
    bonusLabel: 'Tu bono de registro',
    bonusAmount: '5.000 aUEC',
    bonusDesc: 'Alpha UEC — moneda del juego para tus primeras compras en el Verse',
    ctaMain: 'Obtener Bono y Registrarse',
    ctaSub: 'Más sobre Star Citizen',
    codeLabel: 'Código de Referido',
    howTag: 'Cómo funciona',
    howTitle: '3 Pasos hacia el Verse',
    howLead: 'Regístrate, descarga, despega — comienza tu aventura con el bono máximo desde el primer día.',
    step1Title: 'Registrarse',
    step1Desc: 'Crea tu cuenta gratuita a través del enlace de referido con el código pre-aplicado automáticamente.',
    step2Title: 'Elegir un Paquete',
    step2Desc: 'Elige tu paquete inicial — incluso el más económico califica para el bono completo.',
    step3Title: 'Entrar al Verse',
    step3Desc: 'Descarga el launcher, inicia sesión y tu aUEC de bono aparecerá automáticamente en tu cuenta.',
    step4Title: 'Explorar el Universo',
    step4Desc: 'Comercia, combate, explora — el universo de Star Citizen es tuyo. ¡Bienvenido al Verse!',
    bonusTag: 'Lo que obtienes',
    bonusTitle: 'Tu Paquete Inicial Completo',
    bonusLead: 'Con tu código de referido, desbloqueas extras no disponibles para otros nuevos jugadores.',
    b1Title: 'Alpha UEC',
    b1Value: '5.000 aUEC',
    b1Desc: 'Moneda del juego usable inmediatamente para equipamiento en el Verse.',
    b2Title: 'Sin Costo Extra',
    b2Value: 'Gratis',
    b2Desc: 'El bono no te cuesta nada extra — solo pagas el paquete de juego que elijas.',
    b3Title: 'Código Exclusivo',
    b3Value: REFERRAL_CODE,
    b3Desc: 'Este código personal de referido se aplica automáticamente para asegurar tu bono.',
    gameTag: 'El Juego',
    gameTitle: '¿Qué es Star Citizen?',
    gameFeature1: 'Universo espacial persistente y masivamente multijugador',
    gameFeature2: 'Planetas, lunas y estaciones espaciales a escala real',
    gameFeature3: 'Comercio, piratería, minería, exploración y combate espacial',
    gameFeature4: 'Desarrollo continuo — nuevas características en cada parche',
    gameFeature5: 'Squadron 42: Épica campaña de un solo jugador',
    gameFeature6: 'Cientos de miles de jugadores activos en todo el mundo',
    stat1Value: '700k+',
    stat1Label: 'Jugadores',
    stat2Value: '100+',
    stat2Label: 'Sistemas',
    stat3Value: '4.8',
    stat3Label: 'Ver. Actual',
    gameCta: 'Obtener Bono y Registrarse',
    faqTag: 'Preguntas Frecuentes',
    faqTitle: 'Todo lo que necesitas saber',
    faq1Q: '¿Cómo funciona el código de referido?',
    faq1A: 'Al registrarte a través del enlace de referido, el código STAR-VJ67-N2YG se aplica automáticamente. Tras comprar cualquier paquete de juego, se acreditan 5.000 aUEC en tu cuenta.',
    faq2Q: '¿Es Star Citizen gratis?',
    faq2A: 'Star Citizen no es un juego free-to-play. Necesitas al menos un paquete inicial para jugar, que incluye una nave y acceso al juego. Los paquetes de entrada comienzan alrededor de 45€.',
    faq3Q: '¿Cuándo aparece el bono en mi cuenta?',
    faq3A: 'Los 5.000 aUEC se acreditan en tu cuenta RSI tras la compra de un paquete calificado, generalmente en pocos minutos.',
    faq4Q: '¿Puedo ingresar el código manualmente?',
    faq4A: 'Sí. Si el código no se aplicó automáticamente, inicia sesión en el sitio de RSI, ve a la configuración de tu cuenta e ingresa STAR-VJ67-N2YG en "Código de Referido" — antes de tu primera compra.',
    faq5Q: '¿Es Star Citizen un juego terminado?',
    faq5A: 'Star Citizen está oficialmente en fase Alpha, pero ya es ampliamente jugable. La versión 4.0 marcó un hito importante. Actualizaciones regulares expanden el universo continuamente.',
    faq6Q: '¿Cuándo sale Star Citizen — sigue en Alpha?',
    faq6A: 'Star Citizen está oficialmente en Alpha pero es completamente jugable. Aún no hay fecha oficial de lanzamiento para la versión 1.0. Cloud Imperium Games publica parches regulares — en 2025, Star Citizen está más pulido que nunca.',
    faq7Q: '¿Hay períodos de prueba gratuitos?',
    faq7A: '¡Sí! RSI ocasionalmente ofrece fines de semana de prueba gratuitos (Free Fly Events) donde puedes probar el juego sin comprar. Para acceso permanente necesitas un paquete de juego. Al registrarte mediante el enlace de referido, estarás listo para futuros eventos Free Fly.',
    faq8Q: '¿Puedo jugar en varios PC?',
    faq8A: 'Sí, tu cuenta RSI está vinculada a tu inicio de sesión, no al hardware. Puedes iniciar sesión desde cualquier PC — solo no simultáneamente en dos dispositivos.',
    faq9Q: '¿Cuáles son los requisitos del sistema?',
    faq9A: 'Star Citizen es exigente. Recomendado: CPU Intel Core i7 o AMD Ryzen 7, 32 GB de RAM, Nvidia RTX 3070 o AMD RX 6700 XT o mejor, y un SSD (NVMe recomendado). Los requisitos mínimos son 16 GB de RAM y GTX 1070, pero la experiencia será limitada.',
    faq10Q: '¿Qué pasa con mi cuenta y naves después del lanzamiento?',
    faq10A: 'Las naves y paquetes que compras son tuyos permanentemente — incluso después del lanzamiento oficial 1.0. El aUEC Alpha se reinicia periódicamente, pero tu nave permanece. En el lanzamiento final 1.0, el progreso Alpha se borrará una vez, pero tu equipo comprado permanece.',
    // Guide sections
    guideTag: 'Guía para Principiantes 2025',
    guideTitle: 'Empezar en Star Citizen — La Guía Completa',
    guide1Title: '¿Qué es Star Citizen — y por qué ahora?',
    guide2Title: '¿Qué es el aUEC — y para qué se usa?',
    guide3Title: 'Código de Referido: Cómo funciona STAR-VJ67-N2YG',
    guide2Tag: 'Para Principiantes',
    guide2MainTitle: 'Preguntas Comunes Sobre el Inicio',
    gt1Title: 'Star Citizen vs. Elite Dangerous vs. No Man\'s Sky',
    gt2Title: '¿Qué es Squadron 42?',
    gt3Title: '¿Vale la pena unirse en Alpha?',
    gt4Title: '¿Qué paquete starter es mejor para principiantes?',
    guideCta: 'Registrarse ahora con bono',
    finalTag: '¿Listo para el Verse?',
    finalTitle: 'Empieza Ahora con Bono',
    finalSubtitle: 'Consigue tu bono inicial a través del enlace de registro oficial. Solo toma 2 minutos.',
    footerDisclaimer: 'Star Citizen es una marca registrada de Cloud Imperium Games. Este sitio no es un producto oficial de RSI. Es un sitio de fans independiente con fines informativos y de referido.',
    footerCopy: '© 2025 — Sitio de Referido No Oficial de Star Citizen',
    toastCopied: '✓ ¡Código copiado!',
    navHow: 'Cómo Funciona',
    navBonus: 'Bono',
    navFaq: 'FAQ',
    newsTag: 'Comm-Link',
    newsTitle: 'Últimas Noticias del Verse',
    newsSubtitle: 'Comunicados oficiales de Roberts Space Industries — siempre actualizados desde el RSI Comm-Link.',
    newsReadMore: 'Leer más →',
    newsLoading: 'Cargando noticias…',
    newsError: 'No se pudieron cargar las noticias. Encuentra todas las actualizaciones en robertsspaceindustries.com.',
    newsAllText: 'Ver todas las noticias en RSI',
    newsReadMore: 'Leer más →',
    news1Title: 'Alpha 4.8 — Tactical Strike', news1Desc: 'Drake Ironclad, MISC Starlite, Ballesta, Granadas de Plasma, Loadout Vehicular y Grupos de Asalto Táctico. DefenseCon en ArcCorp.',
    news2Title: 'Alpha 4.7 — Welcome to the Rock', news2Desc: 'Estaciones Breaker: misiones de asteroide multi-fase, Crafting T0 y la nueva Aurora Mk II con sistema modular.',
    news3Title: 'Alpha 4.6 — Lifeline for Levski', news3Desc: 'Sistema de visión nocturna LAMP, nuevas misiones en Levski y mejoras de estabilidad en todo el Verse.',
    news4Title: 'Alpha 4.5 — Dawn of Engineering', news4Desc: 'Gameplay de ingeniería: gestionar sistemas de nave, reparar daños, actualizaciones del renderer Vulkan y soporte VR experimental.',
    news5Title: 'Alpha 4.3 — Dark Territory', news5Desc: 'Nieve dinámica, escaleras mejoradas de Squadron 42 y sistemas meteorológicos extendidos en planetas y lunas.',
    news6Title: 'Alpha 4.2 — Storm Breaker', news6Desc: 'Lluvia dinámica y gameplay de radiación: zonas de radiación, equipos de protección y nuevos peligros ambientales en Stanton.',
    stickyLabel: 'Código de Referido',
    stickyCopy: 'Copiar',
    stickyCta: 'Registrarse ahora',
    stickyLabel: 'Código:',
    stickyCta: 'Obtener bono',
  },
  it: {
    trust1Val: '100% gratuito', trust1Lbl: 'nessun costo nascosto',
    trust2Val: 'In 2 minuti', trust2Lbl: 'registrato e pronto',
    trust3Val: 'Link RSI ufficiale', trust3Lbl: '100% sicuro',
    trust4Val: '5.000 aUEC', trust4Lbl: 'bonus in-game istantaneo',
    galleryTag: 'Impressioni', galleryTitle: 'Vivi il Verse',
    galleryLead: "Immagini dall'universo Star Citizen — pianeti, navi, stazioni e luoghi epici.",
    gal1Cap: 'Distese infinite — oltre 100 sistemi stellari', gal2Cap: 'Pianeti in scala reale',
    gal3Cap: 'Immersione in prima persona', gal4Cap: 'Combattimenti spaziali epici',
    gal5Cap: 'Stazioni e città pulsanti', gal6Cap: 'Mining sugli asteroidi',
    testiTag: 'Cosa dicono i giocatori', testiTitle: 'La Comunità del Verse',
    testiLead: "Centinaia di migliaia di giocatori esplorano già l'universo Star Citizen — unisciti a loro.",
    testi1Text: '"Star Citizen è visivamente e nel gameplay impressionante. Il bonus è stato un ingresso perfetto per il mio primo equipaggiamento."',
    testi1Name: 'Marcus K.', testi1Role: 'Cacciatore di taglie · 2 anni nel Verse',
    testi2Text: "\"La scala dell'universo è incredibile. Camminare su pianeti reali, esplorare cinture di asteroidi — niente di paragonabile.\"",
    testi2Name: 'Sarah L.', testi2Role: 'Esploratrice · Membro di Org',
    testi3Text: '"Ho iniziato con lo starter più economico, preso il bonus e guadagnato una nave migliore in-game. Esattamente come dovrebbe essere."',
    testi3Name: 'Thomas B.', testi3Role: 'Trader · Nuovo nel Verse',
    testiDisclaim: '* Voci rappresentative dalla comunità Star Citizen.',
    headerCta: 'Registrati ora',
    heroBadge: 'Bonus Esclusivo per Nuovi Giocatori',
    heroBannerTag: 'Trasmissione in Arrivo',
    heroBannerTitle: 'Canale Referral Aperto',
    heroBannerMeta: 'CH ·',
    heroH1Line1: 'Inizia la tua',
    heroH1Line2: 'Avventura Star Citizen',
    heroSubtitle: 'Ottieni il tuo bonus di registrazione gratuito ed esplora uno dei giochi spaziali più ambiziosi mai creati.',
    bonusLabel: 'Il tuo bonus di registrazione',
    bonusAmount: '5.000 aUEC',
    bonusDesc: 'Alpha UEC — valuta in-game per i tuoi primi acquisti nel Verse',
    ctaMain: 'Ottieni Bonus e Registrati',
    ctaSub: 'Scopri Star Citizen',
    codeLabel: 'Codice Referral',
    howTag: 'Come funziona',
    howTitle: '3 passi verso il Verse',
    howLead: 'Registrazione, download, decollo — inizia la tua avventura con il bonus massimo.',
    step1Title: 'Registrati',
    step1Desc: 'Crea il tuo account gratuito tramite il link referral con il codice pre-compilato automaticamente.',
    step2Title: 'Scegli un Pacchetto',
    step2Desc: 'Scegli il tuo pacchetto starter — anche il più economico ti dà diritto al bonus completo.',
    step3Title: 'Entra nel Verse',
    step3Desc: 'Scarica il launcher, accedi e il tuo bonus aUEC apparirà automaticamente nel tuo account.',
    step4Title: 'Esplora il Verse',
    step4Desc: "Commercia, combatti, esplora — l'universo di Star Citizen è tuo. Benvenuto nel Verse!",
    bonusTag: 'Cosa ottieni',
    bonusTitle: 'Il tuo Pacchetto Starter Completo',
    bonusLead: 'Con il tuo codice referral sblocchi extra non disponibili per altri nuovi giocatori.',
    b1Title: 'Alpha UEC',
    b1Value: '5.000 aUEC',
    b1Desc: 'Valuta in-game utilizzabile immediatamente per equipaggiamento e componenti nel Verse.',
    b2Title: 'Nessun Costo Extra',
    b2Value: 'Gratuito',
    b2Desc: 'Il bonus non ti costa nulla in più — paghi solo il pacchetto di gioco che scegli.',
    b3Title: 'Codice Esclusivo',
    b3Value: REFERRAL_CODE,
    b3Desc: 'Questo codice referral personale viene applicato automaticamente al checkout.',
    gameTag: 'Il Gioco',
    gameTitle: 'Cos\'è Star Citizen?',
    gameFeature1: 'Universo spaziale persistente e massivamente multiplayer',
    gameFeature2: 'Pianeti, lune e stazioni spaziali in scala reale',
    gameFeature3: 'Commercio, pirateria, mining, esplorazione e dogfighting',
    gameFeature4: 'Sviluppo continuo — nuove funzioni ad ogni patch',
    gameFeature5: 'Squadron 42: Campagna single-player epica',
    gameFeature6: 'Centinaia di migliaia di giocatori attivi in tutto il mondo',
    stat1Value: '700k+',
    stat1Label: 'Giocatori',
    stat2Value: '100+',
    stat2Label: 'Sistemi Stellari',
    stat3Value: '4.8',
    stat3Label: 'Ver. Attuale',
    gameCta: 'Ottieni Bonus e Registrati',
    loopsTag: 'Gameplay',
    loopsTitle: 'Cosa puoi fare nel Verse',
    loopsLead: 'Percorsi di carriera diversificati — scegli la tua strada nell\'universo Star Citizen.',
    loop1Title: 'Commercio e Logistica',
    loop1Desc: 'Compra a basso prezzo, vendi a caro prezzo. Trasporta merci legali — o contrabbanda merce illecita.',
    loop2Title: 'Mining e Salvataggio',
    loop2Desc: 'Estrai minerali rari su asteroidi e pianeti, o recupera relitti di navi per risorse preziose.',
    loop3Title: 'Combattimento e Cacciatore di Taglie',
    loop3Desc: 'Combatti in dogfight contro pirati, caccia criminali per taglie o unisciti a battaglie su larga scala.',
    loop4Title: 'Esplorazione',
    loop4Desc: 'Scopri punti di salto inesplorati, mappa sistemi sconosciuti e trova relitti o avamposti perduti.',
    loop5Title: 'Missioni e Contratti',
    loop5Desc: 'Accetta contratti da corporazioni, agenzie di sicurezza o organizzazioni criminali — la scelta è tua.',
    loop6Title: 'Organizzazioni',
    loop6Desc: 'Unisciti a un\'organizzazione o fonda la tua. Gioca con centinaia di altri in operazioni coordinate.',
    shipsTag: 'Navi Starter',
    shipsTitle: 'Navi Iniziali Popolari',
    shipsLead: 'Questi pacchetti starter sono perfetti per iniziare e ti qualificano per il bonus referral completo.',
    shipFeaturedLabel: 'Raccomandato',
    ship1Role: 'Tuttofare · Multi-Equipaggio',
    ship1Desc: 'La nave starter più economica. Solida per principianti, con letto e stiva.',
    ship2Role: 'Agile · Focus sulla Velocità',
    ship2Desc: 'Nave veloce e agile. Ideale per principianti orientati al combattimento e all\'esplorazione.',
    ship3Role: 'Combattimento e Cargo · Classico Affidabile',
    ship3Desc: 'Nave multiruolo bilanciata con buona capacità di carico e armamento solido.',
    shipsNote: '💡 Anche il pacchetto più economico ti qualifica per il bonus completo di 5.000 aUEC.',
    faqTag: 'Domande Frequenti',
    faqTitle: 'Tutto quello che devi sapere',
    faq1Q: 'Come funziona il codice referral?',
    faq1A: 'Quando ti registri tramite il link referral, il codice STAR-VJ67-N2YG viene applicato automaticamente. Dopo l\'acquisto di un pacchetto, 5.000 aUEC vengono accreditati sul tuo account.',
    faq2Q: 'Star Citizen è gratuito?',
    faq2A: 'Star Citizen non è un gioco free-to-play. Hai bisogno di almeno un pacchetto starter per giocare, che include una nave e l\'accesso al gioco. I pacchetti entry-level partono da circa 45€.',
    faq3Q: 'Quando appare il bonus nel mio account?',
    faq3A: 'I 5.000 aUEC vengono accreditati sul tuo account RSI dopo l\'acquisto di un pacchetto qualificato, di solito entro pochi minuti.',
    faq4Q: 'Posso inserire il codice manualmente?',
    faq4A: 'Sì! Se il codice non è stato applicato automaticamente, accedi al sito RSI, vai nelle impostazioni dell\'account e inserisci STAR-VJ67-N2YG sotto "Referral Code" — prima del tuo primo acquisto.',
    faq5Q: 'Star Citizen è un gioco finito?',
    faq5A: 'Star Citizen è ufficialmente ancora in Alpha, ma è già ampiamente giocabile. La versione 4.0 ha segnato una pietra miliare. Aggiornamenti regolari espandono continuamente l\'universo.',
    faq6Q: 'Quando esce Star Citizen — è ancora in Alpha?',
    faq6A: 'Star Citizen è ufficialmente ancora in Alpha ma è completamente giocabile. Non c\'è ancora una data di uscita ufficiale per la versione 1.0. Cloud Imperium Games pubblica patch regolari — nel 2025 Star Citizen è più rifinito che mai.',
    faq7Q: 'Ci sono periodi di prova gratuiti?',
    faq7A: 'Sì! RSI offre occasionalmente week-end di prova gratuiti (Free Fly Events) dove puoi provare il gioco senza acquistarlo. Per l\'accesso permanente hai bisogno di un pacchetto di gioco. Registrandoti tramite il link referral, sarai pronto per i futuri eventi Free Fly.',
    faq8Q: 'Posso giocare su più PC?',
    faq8A: 'Sì, il tuo account RSI è legato al tuo login, non all\'hardware. Puoi accedere da qualsiasi PC — solo non contemporaneamente su due dispositivi.',
    faq9Q: 'Quali sono i requisiti di sistema?',
    faq9A: 'Star Citizen è esigente. Raccomandato: CPU Intel Core i7 o AMD Ryzen 7, 32 GB di RAM, Nvidia RTX 3070 o AMD RX 6700 XT o superiore, e un SSD (NVMe consigliato). I requisiti minimi sono 16 GB di RAM e GTX 1070, ma l\'esperienza sarà limitata.',
    faq10Q: 'Cosa succede al mio account e alle navi dopo il rilascio?',
    faq10A: 'Le navi e i pacchetti che acquisti sono tuoi in modo permanente — anche dopo il rilascio ufficiale 1.0. Gli aUEC Alpha vengono periodicamente azzerati, ma la tua nave rimane. Al rilascio finale 1.0, i progressi Alpha saranno azzerati una volta, ma il tuo equipaggiamento acquistato rimane.',
    // Guide sections
    guideTag: 'Guida per Principianti 2025',
    guideTitle: 'Iniziare in Star Citizen — La Guida Completa',
    guide1Title: 'Cos\'è Star Citizen — e perché ora?',
    guide2Title: 'Cos\'è l\'aUEC — e a cosa serve?',
    guide3Title: 'Codice Referral: Come funziona STAR-VJ67-N2YG',
    guide2Tag: 'Per i Principianti',
    guide2MainTitle: 'Domande Comuni sull\'Inizio',
    gt1Title: 'Star Citizen vs. Elite Dangerous vs. No Man\'s Sky',
    gt2Title: 'Cos\'è Squadron 42?',
    gt3Title: 'Vale la pena entrare in Alpha?',
    gt4Title: 'Quale pacchetto starter è il migliore per i principianti?',
    guideCta: 'Registrati ora con bonus',
    finalTag: 'Pronto per il Verse?',
    finalTitle: 'Inizia Ora con il Bonus',
    finalSubtitle: 'Ottieni il tuo bonus starter tramite il link di registrazione ufficiale. Ci vogliono solo 2 minuti.',
    footerDisclaimer: 'Star Citizen è un marchio registrato di Cloud Imperium Games. Questo sito non è un prodotto RSI ufficiale. È un sito fan indipendente a scopo informativo e di referral.',
    footerCopy: '© 2025 — Sito Referral Star Citizen Non Ufficiale',
    toastCopied: '✓ Codice copiato!',
    navHow: 'Come Funziona',
    navBonus: 'Bonus',
    navFaq: 'FAQ',
    newsTag: 'Comm-Link',
    newsTitle: 'Ultime Notizie dal Verse',
    newsSubtitle: 'Comunicazioni ufficiali di Roberts Space Industries — sempre aggiornate dal RSI Comm-Link.',
    newsReadMore: 'Leggi di più →',
    newsLoading: 'Caricamento notizie…',
    newsError: 'Impossibile caricare le notizie. Trova tutti gli aggiornamenti su robertsspaceindustries.com.',
    newsAllText: 'Tutte le news su RSI',
    newsReadMore: 'Leggi di più →',
    news1Title: 'Alpha 4.8 — Tactical Strike', news1Desc: 'Drake Ironclad, MISC Starlite, Balestra, Granate al Plasma, Sistema di Loadout e Gruppi d\'Assalto Tattico. DefenseCon su ArcCorp.',
    news2Title: 'Alpha 4.7 — Welcome to the Rock', news2Desc: 'Stazioni Breaker: missioni asteroide multi-fase, Crafting T0 e nuova Aurora Mk II con sistema modulare per piloti.',
    news3Title: 'Alpha 4.6 — Lifeline for Levski', news3Desc: 'Sistema di visione notturna LAMP, nuove missioni a Levski e ampie migliorie di stabilità nel Verse.',
    news4Title: 'Alpha 4.5 — Dawn of Engineering', news4Desc: 'Gameplay ingegneristico: gestire sistemi nave, riparare danni, aggiornamenti renderer Vulkan e supporto VR sperimentale.',
    news5Title: 'Alpha 4.3 — Dark Territory', news5Desc: 'Neve dinamica, scale migliorate da Squadron 42 e sistemi meteorologici estesi su pianeti e lune.',
    news6Title: 'Alpha 4.2 — Storm Breaker', news6Desc: 'Pioggia dinamica e gameplay con radiazioni: zone irradiate, equipaggiamento protettivo e nuovi pericoli ambientali in Stanton.',
    stickyLabel: 'Codice Referral',
    stickyCopy: 'Copia',
    stickyCta: 'Registrati ora',
    stickyLabel: 'Codice:',
    stickyCta: 'Ottieni il bonus',
  },
  pt: {
    trust1Val: '100% grátis', trust1Lbl: 'sem custos ocultos',
    trust2Val: 'Em 2 minutos', trust2Lbl: 'registrado e pronto',
    trust3Val: 'Link RSI oficial', trust3Lbl: '100% seguro',
    trust4Val: '5.000 aUEC', trust4Lbl: 'bônus instantâneo no jogo',
    galleryTag: 'Impressões', galleryTitle: 'Viva o Verse',
    galleryLead: 'Imagens do universo Star Citizen — planetas, naves, estações e lugares épicos.',
    gal1Cap: 'Extensões infinitas — mais de 100 sistemas', gal2Cap: 'Planetas em escala real',
    gal3Cap: 'Imersão em primeira pessoa', gal4Cap: 'Combates espaciais épicos',
    gal5Cap: 'Estações e cidades vibrantes', gal6Cap: 'Mineração em asteroides',
    testiTag: 'O que os jogadores dizem', testiTitle: 'A Comunidade do Verse',
    testiLead: 'Centenas de milhares de jogadores já exploram o universo Star Citizen — junte-se a eles.',
    testi1Text: '"Star Citizen é visualmente e na jogabilidade impressionante. O bônus foi uma entrada perfeita para meu primeiro equipamento."',
    testi1Name: 'Marcus K.', testi1Role: 'Caçador de recompensas · 2 anos no Verse',
    testi2Text: '"A escala do universo é incrível. Andar em planetas reais, explorar cinturões de asteroides — nada comparável."',
    testi2Name: 'Sarah L.', testi2Role: 'Exploradora · Membro de Org',
    testi3Text: '"Comecei com o starter mais barato, obtive o bônus e ganhei uma nave melhor no jogo. Exatamente como deve ser."',
    testi3Name: 'Thomas B.', testi3Role: 'Trader · Novo no Verse',
    testiDisclaim: '* Vozes representativas da comunidade Star Citizen.',
    headerCta: 'Registrar agora',
    heroBadge: 'Bônus Exclusivo para Novos Jogadores',
    heroBannerTag: 'Transmissão Recebida',
    heroBannerTitle: 'Canal de Referência Aberto',
    heroBannerMeta: 'CH ·',
    heroH1Line1: 'Comece sua',
    heroH1Line2: 'Aventura em Star Citizen',
    heroSubtitle: 'Obtenha seu bônus de registro gratuito e explore um dos jogos espaciais mais ambiciosos já criados.',
    bonusLabel: 'Seu bônus de registro',
    bonusAmount: '5.000 aUEC',
    bonusDesc: 'Alpha UEC — moeda do jogo para suas primeiras compras no Verse',
    ctaMain: 'Obter Bônus e Registrar',
    ctaSub: 'Saiba mais sobre Star Citizen',
    codeLabel: 'Código de Referência',
    howTag: 'Como funciona',
    howTitle: '3 passos para o Verse',
    howLead: 'Registre-se, baixe, decole — comece sua aventura com o bônus máximo desde o primeiro dia.',
    step1Title: 'Registrar',
    step1Desc: 'Crie sua conta gratuita através do link de referência com o código pré-preenchido automaticamente.',
    step2Title: 'Escolher um Pacote',
    step2Desc: 'Escolha seu pacote inicial — mesmo o mais barato qualifica para o bônus completo.',
    step3Title: 'Entrar no Verse',
    step3Desc: 'Baixe o launcher, faça login e seu aUEC de bônus aparecerá automaticamente em sua conta.',
    step4Title: 'Explorar o Universo',
    step4Desc: 'Comércio, combate, exploração — o universo de Star Citizen é seu. Bem-vindo ao Verse!',
    bonusTag: 'O que você ganha',
    bonusTitle: 'Seu Pacote Inicial Completo',
    bonusLead: 'Com seu código de referência, você desbloqueia extras não disponíveis para outros novos jogadores.',
    b1Title: 'Alpha UEC',
    b1Value: '5.000 aUEC',
    b1Desc: 'Moeda do jogo utilizável imediatamente para equipamentos e componentes no Verse.',
    b2Title: 'Sem Custo Extra',
    b2Value: 'Grátis',
    b2Desc: 'O bônus não custa nada extra — você paga apenas o pacote de jogo escolhido.',
    b3Title: 'Código Exclusivo',
    b3Value: REFERRAL_CODE,
    b3Desc: 'Este código pessoal de referência é aplicado automaticamente para garantir seu bônus.',
    gameTag: 'O Jogo',
    gameTitle: 'O que é Star Citizen?',
    gameFeature1: 'Universo espacial persistente e massivamente multijogador',
    gameFeature2: 'Planetas, luas e estações espaciais em escala real',
    gameFeature3: 'Comércio, pirataria, mineração, exploração e combate espacial',
    gameFeature4: 'Desenvolvimento contínuo — novas funcionalidades a cada patch',
    gameFeature5: 'Squadron 42: Épica campanha single-player',
    gameFeature6: 'Centenas de milhares de jogadores ativos em todo o mundo',
    stat1Value: '700k+',
    stat1Label: 'Jogadores',
    stat2Value: '100+',
    stat2Label: 'Sistemas',
    stat3Value: '4.8',
    stat3Label: 'Ver. Atual',
    gameCta: 'Obter Bônus e Registrar',
    loopsTag: 'Jogabilidade',
    loopsTitle: 'O que você pode fazer no Verse',
    loopsLead: 'Caminhos profissionais diversos — escolha seu próprio caminho pelo universo de Star Citizen.',
    loop1Title: 'Comércio e Logística',
    loop1Desc: 'Compre barato, venda caro. Transporte cargas legais — ou contrabandeie mercadorias por setores de segurança.',
    loop2Title: 'Mineração e Salvamento',
    loop2Desc: 'Extraia minerais raros em asteroides e planetas, ou recupere destroços de naves para recursos valiosos.',
    loop3Title: 'Combate e Caça-Recompensas',
    loop3Desc: 'Engaje em dogfights com piratas, cace criminosos por recompensas ou junte-se a batalhas em larga escala.',
    loop4Title: 'Exploração',
    loop4Desc: 'Descubra pontos de salto inexplorados, mapeie sistemas desconhecidos e encontre destroços ou postos perdidos.',
    loop5Title: 'Missões e Contratos',
    loop5Desc: 'Aceite contratos de corporações, agências de segurança ou organizações criminosas — a escolha é sua.',
    loop6Title: 'Organizações',
    loop6Desc: 'Junte-se a uma organização ou funde a sua. Jogue com centenas de outros em operações coordenadas.',
    shipsTag: 'Naves Starter',
    shipsTitle: 'Naves Iniciais Populares',
    shipsLead: 'Esses pacotes starter são perfeitos para começar e qualificam você para o bônus de referência completo.',
    shipFeaturedLabel: 'Recomendado',
    ship1Role: 'Versátil · Multi-Tripulação',
    ship1Desc: 'A nave starter mais barata. Sólida para iniciantes, com cama e porão de carga.',
    ship2Role: 'Ágil · Foco em Velocidade',
    ship2Desc: 'Nave rápida e ágil. Ideal para iniciantes orientados ao combate e viagens de exploração.',
    ship3Role: 'Combate e Carga · Clássico Comprovado',
    ship3Desc: 'Nave multifuncional balanceada com boa capacidade de carga e armamento sólido.',
    shipsNote: '💡 Mesmo o pacote mais barato qualifica você para o bônus completo de 5.000 aUEC.',
    faqTag: 'Perguntas Frequentes',
    faqTitle: 'Tudo o que você precisa saber',
    faq1Q: 'Como funciona o código de referência?',
    faq1A: 'Ao se registrar pelo link de referência, o código STAR-VJ67-N2YG é aplicado automaticamente. Após comprar qualquer pacote de jogo, 5.000 aUEC são creditados em sua conta.',
    faq2Q: 'Star Citizen é gratuito?',
    faq2A: 'Star Citizen não é um jogo free-to-play. Você precisa de pelo menos um pacote starter para jogar. Pacotes de entrada começam em torno de 45€.',
    faq3Q: 'Quando o bônus aparece na minha conta?',
    faq3A: 'Os 5.000 aUEC são creditados em sua conta RSI após a compra de um pacote qualificado, geralmente em poucos minutos.',
    faq4Q: 'Posso inserir o código manualmente?',
    faq4A: 'Sim! Se o código não foi aplicado automaticamente, faça login no site RSI, vá às configurações da conta e insira STAR-VJ67-N2YG em "Referral Code" — antes da primeira compra.',
    faq5Q: 'Star Citizen é um jogo finalizado?',
    faq5A: 'Star Citizen ainda está oficialmente em Alpha, mas já é amplamente jogável. A versão 4.0 marcou um marco importante. Atualizações regulares expandem o universo continuamente.',
    faq6Q: 'Quando sai Star Citizen — ainda é Alpha?',
    faq6A: 'Star Citizen está oficialmente ainda em Alpha mas é completamente jogável. Ainda não há data de lançamento oficial para a versão 1.0. A Cloud Imperium Games lança patches regulares — em 2025, Star Citizen está mais polido do que nunca.',
    faq7Q: 'Há períodos de teste gratuitos?',
    faq7A: 'Sim! A RSI oferece ocasionalmente fins de semana de teste gratuitos (Free Fly Events) onde você pode experimentar o jogo sem comprar. Para acesso permanente você precisa de um pacote de jogo. Ao se registrar pelo link de referência, você estará pronto para futuros eventos Free Fly.',
    faq8Q: 'Posso jogar em vários PCs?',
    faq8A: 'Sim, sua conta RSI está vinculada ao seu login, não ao hardware. Você pode fazer login de qualquer PC — apenas não simultaneamente em dois dispositivos.',
    faq9Q: 'Quais são os requisitos do sistema?',
    faq9A: 'Star Citizen é exigente. Recomendado: CPU Intel Core i7 ou AMD Ryzen 7, 32 GB de RAM, Nvidia RTX 3070 ou AMD RX 6700 XT ou melhor, e um SSD (NVMe recomendado). Os requisitos mínimos são 16 GB de RAM e GTX 1070, mas a experiência será limitada.',
    faq10Q: 'O que acontece com minha conta e naves após o lançamento?',
    faq10A: 'Naves e pacotes que você compra são seus permanentemente — mesmo após o lançamento oficial 1.0. O aUEC Alpha é redefinido periodicamente, mas sua nave permanece. No lançamento final 1.0, o progresso Alpha será apagado uma vez, mas seu equipamento comprado permanece.',
    // Guide sections
    guideTag: 'Guia para Iniciantes 2025',
    guideTitle: 'Começar em Star Citizen — O Guia Completo',
    guide1Title: 'O que é Star Citizen — e por que agora?',
    guide2Title: 'O que é aUEC — e para que serve?',
    guide3Title: 'Código de Referência: Como funciona STAR-VJ67-N2YG',
    guide2Tag: 'Para Iniciantes',
    guide2MainTitle: 'Perguntas Comuns Sobre o Início',
    gt1Title: 'Star Citizen vs. Elite Dangerous vs. No Man\'s Sky',
    gt2Title: 'O que é Squadron 42?',
    gt3Title: 'Vale a pena entrar na Alpha?',
    gt4Title: 'Qual pacote starter é melhor para iniciantes?',
    guideCta: 'Registrar agora com bônus',
    finalTag: 'Pronto para o Verse?',
    finalTitle: 'Comece Agora com Bônus',
    finalSubtitle: 'Obtenha seu bônus inicial através do link de registro oficial. Leva apenas 2 minutos.',
    footerDisclaimer: 'Star Citizen é uma marca registrada da Cloud Imperium Games. Este site não é um produto oficial da RSI. É um site de fãs independente com fins informativos e de referência.',
    footerCopy: '© 2025 — Site de Referência Star Citizen Não Oficial',
    toastCopied: '✓ Código copiado!',
    navHow: 'Como Funciona',
    navBonus: 'Bônus',
    navFaq: 'FAQ',
    newsTag: 'Comm-Link',
    newsTitle: 'Últimas Notícias do Verse',
    newsSubtitle: 'Comunicados oficiais da Roberts Space Industries — sempre atualizados do RSI Comm-Link.',
    newsReadMore: 'Ler mais →',
    newsLoading: 'A carregar notícias…',
    newsError: 'Não foi possível carregar as notícias. Encontra todas as atualizações em robertsspaceindustries.com.',
    newsAllText: 'Ver todas as notícias na RSI',
    newsReadMore: 'Ler mais →',
    news1Title: 'Alpha 4.8 — Tactical Strike', news1Desc: 'Drake Ironclad, MISC Starlite, Besta, Granadas de Plasma, Sistema de Loadout e Grupos de Assalto Tático. DefenseCon em ArcCorp.',
    news2Title: 'Alpha 4.7 — Welcome to the Rock', news2Desc: 'Estações Breaker: missões de asteroide multi-fase, Crafting T0 e nova Aurora Mk II com sistema modular para pilotos.',
    news3Title: 'Alpha 4.6 — Lifeline for Levski', news3Desc: 'Sistema de visão noturna LAMP, novas missões em Levski e amplas melhorias de estabilidade no Verse.',
    news4Title: 'Alpha 4.5 — Dawn of Engineering', news4Desc: 'Gameplay de engenharia: gerir sistemas da nave, reparar danos, atualizações do renderer Vulkan e suporte a VR experimental.',
    news5Title: 'Alpha 4.3 — Dark Territory', news5Desc: 'Neve dinâmica, escadas melhoradas do Squadron 42 e sistemas meteorológicos expandidos em planetas e luas.',
    news6Title: 'Alpha 4.2 — Storm Breaker', news6Desc: 'Chuva dinâmica e gameplay de radiação: zonas de radiação, equipamento de proteção e novos perigos ambientais em Stanton.',
    stickyLabel: 'Código de Referência',
    stickyCopy: 'Copiar',
    stickyCta: 'Registrar agora',
    stickyLabel: 'Código:',
    stickyCta: 'Obter bônus',
  },
};

// ─── LANGUAGE DETECTION ──────────────────────────────────────────────────────
function detectLanguage() {
  const stored = localStorage.getItem('sc_lang');
  if (stored && i18n[stored]) return stored;
  const browser = (navigator.language || navigator.userLanguage || 'en').split('-')[0].toLowerCase();
  return i18n[browser] ? browser : 'en';
}

let currentLang = detectLanguage();

function t(key) {
  return (i18n[currentLang] && i18n[currentLang][key]) || (i18n['en'] && i18n['en'][key]) || key;
}

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('sc_lang', lang);
  renderPage();
  updateLangDropdown(lang);
}

function updateLangDropdown(lang) {
  const label = document.getElementById('lang-current-label');
  if (label) label.textContent = lang.toUpperCase();
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initLangDropdown() {
  const dropdown = document.getElementById('lang-dropdown');
  const btn      = document.getElementById('lang-drop-btn');
  const menu     = document.getElementById('lang-drop-menu');
  if (!dropdown || !btn || !menu) return;

  btn.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', dropdown.classList.contains('open'));
  });

  menu.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      setLanguage(opt.dataset.lang);
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });

  updateLangDropdown(currentLang);
}

// ─── RENDER ──────────────────────────────────────────────────────────────────
function renderPage() {
  const q = id => document.getElementById(id);
  const set = (id, val) => { const el = q(id); if (el) el.textContent = val; };
  const setHTML = (id, val) => { const el = q(id); if (el) el.innerHTML = val; };

  // Meta
  document.documentElement.lang = currentLang;

  // Header
  set('header-cta-text', t('headerCta'));
  // Hero
  set('hero-banner-tag-text', t('heroBannerTag'));
  set('hero-banner-title', t('heroBannerTitle'));
  set('hero-banner-meta-code', t('heroBannerMeta'));
  set('hero-badge-text', t('heroBadge'));
  set('hero-h1-line1', t('heroH1Line1'));
  set('hero-h1-line2', t('heroH1Line2'));
  set('hero-subtitle', t('heroSubtitle'));
  set('bonus-label', t('bonusLabel'));
  set('bonus-amount', t('bonusAmount'));
  set('bonus-desc', t('bonusDesc'));
  set('cta-main-text', t('ctaMain'));
  set('cta-sub-text', t('ctaSub'));
  set('code-label', t('codeLabel'));
  // How
  set('how-tag', t('howTag'));
  set('how-title', t('howTitle'));
  set('how-lead', t('howLead'));
  set('step1-title', t('step1Title'));
  set('step1-desc', t('step1Desc'));
  set('step2-title', t('step2Title'));
  set('step2-desc', t('step2Desc'));
  set('step3-title', t('step3Title'));
  set('step3-desc', t('step3Desc'));
  set('step4-title', t('step4Title'));
  set('step4-desc', t('step4Desc'));
  // Bonuses
  set('bonus-tag', t('bonusTag'));
  set('bonus-sec-title', t('bonusTitle'));
  set('bonus-lead', t('bonusLead'));
  set('b1-title', t('b1Title'));
  set('b1-value', t('b1Value'));
  set('b1-desc', t('b1Desc'));
  set('b2-title', t('b2Title'));
  set('b2-value', t('b2Value'));
  set('b2-desc', t('b2Desc'));
  set('b3-title', t('b3Title'));
  set('b3-value', t('b3Value'));
  set('b3-desc', t('b3Desc'));
  // Game Info
  set('game-tag', t('gameTag'));
  set('game-title', t('gameTitle'));
  set('stat1-value', t('stat1Value'));
  set('stat1-label', t('stat1Label'));
  set('stat2-value', t('stat2Value'));
  set('stat2-label', t('stat2Label'));
  set('stat3-value', t('stat3Value'));
  set('stat3-label', t('stat3Label'));
  set('game-cta-text', t('gameCta'));
  // Feature list
  const features = [
    t('gameFeature1'), t('gameFeature2'), t('gameFeature3'),
    t('gameFeature4'), t('gameFeature5'), t('gameFeature6'),
  ];
  const featureList = q('feature-list');
  if (featureList) featureList.innerHTML = features.map(f => `<li>${f}</li>`).join('');
  // Logo tag + manufacturers
  set('logo-bonus-tag', t('logoBonusTag') || 'Referral Bonus');
  set('mfr-tag', t('mfrTag') || 'Schiffshersteller im Verse');
  // Trust bar
  for (let i = 1; i <= 4; i++) {
    set(`trust${i}-val`, t(`trust${i}Val`));
    set(`trust${i}-lbl`, t(`trust${i}Lbl`));
  }
  // Gallery
  set('gallery-tag', t('galleryTag'));
  set('gallery-title', t('galleryTitle'));
  set('gallery-lead', t('galleryLead'));
  for (let i = 1; i <= 6; i++) set(`gal${i}-cap`, t(`gal${i}Cap`));
  // Testimonials
  set('testi-tag', t('testiTag'));
  set('testi-title', t('testiTitle'));
  set('testi-lead', t('testiLead'));
  for (let i = 1; i <= 3; i++) {
    set(`testi${i}-text`, t(`testi${i}Text`));
    set(`testi${i}-name`, t(`testi${i}Name`));
    set(`testi${i}-role`, t(`testi${i}Role`));
  }
  set('testi-disclaim', t('testiDisclaim'));
  // Loops
  set('loops-tag', t('loopsTag'));
  set('loops-title', t('loopsTitle'));
  set('loops-lead', t('loopsLead'));
  for (let i = 1; i <= 6; i++) {
    set(`loop${i}-title`, t(`loop${i}Title`));
    set(`loop${i}-desc`, t(`loop${i}Desc`));
  }
  // Ships
  set('ships-tag', t('shipsTag'));
  set('ships-title', t('shipsTitle'));
  set('ships-lead', t('shipsLead'));
  set('ship-featured-label', t('shipFeaturedLabel'));
  set('ship1-role', t('ship1Role'));
  set('ship1-desc', t('ship1Desc'));
  set('ship2-role', t('ship2Role'));
  set('ship2-desc', t('ship2Desc'));
  set('ship3-role', t('ship3Role'));
  set('ship3-desc', t('ship3Desc'));
  set('ships-note', t('shipsNote'));
  // Guide sections
  set('guide-tag', t('guideTag') || 'Einsteiger Guide 2025');
  set('guide-title', t('guideTitle') || 'Star Citizen starten — der komplette Guide');
  set('guide1-title', t('guide1Title') || 'Was ist Star Citizen — und warum jetzt?');
  set('guide2-title', t('guide2Title') || 'Was ist aUEC — und wofür nutzt man es?');
  set('guide3-title', t('guide3Title') || 'Referral Code: So funktioniert STAR-VJ67-N2YG');
  set('guide2-tag', t('guide2Tag') || 'Für Einsteiger');
  set('guide2-main-title', t('guide2MainTitle') || 'Häufige Fragen zum Einstieg');
  set('gt1-title', t('gt1Title') || 'Star Citizen vs. Elite Dangerous vs. No Man\'s Sky');
  set('gt2-title', t('gt2Title') || 'Was ist Squadron 42?');
  set('gt3-title', t('gt3Title') || 'Lohnt sich der Einstieg in der Alpha?');
  set('gt4-title', t('gt4Title') || 'Welches Starter-Paket ist das beste für Anfänger?');
  set('guide-cta-text', t('guideCta') || 'Jetzt mit Bonus registrieren');
  // Body texts - only set if translation exists to not override static HTML
  if (currentLang !== 'de') {
    set('guide1-body', t('guide1Body') || '');
    set('guide2-body', t('guide2Body') || '');
    set('guide3-body', t('guide3Body') || '');
    set('gt1-body', t('gt1Body') || '');
    set('gt2-body', t('gt2Body') || '');
    set('gt3-body', t('gt3Body') || '');
    set('gt4-body', t('gt4Body') || '');
  }
  // FAQ
  set('faq-tag', t('faqTag'));
  set('faq-title', t('faqTitle'));
  const faqs = [
    [t('faq1Q'), t('faq1A')],
    [t('faq2Q'), t('faq2A')],
    [t('faq3Q'), t('faq3A')],
    [t('faq4Q'), t('faq4A')],
    [t('faq5Q'), t('faq5A')],
    [t('faq6Q'), t('faq6A')],
    [t('faq7Q'), t('faq7A')],
    [t('faq8Q'), t('faq8A')],
    [t('faq9Q'), t('faq9A')],
    [t('faq10Q'), t('faq10A')],
  ].filter(f => f[0] && f[1]);
  const faqList = q('faq-list');
  if (faqList) {
    faqList.innerHTML = faqs.map((f, i) => `
      <div class="faq-item" id="faq-item-${i}">
        <button class="faq-question" onclick="toggleFaq(${i})" aria-expanded="false">
          <span>${f[0]}</span>
          <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        <div class="faq-answer">${f[1]}</div>
      </div>
    `).join('');
  }
  // Sticky CTA bar
  set('sticky-cta-label', t('stickyLabel'));
  set('sticky-cta-btn-text', t('stickyCta'));
  // News section
  set('news-tag', t('newsTag'));
  set('news-title', t('newsTitle'));
  set('news-subtitle', t('newsSubtitle'));
  set('news-all-text', t('newsAllText'));
  // Static news card i18n
  ['news1','news2','news3','news4','news5','news6'].forEach(k => {
    set(`${k}-title`, t(`${k}Title`));
    set(`${k}-desc`,  t(`${k}Desc`));
  });
  document.querySelectorAll('.news-read-more').forEach(el => { el.textContent = t('newsReadMore'); });
  // Sticky bar
  set('sticky-bar-label', t('stickyLabel'));
  set('sticky-bar-btn-text', t('stickyCopy'));
  set('sticky-bar-cta-text', t('stickyCta'));
  // Final CTA
  set('final-tag', t('finalTag'));
  set('final-title', t('finalTitle'));
  set('final-subtitle', t('finalSubtitle'));
  // Footer
  set('footer-disclaimer', t('footerDisclaimer'));
  set('footer-copy', t('footerCopy'));

  // Update all CTA links
  document.querySelectorAll('.referral-link').forEach(el => el.href = REFERRAL_URL);
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function toggleFaq(index) {
  const item = document.getElementById(`faq-item-${index}`);
  if (!item) return;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// ─── COPY CODE ───────────────────────────────────────────────────────────────
function copyCode(feedbackId) {
  navigator.clipboard.writeText(REFERRAL_CODE).then(() => {
    showToast(t('toastCopied'));
    if (feedbackId) {
      const el = document.getElementById(feedbackId);
      if (el) {
        el.classList.add('show');
        setTimeout(() => el.classList.remove('show'), 2000);
      }
    }
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = REFERRAL_CODE;
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast(t('toastCopied'));
  });
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ─── STARFIELD ───────────────────────────────────────────────────────────────
function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, stars;

  const resize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    stars = Array.from({ length: 280 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.2,
      a: Math.random(),
      speed: Math.random() * 0.003 + 0.001,
      twinkle: Math.random() * Math.PI * 2,
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    const t = Date.now() * 0.001;
    stars.forEach(s => {
      s.twinkle += s.speed;
      const alpha = s.a * (0.5 + 0.5 * Math.sin(s.twinkle));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,220,255,${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  };

  window.addEventListener('resize', resize);
  resize();
  draw();
}

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── PARALLAX HERO ───────────────────────────────────────────────────────────
function initParallax() {
  const ship = document.querySelector('.hero-ship');
  if (!ship) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    ship.style.transform = `translateY(${y * 0.15}px)`;
  }, { passive: true });
}

// ─── FLOATING PARTICLES ──────────────────────────────────────────────────────
function initParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const colors = ['rgba(200,146,42,0.6)', 'rgba(0,168,232,0.6)', 'rgba(200,220,255,0.4)'];

  function spawnParticle() {
    const p = document.createElement('div');
    p.className = 'floating-particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%; bottom:-10px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration:${8+Math.random()*12}s;
      animation-delay:${Math.random()*2}s;
    `;
    hero.appendChild(p);
    setTimeout(() => p.remove(), 22000);
  }

  setInterval(spawnParticle, 1200);
}

// ─── SMOOTH SCROLL ───────────────────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ─── HEADER SCROLL ───────────────────────────────────────────────────────────
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.style.background = window.scrollY > 50
      ? 'rgba(3,8,16,0.97)'
      : 'rgba(3,8,16,0.85)';
  }, { passive: true });
}

// ─── STICKY REFERRAL BAR ─────────────────────────────────────────────────────
function initStickyBar() {
  const bar = document.getElementById('sticky-bar');
  const hero = document.querySelector('.hero');
  if (!bar || !hero) return;
  const threshold = () => hero.offsetHeight * 0.7;
  const update = () => bar.classList.toggle('visible', window.scrollY > threshold());
  update();
  window.addEventListener('scroll', update, { passive: true });
}

// ─── RSI COMM-LINK NEWS ──────────────────────────────────────────────────────
async function fetchRsiNewsJson(rssUrl) {
  const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&count=6`;
  const res = await fetch(api, { signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`rss2json ${res.status}`);
  const data = await res.json();
  if (data.status !== 'ok' || !data.items?.length) throw new Error('empty feed');
  return data.items.map(item => ({
    title: item.title || '',
    link: item.link || '',
    pubDate: item.pubDate || '',
    thumbnail: item.thumbnail || item.enclosure?.link || '',
    description: (item.description || item.content || '').replace(/<[^>]+>/g, '').trim(),
  })).filter(i => i.title && i.link);
}

async function fetchViaProxy(url) {
  const proxies = [
    u => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
    u => `https://corsproxy.io/?${encodeURIComponent(u)}`,
  ];
  for (const make of proxies) {
    try {
      const res = await fetch(make(url), { signal: AbortSignal.timeout(7000) });
      if (!res.ok) continue;
      const text = await res.text();
      if (text && text.length > 200) return text;
    } catch { /* try next */ }
  }
  throw new Error('all proxies failed');
}

function parseRssItems(xmlText, limit = 6) {
  const doc = new DOMParser().parseFromString(xmlText, 'text/xml');
  const items = [...doc.querySelectorAll('item, entry')].slice(0, limit);
  return items.map(it => {
    const get = sel => it.querySelector(sel)?.textContent?.trim() || '';
    let link = get('link');
    if (!link) link = it.querySelector('link')?.getAttribute('href') || '';
    const descRaw = get('description') || get('summary') || get('content\\:encoded') || '';
    const imgMatch = descRaw.match(/<img[^>]+src=["']([^"']+)["']/i);
    const mediaUrl = it.querySelector('enclosure')?.getAttribute('url')
      || it.querySelector('media\\:content, content[medium="image"]')?.getAttribute('url')
      || it.querySelector('media\\:thumbnail')?.getAttribute('url')
      || '';
    return {
      title: get('title'),
      link,
      pubDate: get('pubDate') || get('published') || get('updated'),
      thumbnail: mediaUrl || (imgMatch ? imgMatch[1] : ''),
      description: descRaw.replace(/<[^>]+>/g, '').trim(),
    };
  }).filter(i => i.title && i.link);
}

function renderNewsItems(items, grid) {
  grid.innerHTML = '';
  items.forEach(item => {
    const dateObj = item.pubDate ? new Date(item.pubDate) : null;
    const date = dateObj && !isNaN(dateObj)
      ? dateObj.toLocaleDateString(currentLang, { day:'numeric', month:'short', year:'numeric' })
      : '';
    const desc = item.description ? item.description.slice(0, 130).trim() + '…' : '';
    const linkAbs = item.link.startsWith('http')
      ? item.link
      : `https://robertsspaceindustries.com${item.link}`;
    const card = document.createElement('article');
    card.className = 'news-card reveal';
    card.innerHTML = `
      ${item.thumbnail ? `<div class="news-thumb" style="background-image:url('${item.thumbnail}')"></div>` : '<div class="news-thumb news-thumb--placeholder"></div>'}
      <div class="news-body">
        <time class="news-date">${date}</time>
        <h3 class="news-headline">${item.title}</h3>
        ${desc ? `<p class="news-excerpt">${desc}</p>` : ''}
        <a href="${linkAbs}" target="_blank" rel="noopener" class="news-read-more">${t('newsReadMore')}</a>
      </div>`;
    grid.appendChild(card);
  });
}

async function loadRsiNews() {
  const grid = document.getElementById('news-grid');
  const loading = document.getElementById('news-loading');
  if (!grid) return;

  const rssUrls = [
    'https://robertsspaceindustries.com/comm-link/rss/all',
    'https://robertsspaceindustries.com/en/comm-link/rss',
    'https://robertsspaceindustries.com/comm-link/rss',
  ];

  // Try rss2json.com first (server-side fetch, most reliable)
  for (const rssUrl of rssUrls) {
    try {
      const items = await fetchRsiNewsJson(rssUrl);
      if (items.length) { renderNewsItems(items, grid); return; }
    } catch { /* try next */ }
  }

  // Fall back to raw proxy + XML parsing
  for (const rssUrl of rssUrls) {
    try {
      const xml = await fetchViaProxy(rssUrl);
      const items = parseRssItems(xml, 6);
      if (items.length) { renderNewsItems(items, grid); return; }
    } catch { /* try next */ }
  }

  if (loading) {
    loading.innerHTML = `<span style="color:var(--text-dim);font-size:0.9rem">${t('newsError')}</span>`;
  }
}

// ─── BOOT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderPage();

  initLangDropdown();
  initStarfield();
  initScrollReveal();
  initParallax();
  initParticles();
  initSmoothScroll();
  initHeaderScroll();
  initStickyBar();
});

// expose for inline handlers
window.copyCode = copyCode;
window.setLanguage = setLanguage;
window.toggleFaq = toggleFaq;
