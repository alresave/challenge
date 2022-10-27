package handler

import (
	"fmt"
	"github.com/alresave/jobsity-challenge/auth-service/internal/crypt"
	"github.com/alresave/jobsity-challenge/auth-service/internal/store"
	"github.com/gin-gonic/gin"
	"jobsity-challenge/common/service"
	"jobsity-challenge/common/token"
	"jobsity-challenge/common/user"
	"net/http"
)

const (
	UserAuthenticated = "User successfully authenticated"
	UserAdded         = "User successfully added"
	UserExists        = "Username already taken"
)

type Auth struct {
	str *store.Store
	tkn *token.Token
}

func New(store *store.Store, token *token.Token) *Auth {
	return &Auth{
		str: store,
		tkn: token,
	}
}

func (a *Auth) AuthenticateUser(ctx *gin.Context) {
	var u user.Login
	if err := ctx.ShouldBindJSON(&u); err != nil {
		service.HandleError(ctx, err)
		return
	}
	fmt.Println(u)
	info, err := a.str.AuthenticateUser(u.UserName, u.Password)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}

	t, err := a.tkn.GenerateToken(info)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}
	service.SuccessResponse(ctx, gin.H{
		"status":  http.StatusOK,
		"message": UserAuthenticated,
		"error":   false,
		"data":    t,
	})
}

func (a *Auth) AddUser(ctx *gin.Context) {
	var usr user.User
	if err := ctx.ShouldBindJSON(&usr); err != nil {
		service.HandleError(ctx, err)
		return
	}

	exists, err := a.str.UserExists(usr.UserName)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}
	if exists {
		service.HandleError(ctx, fmt.Errorf("user exists: %s", usr.UserName))
		return
	}

	pwd, err := crypt.HashPassword(usr.Password)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}

	usr.Password = pwd

	usr.Id, err = a.str.AddUser(&usr)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}

	service.SuccessResponse(ctx, gin.H{
		"status":  http.StatusOK,
		"message": UserAdded,
		"error":   false,
		"data":    usr.ConvertToUserInfo(),
	})

}

func (a *Auth) UserExists(ctx *gin.Context) {
	userName, ok := ctx.GetQuery("userName")
	if !ok {
		service.HandleError(ctx, &service.BadRequest{ErrMessage: "parameter not found"})
		return
	}

	exists, err := a.str.UserExists(userName)
	if err != nil {
		service.HandleError(ctx, err)
		return
	}
	message := "User does not exist"
	if exists {
		message = UserExists
	}
	service.SuccessResponse(ctx, gin.H{
		"status":  http.StatusOK,
		"message": message,
		"error":   false,
		"data":    exists,
	})
}
