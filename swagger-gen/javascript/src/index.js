/**
 * Bybit API
 * ## REST API for the Bybit Exchange. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@bybit.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/APIKeyBase', 'model/APIKeyInfo', 'model/ConditionalBase', 'model/ConditionalOrdersRes', 'model/ConditionalOrdersResBase', 'model/ConditionalRes', 'model/ExtFields', 'model/FundRecordBase', 'model/FundingFeeBase', 'model/FundingFeeRes', 'model/FundingPredicted', 'model/FundingPredictedBase', 'model/FundingRate', 'model/FundingRateBase', 'model/FundingRecords', 'model/KlineBase', 'model/KlineRes', 'model/Leverage', 'model/LeverageInfo', 'model/LeverageResult', 'model/LotSizeFilter', 'model/OderBookRes', 'model/OrderBookBase', 'model/OrderCancelBase', 'model/OrderListBase', 'model/OrderListData', 'model/OrderRes', 'model/OrderResBase', 'model/Position', 'model/PositionInfo', 'model/PriceFilter', 'model/QueryOrderBase', 'model/QueryOrderRes', 'model/ReplaceConditionalBase', 'model/ReplaceOrderBase', 'model/ServerTime', 'model/SymbolInfo', 'model/SymbolInfoBase', 'model/SymbolTickInfo', 'model/Symbols', 'model/TradeRecords', 'model/TradeRecordsBase', 'model/TradeRecordsInfo', 'model/TradingStopBase', 'model/TradingStopRes', 'model/WithdrawRecords', 'model/WithdrawResBase', 'api/APIkeyApi', 'api/CommonApi', 'api/ConditionalApi', 'api/ExecutionApi', 'api/FundingApi', 'api/KlineApi', 'api/MarketApi', 'api/OrderApi', 'api/PositionsApi', 'api/SymbolApi', 'api/WalletApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/APIKeyBase'), require('./model/APIKeyInfo'), require('./model/ConditionalBase'), require('./model/ConditionalOrdersRes'), require('./model/ConditionalOrdersResBase'), require('./model/ConditionalRes'), require('./model/ExtFields'), require('./model/FundRecordBase'), require('./model/FundingFeeBase'), require('./model/FundingFeeRes'), require('./model/FundingPredicted'), require('./model/FundingPredictedBase'), require('./model/FundingRate'), require('./model/FundingRateBase'), require('./model/FundingRecords'), require('./model/KlineBase'), require('./model/KlineRes'), require('./model/Leverage'), require('./model/LeverageInfo'), require('./model/LeverageResult'), require('./model/LotSizeFilter'), require('./model/OderBookRes'), require('./model/OrderBookBase'), require('./model/OrderCancelBase'), require('./model/OrderListBase'), require('./model/OrderListData'), require('./model/OrderRes'), require('./model/OrderResBase'), require('./model/Position'), require('./model/PositionInfo'), require('./model/PriceFilter'), require('./model/QueryOrderBase'), require('./model/QueryOrderRes'), require('./model/ReplaceConditionalBase'), require('./model/ReplaceOrderBase'), require('./model/ServerTime'), require('./model/SymbolInfo'), require('./model/SymbolInfoBase'), require('./model/SymbolTickInfo'), require('./model/Symbols'), require('./model/TradeRecords'), require('./model/TradeRecordsBase'), require('./model/TradeRecordsInfo'), require('./model/TradingStopBase'), require('./model/TradingStopRes'), require('./model/WithdrawRecords'), require('./model/WithdrawResBase'), require('./api/APIkeyApi'), require('./api/CommonApi'), require('./api/ConditionalApi'), require('./api/ExecutionApi'), require('./api/FundingApi'), require('./api/KlineApi'), require('./api/MarketApi'), require('./api/OrderApi'), require('./api/PositionsApi'), require('./api/SymbolApi'), require('./api/WalletApi'));
  }
}(function(ApiClient, APIKeyBase, APIKeyInfo, ConditionalBase, ConditionalOrdersRes, ConditionalOrdersResBase, ConditionalRes, ExtFields, FundRecordBase, FundingFeeBase, FundingFeeRes, FundingPredicted, FundingPredictedBase, FundingRate, FundingRateBase, FundingRecords, KlineBase, KlineRes, Leverage, LeverageInfo, LeverageResult, LotSizeFilter, OderBookRes, OrderBookBase, OrderCancelBase, OrderListBase, OrderListData, OrderRes, OrderResBase, Position, PositionInfo, PriceFilter, QueryOrderBase, QueryOrderRes, ReplaceConditionalBase, ReplaceOrderBase, ServerTime, SymbolInfo, SymbolInfoBase, SymbolTickInfo, Symbols, TradeRecords, TradeRecordsBase, TradeRecordsInfo, TradingStopBase, TradingStopRes, WithdrawRecords, WithdrawResBase, APIkeyApi, CommonApi, ConditionalApi, ExecutionApi, FundingApi, KlineApi, MarketApi, OrderApi, PositionsApi, SymbolApi, WalletApi) {
  'use strict';

  /**
   * _REST_API_for_the_Bybit_Exchange_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var BybitApi = require('index'); // See note below*.
   * var xxxSvc = new BybitApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new BybitApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new BybitApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new BybitApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The APIKeyBase model constructor.
     * @property {module:model/APIKeyBase}
     */
    APIKeyBase: APIKeyBase,
    /**
     * The APIKeyInfo model constructor.
     * @property {module:model/APIKeyInfo}
     */
    APIKeyInfo: APIKeyInfo,
    /**
     * The ConditionalBase model constructor.
     * @property {module:model/ConditionalBase}
     */
    ConditionalBase: ConditionalBase,
    /**
     * The ConditionalOrdersRes model constructor.
     * @property {module:model/ConditionalOrdersRes}
     */
    ConditionalOrdersRes: ConditionalOrdersRes,
    /**
     * The ConditionalOrdersResBase model constructor.
     * @property {module:model/ConditionalOrdersResBase}
     */
    ConditionalOrdersResBase: ConditionalOrdersResBase,
    /**
     * The ConditionalRes model constructor.
     * @property {module:model/ConditionalRes}
     */
    ConditionalRes: ConditionalRes,
    /**
     * The ExtFields model constructor.
     * @property {module:model/ExtFields}
     */
    ExtFields: ExtFields,
    /**
     * The FundRecordBase model constructor.
     * @property {module:model/FundRecordBase}
     */
    FundRecordBase: FundRecordBase,
    /**
     * The FundingFeeBase model constructor.
     * @property {module:model/FundingFeeBase}
     */
    FundingFeeBase: FundingFeeBase,
    /**
     * The FundingFeeRes model constructor.
     * @property {module:model/FundingFeeRes}
     */
    FundingFeeRes: FundingFeeRes,
    /**
     * The FundingPredicted model constructor.
     * @property {module:model/FundingPredicted}
     */
    FundingPredicted: FundingPredicted,
    /**
     * The FundingPredictedBase model constructor.
     * @property {module:model/FundingPredictedBase}
     */
    FundingPredictedBase: FundingPredictedBase,
    /**
     * The FundingRate model constructor.
     * @property {module:model/FundingRate}
     */
    FundingRate: FundingRate,
    /**
     * The FundingRateBase model constructor.
     * @property {module:model/FundingRateBase}
     */
    FundingRateBase: FundingRateBase,
    /**
     * The FundingRecords model constructor.
     * @property {module:model/FundingRecords}
     */
    FundingRecords: FundingRecords,
    /**
     * The KlineBase model constructor.
     * @property {module:model/KlineBase}
     */
    KlineBase: KlineBase,
    /**
     * The KlineRes model constructor.
     * @property {module:model/KlineRes}
     */
    KlineRes: KlineRes,
    /**
     * The Leverage model constructor.
     * @property {module:model/Leverage}
     */
    Leverage: Leverage,
    /**
     * The LeverageInfo model constructor.
     * @property {module:model/LeverageInfo}
     */
    LeverageInfo: LeverageInfo,
    /**
     * The LeverageResult model constructor.
     * @property {module:model/LeverageResult}
     */
    LeverageResult: LeverageResult,
    /**
     * The LotSizeFilter model constructor.
     * @property {module:model/LotSizeFilter}
     */
    LotSizeFilter: LotSizeFilter,
    /**
     * The OderBookRes model constructor.
     * @property {module:model/OderBookRes}
     */
    OderBookRes: OderBookRes,
    /**
     * The OrderBookBase model constructor.
     * @property {module:model/OrderBookBase}
     */
    OrderBookBase: OrderBookBase,
    /**
     * The OrderCancelBase model constructor.
     * @property {module:model/OrderCancelBase}
     */
    OrderCancelBase: OrderCancelBase,
    /**
     * The OrderListBase model constructor.
     * @property {module:model/OrderListBase}
     */
    OrderListBase: OrderListBase,
    /**
     * The OrderListData model constructor.
     * @property {module:model/OrderListData}
     */
    OrderListData: OrderListData,
    /**
     * The OrderRes model constructor.
     * @property {module:model/OrderRes}
     */
    OrderRes: OrderRes,
    /**
     * The OrderResBase model constructor.
     * @property {module:model/OrderResBase}
     */
    OrderResBase: OrderResBase,
    /**
     * The Position model constructor.
     * @property {module:model/Position}
     */
    Position: Position,
    /**
     * The PositionInfo model constructor.
     * @property {module:model/PositionInfo}
     */
    PositionInfo: PositionInfo,
    /**
     * The PriceFilter model constructor.
     * @property {module:model/PriceFilter}
     */
    PriceFilter: PriceFilter,
    /**
     * The QueryOrderBase model constructor.
     * @property {module:model/QueryOrderBase}
     */
    QueryOrderBase: QueryOrderBase,
    /**
     * The QueryOrderRes model constructor.
     * @property {module:model/QueryOrderRes}
     */
    QueryOrderRes: QueryOrderRes,
    /**
     * The ReplaceConditionalBase model constructor.
     * @property {module:model/ReplaceConditionalBase}
     */
    ReplaceConditionalBase: ReplaceConditionalBase,
    /**
     * The ReplaceOrderBase model constructor.
     * @property {module:model/ReplaceOrderBase}
     */
    ReplaceOrderBase: ReplaceOrderBase,
    /**
     * The ServerTime model constructor.
     * @property {module:model/ServerTime}
     */
    ServerTime: ServerTime,
    /**
     * The SymbolInfo model constructor.
     * @property {module:model/SymbolInfo}
     */
    SymbolInfo: SymbolInfo,
    /**
     * The SymbolInfoBase model constructor.
     * @property {module:model/SymbolInfoBase}
     */
    SymbolInfoBase: SymbolInfoBase,
    /**
     * The SymbolTickInfo model constructor.
     * @property {module:model/SymbolTickInfo}
     */
    SymbolTickInfo: SymbolTickInfo,
    /**
     * The Symbols model constructor.
     * @property {module:model/Symbols}
     */
    Symbols: Symbols,
    /**
     * The TradeRecords model constructor.
     * @property {module:model/TradeRecords}
     */
    TradeRecords: TradeRecords,
    /**
     * The TradeRecordsBase model constructor.
     * @property {module:model/TradeRecordsBase}
     */
    TradeRecordsBase: TradeRecordsBase,
    /**
     * The TradeRecordsInfo model constructor.
     * @property {module:model/TradeRecordsInfo}
     */
    TradeRecordsInfo: TradeRecordsInfo,
    /**
     * The TradingStopBase model constructor.
     * @property {module:model/TradingStopBase}
     */
    TradingStopBase: TradingStopBase,
    /**
     * The TradingStopRes model constructor.
     * @property {module:model/TradingStopRes}
     */
    TradingStopRes: TradingStopRes,
    /**
     * The WithdrawRecords model constructor.
     * @property {module:model/WithdrawRecords}
     */
    WithdrawRecords: WithdrawRecords,
    /**
     * The WithdrawResBase model constructor.
     * @property {module:model/WithdrawResBase}
     */
    WithdrawResBase: WithdrawResBase,
    /**
     * The APIkeyApi service constructor.
     * @property {module:api/APIkeyApi}
     */
    APIkeyApi: APIkeyApi,
    /**
     * The CommonApi service constructor.
     * @property {module:api/CommonApi}
     */
    CommonApi: CommonApi,
    /**
     * The ConditionalApi service constructor.
     * @property {module:api/ConditionalApi}
     */
    ConditionalApi: ConditionalApi,
    /**
     * The ExecutionApi service constructor.
     * @property {module:api/ExecutionApi}
     */
    ExecutionApi: ExecutionApi,
    /**
     * The FundingApi service constructor.
     * @property {module:api/FundingApi}
     */
    FundingApi: FundingApi,
    /**
     * The KlineApi service constructor.
     * @property {module:api/KlineApi}
     */
    KlineApi: KlineApi,
    /**
     * The MarketApi service constructor.
     * @property {module:api/MarketApi}
     */
    MarketApi: MarketApi,
    /**
     * The OrderApi service constructor.
     * @property {module:api/OrderApi}
     */
    OrderApi: OrderApi,
    /**
     * The PositionsApi service constructor.
     * @property {module:api/PositionsApi}
     */
    PositionsApi: PositionsApi,
    /**
     * The SymbolApi service constructor.
     * @property {module:api/SymbolApi}
     */
    SymbolApi: SymbolApi,
    /**
     * The WalletApi service constructor.
     * @property {module:api/WalletApi}
     */
    WalletApi: WalletApi
  };

  return exports;
}));
