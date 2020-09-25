const express = require ('express');
const router = express.Router();

const taskController = require ('../controllers/task.controller');

router.post('/',taskController.createTask);

router.get('/',taskController.findAllTask);

router.get('/:idProyect', taskController.findAllTasksByIdProyect);

router.delete('/:idTask',taskController.deleteTaskById);

router.put('/:idTask', taskController.updateTaskById);

module.exports = router;