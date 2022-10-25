package stock

import (
	"encoding/csv"
	"fmt"
	"net/http"
	"net/url"
	"strconv"
	"strings"
)

func CallService(stockCode string) (float64, error) {
	url, err := EncodeUrl(stockCode)
	if err != nil {
		return 0.0, fmt.Errorf("error encoding URL: %s", err.Error())
	}

	response, err := http.Get(url)
	if err != nil {
		return 0.0, fmt.Errorf("error getting stock data: %s", err.Error())
	}

	reader := csv.NewReader(response.Body)
	count := 0
	var row []string
	for {
		record, err := reader.Read()
		if err != nil {
			break
		}

		if count > 0 {
			row = record
			break
		}
		count += 1
	}
	return strconv.ParseFloat(row[6], 64)
}

func EncodeUrl(stockCode string) (string, error) {
	base, err := url.Parse("https://stooq.com/q/l/")

	if err != nil {
		return "", err
	}

	params := url.Values{}
	params.Add("s", strings.ToLower(stockCode))
	params.Add("f", "sd2t2ohlcv")
	params.Add("e", "csv")
	params.Add("h", "")
	base.RawQuery = params.Encode()
	fmt.Println(base.String())
	return base.String(), nil
}
