FROM node:4-alpine
MAINTAINER Thulana
RUN mkdir /var/www
RUN npm install mysql
EXPOSE 8080
ADD index.js /var/www/index.js
CMD ["node", "/var/www/index.js"]


#docker run -p 7777:8080 --link mysql-server:db --name node thulana/nodedev
#docker build -t thulana/nodedev .
