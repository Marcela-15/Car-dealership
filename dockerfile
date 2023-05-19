FROM node:19.8.1-alpine
TRABAJO /server
COPY package*.json ./
COPY . /server
RUN npm install
EXPOSE 8888
CMD [ "node", "carsales.js" ]
