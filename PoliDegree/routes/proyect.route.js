const express = require ('express');
const router = express.Router();

const proyectController = require ('../controllers/proyect.controller');

router.post('/',proyectController.createProyect);

router.get('/',proyectController.findAllProyects);

router.get('/:idUser',proyectController.findProyectByIdUser);

router.put('/:idUser', proyectController.updateProyectByIdUser);

router.delete('/:idProyect', proyectController.deleteProyect);

module.exports = router;