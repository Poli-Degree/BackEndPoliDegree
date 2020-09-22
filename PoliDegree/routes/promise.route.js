const express = require ('express');
const router = express.Router();

const promiseController = require ('../controllers/promise.controller');

router.post('/',promiseController.createPromise);

router.get('/',promiseController.findAllPromises);

module.exports = router;