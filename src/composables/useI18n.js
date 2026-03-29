import { computed, ref } from 'vue'

// Lingua corrente
const currentLocale = ref(localStorage.getItem('locale') || 'it')

// Dizionario delle traduzioni
const translations = {
  it: {
    // Header
    header: {
      schedule: 'Lun-Sab: 08:30 - 13:00 / 16:00 - 19:00 | Dom: 08:30 / 12:30',
    },
    // Navigazione
    nav: {
      home: 'Home',
      rates: 'Tariffe',
      contacts: 'Contatti',
      conditions: 'Condizioni di noleggio',
    },
    // Pagina Home
    home: {
      heroTitle: 'Rent a Car Express',
      heroSubtitle: 'Alghero - Sardegna',
      discoverRates: 'Scopri le Tariffe',
      contactUs: 'Contattaci',
      yearsExperience: 'Anni di Esperienza',
      assistance: 'Assistenza',
      scroll: 'Scorri',
      aboutLabel: 'La Nostra Storia',
      aboutTitle: 'Chi Siamo',
      aboutSubtitle: 'Il partner ideale per il tuo viaggio in Sardegna',
      aboutCompany: 'Rent a Car Express',
      aboutCompanySubtitle: 'Il tuo autonoleggio di fiducia ad Alghero',
      aboutDescription:
        "Rent a Car Express è un'azienda di autonoleggio che opera in Sardegna e in particolare ad Alghero. Offriamo servizi di noleggio auto senza autista.",
      aboutFeature1Title: 'Noleggio Professionale',
      aboutFeature1Text:
        'Autovetture senza conducente delle migliori marche presenti nel mercato nazionale, con assistenza di personale altamente specializzato',
      aboutFeature2Title: 'Consegna Flessibile',
      aboutFeature2Text:
        "La consegna e la ripresa dell'autovettura vengono eseguite a domicilio senza ulteriori supplementi, anche fuori orario di ufficio e nei giorni festivi entro i confini dell'area di Alghero",
      aboutFeature3Title: 'Pagamenti Sicuri',
      aboutFeature3Text:
        'Convenzione con le maggiori carte di credito: Visa e MasterCard per la tua massima comodità',
      aboutFeature4Title: 'Sempre Disponibili',
      aboutFeature4Text:
        'Assistenza continuativa 24 ore su 24, 7 giorni su 7 per garantirti tranquillità durante tutto il noleggio',
      aboutImageTitle: 'Esperienza e Affidabilità',
      aboutImageSubtitle: 'Il tuo partner per scoprire la Sardegna',
      whyUsLabel: 'I Nostri Punti di Forza',
      whyUsTitle: 'Perché Scegliere Noi',
      whyUsSubtitle: 'Qualità, affidabilità e convenienza al tuo servizio',
      servicePaymentTitle: 'Pagamenti Facili',
      servicePaymentText: 'Accettiamo tutte le principali carte di credito: Visa e MasterCard',
      serviceAssistanceTitle: 'Assistenza 24/7',
      serviceAssistanceText: 'Supporto continuativo 7 giorni su 7, sempre al tuo servizio',
      howItWorksLabel: 'Processo Semplice',
      howItWorksTitle: 'Come Funziona',
      howItWorksSubtitle: "Noleggiare un'auto non è mai stato così facile",
      step1Title: 'Scegli il Veicolo',
      step1Text: "Seleziona l'auto più adatta alle tue esigenze dal nostro catalogo",
      step2Title: 'Contattaci',
      step2Text: 'Chiamaci o inviaci un messaggio, risponderemo velocemente',
      step3Title: 'Ritira e Parti',
      step3Text: 'Vieni a ritirare la tua auto e inizia subito la tua avventura',
    },
    // Pagina Tariffe
    rates: {
      heroTag: 'Prezzi Imbattibili',
      heroTitle: 'Le Nostre',
      heroSubtitle: 'Tariffe',
      heroDescription:
        'Prezzi trasparenti e competitivi per ogni esigenza. Nessun costo nascosto, massima flessibilità!',
      transparentPrices: 'Prezzi trasparenti',
      freeCancellation: 'Cancellazione gratuita',
      noHiddenCosts: 'Nessun costo nascosto',
      discoverOffers: 'Scopri le nostre offerte',
      plansLabel: 'Scegli il Tuo Piano',
      plansTitle: 'Piani di Noleggio',
      plansSubtitle: 'Trova la soluzione perfetta per le tue esigenze di viaggio',
      mostChosen: 'PIÙ SCELTO',
      perDay: 'al giorno',
      bookNow: 'Prenota Ora',
      economyName: 'Economy',
      economyFeature1: 'Utilitarie compatte',
      economyFeature2: 'Aria condizionata',
      economyFeature3: 'Cambio manuale',
      economyFeature4: 'Assicurazione base',
      economyFeature5: '200 km inclusi',
      comfortName: 'Comfort',
      comfortFeature1: 'Berline medie',
      comfortFeature2: 'Clima automatico',
      comfortFeature3: 'Cambio automatico',
      comfortFeature4: 'Assicurazione premium',
      comfortFeature5: 'Km illimitati',
      comfortFeature6: 'GPS incluso',
      premiumName: 'Premium',
      premiumFeature1: 'SUV e auto di lusso',
      premiumFeature2: 'Full optional',
      premiumFeature3: 'Cambio automatico',
      premiumFeature4: 'Assicurazione kasko',
      premiumFeature5: 'Km illimitati',
      premiumFeature6: 'GPS e seggiolini inclusi',
      premiumFeature7: 'Servizio prioritario',
      priceNote:
        'Tutti i prezzi sono IVA inclusa. Richiedi un preventivo personalizzato per noleggi oltre 30 giorni.',
      extrasLabel: 'Personalizza',
      extrasTitle: 'Servizi Extra',
      extrasSubtitle: 'Aggiungi comfort e sicurezza al tuo noleggio con i nostri servizi opzionali',
      gpsNavigator: 'GPS Navigatore',
      childSeat: 'Seggiolino bambini',
      additionalDriver: 'Conducente aggiuntivo',
      snowChains: 'Catene da neve',
      ctaTitle: 'Hai bisogno di un preventivo personalizzato?',
      ctaSubtitle: 'Contattaci per offerte su misura, soluzioni aziendali e preventivi per gruppi',
      requestQuote: 'Richiedi Preventivo',
      happyClients: 'Clienti Felici',
      reviews: 'Recensioni',
      support: 'Assistenza',
    },
    // Footer
    footer: {
      tagline:
        'Il tuo partner di fiducia per il noleggio auto in Sardegna. Servizi professionali ad Alghero.',
      navigation: 'Navigazione',
      contactsTitle: 'Contatti',
      openingHours: 'Orari di Apertura',
      mondayToSaturday: 'Lunedì - Sabato',
      sunday: 'Domenica',
      closed: 'Chiuso',
      address: 'Via S. Satta, 52 - Alghero (SS)',
      copyright: '© 2025 Rent a Car Express. Tutti i diritti riservati.',
      privacy: 'Privacy',
      terms: 'Termini',
      cookies: 'Cookie',
    },
    // Pagina Contatti
    contacts: {
      heroTag: 'Siamo Qui per Te',
      heroTitle: 'Contattaci',
      heroSubtitle: 'Subito!',
      heroDescription:
        'Scegli il modo che preferisci per raggiungerci. Ti risponderemo nel minor tempo possibile!',
      channelsTag: 'Canali di Contatto',
      channelsTitle: 'Come Preferisci Contattarci?',
      phone: 'Telefono',
      phoneSchedule: 'Lun-Sab: 08:30 - 13:00 / 16:00 - 19:00 | Dom: 08:30 / 12:30',
      email: 'Email',
      emailResponse: 'Risposta entro 24h',
      whatsapp: 'WhatsApp',
      whatsappAssistance: 'Assistenza rapida',
      qrCodeTitle: 'Scansiona e Chatta su WhatsApp',
      qrCodeDescription:
        'Inquadra il QR code con la fotocamera del tuo smartphone per iniziare una conversazione immediata con noi su WhatsApp!',
      scanNow: 'Scansiona Ora',
      locationTag: 'Dove Siamo',
      locationTitle: '📍 La Nostra Sede',
      locationSubtitle: 'Vieni a trovarci ad Alghero, Sardegna',
      addressFull: 'Indirizzo Completo',
      addressDetails: 'Via Sebastiano Satta, 52<br />07041 Alghero (SS) - Sardegna, Italia',
      openingHoursTitle: 'Orari di Apertura',
      openingHoursDetails: 'Lun-Sab: 08:30 - 13:00 / 16:00 - 19:00',
      premiumServices: 'Servizi Premium',
      premiumDetails: 'Consegna e ritiro gratuiti<br />Assistenza 24/7 in Sardegna',
      conditionsTag: 'Informazioni Utili',
      conditionsTitle: '📋 Condizioni di Noleggio',
      conditionsSubtitle:
        'Tutto ciò che devi sapere per noleggiare con noi in modo semplice e trasparente',
      payment: 'Pagamento',
      paymentText:
        "Il pagamento del servizio di noleggio viene effettuato alla consegna dell'autovettura. Vengono accettate le principali carte di credito (Visa e MasterCard) oppure contanti.",
      deposit: '💰 Deposito Cauzionale:',
      depositText: 'In caso di pagamento in contanti si dovrà versare un deposito cauzionale di',
      depositAmount: '€ 500,00',
      paymentNote:
        'La tariffa applicata viene garantita, per noleggi continuativi, sino alla data di previsto rientro presente nella lettera di noleggio.',
      taxes: 'Tasse',
      taxesText:
        'Tutti i prezzi indicati sono da intendersi comprensivi di IVA 22% se non diversamente specificato.',
      fuel: 'Carburante',
      fuelText: 'Il costo del carburante è da intendersi a carico del cliente.',
      fuelWarning: '⚠️ Attenzione:',
      fuelWarningText:
        "Se il veicolo viene affidato con il pieno di carburante e riconsegnato senza lo stesso, verrà conteggiato in aumento oltre l'importo dei litri mancanti, il costo di servizio di rifornimento pari a",
      fuelCost: '€ 15,00',
      minAge: 'Età Minima',
      minAgeText: '21 anni con patente di cat. B in corso di validità ed emessa da almeno 1 anno.',
      minAgeNote: "Non è possibile noleggiare l'autovettura ai clienti al di sotto dei 21 anni.",
      superCDW: 'Super CDW (SCDW)',
      superCDWText:
        "La copertura opzionale Super CDW costituisce l'esonero da ogni responsabilità per danni al veicolo con conseguente eliminazione della penalità risarcitoria (franchigia).",
      superCDWCost: '✨ Costo:',
      superCDWCostAmount: '€ 10,00 al giorno',
      superCDWNote:
        'La garanzia Super CDW non copre danni al tetto, ai pneumatici e al sottoscocca, né i danni provocati da atti volontari o omissione di soccorso.',
      documentation: 'Documentazione Necessaria',
      docLicense: '✓ Patente di guida in corso di validità',
      docID: "✓ Documento d'identità valido",
      docCard: '✓ Carta di credito intestata al conducente',
      docFiscalCode: '✓ Codice fiscale',
      penalties: 'Penalità risarcitorie (Franchigie)',
      penaltiesText: 'In caso di danni o furto si applicano le seguenti franchigie:',
      groupsAB: 'Gruppi A-B',
      groupCE: 'Gruppo C-E',
      groupF: 'Gruppo F',
      groupG: 'Gruppo G',
      penaltiesNote: 'Le franchigie si applicano per ogni singolo evento dannoso o furto.',
      additionalDrivers: 'Conducenti Aggiuntivi',
      additionalDriversText: 'È possibile aggiungere conducenti extra al contratto di noleggio.',
      dailyCost: 'Costo giornaliero',
      additionalDriversNote:
        'Ogni conducente aggiuntivo deve soddisfare i requisiti di età e patente.',
      territorialLimits: 'Limiti Territoriali',
      territorialLimitsText:
        "È espressamente vietato l'utilizzo del veicolo al di fuori del territorio della Regione Sardegna.",
      territorialLimitsWarning: '⚠️ Importante:',
      territorialLimitsWarningText:
        'La violazione di questo limite comporta la decadenza di tutte le coperture assicurative ed eventuali sanzioni.',
      maintenanceDamages: 'Manutenzione e Danni',
      maintenanceDamagesText:
        'Il cliente è responsabile della manutenzione ordinaria durante il noleggio (controllo livelli olio, acqua, pressione pneumatici).',
      assistanceService: '💡 Servizio Assistenza:',
      assistanceServiceText:
        'In caso di problemi tecnici, contattare immediatamente il nostro servizio assistenza disponibile 24/7.',
      cancellationModifications: 'Cancellazione e Modifiche',
      cancellationModificationsText:
        "È possibile cancellare o modificare la prenotazione gratuitamente fino a 48 ore prima dell'inizio del noleggio.",
      cancellationPenalties: '⚠️ Penali:',
      cancellationPenaltiesText:
        "Cancellazioni o modifiche entro 48 ore dall'inizio del noleggio potrebbero essere soggette a penali.",
      privacyTag: 'Informativa Privacy',
      privacyTitle: '🔐 La Tua Privacy è Importante',
      privacySubtitle: 'Come trattiamo i tuoi dati personali in conformità con il GDPR',
      privacyGuarantee: 'Protezione Totale dei Tuoi Dati',
      privacyGuaranteeText:
        'Trattiamo i tuoi dati personali con la massima cura e sicurezza, in piena conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR) e il D.Lgs n°196/03. La tua privacy è la nostra priorità.',
      privacyDataCollected: 'Quali dati raccogliamo',
      privacyName: 'Nome e Cognome',
      privacyCompany: "Nome dell'azienda (se specificata)",
      privacyPhone: 'Numero di telefono (se specificato)',
      privacyEmail: 'Indirizzo email',
      privacyRequest: 'Informazioni inserite come richiesta',
      privacyTreatment: 'Modalità e durata del trattamento',
      privacyTreatmentText:
        "Il trattamento viene effettuato mediante raccolta, elaborazione e raffronto dei dati attraverso strumenti informatici o telematici con misure di sicurezza idonee a garantirne la riservatezza. I dati rimangono in nostro possesso per il tempo strettamente necessario allo svolgimento delle attività aziendali e all'eventuale gestione di dispute legali, nel rispetto delle normative vigenti.",
      privacyRights: "Diritti dell'interessato",
      privacyRightsText:
        "È possibile far valere i diritti previsti dall'art.7 del D.Lgs n°196/03 e dal GDPR, tra cui l'accesso, la cancellazione, l'aggiornamento, la rettifica o l'integrazione dei dati scrivendo all'indirizzo della nostra sede o via email.",
      privacyQuestions: 'Hai Domande sulla Privacy?',
      privacyQuestionsText:
        'Per qualsiasi informazione riguardante il trattamento dei tuoi dati personali, per esercitare i tuoi diritti o per richiedere chiarimenti sulla nostra informativa privacy, non esitare a contattarci.',
      privacyPurpose: 'Finalità del Trattamento',
      privacyPurposeText:
        'I dati raccolti vengono utilizzati esclusivamente per: <strong>gestire le prenotazioni, fornire assistenza clienti, migliorare i nostri servizi e adempiere agli obblighi contrattuali e legali</strong>. Non condividiamo mai i tuoi dati con terze parti senza il tuo esplicito consenso.',
      dataSecurity: 'Sicurezza dei Dati',
      dataSecurityText:
        "Utilizziamo <strong>tecnologie di crittografia avanzate</strong> e misure di sicurezza all'avanguardia per proteggere i tuoi dati da accessi non autorizzati, perdita o alterazione. I nostri sistemi sono costantemente monitorati e aggiornati.",
      legalHeadquarters: 'Sede Legale',
    },
    // FAQ
    faq: {
      sectionLabel: 'Domande frequenti',
      sectionTitle: 'Hai qualche dubbio?',
      sectionSubtitle: 'Le risposte alle domande più comuni sul nostro servizio di noleggio.',
      q1: "Qual è l'età minima per noleggiare un'auto?",
      a1: "L'età minima è 21 anni. Il conducente deve essere in possesso di una patente di guida categoria B in corso di validità, rilasciata da almeno 1 anno.",
      q2: 'Quali metodi di pagamento accettate?',
      a2: 'Accettiamo le principali carte di credito Visa e MasterCard. È possibile pagare anche in contanti; in quel caso sarà richiesto un deposito cauzionale di €500,00.',
      q3: "La consegna e il ritiro dell'auto sono gratuiti?",
      a3: "Sì, la consegna e il ritiro del veicolo all'interno dei limiti della città sono inclusi nel prezzo. Per località fuori dal comune di Alghero contattaci per un preventivo.",
      q4: "Cos'è la copertura Super CDW?",
      a4: 'La Super CDW elimina completamente la franchigia in caso di danni al veicolo. È disponibile a €10,00 al giorno per la massima tranquillità.',
      q5: 'Posso estendere il noleggio una volta iniziato?',
      a5: 'Assolutamente sì. Basta contattarci il prima possibile per comunicare la nuova data di rientro, così aggiorniamo la copertura assicurativa e verifichiamo la disponibilità.',
      q6: "Cosa succede se riconsegno l'auto senza fare il pieno?",
      a6: 'Verranno addebitati i costi del carburante mancante più un supplemento di servizio rifornimento pari a €18,00.',
      q7: 'Posso portare il veicolo fuori dalla Sardegna?',
      a7: "No, l'utilizzo è consentito esclusivamente in Sardegna. Il superamento di questo limite comporta la decadenza di tutte le coperture assicurative.",
      q8: 'Cosa devo portare al momento del ritiro del veicolo?',
      a8: "Patente di guida valida, documento d'identità, carta di credito intestata al conducente e codice fiscale.",
    },
    // Pagina Condizioni
    conditions: {
      label: 'Noleggio',
      heroTitle: 'Condizioni di Noleggio',
      heroSubtitle: 'Tutto quello che devi sapere prima di noleggiare il tuo veicolo con noi.',
      paymentTitle: 'Pagamento',
      paymentText:
        "Il pagamento del servizio di noleggio viene effettuato alla consegna dell'autovettura. Vengono accettate le principali carte di credito (Visa e MasterCard) oppure contanti.",
      taxesTitle: 'Tasse',
      taxesText:
        'Tutti i prezzi indicati sono da intendersi comprensivi di IVA 22% se non diversamente specificato.',
      fuelTitle: 'Carburante',
      fuelText:
        'Il costo del carburante è a carico del cliente. Se il veicolo viene affidato con il pieno e riconsegnato senza, verrà addebitato il costo dei litri mancanti più un costo di servizio di rifornimento pari a €18,00.',
      minAgeTitle: 'Età minima di accessibilità al nolo',
      minAgeText:
        "21 anni con patente di cat. B in corso di validità ed emessa da almeno 1 anno. Non è possibile noleggiare l'autovettura a clienti al di sotto dei 21 anni.",
      scdwTitle: 'Super CDW (SCDW)',
      scdwText:
        "La copertura Super CDW costituisce l'esonero da ogni responsabilità per danni al veicolo con conseguente eliminazione della franchigia. Tutti i nostri prezzi sono inclusivi della Super CDW.",
      deliveryTitle: 'Consegna e ripresa',
      deliveryText:
        "Entro i limiti della città la consegna e la ripresa dell'autovettura è inclusa nel prezzo. Per altre località si prega di informarsi presso i nostri uffici.",
      extensionTitle: 'Estensione del noleggio',
      extensionText:
        "Se il cliente volesse prolungare il noleggio oltre i termini prefissati, ne deve dare immediata comunicazione alla stazione di noleggio per permettere l'estensione della copertura assicurativa.",
      documentsTitle: 'Smarrimento documenti e rottura chiavi',
      documentsText:
        "Lo smarrimento dei documenti dell'autovettura comporterà una penale di €300,00. Lo smarrimento, rottura o furto delle chiavi comporterà anch'esso una penale di €300,00.",
      note: 'Per ulteriori informazioni o chiarimenti sulle condizioni di noleggio, non esitare a contattarci. Il nostro team è disponibile 24/7 per assisterti.',
    },
  },
  en: {
    // Header
    header: {
      schedule: 'Mon-Sat: 8:30 AM - 7:00 PM | Sun: 8:30 AM - 12:30 PM',
    },
    // Navigation
    nav: {
      home: 'Home',
      rates: 'Rates',
      contacts: 'Contacts',
      conditions: 'Rental conditions',
    },
    // Home Page
    home: {
      heroTitle: 'Rent a Car Express',
      heroSubtitle: 'Alghero - Sardinia',
      discoverRates: 'Discover Rates',
      contactUs: 'Contact Us',
      yearsExperience: 'Years of Experience',
      assistance: 'Assistance',
      scroll: 'Scroll',
      aboutLabel: 'Our Story',
      aboutTitle: 'About Us',
      aboutSubtitle: 'Your ideal partner for traveling in Sardinia',
      aboutCompany: 'Rent a Car Express',
      aboutCompanySubtitle: 'Your trusted car rental in Alghero',
      aboutDescription:
        'Rent a Car Express is a car rental company operating in Sardinia and particularly in Alghero. We offer car rental services without a driver.',
      aboutFeature1Title: 'Professional Rental',
      aboutFeature1Text:
        'Cars without driver from the best brands on the national market, with assistance from highly specialized personnel',
      aboutFeature2Title: 'Flexible Delivery',
      aboutFeature2Text:
        'Vehicle delivery and pickup are carried out at your location without additional charges, even outside office hours and on holidays',
      aboutFeature3Title: 'Secure Payments',
      aboutFeature3Text:
        'Agreement with major credit cards: Visa and MasterCard for your maximum convenience',
      aboutFeature4Title: 'Always Available',
      aboutFeature4Text:
        'Continuous assistance 24 hours a day, 7 days a week to guarantee peace of mind throughout your rental',
      aboutImageTitle: 'Experience and Reliability',
      aboutImageSubtitle: 'Your partner to discover Sardinia',
      whyUsLabel: 'Our Strengths',
      whyUsTitle: 'Why Choose Us',
      whyUsSubtitle: 'Quality, reliability and convenience at your service',
      servicePaymentTitle: 'Easy Payments',
      servicePaymentText: 'We accept all major credit cards: Visa and MasterCard',
      serviceAssistanceTitle: '24/7 Assistance',
      serviceAssistanceText: 'Continuous support 7 days a week, always at your service',
      howItWorksLabel: 'Simple Process',
      howItWorksTitle: 'How It Works',
      howItWorksSubtitle: 'Renting a car has never been so easy',
      step1Title: 'Choose the Vehicle',
      step1Text: 'Select the car that best suits your needs from our catalog',
      step2Title: 'Contact Us',
      step2Text: 'Call us or send us a message, we will respond quickly',
      step3Title: 'Pick Up and Go',
      step3Text: 'Come pick up your car and start your adventure right away',
    },
    // Rates Page
    rates: {
      heroTag: 'Unbeatable Prices',
      heroTitle: 'Our',
      heroSubtitle: 'Rates',
      heroDescription:
        'Transparent and competitive prices for every need. No hidden costs, maximum flexibility!',
      transparentPrices: 'Transparent prices',
      freeCancellation: 'Free cancellation',
      noHiddenCosts: 'No hidden costs',
      discoverOffers: 'Discover our offers',
      plansLabel: 'Choose Your Plan',
      plansTitle: 'Rental Plans',
      plansSubtitle: 'Find the perfect solution for your travel needs',
      mostChosen: 'MOST POPULAR',
      perDay: 'per day',
      bookNow: 'Book Now',
      economyName: 'Economy',
      economyFeature1: 'Compact cars',
      economyFeature2: 'Air conditioning',
      economyFeature3: 'Manual transmission',
      economyFeature4: 'Basic insurance',
      economyFeature5: '200 km included',
      comfortName: 'Comfort',
      comfortFeature1: 'Mid-size sedans',
      comfortFeature2: 'Automatic climate',
      comfortFeature3: 'Automatic transmission',
      comfortFeature4: 'Premium insurance',
      comfortFeature5: 'Unlimited km',
      comfortFeature6: 'GPS included',
      premiumName: 'Premium',
      premiumFeature1: 'SUVs and luxury cars',
      premiumFeature2: 'Full optional',
      premiumFeature3: 'Automatic transmission',
      premiumFeature4: 'Comprehensive insurance',
      premiumFeature5: 'Unlimited km',
      premiumFeature6: 'GPS and child seats included',
      premiumFeature7: 'Priority service',
      priceNote: 'All prices include VAT. Request a custom quote for rentals over 30 days.',
      extrasLabel: 'Customize',
      extrasTitle: 'Extra Services',
      extrasSubtitle: 'Add comfort and safety to your rental with our optional services',
      gpsNavigator: 'GPS Navigator',
      childSeat: 'Child seat',
      additionalDriver: 'Additional driver',
      snowChains: 'Snow chains',
      ctaTitle: 'Need a custom quote?',
      ctaSubtitle: 'Contact us for tailored offers, corporate solutions and group quotes',
      requestQuote: 'Request Quote',
      happyClients: 'Happy Clients',
      reviews: 'Reviews',
      support: 'Support',
    },
    // Footer
    footer: {
      tagline:
        'Your trusted partner for car rental in Sardinia. Professional services in Alghero and throughout the region.',
      navigation: 'Navigation',
      contactsTitle: 'Contacts',
      openingHours: 'Opening Hours',
      mondayToSaturday: 'Monday - Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
      address: 'Via S. Satta, 52 - Alghero (SS)',
      copyright: '© 2025 Rent a Car Express. All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
      cookies: 'Cookies',
    },
    // Contacts Page
    contacts: {
      heroTag: "We're Here for You",
      heroTitle: 'Contact Us',
      heroSubtitle: 'Now!',
      heroDescription: "Choose your preferred way to reach us. We'll respond as soon as possible!",
      channelsTag: 'Contact Channels',
      channelsTitle: 'How Would You Like to Contact Us?',
      phone: 'Phone',
      phoneSchedule: 'Mon-Sat: 8:30 AM - 7:00 PM | Sun: 8:30 AM - 12:30 PM',
      email: 'Email',
      emailResponse: 'Response within 24h',
      whatsapp: 'WhatsApp',
      whatsappAssistance: 'Quick assistance',
      qrCodeTitle: 'Scan and Chat on WhatsApp',
      qrCodeDescription:
        'Frame the QR code with your smartphone camera to start an immediate conversation with us on WhatsApp!',
      scanNow: 'Scan Now',
      locationTag: 'Where We Are',
      locationTitle: '📍 Our Location',
      locationSubtitle: 'Visit us in Alghero, Sardinia',
      addressFull: 'Full Address',
      addressDetails: 'Via Sebastiano Satta, 52<br />07041 Alghero (SS) - Sardinia, Italy',
      openingHoursTitle: 'Opening Hours',
      openingHoursDetails: 'Monday - Saturday: 08:30 - 13:00 / 16:00 - 19:00',
      premiumServices: 'Premium Services',
      premiumDetails: 'Free delivery and pickup<br />24/7 assistance in Sardinia',
      conditionsTag: 'Useful Information',
      conditionsTitle: '📋 Rental Conditions',
      conditionsSubtitle:
        'Everything you need to know to rent with us in a simple and transparent way',
      payment: 'Payment',
      paymentText:
        'Payment for the rental service is made upon vehicle delivery. Major credit cards (Visa and MasterCard) or cash are accepted.',
      deposit: '💰 Security Deposit:',
      depositText: 'In case of cash payment, a security deposit of',
      depositAmount: '€ 500.00',
      paymentNote:
        'The applied rate is guaranteed for continuous rentals until the expected return date in the rental agreement.',
      taxes: 'Taxes',
      taxesText: 'All prices indicated are inclusive of 22% VAT unless otherwise specified.',
      fuel: 'Fuel',
      fuelText: 'Fuel costs are the responsibility of the customer.',
      fuelWarning: '⚠️ Warning:',
      fuelWarningText:
        'If the vehicle is delivered with a full tank and returned without it, in addition to the cost of missing liters, a refueling service charge of',
      fuelCost: '€ 15.00',
      minAge: 'Minimum Age',
      minAgeText:
        "21 years old with a valid category B driver's license issued for at least 1 year.",
      minAgeNote: 'It is not possible to rent the vehicle to customers under 21 years old.',
      superCDW: 'Super CDW (SCDW)',
      superCDWText:
        'The optional Super CDW coverage provides exemption from liability for vehicle damage with consequent elimination of the compensation penalty (deductible).',
      superCDWCost: '✨ Cost:',
      superCDWCostAmount: '€ 10.00 per day',
      superCDWNote:
        'Super CDW coverage does not cover damage to the roof, tires, and undercarriage, nor damage caused by intentional acts or failure to assist.',
      documentation: 'Required Documentation',
      docLicense: "✓ Valid driver's license",
      docID: '✓ Valid identity document',
      docCard: "✓ Credit card in the driver's name",
      docFiscalCode: '✓ Tax code',
      penalties: 'Liability Penalties (Deductibles)',
      penaltiesText: 'In case of damage or theft, the following deductibles apply:',
      groupsAB: 'Groups A-B',
      groupCE: 'Group C-E',
      groupF: 'Group F',
      groupG: 'Group G',
      penaltiesNote: 'Deductibles apply for each individual damage or theft event.',
      additionalDrivers: 'Additional Drivers',
      additionalDriversText: 'It is possible to add extra drivers to the rental contract.',
      dailyCost: 'Daily cost',
      additionalDriversNote: 'Each additional driver must meet the age and license requirements.',
      territorialLimits: 'Territorial Limits',
      territorialLimitsText:
        'The use of the vehicle outside the territory of the Sardinia Region is expressly prohibited.',
      territorialLimitsWarning: '⚠️ Important:',
      territorialLimitsWarningText:
        'Violation of this limit results in the loss of all insurance coverage and possible penalties.',
      maintenanceDamages: 'Maintenance and Damages',
      maintenanceDamagesText:
        'The customer is responsible for routine maintenance during the rental (checking oil, water levels, tire pressure).',
      assistanceService: '💡 Assistance Service:',
      assistanceServiceText:
        'In case of technical problems, immediately contact our 24/7 assistance service.',
      cancellationModifications: 'Cancellation and Modifications',
      cancellationModificationsText:
        'You can cancel or modify your reservation free of charge up to 48 hours before the start of the rental.',
      cancellationPenalties: '⚠️ Penalties:',
      cancellationPenaltiesText:
        'Cancellations or modifications within 48 hours of the start of the rental may be subject to penalties.',
      privacyTag: 'Privacy Policy',
      privacyTitle: '🔐 Your Privacy is Important',
      privacySubtitle: 'How we handle your personal data in compliance with GDPR',
      privacyGuarantee: 'Total Data Protection',
      privacyGuaranteeText:
        'We process your personal data with the utmost care and security, in full compliance with the General Data Protection Regulation (GDPR) and Legislative Decree 196/2003. Your privacy is our priority.',
      privacyDataCollected: 'What data we collect',
      privacyName: 'Name and Surname',
      privacyCompany: 'Company name (if specified)',
      privacyPhone: 'Phone number (if specified)',
      privacyEmail: 'Email address',
      privacyRequest: 'Information entered as a request',
      privacyTreatment: 'Processing methods and duration',
      privacyTreatmentText:
        'Processing is carried out through collection, processing and comparison of data through IT or telematic tools with appropriate security measures to ensure confidentiality. Data remains in our possession for the time strictly necessary for business activities and possible management of legal disputes, in compliance with current regulations.',
      privacyRights: 'Data subject rights',
      privacyRightsText:
        'You can exercise the rights provided by art.7 of Legislative Decree n°196/03 and GDPR, including access, deletion, updating, correction or integration of data by writing to our office address or via email.',
      privacyQuestions: 'Questions about Privacy?',
      privacyQuestionsText:
        'Our team is at your disposal for any clarification regarding the processing of your personal data.',
      privacyPurpose: 'Purpose of Processing',
      privacyPurposeText:
        'The data collected is used exclusively to: <strong>manage reservations, provide customer assistance, improve our services and fulfill contractual and legal obligations</strong>. We never share your data with third parties without your explicit consent.',
      dataSecurity: 'Data Security',
      dataSecurityText:
        'We use <strong>advanced encryption technologies</strong> and state-of-the-art security measures to protect your data from unauthorized access, loss or alteration. Our systems are constantly monitored and updated.',
      legalHeadquarters: 'Legal Headquarters',
    },
    // FAQ
    faq: {
      sectionLabel: 'Frequently asked questions',
      sectionTitle: 'Have a question?',
      sectionSubtitle: 'Answers to the most common questions about our rental service.',
      q1: 'What is the minimum age to rent a car?',
      a1: 'The minimum age is 21 years. The driver must hold a valid category B driving licence that has been issued for at least 1 year.',
      q2: 'What payment methods do you accept?',
      a2: 'We accept the main credit cards Visa and MasterCard. Cash payments are also accepted; in that case a security deposit of €500.00 will be required.',
      q3: 'Is vehicle delivery and pickup free of charge?',
      a3: 'Yes, delivery and pickup within the city limits are included in the price. For locations outside the municipality of Alghero, please contact us for a quote.',
      q4: 'What is Super CDW coverage?',
      a4: 'Super CDW completely eliminates the excess in the event of damage to the vehicle. It is available at €10.00 per day for complete peace of mind.',
      q5: 'Can I extend the rental once it has started?',
      a5: 'Absolutely. Just contact us as soon as possible to communicate the new return date, so we can update the insurance coverage and check availability.',
      q6: 'What happens if I return the car without a full tank?',
      a6: 'The cost of the missing fuel plus a refuelling service supplement of €18.00 will be charged.',
      q7: 'Can I take the vehicle outside Sardinia?',
      a7: 'No, use of the vehicle is permitted exclusively within Sardinia. Exceeding this limit results in the loss of all insurance coverage.',
      q8: 'What do I need to bring when picking up the vehicle?',
      a8: "A valid driving licence, identity document, credit card in the driver's name and tax code.",
    },
    // Conditions Page
    conditions: {
      label: 'Rental',
      heroTitle: 'Rental Terms & Conditions',
      heroSubtitle: 'Everything you need to know before renting a vehicle with us.',
      paymentTitle: 'Payment',
      paymentText:
        'Payment for the rental service is made upon delivery of the vehicle. We accept major credit cards (Visa and MasterCard) or cash.',
      taxesTitle: 'Taxes',
      taxesText: 'All prices listed are inclusive of 22% VAT unless otherwise stated.',
      fuelTitle: 'Fuel',
      fuelText:
        'Fuel costs are the responsibility of the customer. If the vehicle is provided with a full tank and returned without, the cost of the missing fuel plus a €18.00 refuelling service fee will be charged.',
      minAgeTitle: 'Minimum rental age',
      minAgeText:
        '21 years of age with a valid category B driving licence held for at least 1 year. It is not possible to rent a vehicle to customers under 21 years of age.',
      scdwTitle: 'Super CDW (SCDW)',
      scdwText:
        'Super CDW coverage exempts the renter from all liability for vehicle damage, eliminating the excess charge. All our prices include Super CDW.',
      deliveryTitle: 'Delivery & collection',
      deliveryText:
        'Delivery and collection within city limits is included in the price. For other locations, please contact our offices.',
      extensionTitle: 'Rental extension',
      extensionText:
        'If the customer wishes to extend the rental beyond the agreed period, they must immediately notify the rental station to allow for insurance coverage extension.',
      documentsTitle: 'Lost documents & keys',
      documentsText:
        'Loss of vehicle documents will incur a penalty of €300.00. Loss, breakage or theft of keys will also incur a penalty of €300.00.',
      note: 'For further information or clarification on our rental conditions, please do not hesitate to contact us. Our team is available 24/7 to assist you.',
    },
  },
  es: {
    // Header
    header: {
      schedule: 'Lun - Sáb: 08:30 - 19:00 | Dom: 08:30 - 12:30',
    },
    // Navegación
    nav: {
      home: 'Inicio',
      rates: 'Tarifas',
      contacts: 'Contactos',
      conditions: 'Condiciones de alquiler',
    },
    // Página de Inicio
    home: {
      heroTitle: 'Rent a Car Express',
      heroSubtitle: 'Alghero - Cerdeña',
      discoverRates: 'Descubre las Tarifas',
      contactUs: 'Contáctanos',
      yearsExperience: 'Años de Experiencia',
      assistance: 'Asistencia',
      scroll: 'Desplázate',
      aboutLabel: 'Nuestra Historia',
      aboutTitle: 'Quiénes Somos',
      aboutSubtitle: 'El socio ideal para tu viaje en Cerdeña',
      aboutCompany: 'Rent a Car Express',
      aboutCompanySubtitle: 'Tu alquiler de coches de confianza en Alghero',
      aboutDescription:
        'Rent a Car Express es una empresa de alquiler de coches que opera en Cerdeña y en particular en Alghero. Ofrecemos servicios de alquiler de coches sin conductor.',
      aboutFeature1Title: 'Alquiler Profesional',
      aboutFeature1Text:
        'Automóviles sin conductor de las mejores marcas del mercado nacional, con asistencia de personal altamente especializado',
      aboutFeature2Title: 'Entrega Flexible',
      aboutFeature2Text:
        'La entrega y recogida del vehículo se realizan a domicilio sin cargos adicionales, incluso fuera del horario de oficina y en días festivos',
      aboutFeature3Title: 'Pagos Seguros',
      aboutFeature3Text:
        'Convenio con las principales tarjetas de crédito: Visa y MasterCard para tu máxima comodidad',
      aboutFeature4Title: 'Siempre Disponibles',
      aboutFeature4Text:
        'Asistencia continua las 24 horas del día, los 7 días de la semana para garantizarte tranquilidad durante todo el alquiler',
      aboutImageTitle: 'Experiencia y Confiabilidad',
      aboutImageSubtitle: 'Tu socio para descubrir Cerdeña',
      whyUsLabel: 'Nuestras Fortalezas',
      whyUsTitle: 'Por Qué Elegirnos',
      whyUsSubtitle: 'Calidad, confiabilidad y conveniencia a tu servicio',
      servicePaymentTitle: 'Pagos Fáciles',
      servicePaymentText: 'Aceptamos todas las principales tarjetas de crédito: Visa y MasterCard',
      serviceAssistanceTitle: 'Asistencia 24/7',
      serviceAssistanceText: 'Soporte continuo 7 días a la semana, siempre a tu servicio',
      howItWorksLabel: 'Proceso Simple',
      howItWorksTitle: 'Cómo Funciona',
      howItWorksSubtitle: 'Alquilar un coche nunca ha sido tan fácil',
      step1Title: 'Elige el Vehículo',
      step1Text: 'Selecciona el coche que mejor se adapte a tus necesidades de nuestro catálogo',
      step2Title: 'Contáctanos',
      step2Text: 'Llámanos o envíanos un mensaje, responderemos rápidamente',
      step3Title: 'Recoge y Vete',
      step3Text: 'Ven a recoger tu coche y comienza tu aventura de inmediato',
    },
    // Página de Tarifas
    rates: {
      heroTag: 'Precios Inmejorables',
      heroTitle: 'Nuestras',
      heroSubtitle: 'Tarifas',
      heroDescription:
        'Precios transparentes y competitivos para cada necesidad. ¡Sin costos ocultos, máxima flexibilidad!',
      transparentPrices: 'Precios transparentes',
      freeCancellation: 'Cancelación gratuita',
      noHiddenCosts: 'Sin costos ocultos',
      discoverOffers: 'Descubre nuestras ofertas',
      plansLabel: 'Elige Tu Plan',
      plansTitle: 'Planes de Alquiler',
      plansSubtitle: 'Encuentra la solución perfecta para tus necesidades de viaje',
      mostChosen: 'MÁS ELEGIDO',
      perDay: 'por día',
      bookNow: 'Reserva Ahora',
      economyName: 'Economy',
      economyFeature1: 'Coches compactos',
      economyFeature2: 'Aire acondicionado',
      economyFeature3: 'Cambio manual',
      economyFeature4: 'Seguro básico',
      economyFeature5: '200 km incluidos',
      comfortName: 'Comfort',
      comfortFeature1: 'Sedanes medianos',
      comfortFeature2: 'Clima automático',
      comfortFeature3: 'Cambio automático',
      comfortFeature4: 'Seguro premium',
      comfortFeature5: 'Km ilimitados',
      comfortFeature6: 'GPS incluido',
      premiumName: 'Premium',
      premiumFeature1: 'SUVs y coches de lujo',
      premiumFeature2: 'Extras completos',
      premiumFeature3: 'Cambio automático',
      premiumFeature4: 'Seguro todo riesgo',
      premiumFeature5: 'Km ilimitados',
      premiumFeature6: 'GPS y sillas incluidas',
      premiumFeature7: 'Servicio prioritario',
      priceNote:
        'Todos los precios incluyen IVA. Solicita un presupuesto personalizado para alquileres de más de 30 días.',
      extrasLabel: 'Personaliza',
      extrasTitle: 'Servicios Extra',
      extrasSubtitle: 'Añade confort y seguridad a tu alquiler con nuestros servicios opcionales',
      gpsNavigator: 'Navegador GPS',
      childSeat: 'Silla para niños',
      additionalDriver: 'Conductor adicional',
      snowChains: 'Cadenas de nieve',
      ctaTitle: '¿Necesitas un presupuesto personalizado?',
      ctaSubtitle:
        'Contáctanos para ofertas a medida, soluciones empresariales y presupuestos para grupos',
      requestQuote: 'Solicitar Presupuesto',
      happyClients: 'Clientes Felices',
      reviews: 'Reseñas',
      support: 'Asistencia',
    },
    // Footer
    footer: {
      tagline:
        'Tu socio de confianza para el alquiler de coches en Cerdeña. Servicios profesionales en Alghero y en toda la región.',
      navigation: 'Navegación',
      contactsTitle: 'Contactos',
      openingHours: 'Horario de Apertura',
      mondayToSaturday: 'Lunes - Sábado',
      sunday: 'Domingo',
      closed: 'Cerrado',
      address: 'Via S. Satta, 52 - Alghero (SS)',
      copyright: '© 2025 Rent a Car Express. Todos los derechos reservados.',
      privacy: 'Privacidad',
      terms: 'Términos',
      cookies: 'Cookies',
    },
    // Página de Contactos
    contacts: {
      heroTag: 'Estamos Aquí para Ti',
      heroTitle: 'Contáctanos',
      heroSubtitle: '¡Ya!',
      heroDescription:
        'Elige la forma que prefieras para contactarnos. ¡Te responderemos lo antes posible!',
      channelsTag: 'Canales de Contacto',
      channelsTitle: '¿Cómo Prefieres Contactarnos?',
      phone: 'Teléfono',
      phoneSchedule: 'Lun - Sáb: 08:30 - 19:00 | Dom: 08:30 - 12:30',
      email: 'Email',
      emailResponse: 'Respuesta en 24h',
      whatsapp: 'WhatsApp',
      whatsappAssistance: 'Asistencia rápida',
      qrCodeTitle: 'Escanea y Chatea en WhatsApp',
      qrCodeDescription:
        '¡Escanea el código QR con la cámara de tu smartphone para iniciar una conversación inmediata con nosotros en WhatsApp!',
      scanNow: 'Escanea Ahora',
      locationTag: 'Dónde Estamos',
      locationTitle: '📍 Nuestra Sede',
      locationSubtitle: 'Visítanos en Alghero, Cerdeña',
      addressFull: 'Dirección Completa',
      addressDetails: 'Via Sebastiano Satta, 52<br />07041 Alghero (SS) - Cerdeña, Italia',
      openingHoursTitle: 'Horario de Apertura',
      openingHoursDetails: 'Lunes - Sábado: 08:30 - 13:00 / 16:00 - 19:00',
      premiumServices: 'Servicios Premium',
      premiumDetails: 'Entrega y recogida gratuitas<br />Asistencia 24/7 en Cerdeña',
      conditionsTag: 'Información Útil',
      conditionsTitle: '📋 Condiciones de Alquiler',
      conditionsSubtitle:
        'Todo lo que necesitas saber para alquilar con nosotros de forma simple y transparente',
      payment: 'Pago',
      paymentText:
        'El pago del servicio de alquiler se realiza en la entrega del vehículo. Se aceptan las principales tarjetas de crédito (Visa y MasterCard) o efectivo.',
      deposit: '💰 Depósito de Garantía:',
      depositText: 'En caso de pago en efectivo, se deberá depositar una garantía de',
      depositAmount: '€ 500,00',
      paymentNote:
        'La tarifa aplicada está garantizada para alquileres continuos hasta la fecha de devolución prevista en el contrato de alquiler.',
      taxes: 'Impuestos',
      taxesText:
        'Todos los precios indicados incluyen IVA del 22% a menos que se especifique lo contrario.',
      fuel: 'Combustible',
      fuelText: 'El costo del combustible corre a cargo del cliente.',
      fuelWarning: '⚠️ Atención:',
      fuelWarningText:
        'Si el vehículo se entrega con el depósito lleno y se devuelve sin él, además del costo de los litros faltantes, se cobrará un cargo por servicio de repostaje de',
      fuelCost: '€ 15,00',
      minAge: 'Edad Mínima',
      minAgeText:
        '21 años con licencia de conducir cat. B válida y expedida desde hace al menos 1 año.',
      minAgeNote: 'No es posible alquilar el vehículo a clientes menores de 21 años.',
      superCDW: 'Super CDW (SCDW)',
      superCDWText:
        'La cobertura opcional Super CDW constituye la exención de toda responsabilidad por daños al vehículo con la consiguiente eliminación de la penalización compensatoria (franquicia).',
      superCDWCost: '✨ Costo:',
      superCDWCostAmount: '€ 10,00 por día',
      superCDWNote:
        'La garantía Super CDW no cubre daños al techo, neumáticos y bajos del vehículo, ni daños causados por actos intencionados u omisión de asistencia.',
      documentation: 'Documentación Necesaria',
      docLicense: '✓ Licencia de conducir válida',
      docID: '✓ Documento de identidad válido',
      docCard: '✓ Tarjeta de crédito a nombre del conductor',
      docFiscalCode: '✓ Código fiscal',
      penalties: 'Penalizaciones por Responsabilidad (Franquicias)',
      penaltiesText: 'En caso de daños o robo, se aplican las siguientes franquicias:',
      groupsAB: 'Grupos A-B',
      groupCE: 'Grupo C-E',
      groupF: 'Grupo F',
      groupG: 'Grupo G',
      penaltiesNote: 'Las franquicias se aplican por cada evento individual de daño o robo.',
      additionalDrivers: 'Conductores Adicionales',
      additionalDriversText: 'Es posible agregar conductores adicionales al contrato de alquiler.',
      dailyCost: 'Costo diario',
      additionalDriversNote:
        'Cada conductor adicional debe cumplir con los requisitos de edad y licencia.',
      territorialLimits: 'Límites Territoriales',
      territorialLimitsText:
        'El uso del vehículo fuera del territorio de la Región de Cerdeña está expresamente prohibido.',
      territorialLimitsWarning: '⚠️ Importante:',
      territorialLimitsWarningText:
        'La violación de este límite resulta en la pérdida de toda cobertura de seguro y posibles sanciones.',
      maintenanceDamages: 'Mantenimiento y Daños',
      maintenanceDamagesText:
        'El cliente es responsable del mantenimiento rutinario durante el alquiler (verificación de niveles de aceite, agua, presión de neumáticos).',
      assistanceService: '💡 Servicio de Asistencia:',
      assistanceServiceText:
        'En caso de problemas técnicos, contacte inmediatamente nuestro servicio de asistencia 24/7.',
      cancellationModifications: 'Cancelación y Modificaciones',
      cancellationModificationsText:
        'Puede cancelar o modificar su reserva de forma gratuita hasta 48 horas antes del inicio del alquiler.',
      cancellationPenalties: '⚠️ Penalizaciones:',
      cancellationPenaltiesText:
        'Las cancelaciones o modificaciones dentro de las 48 horas del inicio del alquiler pueden estar sujetas a penalizaciones.',
      privacyTag: 'Política de Privacidad',
      privacyTitle: '🔐 Tu Privacidad es Importante',
      privacySubtitle: 'Cómo tratamos tus datos personales en cumplimiento con GDPR',
      privacyGuarantee: 'Protección Total de Datos',
      privacyGuaranteeText:
        'Procesamos tus datos personales con el máximo cuidado y seguridad, en pleno cumplimiento con el Reglamento General de Protección de Datos (GDPR) y el Decreto Legislativo 196/2003. Tu privacidad es nuestra prioridad.',
      privacyDataCollected: 'Qué datos recopilamos',
      privacyName: 'Nombre y Apellido',
      privacyCompany: 'Nombre de la empresa (si se especifica)',
      privacyPhone: 'Número de teléfono (si se especifica)',
      privacyEmail: 'Dirección de email',
      privacyRequest: 'Información ingresada como solicitud',
      privacyTreatment: 'Modalidad y duración del tratamiento',
      privacyTreatmentText:
        'El tratamiento se realiza mediante recopilación, procesamiento y comparación de datos a través de herramientas informáticas o telemáticas con medidas de seguridad apropiadas para garantizar la confidencialidad. Los datos permanecen en nuestra posesión durante el tiempo estrictamente necesario para las actividades comerciales y la posible gestión de disputas legales, en cumplimiento de las regulaciones vigentes.',
      privacyRights: 'Derechos del interesado',
      privacyRightsText:
        'Es posible ejercer los derechos previstos por el art.7 del D.Lgs n°196/03 y el GDPR, incluido el acceso, eliminación, actualización, rectificación o integración de datos escribiendo a la dirección de nuestra sede o por correo electrónico.',
      privacyQuestions: '¿Preguntas sobre Privacidad?',
      privacyQuestionsText:
        'Nuestro equipo está a tu disposición para cualquier aclaración sobre el tratamiento de tus datos personales.',
      privacyPurpose: 'Finalidad del Procesamiento',
      privacyPurposeText:
        'Los datos recopilados se utilizan exclusivamente para: <strong>gestionar reservas, proporcionar asistencia al cliente, mejorar nuestros servicios y cumplir con obligaciones contractuales y legales</strong>. Nunca compartimos tus datos con terceros sin tu consentimiento explícito.',
      dataSecurity: 'Seguridad de Datos',
      dataSecurityText:
        'Utilizamos <strong>tecnologías de cifrado avanzadas</strong> y medidas de seguridad de vanguardia para proteger tus datos contra accesos no autorizados, pérdida o alteración. Nuestros sistemas son monitoreados y actualizados constantemente.',
      legalHeadquarters: 'Sede Legal',
    },
    // FAQ
    faq: {
      sectionLabel: 'Preguntas frecuentes',
      sectionTitle: '¿Tienes alguna duda?',
      sectionSubtitle:
        'Las respuestas a las preguntas más comunes sobre nuestro servicio de alquiler.',
      q1: '¿Cuál es la edad mínima para alquilar un coche?',
      a1: 'La edad mínima es 21 años. El conductor debe estar en posesión de un carnet de conducir categoría B en vigor, expedido hace al menos 1 año.',
      q2: '¿Qué métodos de pago aceptáis?',
      a2: 'Aceptamos las principales tarjetas de crédito Visa y MasterCard. También se puede pagar en efectivo; en ese caso se requerirá un depósito de garantía de €500,00.',
      q3: '¿La entrega y recogida del coche son gratuitas?',
      a3: 'Sí, la entrega y recogida del vehículo dentro de los límites del municipio están incluidas en el precio. Para localidades fuera de Alghero, contáctanos para un presupuesto.',
      q4: '¿Qué es la cobertura Super CDW?',
      a4: 'La Super CDW elimina completamente la franquicia en caso de daños al vehículo. Está disponible por €10,00 al día para tu máxima tranquilidad.',
      q5: '¿Puedo ampliar el alquiler una vez iniciado?',
      a5: 'Por supuesto. Solo tienes que contactarnos lo antes posible para comunicar la nueva fecha de devolución, así actualizamos la cobertura del seguro y verificamos la disponibilidad.',
      q6: '¿Qué pasa si devuelvo el coche sin llenar el depósito?',
      a6: 'Se cobrarán los costes del combustible faltante más un suplemento de servicio de repostaje de €18,00.',
      q7: '¿Puedo llevar el vehículo fuera de Cerdeña?',
      a7: 'No, el uso del vehículo está permitido exclusivamente en Cerdeña. Superar este límite conlleva la pérdida de todas las coberturas del seguro.',
      q8: '¿Qué debo llevar al recoger el vehículo?',
      a8: 'Carnet de conducir válido, documento de identidad, tarjeta de crédito a nombre del conductor y código fiscal.',
    },
    // Página Condiciones
    conditions: {
      label: 'Alquiler',
      heroTitle: 'Condiciones de Alquiler',
      heroSubtitle: 'Todo lo que necesitas saber antes de alquilar un vehículo con nosotros.',
      paymentTitle: 'Pago',
      paymentText:
        'El pago del servicio de alquiler se realiza en el momento de la entrega del vehículo. Se aceptan las principales tarjetas de crédito (Visa y MasterCard) o efectivo.',
      taxesTitle: 'Impuestos',
      taxesText:
        'Todos los precios indicados incluyen el IVA del 22% salvo indicación en contrario.',
      fuelTitle: 'Combustible',
      fuelText:
        'El coste del combustible corre a cargo del cliente. Si el vehículo se entrega con el depósito lleno y se devuelve vacío, se cobrarán los litros faltantes más un cargo de servicio de repostaje de €18,00.',
      minAgeTitle: 'Edad mínima para el alquiler',
      minAgeText:
        '21 años con carnet de conducir categoría B en vigor y expedido desde hace al menos 1 año. No es posible alquilar un vehículo a clientes menores de 21 años.',
      scdwTitle: 'Super CDW (SCDW)',
      scdwText:
        'La cobertura Super CDW exime al arrendatario de toda responsabilidad por daños al vehículo, eliminando la franquicia. Todos nuestros precios incluyen la Super CDW.',
      deliveryTitle: 'Entrega y recogida',
      deliveryText:
        'La entrega y recogida dentro del municipio está incluida en el precio. Para otras localidades, consulte con nuestras oficinas.',
      extensionTitle: 'Extensión del alquiler',
      extensionText:
        'Si el cliente desea prolongar el alquiler más allá del plazo acordado, debe comunicarlo de inmediato a la estación de alquiler para ampliar la cobertura del seguro.',
      documentsTitle: 'Extravío de documentos y llaves',
      documentsText:
        'La pérdida de los documentos del vehículo conllevará una penalización de €300,00. La pérdida, rotura o robo de las llaves también conllevará una penalización de €300,00.',
      note: 'Para más información o aclaraciones sobre las condiciones de alquiler, no dude en ponerse en contacto con nosotros. Nuestro equipo está disponible 24/7 para atenderle.',
    },
  },
}

// Funzione per cambiare lingua
function setLocale(locale) {
  if (translations[locale]) {
    currentLocale.value = locale
    localStorage.setItem('locale', locale)
  }
}

// Funzione per ottenere una traduzione
function t(key) {
  const keys = key.split('.')
  let value = translations[currentLocale.value]

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k]
    } else {
      return key // Ritorna la chiave se non trova la traduzione
    }
  }

  return value || key
}

// Composable
export function useI18n() {
  return {
    locale: computed(() => currentLocale.value),
    setLocale,
    t,
  }
}
