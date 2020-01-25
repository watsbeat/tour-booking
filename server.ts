import express from 'express';
import * as bodyParser from 'body-parser';

import { apiGetTours } from './api/tours/apiGetTours';
import { apiGetTourDetail } from './api/tours/apiGetTourDetail';
import { apiCreateTour } from './api/tours/apiCreateTour';
import { apiDeleteTour } from './api/tours/apiDeleteTour';
import { apiUpdateTour } from './api/tours/apiUpdateTour';

const app = express();
const jsonParser = bodyParser.json();

const logger: express.RequestHandler = (req, res, next) => {
    console.log(new Date() + ' - ' + req.method + ' request to ' + req.path);
    next();
}

app.use(logger);

app.get('/', (req, res, next) => {
    res.send('Tour Booking API');
});

app.get('/tours', apiGetTours);

app.get('/tours/:id', apiGetTourDetail);

app.post('/tours', jsonParser, apiCreateTour);

app.delete('/tours/:id', apiDeleteTour);

app.put('/tours/:id', jsonParser, apiUpdateTour);

app.patch('/tours/:id', jsonParser, apiUpdateTour);

app.listen(process.env.PORT || 8091, () => {
    console.log('Server started...');
});
