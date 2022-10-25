package store

import (
	"database/sql"
	"fmt"
	"jobsity-challenge/common/user"
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

func (s *Store) AuthenticateUser(userName, password string) (*user.Info, error) {
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
		var user user.User
		err := res.Scan(&user.Id, user.UserName, user.Email, user.Password)
		if err != nil {
			return nil, err
		}
		return user.ConvertToUserInfo(), nil
	} else {
		return nil, fmt.Errorf("could not authenticate user: %s", userName)
	}
}

func (s *Store) AddUser(input user.User) error {
	return nil
}
