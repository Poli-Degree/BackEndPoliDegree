const express = require ('express');
const router = express.Router();

const proyectController = require ('../controllers/proyect.controller');

router.post('/',proyectController.createProyect);

router.get('/',proyectController.findAllProyects);

module.exports = router;