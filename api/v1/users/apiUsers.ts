import { Router } from 'express';
import { apiGetUserDetail } from './apiGetUserDetail';
import { apiAddUser } from './apiAddUser';
import { apiDeleteUser } from './apiDeleteUser';
import { apiUpdateUser } from './apiUpdateUser';

export let usersRouter = Router();

usersRouter.post('/', apiAddUser);

usersRouter.route('/:id')
    .get(apiGetUserDetail)
    .delete(apiDeleteUser)
    .patch(apiUpdateUser);
