FROM node:14
#crear dirertorios y establece propiedad de usuario node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
#establece directorio de trabajo
WORKDIR /home/node/app
#Copia archivos config package.json y package-lock.json
COPY package*.json ./
#Establece el uso del usuario node
USER node
#Instala las dependencias usadas por la app
RUN npm install
#Copia el codigo fuentede la app con permisos de usuario node.
#Garantiza que los fuentes sean propietarios del usuario node.
COPY --chown=node:node . .
#Puerto expuesto en el contenedor
EXPOSE 8080
#Ejecución de la app
CMD [ "node", "src/index.js" ]