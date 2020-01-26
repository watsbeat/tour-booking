"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const tourDetail_1 = require("../../model/shared/tourDetail");
const static_1 = require("../general/static");
const messages_1 = require("../../model/shared/messages");
exports.apiGetTourDetail = (req, res, next) => {
    const tourID = req.params.id;
    const selectedTour = data_1.DataStore.tours.find(element => element.id == tourID);
    if (selectedTour) {
        const imageUrls = selectedTour.img.map(static_1.fileMapper(req.app.get('env')));
        const selectedReviews = data_1.DataStore.reviews.filter(item => item.tourID);
        res.json(messages_1.PublicInfo.infoRetrieved({
            tour: new tourDetail_1.TourDetail(selectedTour, selectedReviews, imageUrls)
        }));
    }
    else {
        res.json(messages_1.APIError.errNotFound({ tourID: tourID }));
    }
};
