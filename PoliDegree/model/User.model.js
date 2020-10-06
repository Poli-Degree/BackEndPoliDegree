module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User",  {
        idUser: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            unique: true
        },
        password: Sequelize.STRING,
        usertype: Sequelize.STRING,
        email: Sequelize.STRING
        }, {
            tableName: "users"
        });
        return User;
}