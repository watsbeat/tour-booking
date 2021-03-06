"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bodyParser_1 = require("./../v1/general/bodyParser");
const apiCheckTourFilters_1 = require("./../v1/tours/apiCheckTourFilters");
const apiGetTours_1 = require("./../v1/tours/apiGetTours");
const apiGetTourDetail_1 = require("./../v1/tours/apiGetTourDetail");
const apiCreateTour_1 = require("./../v1/tours/apiCreateTour");
const apiDeleteTour_1 = require("./../v1/tours/apiDeleteTour");
const apiUpdateTour_1 = require("./../v1/tours/apiUpdateTour");
const apiUploadImage_1 = require("./../v1/tours/apiUploadImage");
exports.toursRouter = express_1.Router();
exports.toursRouter.get('/', apiCheckTourFilters_1.apiCheckTourFilters, apiGetTours_1.apiGetTours);
exports.toursRouter.post('/', bodyParser_1.urlEncodedParser, apiCreateTour_1.apiCreateTour);
exports.toursRouter.get('/:id', apiGetTourDetail_1.apiGetTourDetail);
exports.toursRouter.delete('/:id', apiDeleteTour_1.apiDeleteTour);
exports.toursRouter.put('/:id', bodyParser_1.jsonParser, apiUpdateTour_1.apiUpdateTour);
exports.toursRouter.patch('/:id', bodyParser_1.jsonParser, apiUpdateTour_1.apiUpdateTour);
exports.toursRouter.post('/:id/img', apiUploadImage_1.apiUploadImage);
