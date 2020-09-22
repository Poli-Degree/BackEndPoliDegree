const dbManager = require ('../database.config/database.manager');

async function createTask (req,res) {

    const newTaskObject = {
        description: req.body.description,
        creationDate: req.body.creationDate,
        limitDate: req.body.limitDate,
        idProyect: req.body.idProyect
    }

    dbManager.Task.create(newTaskObject).then(
        data => {
            res.send(data);
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

async function findAllTask (req, res){
    try {
        //Execute query
        const tasks = await dbManager.Task.findAll ();
        
        //Send response
        res.json({
                data: tasks
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

exports.createTask = createTask;
exports.findAllTask = findAllTask;