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

exports.createProyect = createProyect;
exports.findAllProyects = findAllProyects;
