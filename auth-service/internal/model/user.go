package model

import "jobsity-challenge/common/user"

type User struct {
	Id       int
	UserName string
	Email    string
	Password string
}

func (u *User) ConvertToUserInfo() *user.Info {
	return &user.Info{
		Id:    u.Id,
		Name:  u.UserName,
		Email: u.Email,
	}
}
