package token

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	"jobsity-challenge/common/user"
	"strconv"
)

type chatClaims struct {
	User  string
	Email string
	jwt.StandardClaims
}

type Token struct {
	secret string
}

func New(secret string) *Token {
	return &Token{secret: secret}
}

// GenerateToken Generates a _token_ based on the userInfo.
func (t *Token) GenerateToken(userInfo *user.Info) (string, error) {
	var sampleSecretKey = []byte(t.secret)

	claims := chatClaims{
		User:  userInfo.Name,
		Email: userInfo.Email,
		StandardClaims: jwt.StandardClaims{
			Audience:  "chat",
			ExpiresAt: 0,
			Id:        "123",
			IssuedAt:  0,
			Issuer:    "chat_service",
			NotBefore: 0,
			Subject:   "chat",
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenStr, err := token.SignedString(sampleSecretKey)
	if err != nil {
		fmt.Println(err)
		return "", err
	}
	return tokenStr, nil
}

// ParseToken Parses the _token_ and returns the inner userInfo.
func (t *Token) ParseToken(tokenStr string) (*user.Info, error) {
	claims := &chatClaims{}
	token, err := jwt.ParseWithClaims(tokenStr, claims, func(token *jwt.Token) (interface{}, error) {
		// Check signing method
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}

		// hmacSampleSecret is a []byte containing your secret, e.g. []byte("my_secret_key")
		return []byte(t.secret), nil
	})
	if err != nil {
		return nil, err
	}
	fmt.Println(token.Claims)
	fmt.Println(claims)
	id, err := strconv.ParseInt(claims.Id, 10, 64)
	if err != nil {
		return nil, err
	}

	return &user.Info{
		Id:    id,
		Name:  claims.User,
		Email: claims.Email,
	}, nil
}

func (t *Token) ParseFromContext(ctx *gin.Context) (*user.Info, error) {
	tokenStr := ctx.GetHeader("Authorization")
	if tokenStr == "" {
		return nil, fmt.Errorf("error parsing token: %s", "empty header")
	}
	user, err := t.ParseToken(tokenStr)
	if err != nil {
		return nil, fmt.Errorf("error parsing token: %s", err.Error())
	}
	return user, nil
}
