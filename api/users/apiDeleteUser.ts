import { RequestHandler } from 'express';

export const apiDeleteUser: RequestHandler = (req, res, next) => {
    res.send(`Deleting user with id: ${req.params.id}`);
    next();
};
