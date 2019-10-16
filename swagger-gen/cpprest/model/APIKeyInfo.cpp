/**
 * Bybit API
 * ## REST API for the Bybit Exchange. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@bybit.com
 *
 * NOTE: This class is auto generated by the swagger code generator 2.4.8.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



#include "APIKeyInfo.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

APIKeyInfo::APIKeyInfo()
{
    m_Api_key = utility::conversions::to_string_t("");
    m_Api_keyIsSet = false;
    m_User_id = 0.0;
    m_User_idIsSet = false;
    m_IpsIsSet = false;
    m_Note = utility::conversions::to_string_t("");
    m_NoteIsSet = false;
    m_PermissionsIsSet = false;
    m_Created_at = utility::conversions::to_string_t("");
    m_Created_atIsSet = false;
    m_Read_only = false;
    m_Read_onlyIsSet = false;
}

APIKeyInfo::~APIKeyInfo()
{
}

void APIKeyInfo::validate()
{
    // TODO: implement validation
}

web::json::value APIKeyInfo::toJson() const
{
    web::json::value val = web::json::value::object();

    if(m_Api_keyIsSet)
    {
        val[utility::conversions::to_string_t("api_key")] = ModelBase::toJson(m_Api_key);
    }
    if(m_User_idIsSet)
    {
        val[utility::conversions::to_string_t("user_id")] = ModelBase::toJson(m_User_id);
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Ips )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        if(jsonArray.size() > 0)
        {
            val[utility::conversions::to_string_t("ips")] = web::json::value::array(jsonArray);
        }
    }
    if(m_NoteIsSet)
    {
        val[utility::conversions::to_string_t("note")] = ModelBase::toJson(m_Note);
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Permissions )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        if(jsonArray.size() > 0)
        {
            val[utility::conversions::to_string_t("permissions")] = web::json::value::array(jsonArray);
        }
    }
    if(m_Created_atIsSet)
    {
        val[utility::conversions::to_string_t("created_at")] = ModelBase::toJson(m_Created_at);
    }
    if(m_Read_onlyIsSet)
    {
        val[utility::conversions::to_string_t("read_only")] = ModelBase::toJson(m_Read_only);
    }

    return val;
}

void APIKeyInfo::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("api_key")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("api_key")];
        if(!fieldValue.is_null())
        {
            setApiKey(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("user_id")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("user_id")];
        if(!fieldValue.is_null())
        {
            setUserId(ModelBase::doubleFromJson(fieldValue));
        }
    }
    {
        m_Ips.clear();
        std::vector<web::json::value> jsonArray;
        if(val.has_field(utility::conversions::to_string_t("ips")))
        {
        for( auto& item : val[utility::conversions::to_string_t("ips")].as_array() )
        {
            m_Ips.push_back(ModelBase::stringFromJson(item));
        }
        }
    }
    if(val.has_field(utility::conversions::to_string_t("note")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("note")];
        if(!fieldValue.is_null())
        {
            setNote(ModelBase::stringFromJson(fieldValue));
        }
    }
    {
        m_Permissions.clear();
        std::vector<web::json::value> jsonArray;
        if(val.has_field(utility::conversions::to_string_t("permissions")))
        {
        for( auto& item : val[utility::conversions::to_string_t("permissions")].as_array() )
        {
            m_Permissions.push_back(ModelBase::stringFromJson(item));
        }
        }
    }
    if(val.has_field(utility::conversions::to_string_t("created_at")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("created_at")];
        if(!fieldValue.is_null())
        {
            setCreatedAt(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("read_only")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("read_only")];
        if(!fieldValue.is_null())
        {
            setReadOnly(ModelBase::boolFromJson(fieldValue));
        }
    }
}

void APIKeyInfo::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(m_Api_keyIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("api_key"), m_Api_key));
        
    }
    if(m_User_idIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("user_id"), m_User_id));
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Ips )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        
        if(jsonArray.size() > 0)
        {
            multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("ips"), web::json::value::array(jsonArray), utility::conversions::to_string_t("application/json")));
        }
    }
    if(m_NoteIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("note"), m_Note));
        
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Permissions )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        
        if(jsonArray.size() > 0)
        {
            multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("permissions"), web::json::value::array(jsonArray), utility::conversions::to_string_t("application/json")));
        }
    }
    if(m_Created_atIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("created_at"), m_Created_at));
        
    }
    if(m_Read_onlyIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("read_only"), m_Read_only));
    }
}

void APIKeyInfo::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(multipart->hasContent(utility::conversions::to_string_t("api_key")))
    {
        setApiKey(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("api_key"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("user_id")))
    {
        setUserId(ModelBase::doubleFromHttpContent(multipart->getContent(utility::conversions::to_string_t("user_id"))));
    }
    {
        m_Ips.clear();
        if(multipart->hasContent(utility::conversions::to_string_t("ips")))
        {

        web::json::value jsonArray = web::json::value::parse(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("ips"))));
        for( auto& item : jsonArray.as_array() )
        {
            m_Ips.push_back(ModelBase::stringFromJson(item));
        }
        }
    }
    if(multipart->hasContent(utility::conversions::to_string_t("note")))
    {
        setNote(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("note"))));
    }
    {
        m_Permissions.clear();
        if(multipart->hasContent(utility::conversions::to_string_t("permissions")))
        {

        web::json::value jsonArray = web::json::value::parse(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("permissions"))));
        for( auto& item : jsonArray.as_array() )
        {
            m_Permissions.push_back(ModelBase::stringFromJson(item));
        }
        }
    }
    if(multipart->hasContent(utility::conversions::to_string_t("created_at")))
    {
        setCreatedAt(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("created_at"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("read_only")))
    {
        setReadOnly(ModelBase::boolFromHttpContent(multipart->getContent(utility::conversions::to_string_t("read_only"))));
    }
}

utility::string_t APIKeyInfo::getApiKey() const
{
    return m_Api_key;
}


void APIKeyInfo::setApiKey(utility::string_t value)
{
    m_Api_key = value;
    m_Api_keyIsSet = true;
}
bool APIKeyInfo::apiKeyIsSet() const
{
    return m_Api_keyIsSet;
}

void APIKeyInfo::unsetApi_key()
{
    m_Api_keyIsSet = false;
}

double APIKeyInfo::getUserId() const
{
    return m_User_id;
}


void APIKeyInfo::setUserId(double value)
{
    m_User_id = value;
    m_User_idIsSet = true;
}
bool APIKeyInfo::userIdIsSet() const
{
    return m_User_idIsSet;
}

void APIKeyInfo::unsetUser_id()
{
    m_User_idIsSet = false;
}

std::vector<utility::string_t>& APIKeyInfo::getIps()
{
    return m_Ips;
}

void APIKeyInfo::setIps(std::vector<utility::string_t> value)
{
    m_Ips = value;
    m_IpsIsSet = true;
}
bool APIKeyInfo::ipsIsSet() const
{
    return m_IpsIsSet;
}

void APIKeyInfo::unsetIps()
{
    m_IpsIsSet = false;
}

utility::string_t APIKeyInfo::getNote() const
{
    return m_Note;
}


void APIKeyInfo::setNote(utility::string_t value)
{
    m_Note = value;
    m_NoteIsSet = true;
}
bool APIKeyInfo::noteIsSet() const
{
    return m_NoteIsSet;
}

void APIKeyInfo::unsetNote()
{
    m_NoteIsSet = false;
}

std::vector<utility::string_t>& APIKeyInfo::getPermissions()
{
    return m_Permissions;
}

void APIKeyInfo::setPermissions(std::vector<utility::string_t> value)
{
    m_Permissions = value;
    m_PermissionsIsSet = true;
}
bool APIKeyInfo::permissionsIsSet() const
{
    return m_PermissionsIsSet;
}

void APIKeyInfo::unsetPermissions()
{
    m_PermissionsIsSet = false;
}

utility::string_t APIKeyInfo::getCreatedAt() const
{
    return m_Created_at;
}


void APIKeyInfo::setCreatedAt(utility::string_t value)
{
    m_Created_at = value;
    m_Created_atIsSet = true;
}
bool APIKeyInfo::createdAtIsSet() const
{
    return m_Created_atIsSet;
}

void APIKeyInfo::unsetCreated_at()
{
    m_Created_atIsSet = false;
}

bool APIKeyInfo::isReadOnly() const
{
    return m_Read_only;
}


void APIKeyInfo::setReadOnly(bool value)
{
    m_Read_only = value;
    m_Read_onlyIsSet = true;
}
bool APIKeyInfo::readOnlyIsSet() const
{
    return m_Read_onlyIsSet;
}

void APIKeyInfo::unsetRead_only()
{
    m_Read_onlyIsSet = false;
}

}
}
}
}
