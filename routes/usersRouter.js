const { Router } = require('express');
const usersController = require('../controllers/usersController');
const usersRouter = Router();

usersRouter.get('/', usersController.usersListGet);

usersRouter.get('/new', usersController.usersCreateGet);
usersRouter.post('/new', usersController.usersCreatePost);

usersRouter.get('/delete', usersController.usersDeleteAllGet);
// usersRouter.delete('/delete', usersController.usersDeleteAllPost);

module.exports = usersRouter;
