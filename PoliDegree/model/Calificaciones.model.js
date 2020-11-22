module.exports = (sequelize, Sequelize) => {
    const Calificaciones = sequelize.define ("Calificaciones", {
        idCalificaciones: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        autor: Sequelize.STRING(1000),
        nombreProyecto: Sequelize.STRING(1000),
        tutor: Sequelize.STRING,
        jurado: Sequelize.STRING,
        calificacion1: Sequelize.INTEGER,
        calificacion2: Sequelize.INTEGER,
        calificacion3: Sequelize.INTEGER,
        calificacion4: Sequelize.INTEGER,
        calificacion5: Sequelize.INTEGER,
        calificacion6: Sequelize.INTEGER,
        comentario1: Sequelize.TEXT,
        comentario2: Sequelize.TEXT,
        comentario3: Sequelize.TEXT,
        comentario4: Sequelize.TEXT,
        comentario5: Sequelize.TEXT,
        comentario6: Sequelize.TEXT
    }, {
        tableName: "Calificaciones"
    });
    return Calificaciones;
}