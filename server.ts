import express from 'express';
const app = express();

import { apiGetTours } from './api/tours/apiGetTours';
import { apiGetTourDetail } from './api/tours/apiGetTourDetail';


app.get('/', (req, res, next) => {
    res.send('Tour Booking API');
});

app.get('/tours', apiGetTours);

app.get('/tours/:id', apiGetTourDetail);

app.post('/tours', (req, res, next) => {
    res.send('Add a new tour');
});

app.listen(process.env.PORT || 8091, () => {
    console.log('Server started...');
});