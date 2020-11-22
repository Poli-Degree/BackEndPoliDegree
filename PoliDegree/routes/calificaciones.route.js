const express = require ('express');
const router = express.Router();

const calificacionesController = require ('../controllers/Calificaciones.controller');

router.post('/',calificacionesController.createCalificacion);

router.get('/',calificacionesController.findAllCalificaciones);

router.get ('/:idProyect', calificacionesController.findCalificacionesByIdProyect);

router.delete ('/:idCalificaciones', calificacionesController.deleteCalificacionesById);

router.put ('/:idCalificaciones', calificacionesController.updateCalificaciones);
module.exports = router;