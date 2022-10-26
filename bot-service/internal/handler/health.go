package handler

import (
	"github.com/gin-gonic/gin"
	"jobsity-challenge/common/service"
	"net/http"
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
