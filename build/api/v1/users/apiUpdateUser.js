"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUpdateUser = (req, res, next) => {
    res.send(`Updating user with id: ${req.params.id}`);
    next();
};
