FROM node:18-alpine

WORKDIR /app

RUN npm install -g nodemon

RUN npm install -g ts-node

COPY . .

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]
