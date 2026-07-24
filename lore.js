/* AVELIR — LORE PUBLICO  v0.4
   Solo contiene lo que el mundo de Avelir sabe. La bóveda del DM va aparte y nunca se exporta.
   Lo leen index.html y wiki.html. Editar aquí, no dentro del HTML. */

var LORE = {

  version: "0.4",
  exportedAt: "2026-07-24",

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
  "El Mar del Sur": "place"
},

  pages: [
  {
    "id": "wbase-cheran",
    "title": "Teocracia de Cherán",
    "type": "faction",
    "content": "# Declaración\n\"Nuestro dios es el único. Él proveerá. Los infieles serán purificados. El fuego de Engar se esparcirá ante el retumbar de nuestra caballería.\"\n\n*Los Engari — El Pueblo que Ara*\n\n# Historia\nLos Engari nacieron en las estepas como una banda de mercenarios fanáticos que nadie tomaba en serio. Lo que los diferenciaba era su fe — una devoción total a **Engar Ab'Calen**, el dios que ara la tierra para que brote la vida.\n\nGeneración tras generación, esa fe los forjó. El primer Palan'Nur unificó las tribus dispersas y absorbió el Imperio de las Estepas. El segundo lo convirtió en un verdadero imperio. El tercero lo llevó a su cúspide.\n\nHoy son la potencia más temida de Avelir — no por tener el ejército más grande, sino porque tienen algo más peligroso: la certeza absoluta de que están en lo correcto.\n\n## Los Cuatro Palan'Nur\n- **Anandëlion** — El Primero. El Saladino. Convirtió a los Engari de mercenarios fanáticos a fuerza imperial.\n- **Anandël** — El Segundo. El Ciro. Ejecutó el mestizaje entre los Engari y el pueblo de las estepas.\n- **[[Anan'Nur]]** — El Tercero. El Darío. La cúspide institucional. Actualmente agonizando.\n- **[[An'Fahal]]** — El Cuarto. El heredero débil, rodeado de generales extraordinarios que cargan el peso que él aún no puede sostener.\n\n# Gobierno\n**Teocracia.** El **Palan'Nur** — el Ungido — ejecuta la voluntad divina. El **Palan'Shar** — el Concilio sagrado — define qué es esa voluntad. Cuatro facciones compiten dentro del Palan'Shar:\n- **Amin** — los ortodoxos. Fieles a Engar en su forma original y pura.\n- **Palan'Umbar** — los gnósticos. La sombra que provoca la luz.\n- **Amin'Kalam** — los iconoclastas. La fe pura sin representaciones físicas.\n- **Sar'Qaim** — los jihadistas. La guerra sagrada es un mandato — no una opción.\n\n# Figuras Clave\n- **[[Anan'Nur]]** — El Ungido que agoniza. Llevó a Cherán a su cúspide. Su muerte marcará una nueva era.\n- **[[An'Fahal]]** — El heredero. Su nombre significa \"el amanecer\".\n- **[[Temürel]] — Abu'Amin** — El Abuelo. El general más respetado sin título formal. La memoria viva del imperio. Tiene un plan que nadie conoce completamente.\n- **Los Sar'Qaim** — Los que ejecutan en la oscuridad. Marchan hacia el norte purificando todo a su paso.\n\n# Fuerza Económica\nMinería — sobre todo en las zonas volcánicas — y el control de metales y minerales estratégicos.\n\n# Situación Geopolítica\nCherán está en su momento más poderoso — y más inestable. La transición al cuarto Palan'Nur está en marcha. Las facciones del Palan'Shar compiten por influencia. Los Sar'Qaim avanzan ejecutando purgas que despiertan una resistencia que nadie calculó. Aetharion los llama el nuevo demonio. Los pueblos del norte empiezan a unirse contra ellos.",
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
    "content": "# Declaración\n\"El comercio es poder. La información es poder. Nosotros tenemos ambos. Todo tiene precio — incluyendo tú.\"\n\n*El Gremio — Los que mueven el mundo*\n\n# Historia\nCasa Vorin comenzó como un linaje élfico guerrero de alta alcurnia que estaba viniendo a menos. Fue **[[Caëlen Vorin'el]]** — el hijo menor, el que nadie miraba — quien vio lo que los demás no podían: el mundo no necesitaba otro ejército. Necesitaba a alguien que financiara los ejércitos de todos los demás.\n\nCaëlen construyó la institución junto a sus hermanos — cada uno con un poder distinto. Hoy esos nombres son títulos hereditarios que se pasan mediante un proceso de adopción e indoctrinación que escandalizó al mundo élfico — y que hoy es el secreto más admirado y temido de Avelir.\n\nEntrar a Casa Vorin es el sueño de los más ambiciosos. Tu cara cambia. Tu nombre cambia. Tu historia desaparece. [[Caëlen Vorin'el]] no solo fundó una institución. **Fundó una especie.**\n\n# Gobierno\n**Corporación hereditaria.** Cuatro títulos fundacionales:\n- **Caëlen** — El Arquitecto. Estratega supremo. Identidad secreta.\n- **Aldren, Voz de Casa Vorin** — El rostro diplomático. Las sonrisas que abren puertas.\n- **Ilvaën, Escudo de Casa Vorin** — La fuerza militar. La amenaza que nunca se nombra pero siempre se siente.\n- **Maëlor, Garra de Casa Vorin** — El maestro de las sombras. Secretos, inteligencia, vicios ajenos como moneda. Identidad secreta.\n\nCada título se replica en múltiples divisiones por Avelir. Por encima de todas las instancias existen **La Primera Voz**, **El Primer Escudo** y **La Primera Garra**. En la cúspide está **El Gremio** — la junta de todos los Caëlens activos. Sus decisiones se toman por consenso. Nadie sabe cuántos son. Nadie sabe quiénes son.\n\n# Figuras Clave\n- **[[Caëlen Vorin'el]]** — El fundador. El hijo menor que convirtió un linaje guerrero en corporación mercantil. Su nombre es ahora un título.\n- **El Gremio** — La junta suprema. Cuando se mueve, ya consideraron cada consecuencia posible.\n- **Aldren** — Visto en tres capitales distintas en la misma semana. Nadie sabe qué está comprando.\n- **La Primera Garra** — El título más temido de Casa Vorin. Se dice que está activa.\n\n# Situación Geopolítica\nCasa Vorin teje planes dentro de planes, observando el movimiento de Cherán con interés calculado — y vendiendo información a todos los bandos simultáneamente. Acaban de mover una cantidad de oro que nadie puede rastrear. Todos deberían estar preocupados.",
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
    "content": "# Declaración\n\"No servimos a ningún rey. No tenemos sede. No tenemos ejército. Solo tenemos un código y la voluntad de morir por él. Llegamos cuando nadie más llega.\"\n\n*Las Hermandades — Los que llegan cuando nadie más llega*\n\n# Historia\nLa Orden nació de un acto de desobediencia que fue simultáneamente el más fiel al código que la fundó. **[[Ser Arthantos]]** — uno de los comandantes más honorados de **La Corte del Sol**, la mesa de caballeros más antigua de Urushan — supo de una invasión inminente a un pueblo completamente desamparado. Desafiando a Urushan, tomó a un grupo de caballeros y marchó a defenderlo.\n\nEn esa batalla enfrentó manifestaciones de Tel-Haud — ecos de la batalla que sigue ocurriendo en el interplano — e hizo el sacrificio máximo: **El Gran Sacrificio**. Ese cisma fundó algo que lleva 700 años existiendo sin rey, sin capital, sin ejército. [[Thecia]] se convirtió en La Cuna de la Orden.\n\nNo son muchos. Veinte caballeros de la Orden valen por mil soldados comunes — son multiplicadores de fuerza. Llegan, organizan, entrenan y lideran. Cuando la batalla termina, se van.\n\nEl mundo los considera anacronismos. **El mundo se equivoca.**\n\n# Gobierno\n**Descentralizado.** 17-18 hermandades independientes unidas solo por el **Juramento Escarlata**. Cada hermandad tiene un **Primero de la Mesa**. No hay líder global. Tres corrientes internas definen cómo cada hermandad interpreta el Juramento:\n- **Los Tantos** — defienden hasta morir. El Juramento no tiene excepciones.\n- **Los Platos** — negocian. Cuando llegan, algo va a costar.\n- **Los Normales** — evalúan caso por caso qué acción salva más vidas.\n\n**La Mesa Completa** — la coalición de todas las hermandades. En 700 años solo ha ocurrido dos veces. Cuando se convoca, el mundo sabe que algo sin precedente está ocurriendo.\n\n# Figuras Clave\n- **[[Ser Arthantos]]** — El fundador. El Galahad de Avelir. El más puro. Hizo el sacrificio máximo hace 700 años.\n- **[[Hemmal]]** — Dios patrono. La Orden lo sostiene como la presencia del Emperador en el plano mortal. Los caballeros lo invocan en combate.\n- **Ser Gianni du Mont** — Primero de la Mesa (Los Normales). Defendió Tol Varen junto a [[Arminio El Dorado]] y partió sin despedirse.\n- **[[El Sobreviviente]]** — Sobrevivió la destrucción de su hermandad. Está convocando La Mesa Completa por tercera vez en la historia. Nadie sabe qué vio esa noche.\n\n# Situación Geopolítica\nLa Orden se desvanece — el mundo político y comercial la dejó obsoleta. Pero en su momento más débil, la batalla entre el Emperador y Tel-Haud está alcanzando un clímax que rompe el interplano. Una hermandad entera fue destruida en una noche por criaturas que no pertenecen a este mundo. La Mesa Completa ha sido convocada."
  },
  {
    "id": "wbase-aetharion",
    "title": "Aetharion",
    "type": "faction",
    "content": "# Declaración\n\"Evolución. Táctica. Estrategia. Temple. Magia al servicio de la victoria. El Jardín Eterno no para de crecer.\"\n\n*El Jardín Eterno — Evolución sin fin*\n\n# Historia\nDurante siglos las casas heráldicas que hoy forman Aetharion vivieron fragmentadas y humilladas bajo el peso del Primer Imperio. Generaciones enteras crecieron con la deuda de una derrota que no cometieron. Hasta que **[[Alendi Galathas]]** — Cúmulo de Estrellas, Casa Gal'Calad — vio lo que nadie más podía ver: que la humillación podía convertirse en combustible.\n\nAlendi unificó las casas heráldicas no por conquista sino por legitimidad — era uno de ellos. Junto a **[[Anariel]]** — la Heraldo, arquitecta de su ventaja tecnológica — construyó el ejército más innovador que Avelir ha visto. No ganaron por número ni por territorio — ganaron porque mientras los demás seguían peleando con las mismas tácticas de siempre, **Aetharion estaba reinventando completamente la guerra**.\n\n# Gobierno\n**República Militar.** El **Arkhon Galas** lidera. Los **Primarcas** comandan las legiones — cada uno un genio en su dominio, toman decisiones en campo sin esperar órdenes. Los **Cónsules** representan al pueblo. **Heraldin Galas** controla la tecnología y la alquimia bélica. Las decisiones se toman en conjunto — pero siempre con la balanza inclinada hacia lo militar.\n\n# Figuras Clave\n- **[[Alendi Galathas]] — Arkhon Galas** — El Cúmulo de Estrellas. Fundador de Aetharion. A los 14 años huyó de la humillación de su familia. Vagó por el mundo hasta convertirse en el arquitecto del Jardín Eterno y de la toma de [[Tol Marin]].\n- **[[Anariel]] — Heraldin Galas** — La Heraldo. Arquitecta de la ventaja tecnológica de Aetharion. Brillante para la magia. Nadie entiende completamente de dónde viene su poder.\n- **Los Primarcas** — Los generales de Aetharion. Cada uno un genio en su dominio.\n- **Los Galadrim** — La guardia élite del Arkhon Galas. Hijos e hijas de las casas heráldicas. El entrenamiento más arduo del mundo.\n\n# Identidad Económica\nProtoindustrial. Ingeniería mecánica avanzada, poder de vapor, máquinas complejas y la aplicación sistemática de la magia a la producción y a la guerra. Militarmente brillantes — pero su economía todavía no alcanza a su ejército. Por eso todas las miradas del Jardín apuntan al [[El Mar del Sur]].\n\n# Situación Geopolítica\nLas águilas del Jardín Eterno acaban de tomar **[[Tol Marin]]**. [[Urushan]] fue humillado — por primera vez en siglos alguien le ganó al Primer Imperio en batalla abierta. El equilibrio de poder cambió de manera definitiva. El mundo no volverá a ser el mismo."
  },
  {
    "id": "wbase-urushan",
    "title": "Urushan",
    "type": "faction",
    "content": "# Declaración\n\"El Primer Imperio. La flota más antigua. La tradición más profunda. Llevamos milenios aquí — y seguiremos cuando todos los demás hayan caído.\"\n\n*El Primer Imperio — La Tormenta del Mar*\n\n# Historia\nUrushan nació de las cenizas del Rompimiento del Velo. Heredaron la flota del Emperador — naves extraordinarias forjadas en otra era, imbuidas con los cuencos de poder, **irreemplazables y sin que nadie sepa repararlas completamente**. Con esas naves construyeron el dominio naval más poderoso de Avelir.\n\nMilenios de historia los convirtieron en los maestros de la intriga, la política y la manipulación. Nadie mueve los hilos del poder con más elegancia que la aristocracia de Urushan. **Nadie muere de vejez en su corte.**\n\nDe su seno nació también el cisma más famoso de la historia: **La Corte del Sol** — su mesa de caballeros más antigua — vio partir a [[Ser Arthantos]] hacia la fundación de la Orden Escarlata hace 700 años.\n\n# Gobierno\n**Matriarcado pragmático** — no por ideología sino por pragmatismo dinástico. Las mujeres gobiernan, los hombres guerrean. La Emperatriz lidera; **El Almirantazgo** tiene un peso político profundo. La capital se muda con cada nueva dinastía — hoy es [[Artesh]], cuna de los Von Richter.\n\n# La Dinastía Von Richter\n- **Bastian Von Richter** — El Gran Almirante fundador. Derrocó a la dinastía anterior y perfeccionó la intriga hasta convertirla en doctrina.\n- **Liria Von Richter, Amanecer de Artesh** — La abuela. Una época de construcción y esperanza.\n- **Alia Von Richter, La Torre de Urushan** — La madre. Rechazó la visión de [[Alarion]] — ese rechazo detonó la rebelión.\n- **[[Iridel Von Richter]], La Tormenta del Mar** — La Emperatriz actual.\n\n# Figuras Clave\n- **[[Iridel Von Richter]] — La Tormenta del Mar** — La Emperatriz. Brillante, maestra de la intriga. Sabe que el colapso es inevitable. Opera de todas formas.\n- **[[Alarion]] — antes Aldric Von Rostov** — El almirante que abandonó nombre, apellido y lealtad. Desde las ruinas de [[Ashlan]] convoca a **Los Peregrinos**.\n- **[[Davorel Von Kersig]]** — El Gran Almirante. Comanda las fuerzas de la Emperatriz contra su amigo sin una sola lágrima.\n- **Los Soleados** — Los creyentes del Emperador. En un imperio secular, creer te distingue. Su número crece con Alarion.\n\n# Situación Geopolítica\nDerrotados en [[Tol Marin]] por primera vez en siglos. La traición de [[Alarion]] sangra por dentro. El Primer Imperio está herido — y un imperio herido con la flota más grande del mundo es más peligroso que nunca.",
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
    "content": "# Declaración\n\"Sin trono. Sin templo. Sin cadenas. Libres antes que cualquier imperio existiera. Libres cuando todos hayan caído.\"\n\n*La Confederación — Los Libres*\n\n# Historia\nLos Pueblos sin Techo no son una facción — **son el mundo entre las facciones**. Todo lo que existe fuera de las seis instituciones principales de Avelir: tribus nómadas, confederaciones emergentes, pueblos costeros, civilizaciones antiguas que se separaron de Urushan, asentamientos fundados por caballeros de la Orden Escarlata, mercados flotantes de Casa Vorin, comunidades que le hacen la guerra a Aetharion desde las montañas.\n\nNo son un pueblo — son una idea: **la libertad no se pide, se vive.** Habitan las montañas, las fronteras y los espacios entre imperios que nadie reclama.\n\n# Gobierno\nNo tienen uno — esa es exactamente su identidad. **Los Consejeros** — líderes sin título fijo. **Los Caballeros Errantes** — los que van donde nadie más quiere ir.\n\n**La Confederación** — el recurso emergente. Una horda de tribus unificadas bajo un símbolo relacionado al cuervo, al buitre — animales que aparecen donde hay cambio y muerte. No tienen agenda cósmica. Son una fuerza natural de la historia que aparece cada cierto tiempo y sacude el tablero.\n\n# Figuras Clave\n- **[[Arminio El Dorado]]** — El Resistente de Tol Varen. Resistió lo imposible con apenas un puñado de hombres y caballeros errantes. Las montañas del norte se unen bajo su bandera.\n- **Los Consejeros** — Líderes sin título fijo.\n- **Los Caballeros Errantes** — Los que van donde nadie más quiere ir.\n\n# Situación Geopolítica\nLa Confederación avanza — y los imperios empiezan a prestar atención por primera vez, en el momento en que menos pueden permitirse otra crisis. No son el villano de la historia: **son el estrés que revela las grietas que ya existían.**"
  },
  {
    "id": "wpub-iridel",
    "title": "Iridel Von Richter",
    "type": "character",
    "content": "# Quién es\nLa Emperatriz de [[Urushan]] — **La Tormenta del Mar**. 31 años. Cuarta generación de la dinastía Von Richter en el trono. Considerada en todas las cortes la mujer más bella de Avelir: esgrimista formada, elegancia severa, ojos esmeralda. Se mueve como quien nunca ha necesitado alzar la voz.\n\n# Historia\nHeredó el trono de su madre, **Alia Von Richter, La Torre de Urushan** — la emperatriz que rechazó la visión de [[Alarion]] y detonó con ello la rebelión de Los Peregrinos. Nieta de **Liria Von Richter, Amanecer de Artesh**, bisnieta de **Bastian Von Richter**, el Gran Almirante que llevó a la dinastía al poder desde [[Artesh]].\n\nSu esposo murió en batalla, en circunstancias que la corte todavía discute en voz baja. Ha tenido seis hijos; el registro imperial consigna que uno murió al nacer.\n\n# Rol actual\nGobierna un imperio herido: la derrota de [[Tol Marin]], el cisma de [[Alarion]] y una flota milenaria que se deteriora sin que nadie sepa repararla. Su respuesta ha sido implacable — purgas políticas contra las casas que vacilan, en una corte donde nadie muere de vejez.",
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
    "content": "# Quién es\nEl **Arkhon Galas** de [[Aetharion]] — fundador del Jardín Eterno. 56 años. Cabello atravesado de plata, presencia cansada y afilada a la vez: un Odiseo curtido que sabe que probablemente no vivirá para ver la edad dorada de lo que construyó.\n\n# Historia\n*Alendi Galathas* — Cúmulo de Estrellas, Casa Gal'Calad. A los 14 años presenció la flagelación pública de su padre — la última humillación de su casa a manos de [[Urushan]]. Esa noche huyó, abandonó nombre y apellido, y se forjó vagando por el mundo hasta volverse algo completamente distinto.\n\nUnificó las casas heráldicas no por conquista sino por legitimidad: era uno de ellos. El título absorbió al hombre — como César, su nombre se volvió el título de todos los que vengan después.\n\n# Familia\nTres hijos adultos, cada uno una pieza del imperio:\n- **[[Aleria Galathas]]** — la Estadista. La más brillante de los tres.\n- **[[Balorin Galathas]]** — la Primera Espada, criado para ser el General. Asesinado hace dos años.\n- **[[Valen Galathas]]** — el Administrador. El arquitecto económico del Jardín.\n\nDos años después del asesinato de Balorin, las águilas tomaron [[Tol Marin]].\n\n# Rol actual\nDirige la república militar en su momento de máximo prestigio. Quienes lo conocen dicen que desde el asesinato se ha vuelto más implacable — y más cercano que nunca a [[Anariel]].",
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
    "content": "# Quién es\nAntes **Aldric Von Rostov** — el almirante más prestigiado de su generación en [[Urushan]]. Hoy: un solo nombre, sin apellido, sin Von, sin linaje. Líder de **Los Peregrinos**. Unos 41 años; cabello oscuro y algo salvaje, mirada ferviente, túnicas sencillas con bordado dorado discreto.\n\n# Historia\nEstuvo a punto de ahogarse — y salió del agua diciendo que había visto al Emperador. Llevó la visión ante el trono; **Alia Von Richter, La Torre de Urushan**, la rechazó. Ese rechazo lo detonó todo: Aldric abandonó su nombre y se instaló en las ruinas de [[Ashlan]], la isla que se dice fue el trono del Emperador.\n\nNo dice \"soy mejor que los Von Richter\". Dice \"yo vengo del origen — ellos son los usurpadores\". Sostiene que la dinastía perdió la legitimidad divina.\n\n# Rol actual\nSus seguidores no son rebeldes — son devotos, y eso los hace imposibles de derrotar políticamente. Llegan a Ashlan en peregrinación, no en levantamiento. Su antiguo compañero de academia, [[Davorel Von Kersig]], dirige la cacería en su contra."
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
    "content": "# Quién es\n**Heraldin Galas** — La Heraldo de [[Aetharion]]. Arquitecta de la ventaja tecnológica del Jardín Eterno: la alquimia bélica, los objetos imbuidos, los cuencos de poder convertidos en instrumento de guerra.\n\nAlta, de piel pálida y luminosa, cabello largo entre plata y oro, ojos gris claro. Una belleza que no parece del todo de este mundo.\n\n# Historia\nNadie sabe de dónde viene. Ha estado junto a la familia Galathas más tiempo del que nadie puede confirmar, y prácticamente solo habla con miembros de ese linaje. Distante — observa el mundo como desde muy lejos.\n\n# Rol actual\nQuienes la han visto de cerca dicen que la muerte de [[Balorin Galathas]] — al que ayudó a criar — la cambió. Nadie sabe decir exactamente cómo."
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
    "content": "# Descripción\nIsla fortificada anterior al Rompimiento del Velo, con milenios de abandono. Se dice que fue el trono del Emperador. Su nombre data de una época tan antigua que su significado se perdió en el tiempo.\n\n# Ubicación\nFrente a las costas de [[Urushan]].\n\n# Quiénes viven aquí\n[[Alarion]] y **Los Peregrinos** — que no llegan como rebeldes, sino como peregrinos.\n\n# Lo que se dice\nQue si las reliquias del Emperador existen, si el Velo se está desgarrando, si el Emperador intenta regresar — Ashlan podría ser exactamente el lugar donde eso ocurra."
  },
  {
    "id": "wpub-artesh",
    "title": "Artesh",
    "type": "place",
    "content": "# Descripción\nCuna de la dinastía Von Richter y actual capital imperial de [[Urushan]]. Arquitectura medieval oscura y sofisticada. En Urushan la capital se muda con cada nueva dinastía — Artesh es capital porque los Von Richter reinan.\n\n# Quiénes viven aquí\nLa corte imperial — el lugar más sofisticado y peligroso de Avelir. Y la **Escuela Naval Real**, donde se forma la élite aristocrática completa: intriga, política, táctica, estrategia, comercio, finanzas.\n\n# Lo que se dice\nQue nadie muere de vejez en su corte."
  },
  {
    "id": "wpub-tolvaren",
    "title": "Tol Varen",
    "type": "place",
    "content": "# Descripción\nSitio del asedio que encendió la resistencia de los pueblos libres contra las purgas de la [[Teocracia de Cherán]]. Con un puñado de hombres y caballeros errantes, [[Arminio El Dorado]] resistió lo imposible — y de ese asedio nace la confederación que hoy une a las montañas del norte bajo su estandarte.\n\n# Lo que pasó aquí\nEntre sus defensores estuvo [[Ser Gianni du Mont]], Primero de la Mesa de Los Normales de la Orden Escarlata, que peleó junto a Arminio y se marchó sin despedirse — como llegan y se van los de la Orden.\n\n# Lo que se dice\nQue lo que Cherán quiso hacer un escarmiento se convirtió en un símbolo."
  },
  {
    "id": "wpub-batalla-tolmarin",
    "title": "La Batalla de Tol Marin",
    "type": "story",
    "content": "# Qué fue\nLa toma de [[Tol Marin]] por [[Aetharion]] — la primera derrota de [[Urushan]] en batalla abierta en siglos. El evento que rompió el equilibrio del Mar Central.\n\n# Cómo ocurrió\nDos años después del asesinato de [[Balorin Galathas]], Aetharion lanzó una campaña cuidadosamente preparada. No ganaron por número: ganaron por táctica superior, disciplina, y el uso sistemático de la magia como arma de guerra.\n\n# Repercusiones\n- Para Urushan: humillación masiva — acelera el cisma de [[Alarion]] y las purgas de [[Iridel Von Richter]].\n- Para Aetharion: prestigio y momentum enormes.\n- La [[Teocracia de Cherán]] usa la victoria como propaganda: los Aetheri son \"el nuevo demonio\".\n- [[Casa Vorin]] gana con ambos bandos, como siempre."
  },
  {
    "id": "wpub-aleria",
    "title": "Aleria Galathas",
    "type": "character",
    "content": "# Quién es\nLa Estadista de [[Aetharion]] — hija de [[Alendi Galathas]]. Considerada la más brillante de los tres hermanos. Presencia marcial imponente; formada tanto para la guerra como para la mesa de negociación.\n\n# Rol actual\nEs la gran tejedora de alianzas del Jardín Eterno. Se le ve cada vez más cerca de [[Casa Vorin]] — y hay quien asegura que sus cartas también viajan hacia [[Ashlan]]."
  },
  {
    "id": "wpub-valen",
    "title": "Valen Galathas",
    "type": "character",
    "content": "# Quién es\nEl Administrador de [[Aetharion]] — hijo menor de [[Alendi Galathas]]. Dicen que es ver al Arkhon de joven: cabello negro corto, ojos azules intensos.\n\n# Rol actual\nEl arquitecto económico del Jardín. Su atención está puesta en [[El Mar del Sur]] — sostiene que quien estabilice el archipiélago controlará la economía del futuro de Avelir."
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
    "content": "# Quién fue\nUno de los comandantes más honorados de **La Corte del Sol** — la mesa de caballeros más antigua de [[Urushan]] — y el fundador de la Orden Escarlata. El Galahad de Avelir.\n\n# El Gran Sacrificio\nHace 700 años supo de una invasión inminente contra un pueblo completamente desamparado. Desafiando a su imperio, tomó a un grupo de caballeros y marchó a defenderlo. En esa batalla enfrentó manifestaciones de Tel-Haud — y pagó el precio máximo. Ese acto de desobediencia, que fue a la vez la fidelidad más pura al código, fundó una orden que lleva siete siglos sin rey, sin capital y sin ejército.\n\n# Su legado\n[[Thecia]] se convirtió en la Cuna de la Orden. Cada caballero que jura el Juramento Escarlata jura sobre su nombre."
  },
  {
    "id": "wpub-caelen",
    "title": "Caëlen Vorin'el",
    "type": "character",
    "content": "# Quién fue\nEl fundador de [[Casa Vorin]]. Hijo menor de un linaje élfico guerrero de alta alcurnia que venía a menos — el que nadie miraba. Vio lo que sus mayores no podían: el mundo no necesitaba otro ejército; necesitaba a alguien que financiara los ejércitos de todos los demás.\n\n# El nombre que se volvió título\nConstruyó la institución junto a sus hermanos, y hoy esos nombres son títulos hereditarios que se transmiten por adopción e indoctrinación: **Caëlen**, el Arquitecto — identidad secreta. **Aldren**, la Voz — el rostro diplomático. **Ilvaën**, el Escudo — la amenaza que nunca se nombra pero siempre se siente. **Maëlor**, la Garra — el amo de las sombras, identidad secreta.\n\n# Lo que se dice\nQue Caëlen no fundó una institución — fundó una especie. Y que en la cúspide sesiona **El Gremio**: la mesa de todos los Caëlen activos. Nadie sabe cuántos son ni quiénes son."
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
    "content": "# Quién es\nEl único caballero que salió con vida la noche en que una hermandad entera de la Orden Escarlata fue destruida por criaturas que no pertenecen a este mundo. Nadie sabe qué vio.\n\n# Rol actual\nEstá convocando **La Mesa Completa** — la coalición de todas las hermandades — por tercera vez en 700 años de historia. Las dos anteriores marcaron épocas. Cuando la Mesa se reúne, el mundo entero sabe que algo sin precedente está ocurriendo."
  },
  {
    "id": "wpub-gianni",
    "title": "Ser Gianni du Mont",
    "type": "character",
    "content": "# Quién es\nPrimero de la Mesa de **Los Normales** — la corriente de la Orden Escarlata que evalúa, caso por caso, qué acción salva más vidas.\n\n# Por qué se le conoce\nDefendió [[Tol Varen]] junto a [[Arminio El Dorado]] contra las purgas de la [[Teocracia de Cherán]] — y se marchó sin despedirse, como llegan y se van los de la Orden."
  },
  {
    "id": "wpub-arminio",
    "title": "Arminio El Dorado",
    "type": "character",
    "content": "# Quién es\nEl Resistente de [[Tol Varen]] — la figura alrededor de la cual se está formando la confederación de los pueblos libres.\n\n# Historia\nCuando las purgas de la [[Teocracia de Cherán]] llegaron a Tol Varen, resistió lo imposible con un puñado de hombres y caballeros errantes. No ganó un trono: ganó algo más raro — que las montañas del norte se unieran bajo un mismo estandarte, marcado con el cuervo y el buitre: los animales que aparecen donde hay cambio y muerte.\n\n# Rol actual\nLos imperios empiezan a prestarle atención — justo en el momento en que menos pueden permitirse otra crisis."
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
    "content": "# Descripción\nEl archipiélago del sur — las **Islas Rotas** al oeste y las **Agujas Rotas** al este. Antes del Rompimiento del Velo esta región no era un mar: era el granero del continente, una de las zonas más fértiles de Avelir. El cataclismo la hundió, y lo que quedó es un laberinto de cientos de islas y corrientes traicioneras.\n\n# Quiénes viven aquí\nLa fertilidad sobrevivió al hundimiento: casi cualquier isla puede autoabastecerse. Eso permitió que florecieran pueblos libres y las **Casas Isleñas** — gremios familiares ferozmente autónomos, cada uno dueño de una cadena de valor:\n- **Casa Veyra** — granos y alimentos. La despensa de Avelir.\n- **Casa Thorne** — minerales, hierro y metales.\n- **Casa Solara** — madera, construcción naval y resinas.\n- **Casa Kael** — especias, hierbas medicinales y tintes.\n- **Casa Riven** — sal, conservación y pesca industrial.\n\nSi un imperio intenta conquistar a una, las demás se alían y hacen que el costo sea impagable. [[Casa Vorin]] opera entre ellas como el intermediario indispensable.\n\n# Lo que se dice\nQue quien estabilice el archipiélago controlará la economía del futuro — y que [[Valen Galathas]] lo sabe mejor que nadie."
  }
]

};

if (typeof module !== 'undefined') module.exports = LORE;
