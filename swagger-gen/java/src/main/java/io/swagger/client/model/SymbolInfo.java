/*
 * Bybit API
 * ## REST API for the Bybit Exchange. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@bybit.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;

/**
 * SymbolInfo
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-10-24T19:54:52.777+08:00")
public class SymbolInfo {
  @SerializedName("name")
  private String name = null;

  @SerializedName("base_currency")
  private String baseCurrency = null;

  @SerializedName("quote_currency")
  private String quoteCurrency = null;

  @SerializedName("price_scale")
  private BigDecimal priceScale = null;

  @SerializedName("price_filter")
  private Object priceFilter = null;

  @SerializedName("lot_size_filter")
  private Object lotSizeFilter = null;

  public SymbolInfo name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(value = "")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public SymbolInfo baseCurrency(String baseCurrency) {
    this.baseCurrency = baseCurrency;
    return this;
  }

   /**
   * Get baseCurrency
   * @return baseCurrency
  **/
  @ApiModelProperty(value = "")
  public String getBaseCurrency() {
    return baseCurrency;
  }

  public void setBaseCurrency(String baseCurrency) {
    this.baseCurrency = baseCurrency;
  }

  public SymbolInfo quoteCurrency(String quoteCurrency) {
    this.quoteCurrency = quoteCurrency;
    return this;
  }

   /**
   * Get quoteCurrency
   * @return quoteCurrency
  **/
  @ApiModelProperty(value = "")
  public String getQuoteCurrency() {
    return quoteCurrency;
  }

  public void setQuoteCurrency(String quoteCurrency) {
    this.quoteCurrency = quoteCurrency;
  }

  public SymbolInfo priceScale(BigDecimal priceScale) {
    this.priceScale = priceScale;
    return this;
  }

   /**
   * Get priceScale
   * @return priceScale
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getPriceScale() {
    return priceScale;
  }

  public void setPriceScale(BigDecimal priceScale) {
    this.priceScale = priceScale;
  }

  public SymbolInfo priceFilter(Object priceFilter) {
    this.priceFilter = priceFilter;
    return this;
  }

   /**
   * Get priceFilter
   * @return priceFilter
  **/
  @ApiModelProperty(value = "")
  public Object getPriceFilter() {
    return priceFilter;
  }

  public void setPriceFilter(Object priceFilter) {
    this.priceFilter = priceFilter;
  }

  public SymbolInfo lotSizeFilter(Object lotSizeFilter) {
    this.lotSizeFilter = lotSizeFilter;
    return this;
  }

   /**
   * Get lotSizeFilter
   * @return lotSizeFilter
  **/
  @ApiModelProperty(value = "")
  public Object getLotSizeFilter() {
    return lotSizeFilter;
  }

  public void setLotSizeFilter(Object lotSizeFilter) {
    this.lotSizeFilter = lotSizeFilter;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SymbolInfo symbolInfo = (SymbolInfo) o;
    return Objects.equals(this.name, symbolInfo.name) &&
        Objects.equals(this.baseCurrency, symbolInfo.baseCurrency) &&
        Objects.equals(this.quoteCurrency, symbolInfo.quoteCurrency) &&
        Objects.equals(this.priceScale, symbolInfo.priceScale) &&
        Objects.equals(this.priceFilter, symbolInfo.priceFilter) &&
        Objects.equals(this.lotSizeFilter, symbolInfo.lotSizeFilter);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, baseCurrency, quoteCurrency, priceScale, priceFilter, lotSizeFilter);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SymbolInfo {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    baseCurrency: ").append(toIndentedString(baseCurrency)).append("\n");
    sb.append("    quoteCurrency: ").append(toIndentedString(quoteCurrency)).append("\n");
    sb.append("    priceScale: ").append(toIndentedString(priceScale)).append("\n");
    sb.append("    priceFilter: ").append(toIndentedString(priceFilter)).append("\n");
    sb.append("    lotSizeFilter: ").append(toIndentedString(lotSizeFilter)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

