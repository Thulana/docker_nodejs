# docker_nodejs
Simple docker container for nodejs

A simple dockerfile template for nodejs. Includes simple example to connect with a mysql container and fetch data.

Run instruction

Create a another dockerfile for a mysql database.
Deploy the mysql container.
Build and Run this container linking mysql container

#docker build -t <image_name> .
#docker run -p 7777:8080 --link <mysql_container_name>:db --name <container_name> <image_name>
