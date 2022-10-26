package crypt

import "golang.org/x/crypto/bcrypt"

func HashPassword(password string) (string, error) {
	pwd := []byte(password)
	hashed, err := bcrypt.GenerateFromPassword(pwd, bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}
	return string(hashed), nil
}

func ValidatePassword(hashed, password string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hashed), []byte(password))
	return err == nil
}
