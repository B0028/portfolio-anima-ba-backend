FROM node:24-alpine AS build

WORKDIR /app

# Copiamos los package.json para instalar las dependencias ADENTRO del contenedor
COPY package*.json ./
RUN npm ci

# Copiamos el resto del código
COPY --chown=node:node . .

EXPOSE 3000

# Usamos nodemon (si lo instalas) o node para arrancar en modo desarrollo
# Antes: CMD ["node", "server.js"]
CMD ["npm", "run", "dev"]


FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]