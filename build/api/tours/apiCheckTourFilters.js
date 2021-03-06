"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../model/shared/messages");
const tourFilters_1 = require("../../model/shared/tourFilters");
exports.apiCheckTourFilters = (req, res, next) => {
    const filters = new tourFilters_1.TourFilters(req.query);
    for (let filter of Object.getOwnPropertyNames(req.query)) {
        if (!filters.hasOwnProperty(filter)) {
            next(messages_1.APIError.errInvalidQueryParameter({ invalidFilter: filter }));
        }
    }
    next();
};
