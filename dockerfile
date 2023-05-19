FROM node:19.8.1-alpine
WORKDIR /carsales
COPY package*.json ./
COPY . /carsales
RUN npm install
EXPOSE 8888
CMD [ "node", "carsales.js" ]
