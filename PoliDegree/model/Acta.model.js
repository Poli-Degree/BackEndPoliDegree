module.exports = (sequelize, Sequelize) => {
    const Acta = sequelize.define ("Acta", {
        idActa: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fechaSus: Sequelize.DATE,
        autor: Sequelize.STRING,
        codigoEstudiante: Sequelize.INTEGER,
        programa: Sequelize.STRING(1000),
        nombreProyecto: Sequelize.STRING(1000),
        tutor: Sequelize.STRING,
        notaTutor: Sequelize.INTEGER,
        jurado1: Sequelize.STRING,
        notaJurado1: Sequelize.INTEGER,
        jurado2: Sequelize.STRING,
        notaJurado2: Sequelize.INTEGER
       
    }, {
        tableName: "Actas"
    });
    return Acta;
}