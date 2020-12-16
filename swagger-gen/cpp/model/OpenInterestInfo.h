/**
 * Bybit API
 * ## REST API for the Bybit Exchange. Base URI: [https://api.bybit.com]  
 *
 * OpenAPI spec version: 0.2.10
 * Contact: support@bybit.com
 *
 * NOTE: This class is auto generated by the swagger code generator 2.4.8.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/*
 * OpenInterestInfo.h
 *
 * 
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_OpenInterestInfo_H_
#define IO_SWAGGER_CLIENT_MODEL_OpenInterestInfo_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  OpenInterestInfo
    : public ModelBase
{
public:
    OpenInterestInfo();
    virtual ~OpenInterestInfo();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// OpenInterestInfo members

    /// <summary>
    /// 
    /// </summary>
    int32_t getOpenInterest() const;
    bool openInterestIsSet() const;
    void unsetOpen_interest();
    void setOpenInterest(int32_t value);
    /// <summary>
    /// 
    /// </summary>
    int32_t getTimestamp() const;
    bool timestampIsSet() const;
    void unsetTimestamp();
    void setTimestamp(int32_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getSymbol() const;
    bool symbolIsSet() const;
    void unsetSymbol();
    void setSymbol(utility::string_t value);

protected:
    int32_t m_Open_interest;
    bool m_Open_interestIsSet;
    int32_t m_Timestamp;
    bool m_TimestampIsSet;
    utility::string_t m_Symbol;
    bool m_SymbolIsSet;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_OpenInterestInfo_H_ */