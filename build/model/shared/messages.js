"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class APIError extends Error {
    constructor(name, message, status, properties, internalProperties) {
        super();
        this.status = status;
        this.properties = properties;
        this.internalProperties = internalProperties;
        this.name = name;
        this.message = message;
    }
    publicVersion() {
        return new PublicError(this);
    }
    static errNotFound(properties, internalProperties) {
        return new APIError('Resource Not Found', 'The specified resource does not exist', 404, properties, internalProperties);
    }
    static errInvalidQueryParameter(properties, internalProperties) {
        return new APIError('Invalid Query Parameter', 'One of the query parameters specified is invalid', 400, properties, internalProperties);
    }
    static errMissingData(properties, internalProperties) {
        return new APIError('Missing Body', 'Missing data in the request body', 400, properties, internalProperties);
    }
    static errInternalServerError(properties, internalProperties) {
        return new APIError('Internal Server Error', 'Request could not be carried out', 500, properties, internalProperties);
    }
}
exports.APIError = APIError;
class PublicError {
    constructor(err) {
        this.name = err.name;
        this.message = err.message;
        this.status = err.status;
        this.properties = err.properties;
    }
}
exports.PublicError = PublicError;
class PublicInfo {
    constructor(message, status, properties) {
        this.message = message;
        this.status = status;
        this.properties = properties;
    }
    static infoRetrieved(properties) {
        return new PublicInfo('Resource Found', 200, properties);
    }
    static infoDeleted(properties) {
        return new PublicInfo('Resource Deleted', 204, properties);
    }
    static infoCreated(properties) {
        return new PublicInfo('Resource Created', 201, properties);
    }
    static infoUpdated(properties) {
        return new PublicInfo('Resource Updated', 201, properties);
    }
}
exports.PublicInfo = PublicInfo;
