const dbManager = require ('../database.config/database.manager');

//Create new proyect

async function createProyect  (req, res) {

    const newProyectObject = {
        title: req.body.title,
        objects: req.body.objects,
        metodologia: req.body.metodologia,
        teorico: req.body.teorico,
        references: req.body.references,
        tutor: req.body.tutor,
        idUser: req.body.idUser
    }

 
    dbManager.Proyect.create(newProyectObject).then(
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

async function findAllProyects (req, res){
    try {
        //Execute query
        const proyects = await dbManager.Proyect.findAll ();
        
        //Send response
        res.json({
                data: proyects
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

async function findProyectByIdUser (req, res) {
    try {
        //Execute query
        const {idUser} = req.params;
        
        const proyect = await dbManager.Proyect.findAll ({
            where: {
                idUser: idUser
            }
        });
        
        //Send response
        res.json({
                data: proyect 
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

async function updateProyectByIdUser (req, res) {

    const {idUser} = req.params;

    const Proyect = await dbManager.Proyect.update (
        {   title: req.body.title,
            objects: req.body.objects,
            metodologia: req.body.metodologia,
            teorico: req.body.teorico,
            references: req.body.references}, 
                {where: {
                    idUser: idUser
                } 
            },
            res.send('Update Proyect')
            );

}

async function deleteProyect (req, res) {

        const {idProyect} = req.params;

        const proyect = await dbManager.Proyect.destroy(
            {
                where: {
                    idProyect: idProyect
                }
            },
            res.send('proyect with id: ' + idProyect + ' delete')
        )


}

exports.deleteProyect = deleteProyect;
exports.updateProyectByIdUser = updateProyectByIdUser;
exports.findProyectByIdUser = findProyectByIdUser;
exports.createProyect = createProyect;
exports.findAllProyects = findAllProyects;
