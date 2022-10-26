package main

import (
	"context"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"go.uber.org/zap"
	"jobsity-challenge/bot-service/internal/handler"
	"jobsity-challenge/bot-service/internal/queue"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

const ServiceName = "stock-service"

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
	rabbitUrl := os.Getenv("RABBIT_URL")
	port := os.Getenv("STOCK_PORT")
	e := os.Getenv("RABBIT_EXCHANGE")
	q := os.Getenv("RABBIT_QUEUE")

	theQueue := queue.New(rabbitUrl, e, q, logger)

	stockHandler := handler.New(theQueue)

	router := handler.SetupRouter(stockHandler)

	listenAndServe(router, port, logger)
}

func listenAndServe(router *gin.Engine, serverPort string, logger *zap.SugaredLogger) {
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
