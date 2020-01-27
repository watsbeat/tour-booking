"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGetUserDetail = (req, res, next) => {
    res.send(`User detail with id: ${req.params.id}`);
    next();
};
