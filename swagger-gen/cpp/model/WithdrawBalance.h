/**
 * Bybit API
 * ## REST API for the Bybit Exchange. Base URI: [https://api-testnet.bybit.com]  
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@bybit.com
 *
 * NOTE: This class is auto generated by the swagger code generator 2.4.8.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/*
 * WithdrawBalance.h
 *
 * Get wallet balance response
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_WithdrawBalance_H_
#define IO_SWAGGER_CLIENT_MODEL_WithdrawBalance_H_


#include "../ModelBase.h"


namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// Get wallet balance response
/// </summary>
class  WithdrawBalance
    : public ModelBase
{
public:
    WithdrawBalance();
    virtual ~WithdrawBalance();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// WithdrawBalance members

    /// <summary>
    /// 
    /// </summary>
    double getEquity() const;
    bool equityIsSet() const;
    void unsetEquity();
    void setEquity(double value);
    /// <summary>
    /// 
    /// </summary>
    double getAvailableBalance() const;
    bool availableBalanceIsSet() const;
    void unsetAvailable_balance();
    void setAvailableBalance(double value);
    /// <summary>
    /// 
    /// </summary>
    double getUsedMargin() const;
    bool usedMarginIsSet() const;
    void unsetUsed_margin();
    void setUsedMargin(double value);
    /// <summary>
    /// 
    /// </summary>
    double getOrderMargin() const;
    bool orderMarginIsSet() const;
    void unsetOrder_margin();
    void setOrderMargin(double value);
    /// <summary>
    /// 
    /// </summary>
    double getPositionMargin() const;
    bool positionMarginIsSet() const;
    void unsetPosition_margin();
    void setPositionMargin(double value);
    /// <summary>
    /// 
    /// </summary>
    double getOccClosingFee() const;
    bool occClosingFeeIsSet() const;
    void unsetOcc_closing_fee();
    void setOccClosingFee(double value);
    /// <summary>
    /// 
    /// </summary>
    double getOccFundingFee() const;
    bool occFundingFeeIsSet() const;
    void unsetOcc_funding_fee();
    void setOccFundingFee(double value);
    /// <summary>
    /// 
    /// </summary>
    double getWalletBalance() const;
    bool walletBalanceIsSet() const;
    void unsetWallet_balance();
    void setWalletBalance(double value);
    /// <summary>
    /// 
    /// </summary>
    double getRealisedPnl() const;
    bool realisedPnlIsSet() const;
    void unsetRealised_pnl();
    void setRealisedPnl(double value);
    /// <summary>
    /// 
    /// </summary>
    double getUnrealisedPnl() const;
    bool unrealisedPnlIsSet() const;
    void unsetUnrealised_pnl();
    void setUnrealisedPnl(double value);
    /// <summary>
    /// 
    /// </summary>
    double getCumRealisedPnl() const;
    bool cumRealisedPnlIsSet() const;
    void unsetCum_realised_pnl();
    void setCumRealisedPnl(double value);
    /// <summary>
    /// 
    /// </summary>
    double getGivenCash() const;
    bool givenCashIsSet() const;
    void unsetGiven_cash();
    void setGivenCash(double value);
    /// <summary>
    /// 
    /// </summary>
    double getServiceCash() const;
    bool serviceCashIsSet() const;
    void unsetService_cash();
    void setServiceCash(double value);

protected:
    double m_Equity;
    bool m_EquityIsSet;
    double m_Available_balance;
    bool m_Available_balanceIsSet;
    double m_Used_margin;
    bool m_Used_marginIsSet;
    double m_Order_margin;
    bool m_Order_marginIsSet;
    double m_Position_margin;
    bool m_Position_marginIsSet;
    double m_Occ_closing_fee;
    bool m_Occ_closing_feeIsSet;
    double m_Occ_funding_fee;
    bool m_Occ_funding_feeIsSet;
    double m_Wallet_balance;
    bool m_Wallet_balanceIsSet;
    double m_Realised_pnl;
    bool m_Realised_pnlIsSet;
    double m_Unrealised_pnl;
    bool m_Unrealised_pnlIsSet;
    double m_Cum_realised_pnl;
    bool m_Cum_realised_pnlIsSet;
    double m_Given_cash;
    bool m_Given_cashIsSet;
    double m_Service_cash;
    bool m_Service_cashIsSet;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_WithdrawBalance_H_ */