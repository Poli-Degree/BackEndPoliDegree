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

exports.createPromise = createPromise;
exports.findAllPromises = findAllPromises;