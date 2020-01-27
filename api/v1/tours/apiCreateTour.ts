import { DataStore } from '../../../data/data';
import { RequestHandler } from 'express';
import { APIError, PublicInfo } from '../../../model/shared/messages';
import uuid from 'uuid/v4';

export const apiCreateTour: RequestHandler = (req, res, next) => {
    const requiredFields = ['location', 'tourTitle'];
    const givenFields = Object.getOwnPropertyNames(req.body);
    if (!requiredFields.every(field => givenFields.includes(field))) {
        return next(APIError.errMissingData({ requiredFields: requiredFields }));
    }
    const newTour = {
        id: uuid(),
        location: req.body.location || '',
        tourTitle: req.body.tourTitle || '',
        tourCategory: req.body.tourCategory || '',
        tourDescription: req.body.tourDescription || '',
        price: req.body.price || 0,
        currency: req.body.currency || '',
        reviews: req.body.reviews || '',
        img: []
    };
    DataStore.tours.push(newTour);
    res.json(PublicInfo.infoCreated({ tour: newTour }));
};
