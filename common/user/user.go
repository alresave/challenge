package user

type Info struct {
	Id    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

type User struct {
	Id       int    `json:"id"`
	UserName string `json:"userName"`
	Email    string `json:"email"`
	Password string `json:"password"`
}
