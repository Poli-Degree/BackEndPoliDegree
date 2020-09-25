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

async function findAllTasksByIdProyect (req,res) {

    try {
        //Execute query
      
        const {idProyect} = req.params;
        const tasks = await dbManager.Task.findAll (
            {
                where: {
                    idProyect: idProyect
                }
            }
        );
        
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

async function deleteTaskById (req,res) {

   try {
    const {idTask} = req.params;

    const task = await dbManager.Task.destroy(
        {
            where: {
                idTask: idTask
            }
        }
    );  
    res.send('Task with id: ' + idTask + ' delete');

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
    
}

async function updateTaskById (req,res) {

    try {
    const {idTask} = req.params;

    const task = await dbManager.Task.update(
        {
            description: req.body.description,
            limitDate: req.body.limitDate
        }, {
            where: {
                idTask: idTask,
                
            }
        }
    );

    res.send('task with id: ' + idTask + ' updated')
    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

exports.updateTaskById = updateTaskById;
exports.deleteTaskById = deleteTaskById;
exports.findAllTasksByIdProyect = findAllTasksByIdProyect;
exports.createTask = createTask;
exports.findAllTask = findAllTask;