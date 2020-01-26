"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const apiGetTours_1 = require("./api/tours/apiGetTours");
const apiGetTourDetail_1 = require("./api/tours/apiGetTourDetail");
const apiCreateTour_1 = require("./api/tours/apiCreateTour");
const apiDeleteTour_1 = require("./api/tours/apiDeleteTour");
const apiUpdateTour_1 = require("./api/tours/apiUpdateTour");
const apiUploadImage_1 = require("./api/tours/apiUploadImage");
const errorHandling_1 = require("./api/general/errorHandling");
const messages_1 = require("./model/shared/messages");
const dateParam_1 = require("./api/general/reqParams/dateParam");
const app = express_1.default();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });
const logger = morgan_1.default('dev');
const authenticator = (req, res, next) => {
    const username = 'watsbeat';
    req.user = username;
    next();
};
app.use(authenticator);
app.use(logger);
app.use((req, res, next) => {
    if (!req.accepts('application/json')) {
        next(new messages_1.APIError('Content Type not supported', 'This API only accepts application/json', 400));
    }
    next();
});
app.get('/headers', (req, res, next) => res.json(req.headers));
app.use('/static', express_1.default.static(path_1.default.resolve('./', 'public', 'img')));
app.get('/', (req, res, next) => {
    res.send('Tour Booking API');
});
app.param('fromDate', dateParam_1.dateParam);
app.param('toDate', dateParam_1.dateParam);
app.get('/bookings/:fromDate/:toDate', (req, res, next) => res.json(req.params));
app.get('/tours', apiGetTours_1.apiGetTours);
app.get('/tours/:id', apiGetTourDetail_1.apiGetTourDetail);
app.post('/tours', urlEncodedParser, apiCreateTour_1.apiCreateTour);
app.delete('/tours/:id', apiDeleteTour_1.apiDeleteTour);
app.put('/tours/:id', jsonParser, apiUpdateTour_1.apiUpdateTour);
app.patch('/tours/:id', jsonParser, apiUpdateTour_1.apiUpdateTour);
app.post('/tours/:id/img', apiUploadImage_1.apiUploadImage);
app.use(errorHandling_1.apiErrorHandler);
app.listen(process.env.PORT || 8091, () => {
    console.log('Server started...');
});
