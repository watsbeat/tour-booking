"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../../model/shared/messages");
exports.apiValidation = (req, res, next) => {
    if (!req.accepts('application/json')) {
        next(new messages_1.APIError('Content Type not supported', 'This API only accepts application/json', 400));
    }
    next();
};
