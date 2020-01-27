"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiGetUserDetail_1 = require("./apiGetUserDetail");
const apiAddUser_1 = require("./apiAddUser");
const apiDeleteUser_1 = require("./apiDeleteUser");
const apiUpdateUser_1 = require("./apiUpdateUser");
exports.usersRouter = express_1.Router();
exports.usersRouter.post('/', apiAddUser_1.apiAddUser);
exports.usersRouter.route('/:id')
    .get(apiGetUserDetail_1.apiGetUserDetail)
    .delete(apiDeleteUser_1.apiDeleteUser)
    .patch(apiUpdateUser_1.apiUpdateUser);
