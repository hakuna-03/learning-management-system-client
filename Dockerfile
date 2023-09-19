FROM node:16 as base

FROM base as development
WORKDIR /client
COPY package.json .
RUN npm i
COPY . . 
EXPOSE 3000
CMD ["npm", "run", "start"]


FROM base as production
WORKDIR /client
COPY package.json . 
RUN npm i --only=production
COPY . .
EXPOSE 3000
CMD ["npm","run","build"]