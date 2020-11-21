module.exports = (sequelize, Sequelize) => {
    const Promise = sequelize.define ("Promise", {
        idPromise: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: Sequelize.STRING,
        creationDate: Sequelize.STRING
    }, {
        tableName: "promises"
    });
    return Promise;
}