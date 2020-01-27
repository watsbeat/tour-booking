import { Router } from 'express';
import { jsonParser, urlEncodedParser } from '../general/bodyParser';
import { apiCheckTourFilters } from './apiCheckTourFilters';
import { apiGetTours } from './apiGetTours';
import { apiGetTourDetail } from './apiGetTourDetail';
import { apiCreateTour } from './apiCreateTour';
import { apiDeleteTour } from './apiDeleteTour';
import { apiUpdateTour } from './apiUpdateTour';
import { apiUploadImage } from './apiUploadImage';

export let toursRouter: Router = Router();

toursRouter.route('/')
    .get(apiCheckTourFilters, apiGetTours)
    .post(urlEncodedParser, apiCreateTour);

toursRouter.route('/:id')
    .get(apiGetTourDetail)
    .delete(apiDeleteTour)
    .put(jsonParser, apiUpdateTour)
    .patch(jsonParser, apiUpdateTour)

toursRouter.post('/:id/img', apiUploadImage);
