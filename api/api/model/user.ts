/**
 * api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UserCompany } from './user-company';
import { UserAddress } from './user-address';


export interface User { 
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    address?: UserAddress;
    phone?: string;
    website?: string;
    company?: UserCompany;
}
