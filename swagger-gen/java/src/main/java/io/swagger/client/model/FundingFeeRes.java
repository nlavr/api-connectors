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
 * Get the last funding fee
 */
@ApiModel(description = "Get the last funding fee")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-10-16T11:45:28.109+08:00")
public class FundingFeeRes {
  @SerializedName("symbol")
  private String symbol = null;

  @SerializedName("side")
  private String side = null;

  @SerializedName("size")
  private BigDecimal size = null;

  @SerializedName("funding_rate")
  private String fundingRate = null;

  @SerializedName("exec_fee")
  private Double execFee = null;

  @SerializedName("exec_timestamp")
  private BigDecimal execTimestamp = null;

  public FundingFeeRes symbol(String symbol) {
    this.symbol = symbol;
    return this;
  }

   /**
   * Get symbol
   * @return symbol
  **/
  @ApiModelProperty(value = "")
  public String getSymbol() {
    return symbol;
  }

  public void setSymbol(String symbol) {
    this.symbol = symbol;
  }

  public FundingFeeRes side(String side) {
    this.side = side;
    return this;
  }

   /**
   * Get side
   * @return side
  **/
  @ApiModelProperty(value = "")
  public String getSide() {
    return side;
  }

  public void setSide(String side) {
    this.side = side;
  }

  public FundingFeeRes size(BigDecimal size) {
    this.size = size;
    return this;
  }

   /**
   * Get size
   * @return size
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getSize() {
    return size;
  }

  public void setSize(BigDecimal size) {
    this.size = size;
  }

  public FundingFeeRes fundingRate(String fundingRate) {
    this.fundingRate = fundingRate;
    return this;
  }

   /**
   * Get fundingRate
   * @return fundingRate
  **/
  @ApiModelProperty(value = "")
  public String getFundingRate() {
    return fundingRate;
  }

  public void setFundingRate(String fundingRate) {
    this.fundingRate = fundingRate;
  }

  public FundingFeeRes execFee(Double execFee) {
    this.execFee = execFee;
    return this;
  }

   /**
   * Get execFee
   * @return execFee
  **/
  @ApiModelProperty(value = "")
  public Double getExecFee() {
    return execFee;
  }

  public void setExecFee(Double execFee) {
    this.execFee = execFee;
  }

  public FundingFeeRes execTimestamp(BigDecimal execTimestamp) {
    this.execTimestamp = execTimestamp;
    return this;
  }

   /**
   * Get execTimestamp
   * @return execTimestamp
  **/
  @ApiModelProperty(value = "")
  public BigDecimal getExecTimestamp() {
    return execTimestamp;
  }

  public void setExecTimestamp(BigDecimal execTimestamp) {
    this.execTimestamp = execTimestamp;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FundingFeeRes fundingFeeRes = (FundingFeeRes) o;
    return Objects.equals(this.symbol, fundingFeeRes.symbol) &&
        Objects.equals(this.side, fundingFeeRes.side) &&
        Objects.equals(this.size, fundingFeeRes.size) &&
        Objects.equals(this.fundingRate, fundingFeeRes.fundingRate) &&
        Objects.equals(this.execFee, fundingFeeRes.execFee) &&
        Objects.equals(this.execTimestamp, fundingFeeRes.execTimestamp);
  }

  @Override
  public int hashCode() {
    return Objects.hash(symbol, side, size, fundingRate, execFee, execTimestamp);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FundingFeeRes {\n");
    
    sb.append("    symbol: ").append(toIndentedString(symbol)).append("\n");
    sb.append("    side: ").append(toIndentedString(side)).append("\n");
    sb.append("    size: ").append(toIndentedString(size)).append("\n");
    sb.append("    fundingRate: ").append(toIndentedString(fundingRate)).append("\n");
    sb.append("    execFee: ").append(toIndentedString(execFee)).append("\n");
    sb.append("    execTimestamp: ").append(toIndentedString(execTimestamp)).append("\n");
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

