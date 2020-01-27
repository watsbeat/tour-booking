import { RequestHandler } from 'express';

export const apiUpdateUser: RequestHandler = (req, res, next) => {
    res.send(`Updating user with id: ${req.params.id}`);
    next();
};