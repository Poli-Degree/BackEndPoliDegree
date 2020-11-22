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
        objects: Sequelize.TEXT,
        metodologia: Sequelize.TEXT,
        teorico: Sequelize.TEXT,
        references: Sequelize.TEXT,
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