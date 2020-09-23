//IMPORT SEQUELIZE
const Sequelize = require('sequelize');
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require ("../database.config/db.connection");
//IMPORT MODELS
const UserModel = require ("../model/User.model");
const TaskModel = require ("../model/task.model");
const PromiseModel = require ("../model/Promise.model");
const ProyectModel = require ("../model/Proyect.model");
//INITIALIZE MODELS
const User = UserModel (sequelizeConnection,Sequelize);
const Task = TaskModel (sequelizeConnection, Sequelize);
const Promise = PromiseModel (sequelizeConnection, Sequelize);
const Proyect = ProyectModel (sequelizeConnection, Sequelize);

//CREATE RELATIONS BETWEEN MODELS
User.hasOne (Proyect, {foreignKey: 'idProyect', constraints: false});
Proyect.belongsTo(User, {foreignKey: 'idUser', constraints: false});

Proyect.hasMany (Task, {foreignKey: 'idTask', constraints: false});
Task.belongsTo (Proyect, {foreignKey: 'idProyect', constraint: false});

Proyect.hasMany (Promise, {foreignKey: 'idPromise', constraints: false});
Promise.belongsTo (Proyect, {foreignKey: 'idProyect', constraints: false});

//GROUP MODELS
const models = {
    User: User,
    Task: Task,
    Proyect: Proyect,
    Promise: Promise
};

//Create object to manage the models and database
const db = {
    ...models,
    sequelizeConnection
};

//EXPORT CONSTANT DB
module.exports = db;