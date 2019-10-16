=begin
#Bybit API

### REST API for the Bybit Exchange. 

OpenAPI spec version: 1.0.0
Contact: support@bybit.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.8

=end

# Common files
require 'swagger_client/api_client'
require 'swagger_client/api_error'
require 'swagger_client/version'
require 'swagger_client/configuration'

# Models
require 'swagger_client/models/api_key_base'
require 'swagger_client/models/api_key_info'
require 'swagger_client/models/conditional_base'
require 'swagger_client/models/conditional_orders_res'
require 'swagger_client/models/conditional_orders_res_base'
require 'swagger_client/models/conditional_res'
require 'swagger_client/models/fund_record_base'
require 'swagger_client/models/funding_fee_base'
require 'swagger_client/models/funding_fee_res'
require 'swagger_client/models/funding_predicted'
require 'swagger_client/models/funding_predicted_base'
require 'swagger_client/models/funding_rate'
require 'swagger_client/models/funding_rate_base'
require 'swagger_client/models/funding_records'
require 'swagger_client/models/kline_base'
require 'swagger_client/models/kline_res'
require 'swagger_client/models/leverage'
require 'swagger_client/models/leverage_info'
require 'swagger_client/models/leverage_result'
require 'swagger_client/models/lot_size_filter'
require 'swagger_client/models/oder_book_res'
require 'swagger_client/models/order_book_base'
require 'swagger_client/models/order_cancel_base'
require 'swagger_client/models/order_list_base'
require 'swagger_client/models/order_list_data'
require 'swagger_client/models/order_res'
require 'swagger_client/models/order_res_base'
require 'swagger_client/models/position'
require 'swagger_client/models/position_info'
require 'swagger_client/models/price_filter'
require 'swagger_client/models/replace_conditional_base'
require 'swagger_client/models/replace_order_base'
require 'swagger_client/models/server_time'
require 'swagger_client/models/symbol_info'
require 'swagger_client/models/symbol_info_base'
require 'swagger_client/models/symbol_tick_info'
require 'swagger_client/models/symbols'
require 'swagger_client/models/trade_records'
require 'swagger_client/models/trade_records_base'
require 'swagger_client/models/trade_records_info'
require 'swagger_client/models/trading_stop_base'
require 'swagger_client/models/trading_stop_res'
require 'swagger_client/models/withdraw_records'
require 'swagger_client/models/withdraw_res_base'

# APIs
require 'swagger_client/api/ap_ikey_api'
require 'swagger_client/api/common_api'
require 'swagger_client/api/conditional_api'
require 'swagger_client/api/execution_api'
require 'swagger_client/api/funding_api'
require 'swagger_client/api/kline_api'
require 'swagger_client/api/market_api'
require 'swagger_client/api/order_api'
require 'swagger_client/api/positions_api'
require 'swagger_client/api/symbol_api'
require 'swagger_client/api/wallet_api'

module SwaggerClient
  class << self
    # Customize default settings for the SDK using block.
    #   SwaggerClient.configure do |config|
    #     config.username = "xxx"
    #     config.password = "xxx"
    #   end
    # If no block given, return the default Configuration object.
    def configure
      if block_given?
        yield(Configuration.default)
      else
        Configuration.default
      end
    end
  end
end
