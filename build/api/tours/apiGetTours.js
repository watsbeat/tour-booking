"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const tourSummary_1 = require("../../model/shared/tourSummary");
const messages_1 = require("../../model/shared/messages");
exports.apiGetTours = (req, res, next) => {
    res.json(new messages_1.PublicInfo('Retrieved tours', 200, {
        tours: data_1.DataStore.tours.map(item => new tourSummary_1.TourSummary(item))
    }));
};
