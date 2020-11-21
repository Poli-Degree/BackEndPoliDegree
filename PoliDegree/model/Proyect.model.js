module.exports = (sequelize, Sequelize) => {
    const Proyect = sequelize.define ("Proyect",{
        idProyect: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
                type: Sequelize.STRING(1000),
                unique: true
        },
        objects: Sequelize.STRING(1000),
        metodologia: Sequelize.STRING(1000),
        teorico: Sequelize.STRING(1000),
        references: Sequelize.STRING(1000),
        tutor: Sequelize.INTEGER,
        jurado1: Sequelize.INTEGER,
        jurado2: Sequelize.INTEGER,
        acta: Sequelize.INTEGER,
        calificacion: Sequelize.INTEGER
    }, {
        tableName: "proyects"
    });
    return Proyect;
}