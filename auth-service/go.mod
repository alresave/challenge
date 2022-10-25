module github.com/alresave/jobsity-challenge/auth-service

go 1.19

replace jobsity-challenge/common => ../common

require jobsity-challenge/common v0.0.0-00010101000000-000000000000

require (
	github.com/go-sql-driver/mysql v1.6.0 // indirect
	golang.org/x/crypto v0.1.0 // indirect
)
