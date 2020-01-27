"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const authenticator_1 = require("./api/general/authenticator");
const logging_1 = require("./api/general/logging");
const cors_1 = require("./api/general/cors");
const validation_1 = require("./api/general/validation");
const errorHandling_1 = require("./api/general/errorHandling");
const apiTours_1 = require("./api/tours/apiTours");
const apiUsers_1 = require("./api/users/apiUsers");
const apiDownloadImage_1 = require("./api/tours/apiDownloadImage");
const app = express_1.default();
app.disable('x-powered-by');
app.use(authenticator_1.authenticator);
app.use(logging_1.logger);
app.use(cors_1.apiCors);
app.use(validation_1.apiValidation);
app.use('/static', express_1.default.static(path_1.default.join(__dirname, 'public', 'img')));
app.get('/', (req, res, next) => {
    res.send('Tour Booking API');
});
app.use('/users', apiUsers_1.userRouter);
app.use('/tours', apiTours_1.toursRouter);
app.get('/static/download/:id', apiDownloadImage_1.apiDownloadImage);
app.use(errorHandling_1.apiErrorHandler);
app.listen(process.env.PORT || 8091, () => {
    console.log('Server started...');
});
