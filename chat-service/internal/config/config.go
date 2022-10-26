package config

type Config struct {
	JWTSecret     string `env:"SECRET,required"`
	ServiceUrl    string `env:"CHAT_PORT,required"`
	RabbitUrl     string `env:"RABBIT_URL,required"`
	RabbitQueue   string `env:"RABBIT_QUEUE,required"`
	RedisUrl      string `env:"REDIS_URL,required"`
	RedisPassword string `env:"REDIS_PASSWORD,required"`
	RedisDb       int    `env:"REDIS_DB,required"`
}
