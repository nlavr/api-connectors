=begin
#Bybit API

### REST API for the Bybit Exchange. 

OpenAPI spec version: 1.0.0
Contact: support@bybit.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.8

=end

require 'uri'

module SwaggerClient
  class ConditionalApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Cancel conditional order.
    # @param stop_order_id Order ID of conditional order.
    # @param [Hash] opts the optional parameters
    # @return [Object]
    def conditional_cancel(stop_order_id, opts = {})
      data, _status_code, _headers = conditional_cancel_with_http_info(stop_order_id, opts)
      data
    end

    # Cancel conditional order.
    # @param stop_order_id Order ID of conditional order.
    # @param [Hash] opts the optional parameters
    # @return [Array<(Object, Fixnum, Hash)>] Object data, response status code and response headers
    def conditional_cancel_with_http_info(stop_order_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ConditionalApi.conditional_cancel ...'
      end
      # verify the required parameter 'stop_order_id' is set
      if @api_client.config.client_side_validation && stop_order_id.nil?
        fail ArgumentError, "Missing the required parameter 'stop_order_id' when calling ConditionalApi.conditional_cancel"
      end
      # resource path
      local_var_path = '/open-api/stop-order/cancel'

      # query parameters
      query_params = {}
      query_params[:'stop_order_id'] = stop_order_id

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json', 'application/x-www-form-urlencoded'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['apiKey', 'apiSignature', 'timestamp']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Object')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ConditionalApi#conditional_cancel\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Get my conditional order list.
    # @param [Hash] opts the optional parameters
    # @option opts [String] :stop_order_id Order ID of conditional order.
    # @option opts [String] :order_link_id Agency customized order ID.
    # @option opts [String] :symbol Contract type. Default BTCUSD.
    # @option opts [String] :order Sort orders by creation date
    # @option opts [Float] :page Page. Default getting first page data
    # @option opts [Float] :limit Limit for data size per page, max size is 50. Default as showing 20 pieces of data per page.
    # @return [Object]
    def conditional_get_orders(opts = {})
      data, _status_code, _headers = conditional_get_orders_with_http_info(opts)
      data
    end

    # Get my conditional order list.
    # @param [Hash] opts the optional parameters
    # @option opts [String] :stop_order_id Order ID of conditional order.
    # @option opts [String] :order_link_id Agency customized order ID.
    # @option opts [String] :symbol Contract type. Default BTCUSD.
    # @option opts [String] :order Sort orders by creation date
    # @option opts [Float] :page Page. Default getting first page data
    # @option opts [Float] :limit Limit for data size per page, max size is 50. Default as showing 20 pieces of data per page.
    # @return [Array<(Object, Fixnum, Hash)>] Object data, response status code and response headers
    def conditional_get_orders_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ConditionalApi.conditional_get_orders ...'
      end
      # resource path
      local_var_path = '/open-api/stop-order/list'

      # query parameters
      query_params = {}
      query_params[:'stop_order_id'] = opts[:'stop_order_id'] if !opts[:'stop_order_id'].nil?
      query_params[:'order_link_id'] = opts[:'order_link_id'] if !opts[:'order_link_id'].nil?
      query_params[:'symbol'] = opts[:'symbol'] if !opts[:'symbol'].nil?
      query_params[:'order'] = opts[:'order'] if !opts[:'order'].nil?
      query_params[:'page'] = opts[:'page'] if !opts[:'page'].nil?
      query_params[:'limit'] = opts[:'limit'] if !opts[:'limit'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json', 'application/x-www-form-urlencoded'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['apiKey', 'apiSignature', 'timestamp']
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Object')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ConditionalApi#conditional_get_orders\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Place a new conditional order.
    # @param side Side.
    # @param symbol Contract type.
    # @param order_type Conditional order type.
    # @param qty Order quantity.
    # @param price Execution price for conditional order
    # @param base_price Send current market price. It will be used to compare with the value of &#39;stop_px&#39;, to decide whether your conditional order will be triggered by crossing trigger price from upper side or lower side. Mainly used to identify the expected direction of the current conditional order..
    # @param stop_px Trigger price.
    # @param time_in_force Time in force.
    # @param [Hash] opts the optional parameters
    # @option opts [String] :trigger_by Trigger price type. Default LastPrice.
    # @option opts [BOOLEAN] :close_on_trigger close on trigger.
    # @option opts [String] :order_link_id Customized order ID, maximum length at 36 characters, and order ID under the same agency has to be unique..
    # @return [Object]
    def conditional_new(side, symbol, order_type, qty, price, base_price, stop_px, time_in_force, opts = {})
      data, _status_code, _headers = conditional_new_with_http_info(side, symbol, order_type, qty, price, base_price, stop_px, time_in_force, opts)
      data
    end

    # Place a new conditional order.
    # @param side Side.
    # @param symbol Contract type.
    # @param order_type Conditional order type.
    # @param qty Order quantity.
    # @param price Execution price for conditional order
    # @param base_price Send current market price. It will be used to compare with the value of &#39;stop_px&#39;, to decide whether your conditional order will be triggered by crossing trigger price from upper side or lower side. Mainly used to identify the expected direction of the current conditional order..
    # @param stop_px Trigger price.
    # @param time_in_force Time in force.
    # @param [Hash] opts the optional parameters
    # @option opts [String] :trigger_by Trigger price type. Default LastPrice.
    # @option opts [BOOLEAN] :close_on_trigger close on trigger.
    # @option opts [String] :order_link_id Customized order ID, maximum length at 36 characters, and order ID under the same agency has to be unique..
    # @return [Array<(Object, Fixnum, Hash)>] Object data, response status code and response headers
    def conditional_new_with_http_info(side, symbol, order_type, qty, price, base_price, stop_px, time_in_force, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ConditionalApi.conditional_new ...'
      end
      # verify the required parameter 'side' is set
      if @api_client.config.client_side_validation && side.nil?
        fail ArgumentError, "Missing the required parameter 'side' when calling ConditionalApi.conditional_new"
      end
      # verify the required parameter 'symbol' is set
      if @api_client.config.client_side_validation && symbol.nil?
        fail ArgumentError, "Missing the required parameter 'symbol' when calling ConditionalApi.conditional_new"
      end
      # verify the required parameter 'order_type' is set
      if @api_client.config.client_side_validation && order_type.nil?
        fail ArgumentError, "Missing the required parameter 'order_type' when calling ConditionalApi.conditional_new"
      end
      # verify the required parameter 'qty' is set
      if @api_client.config.client_side_validation && qty.nil?
        fail ArgumentError, "Missing the required parameter 'qty' when calling ConditionalApi.conditional_new"
      end
      # verify the required parameter 'price' is set
      if @api_client.config.client_side_validation && price.nil?
        fail ArgumentError, "Missing the required parameter 'price' when calling ConditionalApi.conditional_new"
      end
      # verify the required parameter 'base_price' is set
      if @api_client.config.client_side_validation && base_price.nil?
        fail ArgumentError, "Missing the required parameter 'base_price' when calling ConditionalApi.conditional_new"
      end
      # verify the required parameter 'stop_px' is set
      if @api_client.config.client_side_validation && stop_px.nil?
        fail ArgumentError, "Missing the required parameter 'stop_px' when calling ConditionalApi.conditional_new"
      end
      # verify the required parameter 'time_in_force' is set
      if @api_client.config.client_side_validation && time_in_force.nil?
        fail ArgumentError, "Missing the required parameter 'time_in_force' when calling ConditionalApi.conditional_new"
      end
      # resource path
      local_var_path = '/open-api/stop-order/create'

      # query parameters
      query_params = {}
      query_params[:'side'] = side
      query_params[:'symbol'] = symbol
      query_params[:'order_type'] = order_type
      query_params[:'qty'] = qty
      query_params[:'price'] = price
      query_params[:'base_price'] = base_price
      query_params[:'stop_px'] = stop_px
      query_params[:'time_in_force'] = time_in_force
      query_params[:'trigger_by'] = opts[:'trigger_by'] if !opts[:'trigger_by'].nil?
      query_params[:'close_on_trigger'] = opts[:'close_on_trigger'] if !opts[:'close_on_trigger'].nil?
      query_params[:'order_link_id'] = opts[:'order_link_id'] if !opts[:'order_link_id'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json', 'application/x-www-form-urlencoded'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['apiKey', 'apiSignature', 'timestamp']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Object')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ConditionalApi#conditional_new\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Replace conditional order. Only incomplete orders can be modified. 
    # @param order_id Order ID.
    # @param symbol Contract type.
    # @param [Hash] opts the optional parameters
    # @option opts [Float] :p_r_qty Order quantity.
    # @option opts [Float] :p_r_price Order price.
    # @option opts [Float] :p_r_trigger_price Trigger price.
    # @return [Object]
    def conditional_replace(order_id, symbol, opts = {})
      data, _status_code, _headers = conditional_replace_with_http_info(order_id, symbol, opts)
      data
    end

    # Replace conditional order. Only incomplete orders can be modified. 
    # @param order_id Order ID.
    # @param symbol Contract type.
    # @param [Hash] opts the optional parameters
    # @option opts [Float] :p_r_qty Order quantity.
    # @option opts [Float] :p_r_price Order price.
    # @option opts [Float] :p_r_trigger_price Trigger price.
    # @return [Array<(Object, Fixnum, Hash)>] Object data, response status code and response headers
    def conditional_replace_with_http_info(order_id, symbol, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ConditionalApi.conditional_replace ...'
      end
      # verify the required parameter 'order_id' is set
      if @api_client.config.client_side_validation && order_id.nil?
        fail ArgumentError, "Missing the required parameter 'order_id' when calling ConditionalApi.conditional_replace"
      end
      # verify the required parameter 'symbol' is set
      if @api_client.config.client_side_validation && symbol.nil?
        fail ArgumentError, "Missing the required parameter 'symbol' when calling ConditionalApi.conditional_replace"
      end
      # resource path
      local_var_path = '/open-api/stop-order/replace'

      # query parameters
      query_params = {}
      query_params[:'order_id'] = order_id
      query_params[:'symbol'] = symbol
      query_params[:'p_r_qty'] = opts[:'p_r_qty'] if !opts[:'p_r_qty'].nil?
      query_params[:'p_r_price'] = opts[:'p_r_price'] if !opts[:'p_r_price'].nil?
      query_params[:'p_r_trigger_price'] = opts[:'p_r_trigger_price'] if !opts[:'p_r_trigger_price'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json', 'application/x-www-form-urlencoded'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['apiKey', 'apiSignature', 'timestamp']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Object')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ConditionalApi#conditional_replace\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
