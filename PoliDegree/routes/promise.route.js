const express = require ('express');
const router = express.Router();

const promiseController = require ('../controllers/promise.controller');

router.post('/',promiseController.createPromise);

router.get('/',promiseController.findAllPromises);

router.get ('/:idProyect', promiseController.findPromisesByIdProyect);

router.delete ('/:idPromise', promiseController.deletePromiseById);

router.put ('/:idPromise', promiseController.updatePromises);
module.exports = router;