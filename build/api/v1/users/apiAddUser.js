"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiAddUser = (req, res, next) => {
    res.send(`Adding user ${req.body}`);
    next();
};
