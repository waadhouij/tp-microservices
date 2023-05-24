# tp-microservices


This is a project that implements a microservice architecture using gRPC and REST with Node.js. 
The project includes an API Gateway component responsible for routing requests between different microservices.

# Project Structure
The project structure consists of the following components:

apigateway.js: This file contains the implementation of the API Gateway, which handles incoming requests and forwards them to the appropriate microservices.

grpc: This directory contains the gRPC related files.

statu.proto: This file defines the protocol buffer messages and services used for gRPC communication.
Other microservices: This project likely includes other microservices that implement specific functionalities. 
The code for those microservices is not included in the provided code snippet.

# Dependencies
 The project has the following dependencies:

* @grpc/grpc-js: This package provides the gRPC module for Node.js.
- @grpc/proto-loader: This package is used to load the protocol buffer definitions.
Other dependencies: There may be additional dependencies required by the other microservices in the project.
 Those dependencies are not included in the provided code snippet.
 
# Running the API Gateway
To run the API Gateway, follow these steps:
npm install
node apigateway.js


# Install the project dependencies by running the following command in the project directory:



Start the API Gateway server by executing the following command:



node apigateway.js
The server will start running on port 30044 and you should see a message indicating that the server is running.
