package config

type Config struct {
	Secret     string `env:"SECRET"`
	ServiceUrl string `env:"AUTH_PORT,required"`
	MySqlUrl   string `env:"MYSQL_URL"`
}
