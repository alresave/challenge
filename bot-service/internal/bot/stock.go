package bot

import "github.com/gin-gonic/gin"

type Service interface {
	GetStockValue(ctx *gin.Context)
}
