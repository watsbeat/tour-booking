import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';
import { TourDetail } from '../../model/shared/tourDetail';
import { fileMapper } from '../general/static';
import { APIError, PublicInfo } from '../../model/shared/messages';

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const selectedTour = DataStore.tours.find(element => element.id == tourID);
    if (selectedTour) {
        const imageUrls = selectedTour.img.map(fileMapper(req.app.get('env')));
        const selectedReviews = DataStore.reviews.filter(item => item.tourID);
        res.json(
            new PublicInfo('Retrieved tour', 200, {
                tour: new TourDetail(selectedTour, selectedReviews, imageUrls)
            })
        );
    } else {
        res.json(new APIError('Validation Error', 'Tour not found', 400));
    }
};
