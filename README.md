# ✅ Gestionnaire de Tâches (Full Stack CRUD)

Cette application web permet à chaque utilisateur de créer un compte, de se connecter, puis de gérer sa propre liste de tâches personnelle : ajouter une tâche, la marquer comme terminée, ou la supprimer.

C'est un projet du type "to-do list", mais avec un vrai système de comptes : chaque utilisateur ne voit et ne gère que ses propres tâches.

> 💡 **Vous n'êtes pas développeur ?** La première partie de ce document explique le fonctionnement de l'application en langage simple. La partie technique (installation, code) se trouve plus loin, pour les personnes qui veulent faire tourner le projet sur leur ordinateur.

---

## 🖥️ À quoi sert cette application ?

L'idée est simple : offrir un espace personnel où chacun peut noter ce qu'il a à faire et suivre son avancement.

### 👤 Comptes utilisateurs
Chaque personne crée son propre compte (nom, prénom, email, mot de passe) et se connecte ensuite avec son email et son mot de passe. Le mot de passe n'est jamais stocké tel quel : il est chiffré avant d'être enregistré, pour protéger les utilisateurs.

### 📝 Gestion des tâches
Une fois connecté, l'utilisateur accède à sa liste de tâches personnelle et peut :
- **Ajouter** une nouvelle tâche (avec un titre et une description)
- **Marquer une tâche comme terminée** (ou la remettre "en cours")
- **Supprimer** une tâche

Chaque tâche appartient à un seul utilisateur : personne d'autre ne peut voir ou modifier les tâches d'un autre compte.

---

## 🧩 Comment l'application est construite (vue d'ensemble)

Cette application est composée de **deux grandes parties** qui fonctionnent ensemble :

| Partie | Rôle | Où c'est situé |
|---|---|---|
| 🌐 **Interface web (frontend)** | Ce que l'utilisateur voit et utilise dans son navigateur | racine du projet + dossier `src/` |
| 🖥️ **Serveur (backend)** | Le "cerveau" caché qui gère les comptes et les tâches | dossier `backend/` |

L'interface web envoie des demandes au serveur (par exemple : « connecte-moi », « ajoute cette tâche », « supprime cette tâche »), et le serveur vérifie l'identité de l'utilisateur, va chercher ou enregistre les informations dans une base de données, puis répond à l'interface.

---

## 🛠️ Technologies utilisées

**Backend (serveur)**
- [Node.js](https://nodejs.org/) — environnement d'exécution JavaScript côté serveur
- [Express](https://expressjs.com/) — framework pour créer l'API (le service qui répond aux demandes de l'interface)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/) — base de données qui stocke les utilisateurs et les tâches
- [bcrypt](https://www.npmjs.com/package/bcryptjs) — pour chiffrer les mots de passe
- [JSON Web Token (JWT)](https://jwt.io/) — pour sécuriser la connexion des utilisateurs
- [express-validator](https://express-validator.github.io/) — pour valider les données envoyées par les formulaires (email valide, mot de passe assez long, etc.)

**Frontend (interface web)**
- [Vue.js](https://vuejs.org/) (v3) — framework pour construire l'interface web
- [Vue Router](https://router.vuejs.org/) — pour la navigation entre les pages (connexion, inscription, liste des tâches)
- [Pinia](https://pinia.vuejs.org/) — pour gérer l'état de connexion de l'utilisateur
- [Axios](https://axios-http.com/) — pour communiquer avec le serveur
- [Tailwind CSS](https://tailwindcss.com/) — pour la mise en forme visuelle
- [Vite](https://vite.dev/) — outil qui fait tourner et assemble l'application pendant le développement

---

## 🚀 Installation et démarrage (partie technique)

Cette section s'adresse aux personnes qui souhaitent faire fonctionner le projet sur leur propre ordinateur.

### Prérequis

- **[Node.js](https://nodejs.org/)** (avec npm)
- **[MongoDB](https://www.mongodb.com/try/download/community)** (en local ou via un service cloud comme [MongoDB Atlas](https://www.mongodb.com/atlas))

---

### 1️⃣ Démarrer le serveur (backend)

1. Ouvrez un terminal et déplacez-vous dans le dossier `backend` :
   ```bash
   cd backend
   ```

2. Installez les dépendances du projet :
   ```bash
   npm install
   ```

3. Un fichier `.env` est déjà présent avec une configuration de base :
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/app-crud
   JWT_SECRET=votre_cle_secrete
   ```
   Adaptez `MONGO_URI` si votre base de données MongoDB se trouve ailleurs, et remplacez `JWT_SECRET` par une valeur secrète de votre choix (à ne jamais partager publiquement).

4. Lancez le serveur :
   ```bash
   npm start
   ```
   ou, pour un redémarrage automatique à chaque modification du code :
   ```bash
   npm run dev
   ```
   Le serveur démarre sur `http://localhost:5000/` (ou le port indiqué dans `.env`).

---

### 2️⃣ Démarrer l'interface web (frontend)

1. Depuis la racine du projet (pas le dossier `backend`), installez les dépendances :
   ```bash
   npm install
   ```

2. Lancez l'application :
   ```bash
   npm run dev
   ```

3. Ouvrez votre navigateur à l'adresse indiquée dans le terminal, généralement :
   ```
   http://localhost:5173/
   ```

---

## ⚠️ À savoir avant de démarrer

Ce projet est fonctionnel mais encore en développement ; quelques points à garder en tête si vous l'explorez :

- Certains fichiers du backend (`routes/task.routes.js`) font référence à des fichiers (`models/Task.js`, `middleware/auth.js`) dont les noms ou emplacements réels diffèrent légèrement dans le projet (`models/Tasks.js`, `routes/auth.js`). Il faudra harmoniser ces chemins pour que la gestion des tâches fonctionne pleinement de bout en bout.
- La clé secrète utilisée pour sécuriser les connexions (JWT) est actuellement écrite en clair dans le code de certains fichiers plutôt que lue depuis le fichier `.env` ; il est recommandé de centraliser cette valeur dans `.env` avant toute mise en ligne réelle du projet.

---

## 📂 Structure du projet

```
website/
├── src/                      # Interface web (Vue.js)
│   ├── pages/
│   │   ├── Home.vue          # Page d'accueil
│   │   ├── Login.vue         # Page de connexion
│   │   ├── Register.vue      # Page d'inscription
│   │   └── TaskList.vue      # Liste des tâches de l'utilisateur connecté
│   ├── router/                # Définition des différentes pages/URLs de l'application
│   ├── store/                 # Gestion de l'état de connexion (Pinia)
│   └── App.vue                 # Composant racine de l'application
│
└── backend/                   # Serveur (API, base de données, logique métier)
    ├── controllers/            # Logique des fonctionnalités (authentification)
    ├── models/                 # Structure des données stockées (utilisateur, tâche)
    └── routes/                 # Les "chemins" (URLs) que l'interface web peut appeler
```

---

## 📄 Licence

Aucune licence n'a été spécifiée pour ce projet à ce jour.
