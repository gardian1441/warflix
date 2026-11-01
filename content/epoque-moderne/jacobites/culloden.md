---
title: "Bataille de Culloden"
description: "La dernière bataille livrée sur le sol britannique met fin, en moins d'une heure, au rêve jacobite."
year: 1746
periode: "16 avril 1746"
image: "/images/culloden.jpg"
lieu: "Drumossie Moor, près d'Inverness (Écosse)"
camps: "Jacobites contre armée gouvernementale hanovrienne"
commandants: "Charles Édouard Stuart (avec lord George Murray) contre William Augustus, duc de Cumberland"
issue: "Défaite jacobite décisive"
forces:
  -
    camp: "Jacobites"
    cle: "jac"
    effectifs: 5400
    effectifs_texte: "≈ 5 000 à 5 400 hommes (jusqu'à 6 000 selon les sources)"
    chefs: "Charles Édouard Stuart ; lord George Murray à l'aile droite ; duc de Perth à gauche"
    composition: "Brigade d'Atholl (≈ 500), Cameron de Lochiel (≈ 650 à 700), régiment de lady Mackintosh (≈ 350), MacDonald de Keppoch (≈ 200), Frasers, Stewart d'Appin, Farquharson, brigade irlandaise et autres."
    pertes: "≈ 1 250 à 1 500 morts, ≈ 1 000 blessés, ≈ 500 prisonniers"
  -
    camp: "Gouvernement"
    cle: "gouv"
    effectifs: 8500
    effectifs_texte: "≈ 8 000 à 9 000 hommes"
    chefs: "William Augustus, duc de Cumberland"
    composition: "16 bataillons d'infanterie en deux lignes, cavalerie et dragons, artillerie royale, milices Campbell, bataillon de Highlanders Munro, régiments des Lowlands."
    pertes: "≈ 50 morts, 259 blessés"
plan:
  titre: "Culloden : la charge des clans, phase par phase"
  note: "Schéma simplifié, non à l'échelle ; les positions exactes varient selon les sources. Les Jacobites sont à gauche (à l'ouest), le gouvernement à droite (à l'est). Leur aile droite (Atholl, Cameron…) est en bas, leur aile gauche (MacDonald) en haut."
  decors:
    - {"nom": "Terrain détrempé", "type": "marais", "x": 36, "y": 32, "w": 12, "h": 20}
    - {"nom": "Mur du parc de Culloden (sud)", "type": "mur", "x": 6, "y": 96, "w": 88, "h": 2.5}
  unites:
    - {"id": "j_perth", "camp": "jac", "label": "Perth", "nom": "Régiments de Perth et de Glenbuchat", "info": "Placés à l'extrême gauche après un changement de dispositif."}
    -
      id: "j_mcd"
      camp: "jac"
      label: "MacDonald"
      nom: "MacDonald (Clanranald, Keppoch, Glengarry)"
      info: "Relégués à l'aile gauche, ils estimaient que la droite leur revenait ; ils avancent lentement et ne chargent jamais vraiment. Le régiment de Keppoch compte environ 200 hommes."
    - {"id": "j_farq", "camp": "jac", "label": "Farquh.", "nom": "Farquharson et John Roy Stuart", "info": "Unités du centre gauche."}
    -
      id: "j_chattan"
      camp: "jac"
      label: "Chattan"
      nom: "Clan Chattan (régiment de lady Mackintosh)"
      effectif: "≈ 350 hommes"
      info: "Parti le premier ; le terrain détrempé le fait dévier vers la droite."
    - {"id": "j_fraser", "camp": "jac", "label": "Fraser", "nom": "Frasers", "info": "Régiment de Charles Fraser d'Inverallochy."}
    - {"id": "j_appin", "camp": "jac", "label": "Appin", "nom": "Stewart d'Appin", "info": "Les officiers du régiment subissent de lourdes pertes."}
    -
      id: "j_cameron"
      camp: "jac"
      label: "Cameron"
      nom: "Régiment des Cameron de Lochiel"
      effectif: "≈ 650 à 700 hommes"
      info: "Considéré comme l'une des unités les plus solides de l'armée jacobite."
    -
      id: "j_atholl"
      camp: "jac"
      label: "Atholl"
      nom: "Brigade d'Atholl"
      effectif: "≈ 500 hommes"
      info: "À l'extrême droite, sous lord George Murray ; composée de Robertson, Menzies, Murray…"
    - {"id": "j_irish", "camp": "jac", "label": "Irlandais", "nom": "Réserve : brigade irlandaise et autres", "info": "Seconde ligne ; couvre la retraite."}
    - {"id": "j_art", "camp": "jac", "label": "Art.", "nom": "Artillerie jacobite", "info": "Quelques canons, mais peu de canonniers expérimentés."}
    - {"id": "g_droite", "camp": "gouv", "label": "Aile droite", "nom": "Infanterie : aile droite", "info": "Première ligne : sept bataillons sur trois rangs."}
    - {"id": "g_centre", "camp": "gouv", "label": "Centre", "nom": "Infanterie : centre", "info": "Première ligne."}
    -
      id: "g_gauche"
      camp: "gouv"
      label: "Barrell Monro"
      nom: "Régiments de Barrell et de Monro (aile gauche)"
      info: "Ce sont eux qui reçoivent le choc de la charge ; Barrell est proche de rompre."
    - {"id": "g_seconde", "camp": "gouv", "label": "2e ligne", "nom": "Seconde ligne", "info": "Troupes fraîches qui comblent les brèches."}
    -
      id: "g_wolfe"
      camp: "gouv"
      label: "Wolfe Ligonier"
      nom: "Régiments de Wolfe et de Ligonier"
      info: "Sur la gauche de la seconde ligne : ils contre-attaquent et tirent sur le flanc des Jacobites. Le futur général James Wolfe est lieutenant-colonel."
    -
      id: "g_art"
      camp: "gouv"
      label: "Art."
      nom: "Artillerie royale"
      info: "Plus nombreuse et mieux servie : elle passe à la mitraille quand les Jacobites avancent."
    - {"id": "g_drag", "camp": "gouv", "label": "Dragons", "nom": "Cavalerie et dragons", "info": "Aile droite gouvernementale ; elle menace les MacDonald."}
    -
      id: "g_camp"
      camp: "gouv"
      label: "Milice Campbell"
      nom: "Milice Campbell et dragons"
      info: "Derrière le mur du parc, ils l'ouvrent pour déborder le flanc droit jacobite et prendre l'armée à revers."
  phases:
    -
      titre: "Le déploiement"
      quand: "Vers midi, 16 avril 1746"
      texte: "Les deux armées se font face sur la lande de Drumossie, à environ 700 mètres. Les Jacobites, environ 5 000 à 5 400, sont épuisés par la marche de nuit manquée vers Nairn. L'armée de Cumberland, environ 8 000 à 9 000 hommes, a dormi et mangé. À l'extrême droite jacobite, la brigade d'Atholl ; à gauche, les MacDonald, qui n'ont pas la place d'honneur à laquelle ils estimaient avoir droit."
      pos:
        j_perth: [22, 6]
        j_mcd: [22, 16]
        j_farq: [22, 26]
        j_chattan: [22, 36]
        j_fraser: [22, 46]
        j_appin: [22, 56]
        j_cameron: [22, 66]
        j_atholl: [22, 76]
        j_irish: [12, 40]
        j_art: [31, 44]
        g_droite: [68, 12, 6, 20]
        g_centre: [68, 36, 6, 20]
        g_gauche: [68, 62, 6, 20]
        g_seconde: [76, 18, 5, 56]
        g_wolfe: [76, 62, 5, 20]
        g_art: [60, 44]
        g_drag: [74, 2, 9, 7]
        g_camp: [60, 90, 12, 6]
    -
      titre: "Le duel d'artillerie"
      quand: "Vers 13 h"
      texte: "Les canons jacobites ouvrent le feu, mais leur tir est peu efficace. L'artillerie gouvernementale, plus nombreuse et mieux servie, répond puis passe à la mitraille. Les Jacobites restent debout sous le feu pendant une demi-heure environ, selon plusieurs récits, sans ordre de charger."
      pos:
        j_perth: [22, 6]
        j_mcd: [22, 16]
        j_farq: [22, 26]
        j_chattan: [22, 36]
        j_fraser: [22, 46]
        j_appin: [22, 56]
        j_cameron: [22, 66]
        j_atholl: [22, 76]
        j_irish: [12, 40]
        j_art: [31, 44]
        g_droite: [68, 12, 6, 20]
        g_centre: [68, 36, 6, 20]
        g_gauche: [68, 62, 6, 20]
        g_seconde: [76, 18, 5, 56]
        g_wolfe: [76, 62, 5, 20]
        g_art: [60, 44]
        g_drag: [74, 2, 9, 7]
        g_camp: [60, 90, 12, 6]
      fleches: [[62, 30, 34, 30, "gouv", true], [62, 46, 34, 46, "gouv", true], [62, 62, 34, 62, "gouv", true], [33, 44, 58, 44, "jac", true]]
    -
      titre: "La charge"
      quand: "Vers 13 h 30"
      texte: "La charge est ordonnée. Le clan Chattan part le premier, mais un terrain détrempé le fait dévier vers la droite. La pente, un chemin qui traverse la lande et le feu ennemi resserrent la charge, qui glisse vers l'aile gauche gouvernementale. Les MacDonald, plus éloignés, partent les derniers."
      pos:
        j_perth: [32, 8]
        j_mcd: [33, 18]
        j_farq: [38, 28]
        j_chattan: [42, 40]
        j_fraser: [44, 50]
        j_appin: [45, 60]
        j_cameron: [46, 70]
        j_atholl: [46, 80]
        j_irish: [12, 40]
        j_art: [31, 44]
        g_droite: [68, 12, 6, 20]
        g_centre: [68, 36, 6, 20]
        g_gauche: [68, 62, 6, 20]
        g_seconde: [76, 18, 5, 56]
        g_wolfe: [76, 62, 5, 20]
        g_art: [60, 44]
        g_drag: [74, 2, 9, 7]
        g_camp: [60, 90, 12, 6]
      fleches: [[30, 72, 60, 78, "jac"], [30, 52, 58, 62, "jac"], [30, 40, 56, 52, "jac"]]
    -
      titre: "Le choc"
      quand: "Quelques minutes plus tard"
      texte: "La charge s'écrase sur les régiments de Barrell et de Monro. Les Highlanders percent la première ligne, mais la seconde tient. Les régiments de Wolfe et de Ligonier contre-attaquent et tirent sur le flanc. Derrière le mur, les miliciens Campbell et des dragons ouvrent des brèches et prennent le flanc jacobite à revers."
      pos:
        j_perth: [34, 9]
        j_mcd: [38, 19]
        j_farq: [47, 31]
        j_chattan: [55, 44]
        j_fraser: [57, 53]
        j_appin: [58, 62]
        j_cameron: [60, 70]
        j_atholl: [60, 78]
        j_irish: [12, 40]
        j_art: [31, 44]
        g_droite: [68, 12, 6, 20]
        g_centre: [68, 36, 6, 20]
        g_gauche: [66, 62, 6, 20]
        g_seconde: [76, 18, 5, 56]
        g_wolfe: [64, 52, 5, 20]
        g_art: [60, 44]
        g_drag: [62, 12, 9, 7]
        g_camp: [52, 88, 12, 6]
      fleches: [[76, 70, 66, 58, "gouv"], [64, 90, 52, 90, "gouv"], [72, 6, 62, 14, "gouv"]]
    -
      titre: "La débâcle"
      quand: "En moins d'une heure"
      texte: "Pris de flanc, les clans refluent. Les MacDonald, menacés par les dragons, se replient sans avoir vraiment chargé. La réserve irlandaise couvre la retraite. La cavalerie gouvernementale poursuit les fuyards sur des kilomètres. Bilan : environ 1 250 à 1 500 Jacobites tués, environ 1 000 blessés et 500 prisonniers, contre une cinquantaine de morts côté gouvernemental."
      battu: "jac"
      pos:
        j_perth: [14, 9]
        j_mcd: [14, 19]
        j_farq: [14, 31]
        j_chattan: [16, 43]
        j_fraser: [16, 53]
        j_appin: [16, 63]
        j_cameron: [16, 72]
        j_atholl: [16, 80]
        j_irish: [24, 46]
        g_droite: [54, 12, 6, 20]
        g_centre: [54, 36, 6, 20]
        g_gauche: [56, 62, 6, 20]
        g_seconde: [60, 18, 5, 56]
        g_wolfe: [52, 52, 5, 20]
        g_art: [48, 44]
        g_drag: [20, 12, 9, 7]
        g_camp: [30, 88, 12, 6]
      fleches: [[50, 14, 12, 22, "gouv"], [50, 88, 14, 84, "gouv"]]
frise:
  - {"quand": "19 août 1745", "titre": "Glenfinnan", "texte": "Charles Édouard lève l'étendard."}
  -
    quand: "15 avril 1746"
    titre: "Marche de nuit manquée"
    texte: "Les Jacobites tentent d'attaquer Cumberland à Nairn, puis rebroussent chemin épuisés ; les Mackenzie de Cromartie sont capturés à Dunrobin."
  - {"quand": "16 avril 1746", "titre": "Culloden", "texte": "La charge des clans est brisée par l'artillerie, le feu des mousquets et la prise de flanc."}
  - {"quand": "Septembre 1746", "titre": "Fuite du prince", "texte": "Après des mois de cavale, Charles Édouard embarque pour la France."}
  -
    quand: "1746 – 1747"
    titre: "Répression"
    texte: "Désarmement, interdiction du costume des Highlands, fin de la justice héréditaire des chefs. Lord Lovat est exécuté en avril 1747."
sources:
  - {"titre": "Historic Environment Scotland : inventaire du champ de bataille de Culloden", "url": "https://portal.historicenvironment.scot/designation/BTL6"}
  - {"titre": "National Trust for Scotland : la bataille de Culloden", "url": "https://www.nts.org.uk/Culloden/PPF/TheBattle/"}
  - {"titre": "Wikipédia (en) : ordre de bataille de Culloden", "url": "https://en.wikipedia.org/wiki/Battle_of_Culloden_order_of_battle"}
quiz:
  -
    q: "Quelle est la date de la bataille de Culloden ?"
    options: ["16 avril 1746", "21 septembre 1745", "10 juin 1719", "27 juillet 1689"]
    bonne: 0
    explication: "C'est la dernière bataille rangée livrée sur le sol britannique."
  -
    q: "Qui commande l'armée gouvernementale ?"
    options: ["Le duc de Cumberland", "Le duc d'Argyll", "Sir John Cope", "Hugh Mackay"]
    bonne: 0
    explication: "William Augustus, duc de Cumberland, fils du roi George II."
  -
    q: "Pourquoi les Jacobites sont-ils épuisés avant la bataille ?"
    options: ["Une épidémie", "Une marche de nuit manquée vers Nairn", "Un siège de plusieurs mois", "Une traversée de la mer"]
    bonne: 1
    explication: "Ils avaient tenté une attaque surprise contre le camp de Cumberland, puis rebroussé chemin."
  -
    q: "Quelle unité jacobite est placée à l'extrême droite ?"
    options: ["Les MacDonald", "Les Mackenzie", "La brigade d'Atholl", "Les Campbell"]
    bonne: 2
    explication: "Les MacDonald, eux, sont à l'aile gauche, et estiment que la droite leur revenait."
  -
    q: "Pourquoi les Mackenzie du comte de Cromartie sont-ils absents ?"
    options: ["Ils sont restés neutres", "Leur régiment a été capturé la veille, à Dunrobin", "Ils combattent pour le gouvernement", "Ils sont partis pour la France"]
    bonne: 1
    explication: "Leur régiment est battu à Littleferry le 15 avril, et le comte est capturé."
---

## Le contexte

Après la victoire de Prestonpans et la marche jusqu'à Derby, l'armée jacobite a fait demi-tour. Elle remporte encore
une victoire à Falkirk en janvier 1746, puis recule vers le nord. Le duc de Cumberland, fils du roi George II,
la poursuit avec une armée mieux équipée et mieux ravitaillée.

Le 15 avril, jour de l'anniversaire de Cumberland, les Jacobites tentent une attaque de nuit contre son camp
près de Nairn. L'opération échoue, et l'armée revient épuisée. Le lendemain, les chefs se disputent : faut-il combattre
ici, sur la lande de Drumossie, ou reculer ? Le prince, convaincu, choisit de livrer bataille.

## Le déroulement

Cette lande est un terrain ouvert, plat et en partie détrempé : il ne favorise pas la charge des Highlanders,
mais convient parfaitement à l'artillerie et au tir coordonné de l'infanterie gouvernementale.

{{< plan >}}

{{< deplier titre="Qui combattait avec qui ?" >}}
Dans l'armée jacobite : Atholl, Cameron de Lochiel, Stewart d'Appin, Fraser, Mackintosh (Clan Chattan),
MacLean, MacLachlan, Farquharson, MacDonald (Clanranald, Keppoch, Glengarry)… Du côté du gouvernement :
des régiments anglais, des régiments des Lowlands, des miliciens du clan Campbell et un bataillon de Highlanders
Munro, qui avaient combattu pour la Grande-Bretagne en France. Le clan Mackenzie, lui, n'est pas sur le champ de bataille :
le régiment du comte de Cromartie a été capturé la veille à Dunrobin.
{{< /deplier >}}

{{< deplier titre="Colonel Anne, la dame qui lève un clan" >}}
Selon la tradition, c'est lady Anne Mackintosh, dont le mari servait dans l'armée du gouvernement, qui lève le régiment
du Clan Chattan pour le prince. On l'appelle « Colonel Anne ». Beaucoup de ses officiers sont tués à Culloden.
{{< /deplier >}}

{{< deplier titre="Le tartan interdit" >}}
Après Culloden, plusieurs lois interdisent le port des armes et du costume des Highlands. Elles
visent le système clanique lui-même : Londres veut en finir avec le pouvoir militaire des chefs.
{{< /deplier >}}

## Après la bataille

Les pertes jacobites s'aggravent pendant la poursuite : la cavalerie gouvernementale rattrape les fuyards, et de nombreux
blessés restés sur le terrain sont tués. Cumberland est surnommé « le Boucher ». Le prince Charles échappe aux recherches
pendant cinq mois, aidé par des fidèles dont Flora MacDonald, avant de quitter l'Écosse en septembre.

{{< frise >}}

## Teste tes connaissances

{{< quiz >}}
