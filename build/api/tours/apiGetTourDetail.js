"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiGetTourDetail = (req, res, next) => {
    const tourID = req.params.id;
    const selectedTour = data_1.DataStore.tours.find((element) => element.id == tourID);
    if (selectedTour) {
        res.json(selectedTour);
    }
    else {
        res.json({ "status": "failed", "message": "Element not found" });
    }
};
