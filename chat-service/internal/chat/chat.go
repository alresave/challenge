package chat

import "github.com/gin-gonic/gin"

type Service interface {
	GetRooms(ctx *gin.Context)
	GetMessages(ctx *gin.Context)
	GetRoomUsers(ctx *gin.Context)
	GetChatTicket(ctx *gin.Context)
	HandleChat(ctx *gin.Context)
}
