package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/olahol/melody"
	"go.uber.org/zap"
	"jobsity-challenge/chat-service/internal/store"
	"jobsity-challenge/common/service"
	"jobsity-challenge/common/token"
	"net/http"
)

type Chat struct {
	mel    *melody.Melody
	logger *zap.SugaredLogger
	conn   *store.Conn
	tkn    *token.Token
}

func New(mel *melody.Melody, conn *store.Conn, tkn *token.Token, logger *zap.SugaredLogger) *Chat {
	return &Chat{
		mel:    mel,
		conn:   conn,
		tkn:    tkn,
		logger: logger,
	}
}

func (ch *Chat) GetRooms(ctx *gin.Context) {
	_, err := ch.tkn.ParseFromContext(ctx)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}
	ch.logger.Info("Authorized")
	rooms, err := ch.conn.GetRooms()
	if err != nil {
		service.HandleError(ctx, err)
		return
	}
	service.SuccessResponse(ctx, gin.H{
		"status":  http.StatusOK,
		"message": "OK",
		"error":   false,
		"data":    rooms,
	})
}

func (ch *Chat) GetMessages(ctx *gin.Context) {
	_, err := ch.tkn.ParseFromContext(ctx)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}

	params := ctx.Request.URL.Query()
	room := params.Get("room")

	messages, err := ch.conn.GetMessages(room)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}

	service.SuccessResponse(ctx, gin.H{
		"status":  http.StatusOK,
		"message": "OK",
		"error":   false,
		"data":    messages,
	})
}

func (ch *Chat) GetRoomUsers(ctx *gin.Context) {
	_, err := ch.tkn.ParseFromContext(ctx)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}

	params := ctx.Request.URL.Query()
	room := params.Get("room")

	users, err := ch.conn.GetRoomUsers(room)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}
	service.SuccessResponse(ctx, gin.H{
		"status":  http.StatusOK,
		"message": "OK",
		"error":   false,
		"data":    users,
	})
}

func (ch *Chat) HandleChat(ctx *gin.Context) {
	_, err := ch.tkn.ParseFromContext(ctx)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}
	err = ch.mel.HandleRequest(ctx.Writer, ctx.Request)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}
}
