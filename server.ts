import express from 'express';
import * as bodyParser from 'body-parser';

import { apiGetTours } from './api/tours/apiGetTours';
import { apiGetTourDetail } from './api/tours/apiGetTourDetail';
import { apiCreateTour } from './api/tours/apiCreateTour';

const app = express();
const jsonParser = bodyParser.json();

app.get('/', (req, res, next) => {
    res.send('Tour Booking API');
});

app.get('/tours', apiGetTours);

app.get('/tours/:id', apiGetTourDetail);

app.post('/tours', jsonParser, apiCreateTour);

app.listen(process.env.PORT || 8091, () => {
    console.log('Server started...');
});
