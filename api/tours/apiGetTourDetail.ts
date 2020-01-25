import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const selectedTour = DataStore.tours.find(element => element.id == tourID);
    if (selectedTour) {
        res.json(selectedTour);
    } else {
        res.json({ status: 'failed', message: 'Element not found' });
    }
};
