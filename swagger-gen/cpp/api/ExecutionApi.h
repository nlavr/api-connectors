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
 * ExecutionApi.h
 *
 * 
 */

#ifndef IO_SWAGGER_CLIENT_API_ExecutionApi_H_
#define IO_SWAGGER_CLIENT_API_ExecutionApi_H_


#include "../ApiClient.h"

#include "Object.h"
#include <cpprest/details/basic_types.h>

#include <boost/optional.hpp>

namespace io {
namespace swagger {
namespace client {
namespace api {

using namespace io::swagger::client::model;

class  ExecutionApi
{
public:
    ExecutionApi( std::shared_ptr<ApiClient> apiClient );
    virtual ~ExecutionApi();
    /// <summary>
    /// Get user’s trade records.
    /// </summary>
    /// <remarks>
    /// 
    /// </remarks>
    /// <param name="orderId">OrderID. If not provided, will return user’s trading records. (optional)</param>
    /// <param name="symbol">Contract type. If order_id not provided, symbol is required. (optional)</param>
    /// <param name="startTime">Start timestamp point for result. (optional)</param>
    /// <param name="page">Page. Default getting first page data. (optional)</param>
    /// <param name="limit">Limit for data size per page, max size is 50. Default as showing 20 pieces of data per page. (optional)</param>
    pplx::task<std::shared_ptr<Object>> execution_getTrades(
        boost::optional<utility::string_t> orderId,
        boost::optional<utility::string_t> symbol,
        boost::optional<utility::string_t> startTime,
        boost::optional<utility::string_t> page,
        boost::optional<utility::string_t> limit
    );

protected:
    std::shared_ptr<ApiClient> m_ApiClient;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_API_ExecutionApi_H_ */
