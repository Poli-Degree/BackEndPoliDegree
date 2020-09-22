const express = require ('express');
const router = express.Router();

const taskController = require ('../controllers/task.controller');

router.post('/',taskController.createTask);

router.get('/',taskController.findAllTask);

module.exports = router;