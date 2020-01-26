import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';
import { TourSummary } from '../../model/shared/tourSummary';
import { PublicInfo } from '../../model/shared/messages';

export const apiGetTours: RequestHandler = (req, res, next) => {
    res.json(
        new PublicInfo('Retrieved tours', 200, {
            tours: DataStore.tours.map(item => new TourSummary(item))
        })
    );
};
