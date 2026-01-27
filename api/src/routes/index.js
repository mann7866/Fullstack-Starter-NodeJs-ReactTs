const router = require('express').Router();
const userController = require('../http/controllers/user.controller');
const UserRequest = require('../http/requests/user.request');

router.get('/users', userController.index);
router.get('/users/:id', userController.show);
router.post('/users', UserRequest.create(), userController.store);
router.put('/users/:id', UserRequest.update(), userController.update);
router.delete('/users/:id', userController.destroy);

module.exports = router;
