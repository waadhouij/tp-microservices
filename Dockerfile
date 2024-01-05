# Utilisez l'image Node.js 12 comme base
FROM node:12

# Définissez le répertoire de travail
WORKDIR /usr/src/app

# Copiez les fichiers de l'application
COPY package*.json ./


# Installez les dépendances
RUN npm install
COPY . .

# Exposez le port 3000
EXPOSE 3000

# Commande par défaut pour exécuter l'application
CMD [ "npm", "start" ]

