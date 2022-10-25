package token

import (
	"jobsity-challenge/common/user"
	"reflect"
	"testing"
)

const _token_ = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjoidXNlciIsIkVtYWlsIjoidXNlckB1c2VyLmNvbSIsImF1ZCI6ImNoYXQiLCJqdGkiOiIxMjMiLCJpc3MiOiJjaGF0X3NlcnZpY2UiLCJzdWIiOiJjaGF0In0.a4HBYolkPg_gkkatQKWLXinqJV8VH3UgmBkZyxWA5cE"

func TestToken_GenerateToken(t1 *testing.T) {
	tests := []struct {
		name     string
		userInfo user.Info
		wantErr  bool
		want     string
	}{
		{
			name: "Generate _token_ works",
			userInfo: user.Info{
				Id:    123,
				Name:  "user",
				Email: "user@user.com",
			},
			wantErr: false,
			want:    _token_,
		},
	}
	for _, tt := range tests {
		t1.Run(tt.name, func(t1 *testing.T) {
			t := New("this is a secret")
			got, err := t.GenerateToken(tt.userInfo)
			if (err != nil) != tt.wantErr {
				t1.Errorf("GenerateToken() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if got != tt.want {
				t1.Errorf("GenerateToken() got = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestToken_ParseToken(t1 *testing.T) {
	tests := []struct {
		name     string
		tokenStr string
		want     *user.Info
		wantErr  bool
	}{
		{
			name:     "Parse token returns correct userInfo",
			tokenStr: _token_,
			want: &user.Info{
				Id:    123,
				Name:  "user",
				Email: "user@user.com",
			},
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t1.Run(tt.name, func(t1 *testing.T) {
			t := New("this is a secret")
			got, err := t.ParseToken(tt.tokenStr)
			if (err != nil) != tt.wantErr {
				t1.Errorf("ParseToken() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t1.Errorf("ParseToken() got = %v, want %v", got, tt.want)
			}
		})
	}
}
