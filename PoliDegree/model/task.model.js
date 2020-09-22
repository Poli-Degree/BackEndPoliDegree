module.exports = (sequelize, Sequelize) => {
        const Task = sequelize.define ("Task", {
            idTask: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            description: Sequelize.STRING,
            creationDate: Sequelize.DATE,
            limitDate: Sequelize.DATE
        }, {
            tableName: "tasks"
        });
        return Task;
}