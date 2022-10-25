package stock

type Response struct {
	StockCode string  `json:"stockCode"`
	Value     float64 `json:"value"`
}
