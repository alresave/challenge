package service

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type StockResponse struct {
	StockCode string  `json:"stockCode"`
	Value     float64 `json:"value"`
	Room      string  `json:"room"`
	DateTime  int64   `json:"dateTime"`
}

func SuccessResponse(c *gin.Context, data interface{}) {
	c.JSON(200, data)
}

func HandleError(c *gin.Context, err error) {
	switch e := err.(type) {
	case *InternalServer:
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":   true,
			"status":  http.StatusInternalServerError,
			"message": e.ErrMessage,
		})
		return
	case *BadRequest:
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   true,
			"status":  http.StatusBadRequest,
			"message": e.ErrMessage,
		})
		return
	case *NotFound:
		c.JSON(http.StatusNotFound, gin.H{
			"error":   true,
			"status":  http.StatusNotFound,
			"message": e.ErrMessage,
		})
		return
	case *UnAuthorized:
		c.JSON(http.StatusUnauthorized, gin.H{
			"error":   true,
			"status":  http.StatusUnauthorized,
			"message": e.ErrMessage,
		})
		return
	default:
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":   true,
			"status":  http.StatusInternalServerError,
			"message": e.Error(),
		})
		return
	}
}
