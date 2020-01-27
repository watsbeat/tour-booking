"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticator = (req, res, next) => {
    const username = 'watsbeat';
    req.user = username;
    next();
};
