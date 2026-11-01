---
title: "Bataille de Prestonpans"
description: "Une charge à l'aube et une victoire en moins d'une demi-heure : le prince Charles Édouard Stuart impressionne l'Europe."
year: 1745
periode: "21 septembre 1745"
image: "images/prestonpans.jpg"
lieu: "Prestonpans, East Lothian (Écosse)"
camps: "Jacobites contre armée gouvernementale"
commandants: "Charles Édouard Stuart et lord George Murray contre sir John Cope"
issue: "Victoire jacobite écrasante"
forces:
  -
    camp: "Jacobites"
    cle: "jac"
    effectifs: 2500
    effectifs_texte: "≈ 2 000 à 2 500 hommes"
    chefs: "Charles Édouard Stuart ; lord George Murray"
    composition: "Clans des Highlands (Cameron, MacDonald, Stewart d'Appin, MacGregor, brigade d'Atholl…)."
    pertes: "≈ 30 à 40 morts, 70 à 80 blessés"
  -
    camp: "Gouvernement"
    cle: "gouv"
    effectifs: 2300
    effectifs_texte: "≈ 2 300 hommes, 6 canons"
    chefs: "Sir John Cope"
    composition: "Infanterie régulière, dragons (dont ceux du colonel Gardiner) et artillerie."
    pertes: "≈ 300 morts, 400 à 500 blessés, 1 400 à 1 500 prisonniers"
plan:
  titre: "Prestonpans : la marche de nuit et la charge"
  note: "Schéma simplifié, non à l'échelle. Les Jacobites contournent l'armée de Cope par un marais et l'attaquent de flanc à l'aube."
  decors:
    - {"nom": "Firth of Forth", "type": "mer", "x": 0, "y": 0, "w": 100, "h": 6}
    - {"nom": "Marais", "type": "marais", "x": 48, "y": 55, "w": 42, "h": 36}
    - {"nom": "Enclos et murs", "type": "mur", "x": 10, "y": 10, "w": 3, "h": 52}
    - {"nom": "Hauteurs de Tranent", "type": "relief", "x": 0, "y": 70, "w": 30, "h": 28}
  unites:
    -
      id: "j_gauche"
      camp: "jac"
      label: "Cameron Appin"
      nom: "Aile gauche jacobite"
      info: "Cameron, Stewart d'Appin, régiment de Perth et MacGregor, sous lord George Murray."
    - {"id": "j_droite", "camp": "jac", "label": "MacDonald", "nom": "Aile droite jacobite", "info": "Notamment des régiments MacDonald (Clanranald, Keppoch, Glengarry)."}
    - {"id": "j_atholl", "camp": "jac", "label": "Atholl", "nom": "Brigade d'Atholl", "info": "Participe aux escarmouches qui fixent l'attention de Cope à l'ouest."}
    -
      id: "g_inf"
      camp: "gouv"
      label: "Infanterie"
      nom: "Infanterie de Cope"
      effectif: "≈ 2 300 hommes avec la cavalerie"
      info: "Armée de Cope : fantassins, dragons et 6 canons."
    - {"id": "g_dragn", "camp": "gouv", "label": "Dragons", "nom": "Dragons (aile nord)", "info": "Cavalerie de l'armée royale, en réalité peu aguerrie."}
    - {"id": "g_drags", "camp": "gouv", "label": "Dragons", "nom": "Dragons (aile sud)", "info": "Cavalerie de l'armée royale."}
    - {"id": "g_art", "camp": "gouv", "label": "Art.", "nom": "Artillerie royale", "info": "Six canons ; Cope a le temps de les repositionner face à l'est."}
  phases:
    -
      titre: "Le face-à-face"
      quand: "20 septembre 1745, après-midi"
      texte: "L'armée du général Cope, environ 2 300 hommes avec 6 canons, se déploie face à l'ouest, vers les troupes de Charles Édouard Stuart qui occupent les hauteurs de Tranent. Les deux armées sont séparées par des champs et des marais. Les Jacobites, environ 2 500, escarmouchent pour fixer l'attention de Cope à l'ouest."
      pos:
        j_gauche: [14, 16, 8, 14]
        j_droite: [14, 36, 8, 14]
        j_atholl: [22, 28, 6, 7]
        g_inf: [44, 18, 6, 34]
        g_dragn: [44, 6, 8, 9]
        g_drags: [44, 54, 8, 9]
        g_art: [38, 32, 4, 6]
    -
      titre: "La marche de nuit"
      quand: "Nuit du 20 au 21 septembre"
      texte: "On indique aux Jacobites un sentier à travers le marais. Vers 4 heures, toute l'armée s'y engage, par trois de front, dans le défilé de Riggonhead, à l'est de la position de Cope. Le contournement passe inaperçu assez longtemps pour surprendre l'adversaire."
      pos:
        j_gauche: [58, 68, 14, 6]
        j_droite: [74, 68, 14, 6]
        j_atholl: [66, 78, 7, 6]
        g_inf: [44, 18, 6, 34]
        g_dragn: [44, 6, 8, 9]
        g_drags: [44, 54, 8, 9]
        g_art: [38, 32, 4, 6]
      fleches: [[24, 38, 58, 68, "jac", true]]
    -
      titre: "Cope fait volte-face"
      quand: "Aube du 21 septembre"
      texte: "Prévenu par ses piquets, Cope a juste le temps de pivoter pour faire face à l'est et de repositionner ses canons. Les Jacobites sortent du marais et se déploient en ligne, à l'est."
      pos:
        j_gauche: [72, 12, 9, 16]
        j_droite: [72, 34, 9, 16]
        j_atholl: [78, 26, 6, 7]
        g_inf: [52, 12, 6, 38]
        g_dragn: [52, 3, 9, 8]
        g_drags: [52, 52, 9, 8]
        g_art: [47, 30, 4, 6]
    -
      titre: "La charge"
      quand: "Vers 5 h du matin"
      texte: "Les Highlanders s'élancent à travers les chaumes. Les canons ont à peine le temps de tirer et les dragons, mal préparés, se replient, laissant l'infanterie sans protection. Les deux ailes jacobites convergent, et les fantassins gouvernementaux se retrouvent pris en tenaille."
      pos:
        j_gauche: [60, 13, 9, 16]
        j_droite: [60, 34, 9, 16]
        j_atholl: [65, 26, 6, 7]
        g_inf: [50, 12, 6, 38]
        g_dragn: [44, 3, 9, 8]
        g_drags: [44, 52, 9, 8]
        g_art: [47, 30, 4, 6]
      fleches: [[72, 22, 62, 22, "jac"], [72, 43, 62, 43, "jac"]]
    -
      titre: "La déroute"
      quand: "Moins d'une demi-heure plus tard"
      texte: "La ligne gouvernementale cède. Beaucoup de soldats, acculés aux enclos à l'ouest, sont tués ou capturés : les pertes royales sont estimées à environ 300 tués, 400 à 500 blessés et 1 400 à 1 500 prisonniers, contre une trentaine à quarante tués et environ 70 à 80 blessés côté jacobite. Cope s'enfuit avec quelques officiers."
      battu: "gouv"
      pos:
        j_gauche: [44, 12, 9, 16]
        j_droite: [44, 34, 9, 16]
        j_atholl: [48, 26, 6, 7]
        g_inf: [30, 16, 5, 28]
        g_dragn: [16, 3, 9, 8]
        g_drags: [16, 52, 9, 8]
        g_art: [34, 30, 4, 6]
      fleches: [[44, 24, 28, 26, "jac"], [44, 44, 28, 40, "jac"]]
frise:
  - {"quand": "19 août 1745", "titre": "Glenfinnan", "texte": "Charles Édouard lève l'étendard devant ≈ 1 500 Highlanders (Cameron, MacDonald et autres)."}
  - {"quand": "21 septembre 1745", "titre": "Prestonpans", "texte": "Victoire éclair à l'aube."}
  - {"quand": "Décembre 1745", "titre": "Derby", "texte": "Arrivée au cœur de l'Angleterre, puis demi-tour décidé par les chefs."}
  - {"quand": "17 janvier 1746", "titre": "Falkirk Muir", "texte": "Nouvelle victoire jacobite, sans conséquence décisive."}
sources:
  - {"titre": "Historic Environment Scotland : inventaire du champ de bataille de Prestonpans", "url": "https://portal.historicenvironment.scot/designation/BTL16"}
  - {"titre": "Battle of Prestonpans (1745) Heritage Trust : la bataille", "url": "https://www.battleofprestonpans1745.org/battle/"}
  - {"titre": "Wikipédia (en) : Battle of Prestonpans", "url": "https://en.wikipedia.org/wiki/Battle_of_Prestonpans"}
quiz:
  -
    q: "Quelle est la date de la bataille de Prestonpans ?"
    options: ["19 août 1745", "21 septembre 1745", "16 avril 1746", "13 novembre 1715"]
    bonne: 1
    explication: "C'est la première vraie bataille du soulèvement de 1745."
  -
    q: "Comment les Jacobites surprennent-ils le général Cope ?"
    options: ["Par un tunnel", "Par un sentier à travers le marais, de nuit", "Par la mer", "En se déguisant en soldats"]
    bonne: 1
    explication: "Ils contournent sa position et l'attaquent de flanc à l'aube."
  -
    q: "Combien de temps dure la bataille ?"
    options: ["Trois jours", "Une journée entière", "Moins d'une demi-heure", "Une semaine"]
    bonne: 2
    explication: "La ligne gouvernementale cède très vite."
  -
    q: "Où Charles Édouard avait-il levé l'étendard un mois plus tôt ?"
    options: ["À Culloden", "À Glenfinnan", "À Braemar", "À Dundee Law"]
    bonne: 1
    explication: "Le 19 août 1745, devant environ 1 500 Highlanders."
  -
    q: "Quelle conséquence a cette victoire ?"
    options: ["Elle met fin au soulèvement", "Elle donne du prestige au prince et attire des volontaires", "Elle provoque la paix avec la France", "Elle rend l'Écosse indépendante"]
    bonne: 1
    explication: "Le gouvernement doit aussi rappeler des troupes d'expérience du continent."
---

## Le contexte

En juillet 1745, Charles Édouard Stuart, petit-fils de Jacques II, débarque en Écosse avec très peu de moyens.
Le 19 août, à Glenfinnan, il lève l'étendard devant environ 1 500 Highlanders. Les chefs hésitent : plusieurs
ne rejoignent le prince qu'à contrecœur. Son armée marche vers le sud et s'empare d'Édimbourg, dont le château
reste aux mains du gouvernement. Le général Cope, qui avait manœuvré vers le nord, revient par mer et prend position
près de Prestonpans.

## Le déroulement

Pour s'en tirer, les Jacobites doivent éviter une bataille de front contre l'artillerie. Un sentier traverse le marais
qui les sépare de l'ennemi : l'armée l'emprunte de nuit, en colonne, et surgit à l'est de la position de Cope.
Voici le plan, phase par phase :

{{< plan >}}

## Pourquoi cette victoire compte

Prestonpans est la première vraie victoire du soulèvement de 1745. Elle donne du prestige au prince, attire de nouveaux
volontaires et oblige le gouvernement à rappeler des troupes d'expérience du continent. Elle prépare la marche vers
l'Angleterre… mais pas la victoire finale.

{{< deplier titre="Cope, un général maladroit ?" >}}
Cope est resté célèbre pour sa fuite, mais une cour martiale l'a ensuite exonéré : ses dispositions étaient
jugées sensées. Son armée comptait surtout de jeunes soldats et sa cavalerie était peu aguerrie.
{{< /deplier >}}

## La suite

{{< frise >}}

## Teste tes connaissances

{{< quiz >}}
