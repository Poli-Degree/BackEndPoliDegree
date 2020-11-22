module.exports = (sequelize, Sequelize) => {
    const Promise = sequelize.define ("Promise", {
        idPromise: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: Sequelize.TEXT,
        creationDate: Sequelize.STRING,
        status: Sequelize.INTEGER
    }, {
        tableName: "promises"
    });
    return Promise;
}