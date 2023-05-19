FROM node:19.8.1-alpine
WORKDIR /server/CarSales
COPY ./CarSales/package.json /server/CarSales
COPY . /server
RUN npm install
EXPOSE 8888
CMD [ "node", "carsales.js" ]
