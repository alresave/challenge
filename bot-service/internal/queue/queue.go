package queue

import (
	"context"
	"encoding/json"
	amqp "github.com/rabbitmq/amqp091-go"
	"go.uber.org/zap"
	"jobsity-challenge/bot-service/internal/stock"
)

type Queue struct {
	url    string
	logger *zap.SugaredLogger
}

func New(url string, logger *zap.SugaredLogger) *Queue {
	return &Queue{
		url:    url,
		logger: logger,
	}
}

func (q *Queue) SendToQueue(ctx context.Context, msg stock.Response) error {
	conn, err := amqp.Dial(q.url)
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

	err = ch.ExchangeDeclare(
		"stock", // name
		"topic", // type
		true,    // durable
		false,   // auto-deleted
		false,   // internal
		false,   // no-wait
		nil,     // arguments
	)
	if err != nil {
		return err
	}

	chatQueue, err := ch.QueueDeclare(
		"stock", // name
		false,   // durable
		false,   // delete when unused
		false,   // exclusive
		false,   // no-wait
		nil,     // arguments
	)
	if err != nil {
		return err
	}

	err = ch.QueueBind(
		chatQueue.Name, // queue name
		"",             // routing key
		"stock",        // exchange
		false,
		nil,
	)
	if err != nil {
		return err
	}

	m, err := json.Marshal(msg)
	if err != nil {
		return err
	}

	message := amqp.Publishing{
		ContentType: "application/json",
		Body:        m,
	}
	q.logger.Info("Sending message to queue")
	return ch.PublishWithContext(ctx, "stock", "", false, false, message)
}
