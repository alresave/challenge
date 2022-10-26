package handler

import (
	"context"
	"github.com/gin-gonic/gin"
	"jobsity-challenge/bot-service/internal/queue"
	"jobsity-challenge/bot-service/internal/stock"
	"jobsity-challenge/common/service"
	"net/http"
	"time"
)

type Stock struct {
	queue *queue.Queue
}

func New(queue *queue.Queue) *Stock {
	return &Stock{
		queue: queue,
	}
}

func (s *Stock) GetStockValue(ctx *gin.Context) {
	var req service.StockRequest
	if err := ctx.ShouldBindJSON(&req); err != nil {
		service.HandleError(ctx, err)
		return
	}

	val, err := stock.CallService(req.StockCode)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}

	resp := service.StockResponse{
		StockCode: req.StockCode,
		Value:     val,
		Room:      req.Room,
	}

	c, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	err = s.queue.SendToQueue(c, resp)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}

	service.SuccessResponse(ctx, gin.H{
		"status":  http.StatusOK,
		"message": "sent",
		"error":   false,
		"data":    resp,
	})
}
