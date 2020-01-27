import { CustomRequestHandler } from '../../../model/express';

export const authenticator: CustomRequestHandler = (req, res, next) => {
    const username = 'watsbeat';
    req.user = username;
    next();
};
