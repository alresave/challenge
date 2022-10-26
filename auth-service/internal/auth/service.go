package auth

import "github.com/gin-gonic/gin"

type Service interface {
	AuthenticateUser(ctx *gin.Context)
	AddUser(ctx *gin.Context)
	UserExists(ctx *gin.Context)
}
