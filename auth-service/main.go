package main

import (
	"context"
	"github.com/alresave/jobsity-challenge/auth-service/internal/config"
	"github.com/alresave/jobsity-challenge/auth-service/internal/handler"
	"github.com/alresave/jobsity-challenge/auth-service/internal/store"
	"github.com/caarlos0/env/v6"
	"github.com/joho/godotenv"
	"go.uber.org/zap"
	"jobsity-challenge/common/token"
	"net/http"
	"os/signal"
	"syscall"
	"time"
)

const ServiceName = "auth-service"

func main() {
	logger := zap.NewExample().Sugar()
	defer func(logger *zap.SugaredLogger) {
		err := logger.Sync()
		if err != nil {

		}
	}(logger)

	listenAndServe(logger)
}

func listenAndServe(logger *zap.SugaredLogger) {

	if err := godotenv.Load("../.env"); err != nil {
		panic("Failed to load environment variables:" + err.Error())
	}
	cfg := config.Config{}
	if err := env.Parse(&cfg); err != nil {
		panic("could not load environment variables")
	}
	err := store.CreateSchema(cfg.MySqlUrl, logger)
	if err != nil {
		panic(err)
	}
	s := store.New(cfg.MySqlUrl, logger)
	t := token.New(cfg.Secret)
	hnd := handler.New(s, t)
	router := handler.SetupRouter(hnd, logger)

	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()
	srv := &http.Server{
		Addr:    cfg.ServiceUrl,
		Handler: router,
	}

	go func() {
		logger.Infof("Listening on address: %s", cfg.ServiceUrl)
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
