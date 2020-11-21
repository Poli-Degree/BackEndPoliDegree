module.exports = (sequelize, Sequelize) => {
    const Proyect = sequelize.define ("Proyect",{
        idProyect: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
                type: Sequelize.STRING(1234),
                unique: true
        },
        objects: Sequelize.STRING(1234),
        metodologia: Sequelize.STRING(1234),
        teorico: Sequelize.STRING(1234),
        references: Sequelize.STRING(1234),
        tutor: Sequelize.INTEGER,
        jurado1: Sequelize.INTEGER,
        jurado1: Sequelize.INTEGER,
        acta: Sequelize.INTEGER,
        calificacion: Sequelize.INTEGER
    }, {
        tableName: "proyects"
    });
    return Proyect;
}