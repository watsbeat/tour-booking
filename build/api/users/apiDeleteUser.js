"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDeleteUser = (req, res, next) => {
    res.send(`Deleting user with id: ${req.params.id}`);
    next();
};
