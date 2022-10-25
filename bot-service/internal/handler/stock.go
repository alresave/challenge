package handler

import (
	"context"
	"fmt"
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
	stockCode, ok := ctx.GetQuery("stockCode")
	fmt.Println(stockCode)
	if !ok {
		service.HandleError(ctx, &service.BadRequest{ErrMessage: "parameter not found"})
		return
	}

	val, err := stock.CallService(stockCode)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}

	resp := stock.Response{
		StockCode: stockCode,
		Value:     val,
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
