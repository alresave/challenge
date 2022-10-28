AUTH_SVR=auth-service
BOT_SVR=bot-service
CHAT_SVR=chat-service
.DEFAULT_GOAL := build
build: clean
	@echo "> Building..."
	@go build -o ./bin/${AUTH_SVR} ./${AUTH_SVR}/main.go
	@go build -o ./bin/${BOT_SVR} ./${BOT_SVR}/main.go
	@go build -o ./bin/${CHAT_SVR} ./${CHAT_SVR}/main.go
clean:
	@echo "> Cleaning previous builds"
	@$(RM) ./bin/${AUTH_SVR}
	@$(RM) ./bin/${BOT_SVR}
	@$(RM) ./bin/${CHAT_SVR}
containers:
	@echo "> running docker compose..."
	@docker compose -f ./docker/docker-compose.yml up -d
runAll:
	./bin/${AUTH_SVR} -d
	./bin/${BOT_SVR} -d
	./bin/${CHAT_SVR} -d