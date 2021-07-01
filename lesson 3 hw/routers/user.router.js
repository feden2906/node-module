const router = require('express');
const usercontroller = require('../controllers/user.controllers');

router.get('/', usercontroller.getUsers);
router.post('/', usercontroller.createUser);
router.get('/:id', usercontroller.getUserById);
router.delete('/:id', usercontroller.getUserById);
