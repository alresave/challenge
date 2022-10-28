package consumer

import (
	"encoding/json"
	"fmt"
	"github.com/olahol/melody"
	amqp "github.com/rabbitmq/amqp091-go"
	"go.uber.org/zap"
	"jobsity-challenge/common/service"
	"log"
	"time"
)

type Consumer struct {
	url    string
	queue  string
	melody *melody.Melody
	logger *zap.SugaredLogger
}

func New(url, queue string, melody *melody.Melody, logger *zap.SugaredLogger) *Consumer {
	return &Consumer{
		url:    url,
		queue:  queue,
		melody: melody,
		logger: logger,
	}
}

func (c *Consumer) Consume() error {
	conn, err := amqp.Dial(c.url)
	if err != nil {
		return err
	}

	defer func(conn *amqp.Connection) {
		err := conn.Close()
		if err != nil {

		}
	}(conn)

	ch, err := conn.Channel()
	if err != nil {
		return err
	}

	defer func(ch *amqp.Channel) {
		err := ch.Close()
		if err != nil {
			c.logger.Error("error closing channel")
		}
	}(ch)

	chatQueue, err := ch.QueueDeclare(
		c.queue, // name
		false,   // durable
		false,   // delete when unused
		false,   // exclusive
		false,   // no-wait
		nil,     // arguments
	)
	if err != nil {
		return err
	}

	msgs, err := ch.Consume(
		chatQueue.Name, // queue
		"",             // consumer
		true,           // auto-ack
		false,          // exclusive
		false,          // no-local
		false,          // no-wait
		nil,            // args
	)
	if err != nil {
		return err
	}

	var forever chan struct{}

	go func() {
		for d := range msgs {
			resp := service.StockResponse{}
			err := json.Unmarshal(d.Body, &resp)
			if err != nil {
				c.logger.Error(err)
			}

			c.logger.Info(resp)

			m := fmt.Sprintf("%s quote is $%.2f per share", resp.StockCode, resp.Value)
			req := service.ChatRequest{
				UserName: "/stock",
				Room:     resp.Room,
				Message:  m,
				DateTime: time.Now().Unix(),
			}
			cMsg, _ := json.Marshal(req)
			err = c.melody.Broadcast(cMsg)
			if err != nil {
				c.logger.Error(fmt.Errorf("error bradcasting: %s", err.Error()))
			}
		}
	}()

	log.Printf(" [*] Waiting for messages. To exit press CTRL+C")
	<-forever
	return nil
}
