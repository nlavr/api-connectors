/*
 * Bybit API
 *
 * ## REST API for the Bybit Exchange. Base URI: [https://api.bybit.com]  
 *
 * API version: 0.2.10
 * Contact: support@bybit.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

// Get the orderbook response
type TradingRecordsInfo struct {
	Id int32 `json:"id,omitempty"`
	Symbol string `json:"symbol,omitempty"`
	Price float32 `json:"price,omitempty"`
	Qty float32 `json:"qty,omitempty"`
	Side string `json:"side,omitempty"`
	Time string `json:"time,omitempty"`
}
