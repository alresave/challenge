package store

import (
	"database/sql"
	"fmt"
	"github.com/alresave/jobsity-challenge/auth-service/internal/model"
)

type Store struct {
	connStr string
}

func New(connStr string) *Store {
	return &Store{
		connStr: connStr,
	}
}
func (s *Store) connect() (*sql.DB, error) {
	conn, err := sql.Open("mysql", s.connStr)
	if err != nil {
		return nil, err
	}
	return conn, nil
}

func (s *Store) Authenticate(userName, password string) (*model.User, error) {
	conn, err := s.connect()
	if err != nil {
		return nil, err
	}
	defer conn.Close()

	res, err := conn.Query("SELECT id, username, email, password FROM users WHERE username = %s AND password = %s", userName, password)
	defer res.Close()
	if err != nil {
		return nil, err
	}

	if res.Next() {
		var user model.User
		err := res.Scan(&user.Id, user.UserName, user.Email, user.Password)
		if err != nil {
			return nil, err
		}
		return &user, nil
	} else {
		return nil, fmt.Errorf("could not authenticate user: %s", userName)
	}
}
