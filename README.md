# docker_nodejs
Simple docker container for nodejs

A simple dockerfile template for nodejs. Includes simple example to connect with a mysql container and fetch data.

Run instruction

- Create a another dockerfile for a mysql database.
- Deploy the mysql container.
- Build and Run this container linking mysql container
- change the database names, passwords and users according to ur need in index.js

#docker build -t <image_name> .

#docker run -p 7777:8080 --link <mysql_container_name>:db --name <container_name> <image_name>

Once both containers are deployed, http://localhost:7777 will show the database table names.
Cheers !!!!
