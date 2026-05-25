FROM node:20-alpine

WORKDIR /app

# Copiamos los package.json para instalar las dependencias ADENTRO del contenedor
COPY package*.json ./
RUN npm install

# Copiamos el resto del código
COPY . .

EXPOSE 5000

# Usamos nodemon (si lo instalas) o node para arrancar en modo desarrollo
# Antes: CMD ["node", "server.js"]
CMD ["npm", "run", "dev"]