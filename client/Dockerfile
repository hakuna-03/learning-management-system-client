FROM node:16 as base


FROM base as development

WORKDIR /client
COPY package.json .
RUN npm i
COPY . . 
EXPOSE 8080
CMD ["npm", "run", "start:dev"]


FROM base as production

WORKDIR /client
COPY package.json . 
RUN npm i --only=production
COPY . .
EXPOSE 8080
CMD ["npm", "start"]