package socket

import (
	"encoding/json"
	"fmt"
	"github.com/olahol/melody"
	"go.uber.org/zap"
	"jobsity-challenge/chat-service/internal/store"
	"jobsity-challenge/common/service"
)

func New(conn *store.Conn, logger *zap.SugaredLogger) *melody.Melody {
	m := melody.New()
	m.HandleConnect(func(s *melody.Session) {
		params := s.Request.URL.Query()
		req := service.ConnectRequest{
			UserName: params.Get("userName"),
			Room:     params.Get("room"),
		}
		s.Set("info", &req)
		go func() {
			err := conn.AddUserToRoom(req.UserName, req.Room)
			if err != nil {
				logger.Error(fmt.Errorf("error adding user to room: %s", err.Error()))
			}
		}()
		msg := fmt.Sprintf("%s has joined the room", req.UserName)
		cReq := service.ChatRequest{
			UserName: req.Room,
			Room:     req.Room,
			Message:  msg,
		}
		cMsg, _ := json.Marshal(cReq)
		err := m.Broadcast(cMsg)
		if err != nil {
			logger.Error(fmt.Errorf("error broadcasting message: %s", err.Error()))
		}
	})
	m.HandleDisconnect(func(s *melody.Session) {
		value, exists := s.Get("info")
		if !exists {
			return
		}

		req := value.(*service.ConnectRequest)
		go func() {
			err := conn.RemoveUserFromRoom(req.UserName, req.Room)
			if err != nil {
				logger.Error(fmt.Errorf("error removing user from room: %s", err.Error()))
			}
		}()
		msg := fmt.Sprintf("%s has left the room", req.UserName)
		cReq := service.ChatRequest{
			UserName: req.Room,
			Room:     req.Room,
			Message:  msg,
		}
		cMsg, _ := json.Marshal(cReq)
		err := m.BroadcastOthers(cMsg, s)
		if err != nil {
			logger.Error(fmt.Errorf("error broadcasting message: %s", err.Error()))
		}
	})
	m.HandleMessage(func(s *melody.Session, msg []byte) {
		req := service.ChatRequest{}
		err := json.Unmarshal(msg, &req)
		if err != nil {
			logger.Error(fmt.Errorf("error binding json: %s", err.Error()))
		}
		logger.Info(req)
		if req.UserName != "/stock" {
			go func() {
				err := conn.AddMessage(&req)
				if err != nil {
					logger.Error(fmt.Errorf("error adding message: %s", err.Error()))
				}
			}()
		}
		err = m.BroadcastFilter(msg, func(q *melody.Session) bool {

			value, _ := s.Get("info")

			cReq := value.(*service.ConnectRequest)
			return cReq.Room == req.Room
		})
		if err != nil {
			logger.Error(fmt.Errorf("error setting message filter: %s", err.Error()))
		}
	})
	return m
}
