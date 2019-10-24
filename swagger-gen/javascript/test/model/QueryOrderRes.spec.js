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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BybitApi);
  }
}(this, function(expect, BybitApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BybitApi.QueryOrderRes();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('QueryOrderRes', function() {
    it('should create an instance of QueryOrderRes', function() {
      // uncomment below and update the code to test QueryOrderRes
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be.a(BybitApi.QueryOrderRes);
    });

    it('should have the property orderId (base name: "order_id")', function() {
      // uncomment below and update the code to test the property orderId
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property side (base name: "side")', function() {
      // uncomment below and update the code to test the property side
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property orderType (base name: "order_type")', function() {
      // uncomment below and update the code to test the property orderType
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property qty (base name: "qty")', function() {
      // uncomment below and update the code to test the property qty
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property timeInForce (base name: "time_in_force")', function() {
      // uncomment below and update the code to test the property timeInForce
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property orderStatus (base name: "order_status")', function() {
      // uncomment below and update the code to test the property orderStatus
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property extFields (base name: "ext_fields")', function() {
      // uncomment below and update the code to test the property extFields
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property leavesQty (base name: "leaves_qty")', function() {
      // uncomment below and update the code to test the property leavesQty
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property leavesValue (base name: "leaves_value")', function() {
      // uncomment below and update the code to test the property leavesValue
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property cumExecQty (base name: "cum_exec_qty")', function() {
      // uncomment below and update the code to test the property cumExecQty
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property rejectReason (base name: "reject_reason")', function() {
      // uncomment below and update the code to test the property rejectReason
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property orderLinkId (base name: "order_link_id")', function() {
      // uncomment below and update the code to test the property orderLinkId
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new BybitApi.QueryOrderRes();
      //expect(instance).to.be();
    });

  });

}));
