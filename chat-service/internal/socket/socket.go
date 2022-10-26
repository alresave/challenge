package socket

import (
	"encoding/json"
	"fmt"
	"github.com/olahol/melody"
	"jobsity-challenge/common/service"
)

func New() *melody.Melody {
	m := melody.New()
	m.HandleConnect(func(s *melody.Session) {
		params := s.Request.URL.Query()
		req := service.ConnectRequest{
			UserName: params.Get("userName"),
			Room:     params.Get("room"),
		}
		s.Set("info", &req)
		msg := fmt.Sprintf("%s has joined the room", req.UserName)
		cReq := service.ChatRequest{
			UserName: req.Room,
			Room:     req.Room,
			Message:  msg,
		}
		cMsg, _ := json.Marshal(cReq)
		m.Broadcast(cMsg)
	})
	m.HandleDisconnect(func(s *melody.Session) {
		value, exists := s.Get("info")
		if !exists {
			return
		}

		req := value.(*service.ConnectRequest)
		msg := fmt.Sprintf("%s has left the room", req.UserName)
		cReq := service.ChatRequest{
			UserName: req.Room,
			Room:     req.Room,
			Message:  msg,
		}
		cMsg, _ := json.Marshal(cReq)
		m.BroadcastOthers(cMsg, s)
	})
	m.HandleMessage(func(s *melody.Session, msg []byte) {
		m.BroadcastFilter(msg, func(q *melody.Session) bool {
			req := service.ChatRequest{}
			json.Unmarshal(msg, &req)
			value, _ := s.Get("info")

			cReq := value.(*service.ConnectRequest)
			return cReq.Room == req.Room
		})
	})
	return m
}
