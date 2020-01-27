import express from 'express';
import path from 'path';

import { authenticator } from './api/general/authenticator';
import { logger } from './api/general/logging';
import { apiCors } from './api/general/cors';
import { apiValidation } from './api/general/validation';
import { apiErrorHandler } from './api/general/errorHandling';
import { toursRouter } from './api/tours/apiTours';
import { userRouter } from './api/users/apiUsers';
import { apiDownloadImage } from './api/tours/apiDownloadImage';

const app = express();

app.disable('x-powered-by');

app.use(authenticator);

app.use(logger);

app.use(apiCors);

app.use(apiValidation);

app.use('/static', express.static(path.join(__dirname, 'public', 'img')));

app.get('/', (req, res, next) => {
    res.send('Tour Booking API');
});

app.use('/users', userRouter);

app.use('/tours', toursRouter);

app.get('/static/download/:id', apiDownloadImage);

app.use(apiErrorHandler);

app.listen(process.env.PORT || 8091, () => {
    console.log('Server started...');
});
