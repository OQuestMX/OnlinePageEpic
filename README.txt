EPIC QUEST · versión del 14 de octubre de 2026
==============================================
Reemplaza a version-2026-10-09. Es la primera versión con niveles.

Archivos
  data.js                 fuente de verdad (sin cambios de forma en lo que ya existía; ver "qué trae")
  creador-personaje.html  app del jugador: crea el héroe a nivel 1
  wiki.html               hub del jugador: aquí SUBE DE NIVEL y gasta Kit Points
  index.html              app del Story Master
  lore.js                 sin cambios

Qué trae esta versión
  1. La base bajo revisión se vuelve oficial: texto estándar en las 78 habilidades de clase y subclase,
     fórmula de bandas (2 Aen: 4/6/8/10, +2 por Aen de costo, área ÷1.8) y 12 subidas de costo
     (Turret 2→4, Entangle 2→3, Shadow Step 2→3, Void Touch 3→4, Death Mark 4→5, Earthquake 4→5,
     Unleash the Pact 4→5, Eye of the Storm 5→6, The Empty 5→6, Arcane Surge 5→6, Cataclysm 5→6, Carpet Bomb 5→6).
  2. Niveles 1-10 (GAMEDATA.progression): 2 subclase (su Base) · 3 +1 bandas · 4 Heroica de subclase ·
     5 +1 Aen, +1 bandas · 6 Base mejorada (+2 a todas las bandas de una Base, a elegir) · 7 +1 bandas ·
     8 Heroica desatada · 9 +1 Aen, +1 bandas · 10 Legendaria. Cada nivel +2 Vitalidad. 13 Kit Points al 10.
     El bono a bandas se suma al número de daño de cada banda, nunca al d12.
  3. Kit Points reemplazan a los sellos (los campos marks / marksTotal no cambian de nombre). Los da el nivel;
     el Story Master puede dar extras (marksExtra). Se gastan en dos árboles: el arma (maestrías de siempre)
     y la armadura del kit.
  4. Árbol de armadura por kit (GAMEDATA.armorTrees): 15 kits × 3 vertientes (vida / Aen / daño) × 4 nodos;
     la raíz es gratis. Entrar a una vertiente no cierra las otras. El Aen de armadura se devuelve (tope 2/turno),
     nunca sube el Aen por turno.
  5. Las 10 Heroicas de clase tienen su efecto desatado (campo unleashed), activo desde el nivel 8.
  6. Regla: el Aen no se acumula entre turnos (rules.aenCarryRule).
  7. Monstruos por nivel (GAMEDATA.monsterScale / scaleMonster): el bestiario es nivel 1; a nivel N,
     Vitalidad × (1 + 0.20·(N−1)) y daño × (1 + 0.15·(N−1)); 1 de Vitalidad se queda en 1.
     En el index, "Nivel del grupo" (auto = el jugador de mayor nivel, o fijo) escala fichas, listas y el tracker.

Quién hace qué
  - El jugador sube de nivel en la wiki (panel "Tu nivel"): elige subclase al 2 y Base mejorada al 6,
    compra nodos de arma y armadura. Bajar de nivel recorta las compras más recientes.
  - El Story Master ve el nivel en el index (viene en el .json importado) y puede corregirlo en el editor
    del jugador, además de dar Kit Points extra.
  - El creador crea a nivel 1 y muestra la armadura del kit; si abre un .json con nivel, lo respeta.

JSON del héroe · campos nuevos: level, improvedBase, marksExtra. Los .json anteriores siguen abriendo (nivel 1).

Pendientes conocidos
  - Los textos del árbol de armadura están en inglés como el resto de data.js; la interfaz en español.
  - Nombres duplicados (Elemental Burst ×2; 7 armas legendarias = su nodo legendario): se quedan por ahora.
  - Las habilidades de los monstruos no escalan con el nivel.
  - shared/mastery.js (si existe aparte en el repo) no se tocó: el motor vive dentro de cada página.

Pruebas: 99 aserciones Playwright sobre estos archivos (53 de regresión + 46 nuevas), todas pasan.
Documentos en el proyecto "Epic": decisiones-niveles-kits-2026-10.md, base-revision-clases-2026-10.md,
estandar-aplicado-2026-10.md, ancestria.md.
