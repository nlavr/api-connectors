/**
 * Bybit API
 * ## REST API for the Bybit Exchange. Base URI: [https://api.bybit.com]  
 *
 * OpenAPI spec version: 0.2.10
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
    instance = new BybitApi.LinearRiskLimitResp();
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

  describe('LinearRiskLimitResp', function() {
    it('should create an instance of LinearRiskLimitResp', function() {
      // uncomment below and update the code to test LinearRiskLimitResp
      //var instance = new BybitApi.LinearRiskLimitResp();
      //expect(instance).to.be.a(BybitApi.LinearRiskLimitResp);
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new BybitApi.LinearRiskLimitResp();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new BybitApi.LinearRiskLimitResp();
      //expect(instance).to.be();
    });

    it('should have the property isLowestRisk (base name: "is_lowest_risk")', function() {
      // uncomment below and update the code to test the property isLowestRisk
      //var instance = new BybitApi.LinearRiskLimitResp();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instance = new BybitApi.LinearRiskLimitResp();
      //expect(instance).to.be();
    });

    it('should have the property maintainMargin (base name: "maintain_margin")', function() {
      // uncomment below and update the code to test the property maintainMargin
      //var instance = new BybitApi.LinearRiskLimitResp();
      //expect(instance).to.be();
    });

    it('should have the property section (base name: "section")', function() {
      // uncomment below and update the code to test the property section
      //var instance = new BybitApi.LinearRiskLimitResp();
      //expect(instance).to.be();
    });

    it('should have the property startingMargin (base name: "starting_margin")', function() {
      // uncomment below and update the code to test the property startingMargin
      //var instance = new BybitApi.LinearRiskLimitResp();
      //expect(instance).to.be();
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instance = new BybitApi.LinearRiskLimitResp();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new BybitApi.LinearRiskLimitResp();
      //expect(instance).to.be();
    });

  });

}));