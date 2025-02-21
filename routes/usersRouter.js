import { Router } from 'express';
import usersController from '../controllers/usersController.js';
const usersRouter = Router();

usersRouter.get('/', usersController.usersListGet);

usersRouter.get('/new', usersController.usersCreateGet);
usersRouter.post('/new', usersController.usersCreatePost);

usersRouter.get('/search', usersController.usersSearchGet);

usersRouter.get('/delete', usersController.usersDeleteAllGet);

export default usersRouter;
