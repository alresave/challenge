package store

import (
	"context"
	"database/sql"
	"fmt"
	"github.com/alresave/jobsity-challenge/auth-service/internal/crypt"
	_ "github.com/go-sql-driver/mysql"
	"go.uber.org/zap"
	"jobsity-challenge/common/user"
	"time"
)

func CreateSchema(connStr string, logger *zap.SugaredLogger) error {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	conn, err := sql.Open("mysql", connStr)
	if err != nil {
		return err
	}
	defer func(conn *sql.DB) {
		err := conn.Close()
		if err != nil {
			logger.Errorf("error closing connection with DB: %s", err.Error())
		}
	}(conn)

	sql := "CREATE TABLE IF NOT EXISTS users (id MEDIUMINT NOT NULL AUTO_INCREMENT, username VARCHAR(32), email VARCHAR(255),password VARCHAR (255),PRIMARY KEY (id))"

	_, err = conn.ExecContext(ctx, sql)
	if err != nil {
		return fmt.Errorf("error creating table: %s", err.Error())
	}

	return nil
}

type Store struct {
	connStr string
	logger  *zap.SugaredLogger
}

func New(connStr string, logger *zap.SugaredLogger) *Store {
	return &Store{
		connStr: connStr,
		logger:  logger,
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
	defer func(conn *sql.DB) {
		err := conn.Close()
		if err != nil {
			s.logger.Errorf("error closing connection with DB: %s", err.Error())
		}
	}(conn)

	res, err := conn.Query("SELECT id, username, email, password FROM users WHERE username = ?", userName)
	defer func(res *sql.Rows) {
		err := res.Close()
		if err != nil {
			s.logger.Errorf("error closing resultset: %s", err.Error())
		}
	}(res)
	if err != nil {
		return nil, err
	}

	if res.Next() {
		var u user.User
		err := res.Scan(&u.Id, &u.UserName, &u.Email, &u.Password)
		if err != nil {
			return nil, err
		}
		if crypt.ValidatePassword(u.Password, password) {
			return u.ConvertToUserInfo(), nil
		}
		return nil, fmt.Errorf("could not authenticate user: %s", userName)
	} else {
		return nil, fmt.Errorf("user not found: %s", userName)
	}
}

func (s *Store) AddUser(input *user.User) (int64, error) {
	conn, err := s.connect()
	if err != nil {
		return 0, err
	}
	defer func(conn *sql.DB) {
		err := conn.Close()
		if err != nil {
			s.logger.Errorf("error closing connection with DB: %s", err.Error())
		}
	}(conn)

	res, err := conn.Exec("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", input.UserName, input.Email, input.Password)
	if err != nil {
		return 0, err
	}

	id, err := res.LastInsertId()
	if err != nil {
		return 0, err
	}

	return id, nil
}

func (s *Store) UserExists(userName string) (bool, error) {
	conn, err := s.connect()
	if err != nil {
		return false, err
	}
	defer func(conn *sql.DB) {
		err := conn.Close()
		if err != nil {
			s.logger.Errorf("error closing connection with DB: %s", err.Error())
		}
	}(conn)

	res, err := conn.Query("SELECT id FROM users WHERE username = ?", userName)
	defer func(res *sql.Rows) {
		err := res.Close()
		if err != nil {
			s.logger.Errorf("error closing resultset: %s", err.Error())
		}
	}(res)
	if err != nil {
		return false, err
	}

	return res.Next(), nil
}
