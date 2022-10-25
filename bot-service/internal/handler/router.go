package handler

import (
	"github.com/gin-gonic/gin"
	"jobsity-challenge/bot-service/internal/bot"
)

func SetupRouter(service bot.Service) *gin.Engine {
	router := gin.New()
	router.Use(gin.Logger())
	router.Use(gin.Recovery())

	healthHandler := NewHealthHandler()
	router.GET("/health", healthHandler.Health)

	router.Group("/stock")
	{
		v1Group := router.Group("/stock/v1")
		{
			v1Group.GET("/", service.GetStockValue)

		}
	}
	return router
}
