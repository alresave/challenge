package config

type Config struct {
	RabbitUrl      string `env:"RABBIT_URL,required"`
	RabbitExchange string `env:"RABBIT_EXCHANGE,required"`
	RabbitQueue    string `env:"RABBIT_QUEUE,required"`
	ServiceUrl     string `env:"STOCK_PORT,required"`
}
