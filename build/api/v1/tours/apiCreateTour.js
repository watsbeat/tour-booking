"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../../data/data");
const messages_1 = require("../../../model/shared/messages");
const v4_1 = __importDefault(require("uuid/v4"));
exports.apiCreateTour = (req, res, next) => {
    const requiredFields = ['location', 'tourTitle'];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if (!requiredFields.every(field => givenFields.includes(field))) {
        return next(messages_1.APIError.errMissingData({ requiredFields: requiredFields }));
    }
    const newTour = {
        id: v4_1.default(),
        location: req.body.location || '',
        tourTitle: req.body.tourTitle || '',
        tourCategory: req.body.tourCategory || '',
        tourDescription: req.body.tourDescription || '',
        price: req.body.price || 0,
        currency: req.body.currency || '',
        reviews: req.body.reviews || '',
        img: []
    };
    data_1.DataStore.tours.push(newTour);
    res.json(messages_1.PublicInfo.infoCreated({ tour: newTour }));
};
