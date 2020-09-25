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

async function deleteUserById (req, res ) {

        const {idUser} = req.params;

        const user = await dbManager.User.destroy(
            {
                where: {
                    idUser: idUser
                }
            },
            res.send('user with id: ' + idUser + ' delete')
        )
}

async function updateUserById (req,res) {

    const {idUser} = req.params;

    const user = await dbManager.User.update(
        {   username: req.body.username,
            password: req.body.password,
            usertype: req.body.usertype}, {
                where: {
                    idUser: idUser
                }
            },
            res.send('User with id: ' + idUser + ' update')
    )
}

async function findUserById (req,res) {
    try {
        //Execute query
        
        const {idUser} = req.params;
        const user = await dbManager.User.findOne (
            {
                where: {
                    idUser: idUser
                }
            }
        );
        
        //Send response
        res.json({
                data: user
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

exports.findUserById = findUserById;
exports.updateUserById = updateUserById;
exports.deleteUserById = deleteUserById;
exports.createUser = createUser;
exports.findAllUsers = findAllUsers;