const express = require ('express');
const router = express.Router();

const actaController = require ('../controllers/acta.controller');

router.post('/',actaController.createActa);

router.get('/',actaController.findAllActas);

router.get ('/:idProyect', actaController.findActasByIdProyect);

router.delete ('/:idActa', actaController.deleteActasById);

router.put ('/:idActa', actaController.updateActas);
module.exports = router;