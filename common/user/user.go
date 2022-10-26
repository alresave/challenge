package user

type Info struct {
	Id    int64  `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

type User struct {
	Id       int64  `json:"id"`
	UserName string `json:"userName"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type Login struct {
	UserName string `json:"userName"`
	Password string `json:"password"`
}

func (u *User) ConvertToUserInfo() *Info {
	return &Info{
		Id:    u.Id,
		Name:  u.UserName,
		Email: u.Email,
	}
}
