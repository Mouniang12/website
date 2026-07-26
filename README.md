# 🎭 User Inyerface – Refonte UX/UI

**User Inyerface** est un projet pédagogique qui revisite [userinyerface.com](https://userinyerface.com/), un site expérimental volontairement conçu pour regrouper les pires pratiques en matière d'expérience utilisateur (UX) et d'interface (UI) — ce qu'on appelle des *dark patterns* : des éléments qui piègent, déroutent ou frustrent l'utilisateur au lieu de l'aider.

L'objectif de ce projet est de reprendre ce parcours volontairement pénible et de le retravailler pour obtenir une interface réellement centrée sur l'utilisateur, en appliquant les principes fondamentaux du **design centré utilisateur** (User-Centered Design).

> 💡 **Vous n'êtes pas développeur ?** La première partie de ce document explique le projet en langage simple. La partie technique (comment ouvrir et consulter les pages) se trouve plus loin.

---

## 🖥️ De quoi s'agit-il ?

Le site original, [userinyerface.com](https://userinyerface.com/), met le visiteur au défi de remplir un formulaire d'inscription en un temps limité, tout en multipliant volontairement les pièges : boutons qui ne font pas ce qu'ils annoncent, champs mal étiquetés, messages d'erreur incompréhensibles, absence de repères visuels, etc. C'est un exercice ludique très connu dans le milieu du design UX, utilisé pour faire ressentir concrètement à quel point de mauvais choix de conception peuvent rendre une interface désagréable, voire inutilisable.

Ce projet reprend ce même parcours (une création de compte en plusieurs étapes) mais en corrigeant, étape par étape, les problèmes du site original :

- Une **navigation claire**, avec une progression visible (étape 1 sur 4, 2 sur 4, etc.)
- Des **formulaires compréhensibles** : libellés explicites, indications claires sur ce qui est attendu (par exemple les critères d'un mot de passe), messages d'erreur utiles plutôt que déroutants
- Des **boutons et champs facilement identifiables**, avec une hiérarchie visuelle cohérente
- Une meilleure **accessibilité** : navigation au clavier, contrastes conformes aux normes, libellés explicites pour les lecteurs d'écran

### 📄 Les pages du projet

| Page | Contenu |
|---|---|
| `index.html` | Page d'accueil : présentation du principe et bouton pour démarrer le parcours |
| `etape1.html` | Étape 1 — Création du compte : choix d'un mot de passe, adresse courriel, acceptation des conditions |
| `etape2.html` | Étape 2 — Profil : ajout d'une photo de profil et sélection de centres d'intérêt |
| `etape3.html` | Étape 3 — Informations personnelles : civilité, nom, date de naissance, adresse, pays |

> ℹ️ Le parcours annonce 4 étapes au total ; à ce stade du projet, les étapes 1 à 3 sont construites. C'est un projet pédagogique en cours d'évolution plutôt qu'un produit fini.

---

## 🎓 Approche et principes appliqués

Cette refonte s'appuie sur plusieurs notions clés de l'ergonomie des interfaces :

- **Le design centré utilisateur** : concevoir en partant des besoins réels de la personne qui utilise l'interface, plutôt que de ses propres intentions
- **Les heuristiques de Nielsen** : un ensemble de règles reconnues pour évaluer et améliorer l'utilisabilité d'une interface (visibilité de l'état du système, cohérence, prévention des erreurs, etc.)
- **La loi de Hick** : plus on propose de choix à quelqu'un, plus cela lui prend de temps pour décider — d'où l'intérêt de limiter et clarifier les options
- **La loi de Fitts** : plus une cible (comme un bouton) est grande et proche, plus elle est facile et rapide à atteindre
- **La reconnaissance plutôt que la mémorisation** : privilégier des éléments visibles et explicites plutôt que d'obliger l'utilisateur à se souvenir d'une information ou d'une règle cachée
- **Les normes WCAG** (Web Content Accessibility Guidelines) : les standards internationaux d'accessibilité numérique

Ce travail a aussi une dimension pédagogique : en comparant directement une interface volontairement mal conçue avec sa version retravaillée, on comprend plus concrètement l'impact réel des choix UX/UI sur l'expérience d'une personne qui utilise un site.

---

## 🛠️ Technologies utilisées

Ce projet est volontairement simple sur le plan technique, pour rester centré sur la démonstration UX/UI :

- **HTML** — structure des pages
- **CSS** (intégré directement dans chaque page) — mise en forme visuelle
- **JavaScript** — pour les interactions (minuteur, sélection des centres d'intérêt, validations de formulaire, etc.)
- [Bootstrap](https://getbootstrap.com/) — utilisé sur la page `etape1.html` pour certains composants d'interface
- Police [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts)

Aucun framework, aucune installation de dépendances ni serveur particulier n'est nécessaire : ce sont de simples pages web autonomes.

---

## 🚀 Comment consulter le projet

Aucune installation n'est requise. Deux façons simples de voir le résultat :

### Option 1 — Ouvrir directement les fichiers
1. Téléchargez ou clonez le projet sur votre ordinateur.
2. Double-cliquez sur le fichier `index.html` : il s'ouvrira dans votre navigateur par défaut.
3. Cliquez sur **START** pour suivre le parcours, étape par étape.

### Option 2 — Utiliser un petit serveur local (recommandé pour un rendu plus fidèle)
Certains navigateurs appliquent des restrictions lorsqu'un fichier HTML est ouvert directement (protocole `file://`). Pour éviter tout souci, vous pouvez lancer un petit serveur local :

```bash
# Depuis le dossier du projet
npx serve .
```
ou, si vous avez Python installé :
```bash
python3 -m http.server
```
Puis ouvrez l'adresse indiquée dans le terminal (généralement `http://localhost:8000` ou similaire) dans votre navigateur.

---

## 📂 Structure du projet

```
user-inyerface/
├── index.html      # Page d'accueil / démarrage du parcours
├── etape1.html      # Étape 1 : création du compte
├── etape2.html       # Étape 2 : profil et centres d'intérêt
└── etape3.html       # Étape 3 : informations personnelles
```

---

## 🔗 Référence

Le site original, source d'inspiration de ce projet, est disponible ici :
[https://userinyerface.com/](https://userinyerface.com/)

## 📄 Licence

Aucune licence n'a été spécifiée pour ce projet à ce jour.
