module.exports = (sequelize, Sequelize) => {
    const Calificaciones = sequelize.define ("Calificaciones", {
        idCalificaciones: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        autor: Sequelize.STRING,
        nombreProyecto: Sequelize.STRING,
        tutor: Sequelize.STRING,
        jurado: Sequelize.STRING,
        calificacion1: Sequelize.INTEGER,
        calificacion2: Sequelize.INTEGER,
        calificacion3: Sequelize.INTEGER,
        calificacion4: Sequelize.INTEGER,
        calificacion5: Sequelize.INTEGER,
        calificacion6: Sequelize.INTEGER,
        comentario1: Sequelize.STRING,
        comentario2: Sequelize.STRING,
        comentario3: Sequelize.STRING,
        comentario4: Sequelize.STRING,
        comentario5: Sequelize.STRING,
        comentario6: Sequelize.STRING
    }, {
        tableName: "Calificaciones"
    });
    return Calificaciones;
}