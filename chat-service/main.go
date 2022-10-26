package main

import (
	"context"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/olahol/melody"
	"go.uber.org/zap"
	"jobsity-challenge/chat-service/internal/consumer"
	"jobsity-challenge/chat-service/internal/socket"
	"jobsity-challenge/chat-service/internal/store"
	"jobsity-challenge/common/service"
	"jobsity-challenge/common/token"
	"net/http"
	"os"
	"os/signal"
	"strconv"
	"syscall"
	"time"
)

const ServiceName = "chat-service"

func main() {
	logger := zap.NewExample().Sugar()
	defer func(logger *zap.SugaredLogger) {
		err := logger.Sync()
		if err != nil {

		}
	}(logger)

	if err := godotenv.Load("../.env"); err != nil {
		panic("Failed to load environment variables:" + err.Error())
	}
	url := os.Getenv("CHAT_PORT")
	listenAndServe(url, logger)
}

func listenAndServe(serverPort string, logger *zap.SugaredLogger) {
	rabbitUrl := os.Getenv("RABBIT_URL")
	q := os.Getenv("RABBIT_QUEUE")
	redisUrl := os.Getenv("REDIS_URL")
	redisPass := os.Getenv("REDIS_PASSWORD")
	redisDb, _ := strconv.Atoi(os.Getenv("REDIS_DB"))
	secret := os.Getenv("SECRET")
	ss := store.NewConnection(redisUrl, redisPass, redisDb, logger)
	m := socket.New(ss, logger)
	tkn := token.New(secret)
	router := configRouter(m, tkn, ss, logger)
	cons := consumer.New(rabbitUrl, q, m, logger)

	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()
	srv := &http.Server{
		Addr:    serverPort,
		Handler: router,
	}

	go func() {
		logger.Infof("Listening on address: %s", serverPort)
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			logger.Fatalf("listen: %s\n", err)
		}
	}()

	go func() {
		logger.Info("Listening queue")
		if err := cons.Consume(); err != nil {
			logger.Fatalf("listen queue: %s\n", err)
		}
	}()

	<-ctx.Done()

	// Restore default behavior on the interrupt signal and notify user of shutdown.
	stop()
	logger.Infof("Shutting down %s gracefully, press Ctrl+C again to force", ServiceName)

	// The context is used to inform the server it has 5 seconds to finish
	// the request it is currently handling
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := srv.Shutdown(ctx); err != nil {
		logger.Fatalf("Server forced to shutdown: %v", err)
	}

	logger.Info("Server exiting")
}

func configRouter(mel *melody.Melody, tkn *token.Token, ss *store.Conn, logger *zap.SugaredLogger) *gin.Engine {
	router := gin.New()
	router.Use(gin.Logger())
	router.Use(gin.Recovery())

	router.Group("/chat")
	{
		v1Group := router.Group("/chat/v1")
		{
			v1Group.GET("/messages", func(c *gin.Context) {
				_, err := tkn.ParseFromContext(c)
				if err != nil {
					service.HandleError(c, err)
					return
				}
				logger.Info("Authorized")
				messages, err := ss.GetMessages()
				if err != nil {
					service.HandleError(c, err)
					return
				}
				service.SuccessResponse(c, gin.H{
					"status":  http.StatusOK,
					"message": "OK",
					"error":   false,
					"data":    messages,
				})
			})
			v1Group.GET("/ws", func(c *gin.Context) {
				fmt.Println("here")
				_, err := tkn.ParseFromContext(c)
				if err != nil {
					service.HandleError(c, err)
					return
				}
				mel.HandleRequest(c.Writer, c.Request)
			})
		}
	}
	return router
}
