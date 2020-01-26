import express from 'express';
import * as bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';

import { apiGetTours } from './api/tours/apiGetTours';
import { apiGetTourDetail } from './api/tours/apiGetTourDetail';
import { apiCreateTour } from './api/tours/apiCreateTour';
import { apiDeleteTour } from './api/tours/apiDeleteTour';
import { apiUpdateTour } from './api/tours/apiUpdateTour';
import { apiUploadImage } from './api/tours/apiUploadImage';
import { apiErrorHandler } from './api/general/errorHandling';
import { CustomRequestHandler } from './model/express';
import { APIError } from './model/shared/messages';
import { dateParam } from './api/general/reqParams/dateParam';

const app = express();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });
const logger = morgan('dev');

const authenticator: CustomRequestHandler = (req, res, next) => {
    const username = 'watsbeat';
    req.user = username;
    next();
};

app.use(authenticator);
app.use(logger);

app.use((req, res, next) => {
    if (!req.accepts('application/json')) {
        next(new APIError('Content Type not supported', 'This API only accepts application/json', 400));
    }
    next();
});

app.get('/headers', (req, res, next) => res.json(req.headers));

app.use('/static', express.static(path.resolve('./', 'public', 'img')));

app.get('/', (req, res, next) => {
    res.send('Tour Booking API');
});

app.param('fromDate', dateParam);
app.param('toDate', dateParam);

app.get('/bookings/:fromDate/:toDate', (req, res, next) => res.json(req.params));

app.get('/tours', apiGetTours);

app.get('/tours/:id', apiGetTourDetail);

app.post('/tours', urlEncodedParser, apiCreateTour);

app.delete('/tours/:id', apiDeleteTour);

app.put('/tours/:id', jsonParser, apiUpdateTour);

app.patch('/tours/:id', jsonParser, apiUpdateTour);

app.post('/tours/:id/img', apiUploadImage);

app.use(apiErrorHandler);

app.listen(process.env.PORT || 8091, () => {
    console.log('Server started...');
});
