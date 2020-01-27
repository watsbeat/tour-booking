import express from 'express';
import path from 'path';
import { Router } from 'express';
import { authenticator } from './general/authenticator';
import { logger } from './general/logging';
import { apiCors } from './general/cors';
import { apiValidation } from './general/validation';
import { usersRouter } from './users/apiUsers';
import { toursRouter } from './tours/apiTours';
import { apiDownloadImage } from './tours/apiDownloadImage';
import { apiErrorHandler } from './general/errorHandling';

export let routerV1 = Router();

routerV1.use(authenticator);

routerV1.use(logger);

routerV1.use(apiCors);

routerV1.use(apiValidation);

routerV1.use('/static', express.static(path.resolve('./', 'public', 'img')));

routerV1.get('/', (req, res, next) => {
    res.send('Tour Booking API');
});

routerV1.use('/users', usersRouter);

routerV1.use('/tours', toursRouter);

routerV1.get('/static/download/:id', apiDownloadImage);

routerV1.use(apiErrorHandler);
