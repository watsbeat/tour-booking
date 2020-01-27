import { RequestParamHandler } from 'express';
import { APIError } from '../../../../model/shared/messages';

const dateFormat = new RegExp('(\\d{4})-(\\d{1,2})-(\\d{1,2})');

export const dateParam: RequestParamHandler = (req, res, next, value, name) => {
    const parsedComponents = dateFormat.exec(value);
    if (parsedComponents) {
        console.log('Parsed:', parsedComponents)
        const [_, year, month, day] = parsedComponents.map(item => parseInt(item));
        const date = new Date(year, month-1, day);
        req.params[name] = date.toString();
        next();
    } else {
        next(new APIError('Parse Error', 'Date could not be parse. Date format: YYYY-MM-DD', 400));
    }
};
