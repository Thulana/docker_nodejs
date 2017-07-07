FROM node:4-alpine
MAINTAINER Thulana
RUN mkdir /var/www
RUN npm install mysql
EXPOSE 8080
ADD index.js /var/www/index.js
CMD ["node", "/var/www/index.js"]

