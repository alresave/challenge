package store

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v9"
	"github.com/goccy/go-json"
	"go.uber.org/zap"
	"jobsity-challenge/chat-service/internal/config"
	"jobsity-challenge/common/service"
	"time"
)

type Conn struct {
	Logger *zap.SugaredLogger
	Db     *redis.Client
}

func NewConnection(cfg config.Config, logger *zap.SugaredLogger) *Conn {
	rdb := redis.NewClient(&redis.Options{
		Addr:     cfg.RedisUrl,
		Password: cfg.RedisPassword,
		DB:       cfg.RedisDb,
	})
	return &Conn{
		Logger: logger,
		Db:     rdb,
	}
}

func (c *Conn) AddMessage(message *service.ChatRequest) error {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	msg, _ := json.Marshal(message)
	cmd := c.Db.LPush(ctx, fmt.Sprintf("%s.messages", message.Room), string(msg))
	_, err := cmd.Result()
	if err != nil {
		return err
	}
	cmdl := c.Db.LLen(ctx, fmt.Sprintf("%s.messages", message.Room))
	length, err := cmdl.Result()
	if err != nil {
		c.Logger.Error(fmt.Errorf("error getting list length: %s", err.Error()))
	}
	if length > 50 {
		cmdt := c.Db.LTrim(ctx, fmt.Sprintf("%s.messages", message.Room), 1, 50)
		rs, err := cmdt.Result()
		if err != nil {
			c.Logger.Error(fmt.Errorf("error getting list length: %s", err.Error()))
		} else {
			c.Logger.Info(rs)
		}
	}
	return nil
}

func (c *Conn) GetMessages(room string) ([]service.ChatRequest, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	c.Logger.Infof("Getting messages from room %s", room)
	cmd := c.Db.LRange(ctx, fmt.Sprintf("%s.messages", room), 0, 50)
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

func (c *Conn) AddRoom(room string) error {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	cmd := c.Db.SAdd(ctx, "rooms", room)
	_, err := cmd.Result()
	return err
}

func (c *Conn) GetRooms() ([]string, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	cmd := c.Db.SMembers(ctx, "rooms")
	rooms, err := cmd.Result()
	if err != nil {
		return nil, err
	}

	return rooms, nil
}

func (c *Conn) GetRoomUsers(room string) ([]string, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	cmd := c.Db.SMembers(ctx, fmt.Sprintf("%s.users", room))
	users, err := cmd.Result()
	if err != nil {
		return nil, err
	}

	return users, nil
}

func (c *Conn) AddUserToRoom(user, room string) error {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	cmd := c.Db.SAdd(ctx, room, user)
	_, err := cmd.Result()
	return err
}

func (c *Conn) RemoveUserFromRoom(user, room string) error {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	cmd := c.Db.SRem(ctx, room, user)
	_, err := cmd.Result()
	return err
}

func (c *Conn) AddDefaultRooms() error {
	c.Logger.Info("adding default rooms")
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	cmd := c.Db.SAdd(ctx, "rooms", "General", "Flirt")
	_, err := cmd.Result()
	return err
}
