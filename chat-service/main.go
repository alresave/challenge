package main

import (
	"context"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/olahol/melody"
	"go.uber.org/zap"
	"jobsity-challenge/chat-service/internal/consumer"
	"jobsity-challenge/chat-service/internal/socket"
	"net/http"
	"os"
	"os/signal"
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
	m := socket.New()

	router := configRouter(m)
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

func configRouter(mel *melody.Melody) *gin.Engine {
	router := gin.New()
	router.Use(gin.Logger())
	router.Use(gin.Recovery())

	router.Group("/chat")
	{
		v1Group := router.Group("/chat/v1")
		{
			v1Group.GET("/ws", func(c *gin.Context) {
				mel.HandleRequest(c.Writer, c.Request)
			})
		}
	}
	return router
}
