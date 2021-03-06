/*
 * Bybit API
 * ## REST API for the Bybit Exchange. Base URI: [https://api.bybit.com]  
 *
 * OpenAPI spec version: 0.2.10
 * Contact: support@bybit.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.api;

import io.swagger.client.ApiException;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ExecutionApi
 */
@Ignore
public class ExecutionApiTest {

    private final ExecutionApi api = new ExecutionApi();

    
    /**
     * Get user’s trade records.
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void executionGetTradesTest() throws ApiException {
        String orderId = null;
        String symbol = null;
        String startTime = null;
        String page = null;
        String limit = null;
        Object response = api.executionGetTrades(orderId, symbol, startTime, page, limit);

        // TODO: test validations
    }
    
    /**
     * Get user&#39;s closed profit and loss records
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void positionsClosePnlRecordsTest() throws ApiException {
        String symbol = null;
        Integer startTime = null;
        Integer endTime = null;
        String execType = null;
        Integer page = null;
        Integer limit = null;
        Object response = api.positionsClosePnlRecords(symbol, startTime, endTime, execType, page, limit);

        // TODO: test validations
    }
    
}
