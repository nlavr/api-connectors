/**
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

import java.math.BigDecimal;
import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

/**
 * Query real-time active order information response
 **/
@ApiModel(description = "Query real-time active order information response")
public class QueryOrderRes {
  
  @SerializedName("order_id")
  private String orderId = null;
  @SerializedName("user_id")
  private BigDecimal userId = null;
  @SerializedName("symbol")
  private String symbol = null;
  @SerializedName("side")
  private String side = null;
  @SerializedName("order_type")
  private String orderType = null;
  @SerializedName("price")
  private Double price = null;
  @SerializedName("qty")
  private String qty = null;
  @SerializedName("time_in_force")
  private String timeInForce = null;
  @SerializedName("order_status")
  private String orderStatus = null;
  @SerializedName("ext_fields")
  private Object extFields = null;
  @SerializedName("leaves_qty")
  private BigDecimal leavesQty = null;
  @SerializedName("leaves_value")
  private BigDecimal leavesValue = null;
  @SerializedName("cum_exec_qty")
  private BigDecimal cumExecQty = null;
  @SerializedName("reject_reason")
  private String rejectReason = null;
  @SerializedName("order_link_id")
  private String orderLinkId = null;
  @SerializedName("created_at")
  private String createdAt = null;
  @SerializedName("updated_at")
  private String updatedAt = null;

  /**
   **/
  @ApiModelProperty(value = "")
  public String getOrderId() {
    return orderId;
  }
  public void setOrderId(String orderId) {
    this.orderId = orderId;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public BigDecimal getUserId() {
    return userId;
  }
  public void setUserId(BigDecimal userId) {
    this.userId = userId;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getSymbol() {
    return symbol;
  }
  public void setSymbol(String symbol) {
    this.symbol = symbol;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getSide() {
    return side;
  }
  public void setSide(String side) {
    this.side = side;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getOrderType() {
    return orderType;
  }
  public void setOrderType(String orderType) {
    this.orderType = orderType;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public Double getPrice() {
    return price;
  }
  public void setPrice(Double price) {
    this.price = price;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getQty() {
    return qty;
  }
  public void setQty(String qty) {
    this.qty = qty;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getTimeInForce() {
    return timeInForce;
  }
  public void setTimeInForce(String timeInForce) {
    this.timeInForce = timeInForce;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getOrderStatus() {
    return orderStatus;
  }
  public void setOrderStatus(String orderStatus) {
    this.orderStatus = orderStatus;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public Object getExtFields() {
    return extFields;
  }
  public void setExtFields(Object extFields) {
    this.extFields = extFields;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public BigDecimal getLeavesQty() {
    return leavesQty;
  }
  public void setLeavesQty(BigDecimal leavesQty) {
    this.leavesQty = leavesQty;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public BigDecimal getLeavesValue() {
    return leavesValue;
  }
  public void setLeavesValue(BigDecimal leavesValue) {
    this.leavesValue = leavesValue;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public BigDecimal getCumExecQty() {
    return cumExecQty;
  }
  public void setCumExecQty(BigDecimal cumExecQty) {
    this.cumExecQty = cumExecQty;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getRejectReason() {
    return rejectReason;
  }
  public void setRejectReason(String rejectReason) {
    this.rejectReason = rejectReason;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getOrderLinkId() {
    return orderLinkId;
  }
  public void setOrderLinkId(String orderLinkId) {
    this.orderLinkId = orderLinkId;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getCreatedAt() {
    return createdAt;
  }
  public void setCreatedAt(String createdAt) {
    this.createdAt = createdAt;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getUpdatedAt() {
    return updatedAt;
  }
  public void setUpdatedAt(String updatedAt) {
    this.updatedAt = updatedAt;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    QueryOrderRes queryOrderRes = (QueryOrderRes) o;
    return (this.orderId == null ? queryOrderRes.orderId == null : this.orderId.equals(queryOrderRes.orderId)) &&
        (this.userId == null ? queryOrderRes.userId == null : this.userId.equals(queryOrderRes.userId)) &&
        (this.symbol == null ? queryOrderRes.symbol == null : this.symbol.equals(queryOrderRes.symbol)) &&
        (this.side == null ? queryOrderRes.side == null : this.side.equals(queryOrderRes.side)) &&
        (this.orderType == null ? queryOrderRes.orderType == null : this.orderType.equals(queryOrderRes.orderType)) &&
        (this.price == null ? queryOrderRes.price == null : this.price.equals(queryOrderRes.price)) &&
        (this.qty == null ? queryOrderRes.qty == null : this.qty.equals(queryOrderRes.qty)) &&
        (this.timeInForce == null ? queryOrderRes.timeInForce == null : this.timeInForce.equals(queryOrderRes.timeInForce)) &&
        (this.orderStatus == null ? queryOrderRes.orderStatus == null : this.orderStatus.equals(queryOrderRes.orderStatus)) &&
        (this.extFields == null ? queryOrderRes.extFields == null : this.extFields.equals(queryOrderRes.extFields)) &&
        (this.leavesQty == null ? queryOrderRes.leavesQty == null : this.leavesQty.equals(queryOrderRes.leavesQty)) &&
        (this.leavesValue == null ? queryOrderRes.leavesValue == null : this.leavesValue.equals(queryOrderRes.leavesValue)) &&
        (this.cumExecQty == null ? queryOrderRes.cumExecQty == null : this.cumExecQty.equals(queryOrderRes.cumExecQty)) &&
        (this.rejectReason == null ? queryOrderRes.rejectReason == null : this.rejectReason.equals(queryOrderRes.rejectReason)) &&
        (this.orderLinkId == null ? queryOrderRes.orderLinkId == null : this.orderLinkId.equals(queryOrderRes.orderLinkId)) &&
        (this.createdAt == null ? queryOrderRes.createdAt == null : this.createdAt.equals(queryOrderRes.createdAt)) &&
        (this.updatedAt == null ? queryOrderRes.updatedAt == null : this.updatedAt.equals(queryOrderRes.updatedAt));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.orderId == null ? 0: this.orderId.hashCode());
    result = 31 * result + (this.userId == null ? 0: this.userId.hashCode());
    result = 31 * result + (this.symbol == null ? 0: this.symbol.hashCode());
    result = 31 * result + (this.side == null ? 0: this.side.hashCode());
    result = 31 * result + (this.orderType == null ? 0: this.orderType.hashCode());
    result = 31 * result + (this.price == null ? 0: this.price.hashCode());
    result = 31 * result + (this.qty == null ? 0: this.qty.hashCode());
    result = 31 * result + (this.timeInForce == null ? 0: this.timeInForce.hashCode());
    result = 31 * result + (this.orderStatus == null ? 0: this.orderStatus.hashCode());
    result = 31 * result + (this.extFields == null ? 0: this.extFields.hashCode());
    result = 31 * result + (this.leavesQty == null ? 0: this.leavesQty.hashCode());
    result = 31 * result + (this.leavesValue == null ? 0: this.leavesValue.hashCode());
    result = 31 * result + (this.cumExecQty == null ? 0: this.cumExecQty.hashCode());
    result = 31 * result + (this.rejectReason == null ? 0: this.rejectReason.hashCode());
    result = 31 * result + (this.orderLinkId == null ? 0: this.orderLinkId.hashCode());
    result = 31 * result + (this.createdAt == null ? 0: this.createdAt.hashCode());
    result = 31 * result + (this.updatedAt == null ? 0: this.updatedAt.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class QueryOrderRes {\n");
    
    sb.append("  orderId: ").append(orderId).append("\n");
    sb.append("  userId: ").append(userId).append("\n");
    sb.append("  symbol: ").append(symbol).append("\n");
    sb.append("  side: ").append(side).append("\n");
    sb.append("  orderType: ").append(orderType).append("\n");
    sb.append("  price: ").append(price).append("\n");
    sb.append("  qty: ").append(qty).append("\n");
    sb.append("  timeInForce: ").append(timeInForce).append("\n");
    sb.append("  orderStatus: ").append(orderStatus).append("\n");
    sb.append("  extFields: ").append(extFields).append("\n");
    sb.append("  leavesQty: ").append(leavesQty).append("\n");
    sb.append("  leavesValue: ").append(leavesValue).append("\n");
    sb.append("  cumExecQty: ").append(cumExecQty).append("\n");
    sb.append("  rejectReason: ").append(rejectReason).append("\n");
    sb.append("  orderLinkId: ").append(orderLinkId).append("\n");
    sb.append("  createdAt: ").append(createdAt).append("\n");
    sb.append("  updatedAt: ").append(updatedAt).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
