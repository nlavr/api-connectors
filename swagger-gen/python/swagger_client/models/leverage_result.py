# coding: utf-8

"""
    Bybit API

    ## REST API for the Bybit Exchange.   # noqa: E501

    OpenAPI spec version: 1.0.0
    Contact: support@bybit.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class LeverageResult(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'btcusd': 'object',
        'eosusd': 'object',
        'ethusd': 'object',
        'xrpusd': 'object'
    }

    attribute_map = {
        'btcusd': 'BTCUSD',
        'eosusd': 'EOSUSD',
        'ethusd': 'ETHUSD',
        'xrpusd': 'XRPUSD'
    }

    def __init__(self, btcusd=None, eosusd=None, ethusd=None, xrpusd=None):  # noqa: E501
        """LeverageResult - a model defined in Swagger"""  # noqa: E501

        self._btcusd = None
        self._eosusd = None
        self._ethusd = None
        self._xrpusd = None
        self.discriminator = None

        if btcusd is not None:
            self.btcusd = btcusd
        if eosusd is not None:
            self.eosusd = eosusd
        if ethusd is not None:
            self.ethusd = ethusd
        if xrpusd is not None:
            self.xrpusd = xrpusd

    @property
    def btcusd(self):
        """Gets the btcusd of this LeverageResult.  # noqa: E501


        :return: The btcusd of this LeverageResult.  # noqa: E501
        :rtype: object
        """
        return self._btcusd

    @btcusd.setter
    def btcusd(self, btcusd):
        """Sets the btcusd of this LeverageResult.


        :param btcusd: The btcusd of this LeverageResult.  # noqa: E501
        :type: object
        """

        self._btcusd = btcusd

    @property
    def eosusd(self):
        """Gets the eosusd of this LeverageResult.  # noqa: E501


        :return: The eosusd of this LeverageResult.  # noqa: E501
        :rtype: object
        """
        return self._eosusd

    @eosusd.setter
    def eosusd(self, eosusd):
        """Sets the eosusd of this LeverageResult.


        :param eosusd: The eosusd of this LeverageResult.  # noqa: E501
        :type: object
        """

        self._eosusd = eosusd

    @property
    def ethusd(self):
        """Gets the ethusd of this LeverageResult.  # noqa: E501


        :return: The ethusd of this LeverageResult.  # noqa: E501
        :rtype: object
        """
        return self._ethusd

    @ethusd.setter
    def ethusd(self, ethusd):
        """Sets the ethusd of this LeverageResult.


        :param ethusd: The ethusd of this LeverageResult.  # noqa: E501
        :type: object
        """

        self._ethusd = ethusd

    @property
    def xrpusd(self):
        """Gets the xrpusd of this LeverageResult.  # noqa: E501


        :return: The xrpusd of this LeverageResult.  # noqa: E501
        :rtype: object
        """
        return self._xrpusd

    @xrpusd.setter
    def xrpusd(self, xrpusd):
        """Sets the xrpusd of this LeverageResult.


        :param xrpusd: The xrpusd of this LeverageResult.  # noqa: E501
        :type: object
        """

        self._xrpusd = xrpusd

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(LeverageResult, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, LeverageResult):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other