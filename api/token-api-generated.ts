/* tslint:disable */
/* eslint-disable */
/*
RIBBIT API v4

ValidiFI, an analytics and technology company, connects bank account and payment insights to help companies in a variety of industries provide more confident, trustworthy and transparent transactions. Our differentiated data, sourced directly from banks, payment processors, and financial platforms helps companies to ensure compliance, mitigate risk, combat fraud, and confidently validate bank account and ownership. For more information, visit ValidiFI.com.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { TokenCreateRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TokenApi - axios parameter creator
 * @export
 */
export const TokenApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Health Check
         * @summary Health Check
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkHealth: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v4/HealthCheck`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'text/plain';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: body,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v4/HealthCheck',
                httpMethod: 'GET'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * OAuth 2.0 Token
         * @summary OAuth 2.0 Token
         * @param {TokenCreateRequest} [tokenCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (tokenCreateRequest?: TokenCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v4/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: tokenCreateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v4/token',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(tokenCreateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TokenApi - functional programming interface
 * @export
 */
export const TokenApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TokenApiAxiosParamCreator(configuration)
    return {
        /**
         * Health Check
         * @summary Health Check
         * @param {TokenApiCheckHealthRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkHealth(requestParameters: TokenApiCheckHealthRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const body: any = requestParameters;
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkHealth(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * OAuth 2.0 Token
         * @summary OAuth 2.0 Token
         * @param {TokenApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: TokenApiCreateRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const tokenCreateRequest: TokenCreateRequest = {
                clientId: requestParameters.clientId,
                clientSecret: requestParameters.clientSecret
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(tokenCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TokenApi - factory interface
 * @export
 */
export const TokenApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TokenApiFp(configuration)
    return {
        /**
         * Health Check
         * @summary Health Check
         * @param {TokenApiCheckHealthRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkHealth(requestParameters: TokenApiCheckHealthRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.checkHealth(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * OAuth 2.0 Token
         * @summary OAuth 2.0 Token
         * @param {TokenApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: TokenApiCreateRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for checkHealth operation in TokenApi.
 * @export
 * @interface TokenApiCheckHealthRequest
 */
export type TokenApiCheckHealthRequest = any

/**
 * Request parameters for create operation in TokenApi.
 * @export
 * @interface TokenApiCreateRequest
 */
export type TokenApiCreateRequest = {
    
} & TokenCreateRequest

/**
 * TokenApiGenerated - object-oriented interface
 * @export
 * @class TokenApiGenerated
 * @extends {BaseAPI}
 */
export class TokenApiGenerated extends BaseAPI {
    /**
     * Health Check
     * @summary Health Check
     * @param {TokenApiCheckHealthRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiGenerated
     */
    public checkHealth(requestParameters: TokenApiCheckHealthRequest, options?: AxiosRequestConfig) {
        return TokenApiFp(this.configuration).checkHealth(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * OAuth 2.0 Token
     * @summary OAuth 2.0 Token
     * @param {TokenApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiGenerated
     */
    public create(requestParameters: TokenApiCreateRequest = {}, options?: AxiosRequestConfig) {
        return TokenApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
