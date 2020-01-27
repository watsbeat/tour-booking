import { Router } from 'express';
import { apiGetUserDetail } from './apiGetUserDetail';
import { apiAddUser } from './apiAddUser';
import { apiDeleteUser } from './apiDeleteUser';
import { apiUpdateUser } from './apiUpdateUser';

export let usersRouter = Router();

usersRouter.get('/:id', apiGetUserDetail);

usersRouter.post('/', apiAddUser);

usersRouter.delete('/:id', apiDeleteUser);

usersRouter.patch('/:id', apiUpdateUser);
