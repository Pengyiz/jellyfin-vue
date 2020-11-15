/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CollectionCreationResult } from '../models';
/**
 * CollectionApi - axios parameter creator
 * @export
 */
export const CollectionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Adds items to a collection.
         * @param {string} collectionId The collection id.
         * @param {string} ids Item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addToCollection: async (collectionId: string, ids: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'collectionId' is not null or undefined
            if (collectionId === null || collectionId === undefined) {
                throw new RequiredError('collectionId','Required parameter collectionId was null or undefined when calling addToCollection.');
            }
            // verify required parameter 'ids' is not null or undefined
            if (ids === null || ids === undefined) {
                throw new RequiredError('ids','Required parameter ids was null or undefined when calling addToCollection.');
            }
            const localVarPath = `/Collections/{collectionId}/Items`
                .replace(`{${"collectionId"}}`, encodeURIComponent(String(collectionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates a new collection.
         * @param {string} [name] The name of the collection.
         * @param {string} [ids] Item Ids to add to the collection.
         * @param {string} [parentId] Optional. Create the collection within a specific folder.
         * @param {boolean} [isLocked] Whether or not to lock the new collection.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCollection: async (name?: string, ids?: string, parentId?: string, isLocked?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Collections`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }

            if (parentId !== undefined) {
                localVarQueryParameter['parentId'] = parentId;
            }

            if (isLocked !== undefined) {
                localVarQueryParameter['isLocked'] = isLocked;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Removes items from a collection.
         * @param {string} collectionId The collection id.
         * @param {string} ids Item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFromCollection: async (collectionId: string, ids: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'collectionId' is not null or undefined
            if (collectionId === null || collectionId === undefined) {
                throw new RequiredError('collectionId','Required parameter collectionId was null or undefined when calling removeFromCollection.');
            }
            // verify required parameter 'ids' is not null or undefined
            if (ids === null || ids === undefined) {
                throw new RequiredError('ids','Required parameter ids was null or undefined when calling removeFromCollection.');
            }
            const localVarPath = `/Collections/{collectionId}/Items`
                .replace(`{${"collectionId"}}`, encodeURIComponent(String(collectionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CollectionApi - functional programming interface
 * @export
 */
export const CollectionApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Adds items to a collection.
         * @param {string} collectionId The collection id.
         * @param {string} ids Item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addToCollection(collectionId: string, ids: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CollectionApiAxiosParamCreator(configuration).addToCollection(collectionId, ids, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Creates a new collection.
         * @param {string} [name] The name of the collection.
         * @param {string} [ids] Item Ids to add to the collection.
         * @param {string} [parentId] Optional. Create the collection within a specific folder.
         * @param {boolean} [isLocked] Whether or not to lock the new collection.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCollection(name?: string, ids?: string, parentId?: string, isLocked?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CollectionCreationResult>> {
            const localVarAxiosArgs = await CollectionApiAxiosParamCreator(configuration).createCollection(name, ids, parentId, isLocked, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Removes items from a collection.
         * @param {string} collectionId The collection id.
         * @param {string} ids Item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeFromCollection(collectionId: string, ids: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await CollectionApiAxiosParamCreator(configuration).removeFromCollection(collectionId, ids, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CollectionApi - factory interface
 * @export
 */
export const CollectionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Adds items to a collection.
         * @param {string} collectionId The collection id.
         * @param {string} ids Item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addToCollection(collectionId: string, ids: string, options?: any): AxiosPromise<void> {
            return CollectionApiFp(configuration).addToCollection(collectionId, ids, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates a new collection.
         * @param {string} [name] The name of the collection.
         * @param {string} [ids] Item Ids to add to the collection.
         * @param {string} [parentId] Optional. Create the collection within a specific folder.
         * @param {boolean} [isLocked] Whether or not to lock the new collection.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCollection(name?: string, ids?: string, parentId?: string, isLocked?: boolean, options?: any): AxiosPromise<CollectionCreationResult> {
            return CollectionApiFp(configuration).createCollection(name, ids, parentId, isLocked, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Removes items from a collection.
         * @param {string} collectionId The collection id.
         * @param {string} ids Item ids, comma delimited.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFromCollection(collectionId: string, ids: string, options?: any): AxiosPromise<void> {
            return CollectionApiFp(configuration).removeFromCollection(collectionId, ids, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addToCollection operation in CollectionApi.
 * @export
 * @interface CollectionApiAddToCollectionRequest
 */
export interface CollectionApiAddToCollectionRequest {
    /**
     * The collection id.
     * @type {string}
     * @memberof CollectionApiAddToCollection
     */
    readonly collectionId: string

    /**
     * Item ids, comma delimited.
     * @type {string}
     * @memberof CollectionApiAddToCollection
     */
    readonly ids: string
}

/**
 * Request parameters for createCollection operation in CollectionApi.
 * @export
 * @interface CollectionApiCreateCollectionRequest
 */
export interface CollectionApiCreateCollectionRequest {
    /**
     * The name of the collection.
     * @type {string}
     * @memberof CollectionApiCreateCollection
     */
    readonly name?: string

    /**
     * Item Ids to add to the collection.
     * @type {string}
     * @memberof CollectionApiCreateCollection
     */
    readonly ids?: string

    /**
     * Optional. Create the collection within a specific folder.
     * @type {string}
     * @memberof CollectionApiCreateCollection
     */
    readonly parentId?: string

    /**
     * Whether or not to lock the new collection.
     * @type {boolean}
     * @memberof CollectionApiCreateCollection
     */
    readonly isLocked?: boolean
}

/**
 * Request parameters for removeFromCollection operation in CollectionApi.
 * @export
 * @interface CollectionApiRemoveFromCollectionRequest
 */
export interface CollectionApiRemoveFromCollectionRequest {
    /**
     * The collection id.
     * @type {string}
     * @memberof CollectionApiRemoveFromCollection
     */
    readonly collectionId: string

    /**
     * Item ids, comma delimited.
     * @type {string}
     * @memberof CollectionApiRemoveFromCollection
     */
    readonly ids: string
}

/**
 * CollectionApi - object-oriented interface
 * @export
 * @class CollectionApi
 * @extends {BaseAPI}
 */
export class CollectionApi extends BaseAPI {
    /**
     * 
     * @summary Adds items to a collection.
     * @param {CollectionApiAddToCollectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionApi
     */
    public addToCollection(requestParameters: CollectionApiAddToCollectionRequest, options?: any) {
        return CollectionApiFp(this.configuration).addToCollection(requestParameters.collectionId, requestParameters.ids, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Creates a new collection.
     * @param {CollectionApiCreateCollectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionApi
     */
    public createCollection(requestParameters: CollectionApiCreateCollectionRequest = {}, options?: any) {
        return CollectionApiFp(this.configuration).createCollection(requestParameters.name, requestParameters.ids, requestParameters.parentId, requestParameters.isLocked, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Removes items from a collection.
     * @param {CollectionApiRemoveFromCollectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionApi
     */
    public removeFromCollection(requestParameters: CollectionApiRemoveFromCollectionRequest, options?: any) {
        return CollectionApiFp(this.configuration).removeFromCollection(requestParameters.collectionId, requestParameters.ids, options).then((request) => request(this.axios, this.basePath));
    }
}
