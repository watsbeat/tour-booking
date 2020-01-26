"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../model/shared/messages");
const tourFilters_1 = require("../../model/shared/tourFilters");
exports.apiCheckTourFilters = (req, res, next) => {
    const filters = new tourFilters_1.TourFilters(req.query);
    for (let filter of Object.getOwnPropertyNames(req.query)) {
        if (!filters.hasOwnProperty(filter)) {
            console.log('a');
            next(new messages_1.APIError('Query String Error', 'No such filter', 400));
        }
    }
    next();
};
