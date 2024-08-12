# react2graphql_docker
An example React TS app example connecting to the graphql_node example.

# DEPENDENCY
- This Depends on graphql running on http://localhost:4000. 
- https://github.com/keelyb/graphql_node/tree/main
- Test running with: http://localhost:4000/graphql:
~~~
  query GetServices {
   authors {
    id
    name
    books {
      id
      title
      pages
    }
    audiobooks {
      id
      title
      durationMinutes
    }
    videos {
      id
      title
      durationMinutes
    }
  }
}
~~~
  
  
  

# SETUP

~~~

~~~

# RUN

- LOCAL 

~~~
yarn start

yarn install

yarn build

~~~
    http://localhost:3000

- DOCKER 
~~~
docker build -t docker-react-image:1.0 .

docker run -d -p 3020:80 --name docker-react-container docker-react-image:1.0
~~~
    http://localhost:3020


# EXAMPLES

![image](https://github.com/user-attachments/assets/2dcf1546-ba35-44cc-bd4c-c8871559c615)

