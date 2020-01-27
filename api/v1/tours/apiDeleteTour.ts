import { DataStore } from '../../../data/data';
import { RequestHandler } from 'express';
import { PublicInfo, APIError, PublicError } from '../../../model/shared/messages';

export const apiDeleteTour: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = DataStore.tours.findIndex(item => item.id == tourID);
    if (tourIndex > -1) {
        DataStore.tours.splice(tourIndex, 1);
        res.json(PublicInfo.infoDeleted({ tourID: tourID }));
    } else {
        res.json(APIError.errNotFound({ tourID: tourID }));
    }
};
