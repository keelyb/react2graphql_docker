# react2graphql_docker
An example React TS app example connecting to the graphql_node example.


- LOCAL 

Yarn start

http://localhost:3000

- DOCKER 
docker build -t docker-react-image:1.0 .

docker run -d -p 3020:80 --name docker-react-container docker-react-image:1.0

http://localhost:3020

