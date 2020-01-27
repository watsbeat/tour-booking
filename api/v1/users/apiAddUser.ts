import { RequestHandler } from 'express';

export const apiAddUser: RequestHandler = (req, res, next) => {
    res.send(`Adding user ${req.body}`);
    next();
};