/* =============================================
   STAR CITIZEN REFERRAL PAGE — MAIN JS
   ============================================= */

const REFERRAL_CODE = 'STAR-VJ67-N2YG';
const REFERRAL_URL  = 'https://www.robertsspaceindustries.com/enlist?referral=STAR-VJ67-N2YG';

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
const i18n = {
  de: {
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
    stat3Value: '4.0',
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
  },
  en: {
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
    stat3Value: '4.0',
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
    finalTag: 'Ready for the Verse?',
    finalTitle: 'Start Now with Bonus',
    finalSubtitle: 'Claim your starter bonus via the official registration link. It only takes 2 minutes.',
    footerDisclaimer: 'Star Citizen is a registered trademark of Cloud Imperium Games. This site is not an official RSI product. It is an independent fan site for information and referral purposes. The site operator may receive in-game benefits when purchases are made via the referral link.',
    footerCopy: '© 2025 — Unofficial Star Citizen Referral Site',
    toastCopied: '✓ Code copied!',
    navHow: 'How It Works',
    navBonus: 'Bonus',
    navFaq: 'FAQ',
  },
  fr: {
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
    stat3Value: '4.0',
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
    finalTag: 'Prêt pour le Verse ?',
    finalTitle: 'Commence Maintenant avec le Bonus',
    finalSubtitle: "Réclame ton bonus de démarrage via le lien d'inscription officiel. Ça ne prend que 2 minutes.",
    footerDisclaimer: "Star Citizen est une marque déposée de Cloud Imperium Games. Ce site n'est pas un produit RSI officiel. C'est un site fan indépendant à des fins d'information et de parrainage.",
    footerCopy: '© 2025 — Site de Parrainage Star Citizen Non Officiel',
    toastCopied: '✓ Code copié !',
    navHow: 'Comment ça marche',
    navBonus: 'Bonus',
    navFaq: 'FAQ',
  },
  es: {
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
    stat3Value: '4.0',
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
    finalTag: '¿Listo para el Verse?',
    finalTitle: 'Empieza Ahora con Bono',
    finalSubtitle: 'Consigue tu bono inicial a través del enlace de registro oficial. Solo toma 2 minutos.',
    footerDisclaimer: 'Star Citizen es una marca registrada de Cloud Imperium Games. Este sitio no es un producto oficial de RSI. Es un sitio de fans independiente con fines informativos y de referido.',
    footerCopy: '© 2025 — Sitio de Referido No Oficial de Star Citizen',
    toastCopied: '✓ ¡Código copiado!',
    navHow: 'Cómo Funciona',
    navBonus: 'Bono',
    navFaq: 'FAQ',
  },
  it: {
    headerCta: 'Registrati ora',
    heroBadge: 'Bonus Esclusivo per Nuovi Giocatori',
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
    stat3Value: '4.0',
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
    finalTag: 'Pronto per il Verse?',
    finalTitle: 'Inizia Ora con il Bonus',
    finalSubtitle: 'Ottieni il tuo bonus starter tramite il link di registrazione ufficiale. Ci vogliono solo 2 minuti.',
    footerDisclaimer: 'Star Citizen è un marchio registrato di Cloud Imperium Games. Questo sito non è un prodotto RSI ufficiale. È un sito fan indipendente a scopo informativo e di referral.',
    footerCopy: '© 2025 — Sito Referral Star Citizen Non Ufficiale',
    toastCopied: '✓ Codice copiato!',
    navHow: 'Come Funziona',
    navBonus: 'Bonus',
    navFaq: 'FAQ',
  },
  pt: {
    headerCta: 'Registrar agora',
    heroBadge: 'Bônus Exclusivo para Novos Jogadores',
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
    stat3Value: '4.0',
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
    finalTag: 'Pronto para o Verse?',
    finalTitle: 'Comece Agora com Bônus',
    finalSubtitle: 'Obtenha seu bônus inicial através do link de registro oficial. Leva apenas 2 minutos.',
    footerDisclaimer: 'Star Citizen é uma marca registrada da Cloud Imperium Games. Este site não é um produto oficial da RSI. É um site de fãs independente com fins informativos e de referência.',
    footerCopy: '© 2025 — Site de Referência Star Citizen Não Oficial',
    toastCopied: '✓ Código copiado!',
    navHow: 'Como Funciona',
    navBonus: 'Bônus',
    navFaq: 'FAQ',
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
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
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
  // FAQ
  set('faq-tag', t('faqTag'));
  set('faq-title', t('faqTitle'));
  const faqs = [
    [t('faq1Q'), t('faq1A')],
    [t('faq2Q'), t('faq2A')],
    [t('faq3Q'), t('faq3A')],
    [t('faq4Q'), t('faq4A')],
    [t('faq5Q'), t('faq5A')],
  ];
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

// ─── BOOT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderPage();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  initStarfield();
  initScrollReveal();
  initParallax();
  initParticles();
  initSmoothScroll();
  initHeaderScroll();
});

// expose for inline handlers
window.copyCode = copyCode;
window.setLanguage = setLanguage;
window.toggleFaq = toggleFaq;
