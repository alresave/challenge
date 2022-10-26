package store

import (
	"context"
	"github.com/go-redis/redis/v9"
	"github.com/goccy/go-json"
	"go.uber.org/zap"
	"jobsity-challenge/common/service"
	"time"
)

type Conn struct {
	Logger *zap.SugaredLogger
	Db     *redis.Client
}

func NewConnection(url string, password string, db int, logger *zap.SugaredLogger) *Conn {
	rdb := redis.NewClient(&redis.Options{
		Addr:     url,
		Password: password,
		DB:       db,
	})
	return &Conn{
		Logger: logger,
		Db:     rdb,
	}
}

func (c Conn) AddMessage(message *service.ChatRequest) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	msg, _ := json.Marshal(message)
	cmd := c.Db.LPush(ctx, "messages", string(msg))
	res, err := cmd.Result()
	c.Logger.Info(err)
	c.Logger.Info(res)
	cmdl := c.Db.LLen(ctx, "messages")
	res, err = cmdl.Result()
	if res > 50 {
		c.Db.LTrim(ctx, "messages", 1, 50)
	}
	c.Logger.Infof("added message %v", message)
}

func (c Conn) GetMessages() ([]service.ChatRequest, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	c.Logger.Info("Getting messages")
	cmd := c.Db.LRange(ctx, "messages", 0, 50)
	msgs, err := cmd.Result()
	if err != nil {
		return nil, err
	}
	res := make([]service.ChatRequest, 0)
	for _, v := range msgs {
		var req service.ChatRequest
		err = json.Unmarshal([]byte(v), &req)
		if err != nil {
			return nil, err
		}
		res = append(res, req)
	}
	return res, nil
}

func (c Conn) AddRoom(room string) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	cmd := c.Db.LPush(ctx, "rooms", room)
	res, err := cmd.Result()
	c.Logger.Info(err)
	c.Logger.Info(res)
}

func (c Conn) GetRooms() ([]string, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	cmd := c.Db.LRange(ctx, "messages", 0, 50)
	rooms, err := cmd.Result()
	if err != nil {
		return nil, err
	}

	return rooms, nil
}
