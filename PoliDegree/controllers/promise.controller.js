const dbManager = require('../database.config/database.manager');

async function createPromise (req,res) {

    const newPromiseObject = {
        description: req.body.description,
        creationDate: req.body.creationDate,
        idProyect: req.body.idProyect
    }

    dbManager.Promise.create(newPromiseObject).then (
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

async function findAllPromises (req, res){
    try {
        //Execute query
        const promises = await dbManager.Promise.findAll ();
        
        //Send response
        res.json({
                data: promises
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

async function findPromisesByIdProyect (req,res){

    try {
        //Execute query
        const {idProyect} = req.params;

        const promises = await dbManager.Promise.findAll ({
            where: {
                idProyect: idProyect
            }
        });
        
        //Send response
        res.json({
                data: promises
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

async function deletePromiseById (req,res) {

    try {
        const {idPromise} = req.params;
    
        const promise = await dbManager.Promise.destroy(
            {
                where: {
                    idPromise: idPromise
                }
            }
        );  
        res.send('Promise with id: ' + idPromise + ' delete');
    
        } catch (e) {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
}

async function updatePromises (req,res) {

    try {
        const {idPromise} = req.params;
    
        const promise = await dbManager.Promise.update(
            {
                description: req.body.description
            }, {
                where: {
                    idPromise: idPromise,
                    
                }
            }
        );
    
        res.send('Promise with id: ' + idPromise + ' updated')
        } catch (e) {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
}


exports.updatePromises = updatePromises;
exports.deletePromiseById = deletePromiseById;
exports.findPromisesByIdProyect = findPromisesByIdProyect;
exports.createPromise = createPromise;
exports.findAllPromises = findAllPromises;