package queue

import (
	"context"
	"encoding/json"
	amqp "github.com/rabbitmq/amqp091-go"
	"go.uber.org/zap"
	"jobsity-challenge/common/service"
)

type Queue struct {
	url      string
	exchange string
	queue    string
	logger   *zap.SugaredLogger
}

func New(url, exchange, queue string, logger *zap.SugaredLogger) *Queue {
	return &Queue{
		url:      url,
		logger:   logger,
		exchange: exchange,
		queue:    queue,
	}
}

func (q *Queue) SendToQueue(ctx context.Context, msg service.StockResponse) error {
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
		q.exchange, // name
		"fanout",   // type
		true,       // durable
		false,      // auto-deleted
		false,      // internal
		false,      // no-wait
		nil,        // arguments
	)
	if err != nil {
		return err
	}

	_, err = ch.QueueDeclare(
		q.queue, // name
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
		q.queue,    // queue name
		"",         // routing key
		q.exchange, // exchange
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
	return ch.PublishWithContext(ctx, q.exchange, "", false, false, message)
}
