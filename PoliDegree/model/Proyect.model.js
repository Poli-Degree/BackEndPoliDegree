module.exports = (sequelize, Sequelize) => {
    const Proyect = sequelize.define ("Proyect",{
        idProyect: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
                type: Sequelize.STRING,
                unique: true
        },
        objects: Sequelize.STRING,
        metodologia: Sequelize.STRING,
        teorico: Sequelize.STRING,
        references: Sequelize.STRING,
        tutor: Sequelize.INTEGER
    }, {
        tableName: "proyects"
    });
    return Proyect;
}