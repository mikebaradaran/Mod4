# Status Service

A simple internal status service used for Jenkins pipeline training.

## Endpoints
GET /status

## Run locally
npm install
npm start

## Build with Docker
docker build -t status-service .
docker run -p 3000:3000 status-service
