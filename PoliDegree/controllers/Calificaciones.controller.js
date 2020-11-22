const dbManager = require('../database.config/database.manager');

async function createCalificacion (req,res) {

    const newCalificacionObject = {
        autor: req.body.autor,
        nombreProyecto: req.body.nombreProyecto,
        tutor: req.body.tutor,
        jurado: req.body.jurado,
        calificacion1: req.body.calificacion1,
        calificacion2: req.body.calificacion2,
        calificacion3: req.body.calificacion3,
        calificacion4: req.body.calificacion4,
        calificacion5: req.body.calificacion5,
        calificacion6: req.body.calificacion6,
        comentario1: req.body.comentario1,
        comentario2: req.body.comentario2,
        comentario3: req.body.comentario3,
        comentario4: req.body.comentario4,
        comentario5: req.body.comentario5,
        comentario6: req.body.comentario6,
        idProyect: req.body.idProyect
    }

    dbManager.Calificaciones.create(newCalificacionObject).then (
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

async function findAllCalificaciones (req, res){
    try {
        //Execute query
        const calificaciones = await dbManager.Calificaciones.findAll();
        
        //Send response
        res.json({
                data: calificaciones
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

async function findCalificacionesByIdProyect (req,res){

    try {
        //Execute query
        const {idProyect} = req.params;

        const calificaciones = await dbManager.Calificaciones.findAll ({
            where: {
                idProyect: idProyect
            }
        });
        
        //Send response
        res.json({
                data: calificaciones
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

async function deleteCalificacionesById (req,res) {

    try {
        const {idCalificaciones} = req.params;
    
        const calificacion = await dbManager.Calificaciones.destroy(
            {
                where: {
                    idCalificaciones:idCalificaciones
                }
            }
        );  
        res.send('Calificaciones with id: ' +  idCalificaciones + ' delete');
    
        } catch (e) {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
}

async function updateCalificaciones (req,res) {

    try {
        const {idCalificaciones} = req.params;
    
        const calificaciones = await dbManager.Calificaciones.update(
            {
                autor: req.body.autor,
                nombreProyecto: req.body.nombreProyecto,
                tutor: req.body.tutor,
                jurado: req.body.jurado,
                calificacion1: req.body.calificacion1,
                calificacion2: req.body.calificacion2,
                calificacion3: req.body.calificacion3,
                calificacion4: req.body.calificacion4,
                calificacion5: req.body.calificacion5,
                calificacion6: req.body.calificacion6,
                comentario1: req.body.comentario1,
                comentario2: req.body.comentario2,
                comentario3: req.body.comentario3,
                comentario4: req.body.comentario4,
                comentario5: req.body.comentario5,
                comentario6: req.body.comentario6,
                idProyect: req.body.idProyect
            }, {
                where: {
                    idCalificaciones:idCalificaciones, 
                }
            }
        );
    
        res.send('Calificaciones with id: ' + idCalificaciones + ' updated')
        } catch (e) {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
}


exports.updateCalificaciones = updateCalificaciones;
exports.deleteCalificacionesById = deleteCalificacionesById;
exports.findCalificacionesByIdProyect = findCalificacionesByIdProyect;
exports.createCalificacion = createCalificacion;
exports.findAllCalificaciones = findAllCalificaciones;