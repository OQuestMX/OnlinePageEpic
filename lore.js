/* AVELIR — LORE PUBLICO  v0.11
   Fuente maestra: Avelir_Lore_Compilation.md — todo lo no-secreto vive aquí.
   Lo secreto (DM Only / Campaign Secret) va en la bóveda y NUNCA en este archivo.
   Lo leen index.html y wiki.html. */

var LORE = {

  version: "0.11",
  exportedAt: "2026-08-12",

  types: [
  {
    "id": "faction",
    "label": "Facción",
    "icon": "🏛️",
    "color": "#8b1a1a"
  },
  {
    "id": "place",
    "label": "Lugar",
    "icon": "🗺️",
    "color": "#1e6b3a"
  },
  {
    "id": "character",
    "label": "Personaje",
    "icon": "👤",
    "color": "#1a4a7a"
  },
  {
    "id": "concept",
    "label": "Concepto",
    "icon": "💡",
    "color": "#7d6608"
  },
  {
    "id": "story",
    "label": "Historia",
    "icon": "📜",
    "color": "#6a3a8a"
  },
  {
    "id": "item",
    "label": "Objeto",
    "icon": "⚔️",
    "color": "#8a6f0a"
  }
],

  linkTypes: {
  "Ser Arthantos": "character",
  "Alendi Galathas": "character",
  "Anariel": "character",
  "Alarion": "character",
  "Arminio El Dorado": "character",
  "An'Fahal": "character",
  "Anan'Nur": "character",
  "Temürel": "character",
  "Caëlen Vorin'el": "character",
  "El Sobreviviente": "character",
  "Hemmal": "character",
  "Tol Marin": "place",
  "Ashlan": "place",
  "Thecia": "place",
  "Iridel Von Richter": "character",
  "Davorel Von Kersig": "character",
  "Artesh": "place",
  "Tol Varen": "place",
  "La Batalla de Tol Marin": "story",
  "Aleria Galathas": "character",
  "Valen Galathas": "character",
  "Balorin Galathas": "character",
  "Ser Gianni du Mont": "character",
  "El Mar del Sur": "place",
  "El Mar Central": "place",
  "El Rompimiento del Velo": "concept",
  "Jelmethar": "character",
  "Argumel": "character",
  "Anandëlion": "character",
  "Anandël": "character",
  "Engar Ab'Calen": "character",
  "Palan'Nur": "concept",
  "Palan'Shar": "concept",
  "Amin": "concept",
  "Palan'Umbar": "concept",
  "Amin'Kalam": "concept",
  "Sar'Qaim": "concept",
  "Bastian Von Richter": "character",
  "Liria Von Richter": "character",
  "Alia Von Richter": "character",
  "El Almirantazgo": "concept",
  "La Corte del Sol": "concept",
  "Escuela Naval Real": "concept",
  "Los Peregrinos": "concept",
  "Los Soleados": "concept",
  "Arkhon Galas": "concept",
  "Heraldin Galas": "concept",
  "Los Primarcas": "concept",
  "Los Cónsules": "concept",
  "Los Galadrim": "concept",
  "Casa Gal'Calad": "concept",
  "Aldren": "concept",
  "Ilvaën": "concept",
  "Maëlor": "concept",
  "El Gremio": "concept",
  "Juramento Escarlata": "concept",
  "La Mesa Completa": "concept",
  "Los Tantos": "concept",
  "Los Platos": "concept",
  "Los Normales": "concept",
  "El Gran Sacrificio": "story",
  "La Confederación": "concept",
  "Los Consejeros": "concept",
  "Los Caballeros Errantes": "concept",
  "Casa Veyra": "faction",
  "Casa Thorne": "faction",
  "Casa Solara": "faction",
  "Casa Kael": "faction",
  "Casa Riven": "faction",
  "Casas Isleñas": "concept",
  "El Emperador": "character",
  "Tel-Haud": "character",
  "Cuencos de Poder": "concept",
  "El Interplano": "concept",
  "El Bosque de las Luces": "place",
  "El Milagro Fundacional": "story",
  "Los Hermanos del Arado": "concept",
  "Los Hijos del Viento": "concept",
  "El Mundo Entre Imperios": "concept",
  "Las Casas Libres": "faction",
  "Los Navegantes": "faction",
  "Los del Margen": "faction",
  "Las Compañías": "faction",
  "Casa Veldrik": "faction",
  "Casa Ruviel": "faction",
  "Casa Solmara": "faction",
  "Casa Thornel": "faction",
  "Lady Sigrid Veldrik": "character",
  "El Consejo Ruviel": "concept",
  "Lord Maren Solmara": "character",
  "Thane Kael Thornel": "character",
  "El Rey Valkar": "character",
  "La Corona del Rey Valkar": "item",
  "La Hermandad del Sello": "concept",
  "El Círculo": "faction",
  "La Siembra": "concept",
  "Los de la Raíz": "concept",
  "Casa Erindor": "concept",
  "Lirael Veyral": "character",
  "Casa Veyral": "concept",
  "Kaelen Dravik": "character",
  "El Jardín Eterno": "concept",
  "Caëlen": "concept",
  "El Intervelo": "concept"
},

  pages: [
  {
    "id": "wbase-cheran",
    "title": "Teocracia de Cherán",
    "type": "faction",
    "content": "# Declaración\n\"Nuestro dios es el único. Él proveerá. Los infieles serán purificados. El fuego de [[Engar Ab'Calen]] se esparcirá ante el retumbar de nuestra caballería.\"\n\n*Los Engari — El Pueblo que Ara*\n\n# Historia\nLas tierras del este de Avelir fueron durante siglos casi ingobernables: guerra tribal constante, agricultura pobre, dependencia del [[El Mar del Sur]]. Los **Engari** empezaron como mercenarios fanáticos de la estepa. Su devoción total a [[Engar Ab'Calen]] — el dios que ara la tierra para que brote la vida — fue la herramienta que por fin impuso el orden.\n\nTodo cambió con [[El Milagro Fundacional]]: cuando el primer Ungido llevó un remanente de [[El Bosque de las Luces]] al gran lago entre la cordillera volcánica y el Mar Central, las tierras se volvieron fértiles por primera vez. Fe y capacidad de alimentar a un pueblo quedaron inseparables — y una civilización entera tomó su nombre del acto más humilde: arar.\n\n# Gobierno\nTeocracia. El [[Palan'Nur]] — el Ungido — ejecuta la voluntad divina. El [[Palan'Shar]] — el concilio sagrado — define cuál es esa voluntad. Cuatro facciones compiten dentro del concilio: [[Amin]] los ortodoxos, [[Palan'Umbar]] los gnósticos, [[Amin'Kalam]] los iconoclastas y los [[Sar'Qaim]], los jihadistas — hoy la facción más agresiva, ejecutando purgas hacia el norte.\n\n# Fuerza Militar\nLa ventaja que define a Cherán: la **Caballería Combinada de Estepa**, la fuerza terrestre más rápida y devastadora de Avelir en campo abierto.\n- **[[Los Hermanos del Arado]]** — caballería pesada de choque: armadura laminar, lanzas pesadas y sables curvos. El martillo.\n- **[[Los Hijos del Viento]]** — arqueros a caballo de élite: puntería letal a galope tendido y las clásicas retiradas fingidas. El yunque móvil.\n- De 3 a 5 caballos por jinete, una movilidad estratégica que ni [[Aetharion]] ni [[Urushan]] pueden igualar en terreno abierto.\n\n# Fuerza Económica\nMinería — sobre todo cerca de la cordillera volcánica — y el control de metales y minerales estratégicos.\n\n# Figuras Clave\n- Los cuatro [[Palan'Nur]]: [[Anandëlion]] el Saladino, [[Anandël]] el Ciro, [[Anan'Nur]] el Darío — hoy agonizante — y [[An'Fahal]], el amanecer.\n- [[Temürel]] — **Abu'Amin, \"El Abuelo\"** — la memoria viva del imperio y su general más respetado.\n\n# La Crisis de Sucesión\nLa muerte de [[Anan'Nur]] y la ceremonia de elevación de [[An'Fahal]] detonaron una guerra interna por el alma del imperio — tres fuerzas que no pueden coexistir:\n- **[[La Siembra]]** — la institución colectivista-teocrática emergente. Controla graneros, minería, logística y propaganda. Cree que el poder real debe residir en la estructura colectiva, y el [[Palan'Nur]] ser solo el símbolo sagrado necesario.\n- **[[Los de la Raíz]]** — la reacción. Predican que la verdadera voluntad de [[Engar Ab'Calen]] no puede vivir en asambleas ni concilios, sino solo en el Palan'Nur como avatar viviente. Apoyan a An'Fahal y empujan una revolución cultural-religiosa.\n- **[[Temürel]]** — el Abuelo, en medio. Quiere que el Palan'Nur siga siendo un decisor real, no un símbolo hueco, y protege ferozmente al joven An'Fahal.\n\n# Situación Geopolítica\nEn su cúspide militar y a la vez desgarrada por dentro. Los [[Sar'Qaim]] empujan al norte contra la confederación de [[Arminio El Dorado]]; adentro, [[La Siembra]] y [[Los de la Raíz]] se disputan el futuro. Y los líderes más lúcidos empiezan a ver la amenaza de largo plazo que de verdad importa: si el método de [[Aetharion]] madura, la doctrina de pura caballería no bastará. Dependen cada vez más de [[Casa Vorin]] para armas sofisticadas, información y grano.",
    "tree": {
      "title": "Los Cuatro Palan'Nur",
      "gens": [
        [
          {
            "name": "Anandëlion",
            "epithet": "El Primero — El Saladino"
          }
        ],
        [
          {
            "name": "Anandël",
            "epithet": "El Segundo — El Ciro"
          }
        ],
        [
          {
            "name": "Anan'Nur",
            "epithet": "El Tercero — agoniza"
          }
        ],
        [
          {
            "name": "An'Fahal",
            "epithet": "El Cuarto — el amanecer"
          }
        ]
      ]
    }
  },
  {
    "id": "wbase-vorin",
    "title": "Casa Vorin",
    "type": "faction",
    "content": "# Declaración\n\"El comercio es poder. La información es poder. Nosotros tenemos ambos. Todo tiene precio — y nosotros conocemos el de todos.\"\n\n*El Gremio — Los que Equilibran*\n\n# Origen\nFundada por [[Caëlen Vorin'el]], que la refundó sobre una sola idea: que nadie —ningún imperio, dios ni celestial— debe concentrar todo el poder. Ver más en su ficha.\n\n# Estructura\nCorporación hereditaria ritualizada. Cuatro títulos fundacionales, que hoy se heredan por adopción e indoctrinación:\n- **[[Caëlen]]** — el Arquitecto, estratega supremo. Identidad secreta.\n- **[[Aldren]]** — la Voz, el rostro diplomático.\n- **[[Ilvaën]]** — el Escudo, la fuerza militar: la amenaza que nunca se nombra.\n- **[[Maëlor]]** — la Garra, el amo de las sombras. Identidad secreta.\n\nSobre las instancias locales están la Primera Voz, el Primer Escudo y la Primera Garra. En el ápice, [[El Gremio]] — el consejo de todos los Caëlen activos, por consenso. Nadie sabe cuántos son.\n\n# Naturaleza real\nUna mafia sofisticada. Capa formal: finanzas, información, armas, seguros, arbitraje. Capa clandestina: asesinatos selectivos, manipulación de mercados, infiltración. Orquestan las [[Casas Isleñas]] del [[El Mar del Sur]] sin necesidad de poseerlas.\n\n# Arco histórico\nFueron ellos quienes habilitaron al **primer Von Richter** para usurpar el control de [[Urushan]], reacomodando el tablero a su favor. Mantienen lazos antiguos con linajes como [[Casa Veyral]], la de [[Lirael Veyral]].\n\n# Postura frente a las potencias\n- **[[Teocracia de Cherán]]:** oposición estructural. Cherán busca la dominación teocrática total — exactamente lo que Vorin existe para impedir.\n- **[[Aetharion]]:** relación ambigua y peligrosa. Útil a corto plazo porque debilita a los demás; existencialmente amenazante a medio plazo. Por eso cazan con urgencia el origen de su ventaja.\n- **[[Urushan]]:** cliente histórico, herramienta y a veces socio. Lo mantienen vivo y fracturado el tiempo que les convenga.\n\n# Situación Geopolítica\nTejen planes dentro de planes y venden información a todos los bandos. El auge de [[Aetharion]] los hace más indispensables y más ricos que nunca — y a la vez amenaza el principio mismo de su existencia. Hace poco movieron una cantidad de oro que nadie ha podido rastrear.",
    "tree": {
      "title": "Los Cuatro Títulos",
      "gens": [
        [
          {
            "name": "Caëlen Vorin'el",
            "epithet": "el fundador"
          }
        ],
        [
          {
            "name": "Caëlen",
            "epithet": "el Arquitecto — identidad secreta"
          },
          {
            "name": "Aldren",
            "epithet": "la Voz"
          },
          {
            "name": "Ilvaën",
            "epithet": "el Escudo"
          },
          {
            "name": "Maëlor",
            "epithet": "la Garra — identidad secreta"
          }
        ]
      ]
    }
  },
  {
    "id": "wbase-escarlata",
    "title": "La Orden Escarlata",
    "type": "faction",
    "content": "# Declaración\n\"No servimos a ningún rey. No tenemos sede. No tenemos ejército. Solo tenemos un código y la voluntad de morir por él. Llegamos cuando nadie más llega.\"\n\n*Las Hermandades — Los que llegan cuando nadie más llega*\n\n# Historia\nLa Orden nació de un acto de desobediencia que fue simultáneamente el más fiel al código que la fundó. **[[Ser Arthantos]]** — uno de los comandantes más honorados de **[[La Corte del Sol]]**, la mesa de caballeros más antigua de Urushan — supo de una invasión inminente a un pueblo completamente desamparado. Desafiando a Urushan, tomó a un grupo de caballeros y marchó a defenderlo.\n\nEn esa batalla enfrentó manifestaciones de [[Tel-Haud]] — ecos de la batalla que sigue ocurriendo en el intervelo — e hizo el sacrificio máximo: **[[El Gran Sacrificio]]**. Ese cisma fundó algo que lleva 700 años existiendo sin rey, sin capital, sin ejército. [[Thecia]] se convirtió en La Cuna de la Orden.\n\nNo son muchos. Veinte caballeros de la Orden valen por mil soldados comunes — son multiplicadores de fuerza. Llegan, organizan, entrenan y lideran. Cuando la batalla termina, se van.\n\nEl mundo los considera anacronismos. **El mundo se equivoca.**\n\n# Gobierno\n**Descentralizado.** 17-18 hermandades independientes unidas solo por el **Juramento Escarlata**. Cada hermandad tiene un **Primero de la Mesa**. No hay líder global. Tres corrientes internas definen cómo cada hermandad interpreta el Juramento:\n- **[[Los Tantos]]** — defienden hasta morir. El Juramento no tiene excepciones.\n- **[[Los Platos]]** — negocian. Cuando llegan, algo va a costar.\n- **[[Los Normales]]** — evalúan caso por caso qué acción salva más vidas.\n\n**[[La Mesa Completa]]** — la coalición de todas las hermandades. En 700 años solo ha ocurrido dos veces. Cuando se convoca, el mundo sabe que algo sin precedente está ocurriendo.\n\n# Figuras Clave\n- **[[Ser Arthantos]]** — El fundador. El Galahad de Avelir. El más puro. Hizo el sacrificio máximo hace 700 años.\n- **[[Hemmal]]** — Dios patrono. La Orden lo sostiene como la presencia del Emperador en el plano mortal. Los caballeros lo invocan en combate.\n- **Ser Gianni du Mont** — Primero de la Mesa (Los Normales). Defendió Tol Varen junto a [[Arminio El Dorado]] y partió sin despedirse.\n- **[[El Sobreviviente]]** — Sobrevivió la destrucción de su hermandad. Está convocando La Mesa Completa por tercera vez en la historia. Nadie sabe qué vio esa noche.\n\n# Situación Geopolítica\nLa Orden se desvanece — el mundo político y comercial la dejó obsoleta. Pero en su momento más débil, la batalla entre el Emperador y Tel-Haud está alcanzando un clímax que rompe el intervelo. Una hermandad entera fue destruida en una noche por criaturas que no pertenecen a este mundo. La Mesa Completa ha sido convocada."
  },
  {
    "id": "wbase-aetharion",
    "title": "Aetharion",
    "type": "faction",
    "content": "# Declaración\n\"Evolución. Táctica. Estrategia. Temple. Magia al servicio de la victoria. El [[El Jardín Eterno]] no se detiene — crece o muere.\"\n\n*El Jardín Eterno — Los Aetheri*\n\n# Fundación y Visión\nLas casas heráldicas que hoy forman Aetharion vivieron siglos fragmentadas y humilladas bajo el Primer Imperio, [[Urushan]]. Hace unos 200 años, Urushan perdió el control real sobre ellas: casi independientes militarmente, pero aún atadas al centro por la economía.\n\n[[Alendi Galathas]] encendió la chispa política; **[[Lirael Veyral]], su esposa, encendió la visión.** Juntos convirtieron un puñado de casas resentidas en un organismo único. Tras la muerte de Lirael, el Jardín se volvió la deuda sagrada de Alendi.\n\n# Gobierno\nRepública militar meritocrática, casi espartana. Sin nepotismo real: el poder se gana por dominio demostrable, y [[Anariel]] diseña las pruebas.\n- **Pruebas de 3 años** — ascensos dentro de cada primarca; competencia constante.\n- **Pruebas de 5 años** — para los cargos supremos. Faltan **2 años** para la próxima.\n\nLos **Tres Primarcas Supremos**:\n- **Comercio** → [[Valen Galathas]], genio económico.\n- **Guerra** → era [[Balorin Galathas]]; tras su asesinato, [[Alendi Galathas]] lo ocupa de forma interina.\n- **Pueblo** → [[Kaelen Dravik]], ingeniero social llegado por mérito puro.\n\nDebajo, los [[Los Primarcas]] de dominio, los [[Los Galadrim]] como guardia de élite, y [[Anariel]] como [[Heraldin Galas]] al mando de la tecnología.\n\n# El Umbral \"Nuclear\"\nLo que se demostró en [[La Batalla de Tol Marin]] no fue solo una victoria: fue la primera prueba pública de que la magia puede **sistematizarse y aplicarse industrialmente**. Copiar una máquina no basta — sin entender el principio que usa [[Anariel]], los demás solo imitan la superficie. Por eso los servicios de inteligencia de [[Urushan]], [[Teocracia de Cherán]] y [[Casa Vorin]] ya no roban planos: cazan el **origen** del avance, y ese origen es Anariel.\n\n# Situación Geopolítica\nA ocho meses de [[La Batalla de Tol Marin]], el equilibrio del Mar Central cambió de forma permanente y el tiempo juega a favor del Jardín. Proteger a Anariel y a los cuadros técnicos es prioridad absoluta. Pero adentro crece una tensión silenciosa: [[Alendi Galathas]] concentra demasiado — Arkhon, Primarca de Guerra interino y voluntad fundacional — en un sistema que él mismo diseñó para que el poder se ganara, no se acumulara."
  },
  {
    "id": "wbase-urushan",
    "title": "Urushan",
    "type": "faction",
    "content": "# Declaración\n\"El Primer Imperio. La flota más antigua. La tradición más profunda. Llevamos milenios aquí — y seguiremos cuando todos los demás hayan caído.\"\n\n*El Primer Imperio — La Tormenta del Mar*\n\n# Historia\nUrushan nació de las cenizas del Rompimiento del Velo. Heredaron la flota del Emperador — naves extraordinarias forjadas en otra era, imbuidas con los [[Cuencos de Poder]], **irreemplazables y sin que nadie sepa repararlas completamente**. Con esas naves construyeron el dominio naval más poderoso de Avelir.\n\nMilenios de historia los convirtieron en los maestros de la intriga, la política y la manipulación. Nadie mueve los hilos del poder con más elegancia que la aristocracia de Urushan. **Nadie muere de vejez en su corte.**\n\nDe su seno nació también el cisma más famoso de la historia: **[[La Corte del Sol]]** — su mesa de caballeros más antigua — vio partir a [[Ser Arthantos]] hacia la fundación de la Orden Escarlata hace 700 años.\n\n# Gobierno\n**Matriarcado pragmático** — no por ideología sino por pragmatismo dinástico. Las mujeres gobiernan, los hombres guerrean. La Emperatriz lidera; **[[El Almirantazgo]]** tiene un peso político profundo. La capital se muda con cada nueva dinastía — hoy es [[Artesh]], cuna de los Von Richter.\n\n# La Dinastía Von Richter\n- **[[Bastian Von Richter]]** — El Gran Almirante fundador. Derrocó a la dinastía anterior y perfeccionó la intriga hasta convertirla en doctrina.\n- **[[Liria Von Richter]], Amanecer de Artesh** — La abuela. Una época de construcción y esperanza.\n- **[[Alia Von Richter]], La Torre de Urushan** — La madre. Rechazó la visión de [[Alarion]] — ese rechazo detonó la rebelión.\n- **[[Iridel Von Richter]], La Tormenta del Mar** — La Emperatriz actual.\n\n# Figuras Clave\n- **[[Iridel Von Richter]] — La Tormenta del Mar** — La Emperatriz. Brillante, maestra de la intriga. Sabe que el colapso es inevitable. Opera de todas formas.\n- **[[Alarion]] — antes Aldric Von Rostov** — El almirante que abandonó nombre, apellido y lealtad. Desde las ruinas de [[Ashlan]] convoca a **[[Los Peregrinos]]**.\n- **[[Davorel Von Kersig]]** — El Gran Almirante. Comanda las fuerzas de la Emperatriz contra su amigo sin una sola lágrima.\n- **[[Los Soleados]]** — Los creyentes del Emperador. En un imperio secular, creer te distingue. Su número crece con Alarion.\n\n# Economía\nRenta dual en declive. **Renta naval** — peajes, protección de convoyes, control de rutas: históricamente su fuente principal de poder, hoy gravemente debilitada tras la pérdida de [[Tol Marin]] y la degradación de la flota ancestral. **Renta feudal** — la agricultura tradicional de las grandes casas nobles: base estable pero poco eficiente. No son productores ni innovadores: son extractores de peajes y de excedente agrícola.\n\n# Situación Geopolítica\nDerrotados en [[Tol Marin]] por primera vez en siglos. La traición de [[Alarion]] sangra por dentro. El Primer Imperio está herido — y un imperio herido con la flota más grande del mundo es más peligroso que nunca.",
    "tree": {
      "title": "Dinastía Von Richter",
      "gens": [
        [
          {
            "name": "Bastian Von Richter",
            "epithet": "El Gran Almirante fundador"
          }
        ],
        [
          {
            "name": "Liria Von Richter",
            "epithet": "Amanecer de Artesh"
          }
        ],
        [
          {
            "name": "Alia Von Richter",
            "epithet": "La Torre de Urushan"
          }
        ],
        [
          {
            "name": "Iridel Von Richter",
            "epithet": "La Tormenta del Mar"
          }
        ]
      ]
    }
  },
  {
    "id": "wbase-pueblos",
    "title": "Los Pueblos sin Techo",
    "type": "faction",
    "content": "# Declaración\n\"Sin trono. Sin templo. Sin cadenas. Libres antes que cualquier imperio existiera. Libres cuando todos hayan caído.\"\n\n*La Confederación del Norte*\n\n# Historia\nLos Pueblos sin Techo son la **confederación del norte** que [[Arminio El Dorado]] unió alrededor de la fortaleza de [[Tol Varen]] — resistencia organizada nacida contra las purgas de la [[Teocracia de Cherán]]. Ya no es un nombre genérico para todo lo que vive entre imperios: es esta alianza concreta, marcada con el cuervo y el buitre, los animales que aparecen donde hay cambio y muerte.\n\nSon una de las cinco identidades del [[El Mundo Entre Imperios]] — y la más combativa.\n\n# Gobierno\nLiderazgo por consejo, no por trono. [[Arminio El Dorado]] es el unificador, no el rey — un Vercingétorix, no un césar. Que no exista la corona es exactamente el punto: aconsejan, no gobiernan.\n\n# Figuras Clave\n- [[Arminio El Dorado]] — el Resistente de Tol Varen, la figura que dio forma a la confederación.\n- [[Los Caballeros Errantes]] — muchos de la Orden Escarlata, que pelearon en Tol Varen y se quedaron.\n\n# Situación Geopolítica\nLos [[Sar'Qaim]] de Cherán empujan al norte contra ellos. Los imperios empiezan a prestarles atención — justo en el momento en que menos pueden permitirse otra crisis. Una fuerza natural de la historia: aparece cuando los imperios se sobreextienden."
  },
  {
    "id": "wpub-iridel",
    "title": "Iridel Von Richter",
    "type": "character",
    "content": "# Quién es\nLa Emperatriz de [[Urushan]] — **La Tormenta del Mar**. 31 años. Cuarta generación de la dinastía Von Richter en el trono. Considerada en todas las cortes la mujer más bella de Avelir: esgrimista formada, elegancia severa, ojos esmeralda. Se mueve como quien nunca ha necesitado alzar la voz.\n\n# Historia\nHeredó el trono de su madre, **[[Alia Von Richter]], La Torre de Urushan** — la emperatriz que rechazó la visión de [[Alarion]] y detonó con ello la rebelión de Los Peregrinos. Nieta de **[[Liria Von Richter]], Amanecer de Artesh**, bisnieta de **[[Bastian Von Richter]]**, el Gran Almirante que llevó a la dinastía al poder desde [[Artesh]].\n\nSu esposo murió en batalla, en circunstancias que la corte todavía discute en voz baja. Ha tenido seis hijos; el registro imperial consigna que uno murió al nacer.\n\n# Rol actual\nGobierna un imperio herido: la derrota de [[Tol Marin]], el cisma de [[Alarion]] y una flota milenaria que se deteriora sin que nadie sepa repararla. Su respuesta ha sido implacable — purgas políticas contra las casas que vacilan, en una corte donde nadie muere de vejez.",
    "tree": {
      "title": "Dinastía Von Richter",
      "gens": [
        [
          {
            "name": "Bastian Von Richter",
            "epithet": "El Gran Almirante fundador"
          }
        ],
        [
          {
            "name": "Liria Von Richter",
            "epithet": "Amanecer de Artesh"
          }
        ],
        [
          {
            "name": "Alia Von Richter",
            "epithet": "La Torre de Urushan"
          }
        ],
        [
          {
            "name": "Iridel Von Richter",
            "epithet": "La Tormenta del Mar"
          }
        ]
      ]
    }
  },
  {
    "id": "wpub-alendi",
    "title": "Alendi Galathas",
    "type": "character",
    "content": "# Quién es\nEl **[[Arkhon Galas]]** de [[Aetharion]] — fundador del Jardín Eterno. 56 años. Cabello atravesado de plata, presencia cansada y afilada a la vez: un Odiseo curtido que sabe que probablemente no vivirá para ver la edad dorada de lo que construyó.\n\n# Historia\n*Alendi Galathas* — Cúmulo de Estrellas, [[Casa Gal'Calad]]. A los 14 años presenció la flagelación pública de su padre — la última humillación de su casa a manos de [[Urushan]]. Esa noche huyó, y ese trauma forjó su primera voluntad: que ninguna casa heráldica volviera a arrodillarse.\n\nAños después se casó con **[[Lirael Veyral]]**, de una casa heráldica mucho más poderosa — la primera unificación real entre casas importantes. Y aquí está la verdad que pocos conocen: **la visión del Jardín Eterno nació de Lirael, no de él.** Él aportó la voluntad de hierro y la capacidad de ejecutar; ella, el propósito. Fue ella quien le presentó a [[Anariel]] y la primera en entender que la magia podía sistematizarse.\n\n# La deuda sagrada\n[[Lirael Veyral]] murió cuando Alendi tenía 46 años — hace diez. Desde entonces el Jardín dejó de ser un proyecto compartido y se convirtió en su **deuda sagrada**: todo lo que construye, lo construye en nombre de ella.\n\n# Familia y cargos\nTres hijos: [[Aleria Galathas]] la Estadista, [[Valen Galathas]] el del Comercio, y [[Balorin Galathas]] — criado como la Primera Espada, asesinado hace dos años. Dos años después, las águilas tomaron [[Tol Marin]]. Hoy Alendi ocupa además el cargo de **Primarca Supremo de la Guerra** de forma interina, tras la muerte de Balorin — una concentración de poder que empieza a tensar el sistema que él mismo creó.\n\n# Rol actual\nDirige la república militar en su momento de máximo prestigio. Desde el asesinato se ha vuelto más implacable — y más cercano que nunca a [[Anariel]].",
    "tree": {
      "title": "Casa Galathas",
      "gens": [
        [
          {
            "name": "Alendi Galathas",
            "epithet": "Arkhon Galas"
          }
        ],
        [
          {
            "name": "Aleria Galathas",
            "epithet": "la Estadista"
          },
          {
            "name": "Balorin Galathas",
            "epithet": "la Primera Espada — asesinado",
            "dead": true
          },
          {
            "name": "Valen Galathas",
            "epithet": "el Administrador"
          }
        ]
      ]
    }
  },
  {
    "id": "wpub-alarion",
    "title": "Alarion",
    "type": "character",
    "content": "# Quién es\nAntes **Aldric Von Rostov** — el almirante más prestigiado de su generación en [[Urushan]]. Hoy: un solo nombre, sin apellido, sin Von, sin linaje. Líder de **[[Los Peregrinos]]**. Unos 41 años; cabello oscuro y algo salvaje, mirada ferviente, túnicas sencillas con bordado dorado discreto.\n\n# Historia\nEstuvo a punto de ahogarse — y salió del agua diciendo que había visto al Emperador. Llevó la visión ante el trono; **[[Alia Von Richter]], La Torre de Urushan**, la rechazó. Ese rechazo lo detonó todo: Aldric abandonó su nombre y se instaló en las ruinas de [[Ashlan]], la isla que se dice fue el trono del Emperador.\n\nNo dice \"soy mejor que los Von Richter\". Dice \"yo vengo del origen — ellos son los usurpadores\". Sostiene que la dinastía perdió la legitimidad divina.\n\n# Rol actual\nSus seguidores no son rebeldes — son devotos, y eso los hace imposibles de derrotar políticamente. Llegan a Ashlan en peregrinación, no en levantamiento. Su antiguo compañero de academia, [[Davorel Von Kersig]], dirige la cacería en su contra."
  },
  {
    "id": "wpub-davorel",
    "title": "Davorel Von Kersig",
    "type": "character",
    "content": "# Quién es\nEl **Gran Almirante** de [[Urushan]] — el comandante de mayor confianza de la Emperatriz. Unos 41 años. Frío, calculador, brillante: el producto perfecto del sistema de Urushan. Piel pálida, ojos gris azulado, uniforme naval impecable, expresión controlada.\n\n# Historia\nAmigo de infancia y compañero de academia de [[Alarion]] — el hombre al que hoy persigue. Su lealtad a [[Iridel Von Richter]] no nace del afecto sino de la lógica y el entendimiento mutuo. Comanda contra su amigo sin una sola lágrima.\n\n# Rol actual\nCarga dos guerras a la vez: la cacería de Alarion hacia adentro, y la amenaza de [[Aetharion]] hacia afuera — con una flota milenaria que se deteriora en puerto."
  },
  {
    "id": "wpub-anariel",
    "title": "Anariel",
    "type": "character",
    "content": "# Quién es\n**[[Heraldin Galas]]** — La Heraldo de [[Aetharion]]. Arquitecta de la ventaja tecnológica del Jardín: la alquimia bélica, los objetos imbuidos, los [[Cuencos de Poder]] convertidos en arma. Alta, de piel pálida y luminosa, cabello entre plata y oro, ojos gris claro. Una belleza que no parece del todo de este mundo.\n\n# Historia\nNadie sabe de dónde viene, y casi nadie sabe siquiera que existe: opera en las sombras del imperio. Fue [[Lirael Veyral]] quien la presentó a [[Alendi Galathas]] y quien primero entendió su verdadero potencial — no un arma puntual, sino la posibilidad de sistematizar la magia. Anariel aceptó un voto: elevar y proteger a la línea Galathas mientras persiga la excelencia.\n\n**No hay ni habrá emoción romántica entre ella y Alendi.** Lo suyo es respeto absoluto, utilidad mutua y lealtad ritual hacia la visión y la sangre. Su personalidad ajena y fría es, para Alendi, el soporte más estable que tiene. Solo habla de verdad con la sangre Galathas.\n\n# Rol actual\nLa muerte de [[Balorin Galathas]] — al que ayudó a criar — la afectó más de lo que ella misma esperaba. Y tras [[La Batalla de Tol Marin]] dejó de ser \"la consejera en las sombras\" para volverse el activo geopolítico más valioso y más cazado del continente: todos los imperios quieren el origen de la ventaja del Jardín, y ese origen es ella."
  },
  {
    "id": "wpub-tolmarin",
    "title": "Tol Marin",
    "type": "place",
    "content": "# Descripción\nFortaleza legendaria de [[Urushan]] — anterior al Rompimiento del Velo — sostenida durante siglos como símbolo del poder imperial sobre el Mar Central. Hoy: la primera gran posesión urushani en caer en batalla abierta.\n\n# Ubicación\nSobre el Mar Central, en la frontera sur del dominio de Urushan — frente al ascenso de [[Aetharion]].\n\n# Lo que pasó aquí\nVer [[La Batalla de Tol Marin]].\n\n# Lo que se dice\nQue la fortaleza era inexpugnable — hasta que dejó de serlo. Que su caída no se debió al número, sino a una forma de pelear que el mundo todavía no entiende."
  },
  {
    "id": "wpub-ashlan",
    "title": "Ashlan",
    "type": "place",
    "content": "# Descripción\nIsla fortificada anterior al Rompimiento del Velo, con milenios de abandono. Se dice que fue el trono del Emperador. Su nombre data de una época tan antigua que su significado se perdió en el tiempo.\n\n# Ubicación\nFrente a las costas de [[Urushan]].\n\n# Quiénes viven aquí\n[[Alarion]] y **[[Los Peregrinos]]** — que no llegan como rebeldes, sino como peregrinos.\n\n# Lo que se dice\nQue si las reliquias del Emperador existen, si el Velo se está desgarrando, si el Emperador intenta regresar — Ashlan podría ser exactamente el lugar donde eso ocurra."
  },
  {
    "id": "wpub-artesh",
    "title": "Artesh",
    "type": "place",
    "content": "# Descripción\nCuna de la dinastía Von Richter y actual capital imperial de [[Urushan]]. Arquitectura medieval oscura y sofisticada. En Urushan la capital se muda con cada nueva dinastía — Artesh es capital porque los Von Richter reinan.\n\n# Quiénes viven aquí\nLa corte imperial — el lugar más sofisticado y peligroso de Avelir. Y la **[[Escuela Naval Real]]**, donde se forma la élite aristocrática completa: intriga, política, táctica, estrategia, comercio, finanzas.\n\n# Lo que se dice\nQue nadie muere de vejez en su corte."
  },
  {
    "id": "wpub-tolvaren",
    "title": "Tol Varen",
    "type": "place",
    "content": "# Descripción\nUna antigua fortaleza del sistema defensivo de la era del [[El Emperador]] — masiva, vertical, casi brutal en su arquitectura, incrustada en una cordillera. [[Arminio El Dorado]] y las tribus aliadas la fortificaron de forma preventiva contra las purgas de la [[Teocracia de Cherán]].\n\n# El Asedio\nCherán llegó con su doctrina habitual de movilidad en campo abierto, esperando un asedio corto o un asalto rápido. Cometió el error clásico: sitiar un lugar diseñado para negarle todas las ventajas que posee. [[Arminio El Dorado]] convirtió la defensa en ataque:\n- Usó la fortaleza como base segura para salidas precisas y devastadoras.\n- Los objetivos no eran los soldados, sino lo que un ejército a caballo no puede permitirse perder: monturas, forraje y líneas de suministro.\n- Cada intento de montar campamentos estables o acercar máquinas de asedio recibía golpes rápidos desde la fortaleza.\n- Con el tiempo, el ejército sitiador perdió su movilidad, se desmoralizó y quedó sobreextendido en terreno hostil.\n- Cuando Arminio juzgó el momento, abrió las puertas y lanzó el contraataque decisivo.\n\n# Su significado\nNo fue resistencia pasiva: fue **la primera gran humillación terrestre de la doctrina militar de Cherán**. Entre sus defensores estuvo [[Ser Gianni du Mont]], Primero de la Mesa de [[Los Normales]], que peleó junto a Arminio y se marchó sin despedirse. Tol Varen se volvió el símbolo de que la resistencia es posible — y el núcleo alrededor del cual se formó la confederación de [[Los Pueblos sin Techo]]."
  },
  {
    "id": "wpub-batalla-tolmarin",
    "title": "La Batalla de Tol Marin",
    "type": "story",
    "content": "# Qué fue\nLa toma de [[Tol Marin]] por [[Aetharion]] — la primera derrota de [[Urushan]] en batalla abierta en siglos. El evento que rompió el equilibrio del Mar Central. El presente de Avelir transcurre unos ocho meses después de esta batalla.\n\n# Cómo ocurrió — las tres fases\nDos años después del asesinato de [[Balorin Galathas]], Aetharion lanzó una campaña cuidadosamente preparada. La intención inicial era tomar la fortaleza por medios convencionales y mantener en secreto, el mayor tiempo posible, el alcance real de su tecnología.\n\n**Fase I — El asedio clásico.** Bloqueo convencional y asaltos limitados. Urushan, pese a su larga decadencia, aún poseía el conocimiento más profundo del continente en guerra de fortalezas. Los defensores resistieron; la moral se mantuvo alta. Por orden estricta de [[Alendi Galathas]], los comandantes retuvieron sus máquinas más avanzadas.\n\n**Fase II — La decisión.** Semanas de resistencia dejaron claro que lo clásico no bastaría. El costo político de un fracaso prolongado se volvió inaceptable. Alendi, tras consultar con [[Valen Galathas]] y [[Anariel]], autorizó el despliegue limitado de las máquinas de guerra protoindustriales y la aplicación sistemática de magia que solo Aetharion posee a escala — con la orden de destruir cualquier máquina en riesgo de ser capturada intacta.\n\n**Fase III — La ruptura.** El cambio fue visible y decisivo. Muros que habían resistido siglos cedieron ante motores coordinados de vapor y runas y un fuego mágico-industrial disciplinado. El combate en las brechas fue brutal. Los defensores urushani pelearon con la elegancia y la terquedad de su tradición, pero enfrentaban una forma de guerra que nunca habían visto: repetible, calculada, sistematizada. La fortaleza cayó. Muchos testigos describieron el momento como \"el fin de una era\".\n\n# Repercusiones\n- **Urushan:** humillación masiva — acelera el cisma de [[Alarion]] y las purgas de [[Iridel Von Richter]].\n- **Aetharion:** prestigio y momentum enormes, y la revelación del \"umbral\": la magia hecha industria.\n- **[[Teocracia de Cherán]]:** usa la victoria como propaganda (\"el nuevo demonio\"), pero sus líderes lúcidos ([[Temürel]]) ven la amenaza existencial de largo plazo.\n- **[[Casa Vorin]]:** gana con ambos bandos y desplaza su prioridad de inteligencia hacia el origen del salto tecnológico."
  },
  {
    "id": "wpub-aleria",
    "title": "Aleria Galathas",
    "type": "character",
    "content": "# Quién es\nLa Estadista de [[Aetharion]] — hija de [[Alendi Galathas]], ~37 años. Considerada la más brillante de los tres hermanos. Presencia marcial imponente; formada para la guerra y para la mesa de negociación.\n\n# Su rol\nNo es Primarca Suprema: opera **dentro de la oficina del Primarca Supremo del Pueblo, [[Kaelen Dravik]]**, a cargo de relaciones políticas, construcción de alianzas, la narrativa pública del sacrificio colectivo, y el enlace con las casas heráldicas y con [[Casa Vorin]]. El poder que ejerce es real aunque no lleve el título supremo.\n\n# Situación\nEs la gran tejedora de alianzas del Jardín. Se le ve cada vez más cerca de Casa Vorin — y hay quien asegura que sus cartas también viajan hacia [[Ashlan]]."
  },
  {
    "id": "wpub-valen",
    "title": "Valen Galathas",
    "type": "character",
    "content": "# Quién es\nEl **Primarca Supremo del Comercio** de [[Aetharion]] — hijo menor de [[Alendi Galathas]], ~35 años. Dicen que es ver al Arkhon de joven: cabello negro corto, ojos azules intensos.\n\n# Rol actual\nEl arquitecto económico del Jardín, obsesionado con [[El Mar del Sur]]: sostiene que quien estabilice el archipiélago controlará la economía del futuro de Avelir. Llegó al cargo supremo por mérito, como manda el sistema."
  },
  {
    "id": "wpub-balorin",
    "title": "Balorin Galathas",
    "type": "character",
    "content": "# Quién fue\nLa Primera Espada de [[Aetharion]] — hijo mayor de [[Alendi Galathas]], criado desde niño para ser el General del Jardín Eterno. [[Anariel]] misma ayudó a criarlo.\n\n# Su muerte\nAsesinado hace dos años. Nunca se nombró públicamente a los responsables. Su muerte encendió al Jardín: dos años después, las águilas tomaron [[Tol Marin]].\n\n# Lo que se dice\nQue [[Anariel]] no volvió a ser la misma. Que el Arkhon tampoco."
  },
  {
    "id": "wpub-arthantos",
    "title": "Ser Arthantos",
    "type": "character",
    "content": "# Quién fue\nUno de los comandantes más honorados de **[[La Corte del Sol]]** — la mesa de caballeros más antigua de [[Urushan]] — y el fundador de la Orden Escarlata. El Galahad de Avelir.\n\n# El Gran Sacrificio\nHace 700 años supo de una invasión inminente contra un pueblo completamente desamparado. Desafiando a su imperio, tomó a un grupo de caballeros y marchó a defenderlo. En esa batalla enfrentó manifestaciones de [[Tel-Haud]] — y pagó el precio máximo. Ese acto de desobediencia, que fue a la vez la fidelidad más pura al código, fundó una orden que lleva siete siglos sin rey, sin capital y sin ejército.\n\n# Su legado\n[[Thecia]] se convirtió en la Cuna de la Orden. Cada caballero que jura el Juramento Escarlata jura sobre su nombre."
  },
  {
    "id": "wpub-caelen",
    "title": "Caëlen Vorin'el",
    "type": "character",
    "content": "# Quién es\nEl fundador de [[Casa Vorin]] — y, contra toda expectativa, **sigue vivo**. Hijo menor de un linaje élfico guerrero de raíces anteriores al [[El Rompimiento del Velo]], el que nadie miraba.\n\n# Lo que vio\nSiendo aún joven vivió el **Gran Rompimiento del Velo**, hace unos 5,000 años. Conoció y admiró al [[El Emperador]]. Y presenció algo que lo marcó para siempre: cómo algo tan grandioso se desmoronó tras la batalla, y cómo el vacío de poder que dejó produjo siglos de devastación absoluta.\n\n# Su filosofía\nDe esa herida nació el núcleo secreto de Casa Vorin, una sola idea:\n> **Nadie debe tener todo el poder.**\n\nNi un emperador, ni un dios, ni un estado, ni una celestial. El poder absoluto siempre termina capturado, distorsionado o convertido en arma — y su caída genera vacíos peores que la tiranía misma. Caëlen decidió que su casa dejaría de ser un linaje guerrero más para convertirse en la fuerza que financia, informa y equilibra a todos los demás, de modo que nunca vuelva a existir un monopolio —ni un vacío— de ese tamaño.\n\n# Lo que fundó\nNo solo una institución: **una especie.** Entrar a Casa Vorin significa que tu cara cambia, tu nombre cambia y tu historia desaparece. Por su edad y su memoria, Caëlen es de los poquísimos que intuye la profundidad real de las amenazas que se avecinan."
  },
  {
    "id": "wpub-hemmal",
    "title": "Hemmal",
    "type": "character",
    "content": "# Quién es\nEl dios patrón de la Orden Escarlata. Los caballeros lo invocan en combate — el nombre que pronuncian cuando cargan contra lo imposible.\n\n# Lo que la Orden sostiene\nQue Hemmal es la presencia del Emperador en el plano mortal — que cuando un caballero cumple el código hasta el final, no muere solo. Fuera de la Orden, pocos saben siquiera su nombre."
  },
  {
    "id": "wpub-sobreviviente",
    "title": "El Sobreviviente",
    "type": "character",
    "content": "# Quién es\nEl único caballero que salió con vida la noche en que una hermandad entera de la Orden Escarlata fue aniquilada por algo que no pertenece a este mundo. Nadie sabe con certeza qué vio — y él no lo cuenta.\n\n# Lo que se rumora\nQue pertenece a una rama de la Orden de la que casi nadie ha oído hablar. Que aparecen cuando el Velo se rompe de más, hacen su trabajo en silencio y desaparecen. Que ninguno de ellos llega a viejo. Se dice —sin pruebas— que la noche de la aniquilación ocurrió hace unos ocho meses, y que desde entonces él no ha vuelto a dormir una noche entera.\n\n# Rol actual\nEstá convocando [[La Mesa Completa]] — la coalición de todas las hermandades — por tercera vez en 700 años de historia. Las dos anteriores marcaron épocas. Cuando la Mesa se reúne, el mundo entero sabe que algo sin precedente está ocurriendo."
  },
  {
    "id": "wpub-gianni",
    "title": "Ser Gianni du Mont",
    "type": "character",
    "content": "# Quién es\nPrimero de la Mesa de [[Los Normales]] — la corriente de la Orden Escarlata que evalúa, caso por caso, qué acción salva más vidas. Nobleza secundaria del norte de [[Urushan]]: lo bastante vieja para conocer los antiguos ideales imperiales, lo bastante periférica para no corromperse del todo en la corte de [[Artesh]].\n\n# Su mente\nUn estratega puro. Donde [[Arminio El Dorado]] lee el campo de batalla en el momento, Gianni ve el tablero largo: el suministro, la moral a lo largo de semanas, qué objetivos hay que destruir para que el enemigo no se recupere, el instante exacto para pasar de la defensa al ataque decisivo. Se complementaron casi a la perfección.\n\n# Por qué dejó Urushan\nPresenció — y se esperaba que aceptara — una decisión elegante, legal, incruenta sobre el papel, en la que una población menor fue sacrificada \"por el bien mayor del Imperio\". La capacidad del sistema de cometer atrocidades sin siquiera considerarlas como tales lo quebró. Se unió a la Orden Escarlata porque era la única institución que había visto que aún operaba con un código innegociable.\n\n# Lo que representa\nUna hemorragia silenciosa dentro de [[Urushan]]: nobles idealistas o desilusionados de segundo y tercer rango que abandonan el sistema. Algunos derivan hacia [[Alarion]] y [[Los Peregrinos]]; otros, como Gianni, eligen la Orden Escarlata."
  },
  {
    "id": "wpub-arminio",
    "title": "Arminio El Dorado",
    "type": "character",
    "content": "# Quién es\nEl líder de [[Los Pueblos sin Techo]] — el Resistente de [[Tol Varen]]. Un unificador de tribus, no un rey: un Vercingétorix. Alto e imponente, con rasgos que mezclan una fuerza eslava con un aire ligero de la estepa centroasiática; cabello oscuro, barba práctica de guerrero. Su armadura funde el estilo de la Rus de Kiev con una robustez casi enana — placas gruesas con motivos de cuervos, lobos y árboles, hechas para durar generaciones y aguantar castigo real.\n\n# Historia\nSirvió durante años como comandante competente en el **ejército de la [[Teocracia de Cherán]]**. Nunca fue uno de los generales más altos, pero entendió su táctica, su logística y su mentalidad desde adentro. Participó en al menos una campaña de purificación — y ver el genocidio de cerca rompió algo en él. Comprendió que la misma máquina vendría, tarde o temprano, por su propio pueblo.\n\nCuando la purga giró al norte, la mayoría de los líderes tribales prefirió negociar (\"solo quieren que aceptemos a [[Engar Ab'Calen]]\"). Arminio sabía por experiencia que empieza suave y luego lo consume todo. Convenció a los que quisieron escuchar, se replegó en buen orden a la antigua fortaleza de [[Tol Varen]] y envió emisarios a la Orden Escarlata.\n\n# Carácter militar\nUn genio táctico puro del campo de batalla. Lee el movimiento, el tiempo y la moral en tiempo real, y da lo mejor de sí en lo más espeso del combate y en salidas precisas y brutales."
  },
  {
    "id": "wpub-thecia",
    "title": "Thecia",
    "type": "place",
    "content": "# Descripción\nLa Cuna de la Orden Escarlata. El lugar donde el cisma de [[Ser Arthantos]] se volvió institución — donde cada generación de caballeros jura el Juramento Escarlata.\n\n# Lo que se dice\nQue no es una capital, porque la Orden no tiene capital. Es algo más antiguo: un origen."
  },
  {
    "id": "wpub-mardelsur",
    "title": "El Mar del Sur",
    "type": "place",
    "content": "# Descripción\nEl archipiélago del sur — las **Islas Rotas** al oeste y las **Agujas Rotas** al este. Antes del Rompimiento del Velo esta región no era un mar: era el granero del continente, una de las zonas más fértiles de Avelir. El cataclismo la hundió, y lo que quedó es un laberinto de cientos de islas y corrientes traicioneras.\n\n# Quiénes viven aquí\nLa fertilidad sobrevivió al hundimiento: casi cualquier isla puede autoabastecerse. Eso permitió que florecieran pueblos libres y las **[[Casas Isleñas]]** — gremios familiares ferozmente autónomos, cada uno dueño de una cadena de valor:\n- **[[Casa Veyra]]** — granos y alimentos. La despensa de Avelir.\n- **[[Casa Thorne]]** — minerales, hierro y metales.\n- **[[Casa Solara]]** — madera, construcción naval y resinas.\n- **[[Casa Kael]]** — especias, hierbas medicinales y tintes.\n- **[[Casa Riven]]** — sal, conservación y pesca industrial.\n\nSi un imperio intenta conquistar a una, las demás se alían y hacen que el costo sea impagable. [[Casa Vorin]] opera entre ellas como el intermediario indispensable.\n\n# Lo que se dice\nQue quien estabilice el archipiélago controlará la economía del futuro — y que [[Valen Galathas]] lo sabe mejor que nadie."
  },
  {
    "id": "wpub-anannur",
    "title": "Anan'Nur",
    "type": "character",
    "content": "# Quién es\nEl **Tercer [[Palan'Nur]]** de la [[Teocracia de Cherán]] — el Ungido que llevó al imperio a su cúspide institucional. Su generación lo llama el Darío: el que convirtió la conquista en administración y la fe en Estado.\n\n# Rol actual\nAgoniza. Entre rezos y conspiraciones, todo Cherán contiene la respiración: su muerte marcará el inicio de una nueva era — y nadie sabe todavía de qué clase."
  },
  {
    "id": "wpub-anfahal",
    "title": "An'Fahal",
    "type": "character",
    "content": "# Quién es\nEl **Cuarto [[Palan'Nur]]** de la [[Teocracia de Cherán]] — el Ungido actual. Elevado al trono a los 14 años tras la muerte de [[Anan'Nur]]. Su nombre significa \"el amanecer\": el eco final de un nombre que se ha erosionado desde [[Anandëlion]], el fundador, hasta quedar en una sílaba.\n\n# Su posición imposible\nLlegó al trono en el peor momento: su ceremonia de elevación fue usada por [[La Siembra]] para subrayar la institución por encima de la persona. [[Los de la Raíz]] lo alzan como bandera. [[Temürel]] lo protege. El niño-Ungido es, a la vez, el símbolo más poderoso del imperio y su pieza más frágil.\n\n# El medio-hermano\nExiste un medio-hermano menor — de siete u ocho años — concebido fuera de la unión sagrada, con una sacerdotisa ferviente y muy dogmática. Al principio An'Fahal lo despreció por la \"mancha\" de su origen; con el tiempo llegó a quererlo de verdad, y hoy lo protege. El niño es más radical y tradicionalista que él — una amenaza latente para [[La Siembra]], y una carga de largo plazo que alguien, algún día, podría querer eliminar."
  },
  {
    "id": "wpub-temurel",
    "title": "Temürel",
    "type": "character",
    "content": "# Quién es\n**Abu'Amin — \"El Abuelo\".** El general más respetado de la [[Teocracia de Cherán]] sin ostentar título formal alguno. ~72 años: un anciano todavía imponente, como un Filipo II envejecido. Rostro marcado por una vieja cicatriz sobre la ceja izquierda, cabello y barba de un blanco puro siempre cuidados, ojos oscuros pequeños y penetrantes. Viste la estética ceremonial plena de Cherán — túnicas pesadas en negro, púrpura y rojo sangre, bordadas en oro con símbolos de [[Engar Ab'Calen]].\n\n# Historia\nNació en una de las tribus de arqueros a caballo más antiguas y letales de las estepas del este — el pueblo que se convirtió en el **núcleo militar de élite** del imperio, el paralelo de los isaurios en Bizancio: la mayoría de los mejores comandantes todavía salen de esa raíz.\n\nDe joven oficial vivió la unificación. Entendió antes que nadie que la visión religiosa del primer [[Palan'Nur]] podía convertirse en el arma política más poderosa que las tribus hubieran tenido jamás. Dio al movimiento su apoyo militar decisivo, ayudó a aplastar rivales, y durante el reinado del segundo Ungido cimentó su lugar para siempre al casarse dentro de la familia del Palan'Nur. Desde entonces dejó de ser solo un general brillante: se volvió parte de la estructura del poder.\n\n# Familia\n- **Hijo mayor** — fanático religioso absoluto; vive y respira la doctrina de Engar. Orgullo público de la familia ante los ortodoxos y los [[Sar'Qaim]].\n- **Hijo menor** — mundano, libertino y escéptico. Desapareció hace años; la historia oficial, y lo que casi todos creen, es que murió.\n- Su nieto **[[Argumel]]**, más susceptible a las corrientes del [[Palan'Shar]].\n- Su hijo **[[Jelmethar]]** es su espada.\n\n# Rol actual\nEs la memoria viva de cómo se construyó Cherán de verdad — a partes iguales fe, sangre, disciplina y cálculo político frío. Por eso todos lo llaman El Abuelo: cuando habla, hasta los miembros más fanáticos del Palan'Shar escuchan."
  },
  {
    "id": "wpub-marcentral",
    "title": "El Mar Central",
    "type": "place",
    "content": "# Descripción\nEl corazón geopolítico de Avelir. Alrededor de sus aguas se reparten los tres grandes poderes — y sobre sus rutas se decide todo lo demás.\n\n# Quiénes lo rodean\n- **Oeste:** [[Urushan]] — el Primer Imperio, decadente, fracturado por dentro, y todavía dueño de la flota más grande del mundo.\n- **Sur y centro:** [[Aetharion]] — el poder ascendente, con su filo protoindustrial.\n- **Este:** [[Teocracia de Cherán]] — la expansión religiosa, en plena crisis de sucesión.\n\n[[Casa Vorin]] y la Orden Escarlata operan a través de todos ellos. Al sur, [[El Mar del Sur]] sigue siendo el corazón económico que nadie controla por completo.\n\n# Lo que pasó aquí\nLa caída de [[Tol Marin]] rompió el equilibrio de estas aguas por primera vez en siglos. Ver [[La Batalla de Tol Marin]]."
  },
  {
    "id": "wpub-rompimiento",
    "title": "El Rompimiento del Velo",
    "type": "concept",
    "content": "# Qué fue\nEl cataclismo que rehízo el mundo. La guerra que desgarró la barrera entre el mundo mortal y el intervelo — y de cuyas cenizas nació la era actual de Avelir.\n\n# Sus huellas\nTodo lo antiguo se mide contra él: [[Urushan]] nació de sus cenizas y heredó la flota del Emperador — naves de antes del Rompimiento que nadie sabe reparar. [[Tol Marin]] y [[Ashlan]] son fortalezas anteriores al cataclismo. Y [[El Mar del Sur]] no era un mar: era el granero del continente, hasta que el Rompimiento lo hundió.\n\n# Lo que se dice\nQue el Velo no terminó de sanar. Que se está desgarrando otra vez. Que las criaturas que destruyeron una hermandad entera de la Orden Escarlata en una sola noche no pertenecen a este mundo — y entraron por alguna parte."
  },
  {
    "id": "e-anandelion",
    "title": "Anandëlion",
    "type": "character",
    "content": "# Quién fue\nEl **Primer [[Palan'Nur]]** de la [[Teocracia de Cherán]] — el Saladino. Convirtió a los Engari de banda de mercenarios fanáticos en fuerza imperial, unificando las tribus dispersas de las estepas.\n\n# Su legado\nSu nombre se ha ido erosionando en cada sucesor — Anandël, Anan'Nur, An'Fahal — hasta quedar en una sílaba. La historia de Cherán está contada en esa erosión."
  },
  {
    "id": "e-anandel",
    "title": "Anandël",
    "type": "character",
    "content": "# Quién fue\nEl **Segundo [[Palan'Nur]]** de la [[Teocracia de Cherán]] — el Ciro. Ejecutó el mestizaje entre los Engari y el pueblo de las estepas, convirtiendo la conquista en un verdadero imperio."
  },
  {
    "id": "e-jelmethar",
    "title": "Jelmethar",
    "type": "character",
    "content": "# Quién es\nHijo de [[Temürel]] — la espada de su padre. Poco más se ha escrito de él todavía."
  },
  {
    "id": "e-argumel",
    "title": "Argumel",
    "type": "character",
    "content": "# Quién es\nNieto de [[Temürel]]. Más susceptible que su padre y su abuelo a las corrientes religiosas del [[Palan'Shar]] — y por eso, la incógnita de la familia. Poco más se ha escrito de él todavía."
  },
  {
    "id": "e-engar",
    "title": "Engar Ab'Calen",
    "type": "character",
    "content": "# Quién es\nEl dios de la [[Teocracia de Cherán]] — **el que ara la tierra para que brote la vida**. En el habla cotidiana, simplemente **Engar**: el que provee, el que cuida.\n\n# Su doctrina\nLos otros dioses existen — pero deben someterse a él. Una civilización entera se nombra a sí misma por el acto más humilde de la humanidad: arar. Y en su nombre marcha la caballería más temida de Avelir."
  },
  {
    "id": "e-palannur",
    "title": "Palan'Nur",
    "type": "concept",
    "content": "# Qué es\n**El Ungido** — el título supremo de la [[Teocracia de Cherán]]. No es divino en sí mismo: es el seleccionado para ejecutar la voluntad de [[Engar Ab'Calen]]. El [[Palan'Shar]] define qué es esa voluntad; el Palan'Nur la ejecuta.\n\n# Los cuatro\n[[Anandëlion]] el Saladino, [[Anandël]] el Ciro, [[Anan'Nur]] el Darío — hoy agonizante — y [[An'Fahal]], el amanecer."
  },
  {
    "id": "e-palanshar",
    "title": "Palan'Shar",
    "type": "concept",
    "content": "# Qué es\nEl Concilio sagrado de la [[Teocracia de Cherán]] — el verdadero campo de batalla del imperio. Define la voluntad divina que el [[Palan'Nur]] ejecuta.\n\n# Sus cuatro facciones\n[[Amin]] los ortodoxos, [[Palan'Umbar]] los gnósticos, [[Amin'Kalam]] los iconoclastas y los [[Sar'Qaim]], los jihadistas."
  },
  {
    "id": "e-amin",
    "title": "Amin",
    "type": "concept",
    "content": "# Qué son\nLos ortodoxos del [[Palan'Shar]] — fieles a [[Engar Ab'Calen]] en su forma original y pura."
  },
  {
    "id": "e-palanumbar",
    "title": "Palan'Umbar",
    "type": "concept",
    "content": "# Qué son\nLos gnósticos del [[Palan'Shar]] — la sombra que provoca la luz."
  },
  {
    "id": "e-aminkalam",
    "title": "Amin'Kalam",
    "type": "concept",
    "content": "# Qué son\nLos iconoclastas del [[Palan'Shar]] — la fe pura, sin representaciones físicas."
  },
  {
    "id": "e-sarqaim",
    "title": "Sar'Qaim",
    "type": "concept",
    "content": "# Qué son\nLos jihadistas del [[Palan'Shar]] — los que ejecutan en la oscuridad. Para ellos la guerra sagrada es un mandato de [[Engar Ab'Calen]], no una opción.\n\n# Rol actual\nMarchan hacia el norte purificando todo a su paso — y despertando una resistencia que nadie calculó. De sus purgas nació la defensa de [[Tol Varen]]."
  },
  {
    "id": "e-bastian",
    "title": "Bastian Von Richter",
    "type": "character",
    "content": "# Quién fue\nEl Gran Almirante fundador de la dinastía Von Richter de [[Urushan]]. Llegó al poder tras un desastre naval catastrófico en el mar occidental — la pérdida de una flota imperial entera por corrupción y mala gestión — que dejó a la dinastía anterior fatalmente debilitada.\n\n# El respaldo oculto\nNo lo hizo solo. Con el apoyo financiero y político de [[Casa Vorin]] ejecutó el golpe y sostuvo la transición de casas. Perfeccionó la intriga hasta convertirla en la doctrina con la que su casa gobierna desde [[Artesh]]. Fue el primer eslabón de una deuda que Urushan quizá nunca supo que contrajo."
  },
  {
    "id": "e-liria",
    "title": "Liria Von Richter",
    "type": "character",
    "content": "# Quién fue\n**Amanecer de Artesh** — la abuela de [[Iridel Von Richter]]. Su epíteto cuenta su época: construcción y esperanza. Poco más se ha escrito de ella todavía."
  },
  {
    "id": "e-alia",
    "title": "Alia Von Richter",
    "type": "character",
    "content": "# Quién fue\n**La Torre de Urushan** — la madre de [[Iridel Von Richter]]. Solidez, pero también inmovilidad: alguien que resistió sin avanzar.\n\n# Su decisión\nFue ella quien rechazó la visión de [[Alarion]] cuando el almirante la llevó ante el trono. Ese rechazo detonó la rebelión de [[Los Peregrinos]] — la herida que su hija heredó junto con la corona."
  },
  {
    "id": "e-almirantazgo",
    "title": "El Almirantazgo",
    "type": "concept",
    "content": "# Qué es\nLa cúpula naval de [[Urushan]] — los almirantes que controlan las rutas marítimas milenarias. En el matriarcado pragmático del Primer Imperio, las mujeres gobiernan y los hombres guerrean: el Almirantazgo es donde ese poder militar pesa sobre la política, como los generales de Roma."
  },
  {
    "id": "e-cortedelsol",
    "title": "La Corte del Sol",
    "type": "concept",
    "content": "# Qué es\nLa mesa de caballeros más antigua de [[Urushan]] — y de Avelir. De ella partió [[Ser Arthantos]] hace 700 años hacia la fundación de la Orden Escarlata: el cisma más famoso de la historia."
  },
  {
    "id": "e-escuelanaval",
    "title": "Escuela Naval Real",
    "type": "concept",
    "content": "# Qué es\nDonde se forma la élite aristocrática completa de [[Urushan]], en [[Artesh]]: intriga, política, táctica, estrategia, comercio, finanzas. De sus aulas salieron [[Alarion]] y [[Davorel Von Kersig]] — compañeros de academia, hoy cazador y presa."
  },
  {
    "id": "e-peregrinos",
    "title": "Los Peregrinos",
    "type": "concept",
    "content": "# Qué son\nLos seguidores de [[Alarion]]. No son rebeldes — son devotos, y eso los hace imposibles de derrotar políticamente. Llegar a [[Ashlan]] no es unirse a una rebelión: es hacer una peregrinación."
  },
  {
    "id": "e-soleados",
    "title": "Los Soleados",
    "type": "concept",
    "content": "# Qué son\nLos creyentes de [[El Emperador]] dentro de [[Urushan]]. En un imperio secular, creer te distingue. Su número crece con [[Alarion]]."
  },
  {
    "id": "e-arkhon",
    "title": "Arkhon Galas",
    "type": "concept",
    "content": "# Qué es\nEl título supremo de [[Aetharion]]. **Arkhon** viene de una figura legendaria de la primera rebelión contra Urushan; **Galas** significa Unión en el dialecto antiguo de las casas heráldicas. Como César: el nombre de [[Alendi Galathas]] se convirtió en el título de todos los que vengan después."
  },
  {
    "id": "e-heraldin",
    "title": "Heraldin Galas",
    "type": "concept",
    "content": "# Qué es\n**El Heraldo** — el título de quien controla la tecnología y la alquimia bélica de [[Aetharion]]. Hoy lo porta [[Anariel]], arquitecta de la ventaja que reinventó la guerra."
  },
  {
    "id": "e-primarcas",
    "title": "Los Primarcas",
    "type": "concept",
    "content": "# Qué son\nLos generales de [[Aetharion]] — cada uno un genio en su dominio. Su doctrina es revolucionaria: velocidad, iniciativa descentralizada, decisiones en campo sin esperar órdenes."
  },
  {
    "id": "e-consules",
    "title": "Los Cónsules",
    "type": "concept",
    "content": "# Qué son\nLos representantes civiles de las casas heráldicas en la república militar de [[Aetharion]]. Las decisiones se toman en conjunto — pero la balanza siempre inclina hacia lo militar."
  },
  {
    "id": "e-galadrim",
    "title": "Los Galadrim",
    "type": "concept",
    "content": "# Qué son\nLa guardia élite del [[Arkhon Galas]] — hijos e hijas ofrecidos por las casas heráldicas. El entrenamiento más arduo del mundo. Viven y mueren por los ideales de [[Alendi Galathas]]."
  },
  {
    "id": "e-galcalad",
    "title": "Casa Gal'Calad",
    "type": "concept",
    "content": "# Qué es\nLa casa heráldica de origen de [[Alendi Galathas]] — la casa cuya última humillación pública, la flagelación de su señor, expulsó al muchacho de 14 años que volvería a refundar el mundo. Al instituir [[Aetharion]], Alendi rompió la tradición del apellido generacional: ya no hay variación personal de Gal."
  },
  {
    "id": "e-aldren",
    "title": "Aldren",
    "type": "concept",
    "content": "# Qué es\n**La Voz de [[Casa Vorin]]** — uno de los cuatro títulos hereditarios fundados por los hermanos de [[Caëlen Vorin'el]]. El rostro diplomático: las sonrisas que abren puertas. Sobre todas las instancias locales sesiona **La Primera Voz**."
  },
  {
    "id": "e-ilvaen",
    "title": "Ilvaën",
    "type": "concept",
    "content": "# Qué es\n**El Escudo de [[Casa Vorin]]** — la fuerza militar del Gremio. La amenaza que nunca se nombra pero siempre se siente. Sobre todas las instancias locales sesiona **El Primer Escudo**."
  },
  {
    "id": "e-maelor",
    "title": "Maëlor",
    "type": "concept",
    "content": "# Qué es\n**La Garra de [[Casa Vorin]]** — el amo de las sombras. Secretos, inteligencia, los vicios ajenos como moneda. Identidad secreta, siempre. Sobre todas las instancias locales sesiona **La Primera Garra**."
  },
  {
    "id": "e-gremio",
    "title": "El Gremio",
    "type": "concept",
    "content": "# Qué es\nLa cúspide de [[Casa Vorin]]: la mesa de todos los Caëlen activos. Decisiones por consenso. Nadie sabe cuántos son ni quiénes son — y esa ignorancia es, quizá, su mayor activo."
  },
  {
    "id": "e-juramento",
    "title": "Juramento Escarlata",
    "type": "concept",
    "content": "# Qué es\nEl único vínculo entre las 17–18 hermandades de la Orden Escarlata. Sin rey, sin sede, sin ejército: solo un código y la voluntad de morir por él. Cada caballero lo jura en [[Thecia]], sobre el nombre de [[Ser Arthantos]]."
  },
  {
    "id": "e-mesacompleta",
    "title": "La Mesa Completa",
    "type": "concept",
    "content": "# Qué es\nLa coalición de todas las hermandades de la Orden Escarlata. Solo se ha convocado **dos veces en 700 años** — cada una marcó una época. [[El Sobreviviente]] la está convocando por tercera vez, y el mundo entero contiene la respiración."
  },
  {
    "id": "e-tantos",
    "title": "Los Tantos",
    "type": "concept",
    "content": "# Qué son\nUna de las tres corrientes de la Orden Escarlata: defender hasta la muerte. El [[Juramento Escarlata]] no tiene excepciones."
  },
  {
    "id": "e-platos",
    "title": "Los Platos",
    "type": "concept",
    "content": "# Qué son\nUna de las tres corrientes de la Orden Escarlata: negociar. Cuando llegan, algo va a costar — pero salvar algo es mejor que perderlo todo."
  },
  {
    "id": "e-normales",
    "title": "Los Normales",
    "type": "concept",
    "content": "# Qué son\nUna de las tres corrientes de la Orden Escarlata: evaluar, caso por caso, qué acción salva más vidas. Su Primero de la Mesa es [[Ser Gianni du Mont]]."
  },
  {
    "id": "e-gransacrificio",
    "title": "El Gran Sacrificio",
    "type": "story",
    "content": "# Qué fue\nEl acto fundacional de la Orden Escarlata, hace 700 años. [[Ser Arthantos]] — desafiando a [[Urushan]] — marchó con un puñado de caballeros a defender a un pueblo completamente desamparado. En esa batalla enfrentó manifestaciones de [[Tel-Haud]] y pagó el precio máximo.\n\n# Su significado\nFue desobediencia y fidelidad absoluta al código en el mismo acto. De esa contradicción nació una orden que lleva siete siglos sin rey, sin capital y sin ejército."
  },
  {
    "id": "e-confederacion",
    "title": "La Confederación",
    "type": "concept",
    "content": "# Qué es\nEl recurso emergente de [[Los Pueblos sin Techo]]: una horda de tribus unificándose bajo el símbolo del cuervo y el buitre — los animales que aparecen donde hay cambio y muerte. La lidera [[Arminio El Dorado]] desde las montañas del norte.\n\n# Lo que significa\nUna fuerza natural de la historia: aparece de tiempo en tiempo y sacude el tablero — justo cuando los imperios menos pueden permitírselo."
  },
  {
    "id": "e-consejeros",
    "title": "Los Consejeros",
    "type": "concept",
    "content": "# Qué son\nLos líderes sin título fijo de [[Los Pueblos sin Techo]]. No gobiernan — aconsejan. Que no exista el trono es exactamente el punto."
  },
  {
    "id": "e-caballeroserrantes",
    "title": "Los Caballeros Errantes",
    "type": "concept",
    "content": "# Qué son\nCaballeros — muchos de la Orden Escarlata, otros por cuenta propia — que viven entre [[Los Pueblos sin Techo]]. Algunos asentamientos de los pueblos libres fueron fundados por ellos. En [[Tol Varen]] pelearon junto a [[Arminio El Dorado]]."
  },
  {
    "id": "e-veyra",
    "title": "Casa Veyra",
    "type": "faction",
    "content": "# Qué es\nUna de las [[Casas Isleñas]] de [[El Mar del Sur]] — granos y alimentos básicos. **La despensa de Avelir.** Poco más se ha escrito de ella todavía."
  },
  {
    "id": "e-thorne",
    "title": "Casa Thorne",
    "type": "faction",
    "content": "# Qué es\nUna de las [[Casas Isleñas]] de [[El Mar del Sur]] — minerales, hierro y metales. Poco más se ha escrito de ella todavía."
  },
  {
    "id": "e-solara",
    "title": "Casa Solara",
    "type": "faction",
    "content": "# Qué es\nUna de las [[Casas Isleñas]] de [[El Mar del Sur]] — madera, construcción naval y resinas. Poco más se ha escrito de ella todavía."
  },
  {
    "id": "e-kael",
    "title": "Casa Kael",
    "type": "faction",
    "content": "# Qué es\nUna de las [[Casas Isleñas]] de [[El Mar del Sur]] — especias, hierbas medicinales y tintes. Poco más se ha escrito de ella todavía."
  },
  {
    "id": "e-riven",
    "title": "Casa Riven",
    "type": "faction",
    "content": "# Qué es\nUna de las [[Casas Isleñas]] de [[El Mar del Sur]] — sal, conservación y pesca industrial. Poco más se ha escrito de ella todavía."
  },
  {
    "id": "e-casasislenas",
    "title": "Casas Isleñas",
    "type": "concept",
    "content": "# Qué son\nLos gremios familiares ferozmente autónomos de [[El Mar del Sur]], cada uno dueño de una cadena de valor completa: [[Casa Veyra]], [[Casa Thorne]], [[Casa Solara]], [[Casa Kael]] y [[Casa Riven]].\n\n# Su defensa\nSi un imperio intenta conquistar a una, las demás se alían, sabotean recursos y hacen el costo impagable. Innovan constantemente para que lo suyo siga siendo irreemplazable. [[Casa Vorin]] opera entre ellas como el intermediario indispensable."
  },
  {
    "id": "e-emperador",
    "title": "El Emperador",
    "type": "character",
    "content": "# Quién es\nLa figura que domina todo lo antiguo de Avelir. Suya fue la flota que [[Urushan]] heredó — naves de antes del [[El Rompimiento del Velo]] que nadie sabe reparar. Suyo se dice que fue el trono de [[Ashlan]]. En su nombre creen [[Los Soleados]]; su presencia en el plano mortal, sostiene la Orden Escarlata, es [[Hemmal]]; y [[Alarion]] asegura haberlo visto al borde de la muerte.\n\n# Lo que la Orden sostiene\nQue el Emperador arrastró a [[Tel-Haud]] al [[El Intervelo]] y sostiene ahí una batalla eterna — y que esa batalla es lo que mantiene unida la realidad. Se dice que su atención está enteramente puesta en esa guerra al otro lado del Velo: que del mundo de los vivos apenas le llegan destellos, y que por eso los imperios se alzan y caen sin que su mano intervenga."
  },
  {
    "id": "e-telhaud",
    "title": "Tel-Haud",
    "type": "character",
    "content": "# Quién es\n**\"El Azote de lo Profundo.\"** El demonio que, según la tradición de la Orden Escarlata, [[El Emperador]] arrastró al intervelo — donde ambos libran una batalla que no ha terminado.\n\n# Sus huellas\nSus manifestaciones — ecos de esa batalla filtrándose al mundo — son lo que [[Ser Arthantos]] enfrentó hace 700 años en [[El Gran Sacrificio]]. Y se dice que las criaturas que destruyeron una hermandad entera en una sola noche no pertenecen a este mundo."
  },
  {
    "id": "e-cuencos",
    "title": "Cuencos de Poder",
    "type": "concept",
    "content": "# Qué son\nLa fuente de poder de otra era. Las naves de la flota de [[El Emperador]] están imbuidas con ellos — por eso nadie puede replicarlas ni repararlas del todo. [[Aetharion]] fue el primero en tratarlos no como misterio sino como fenómeno: analizarlos, replicarlos, convertirlos en arma. [[Anariel]] es la arquitecta de esa ventaja."
  },
  {
    "id": "e-interplano",
    "title": "El Interplano",
    "type": "concept",
    "content": "# Qué es\nEl espacio al otro lado del Velo. Según la tradición de la Orden Escarlata, ahí libran su batalla eterna [[El Emperador]] y [[Tel-Haud]] — y de ahí se filtran las manifestaciones que a veces tocan el mundo. El [[El Rompimiento del Velo]] fue la herida que separó — y conectó — ambos lados."
  },
  {
    "id": "e-bosqueluces",
    "title": "El Bosque de las Luces",
    "type": "place",
    "content": "# Descripción\nUn cementerio cósmico — sagrado y profundamente temido. En los últimos días del [[El Rompimiento del Velo]], cuando el Velo por fin se desgarró, se libró aquí una de las batallas más grandes y desesperadas entre las huestes mortales y las fuerzas de [[Tel-Haud]]. Al romperse el Velo, la energía liberada consumió en un solo instante la fuerza vital de decenas de miles de combatientes de ambos bandos.\n\n# Lo que creció después\nLo que brotó sobre ese campo de batalla no son árboles normales: son la aglomeración mutada de toda esa fuerza vital, de los cuerpos y de la violencia de aquel día. Todavía hoy, quien se adentra lo suficiente encuentra siluetas humanoides fundidas en la madera y la tierra, y fragmentos de armadura antigua incrustados en los troncos. Las luces son el eco frío y residual de una matanza.\n\n# Su importancia\nDe aquí salió el remanente que dio origen a la fe de Cherán. Ver [[El Milagro Fundacional]]."
  },
  {
    "id": "e-milagro",
    "title": "El Milagro Fundacional",
    "type": "story",
    "content": "# Qué fue\nEl acto que legitimó la fe de la [[Teocracia de Cherán]]. [[Anandëlion]], el primer [[Palan'Nur]], entró en [[El Bosque de las Luces]] y recibió una visión. En ella se le dijo que tomara un remanente del bosque — una semilla, una flor, un fragmento de la sustancia alterada.\n\n# Sus consecuencias\nCuando ese remanente fue llevado al gran lago que yace entre la cordillera volcánica y el [[El Mar Central]], las tierras alrededor del lago se volvieron extraordinariamente fértiles por primera vez. Fue la prueba práctica que legitimó la nueva fe: por primera vez los pueblos de la estepa tuvieron una base agrícola estable.\n\n# Lo que dejó\nEl título y la teología de [[Engar Ab'Calen]] — \"el que ara la tierra\" — nacieron de este milagro concreto. Desde entonces, en Cherán, la fe y la capacidad de alimentar a un pueblo son inseparables."
  },
  {
    "id": "e-hermanos-arado",
    "title": "Los Hermanos del Arado",
    "type": "concept",
    "content": "# Qué son\nLa caballería pesada de choque de la [[Teocracia de Cherán]] — el martillo de la Caballería Combinada de Estepa. Armadura laminar, lanzas pesadas y sables curvos. Cuando cargan, cierran la batalla."
  },
  {
    "id": "e-hijos-viento",
    "title": "Los Hijos del Viento",
    "type": "concept",
    "content": "# Qué son\nLos arqueros a caballo de élite de la [[Teocracia de Cherán]] — el yunque móvil de la Caballería Combinada de Estepa. Puntería letal a galope tendido y maestros de la retirada fingida: el enemigo cree que huyen, y mueren persiguiéndolos."
  },
  {
    "id": "e-mundoentre",
    "title": "El Mundo Entre Imperios",
    "type": "concept",
    "content": "# Qué es\nAvelir es vasto. Entre los grandes imperios existen cientos de comunidades, clanes, ciudades-estado, ducados menores, pueblos costeros, tribus de montaña y asentamientos de frontera que nunca fueron absorbidos del todo — o que se separaron. Los grandes poderes no pueden ocupar y administrar todo de forma rentable; el equilibrio entre ellos crea zonas grises; y un tejido fino de actores menores les resulta, de hecho, útil.\n\n# Las cinco identidades\n- [[Los Pueblos sin Techo]] — la confederación del norte de [[Arminio El Dorado]]. Resistencia organizada.\n- [[Las Casas Libres]] — ducados independientes, ciudades-estado y casas menores.\n- [[Los Navegantes]] — capitanes independientes, mercaderes, contrabandistas y flotas menores.\n- [[Los del Margen]] — clanes de montaña, tribus de bosque, pueblos de glaciar y frontera.\n- [[Las Compañías]] — compañías mercenarias profesionales y bandas de guerra libres."
  },
  {
    "id": "e-casaslibres",
    "title": "Las Casas Libres",
    "type": "faction",
    "content": "# Qué son\nDucados independientes, ciudades-estado y casas menores del [[El Mundo Entre Imperios]] — territorios que nunca fueron absorbidos por los grandes imperios. Sobreviven por una fórmula simple: ser útiles y caros de conquistar. Cada una tiene su propio nicho económico, su identidad religiosa y su estilo de mando.\n\n# Las Cuatro Casas Principales\n- [[Casa Veldrik]] — el extremo norte: caballos de guerra y pasos de montaña.\n- [[Casa Ruviel]] — el noroeste: archivos, burócratas y nostalgia imperial.\n- [[Casa Solmara]] — la costa suroeste: puertos, sal y deudas con [[Casa Vorin]].\n- [[Casa Thornel]] — el sureste: hierro, carbón y el culto a la Piedra y el Fuego.\n\n# Sus gentes\nNobles menores, diplomáticos, administradores. La política de lo pequeño: sobrevivir jugando a los grandes unos contra otros."
  },
  {
    "id": "e-navegantes",
    "title": "Los Navegantes",
    "type": "faction",
    "content": "# Qué son\nCapitanes independientes, mercaderes, contrabandistas y flotas menores del [[El Mundo Entre Imperios]]. Donde [[Urushan]] tiene la flota imperial y [[Casa Vorin]] las rutas formales, los Navegantes son todo lo que se mueve por fuera y por debajo.\n\n# Sus gentes\nPilotos, comerciantes, contrabandistas, espías. Gente para quien una frontera es una oportunidad, no un límite.\n\n# Lo que falta\nSu desarrollo detallado todavía está por escribirse."
  },
  {
    "id": "e-delmargen",
    "title": "Los del Margen",
    "type": "faction",
    "content": "# Qué son\nClanes de montaña, tribus de bosque, pueblos de glaciar y de frontera del [[El Mundo Entre Imperios]] — los que viven donde los imperios no quieren o no pueden llegar.\n\n# Sus gentes\nExploradores, supervivientes, rastreadores. Conocen la tierra que los ejércitos temen.\n\n# Lo que falta\nSu desarrollo detallado todavía está por escribirse."
  },
  {
    "id": "e-companias",
    "title": "Las Compañías",
    "type": "faction",
    "content": "# Qué son\nCompañías mercenarias profesionales y bandas de guerra libres del [[El Mundo Entre Imperios]]. Venden la única cosa que todos los imperios necesitan y ninguno tiene de sobra: soldados sin lealtad de sangre.\n\n# Sus gentes\nMercenarios, oficiales sin estandarte, veteranos. La guerra como oficio, no como causa.\n\n# Lo que falta\nSu desarrollo detallado todavía está por escribirse."
  },
  {
    "id": "e-veldrik",
    "title": "Casa Veldrik",
    "type": "faction",
    "content": "# Descripción\nCasa del extremo norte de [[Las Casas Libres]] — pasos de montaña y altiplanos fríos. Su poder nace del terreno: quien controla los pasos de invierno controla quién pasa y quién no.\n\n# Economía\nLos mejores caballos de guerra de clima frío de todo Avelir, y el control de los pasos de montaña clave en invierno.\n\n# Religión\nCulto local a los Espíritus del Paso y a los ancestros guerreros. Práctico, centrado en la supervivencia, desconfiado de los dioses imperiales.\n\n# Liderazgo\n[[Lady Sigrid Veldrik]], la cabeza actual.\n\n# Situación\nGeográficamente atrapada entre [[Los Pueblos sin Techo]] y el avance norte de la [[Teocracia de Cherán]]. La neutralidad es casi imposible."
  },
  {
    "id": "e-ruviel",
    "title": "Casa Ruviel",
    "type": "faction",
    "content": "# Descripción\nCasa del noroeste de [[Las Casas Libres]] — la frontera cultural con [[Urushan]]. Sobrevive no por las armas sino por el saber: es la casa de los archivos y los administradores.\n\n# Economía\nPericia administrativa, archivos antiguos, y escribas y funcionarios de alta calidad que hasta los poderes más grandes contratan a veces.\n\n# Religión\nVeneración suave y nostálgica de los antiguos ideales imperiales y del [[El Emperador]] como figura civilizadora más que como dios vivo. Fuerte simpatía cultural hacia el movimiento de [[Alarion]].\n\n# Liderazgo\n[[El Consejo Ruviel]] — una mesa pequeña de cinco miembros mayores de la familia. Sin autócrata único: decisiones lentas, rara vez imprudentes.\n\n# Situación\nVarios de sus hijos e hijas más jóvenes han \"desaparecido\" en años recientes — unos hacia la Orden Escarlata, otros hacia [[Los Peregrinos]]. El Consejo está dividido entre la cautela y una callada simpatía idealista por Alarion."
  },
  {
    "id": "e-solmara",
    "title": "Casa Solmara",
    "type": "faction",
    "content": "# Descripción\nCasa de la costa suroeste de [[Las Casas Libres]], de cara al archipiélago del [[El Mar del Sur]]. Un puerto alterno cuando las rutas principales están en disputa.\n\n# Economía\nPuerto secundario, salinas, astilleros menores. Profundamente enredada financieramente con [[Casa Vorin]].\n\n# Religión\nSincretismo costero — viejos espíritus del mar mezclados con la superstición práctica de los marineros sobre el [[El Emperador]]. Fuertemente anti-fanática.\n\n# Liderazgo\n[[Lord Maren Solmara]], un astuto príncipe-mercader.\n\n# Situación\nEndeudada hasta el cuello con [[Casa Vorin]]. Su independencia es real solo mientras Vorin la encuentre más útil viva y autónoma que absorbida."
  },
  {
    "id": "e-thornel",
    "title": "Casa Thornel",
    "type": "faction",
    "content": "# Descripción\nCasa del sureste de [[Las Casas Libres]] — un escarpe mineral cerca del bosque oscuro y la frontera blanda con [[Teocracia de Cherán]]. Dura como la roca de la que vive.\n\n# Economía\nMinas de hierro y carbón de buena calidad. Ubicación estratégica para cualquiera que pelee en el este o el sureste.\n\n# Religión\nCulto austero a la Piedra y el Fuego. La montaña y la fragua son sagradas. Profunda desconfianza de las religiones que conquistan o convierten.\n\n# Liderazgo\n[[Thane Kael Thornel]] y sus dos hermanas — los \"Tres de la Montaña\".\n\n# Situación\nTodos quieren su hierro. Nadie quiere el costo de ocupar permanentemente sus valles fortificados. Venden al mejor postor y fortifican el resto."
  },
  {
    "id": "e-sigrid",
    "title": "Lady Sigrid Veldrik",
    "type": "character",
    "content": "# Quién es\nLa cabeza actual de [[Casa Veldrik]]. Una mujer dura y pragmática cerca de los cincuenta que gobierna sola.\n\n# Rol actual\nIntenta ganar tiempo mientras [[Arminio El Dorado]] y la [[Teocracia de Cherán]] presionan a su casa desde lados opuestos. Sabe que la neutralidad se le acaba — y que elegir mal significa el fin de Veldrik."
  },
  {
    "id": "e-consejoruviel",
    "title": "El Consejo Ruviel",
    "type": "concept",
    "content": "# Qué es\nEl gobierno de [[Casa Ruviel]] — una mesa pequeña de cinco miembros mayores de la familia. No hay autócrata único; las decisiones son lentas pero rara vez imprudentes.\n\n# Rol actual\nEstá dividido: entre la cautela que ha mantenido viva a la casa durante generaciones, y una callada simpatía idealista por [[Alarion]] que crece conforme sus jóvenes se marchan hacia los [[Los Peregrinos]] y la Orden Escarlata."
  },
  {
    "id": "e-maren",
    "title": "Lord Maren Solmara",
    "type": "character",
    "content": "# Quién es\nEl señor de [[Casa Solmara]] — un astuto príncipe-mercader en sus cincuenta. Gobierna con el respaldo de un círculo cerrado de capitanes y acreedores.\n\n# Rol actual\nHace equilibrios sobre una deuda enorme con [[Casa Vorin]]. Cada decisión suya es un cálculo: mantener a su casa lo bastante útil para que a Vorin le convenga más tenerla libre que tragársela."
  },
  {
    "id": "e-kaelthornel",
    "title": "Thane Kael Thornel",
    "type": "character",
    "content": "# Quién es\nEl señor de [[Casa Thornel]], que gobierna junto a sus dos hermanas — el triunvirato duro conocido como los \"Tres de la Montaña\". Las decisiones se toman en conjunto y suelen ser severas.\n\n# Rol actual\nVende hierro al mejor postor y fortifica todo lo demás. No confía en nadie que quiera algo más que comercio — y menos aún en quien quiera convertir a su gente."
  },
  {
    "id": "e-valkar",
    "title": "El Rey Valkar",
    "type": "character",
    "content": "# La leyenda\nEl nombre más antiguo que sobrevive como maldición. En los registros más viejos de la Orden Escarlata, \"Valkar\" no se pronuncia con respeto: se pronuncia como advertencia.\n\n# Lo que cuentan las crónicas\nQue hace unos diez mil años Valkar fue el gobernante más poderoso de su era — un héroe genuino que había unido tribus y consolidaba su poder en las tierras extraordinariamente fértiles del sur, la región que un día sería el [[El Mar del Sur]]. Que buscó un artefacto de poder inmenso y vida extendida. Y que cuando por fin lo obtuvo, algo salió terriblemente mal: enloqueció y desató una matanza aún mayor que todas sus guerras juntas. Se dice que aquella catástrofe desgarró el Velo.\n\n# La Corona\nEl artefacto que buscó — **la Corona del Rey Valkar**, o las Lágrimas del Velo — sigue siendo uno de los objetos más peligrosos que se buscan, o se temen, en el presente. Hay quien la persigue creyendo las viejas promesas de poder. La Orden Escarlata preferiría que nadie la encontrara jamás.\n\n# Lo que se dice\nQue ningún poder se toma sin un precio. Que Valkar pagó el suyo con todo lo que amaba — y que quien busque su Corona pagará el mismo."
  },
  {
    "id": "e-corona-valkar",
    "title": "La Corona del Rey Valkar",
    "type": "item",
    "content": "# Qué es\nEl artefacto que persiguió [[El Rey Valkar]] — también llamado las Lágrimas del Velo. Una corona capaz, según la leyenda, de otorgar un poder inmenso y una vida extendida a quien la porte.\n\n# Su precio\nLas crónicas más viejas de la Orden Escarlata coinciden en una sola cosa: cuando Valkar por fin la usó, enloqueció y desató una catástrofe que se dice desgarró el Velo. El poder llegó. También llegó la ruina.\n\n# En el presente\nSigue siendo uno de los objetos más buscados —y más temidos— de Avelir. Hay quien la persigue creyendo las viejas promesas; la Orden Escarlata preferiría que permaneciera perdida para siempre. Una campaña entera gira alrededor de su legado."
  },
  {
    "id": "e-hermandad-sello",
    "title": "La Hermandad del Sello",
    "type": "concept",
    "content": "# Lo que se rumora\nSe cuenta —a media voz, y casi siempre sin creerlo del todo— que dentro de la Orden Escarlata existe una hermandad de la que casi nadie sabe nada. No pelean guerras. No defienden pueblos. No se les ve en las mesas ni en las asambleas.\n\n# Lo que dicen quienes dicen saber\n- Que aparecen solo cuando algo va muy mal con el Velo — cada una o dos generaciones — y que se van igual de rápido.\n- Que trabajan en silencio, en lugares que nadie más quiere pisar, contra cosas que nadie más quiere nombrar.\n- Que ninguno de sus miembros llega a viejo, y que ellos lo saben desde el día que entran.\n- Que [[El Sobreviviente]] sería el último de ellos.\n\n# Lo que es seguro\nNada. Para casi toda la Orden Escarlata, la Hermandad del Sello es una leyenda que se cuenta para asustar a los aspirantes. Los que la han visto de verdad no hablan."
  },
  {
    "id": "e-circulo",
    "title": "El Círculo",
    "type": "faction",
    "content": "# Qué es\nUna de las tradiciones religiosas más antiguas de Avelir — animista, del este: espíritus, árboles, animales, y visiones que se dice provienen del Velo. Se calcula que tiene cerca de diez mil años de continuidad ininterrumpida, lo que la vuelve más vieja que cualquier imperio vivo.\n\n# Sus creencias\nQue el mundo está lleno de presencias, y que el Velo que separa lo vivo de lo que hay más allá es delgado en ciertos lugares y ciertas personas. Sus guías buscan esas delgadeces — en el bosque, en el sueño, en la sangre — para leer lo que se avecina.\n\n# Su lugar en el mundo\nNo es un imperio ni una iglesia de Estado: es una corriente que sobrevive por debajo de todas las demás, respetada por unos, temida por otros. Aparece en las historias más viejas de Avelir, a veces al lado de nombres que casi nadie recuerda ya. Hoy opera por voluntad de sus propios miembros, sin una cabeza única visible."
  },
  {
    "id": "e-siembra",
    "title": "La Siembra",
    "type": "concept",
    "content": "# Qué es\nLa institución colectivista-teocrática emergente de la [[Teocracia de Cherán]] — el bando que quiere trasladar el poder real de la persona del [[Palan'Nur]] a una estructura colectiva.\n\n# Qué controla\nLos graneros, buena parte de la administración minera, la logística y la propaganda. En un imperio que vive de la movilización y la expansión, quien controla el grano y las rutas controla mucho.\n\n# Su doctrina\nVe al Palan'Nur como el símbolo sagrado necesario — pero cree que el poder real debe residir en la estructura, no en un solo hombre. Su cúpula ejecutiva es **La Dirección**, o **El Primer Surco**: tres a cinco personas que toman las decisiones del día a día.\n\n# Su tensión\nChoca de frente con [[Los de la Raíz]], que quieren exactamente lo contrario, y con [[Temürel]], que no acepta que el Ungido se vuelva un adorno."
  },
  {
    "id": "e-raiz",
    "title": "Los de la Raíz",
    "type": "concept",
    "content": "# Qué son\nLa reacción religiosa dentro de la [[Teocracia de Cherán]] contra [[La Siembra]]. Su nombre lo dice: quieren volver a la raíz.\n\n# Su doctrina\nPredican que la verdadera voluntad de [[Engar Ab'Calen]] no puede residir en asambleas ni consejos — solo en el [[Palan'Nur]] como avatar viviente del dios. Apoyan activamente a [[An'Fahal]] y empujan una revolución cultural-religiosa a su favor.\n\n# Su lugar en la guerra\nSon el contrapeso de La Siembra. Donde La Siembra ve estructura, ellos ven persona sagrada; donde La Siembra ve administración, ellos ven fe. Entre los dos, [[Temürel]] intenta que el imperio no se parta."
  },
  {
    "id": "e-erindor",
    "title": "Casa Erindor",
    "type": "concept",
    "content": "# Qué es\nUna de las casas heráldicas de [[Aetharion]] que se sumaron al proyecto de [[Alendi Galathas]]. Su familia creyó de verdad en el Jardín Eterno — no por conveniencia, sino por convicción.\n\n# Lo que se sabe\nComo muchas casas del Jardín, dio hijos a la causa. Uno de ellos, tocado por algo que la casa no supo nombrar, fue entregado a las autoridades del Jardín y, tras ser examinado, trasladado a la Orden Escarlata. La casa rara vez habla de él."
  },
  {
    "id": "e-lirael",
    "title": "Lirael Veyral",
    "type": "character",
    "content": "# Quién fue\nLa esposa de [[Alendi Galathas]] y el **verdadero origen de la visión del Jardín Eterno**. De [[Casa Veyral]], una casa heráldica mucho más poderosa que la de Alendi; su matrimonio fue la primera unificación real entre casas importantes de [[Aetharion]].\n\n# Su visión\nBrillante e igual a Alendi, complementaria: donde él ponía voluntad de hierro y ejecución, ella ponía el propósito — construir un organismo vivo, disciplinado y en crecimiento constante que hiciera imposible cualquier humillación futura. Ninguno dominaba al otro.\n\nFue Lirael quien presentó a [[Anariel]] a Alendi, y la primera persona que comprendió el potencial real de la celestial: no una ventaja militar puntual, sino la posibilidad de **sistematizar** la magia y hacerla la base de una civilización nueva.\n\n# Su muerte\nMurió hace diez años, cuando Alendi tenía 46. Desde entonces el Jardín Eterno es la deuda sagrada de su viudo. Su casa, [[Casa Veyral]], tenía vínculos profundos y antiguos con [[Casa Vorin]] — y hay quien sospecha, sin prueba, que facciones de Vorin propiciaron su muerte cuando su visión se volvió demasiado disruptiva."
  },
  {
    "id": "e-veyral",
    "title": "Casa Veyral",
    "type": "concept",
    "content": "# Qué es\nLa casa heráldica de [[Lirael Veyral]] — mucho más poderosa que [[Casa Gal'Calad]], la de [[Alendi Galathas]]. Su unión con Alendi fue la primera gran unificación de casas que dio origen a [[Aetharion]].\n\n# Sus vínculos\nCasa Veyral estuvo profundamente involucrada con lo que después se consolidaría como [[Casa Vorin]] — socios durante una etapa temprana de la evolución de Vorin. Ese lazo antiguo es la raíz de una sospecha que nadie ha confirmado: que facciones de Vorin tuvieron algo que ver con la muerte de Lirael."
  },
  {
    "id": "e-dravik",
    "title": "Kaelen Dravik",
    "type": "character",
    "content": "# Quién es\nEl **Primarca Supremo del Pueblo** de [[Aetharion]] — ~52 años. Un ingeniero social que llegó al cargo por mérito puro. Apariencia sobria, casi burocrática; voz baja, mirada que lo mide todo en términos de rendimiento y estabilidad.\n\n# Su convicción\nCree genuinamente en [[El Jardín Eterno]] como la única forma de evitar futuras humillaciones — pero entiende que exige décadas de disciplina dura. Piensa en un plan de cincuenta años, no en la victoria de mañana.\n\n# Su lealtad, con matices\nEs leal a la *visión* de [[Lirael Veyral]] y [[Alendi Galathas]] más que a la persona de Alendi. Sería capaz de oponerse en silencio si el Arkhon se desviara del plan. Respeta a [[Aleria Galathas]] —que opera dentro de su oficina— pero sospecha que a veces ella prioriza el juego de alianzas sobre la pureza del proyecto."
  },
  {
    "id": "e-jardineterno",
    "title": "El Jardín Eterno",
    "type": "concept",
    "content": "# Qué es\nEl nombre y la filosofía de [[Aetharion]]: no un Estado terminado sino un organismo vivo que crece o muere. La idea original de [[Lirael Veyral]] — una civilización disciplinada, meritocrática y en expansión constante, diseñada para que la humillación de las casas heráldicas bajo [[Urushan]] no vuelva a ser posible jamás.\n\n# Su principio\nTodo se gana, nada se hereda: el poder por mérito demostrable, las pruebas cada 3 y 5 años, la excelencia como única lealtad. Es a la vez la fuerza y la fragilidad del Jardín — porque hasta su fundador, [[Alendi Galathas]], empieza a chocar con ese principio al acumular cargos."
  },
  {
    "id": "e-titulo-caelen",
    "title": "Caëlen",
    "type": "concept",
    "content": "# Qué es\n**El Arquitecto de [[Casa Vorin]]** — el primero de los cuatro títulos fundacionales, y el más alto. Estratega supremo; identidad siempre secreta. Es el título que porta el fundador, [[Caëlen Vorin'el]], y el nombre bajo el que sesiona [[El Gremio]]: el consejo de todos los Caëlen activos.\n\n# Lo que significa\nNadie sabe cuántos Caëlen hay ni quiénes son. El título se hereda por adopción e indoctrinación: quien lo toma deja atrás su cara, su nombre y su historia. Es el vértice invisible desde el que se equilibra el tablero de Avelir."
  },
  {
    "id": "e-intervelo",
    "title": "El Intervelo",
    "type": "concept",
    "content": "# Qué es\nEl espacio al otro lado del Velo — la herida abierta en la frontera entre el mundo mortal y lo que hay más allá. Según la tradición de la Orden Escarlata, es ahí donde [[El Emperador]] mantiene atado a [[Tel-Haud]] en una batalla que no termina.\n\n# Lo que se dice\nQue de esa herida se filtran, cuando el Velo se adelgaza, las manifestaciones que a veces tocan el mundo: presencias, posesiones, cosas sin nombre. Que el [[El Rompimiento del Velo]] fue lo que lo abrió, y que nunca ha cerrado del todo. La gente común habla de 'demonios'; la Orden Escarlata sabe que la verdad es más extraña, y no la comparte."
  }
]

};

if (typeof module !== 'undefined') module.exports = LORE;
