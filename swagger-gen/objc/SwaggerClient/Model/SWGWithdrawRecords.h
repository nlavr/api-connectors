#import <Foundation/Foundation.h>
#import "SWGObject.h"

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





@protocol SWGWithdrawRecords
@end

@interface SWGWithdrawRecords : SWGObject


@property(nonatomic) NSNumber* _id;

@property(nonatomic) NSNumber* userId;

@property(nonatomic) NSString* coin;

@property(nonatomic) NSString* status;

@property(nonatomic) NSString* amount;

@property(nonatomic) NSString* fee;

@property(nonatomic) NSString* address;

@property(nonatomic) NSString* txId;

@property(nonatomic) NSString* submitedAt;

@property(nonatomic) NSString* updatedAt;

@end
