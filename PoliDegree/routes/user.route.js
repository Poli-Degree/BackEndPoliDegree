const express = require ('express');
const router = express.Router();

const userController = require ('../controllers/user.controller');

router.post('/',userController.createUser);

router.get('/',userController.findAllUsers);

router.delete('/:idUser', userController.deleteUserById);

router.put('/:idUser', userController.updateUserById);

router.get('/:idUser', userController.findUserById);
module.exports = router;