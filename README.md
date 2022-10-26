# jobsity-challenge

## Components

**auth-Service** Is in charge of the user management.
**bot-service** Handles the external service and adds the response to the queue.
**chat-service** It handles the web socket connection with the clients and handles messages from the queue.

## Building and testing

I included a docker_compose file to run the databases and rabbitMQ.
I had not time to add a makefile.

