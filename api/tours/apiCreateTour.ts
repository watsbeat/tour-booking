import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';
import { TourDetail } from '../../model/shared/tourDetail';
import uuid from 'uuid/v4';

export const apiCreateTour: RequestHandler = (req, res, next) => {
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
    res.send('New tour added');
};
