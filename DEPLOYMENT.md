# Configuration du déploiement automatique

Ce projet utilise GitHub Actions pour déployer automatiquement le portfolio sur Infomaniak à chaque push sur la branche `main`.

## Configuration des secrets GitHub

Pour que le déploiement automatique fonctionne, vous devez configurer les secrets suivants dans votre dépôt GitHub :

### Étapes pour ajouter les secrets

1. Allez sur votre dépôt GitHub : https://github.com/mathieuyng/portfolio
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, allez dans **Secrets and variables** > **Actions**
4. Cliquez sur **New repository secret** pour chaque secret suivant :

### Secrets à configurer

| Nom du secret | Valeur | Description |
|---------------|--------|-------------|
| `FTP_SERVER` | `mathieujeune.com` | Adresse du serveur FTP |
| `FTP_USERNAME` | `ju6wn_mathieujeune` | Nom d'utilisateur FTP |
| `FTP_PASSWORD` | `w2wWbi83of-3` | Mot de passe FTP |

### Vérification

Une fois les secrets configurés, chaque push sur la branche `main` déclenchera automatiquement le déploiement.

Vous pouvez suivre l'état du déploiement dans l'onglet **Actions** de votre dépôt GitHub.

## Fonctionnement

- **Déclenchement** : À chaque push sur la branche `main`
- **Action** : Déploiement automatique vers `mathieujeune.com` via FTP
- **Exclusions** : Les fichiers `.git`, `.DS_Store`, `.vscode/`, `.github/`, logs et `node_modules/` ne sont pas déployés

