import { RequestHandler } from 'express';

export const apiGetUserDetail: RequestHandler = (req, res, next) => {
    res.send(`User detail with id: ${req.params.id}`);
    next();
};