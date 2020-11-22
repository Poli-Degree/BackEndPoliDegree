const dbManager = require('../database.config/database.manager');

async function createActa (req,res) {

    const newActaObject = {
        fechaSus: req.body.fechaSus,
        autor: req.body.autor,
        codigoEstudiante: req.body.codigoEstudiante,
        programa: req.body.programa,
        nombreProyecto: req.body.nombreProyecto,
        tutor: req.body.tutor,
        notaTutor: req.body.notaTutor,
        jurado1: req.body.jurado1,
        notaJurado1: req.body.notaJurado1,
        jurado2: req.body.jurado2,
        notaJurado2: req.body.autor.notaJurado2,
        idProyect: req.body.idProyect
    }

    dbManager.Acta.create(newActaObject).then(
        data => {
            res.send (data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
}

async function findAllActas (req, res){
    try {
        //Execute query
        const actas = await dbManager.Acta.findAll();
        
        //Send response
        res.json({
                data: actas
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

async function findActasByIdProyect (req,res){

    try {
        //Execute query
        const {idProyect} = req.params;

        const actas = await dbManager.Acta.findAll ({
            where: {
                idProyect: idProyect
            }
        });
        
        //Send response
        res.json({
                data: actas
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

async function deleteActasById (req,res) {

    try {
        const {idActa} = req.params;
    
        const acta = await dbManager.Acta.destroy(
            {
                where: {
                    idActa: idActa
                }
            }
        );  
        res.send('Acta with id: ' + idActa + ' delete');
    
        } catch (e) {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
}

async function updateActas (req,res) {

    try {
        const {idActa} = req.params;
    
        const acta = await dbManager.Acta.update(
            {
                fechaSus: req.body.fechaSus,
                autor: req.body.autor,
                codigoEstudiante: req.body.codigoEstudiante,
                programa: req.body.programa,
                nombreProyecto: req.body.nombreProyecto,
                tutor: req.body.tutor,
                notaTutor: req.body.notaTutor,
                jurado1: req.body.jurado1,
                notaJurado1: req.body.notaJurado1,
                jurado2: req.body.jurado2,
                notaJurado2: req.body.autor.notaJurado2,
                idProyect: req.body.idProyect
            }, {
                where: {
                    idActa: idActa,
                    
                }
            }
        );
    
        res.send('Acta with id: ' + idActa + ' updated')
        } catch (e) {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
}


exports.updateActas = updateActas;
exports.deleteActasById = deleteActasById;
exports.findActasByIdProyect = findActasByIdProyect;
exports.createActa = createActa;
exports.findAllActas = findAllActas;