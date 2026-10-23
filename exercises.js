const exercises = [
    // --- PASSNINGSSPEL & TEKNIK ---
    {
        id: 1,
        title: "Passningsstafett med mottagning",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Spelarna står i led mitt emot varandra. Passning längs marken, mottagning med ytan/insidan och snabb överlämning till nästa."
    },
    {
        id: 2,
        title: "Rondellen 4 mot 1",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Fyra spelare håller bollen inom laget i en ruta (t.ex. 10x10m) medan en försvarare försöker bryta. Max två tillslag."
    },
    {
        id: 3,
        title: "Väggspel i par",
        category: "Passningsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Spelare A driver bollen mot spelare B, spelar ett väggspel (ett-två) och tar emot på bortre sidan."
    },
    {
        id: 4,
        title: "Yttersidespassningar i rörelse",
        category: "Teknik",
        ageGroup: "P13-P14",
        link: "",
        description: "Två och två i rörelse framåt längs långsidan, fokus på snabba passningar med yttersidan utan att tappa fart."
    },
    {
        id: 5,
        title: "Driva och vända (Cruyff-fint)",
        category: "Teknik",
        ageGroup: "P10-P12",
        link: "",
        description: "Spelare driver mot kon, gör en Cruyff-fint och driver tillbaka. Fokus på kroppsfint."
    },

    // --- ANFALSSPEL & AVSLUT ---
    {
        id: 6,
        title: "Avslutsserie efter instick",
        category: "Avslut",
        ageGroup: "P11-P14",
        link: "",
        description: "Yttermittfält spelar in till central anfallare som tar emot och avslutar direkt på mål inom straffområdet."
    },
    {
        id: 7,
        title: "Spel 2 mot 1 till avslut",
        category: "Anfallsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Anfallande par driver mot en back. Målet är att spela bort backen genom ett snabbt instick eller överlapp."
    },
    {
        id: 8,
        title: "Inlägg och avslut på bortre",
        category: "Avslut",
        ageGroup: "P12-P14",
        link: "",
        description: "Ytter spelar in boll i straffområdet mot två anfallare som löper mot första respektive bortre stolpen."
    },
    {
        id: 9,
        title: "3 mot 2 på yta med snabbt anfall",
        category: "Anfallsspel",
        ageGroup: "P13-P14",
        link: "",
        description: "Övertagssituation där anfallarna snabbt måste utnyttja ytan innan hemspringande försvarare hinner med."
    },
    {
        id: 10,
        title: "Skottvett från distans",
        category: "Avslut",
        ageGroup: "P12-P14",
        link: "",
        description: "Mottagning följt av direkt avslut utanför straffområdet efter passning snett inifrån bakåt."
    },

    // --- FÖRSVARSSPEL ---
    {
        id: 11,
        title: "Press och täckning i par",
        category: "Försvar",
        ageGroup: "P11-P14",
        link: "",
        description: "En försvarare sätter press på bollhållare medan den andra täckar ytan bakom. Växla roller vid brytning."
    },
    {
        id: 12,
        title: "1 mot 1 defensivt i korridor",
        category: "Försvar",
        ageGroup: "P10-P13",
        link: "",
        description: "Anfallare försöker komma förbi försvarare i en 10 meter lång korridor. Fokus på låg tyngdpunkt och tålamod."
    },
    {
        id: 13,
        title: "Brytpunkt och säkra ytor",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Fyra backar mot tre anfallare. Träna på att hålla linjen och kommunicera när bollen flyttas i sidled."
    },

    // --- FYSIK & RÖRELSE ---
    {
        id: 14,
        title: "Koordinationsstege och snabba fötter",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Olika fotisättningar i stege följt av 10 meters maximal acceleration."
    },
    {
        id: 15,
        title: "Rörlighet och dynamisk uppvärmning",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Genomgång av höftöppnare, utfallsteg och lätta sidledsförflyttningar inför träningspasset."
    }
];
// --- NÄSTA BATCH: PASSNINGSSPEL & TEKNIK ---
    {
        id: 16,
        title: "Triangelspel med väggpassning",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Tre spelare i en triangel där bollen spelas på utsidan med max två tillslag för att träna uppspelsfasen."
    },
    {
        id: 17,
        title: "Kvadraten 5 mot 2",
        category: "Passningsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Fem spelare rullar bollen inom laget i en 12x12-metersruta mot två jagande försvarare."
    },
    {
        id: 18,
        title: "Driva och vända med yttersida",
        category: "Teknik",
        ageGroup: "P10-P12",
        link: "",
        description: "Spelare driver bollen framåt, stannar upp och vänder runt med yttersidan av foten för att snabbt byta riktning."
    },
    {
        id: 19,
        title: "Direktpassningsstafett",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Spelare i led slår tillbakapassningar på ett tillslag till nästa spelare som direkt sätter fart framåt."
    },
    {
        id: 20,
        title: "Vända bort motståndare i trång yta",
        category: "Teknik",
        ageGroup: "P13-P14",
        link: "",
        description: "Träna på att skärma av bollen med kroppen (täckning) och vända bort en passiv försvarare."
    },

    // --- ANFALSSPEL & AVSLUT ---
    {
        id: 21,
        title: "Omställning 2 mot 1 med avslut",
        category: "Anfallsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Snabb kontring där två anfallare driver mot en ensam back och ska avsluta inom 10 sekunder."
    },
    {
        id: 22,
        title: "Inläggsspel med tre löpare",
        category: "Avslut",
        ageGroup: "P12-P14",
        link: "",
        description: "Yttermittfältare slår inlägg mot första stolpen, straffpunkten och bortre ytan där tre anfallare fyller på."
    },
    {
        id: 23,
        title: "Skott efter mottagning i djupled",
        category: "Avslut",
        ageGroup: "P13-P14",
        link: "",
        description: "Lång boll i djupet, mottagning i fart följt av snabbt avslut mot mål innan målvakten hunnit ut."
    },
    {
        id: 24,
        title: "Spel 3 mot 3 plus väggspelare",
        category: "Anfallsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Smålagsspel där anfallande lag får använda två neutrala väggspelare på långsidorna för att skapa övertag."
    },
    {
        id: 25,
        title: "Distansskott efter retur",
        category: "Avslut",
        ageGroup: "P12-P14",
        link: "",
        description: "Skott utifrån följt av snabb måljakt på eventuell retur eller hovring från målvakt."
    },

    // --- FÖRSVARSSPEL ---
    {
        id: 26,
        title: "1 mot 1 defensiv i sidled",
        category: "Försvar",
        ageGroup: "P10-P13",
        link: "",
        description: "Försvarare möter anfallare som kommer i sidled. Fokus på att styra utåt mot sidlinjen."
    },
    {
        id: 27,
        title: "Presspel och zonförsvar 4 mot 4",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Träna försvarslinjens samspel och kommunikation i att flytta i sidled och höjdled som ett lag."
    },
    {
        id: 28,
        title: "Återerövring direkt efter bolltapp",
        category: "Försvar",
        ageGroup: "P12-P14",
        link: "",
        description: "Direkt press på bollhållaren och närmaste ytor inom 5 sekunder efter förlorad boll i spel 3 mot 3."
    },
    {
        id: 29,
        title: "Brytpunkt i centrala ytor",
        category: "Försvar",
        ageGroup: "P11-P14",
        link: "",
        description: "Försvarare tränar på att bryta instick centralt mellan backlinje och mittfält."
    },
    {
        id: 30,
        title: "Markering vid fasta situationer",
        category: "Försvar",
        ageGroup: "P12-P14",
        link: "",
        description: "Övning på man-mot-man-markering i eget straffområde vid hörnor och frisparkar."
    },

    // --- FYSIK & RÖRELSE ---
    {
        id: 31,
        title: "Intervalllöpning med riktningsförändring",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Korta maximala löpningar mellan koner med 180-graders vändningar för att simulera matchtempo."
    },
    {
        id: 32,
        title: "Bål- och styrkestationer för fotboll",
        category: "Fysik",
        ageGroup: "P11-P14",
        link: "",
        description: "Cirkelträning med plankan, upphopp, utfallsteg och sidoplanka för att stärka fotbollsmuskulaturen."
    },
    {
        id: 33,
        title: "Snabba fötter i konbana",
        category: "Fysik",
        ageGroup: "P10-P13",
        link: "",
        description: "Intensiv fotarbetsövning genom tätt placerade koner följd av 15 meters rusning."
    },
    {
        id: 34,
        title: "Koordination med balansplatta/fotboll",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Balansövningar på ett ben med lätt passning eller mottagning av boll för att förebygga fotledsskador."
    },
    {
        id: 35,
        title: "Agilitybana med bollkontroll",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Slalomlöpning runt häckar och koner med bollen klistrad vid fötterna på tid."
    },

    // --- SPELÖVNINGAR & SMÅLAGSPSPEL ---
    {
        id: 36,
        title: "Smålagsspel 3 mot 3 med fyra små mål",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Inget lag har en fast målvakt. Mål kan göras i två riktningar för att tvinga fram snabba omställningar."
    },
    {
        id: 37,
        title: "Avslutningsspel 4 mot 4 på stor yta",
        category: "Spelövningar",
        ageGroup: "P11-P14",
        link: "",
        description: "Spel med riktiga mål och målvakter. Fokus på snabba avslut och högt bolltempo."
    },
    {
        id: 38,
        title: "Zonspel 3 mot 3 + 3",
        category: "Spelövningar",
        ageGroup: "P12-P14",
        link: "",
        description: "Planen uppdelad i tre zoner där ett lag har numerärt överläge i bollhållande zon."
    },
    {
        id: 39,
        title: "Joker-spel 4 mot 4 med en neutral spelare",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Den neutrala spelaren spelar alltid med det lag som har bollen för att underlätta bollinnehav."
    },
    {
        id: 40,
        title: "Matchspel med touch-begränsning",
        category: "Spelövningar",
        ageGroup: "P13-P14",
        link: "",
        description: "Vanligt matchspel 5 mot 5 där spelarna max får ha två tillslag per bollkontakt för att öka tempot."
    },
    {
        id: 41,
        title: "Passningskombination i åtta-form",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Spelarna rör sig i en åtta-form över planen och byter bollar genom korta väggspel."
    },
    {
        id: 42,
        title: "Presspel i numerärt underläge",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Två försvarare pressar fyra anfallare. Träna på att täcka ytor smart och styra spelet."
    },
    {
        id: 43,
        title: "Dribblingsduell 1 mot 1 med avslut",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Start vid mittlinjen, 1 mot 1 i fart och direkt avslut inom 10 sekunder."
    },
    {
        id: 44,
        title: "Långa bollar och mottagning på bröst/lår",
        category: "Teknik",
        ageGroup: "P12-P14",
        link: "",
        description: "Träna på att ta emot höga, långa bollar med bröst eller lår i en kontrollerad yta."
    },
    {
        id: 45,
        title: "Sista minuten-anfall (stressat avslut)",
        category: "Anfallsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Anfall mot försvar med tidtagning där laget måste skapa ett avslut på under 15 sekunder."
    }
// --- NÄSTA BATCH: ID 46–75 ---
    {
        id: 46,
        title: "Passningstävling med mottagning i kvadrat",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Fyrkant där spelare passar diagonalt och följer efter bollen till nästa position."
    },
    {
        id: 47,
        title: "Diagonalpassningar och djupledslöpning",
        category: "Passningsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Långa bollar diagonalt över planen till yttermittfältare som löper i djupled."
    },
    {
        id: 48,
        title: "Spel 3 mot 2 på reducerad yta",
        category: "Anfallsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Anfallande lag har numerärt överläge och ska snabbt utnyttja ytan för att komma till avslut."
    },
    {
        id: 49,
        title: "Väggspel och skott från straffområdeslinjen",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Kombinationsspel utanför straffområdet följt av direktskott."
    },
    {
        id: 50,
        title: "1 mot 1 med felvänd anfallare",
        category: "Försvar",
        ageGroup: "P11-P14",
        link: "",
        description: "Försvarare sätter press i ryggen på anfallare som tar emot bollen felvänd."
    },
    {
        id: 51,
        title: "Presspel i grupp (2 mot 3)",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Träna på att pressa bollhållare i underläge genom att täcka ytor smart."
    },
    {
        id: 52,
        title: "Snabblöpningar med riktningsförändring",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Korta intervaller mellan koner med fokus på snabba stopp och acceleration."
    },
    {
        id: 53,
        title: "Explosiva start- och stoppövningar",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Reaktionsbaserade löpningar där spelarna startar på signal och stannar direkt."
    },
    {
        id: 54,
        title: "Dribblingsbana med avslut",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Slalom genom koner, fint förbi sista hinder och skott i mål."
    },
    {
        id: 55,
        title: "Skottfint och kroppsfint i fart",
        category: "Teknik",
        ageGroup: "P12-P14",
        link: "",
        description: "Driva mot försvarare, göra en skottfint och accelerera förbi."
    },
    {
        id: 56,
        title: "Smålagsspel 4 mot 4 med neutrala kanter",
        category: "Spelövningar",
        ageGroup: "P11-P14",
        link: "",
        description: "Neutrala spelare på långsidorna stöttar det bollhållande laget."
    },
    {
        id: 57,
        title: "Matchspel med trepassningskrav",
        category: "Spelövningar",
        ageGroup: "P12-P14",
        link: "",
        description: "Laget måste göra minst tre passningar inom laget innan avslut får ske."
    },
    {
        id: 58,
        title: "Kortpassningsspel i triangel (max två tillslag)",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Håll bollen inom laget i en triangelformad yta med högt tempo."
    },
    {
        id: 59,
        title: "Uppspelsövning från backlinje till mittfält",
        category: "Passningsspel",
        ageGroup: "P13-P14",
        link: "",
        description: "Simulera speluppbyggnad bakifrån genom backlinje och defensiv mittfältare."
    },
    {
        id: 60,
        title: "Inläggsspel med pressande försvarare",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Inlägg från kant där anfallare möter upp i straffområdet mot aktiv back."
    },
    {
        id: 61,
        title: "Kontringsövning 3 mot 2 med snabbt avslut",
        category: "Anfallsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Snabb omställning från försvar till anfall med numerärt överläge."
    },
    {
        id: 62,
        title: "Försvarsblock 4 mot 4 i låg zon",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Hålla ihop lagdelen i djupled och sidled nära eget straffområde."
    },
    {
        id: 63,
        title: "Återerövring direkt vid bollförlust",
        category: "Försvar",
        ageGroup: "P12-P14",
        link: "",
        description: "Omställning i försvar inom 5 sekunder efter tappad boll."
    },
    {
        id: 64,
        title: "Explosiv styrka med kroppsvikt",
        category: "Fysik",
        ageGroup: "P11-P14",
        link: "",
        description: "Cirkelträning med upphopp, armhävningar och utfall."
    },
    {
        id: 65,
        title: "Koordination med fotsteg och snabba fötter",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Fötterna i snabbt tempo genom koordinationsstege följt av sprint."
    },
    {
        id: 66,
        title: "Nick och mottagning med bröst",
        category: "Teknik",
        ageGroup: "P12-P14",
        link: "",
        description: "Kasta boll till medspelare som tar emot med bröstet eller nickar vidare."
    },
    {
        id: 67,
        title: "Skott med vrist och yttersida",
        category: "Teknik",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna avslutsteknik med ren vristträff och pressad boll."
    },
    {
        id: 68,
        title: "Matchspel 5 mot 5 i zoner",
        category: "Spelövningar",
        ageGroup: "P11-P14",
        link: "",
        description: "Spelarna är låsta till sina zoner för att lära sig positionsspel."
    },
    {
        id: 69,
        title: "Smålagsspel 3 mot 3 på små mål",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Intensivt spel utan målvikter med fokus på passningsskicklighet."
    },
    {
        id: 70,
        title: "Genombrottspassning genom trång yta",
        category: "Passningsspel",
        ageGroup: "P13-P14",
        link: "",
        description: "Slå hård passning mellan koner som simulerar motståndarnas lagdelar."
    },
    {
        id: 71,
        title: "Mottagning av långa bollar på lår",
        category: "Teknik",
        ageGroup: "P12-P14",
        link: "",
        description: "Kontrollera höga bollar med låret och lägg ner till marken."
    },
    {
        id: 72,
        title: "Överlappning på kant och inlägg",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Ytterback löper runt yttermittfältare för att slå inlägg."
    },
    {
        id: 73,
        title: "Instick i ytan mellan ytterback och mittback",
        category: "Anfallsspel",
        ageGroup: "P13-P14",
        link: "",
        description: "Utnyttja ytan bakom motståndarens backlinje med djupledspassning."
    },
    {
        id: 74,
        title: "Säkra andraytan utanför straffområdet",
        category: "Försvar",
        ageGroup: "P12-P14",
        link: "",
        description: "Defensiva mittfältare refsar upp lösa bollar utanför eget straffområde."
    },
    {
        id: 75,
        title: "Styrning av motståndare mot sidlinjen",
        category: "Försvar",
        ageGroup: "P11-P14",
        link: "",
        description: "Pressa bollhållare i en vinkel som tvingar ut spelet mot kanten."
    }
// --- NÄSTA BATCH: ID 76–105 (Inkl. Målvakt & Fasta situationer) ---
    {
        id: 76,
        title: "Målvakt: Skottäckning och vinkelspel",
        category: "Målvaktsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Målvakten tränar på att snabbt täcka vinklar vid avslut nära straffområdeslinjen."
    },
    {
        id: 77,
        title: "Målvakt: Greppsträning vid inlägg",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Målvakten flyttar ut i felt och plockar höga bollar i konkurrens med spelare."
    },
    {
        id: 78,
        title: "Fasta situationer: Hörna med variant vid första stolpen",
        category: "Fasta situationer",
        ageGroup: "P12-P14",
        link: "",
        description: "Låg eller hård hörna mot första stolpen där en spelare skarvar vidare i mål."
    },
    {
        id: 79,
        title: "Fasta situationer: Frisparksvariant med skott bakåt",
        category: "Fasta situationer",
        ageGroup: "P13-P14",
        link: "",
        description: "Varianter vid frispark strax utanför straffområdet där bollen passas snett inåt bakåt."
    },
    {
        id: 80,
        title: "Kortpassningsspel i trång yta (Rondell)",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Spela bollen inom laget i en 8x8-metersruta med maximalt ett tillslag."
    },
    {
        id: 81,
        title: "Speluppbyggnad via central mittfältare",
        category: "Passningsspel",
        ageGroup: "P13-P14",
        link: "",
        description: "Träna på att spela bollen genom lagdelarna till central spelfördelare."
    },
    {
        id: 82,
        title: "Anfallsspel 4 mot 3 med snabbt instick",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Anfallande lag utnyttjar sitt numerära överläge för att hitta luckan i försvaret."
    },
    {
        id: 83,
        title: "Genombrott på kant och cut-back",
        category: "Anfallsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Driva bollen till kortlinjen och spela snett inåt bakåt till påfyllande mittfältare."
    },
    {
        id: 84,
        title: "Försvar: Presspel i grupp (3 mot 3)",
        category: "Försvar",
        ageGroup: "P11-P14",
        link: "",
        description: "Kollektiv press där laget flyttar fram tillsammans för att stressa fram felpass."
    },
    {
        id: 85,
        title: "Försvar: Avvärja inlägg från kant",
        category: "Försvar",
        ageGroup: "P12-P14",
        link: "",
        description: "Backlinjen positionerar sig rätt och rensar bort inlägg från motståndarnas yttrar."
    },
    {
        id: 86,
        title: "Fysik: Uthållighetsintervaller 30/30",
        category: "Fysik",
        ageGroup: "P11-P14",
        link: "",
        description: "30 sekunders hård löpning följt av 30 sekunders vila, upprepat i 5 minuter."
    },
    {
        id: 87,
        title: "Fysik: Fotstyrka och balans",
        category: "Fysik",
        ageGroup: "P10-P13",
        link: "",
        description: "Stabilitetsövningar på ett ben med dynamiska armrörelser."
    },
    {
        id: 88,
        title: "Teknik: Nedtagning av höjdboll på bröst",
        category: "Teknik",
        ageGroup: "P12-P14",
        link: "",
        description: "Mottagning av långboll med bröstet följt av direkt passning."
    },
    {
        id: 89,
        title: "Teknik: Dribbling och skott i trångt utrymme",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Träna på att bli kvitt en försvarare på liten yta och få iväg ett avslut."
    },
    {
        id: 90,
        title: "Spelövning: Match 4 mot 4 med neutrala spelare",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Intensivt smålagsspel där båda lagen får använda sidlinjens spelare."
    },
    {
        id: 91,
        title: "Spelövning: 5 mot 5 med målvakter och fria zoner",
        category: "Spelövningar",
        ageGroup: "P12-P14",
        link: "",
        description: "Fullständigt matchspel med fokus på snabba omställningar och bredd."
    },
    {
        id: 92,
        title: "Passning: Väggspel på tre spelare",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Kombinationsspel i hög fart mellan tre spelare i en triangelkedja."
    },
    {
        id: 93,
        title: "Passning: Långa bollar i djupled med mottagning",
        category: "Passningsspel",
        ageGroup: "P13-P14",
        link: "",
        description: "Träna på precision i långa uppspelsbollar längs marken eller i luften."
    },
    {
        id: 94,
        title: "Anfallsspel: Skott efter snabb spelvändning",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Flytta bollen snabbt från ena kanten till den andra för att överlista försvaret."
    },
    {
        id: 95,
        title: "Anfallsspel: Drivande mittfältare i avslutsläge",
        category: "Anfallsspel",
        ageGroup: "P13-P14",
        link: "",
        description: "Central mittfältare driver bollen framåt i fri yta och skjuter utifrån."
    },
    {
        id: 96,
        title: "Försvar: Säkra ytan framför egen backlinje",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Defensiv mittfältare refsar upp andrabollar framför backlinjen."
    },
    {
        id: 97,
        title: "Försvar: 1 mot 1 defensiv i straffområdet",
        category: "Försvar",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna på att inte chansa i eget straffområde utan styra ut anfallaren."
    },
    {
        id: 98,
        title: "Fysik: Explosiva upphopp och nickdueller",
        category: "Fysik",
        ageGroup: "P12-P14",
        link: "",
        description: "Styrkehopp från stående för att nå högst i luftrummet."
    },
    {
        id: 99,
        title: "Fysik: Agilitybana med vändningar",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Snabbhetsbana med koner placerade i sicksack-mönster."
    },
    {
        id: 100,
        title: "Teknik: Skottfint följt av ryck",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Finta skott för att få motståndaren att satsa, dra därefter förbi."
    },
    {
        id: 101,
        title: "Teknik: Insidesfint och snabb acceleration",
        category: "Teknik",
        ageGroup: "P10-P14",
        link: "",
        description: "Använd insidan av foten för att lura motståndaren i sidled."
    },
    {
        id: 102,
        title: "Spelövning: 3 mot 3 med avslut på två små mål",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Spel utan målvakter där precision och snabba avslut tränas."
    },
    {
        id: 103,
        title: "Spelövning: Match med begränsat antal tillslag",
        category: "Spelövningar",
        ageGroup: "P13-P14",
        link: "",
        description: "Max två tillslag per spelare för att tvinga fram snabba tankar och passningar."
    },
    {
        id: 104,
        title: "Målvakt: Utsparkar och igångsättning",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Målvakten tränar på träffsäkra utsparkar och snabba igångsättningar med handen."
    },
    {
        id: 105,
        title: "Fasta situationer: Straffar och returer",
        category: "Fasta situationer",
        ageGroup: "P10-P14",
        link: "",
        description: "Straffläggning där övriga spelare är beredda på att hugga på eventuella returer."
    }
// --- NÄSTA BATCH: ID 106–135 ---
    {
        id: 106,
        title: "Anfallsspel: Djupledslöpning med tidig boll",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Spela bollen i djupet direkt när anfallaren sätter fart för att överlista backlinjen."
    },
    {
        id: 107,
        title: "Passning: Väggspel och direktavslut",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Kombinationsspel utanför straffområdet följt av skott på ett tillslag."
    },
    {
        id: 108,
        title: "Försvar: Sidorörelser och press i backlinje",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Träna backlinjens samspel i att hålla ihop linjen och flytta i sidled."
    },
    {
        id: 109,
        title: "Teknik: Dribbling förbi kon med yttersida",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Använd yttersidan av foten för att snabbt passera ett hinder i fart."
    },
    {
        id: 110,
        title: "Fysik: Snabbhet med fallande start",
        category: "Fysik",
        ageGroup: "P11-P14",
        link: "",
        description: "Starta från en framåtlutad position för att maximera den initiala accelerationen."
    },
    {
        id: 111,
        title: "Spelövning: Match 3 mot 3 med fyra mål",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Snabba omställningar och anfall åt flera håll utan fasta målvakter."
    },
    {
        id: 112,
        title: "Målvakt: Reflexräddningar på nära håll",
        category: "Målvaktsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Träna snabba reaktioner på hårda avslut från korta avstånd."
    },
    {
        id: 113,
        title: "Fasta situationer: Frispark direkt mot mål",
        category: "Fasta situationer",
        ageGroup: "P12-P14",
        link: "",
        description: "Skottträning på frisparkar strax utanför straffområdet med mur."
    },
    {
        id: 114,
        title: "Passningsspel: Diagonal passningsstafett",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Passa bollen diagonalt mellan led och följ efter till nästa position."
    },
    {
        id: 115,
        title: "Anfallsspel: 2 mot 2 med väggspelare",
        category: "Anfallsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Använd neutrala väggspelare på kanterna för att skapa numerärt överläge."
    },
    {
        id: 116,
        title: "Försvar: Brytpunkt i uppspelsfas",
        category: "Försvar",
        ageGroup: "P12-P14",
        link: "",
        description: "Stör motståndarens uppspel tidigt för att vinna bollen högt upp i banan."
    },
    {
        id: 117,
        title: "Teknik: Nedtagning av höjdboll med fot",
        category: "Teknik",
        ageGroup: "P12-P14",
        link: "",
        description: "Dämpa ner höga bollar kontrollerat med sulan eller insidan av foten."
    },
    {
        id: 118,
        title: "Fysik: Explosiva sidledsförflyttningar",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Snabba sidledssteg mellan koner för att förbättra rörlighet i försvarsspelet."
    },
    {
        id: 119,
        title: "Spelövning: Smålagsspel med jokrar",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Spel 4 mot 4 där två neutrala jokrar alltid spelar med det lag som har bollen."
    },
    {
        id: 120,
        title: "Målvakt: Utkast och igångsättning av kontring",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Snabb utkaststeknik för att sätta igång en snabb omställning."
    },
    {
        id: 121,
        title: "Fasta situationer: Markering vid inkast",
        category: "Fasta situationer",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna på att ligga nära motståndaren vid inkast för att förhindra felvänd mottagning."
    },
    {
        id: 122,
        title: "Passningsspel: Kort och lång passningskombination",
        category: "Passningsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Växla mellan korta väggspel och längre uppspelsbollar i samma övning."
    },
    {
        id: 123,
        title: "Anfallsspel: Ytterspring och inlägg mot första stolpen",
        category: "Anfallsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Driva längs kanten och slå snabba inlägg framför mål."
    },
    {
        id: 124,
        title: "Försvar: Presspel i högt tempo (3 mot 2)",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Försvarare i underläge tränar på att täcka ytor och fördröja motståndarens anfall."
    },
    {
        id: 125,
        title: "Teknik: Skott med vrist efter mottagning",
        category: "Teknik",
        ageGroup: "P11-P14",
        link: "",
        description: "Tasa emot en passning och avfyra ett hårt vristskott direkt."
    },
    {
        id: 126,
        title: "Fysik: Intervaller med bollföring",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Kombinera konditionsintervaller med att driva bollen i hög fart."
    },
    {
        id: 127,
        title: "Spelövning: Zonspel med numerärt överläge",
        category: "Spelövningar",
        ageGroup: "P12-P14",
        link: "",
        description: "Planen är indelad i zoner där det anfallande laget har extra spelare."
    },
    {
        id: 128,
        title: "Målvakt: Greppträning under press",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Fånga in bollar i luften när motståndarspelare stör i närkampen."
    },
    {
        id: 129,
        title: "Fasta situationer: Hörnvariant med bakre stolpen",
        category: "Fasta situationer",
        ageGroup: "P12-P14",
        link: "",
        description: "Slå hörnan högt mot bortre ytan där en spelare möter upp."
    },
    {
        id: 130,
        title: "Passningsspel: Bollinnehav i kvadrat med två tillslag",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Klassisk rondo där fokus ligger på snabba beslut och få tillslag."
    },
    {
        id: 131,
        title: "Anfallsspel: Snabba instick i straffområdet",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Träna på att slå sista passningen genom en kompakt försvarslinje."
    },
    {
        id: 132,
        title: "Försvar: Kollektiv förflyttning i sidled",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Hela laget flyttar sig kompakt efter bollen för att stänga ytor."
    },
    {
        id: 133,
        title: "Teknik: Cruyff-fint och snabb riktningsförändring",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Genomför en effektiv skottfint/vända-bort-rörelse i trångt utrymme."
    },
    {
        id: 134,
        title: "Fysik: Cirkelträning för fotbollsstyrka",
        category: "Fysik",
        ageGroup: "P11-P14",
        link: "",
        description: "Styrkeövningar för ben, bål och balans anpassade för unga spelare."
    },
    {
        id: 135,
        title: "Spelövning: Avslutningsspel med två touch",
        category: "Spelövningar",
        ageGroup: "P13-P14",
        link: "",
        description: "Matchspel där spelarna maximalt får ha två tillslag för att hålla uppe tempot."
    }
]
// --- NÄSTA BATCH: ID 136–165 ---
    {
        id: 136,
        title: "Passningsspel: Yttersidespassningar i kvadrat",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna på att slå snabba och precisa passningar med yttersidan av foten i en mindre runda."
    },
    {
        id: 137,
        title: "Anfallsspel: 3 mot 2 med djupledslöpning på kant",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Utnyttja numerärt överläge på kanten för att spela bollen i djupled bakom backlinjen."
    },
    {
        id: 138,
        title: "Försvar: Presspel och täckning i centrala ytor",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Kollektivt försvarsspel där en spelare sätter press och en annan täckar ytan bakom."
    },
    {
        id: 139,
        title: "Teknik: Dribbling med skottfint och avslut",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Driva mot kon, utföra en skottfint för att skaka av sig försvararen och avsluta."
    },
    {
        id: 140,
        title: "Fysik: Snabba fötter i stege och maximal sprint",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Intensivt fotarbete genom koordinationsstege följt av 10 meters maximal acceleration."
    },
    {
        id: 141,
        title: "Spelövning: Match 3 mot 3 med små mål",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Snabba omställningar och intensivt spel utan målvakter för att träna precision."
    },
    {
        id: 142,
        title: "Målvaktsspel: Höga bollar under press",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Målvakten flyttar ut och griper inkommande inlägg i konkurrens med utespelare."
    },
    {
        id: 143,
        title: "Fasta situationer: Frisparksvariant med skott på andra ytan",
        category: "Fasta situationer",
        ageGroup: "P12-P14",
        link: "",
        description: "Kombination vid frispark där bollen spelas vidare till en fri spelare på bortre ytan."
    },
    {
        id: 144,
        title: "Passningsspel: Direktpassningar i triangel",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Spela bollen på ett tillslag i en triangelformad övning för att hålla uppe tempot."
    },
    {
        id: 145,
        title: "Anfallsspel: Inlägg och avslut i trångt straffområde",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Träna på att möta upp snabba inlägg och få iväg ett avslut under tidspress."
    },
    {
        id: 146,
        title: "Försvar: 1 mot 1 defensiv mot felvänd anfallare",
        category: "Försvar",
        ageGroup: "P11-P14",
        link: "",
        description: "Stör anfallaren direkt i mottagningen när denne tar emot bollen med ryggen mot mål."
    },
    {
        id: 147,
        title: "Teknik: Nedtagning av höjdboll och snabb vändning",
        category: "Teknik",
        ageGroup: "P12-P14",
        link: "",
        description: "Kontrollera en lång, hög boll och vänd omedelbart upp i spelriktningen."
    },
    {
        id: 148,
        title: "Fysik: Intervaller med riktningsförändring (shuttles)",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Korta ruscher mellan koner med 180-graders vändningar för att simulera matchmoment."
    },
    {
        id: 149,
        title: "Spelövning: 4 mot 4 med neutrala väggspelare",
        category: "Spelövningar",
        ageGroup: "P11-P14",
        link: "",
        description: "Smålagsspel där det bollhållande laget får stöd av spelare längs sidlinjerna."
    },
    {
        id: 150,
        title: "Målvaktsspel: Utkast och igångsättning av anfall",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna snabba och träffsäkra utkast med handen för att starta en snabb kontring."
    },
    {
        id: 151,
        title: "Fasta situationer: Hörna mot första stolpen med skarv",
        category: "Fasta situationer",
        ageGroup: "P12-P14",
        link: "",
        description: "Hård hörna mot första stolpen där en spelare skarvar bollen vidare mot mål."
    },
    {
        id: 152,
        title: "Passningsspel: Diagonalpassning med efterföljande löpning",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Slå en lång diagonal passning och spring efter bollen till nästa position i ledet."
    },
    {
        id: 153,
        title: "Anfallsspel: Kombinationsspel utanför straffområdet",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Väggspel och snabba instick i ytan strax utanför straffområdets linje."
    },
    {
        id: 154,
        title: "Försvar: Kollektiv press i högt tempo",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Hela laget kliver fram tillsammans för att stressa motståndarnas uppspelsfas."
    },
    {
        id: 155,
        title: "Teknik: Vända bort motståndare med sulan (Drag-back)",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Dra bollen bakåt med sulan för att snabbt lura bort en efterträdande motståndare."
    },
    {
        id: 156,
        title: "Fysik: Styrkeövningar med kroppsvikt för ben",
        category: "Fysik",
        ageGroup: "P11-P14",
        link: "",
        description: "Cirkelträning med upphopp, utfallsteg och sidoutfall för starkare fotbollsben."
    },
    {
        id: 157,
        title: "Spelövning: Match med max två tillslag",
        category: "Spelövningar",
        ageGroup: "P13-P14",
        link: "",
        description: "Vanligt matchspel där varje spelare maximalt får vidröra bollen två gånger."
    },
    {
        id: 158,
        title: "Målvaktsspel: Reflexräddningar på närskott",
        category: "Målvaktsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Träna målvantens snabbhet och reaktionsförmåga på plötsliga avslut nära mål."
    },
    {
        id: 159,
        title: "Fasta situationer: Straffar med returspel",
        category: "Fasta situationer",
        ageGroup: "P10-P14",
        link: "",
        description: "Straffläggning där övriga spelare är på tårna för att hugga på eventuella returer."
    },
    {
        id: 160,
        title: "Passningsspel: Kvadraten 4 mot 1 med tempoväxling",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Rondo där tempot höjs och spelarna måste fatta snabbare beslut under press."
    },
    {
        id: 161,
        title: "Anfallsspel: Kontring 2 mot 1 i hög fart",
        category: "Kontring",
        ageGroup: "P11-P14",
        link: "",
        description: "Snabb omställning där två anfallare driver mot en ensam försvarare."
    },
    {
        id: 162,
        title: "Försvar: Säkra andraytor utanför straffområdet",
        category: "Försvar",
        ageGroup: "P12-P14",
        link: "",
        description: "Defensiva mittfältare städar upp och fångar upp lösa bollar utanför eget straffområde."
    },
    {
        id: 163,
        title: "Teknik: Drivande boll i konbana med fotens utsida",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Få god kontroll på bollen genom att föra den med yttersidan genom en snäv konbana."
    },
    {
        id: 164,
        title: "Fysik: Explosiva upphopp för nickdueller",
        category: "Fysik",
        ageGroup: "P12-P14",
        link: "",
        description: "Träna spänst och tajming för att nå högst i luftrummet vid fasta situationer."
    },
    {
        id: 165,
        title: "Spelövning: Zonspel 4 mot 4 + 2 jokrar",
        category: "Spelövningar",
        ageGroup: "P12-P14",
        link: "",
        description: "Spel på ytor där de neutrala jokrarna hjälper det bollhållande laget att hålla bollen."
    }
// --- NÄSTA BATCH: ID 166–195 ---
    {
        id: 166,
        title: "Passningsspel: Väggspel med skott på ett tillslag",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Kombinationsspel strax utanför straffområdet följt av direktavslut."
    },
    {
        id: 167,
        title: "Anfallsspel: 3 mot 2 i djupled med avslut",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Utnyttja numerärt överläge för att snabbt spela bollen bakom motståndarens backlinje."
    },
    {
        id: 168,
        title: "Försvar: Presstpel i grupp på liten yta",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Kollektiv press för att stressa bollhållare och stänga ytor i trångt utrymme."
    },
    {
        id: 169,
        title: "Teknik: Skottfint och snabb acceleration i konbana",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Driva bollen genom koner, utföra en skottfint och accelerera förbi."
    },
    {
        id: 170,
        title: "Fysik: Snabba fötter i stege och sprint",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Intensivt fotarbete i koordinationsstege följt av 10 meters maximal löpning."
    },
    {
        id: 171,
        title: "Spelövning: Match 4 mot 4 med fyra små mål",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Snabba omställningar och anfall åt flera håll utan fasta målvakter."
    },
    {
        id: 172,
        title: "Målvaktsspel: Utkast och igångsättning under press",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna på snabba utkast med handen för att starta omställningar när motståndaren stör."
    },
    {
        id: 173,
        title: "Fasta situationer: Hörna med inlägg mot bortre ytan",
        category: "Fasta situationer",
        ageGroup: "P12-P14",
        link: "",
        description: "Slå hörnan högt mot bortre stolpen där en spelare möter upp med huvudet eller foten."
    },
    {
        id: 174,
        title: "Passningsspel: Kvadraten 5 mot 2 med max två tillslag",
        category: "Passningsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Håll bollen inom laget i en runda mot två jagande försvarare."
    },
    {
        id: 175,
        title: "Anfallsspel: Överlappning och inlägg från kant",
        category: "Anfallsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Ytterback löper runt yttermittfältare för att slå inlägg i straffområdet."
    },
    {
        id: 176,
        title: "Försvar: 1 mot 1 i sidled med styrning mot sidlinje",
        category: "Försvar",
        ageGroup: "P10-P13",
        link: "",
        description: "Styr anfallaren i en vinkel som tvingar ut spelet mot kanten."
    },
    {
        id: 177,
        title: "Teknik: Nedtagning av höjdboll med bröst och pass",
        category: "Teknik",
        ageGroup: "P12-P14",
        link: "",
        description: "Kontrollera en lång, hög boll med bröstet och lägg direkt till en medspelare."
    },
    {
        id: 178,
        title: "Fysik: Explosiva intervaller med riktningsförändring",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Korta ruscher med 180-graders vändningar för att efterlikna matchintensitet."
    },
    {
        id: 179,
        title: "Spelövning: Smålagsspel med neutrala väggspelare",
        category: "Spelövningar",
        ageGroup: "P11-P14",
        link: "",
        description: "Använd spelare längs sidlinjerna för att ge det bollhållande laget numerärt överläge."
    },
    {
        id: 180,
        title: "Målvaktsspel: Skottäckning och vinkelspel i straffområde",
        category: "Målvaktsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Målvakten tränar på att snabbt täcka ytor vid avslut nära mål."
    },
    {
        id: 181,
        title: "Fasta situationer: Frisparksvariant med skott snett inåt bakåt",
        category: "Fasta situationer",
        ageGroup: "P13-P14",
        link: "",
        description: "Kombination vid frispark strax utanför straffområdet med avslut på ett tillslag."
    },
    {
        id: 182,
        title: "Passningsspel: Diagonal passningskombination med djupledslöpning",
        category: "Passningsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Slå långa bollar diagonalt över planen till spelare i rörelse."
    },
    {
        id: 183,
        title: "Anfallsspel: Instick i ytan mellan ytterback och mittback",
        category: "Anfallsspel",
        ageGroup: "P13-P14",
        link: "",
        description: "Utnyttja ytor i motståndarens backlinje med snabba djupledspassningar."
    },
    {
        id: 184,
        title: "Försvar: Brytpunkt och säkra centrala ytor",
        category: "Försvar",
        ageGroup: "P12-P14",
        link: "",
        description: "Stäng igen centrala ytor framför egen backlinje och bryt uppspel."
    },
    {
        id: 185,
        title: "Teknik: Vända bort motståndare med sulan (drag-back)",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Dra bollen bakåt med sulan för att snabbt lura efterträdande försvarare."
    },
    {
        id: 186,
        title: "Fysik: Styrkeövningar för fotboll med kroppsvikt",
        category: "Fysik",
        ageGroup: "P11-P14",
        link: "",
        description: "Cirkelträning med upphopp, armhävningar och utfall för fotbollsmuskulaturen."
    },
    {
        id: 187,
        title: "Spelövning: Zonspel 3 mot 3 + 3",
        category: "Spelövningar",
        ageGroup: "P12-P14",
        link: "",
        description: "Spel på uppdelade ytor där ett lag har extra spelare i bollhållande zon."
    },
    {
        id: 188,
        title: "Målvaktsspel: Greppträning vid höga inlägg",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Målvakten flyttar ut i feltet och plockar ner bollar i luften under press."
    },
    {
        id: 189,
        title: "Fasta situationer: Straffar med fokus på returer",
        category: "Fasta situationer",
        ageGroup: "P10-P14",
        link: "",
        description: "Straffträning där övriga spelare är redo att hugga direkt på målvaktens retur."
    },
    {
        id: 190,
        title: "Passningsspel: Yttersidespassningar i rörelse",
        category: "Passningsspel",
        ageGroup: "P13-P14",
        link: "",
        description: "Spela bollen snabbt med yttersidan medan spelarna rör sig framåt längs planen."
    },
    {
        id: 191,
        title: "Anfallsspel: Snabb omställning 2 mot 1 till avslut",
        category: "Kontring",
        ageGroup: "P11-P14",
        link: "",
        description: "Omställning från försvar till anfall där två spelare driver mot en ensam back."
    },
    {
        id: 192,
        title: "Försvar: Kollektiv förflyttning i sidled och höjdled",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Hela laget rör sig kompakt efter bollen för att stänga alla passningsvägar."
    },
    {
        id: 193,
        title: "Teknik: Drivande boll med fotens insida och utsida",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Få fullständig kontroll på bollen genom att växla mellan insida och utsida i fart."
    },
    {
        id: 194,
        title: "Fysik: Agilitybana med bollkontroll på tid",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Slalom och hinderbana med bollen klistrad vid fötterna på tid."
    },
    {
        id: 195,
        title: "Spelövning: Match med touch-begränsning (max två tillslag)",
        category: "Spelövningar",
        ageGroup: "P13-P14",
        link: "",
        description: "Matchspel där spelarna max får vidröra bollen två gånger för att höja tempot."
    }
// --- NÄSTA BATCH: ID 196–225 ---
    {
        id: 196,
        title: "Passningsspel: Direktpassningar i trång rondo",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Håll bollen inom laget i en liten runda med krav på ett tillslag för att höja tempot."
    },
    {
        id: 197,
        title: "Anfallsspel: Djupledslöpning och instick i korridor",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Spela bollen i korridor bakom motståndarens backlinje till snabb ytter."
    },
    {
        id: 198,
        title: "Försvar: Presspel i numerärt underläge (2 mot 3)",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Försvararna tränar på att täcka ytor smart och fördröja anfallet i underläge."
    },
    {
        id: 199,
        title: "Teknik: Skottfint och genombrott i fart",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Driva mot kon, finta skott och accelerera förbi med full kontroll."
    },
    {
        id: 200,
        title: "Fysik: Intervallträning med vertikala upphopp",
        category: "Fysik",
        ageGroup: "P11-P14",
        link: "",
        description: "Kombinera korta ruscher med upphopp för att träna spänst och uthållighet."
    },
    {
        id: 201,
        title: "Spelövning: Match 3 mot 3 på fyra mål",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Snabba omställningar och anfall åt flera håll utan fasta målvakter."
    },
    {
        id: 202,
        title: "Målvaktsspel: Reflexer och räddningar på låga skott",
        category: "Målvaktsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Målvakten tränar på att snabbt komma ner och blockera skott längs marken."
    },
    {
        id: 203,
        title: "Fasta situationer: Frisparksvariant med direktavslut",
        category: "Fasta situationer",
        ageGroup: "P12-P14",
        link: "",
        description: "Skottträning på frisparkar strax utanför straffområdet med uppställd mur."
    },
    {
        id: 204,
        title: "Passningsspel: Väggspel i högt tempo mellan tre spelare",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Triangelkedja där bollen spelas fram och tillbaka med korta, snabba tillslag."
    },
    {
        id: 205,
        title: "Anfallsspel: Inlägg och avslut på första stolpen",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Yttermittfältare slår hårt inlägg längs marken eller i luften mot första ytan."
    },
    {
        id: 206,
        title: "Försvar: Brytpunkt i motståndarens uppspel",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Stör motståndaren tidigt i uppspelsfasen för att vinna bollen högt."
    },
    {
        id: 207,
        title: "Teknik: Nedtagning av höjdboll med sulan",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Dämpa ner långa bollar direkt till marken med sulan på foten."
    },
    {
        id: 208,
        title: "Fysik: Agilitybana med sicksack-löpning",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Snabba sidledsförflyttningar och tempoväxlingar genom tätt placerade koner."
    },
    {
        id: 209,
        title: "Spelövning: Match 5 mot 5 i fasta zoner",
        category: "Spelövningar",
        ageGroup: "P12-P14",
        link: "",
        description: "Spelarna är låsta till sina zoner för att lära sig kollektivt positionsspel."
    },
    {
        id: 210,
        title: "Målvaktsspel: Utkast och igångsättning av kontring",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna på att snabbt kasta ut bollen till fri lagkamrat för att starta omställning."
    },
    {
        id: 211,
        title: "Fasta situationer: Markering vid hörnor",
        category: "Fasta situationer",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna man-mot-man-markering i eget straffområde vid fasta situationer."
    },
    {
        id: 212,
        title: "Passningsspel: Långa bollar och mottagning i rörelse",
        category: "Passningsspel",
        ageGroup: "P13-P14",
        link: "",
        description: "Slå precisa långbollar till medspelare som sätter fart framåt."
    },
    {
        id: 213,
        title: "Anfallsspel: Överlapp och instick i straffområde",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Kombinera överlapp på kant med snabbt instick centralt."
    },
    {
        id: 214,
        title: "Försvar: Presspel och täckning i backlinje",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Håll ihop försvarslinjen och säkra upp bakom pressande spelare."
    },
    {
        id: 215,
        title: "Teknik: Cruyff-fint i trång yta",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Träna på att snabbt vända bort försvarare med en kropps- och bollfint."
    },
    {
        id: 216,
        title: "Fysik: Explosiv start med fallande teknik",
        category: "Fysik",
        ageGroup: "P11-P14",
        link: "",
        description: "Maximera första steget i accelerationen från stillastående."
    },
    {
        id: 217,
        title: "Spelövning: Smålagsspel med neutrala jokrar",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Spel 4 mot 4 där två jokrar stöttar det bollhållande laget."
    },
    {
        id: 218,
        title: "Målvaktsspel: Greppträning vid höga inlägg",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Målvakten flyttar ut i straffområdet och plockar bollar i luften under press."
    },
    {
        id: 219,
        title: "Fasta situationer: Straffar med returspel",
        category: "Fasta situationer",
        ageGroup: "P10-P14",
        link: "",
        description: "Straffläggning där övriga spelare är beredda på att hugga direkt på returen."
    },
    {
        id: 220,
        title: "Passningsspel: Yttersidespassningar i kvadrat",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna på att slå snabba och precisa passningar med yttersidan av foten."
    },
    {
        id: 221,
        title: "Anfallsspel: Kontring 2 mot 1 i hög fart",
        category: "Kontring",
        ageGroup: "P11-P14",
        link: "",
        description: "Snabb omställning från försvar till anfall med numerärt överläge."
    },
    {
        id: 222,
        title: "Försvar: Säkra andraytor utanför straffområdet",
        category: "Försvar",
        ageGroup: "P12-P14",
        link: "",
        description: "Defensiva mittfältare städar upp och refsar upp lösa bollar."
    },
    {
        id: 223,
        title: "Teknik: Drivande boll i konbana med utsida",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Få god kontroll på bollen genom att föra den med yttersidan genom hinder."
    },
    {
        id: 224,
        title: "Fysik: Spänst och upphopp för nickdueller",
        category: "Fysik",
        ageGroup: "P12-P14",
        link: "",
        description: "Träna styrka och tajming för att nå högst i luftrummet vid fasta situationer."
    },
    {
        id: 225,
        title: "Spelövning: Match med max två tillslag",
        category: "Spelövningar",
        ageGroup: "P13-P14",
        link: "",
        description: "Matchspel där spelarna max får vidröra bollen två gånger för att höja tempot."
    }
// --- NÄSTA BATCH: ID 226–255 ---
    {
        id: 226,
        title: "Passningsspel: Väggspel och djupledslöpning i par",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Spelare A slår passning till spelare B, tar emot väggspel tillbaka och sätter fart i djupled."
    },
    {
        id: 227,
        title: "Anfallsspel: 3 mot 2 på reducerad yta med snabbt avslut",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Anfallande lag utnyttjar numerärt överläge på liten yta för att snabbt komma till skott."
    },
    {
        id: 228,
        title: "Försvar: 1 mot 1 i centrala korridorer",
        category: "Försvar",
        ageGroup: "P10-P13",
        link: "",
        description: "Träna på att stänga igen centrala ytor och hålla låg tyngdpunkt i defensiva dueller."
    },
    {
        id: 229,
        title: "Teknik: Dribbling och skottfint vid koner",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Driva bollen genom konbanor, göra en skottfint och accelerera förbi det sista hindret."
    },
    {
        id: 230,
        title: "Fysik: Snabba fötter och riktningsförändring med stege",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Koordinationsstege med fokus på snabba fötter följt av en kort och explosiv rusning."
    },
    {
        id: 231,
        title: "Spelövning: Match 4 mot 4 med fyra små mål",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Snabba omställningar och anfall åt flera håll utan fasta målvakter."
    },
    {
        id: 232,
        title: "Målvaktsspel: Reflexer och grepp vid närskott",
        category: "Målvaktsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Målvakten tränar på snabba reaktioner och att blockera hårda skott från nära håll."
    },
    {
        id: 233,
        title: "Fasta situationer: Hörna med kort variant och inlägg",
        category: "Fasta situationer",
        ageGroup: "P12-P14",
        link: "",
        description: "Spela hörnan kort för att skapa en bättre vinkel för inlägg mot straffområdet."
    },
    {
        id: 234,
        title: "Passningsspel: Kvadraten 4 mot 2 med tempoväxling",
        category: "Passningsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Rondo där bollen ska flyttas snabbt och tempot höjs efter fem lyckade passningar."
    },
    {
        id: 235,
        title: "Anfallsspel: Ytteranfall med inlägg mot bortre stolpen",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Yttermittfältare slår högt inlägg mot bortre ytan där anfallare fyller på."
    },
    {
        id: 236,
        title: "Försvar: Presspel i grupp på egen planhalva",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Kollektivt försvarsspel där laget flyttar ihop för att stänga ytor och vinna boll."
    },
    {
        id: 237,
        title: "Teknik: Nedtagning av höjdboll och snabb vändning",
        category: "Teknik",
        ageGroup: "P12-P14",
        link: "",
        description: "Kontrollera en lång, hög boll med bröst eller fot och vänd omedelbart uppåt i banan."
    },
    {
        id: 238,
        title: "Fysik: Explosiva intervaller med sidledsförflyttning",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Kombinera raka löpningar med sidledssteg mellan koner för rörlighet och styrka."
    },
    {
        id: 239,
        title: "Spelövning: Smålagsspel 3 mot 3 med neutrala jokrar",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Intensivt spel där neutrala spelare alltid stöttar det bollhållande laget."
    },
    {
        id: 240,
        title: "Målvaktsspel: Utkast och igångsättning av kontring",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna på snabba utkast med handen för att sätta igång en blixtsnabb omställning."
    },
    {
        id: 241,
        title: "Fasta situationer: Frisparksvariant med skott snett inåt bakåt",
        category: "Fasta situationer",
        ageGroup: "P13-P14",
        link: "",
        description: "Kombination vid frispark strax utanför straffområdet med avslut på ett tillslag."
    },
    {
        id: 242,
        title: "Passningsspel: Triangelpassningar med efterföljande löpning",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Spela bollen i en triangelform och följ efter din passning till nästa position."
    },
    {
        id: 243,
        title: "Anfallsspel: Instick i djupled mellan backar",
        category: "Anfallsspel",
        ageGroup: "P13-P14",
        link: "",
        description: "Slå precisa markpassningar genom motståndarens backlinje till löpande spelare."
    },
    {
        id: 244,
        title: "Försvar: Kollektiv förflyttning i sidled och höjdled",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Hela laget rör sig kompakt efter bollen för att eliminera alla passningsalternativ."
    },
    {
        id: 245,
        title: "Teknik: Vända bort motståndare med sulan (drag-back)",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Använd sulan för att dra bollen bakåt och snabbt finta bort en efterträdande spelare."
    },
    {
        id: 246,
        title: "Fysik: Cirkelträning för benstyrka och spänst",
        category: "Fysik",
        ageGroup: "P11-P14",
        link: "",
        description: "Stationsbaserad träning med upphopp, utfall och benböj för fotbollsspelare."
    },
    {
        id: 247,
        title: "Spelövning: Matchspel med maximalt två tillslag",
        category: "Spelövningar",
        ageGroup: "P13-P14",
        link: "",
        description: "Vanligt matchspel där spelarna max får vidröra bollen två gånger för att hålla tempot."
    },
    {
        id: 248,
        title: "Målvaktsspel: Höga bollar och boxningsteknik",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna på att säkert greppa eller boxa bort svåra inlägg och hörnor."
    },
    {
        id: 249,
        title: "Fasta situationer: Straffar med fokus på returspel",
        category: "Fasta situationer",
        ageGroup: "P10-P14",
        link: "",
        description: "Straffläggning där övriga spelare är på tårna för att hugga direkt på målvaktens retur."
    },
    {
        id: 250,
        title: "Passningsspel: Yttersidespassningar i högt tempo",
        category: "Passningsspel",
        ageGroup: "P13-P14",
        link: "",
        description: "Träna på att slå snabba, pressade passningar med yttersidan under matchliknande former."
    },
    {
        id: 251,
        title: "Anfallsspel: Kontring 2 mot 1 i hög fart",
        category: "Kontring",
        ageGroup: "P11-P14",
        link: "",
        description: "Snabb omställning där två anfallare driver mot en ensam försvarare."
    },
    {
        id: 252,
        title: "Försvar: Säkra andraytor utanför straffområdet",
        category: "Försvar",
        ageGroup: "P12-P14",
        link: "",
        description: "Defensiva mittfältare städar upp och fångar upp lösa bollar utanför eget straffområde."
    },
    {
        id: 253,
        title: "Teknik: Drivande boll i hinderbana med utsida",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Få god kontroll på bollen genom att föra den med fotens utsida genom en snäv bana."
    },
    {
        id: 254,
        title: "Spelövning: Zonspel 4 mot 4 + 2 jokrar",
        category: "Spelövningar",
        ageGroup: "P12-P14",
        link: "",
        description: "Spel på ytor där de neutrala jokrarna hjälper det bollhållande laget att behålla bollen."
    },
    {
        id: 255,
        title: "Fasta situationer: Avslutsträning efter fasta situationer",
        category: "Fasta situationer",
        ageGroup: "P11-P14",
        link: "",
        description: "Samlad övning där hörnor och frisparkar slås in i straffområdet för direkt avslut."
    }
// --- NÄSTA BATCH: ID 256–285 ---
    {
        id: 256,
        title: "Passningsspel: Direktpassningar och skott i par",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Spela en snabb passning till medspelare, ta emot i farten och avsluta direkt mot mål."
    },
    {
        id: 257,
        title: "Anfallsspel: Djupledslöpning på kant med tidigt inlägg",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Yttermittfältare sätter fart längs kanten och slår ett tidigt inlägg mot straffområdet."
    },
    {
        id: 258,
        title: "Försvar: Presspel i grupp på central yta",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Kollektiv press för att stressa bollhållare och stänga centrala passningsvägar."
    },
    {
        id: 259,
        title: "Teknik: Drivande boll och skottfint i konbana",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Driva bollen genom koner, utföra en skottfint och accelerera förbi sista hindret."
    },
    {
        id: 260,
        title: "Fysik: Snabba fötter i stege och maximal sprint",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Intensivt fotarbete genom koordinationsstege följt av 10 meters maximal acceleration."
    },
    {
        id: 261,
        title: "Spelövning: Match 3 mot 3 med små mål",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Snabba omställningar och intensivt spel utan målvakter för att träna precision."
    },
    {
        id: 262,
        title: "Målvaktsspel: Höga bollar under press",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Målvakten flyttar ut och griper inkommande inlägg i konkurrens med utespelare."
    },
    {
        id: 263,
        title: "Fasta situationer: Frisparksvariant med skott på andra ytan",
        category: "Fasta situationer",
        ageGroup: "P12-P14",
        link: "",
        description: "Kombination vid frispark där bollen spelas vidare till en fri spelare på bortre ytan."
    },
    {
        id: 264,
        title: "Passningsspel: Direktpassningar i triangel",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Spela bollen på ett tillslag i en triangelformad övning för att hålla uppe tempot."
    },
    {
        id: 265,
        title: "Anfallsspel: Inlägg och avslut i trångt straffområde",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Träna på att möta upp snabba inlägg och få iväg ett avslut under tidspress."
    },
    {
        id: 266,
        title: "Försvar: 1 mot 1 defensiv mot felvänd anfallare",
        category: "Försvar",
        ageGroup: "P11-P14",
        link: "",
        description: "Stör anfallaren direkt i mottagningen när denne tar emot bollen med ryggen mot mål."
    },
    {
        id: 267,
        title: "Teknik: Nedtagning av höjdboll och snabb vändning",
        category: "Teknik",
        ageGroup: "P12-P14",
        link: "",
        description: "Kontrollera en lång, hög boll och vänd omedelbart upp i spelriktningen."
    },
    {
        id: 268,
        title: "Fysik: Intervaller med riktningsförändring (shuttles)",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Korta ruscher mellan koner med 180-graders vändningar för att simulera matchmoment."
    },
    {
        id: 269,
        title: "Spelövning: 4 mot 4 med neutrala väggspelare",
        category: "Spelövningar",
        ageGroup: "P11-P14",
        link: "",
        description: "Smålagsspel där det bollhållande laget får stöd av spelare längs sidlinjerna."
    },
    {
        id: 270,
        title: "Målvaktsspel: Utkast och igångsättning av anfall",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna snabba och träffsäkra utkast med handen för att starta en snabb kontring."
    },
    {
        id: 271,
        title: "Fasta situationer: Hörna mot första stolpen med skarv",
        category: "Fasta situationer",
        ageGroup: "P12-P14",
        link: "",
        description: "Hård hörna mot första stolpen där en spelare skarvar bollen vidare mot mål."
    },
    {
        id: 272,
        title: "Passningsspel: Diagonalpassning med efterföljande löpning",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Slå en lång diagonal passning och spring efter bollen till nästa position i ledet."
    },
    {
        id: 273,
        title: "Anfallsspel: Kombinationsspel utanför straffområdet",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Väggspel och snabba instick i ytan strax utanför straffområdets linje."
    },
    {
        id: 274,
        title: "Försvar: Kollektiv press i högt tempo",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Hela laget kliver fram tillsammans för att stressa motståndarnas uppspelsfas."
    },
    {
        id: 275,
        title: "Teknik: Vända bort motståndare med sulan (Drag-back)",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Dra bollen bakåt med sulan för att snabbt lura bort en efterträdande motståndare."
    },
    {
        id: 276,
        title: "Fysik: Styrkeövningar med kroppsvikt för ben",
        category: "Fysik",
        ageGroup: "P11-P14",
        link: "",
        description: "Cirkelträning med upphopp, utfallsteg och sidoutfall för starkare fotbollsben."
    },
    {
        id: 277,
        title: "Spelövning: Match med max två tillslag",
        category: "Spelövningar",
        ageGroup: "P13-P14",
        link: "",
        description: "Vanligt matchspel där varje spelare maximalt får vidröra bollen två gånger."
    },
    {
        id: 278,
        title: "Målvaktsspel: Reflexräddningar på närskott",
        category: "Målvaktsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Träna målvantens snabbhet och reaktionsförmåga på plötsliga avslut nära mål."
    },
    {
        id: 279,
        title: "Fasta situationer: Straffar med returspel",
        category: "Fasta situationer",
        ageGroup: "P10-P14",
        link: "",
        description: "Straffläggning där övriga spelare är på tårna för att hugga direkt på eventuella returer."
    },
    {
        id: 280,
        title: "Passningsspel: Kvadraten 4 mot 1 med tempoväxling",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Rondo där tempot höjs och spelarna måste fatta snabbare beslut under press."
    },
    {
        id: 281,
        title: "Anfallsspel: Kontring 2 mot 1 i hög fart",
        category: "Kontring",
        ageGroup: "P11-P14",
        link: "",
        description: "Snabb omställning från försvar till anfall där två anfallare driver mot en ensam försvarare."
    },
    {
        id: 282,
        title: "Försvar: Säkra andraytor utanför straffområdet",
        category: "Försvar",
        ageGroup: "P12-P14",
        link: "",
        description: "Defensiva mittfältare städar upp och fångar upp lösa bollar utanför eget straffområde."
    },
    {
        id: 283,
        title: "Teknik: Drivande boll i konbana med fotens utsida",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Få god kontroll på bollen genom att föra den med yttersidan genom en snäv konbana."
    },
    {
        id: 284,
        title: "Fysik: Explosiva upphopp för nickdueller",
        category: "Fysik",
        ageGroup: "P12-P14",
        link: "",
        description: "Träna spänst och tajming för att nå högst i luftrummet vid fasta situationer."
    },
    {
        id: 285,
        title: "Spelövning: Zonspel 4 mot 4 + 2 jokrar",
        category: "Spelövningar",
        ageGroup: "P12-P14",
        link: "",
        description: "Spel på ytor där de neutrala jokrarna hjälper det bollhållande laget att hålla bollen."
    }
// --- NÄSTA BATCH: ID 286–315 ---
    {
        id: 286,
        title: "Passningsspel: Väggspel och mottagning i rörelse",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Spela bollen fram och tillbaka i hög fart under rörelse framåt."
    },
    {
        id: 287,
        title: "Anfallsspel: Instick i djupled med avslut",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Slå djupledspassningar genom backlinjen för direkt avslut mot mål."
    },
    {
        id: 288,
        title: "Försvar: Presspel i par längs sidlinjen",
        category: "Försvar",
        ageGroup: "P11-P14",
        link: "",
        description: "Styr ut anfallaren mot kanten med press och täckning i par."
    },
    {
        id: 289,
        title: "Teknik: Drivande boll med insida och utsida i konbana",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Växla fotkontakt mellan insida och utsida genom slalomkoner."
    },
    {
        id: 290,
        title: "Fysik: Snabba fötter i stege och sidledssteg",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Kombinera fotsteg i stege med snabba sidledsförflyttningar."
    },
    {
        id: 291,
        title: "Spelövning: Match 3 mot 3 på små mål utan målvakt",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Snabba omställningar och precision i avslut utan fasta målvakter."
    },
    {
        id: 292,
        title: "Målvaktsspel: Reflexer på skott i nedre hörn",
        category: "Målvaktsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Målvakten tränar på att snabbt komma ner och blockera skott längs marken."
    },
    {
        id: 293,
        title: "Fasta situationer: Hörna med inlägg mot straffpunkten",
        category: "Fasta situationer",
        ageGroup: "P12-P14",
        link: "",
        description: "Slå hörnan in mot central yta där flera spelare fyller på."
    },
    {
        id: 294,
        title: "Passningsspel: Kvadraten 4 mot 1 med krav på två tillslag",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Traditionell rondo där spelarna max får ha två tillslag per bollkontakt."
    },
    {
        id: 295,
        title: "Anfallsspel: Överlappning och inlägg från kant med tre löpare",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Yttermittfältare får överlapp från back och slår inlägg mot tre anfallare."
    },
    {
        id: 296,
        title: "Försvar: Brytpunkt i centrala ytor mot felvänd spelare",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Stör anfallaren direkt när denne tar emot bollen med ryggen mot mål."
    },
    {
        id: 297,
        title: "Teknik: Cruyff-fint och snabb acceleration",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Utför en snygg kroppsfint/vända-bort-rörelse och accelerera."
    },
    {
        id: 298,
        title: "Fysik: Explosiva start- och stoppövningar med koner",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Träna förmågan att snabbt accelerera och stanna upp på signal."
    },
    {
        id: 299,
        title: "Spelövning: Smålagsspel med neutrala väggspelare på kanterna",
        category: "Spelövningar",
        ageGroup: "P11-P14",
        link: "",
        description: "Använd spelare längs sidlinjerna för att få ett konstant överläge."
    },
    {
        id: 300,
        title: "Målvaktsspel: Utkast och igångsättning av snabb kontring",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna snabba och träffsäkra utkast med handen för omställning."
    },
    {
        id: 301,
        title: "Fasta situationer: Frisparksvariant med skott snett inåt bakåt",
        category: "Fasta situationer",
        ageGroup: "P13-P14",
        link: "",
        description: "Kombinationsspel vid frispark strax utanför straffområdet."
    },
    {
        id: 302,
        title: "Passningsspel: Diagonal passningsstafett med mottagning",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Slå långa diagonala bollar i ett strukturerat mönster."
    },
    {
        id: 303,
        title: "Anfallsspel: 2 mot 1 med snabbt genombrott",
        category: "Anfallsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Utnyttja numerärt överläge för att spela förbi en försvarare."
    },
    {
        id: 304,
        title: "Försvar: Kollektiv press och förflyttning i sidled",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Flytta hela laget kompakt i sidled efter bollens rörelse."
    },
    {
        id: 305,
        title: "Teknik: Skottfint och genombrott i fart",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Driva mot kon, finta skott och ta sig förbi i hög fart."
    },
    {
        id: 306,
        title: "Fysik: Intervallträning med korta ruscher och riktningsförändring",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Korta ruscher med 180-graders vändningar för matchliknande intensitet."
    },
    {
        id: 307,
        title: "Spelövning: Match 4 mot 4 med fyra mål",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Snabba omställningar och anfall åt flera håll."
    },
    {
        id: 308,
        title: "Målvaktsspel: Höga bollar och boxningsteknik vid inlägg",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna på att säkert greppa eller boxa bort inlägg under press."
    },
    {
        id: 309,
        title: "Fasta situationer: Straffar med fokus på returspel",
        category: "Fasta situationer",
        ageGroup: "P10-P14",
        link: "",
        description: "Straffläggning där medspelare är beredda på returer."
    },
    {
        id: 310,
        title: "Passningsspel: Yttersidespassningar i kvadrat",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna på snabba passningar med yttersidan i en mindre runda."
    },
    {
        id: 311,
        title: "Anfallsspel: Kontring 2 mot 1 i hög fart",
        category: "Kontring",
        ageGroup: "P11-P14",
        link: "",
        description: "Snabb omställning från försvar till anfall med övertag."
    },
    {
        id: 312,
        title: "Försvar: Säkra andraytor utanför straffområdet",
        category: "Försvar",
        ageGroup: "P12-P14",
        link: "",
        description: "Defensiva mittfältare städar upp och fångar upp lösa bollar."
    },
    {
        id: 313,
        title: "Teknik: Vända bort motståndare med sulan (drag-back)",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Använd sulan för att dra bollen bakåt och finta bort försvarare."
    },
    {
        id: 314,
        title: "Fysik: Spänst och upphopp för nickdueller",
        category: "Fysik",
        ageGroup: "P12-P14",
        link: "",
        description: "Träna spänst och tajming för att nå högst i luftrummet."
    },
    {
        id: 315,
        title: "Spelövning: Match med maximalt två tillslag",
        category: "Spelövningar",
        ageGroup: "P13-P14",
        link: "",
        description: "Matchspel där spelarna max får vidröra bollen två gånger."
    }
// --- NÄSTA BATCH: ID 316–345 ---
    {
        id: 316,
        title: "Passningsspel: Väggspel och djupledslöpning på kant",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Spela väggspel på kanten och ta emot bollen i djupled under fart."
    },
    {
        id: 317,
        title: "Anfallsspel: 3 mot 2 med snabbt instick",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Utnyttja numerärt överläge för att slå ett snabbt instick mellan backarna."
    },
    {
        id: 318,
        title: "Försvar: Presspel i grupp på egen planhalva",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Kollektivt försvarsspel där laget flyttar ihop för att stänga ytor."
    },
    {
        id: 319,
        title: "Teknik: Drivande boll och skottfint i hög fart",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Driva bollen i högt tempo, utföra skottfint och accelerera förbi."
    },
    {
        id: 320,
        title: "Fysik: Snabba fötter i stege och maximal acceleration",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Intensivt fotarbete i stege följt av 10 meters maximal sprint."
    },
    {
        id: 321,
        title: "Spelövning: Smålagsspel 4 mot 4 med neutrala jokrar",
        category: "Spelövningar",
        ageGroup: "P11-P14",
        link: "",
        description: "Spel där neutrala spelare stöttar det bollhållande laget."
    },
    {
        id: 322,
        title: "Målvaktsspel: Reflexer och grepp vid närskott",
        category: "Målvaktsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Träna snabba reaktioner och blockering av hårda skott nära mål."
    },
    {
        id: 323,
        title: "Fasta situationer: Hörna med inlägg mot första stolpen",
        category: "Fasta situationer",
        ageGroup: "P12-P14",
        link: "",
        description: "Slå in hörnan mot första ytan för skarv eller direktavslut."
    },
    {
        id: 324,
        title: "Passningsspel: Kvadraten 5 mot 2 med max två tillslag",
        category: "Passningsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Håll bollen inom laget i runda mot två jagande försvarare."
    },
    {
        id: 325,
        title: "Anfallsspel: Ytteranfall med inlägg och tre löpare",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Yttermittfältare slår inlägg mot tre anfallare som fyller på i boxen."
    },
    {
        id: 326,
        title: "Försvar: 1 mot 1 defensiv i centrala ytor",
        category: "Försvar",
        ageGroup: "P10-P13",
        link: "",
        description: "Stäng igen centrala ytor och håll låg tyngdpunkt i dueller."
    },
    {
        id: 327,
        title: "Teknik: Nedtagning av höjdboll med bröst och pass",
        category: "Teknik",
        ageGroup: "P12-P14",
        link: "",
        description: "Kontrollera långboll med bröstet och lägg direkt vidare till medspelare."
    },
    {
        id: 328,
        title: "Fysik: Intervallträning med riktningsförändring",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Korta ruscher med 180-graders vändningar för matchliknande tempo."
    },
    {
        id: 329,
        title: "Spelövning: Match 3 mot 3 på små mål utan målvakt",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Snabba omställningar och precision i avslut utan fasta målvakter."
    },
    {
        id: 330,
        title: "Målvaktsspel: Utkast och igångsättning av kontring",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna snabba utkast för att starta blixtsnabba omställningar."
    },
    {
        id: 331,
        title: "Fasta situationer: Frisparksvariant med skott snett inåt bakåt",
        category: "Fasta situationer",
        ageGroup: "P13-P14",
        link: "",
        description: "Kombinationsspel vid frispark med avslut på ett tillslag."
    },
    {
        id: 332,
        title: "Passningsspel: Triangelpassningar med efterföljande löpning",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Spela bollen i triangel och följ efter till nästa position."
    },
    {
        id: 333,
        title: "Anfallsspel: Djupledslöpning genom backlinjen",
        category: "Anfallsspel",
        ageGroup: "P13-P14",
        link: "",
        description: "Utnyttja ytor bakom motståndarens backlinje med precisa djupledspassningar."
    },
    {
        id: 334,
        title: "Försvar: Kollektiv förflyttning i sidled och höjdled",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Hela laget rör sig kompakt efter bollen för att stänga ytor."
    },
    {
        id: 335,
        title: "Teknik: Vända bort motståndare med sulan (drag-back)",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Använd sulan för att dra bollen bakåt och lura bort efterträdande spelare."
    },
    {
        id: 336,
        title: "Fysik: Cirkelträning för fotbollsstyrka och spänst",
        category: "Fysik",
        ageGroup: "P11-P14",
        link: "",
        description: "Stationsbaserad träning med upphopp, utfall och benböj."
    },
    {
        id: 337,
        title: "Spelövning: Match med maximalt två tillslag",
        category: "Spelövningar",
        ageGroup: "P13-P14",
        link: "",
        description: "Matchspel där spelarna max får vidröra bollen två gånger."
    },
    {
        id: 338,
        title: "Målvaktsspel: Höga bollar och boxningsteknik",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna på att säkert greppa eller boxa bort svåra inlägg."
    },
    {
        id: 339,
        title: "Fasta situationer: Straffar med fokus på returspel",
        category: "Fasta situationer",
        ageGroup: "P10-P14",
        link: "",
        description: "Straffläggning där medspelare är beredda på att hugga på returer."
    },
    {
        id: 340,
        title: "Passningsspel: Yttersidespassningar i kvadrat",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna på snabba passningar med yttersidan i mindre runda."
    },
    {
        id: 341,
        title: "Anfallsspel: Kontring 2 mot 1 i hög fart",
        category: "Kontring",
        ageGroup: "P11-P14",
        link: "",
        description: "Snabb omställning från försvar till anfall med numerärt överläge."
    },
    {
        id: 342,
        title: "Försvar: Säkra andraytor utanför straffområdet",
        category: "Försvar",
        ageGroup: "P12-P14",
        link: "",
        description: "Defensiva mittfältare städar upp och fångar upp lösa bollar."
    },
    {
        id: 343,
        title: "Teknik: Drivande boll i hinderbana med utsida",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Få god kontroll på bollen genom att föra den med fotens utsida."
    },
    {
        id: 344,
        title: "Spelövning: Zonspel 4 mot 4 + 2 jokrar",
        category: "Spelövningar",
        ageGroup: "P12-P14",
        link: "",
        description: "Spel på ytor där neutrala jokrar hjälper det bollhållande laget."
    },
    {
        id: 345,
        title: "Fasta situationer: Avslutsträning efter fasta situationer",
        category: "Fasta situationer",
        ageGroup: "P11-P14",
        link: "",
        description: "Samlad övning där hörnor och frisparkar slås in i straffområdet."
    }
// --- NÄSTA BATCH: ID 346–375 ---
    {
        id: 346,
        title: "Passningsspel: Kortpassningar i triangel med rörelse",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Spela bollen i triangel med fokus på snabba fötter och direkt mottagning."
    },
    {
        id: 347,
        title: "Anfallsspel: Djupledslöpning efter väggspel",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Utför ett väggspel med central mittfältare och ta direkt löpning i djupet."
    },
    {
        id: 348,
        title: "Försvar: Presspel i par och täckning",
        category: "Försvar",
        ageGroup: "P11-P14",
        link: "",
        description: "Första försvarare sätter press, andra försvarare säkrar ytan bakom."
    },
    {
        id: 349,
        title: "Teknik: Dribbling med insidan i sicksack-bana",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Få nära bollkontakt genom att använda insidan av foten i konbana."
    },
    {
        id: 350,
        title: "Fysik: Agilitybana med koner och sidledssteg",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Kombinera snabba framåtlöpningar med sidledssteg mellan koner."
    },
    {
        id: 351,
        title: "Spelövning: Match 3 mot 3 med små mål",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Intensivt spel utan målvakter för att träna upp snabba avslut och passningar."
    },
    {
        id: 352,
        title: "Målvaktsspel: Skottäckning i trång vinkel",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Målvakten tränar på att täcka ytor snabbt vid skott från kanten."
    },
    {
        id: 353,
        title: "Fasta situationer: Hörna med kort variant",
        category: "Fasta situationer",
        ageGroup: "P12-P14",
        link: "",
        description: "Kort variant på hörna för att skapa bättre inläggsvinkel mot straffområdet."
    },
    {
        id: 354,
        title: "Passningsspel: Diagonalpassning och mottagning",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Slå längre diagonala bollar och ta emot med kontroll i rörelse."
    },
    {
        id: 355,
        title: "Anfallsspel: Spel 4 mot 3 med snabbt instick",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Anfallande lag utnyttjar numerärt överläge för att hitta luckan i försvaret."
    },
    {
        id: 356,
        title: "Försvar: Brytpunkt i uppspelsfas",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Stör motståndarens uppspel tidigt för att vinna bollen högt upp i banan."
    },
    {
        id: 357,
        title: "Teknik: Skottfint och genombrott",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Finta skott för att få motståndaren att satsa, därefter accelerera förbi."
    },
    {
        id: 358,
        title: "Fysik: Intervaller med bollföring",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Kombinera konditionsintervaller med att driva bollen i högt tempo."
    },
    {
        id: 359,
        title: "Spelövning: Match 4 mot 4 med neutrala spelare på kanterna",
        category: "Spelövningar",
        ageGroup: "P11-P14",
        link: "",
        description: "Smålagsspel där sidlinjesspelare stöttar det bollhållande laget."
    },
    {
        id: 360,
        title: "Målvaktsspel: Greppträning vid höga bollar",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Målvakten flyttar ut och griper inkommande bollar i luften."
    },
    {
        id: 361,
        title: "Fasta situationer: Frisparksvariant med skott direkt",
        category: "Fasta situationer",
        ageGroup: "P12-P14",
        link: "",
        description: "Träna skott och placering vid frisparkar strax utanför straffområdet."
    },
    {
        id: 362,
        title: "Passningsspel: Direktpassningar på ett tillslag",
        category: "Passningsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Kortpassningsspel i hög fart med krav på enbart ett tillslag per spelare."
    },
    {
        id: 363,
        title: "Anfallsspel: Ytteranfall med cut-back",
        category: "Anfallsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Driva bollen till kortlinjen och spela snett inåt bakåt till medspelare."
    },
    {
        id: 364,
        title: "Försvar: Kollektivt presspel och förflyttning",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Hela laget flyttar kompakt i sidled och höjdled efter bollens rörelse."
    },
    {
        id: 365,
        title: "Teknik: Nedtagning av höjdboll med fot",
        category: "Teknik",
        ageGroup: "P12-P14",
        link: "",
        description: "Dämpa ner långa bollar kontrollerat med sulan eller insidan av foten."
    },
    {
        id: 366,
        title: "Fysik: Explosiva upphopp och spänst",
        category: "Fysik",
        ageGroup: "P11-P14",
        link: "",
        description: "Styrkehopp från stående position för att förbättra spänsten."
    },
    {
        id: 367,
        title: "Spelövning: Match 5 mot 5 med målvakter",
        category: "Spelövningar",
        ageGroup: "P12-P14",
        link: "",
        description: "Fullständigt matchspel med fokus på snabba omställningar och bredd."
    },
    {
        id: 368,
        title: "Målvaktsspel: Utkast och igångsättning med hand",
        category: "Målvaktsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Träna träffsäkra utkast för att snabbt starta anfall från eget mål."
    },
    {
        id: 369,
        title: "Fasta situationer: Straffar och returer",
        category: "Fasta situationer",
        ageGroup: "P10-P14",
        link: "",
        description: "Straffläggning där medspelare är beredda på att hugga på eventuella returer."
    },
    {
        id: 370,
        title: "Passningsspel: Yttersidespassningar i rörelse",
        category: "Passningsspel",
        ageGroup: "P13-P14",
        link: "",
        description: "Spela bollen snabbt med yttersidan under rörelse framåt."
    },
    {
        id: 371,
        title: "Anfallsspel: Kontring 2 mot 1 i hög fart",
        category: "Kontring",
        ageGroup: "P11-P14",
        link: "",
        description: "Snabb omställning där två anfallare driver mot en ensam försvarare."
    },
    {
        id: 372,
        title: "Försvar: Säkra andraytor utanför straffområdet",
        category: "Försvar",
        ageGroup: "P12-P14",
        link: "",
        description: "Defensiva mittfältare städar upp och fångar upp lösa bollar utanför straffområdet."
    },
    {
        id: 373,
        title: "Teknik: Vända bort motståndare med sulan",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Dra bollen bakåt med sulan för att snabbt finta bort en efterträdande spelare."
    },
    {
        id: 374,
        title: "Fysik: Snabba fötter i koordinationsstege",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Intensiva fotsteg genom stege för att förbättra koordination och snabbhet."
    },
    {
        id: 375,
        title: "Spelövning: Matchspel med touch-begränsning",
        category: "Spelövningar",
        ageGroup: "P13-P14",
        link: "",
        description: "Matchspel där spelarna maximalt får vidröra bollen två gånger."
    }
// --- SISTA BATCH: ID 376–405 (Mål uppnått!) ---
    {
        id: 376,
        title: "Passningsspel: Väggspel och djupledslöpning i korridor",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Spela väggspel på kanten och ta emot bollen i farten i en djup korridor."
    },
    {
        id: 377,
        title: "Anfallsspel: 3 mot 2 med snabbt instick centralt",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Utnyttja numerärt överläge för att slå ett snabbt instick mellan backarna."
    },
    {
        id: 378,
        title: "Försvar: Presspel i grupp på egen planhalva",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Kollektivt försvarsspel där laget flyttar ihop för att stänga ytor."
    },
    {
        id: 379,
        title: "Teknik: Drivande boll och skottfint i hög fart",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Driva bollen i högt tempo, utföra en skottfint och accelerera förbi."
    },
    {
        id: 380,
        title: "Fysik: Snabba fötter i stege och maximal acceleration",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Intensivt fotarbete i stege följt av 10 meters maximal sprint."
    },
    {
        id: 381,
        title: "Spelövning: Smålagsspel 4 mot 4 med neutrala jokrar",
        category: "Spelövningar",
        ageGroup: "P11-P14",
        link: "",
        description: "Spel där neutrala spelare stöttar det bollhållande laget."
    },
    {
        id: 382,
        title: "Målvaktsspel: Reflexer och grepp vid närskott",
        category: "Målvaktsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Träna snabba reaktioner och blockering av hårda skott nära mål."
    },
    {
        id: 383,
        title: "Fasta situationer: Hörna med inlägg mot första stolpen",
        category: "Fasta situationer",
        ageGroup: "P12-P14",
        link: "",
        description: "Slå in hörnan mot första ytan för skarv eller direktavslut."
    },
    {
        id: 384,
        title: "Passningsspel: Kvadraten 5 mot 2 med max två tillslag",
        category: "Passningsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Håll bollen inom laget i runda mot två jagande försvarare."
    },
    {
        id: 385,
        title: "Anfallsspel: Ytteranfall med inlägg och tre löpare",
        category: "Anfallsspel",
        ageGroup: "P12-P14",
        link: "",
        description: "Yttermittfältare slår inlägg mot tre anfallare som fyller på i boxen."
    },
    {
        id: 386,
        title: "Försvar: 1 mot 1 defensiv i centrala ytor",
        category: "Försvar",
        ageGroup: "P10-P13",
        link: "",
        description: "Stäng igen centrala ytor och håll låg tyngdpunkt i dueller."
    },
    {
        id: 387,
        title: "Teknik: Nedtagning av höjdboll med bröst och pass",
        category: "Teknik",
        ageGroup: "P12-P14",
        link: "",
        description: "Kontrollera långboll med bröstet och lägg direkt vidare till medspelare."
    },
    {
        id: 388,
        title: "Fysik: Intervallträning med riktningsförändring",
        category: "Fysik",
        ageGroup: "P10-P14",
        link: "",
        description: "Korta ruscher med 180-graders vändningar för matchliknande tempo."
    },
    {
        id: 389,
        title: "Spelövning: Match 3 mot 3 på små mål utan målvakt",
        category: "Spelövningar",
        ageGroup: "P10-P14",
        link: "",
        description: "Snabba omställningar och precision i avslut utan fasta målvakter."
    },
    {
        id: 390,
        title: "Målvaktsspel: Utkast och igångsättning av kontring",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna snabba utkast för att starta blixtsnabba omställningar."
    },
    {
        id: 391,
        title: "Fasta situationer: Frisparksvariant med skott snett inåt bakåt",
        category: "Fasta situationer",
        ageGroup: "P13-P14",
        link: "",
        description: "Kombinationsspel vid frispark med avslut på ett tillslag."
    },
    {
        id: 392,
        title: "Passningsspel: Triangelpassningar med efterföljande löpning",
        category: "Passningsspel",
        ageGroup: "P10-P14",
        link: "",
        description: "Spela bollen i triangel och följ efter till nästa position."
    },
    {
        id: 393,
        title: "Anfallsspel: Djupledslöpning genom backlinjen",
        category: "Anfallsspel",
        ageGroup: "P13-P14",
        link: "",
        description: "Utnyttja ytor bakom motståndarens backlinje med precisa djupledspassningar."
    },
    {
        id: 394,
        title: "Försvar: Kollektiv förflyttning i sidled och höjdled",
        category: "Försvar",
        ageGroup: "P13-P14",
        link: "",
        description: "Hela laget rör sig kompakt efter bollen för att stänga ytor."
    },
    {
        id: 395,
        title: "Teknik: Vända bort motståndare med sulan (drag-back)",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Använd sulan för att dra bollen bakåt och lura bort efterträdande spelare."
    },
    {
        id: 396,
        title: "Fysik: Cirkelträning för fotbollsstyrka och spänst",
        category: "Fysik",
        ageGroup: "P11-P14",
        link: "",
        description: "Stationsbaserad träning med upphopp, utfall och benböj."
    },
    {
        id: 397,
        title: "Spelövning: Match med maximalt två tillslag",
        category: "Spelövningar",
        ageGroup: "P13-P14",
        link: "",
        description: "Matchspel där spelarna max får vidröra bollen två gånger."
    },
    {
        id: 398,
        title: "Målvaktsspel: Höga bollar och boxningsteknik",
        category: "Målvaktsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna på att säkert greppa eller boxa bort svåra inlägg."
    },
    {
        id: 399,
        title: "Fasta situationer: Straffar med fokus på returspel",
        category: "Fasta situationer",
        ageGroup: "P10-P14",
        link: "",
        description: "Straffläggning där medspelare är beredda på att hugga på returer."
    },
    {
        id: 400,
        title: "Passningsspel: Yttersidespassningar i kvadrat",
        category: "Passningsspel",
        ageGroup: "P11-P14",
        link: "",
        description: "Träna på snabba passningar med yttersidan i mindre runda."
    },
    {
        id: 401,
        title: "Anfallsspel: Kontring 2 mot 1 i hög fart",
        category: "Kontring",
        ageGroup: "P11-P14",
        link: "",
        description: "Snabb omställning från försvar till anfall med numerärt överläge."
    },
    {
        id: 402,
        title: "Försvar: Säkra andraytor utanför straffområdet",
        category: "Försvar",
        ageGroup: "P12-P14",
        link: "",
        description: "Defensiva mittfältare städar upp och fångar upp lösa bollar."
    },
    {
        id: 403,
        title: "Teknik: Drivande boll i hinderbana med utsida",
        category: "Teknik",
        ageGroup: "P10-P13",
        link: "",
        description: "Få god kontroll på bollen genom att föra den med fotens utsida."
    },
    {
        id: 404,
        title: "Spelövning: Zonspel 4 mot 4 + 2 jokrar",
        category: "Spelövningar",
        ageGroup: "P12-P14",
        link: "",
        description: "Spel på ytor där neutrala jokrar hjälper det bollhållande laget."
    },
    {
        id: 405,
        title: "Fasta situationer: Avslutsträning efter fasta situationer",
        category: "Fasta situationer",
        ageGroup: "P11-P14",
        link: "",
        description: "Samlad övning där hörnor och frisparkar slås in i straffområdet."
    }
];
