import { RequestHandler } from 'express';
import { APIError } from '../../../model/shared/messages';

export const apiValidation: RequestHandler = (req, res, next) => {
    if (!req.accepts('application/json')) {
        next(
            new APIError(
                'Content Type not supported',
                'This API only accepts application/json',
                400
            )
        );
    }
    next();
};
