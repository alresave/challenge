

# chat app with multiple rooms

**auth-Service** Is in charge of the user management.

**bot-service** Handles the external service and adds the response to the queue.

**chat-service** Handles the web socket connection with the clients and handles bot messages from the queue.

## Building and testing

The makefile has four targets

- **make containers** to run the containers for databases and rabbitMQ

- **make build** to build the executables. The output path is ./bin.
- **make clean** to remove the executables.
- **make runAll** to run the services. Not recommended because it is needed to kill the processes manually. It is better to run each of the services on a terminal.

The configuration is done in the .env file. The frontend has the routes hardcoded, so it is important to not change the URLs of the services.

The frontend runs on the same url as the chat service http://localhost:6312/front/





