package handler

import (
	"jobsity-challenge/common/service"
	"net/http"

	"github.com/gin-gonic/gin"
)

type HealthHandler interface {
	Health(c *gin.Context)
}

func NewHealthHandler() HealthHandler {
	return healthHandler{}
}

type healthHandler struct{}

func (handler healthHandler) Health(c *gin.Context) {
	service.SuccessResponse(c, gin.H{
		"status":  http.StatusOK,
		"message": "Working",
		"error":   false,
	})
}
