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

toursRouter.get('/', apiCheckTourFilters, apiGetTours);
toursRouter.post('/', urlEncodedParser, apiCreateTour);
toursRouter.get('/:id', apiGetTourDetail);
toursRouter.delete('/:id', apiDeleteTour);
toursRouter.put('/:id', jsonParser, apiUpdateTour);
toursRouter.patch('/:id', jsonParser, apiUpdateTour);
toursRouter.post('/:id/img', apiUploadImage);
