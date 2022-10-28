package handler

import (
	"github.com/alresave/jobsity-challenge/auth-service/internal/auth"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"jobsity-challenge/common/middleware"
)

func SetupRouter(service auth.Service, logger *zap.SugaredLogger) *gin.Engine {
	router := gin.New()
	router.Use(gin.Logger())
	router.Use(gin.Recovery())
	router.Use(middleware.CORSMiddleware())

	healthHandler := NewHealthHandler()
	router.GET("/health", healthHandler.Health)

	router.Group("/auth")
	{
		v1Group := router.Group("/auth/v1")
		{
			v1Group.GET("/exists", service.UserExists)
			v1Group.PUT("/add_user", service.AddUser)
			v1Group.POST("/login", service.AuthenticateUser)

		}
	}
	return router
}
