# tp-microservices


This is a project that implements a microservice architecture using gRPC and REST with Node.js. 
The project includes an API Gateway component responsible for routing requests between different microservices.

# Project Structure

Here is a suggested structure for your project:
- api-gateway
  - apigateway.js
- grpc
  - statu.proto
- rest
  - server.js
- README.md


* api-gateway: Contains the API gateway code.
* grpc: Contains the protocol buffer file (statu.proto) for defining the gRPC service.
* rest: Contains the REST API server code.

Project Setup
To set up the project, follow these steps:

Clone the repository or download the project files.

Install the required dependencies by running the following command in the project root directory:


Ensure that you have Node.js installed on your machine.

Make sure you have the necessary gRPC and proto-loader dependencies installed:



npm install @grpc/grpc-js @grpc/proto-loader
gRPC API
Protocol Buffer Definition
The gRPC service definition is defined in the statu.proto file located in the grpc directory. Make sure to define the StatusService with the appropriate methods and request/response message types.

API Gateway (apigateway.js)
The apigateway.js file in the api-gateway directory serves as the entry point for the API gateway. It sets up a gRPC server and handles incoming requests from clients.

To start the API gateway server, run the following command:


node api-gateway/apigateway.js
The server binds to 127.0.0.1:30044 and starts accepting gRPC requests.

API Gateway Methods
The API gateway implements the following methods:

* getstatus: Retrieves the status based on the given request.
* getstatu: Retrieves the statu based on the given request.
* getmessage: Retrieves the message based on the given request.
* REST API
The REST API server is implemented separately from the gRPC API. 
It provides an HTTP-based interface to interact with the microservices.

REST Server (server.js)
The server.js file in the rest directory contains the code for the REST API server.

To start the REST API server, run the following command:


node rest/server.js
The server binds to http://localhost:3000 and starts accepting HTTP requests.

REST API Endpoints
The REST API server exposes the following endpoints:

* GET /status: Retrieves the status based on the provided query parameters.
* GET /statu: Retrieves the statu based on the provided query parameters.
* GET /message: Retrieves the message based on the provided query parameters.
Usage
To use the API gateway and interact with the microservices, you have two options:

Use gRPC: Set up a gRPC client and make requests to the API gateway using the defined gRPC methods and message types.
Use REST: Make HTTP requests to the REST API endpoints exposed by the REST server.
Choose the approach that best fits your requirements and development environment.

# microapp
