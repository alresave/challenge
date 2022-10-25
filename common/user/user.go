package user

type Info struct {
	Id    int
	Name  string `json:"name"`
	Email string `json:"email"`
}
