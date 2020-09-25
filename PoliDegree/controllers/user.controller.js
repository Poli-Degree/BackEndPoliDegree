const dbManager = require ('../database.config/database.manager');

//Creation new user

async function createUser (req,res) {

    const newUserObject = {
        username: req.body.username,
        password: req.body.password,
        usertype: req.body.usertype,
        email: req.body.email
    }

    dbManager.User.create(newUserObject).then(
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

//FindAll users
async function findAllUsers (req, res){
    try {
        //Execute query
        const users = await dbManager.User.findAll ();
        
        //Send response
        res.json({
                data: users
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

exports.createUser = createUser;
exports.findAllUsers = findAllUsers;