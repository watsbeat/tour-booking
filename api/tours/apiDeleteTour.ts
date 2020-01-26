import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';
import { PublicInfo, APIError } from '../../model/shared/messages';

export const apiDeleteTour: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = DataStore.tours.findIndex(item => item.id == tourID);
    if (tourIndex > -1) {
        DataStore.tours.splice(tourIndex, 1);
        res.json(new PublicInfo('Tour deleted', 200));
    } else {
        res.json(new APIError('Validation Error', 'Tour not found', 400));
    }
};
